import { pages, projects, repositoryLink, gitCommits } from './content.js';
import { themes, readTheme, saveTheme } from './themes.js';
import { initTerminal } from './terminal.js';
import { findFiles } from './files.js';
import { escapeHTML as e } from './pages.js';
import { initEditor } from './editor.js';

const $ = selector => document.querySelector(selector);
const root = document.documentElement;
let content;
let drawer = null;
let drawerTrigger = null;
let storage;
let fileIndex = 0;
let activeGitFilter = 'all';
let activeGitTab = 'history';
try { storage = window.localStorage; } catch { /* The workspace also works without storage. */ }

function renderGitCommits() {
  const list = $('#git-commit-list');
  if (!list) return;
  const filtered = activeGitFilter === 'all'
    ? gitCommits
    : gitCommits.filter(c => c.repo === activeGitFilter);
  list.innerHTML = filtered.map(c => `
    <${c.url ? `a href="${e(c.url)}" target="_blank" rel="noopener noreferrer"` : 'div'} class="git-commit-row" data-repo="${e(c.repo)}" data-hash="${e(c.hash)}">
      <div class="git-commit-msg" title="${e(c.message)}">${e(c.message)}</div>
      <div class="git-commit-meta">
        <img src="./assets/avatar.jpg" alt="" class="git-avatar-mini" width="14" height="14">
        <span class="git-author">${e(c.author)}</span>
        <span class="git-sep">·</span>
        <span class="git-time">${e(c.time)}</span>
        <span class="git-sep">·</span>
        <span class="git-repo-pill">${e(c.repo)}</span>
        <span class="git-sep">·</span>
        <span class="git-hash">${e(c.hash)}</span>
      </div>
      <div class="git-tooltip">${c.url ? 'View on GitHub ↗' : `View Commit Diff ${e(c.hash)}`}</div>
    </${c.url ? 'a' : 'div'}>
  `).join('');
}

function switchGitTab(tab) {
  activeGitTab = tab;
  document.querySelectorAll('.git-tab').forEach(btn => {
    const isActive = btn.dataset.gitTab === tab;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', isActive);
  });
  const historyView = $('#git-history-view');
  const changesView = $('#git-changes-view');
  if (historyView && changesView) {
    historyView.hidden = tab !== 'history';
    changesView.hidden = tab !== 'changes';
  }
}

function filterGitCommits(repo) {
  activeGitFilter = repo;
  document.querySelectorAll('.git-filter-pill').forEach(btn => {
    const isActive = btn.dataset.filterRepo === repo;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive);
  });
  renderGitCommits();
}

function fileLink(page, className) {
  return `<a class="${className}" href="#${page.id}" data-page="${page.id}"><span class="file-icon ${page.id}" aria-hidden="true">${page.icon}</span>${page.file}</a>`;
}
$('#file-nav').innerHTML = pages.map(page => fileLink(page, 'file-link')).join('');
$('#project-count').textContent = String(projects.length).padStart(2, '0');
$('#project-nav').innerHTML = projects.map(project => `<a class="file-link project-file" href="#projects/${e(project.id)}" data-project="${e(project.id)}"><span class="language-icon language-${e(project.tech[0].toLowerCase())}" aria-hidden="true">${e(project.tech[0] === 'TypeScript' ? 'TS' : project.tech[0].slice(0, 1))}</span><span class="project-file-name">${e(project.name)}</span>${repositoryLink(project) ? '' : '<span class="local-marker" title="Local / in development">local</span>'}</a>`).join('');
$('#theme-options').innerHTML = themes.map((theme, index) => `<button class="theme-option" data-theme-id="${theme.id}" aria-pressed="false"><span class="theme-option-top"><span>${theme.name}</span><span class="theme-check" aria-hidden="true">✓</span></span><span class="theme-chips">${theme.colors.map(color => `<span class="theme-chip" style="background:${color}" aria-hidden="true"></span>`).join('')}${index === 0 ? '<span class="favorite-label">♡ my favorite</span>' : ''}</span></button>`).join('');

function announce(message) { $('#announcer').textContent = message; }

function applyTheme(value, notify = true) {
  const id = saveTheme(value, storage);
  const theme = themes.find(theme => theme.id === id);
  root.dataset.theme = id;
  document.querySelectorAll('[data-theme-id]').forEach(button => button.setAttribute('aria-pressed', button.dataset.themeId === id));
  $('#current-swatches').innerHTML = theme.colors.map((color, index) => `<span style="background:${color}" title="${theme.name} swatch ${index + 1}: ${color}" aria-label="${color}"></span>`).join('');
  $('#theme-note').textContent = theme.note;
  const statusThemeName = $('#status-theme-name');
  if (statusThemeName) statusThemeName.textContent = theme.name;
  else $('#status-theme').textContent = theme.name;
  $('#theme-source').href = theme.source;
  document.querySelector('meta[name="theme-color"]').content = getComputedStyle(root).getPropertyValue('--bg').trim();
  if (notify) announce(`Theme changed to ${theme.name}`);
}
applyTheme(readTheme(storage), false);
requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add('theme-ready')));
renderGitCommits();

const editor = initEditor({
  openFiles: trigger => openPicker('file-picker', trigger),
  announce,
  onActive: element => { content = element; },
});

function syncControls() {
  const mobile = matchMedia('(max-width: 760px)').matches;
  const explorerOpen = mobile ? drawer === 'explorer' : !document.body.classList.contains('explorer-hidden');
  const explorerToggle = $('#explorer-toggle');
  if (explorerToggle) {
    explorerToggle.setAttribute('aria-expanded', String(explorerOpen));
    explorerToggle.classList.toggle('selected', explorerOpen);
  }
  const terminal = $('#terminal');
  const terminalOpen = terminal ? !terminal.hidden : false;
  document.querySelectorAll('[data-terminal-toggle]').forEach(button => {
    button.setAttribute('aria-expanded', String(terminalOpen));
    button.classList.toggle('selected', terminalOpen);
  });
  const gitPanel = $('#git-panel');
  const gitOpen = gitPanel ? !gitPanel.hidden : false;
  const gitToggle = $('#git-toggle');
  if (gitToggle) {
    gitToggle.setAttribute('aria-expanded', String(gitOpen));
    gitToggle.classList.toggle('selected', gitOpen);
  }
}

function closeDrawer(restore = true) {
  if (!drawer) return;
  $(`#${drawer}`).removeAttribute('role');
  $(`#${drawer}`).removeAttribute('aria-modal');
  document.body.classList.remove('explorer-open', 'git-panel-open');
  if (drawer === 'git-panel') {
    const gitPanel = $('#git-panel');
    if (gitPanel) gitPanel.hidden = true;
  }
  document.querySelectorAll('.editor, .titlebar, .statusbar').forEach(element => { element.inert = false; });
  $('#drawer-backdrop').hidden = true;
  drawer = null;
  if (restore && drawerTrigger) drawerTrigger.focus();
  syncControls();
}

function toggleExplorer(trigger) {
  if (!matchMedia('(max-width: 760px)').matches) {
    document.body.classList.toggle('explorer-hidden');
    syncControls();
    return;
  }
  if (drawer === 'explorer') { closeDrawer(); return; }
  if (drawer) closeDrawer(false);
  drawer = 'explorer';
  drawerTrigger = trigger;
  const element = $('#explorer');
  element.setAttribute('role', 'dialog');
  element.setAttribute('aria-modal', 'true');
  document.body.classList.add('explorer-open');
  document.querySelectorAll('.editor, .titlebar, .statusbar').forEach(element => { element.inert = true; });
  $('#drawer-backdrop').hidden = false;
  syncControls();
  element.querySelector('button, a').focus();
}

function toggleGitPanel(trigger) {
  const panel = $('#git-panel');
  if (!panel) return;
  const mobile = matchMedia('(max-width: 760px)').matches;
  if (!mobile) {
    const willOpen = panel.hidden;
    panel.hidden = !willOpen;
    document.body.classList.toggle('git-panel-open', willOpen);
    syncControls();
    if (willOpen) panel.querySelector('a, button')?.focus();
    else if (trigger?.focus) trigger.focus();
    return;
  }
  if (drawer === 'git-panel') { closeDrawer(); return; }
  if (drawer) closeDrawer(false);
  drawer = 'git-panel';
  drawerTrigger = trigger;
  panel.hidden = false;
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-modal', 'true');
  document.body.classList.add('git-panel-open');
  document.querySelectorAll('.editor, .titlebar, .statusbar').forEach(element => { element.inert = true; });
  $('#drawer-backdrop').hidden = false;
  syncControls();
  panel.querySelector('a, button')?.focus();
}

function openPicker(id, trigger) {
  closeDrawer(false);
  const picker = $(`#${id}`);
  if (picker.open) return;
  picker.returnValue = '';
  picker.showModal();
  picker.addEventListener('close', () => {
    if (picker.returnValue === 'selected') { content.focus({ preventScroll: true }); return; }
    const focusTarget = trigger?.getClientRects().length ? trigger : $('#explorer-toggle');
    focusTarget.focus({ preventScroll: true });
  }, { once: true });
  if (id === 'file-picker') {
    $('#file-query').value = '';
    updateFiles();
    $('#file-query').focus();
  } else $('#theme-options button[aria-pressed="true"]').focus();
}

function selectFile(index) {
  const buttons = [...document.querySelectorAll('[data-open-route]')];
  fileIndex = buttons.length ? (index + buttons.length) % buttons.length : 0;
  buttons.forEach((button, index) => button.classList.toggle('active', index === fileIndex));
  buttons[fileIndex]?.scrollIntoView({ block: 'nearest' });
  if (buttons.length) $('#file-result-status').textContent = `${buttons.length} matching files. ${buttons[fileIndex].querySelector('.file-result-name').textContent} selected.`;
}

function highlightMatch(value, positions = []) {
  return [...value].map((char, index) => positions.includes(index) ? `<mark>${e(char)}</mark>` : e(char)).join('');
}

function updateFiles() {
  const query = $('#file-query').value;
  const matches = findFiles(query);
  if (!query.trim()) matches.sort((a, b) => {
    const recent = editor.state.recent;
    return (recent.indexOf(a.route) < 0 ? Infinity : recent.indexOf(a.route)) - (recent.indexOf(b.route) < 0 ? Infinity : recent.indexOf(b.route));
  });
  $('#file-results').innerHTML = matches.length ? matches.map(file => `<button class="file-result" data-open-route="${e(file.route)}"><span class="file-icon" aria-hidden="true">${file.route.includes('/') ? '⌑' : 'M↓'}</span><span><span class="file-result-name">${highlightMatch(file.name, file.nameMatches)}</span><span class="file-result-path">${highlightMatch(file.path, file.pathMatches)}</span></span><span class="file-result-enter" aria-hidden="true">↵</span></button>`).join('') : '<p class="empty-files">No matching files. Try a project name or “about”.</p>';
  $('#file-result-status').textContent = `${matches.length} matching files`;
  selectFile(0);
}

function openSelectedFile(split = false) {
  const selected = document.querySelector('#file-results .file-result.active');
  if (!selected) return;
  if (split) {
    $('#file-picker').close('selected');
    editor.split('right', selected.dataset.openRoute);
  } else selected.click();
}
$('#file-open-split').addEventListener('click', () => openSelectedFile(true));
$('#file-query').addEventListener('input', updateFiles);
$('#file-picker').addEventListener('keydown', event => {
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault();
    selectFile(fileIndex + (event.key === 'ArrowDown' ? 1 : -1));
    if (event.target !== $('#file-query')) document.querySelector('#file-results .file-result.active')?.focus();
  }
  if (event.key === 'Enter' && (event.target === $('#file-query') || event.metaKey || event.ctrlKey)) {
    event.preventDefault();
    openSelectedFile(event.metaKey || event.ctrlKey);
  }
});
$('#palette').addEventListener('keydown', event => {
  if (!['ArrowDown', 'ArrowUp'].includes(event.key)) return;
  event.preventDefault();
  const buttons = [...document.querySelectorAll('[data-theme-id]')];
  const index = buttons.indexOf(document.activeElement);
  buttons[(index + (event.key === 'ArrowDown' ? 1 : -1) + buttons.length) % buttons.length].focus();
});
document.querySelectorAll('dialog').forEach(picker => picker.addEventListener('click', event => {
  const rect = picker.getBoundingClientRect();
  if (event.target === picker && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) picker.close();
}));

initTerminal({
  navigate: route => editor.navigate(route),
  applyTheme,
});

function initExplorerResizer() {
  const resizer = $('#explorer-resizer');
  let drag = null;
  let preferredWidth = null;
  try {
    const saved = storage?.getItem('levi-explorer-width');
    if (/^\d+px$/.test(saved)) preferredWidth = Number.parseInt(saved, 10);
  } catch { /* Storage is optional. */ }
  function setWidth(width = preferredWidth) {
    if (matchMedia('(max-width: 760px)').matches) return;
    const max = Math.min(500, window.innerWidth - 400);
    const defaultWidth = Number.parseInt(getComputedStyle(root).getPropertyValue('--explorer-default-width'), 10);
    const value = Math.round(Math.max(160, Math.min(max, width ?? defaultWidth)));
    root.style.setProperty('--explorer-width', `${value}px`);
    resizer.setAttribute('aria-valuenow', value);
    resizer.setAttribute('aria-valuemax', max);
    resizer.setAttribute('aria-valuetext', `Project panel width ${value} pixels`);
  }
  function saveWidth() {
    preferredWidth = $('#explorer').getBoundingClientRect().width;
    try { storage?.setItem('levi-explorer-width', `${preferredWidth}px`); } catch { /* Storage is optional. */ }
  }
  resizer.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    drag = { startX: event.clientX, initialWidth: $('#explorer').getBoundingClientRect().width };
    resizer.setPointerCapture(event.pointerId);
    document.body.classList.add('explorer-resizing');
    event.preventDefault();
  });
  resizer.addEventListener('pointermove', event => {
    if (!drag) return;
    setWidth(drag.initialWidth + event.clientX - drag.startX);
  });
  const endDrag = () => {
    if (drag) {
      drag = null;
      document.body.classList.remove('explorer-resizing');
      saveWidth();
    }
  };
  resizer.addEventListener('pointerup', endDrag);
  resizer.addEventListener('pointercancel', endDrag);
  resizer.addEventListener('lostpointercapture', endDrag);
  resizer.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    setWidth(event.key === 'Home' ? 160 : event.key === 'End' ? 500 : $('#explorer').getBoundingClientRect().width + (event.key === 'ArrowRight' ? 25 : -25));
    saveWidth();
  });
  resizer.addEventListener('dblclick', () => {
    preferredWidth = null;
    setWidth();
    try { storage?.removeItem('levi-explorer-width'); } catch { /* Storage is optional. */ }
  });
  window.addEventListener('resize', () => { drag = null; document.body.classList.remove('explorer-resizing'); setWidth(); });
  setWidth();
}
initExplorerResizer();

function makeDraggable(dialog, handle) {
  if (!dialog || !handle) return;
  let drag = null;
  handle.addEventListener('pointerdown', event => {
    if (event.button !== 0 || event.target.closest('button, input, a')) return;
    const rect = dialog.getBoundingClientRect();
    drag = {
      startX: event.clientX,
      startY: event.clientY,
      initialLeft: rect.left,
      initialTop: rect.top,
      width: rect.width,
      height: rect.height,
    };
    handle.setPointerCapture(event.pointerId);
    document.body.classList.add('dialog-dragging');
    event.preventDefault();
  });
  handle.addEventListener('pointermove', event => {
    if (!drag) return;
    const dx = event.clientX - drag.startX;
    const dy = event.clientY - drag.startY;
    const maxLeft = window.innerWidth - drag.width - 10;
    const maxTop = window.innerHeight - drag.height - 10;
    const newLeft = Math.max(10, Math.min(maxLeft, drag.initialLeft + dx));
    const newTop = Math.max(10, Math.min(maxTop, drag.initialTop + dy));
    dialog.style.position = 'fixed';
    dialog.style.left = `${newLeft}px`;
    dialog.style.top = `${newTop}px`;
    dialog.style.margin = '0';
    dialog.style.right = 'auto';
    dialog.style.bottom = 'auto';
  });
  const endDrag = () => {
    drag = null;
    document.body.classList.remove('dialog-dragging');
  };
  handle.addEventListener('pointerup', endDrag);
  handle.addEventListener('pointercancel', endDrag);
  handle.addEventListener('lostpointercapture', endDrag);
  const resetPosition = () => {
    endDrag();
    for (const property of ['position', 'left', 'top', 'right', 'bottom', 'margin']) dialog.style.removeProperty(property);
  };
  window.addEventListener('resize', resetPosition);
  dialog.addEventListener('close', resetPosition);
}

makeDraggable($('#palette'), $('#palette .picker-heading'));
makeDraggable($('#file-picker'), $('#file-picker .file-picker-search'));

document.addEventListener('click', event => {
  const target = event.target.closest('button, a');
  if (!target) return;
  if (target.matches('.skip-link')) {
    event.preventDefault();
    content.focus({ preventScroll: true });
    return;
  }
  if (target.matches('[data-theme-id]')) applyTheme(target.dataset.themeId);
  if (target.matches('#explorer-toggle')) toggleExplorer(target);
  if (target.matches('#git-toggle')) toggleGitPanel(target);
  if (target.matches('#git-panel-close')) toggleGitPanel($('#git-toggle'));
  if (target.matches('[data-git-tab]')) { switchGitTab(target.dataset.gitTab); return; }
  if (target.matches('[data-filter-repo]')) { filterGitCommits(target.dataset.filterRepo); return; }
  if (target.matches('#status-theme, [data-open-palette]')) openPicker('palette', target);
  if (target.matches('[data-open-files]')) openPicker('file-picker', target);
  if (target.matches('[data-close-dialog]')) target.closest('dialog').close();
  if (target.matches('[data-open-route]')) {
    $('#file-picker').close('selected');
    editor.navigate(target.dataset.openRoute);
  }
  if (target.matches('a[href^="#"]') && !target.classList.contains('skip-link')) {
    const hadDrawer = Boolean(drawer);
    closeDrawer(false);
    if (hadDrawer && event.defaultPrevented) content.focus({ preventScroll: true });
  }
});
$('#drawer-backdrop').addEventListener('click', () => closeDrawer());
document.addEventListener('keydown', event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'p' && !event.shiftKey && !event.altKey) {
    event.preventDefault();
    if ($('#file-picker').open) selectFile(fileIndex + 1);
    else if (!document.querySelector('dialog[open]')) openPicker('file-picker', document.activeElement);
  }
  if (event.key === 'Escape' && !document.querySelector('dialog[open]')) {
    if (drawer) { event.preventDefault(); closeDrawer(); return; }
    const gitPanel = $('#git-panel');
    if (gitPanel && !gitPanel.hidden) {
      event.preventDefault();
      toggleGitPanel($('#git-toggle'));
      return;
    }
  }
  if ((event.metaKey || event.ctrlKey) && !event.altKey && !document.querySelector('dialog[open]')) {
    if (event.key.toLowerCase() === 'b') { event.preventDefault(); toggleExplorer($('#explorer-toggle')); }
    if (event.key.toLowerCase() === 'j') { event.preventDefault(); $('.statusbar [data-terminal-toggle]').click(); }
  }
  if (!drawer) return;
  if (event.key === 'Tab') {
    const controls = [...$(`#${drawer}`).querySelectorAll('a, button, summary')].filter(element => element.getClientRects().length);
    const first = controls[0], last = controls.at(-1);
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});
window.addEventListener('resize', () => {
  if (drawer && !matchMedia('(max-width: 760px)').matches) closeDrawer();
  syncControls();
});
syncControls();

$('.statusbar').addEventListener('keydown', event => {
  if (!['ArrowLeft', 'ArrowRight'].includes(event.key) || event.metaKey || event.ctrlKey || event.altKey) return;
  const buttons = [...document.querySelectorAll('.statusbar button')].filter(button => button.getClientRects().length);
  const index = buttons.indexOf(document.activeElement);
  if (index < 0) return;
  event.preventDefault();
  buttons[(index + (event.key === 'ArrowRight' ? 1 : -1) + buttons.length) % buttons.length].focus();
});
