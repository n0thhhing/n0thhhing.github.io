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
    const willOpen = document.body.classList.contains('explorer-hidden');
    document.body.classList.toggle('explorer-hidden');
    if (willOpen) editor.unzoom?.();
    syncControls();
    return;
  }
  if (drawer === 'explorer') { closeDrawer(); return; }
  if (drawer) closeDrawer(false);
  editor.unzoom?.();
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
    if (willOpen) editor.unzoom?.();
    syncControls();
    if (willOpen) panel.querySelector('a, button')?.focus();
    else if (trigger?.focus) trigger.focus();
    return;
  }
  if (drawer === 'git-panel') { closeDrawer(); return; }
  if (drawer) closeDrawer(false);
  editor.unzoom?.();
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
  unzoom: () => editor.unzoom?.(),
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


// Small document actions keep project write-ups useful as both editor previews and standalone case studies.
document.addEventListener('click', async event => {
  const button = event.target instanceof Element ? event.target.closest('[data-doc-reading-width], [data-doc-copy-link], [data-doc-print]') : null;
  if (!button) return;
  const article = button.closest('.project-document');
  if (!article) return;
  if (button.hasAttribute('data-doc-reading-width')) {
    const enabled = article.classList.toggle('reading-focus');
    updateProjectReader(article.closest('.content'));
    button.setAttribute('aria-pressed', String(enabled));
    button.textContent = enabled ? 'Exit focus' : 'Focus reading';
    const announcer = document.querySelector('#announcer');
    if (announcer) announcer.textContent = enabled ? 'Focused reading width enabled' : 'Focused reading width disabled';
  } else if (button.hasAttribute('data-doc-copy-link')) {
    const url = new URL(window.location.href);
    url.hash = `projects/${article.querySelector('.project-doc-overview')?.id?.replace('doc-', '').replace(/-overview$/, '') || ''}`;
    try {
      await navigator.clipboard.writeText(url.href);
      button.textContent = 'Copied!';
      const announcer = document.querySelector('#announcer');
      if (announcer) announcer.textContent = 'Project link copied';
      window.setTimeout(() => { if (button.isConnected) button.textContent = 'Copy link'; }, 1400);
    } catch {
      button.textContent = 'Select URL above';
      const announcer = document.querySelector('#announcer');
      if (announcer) announcer.textContent = 'Clipboard unavailable. Copy the project URL from the address bar.';
    }
  } else if (button.hasAttribute('data-doc-print')) {
    window.print();
  }
});

// Outline navigation stays within the active Zed-style project document.
document.addEventListener('click', event => {
  const trigger = event.target instanceof Element ? event.target.closest('[data-document-target]') : null;
  if (!trigger) return;
  event.preventDefault(); event.stopPropagation();
  const pane = trigger.closest('.editor-pane') ?? document;
  const key = trigger.getAttribute('data-document-target');
  const target = [...pane.querySelectorAll('[data-doc-section]')].find(node => node.getAttribute('data-doc-section') === key);
  if (!target) return;
  pane.querySelectorAll('.project-outline-link').forEach(link => link.removeAttribute('aria-current'));
  trigger.setAttribute('aria-current','location');
  target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
  const announcer=document.querySelector('#announcer');
  if(announcer) announcer.textContent=`Jumped to ${trigger.getAttribute('data-document-label')||'section'}`;
}, true);


// Reading flow for the rendered project documents. Each editor pane keeps its own progress and active section.
function updateProjectReader(contentPane) {
  if (!(contentPane instanceof Element)) return;
  const article = contentPane.querySelector('.project-document');
  if (!article) return;
  const sections = [...article.querySelectorAll('[data-doc-section]')];
  if (!sections.length) return;

  const progressTrack = article.querySelector('[data-doc-reading-track]');
  const progressFill = article.querySelector('[data-doc-reading-progress]');
  const progressCount = article.querySelector('[data-doc-reading-count]');
  const currentLabel = article.querySelector('[data-doc-reading-section]');
  const maxScroll = contentPane.scrollHeight - contentPane.clientHeight;
  const progress = maxScroll > 1 ? Math.max(0, Math.min(100, Math.round(contentPane.scrollTop / maxScroll * 100))) : 100;
  if (progressTrack) progressTrack.setAttribute('aria-valuenow', String(progress));
  if (progressFill) progressFill.style.width = `${progress}%`;
  if (progressCount) progressCount.textContent = `${progress}%`;

  const marker = contentPane.getBoundingClientRect().top + 112;
  let active = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= marker) active = section;
    else break;
  }
  const activeId = active.dataset.docSection;
  article.dataset.activeDocSection = activeId;
  const activeLink = [...article.querySelectorAll('[data-document-target]')].find(link => link.dataset.documentTarget === activeId);
  article.querySelectorAll('.project-outline-link').forEach(link => {
    if (link === activeLink) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  if (currentLabel) currentLabel.textContent = activeLink?.dataset.documentLabel || active.querySelector('h1, h2')?.textContent?.trim() || 'Overview';

  const nextButton = article.querySelector('[data-doc-next-section]');
  if (nextButton) {
    const index = sections.indexOf(active);
    const hasNext = index >= 0 && index < sections.length - 1;
    nextButton.disabled = !hasNext;
    nextButton.title = hasNext ? `Jump to ${sections[index + 1].querySelector('h1, h2')?.textContent?.trim() || 'next section'}` : 'You are at the last section';
  }
  const outlineButton = article.querySelector('[data-doc-outline]');
  if (outlineButton) {
    const hidden = article.classList.contains('outline-hidden') || article.classList.contains('reading-focus');
    outlineButton.setAttribute('aria-pressed', String(hidden));
    outlineButton.textContent = hidden ? 'Show outline' : 'Hide outline';
  }
}

function refreshProjectReaders() {
  document.querySelectorAll('.content').forEach(updateProjectReader);
}

let readerRefreshFrame = 0;
const readerMutationObserver = new MutationObserver(records => {
  const projectDocumentAdded = records.some(record => [...record.addedNodes].some(node =>
    node instanceof Element && (node.matches('.project-document') || node.querySelector('.project-document'))
  ));
  if (projectDocumentAdded && !readerRefreshFrame) {
    readerRefreshFrame = requestAnimationFrame(() => {
      readerRefreshFrame = 0;
      refreshProjectReaders();
    });
  }
});
readerMutationObserver.observe(document.body, { childList: true, subtree: true });

document.addEventListener('scroll', event => {
  const scroller = event.target instanceof Element ? event.target.closest('.content') : null;
  if (scroller) updateProjectReader(scroller);
}, true);
window.addEventListener('resize', refreshProjectReaders);
requestAnimationFrame(refreshProjectReaders);

document.addEventListener('click', event => {
  const button = event.target instanceof Element ? event.target.closest('[data-doc-outline], [data-doc-next-section]') : null;
  if (!button) return;
  const article = button.closest('.project-document');
  if (!article) return;

  if (button.hasAttribute('data-doc-outline')) {
    const outlineIsHidden = article.classList.contains('outline-hidden') || article.classList.contains('reading-focus');
    article.classList.remove('reading-focus');
    article.classList.toggle('outline-hidden', !outlineIsHidden);
    updateProjectReader(article.closest('.content'));
    announce(outlineIsHidden ? 'Document outline shown' : 'Document outline hidden');
    return;
  }

  const sections = [...article.querySelectorAll('[data-doc-section]')];
  const currentIndex = sections.findIndex(section => section.dataset.docSection === article.dataset.activeDocSection);
  const next = sections[Math.min(sections.length - 1, Math.max(0, currentIndex + 1))];
  if (!next || next === sections[currentIndex]) return;
  next.scrollIntoView({
    behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    block: 'start'
  });
  announce(`Jumped to ${next.querySelector('h1, h2')?.textContent?.trim() || 'next section'}`);
});


document.addEventListener('keydown', event => {
  const toolbar = event.target instanceof Element ? event.target.closest('.project-reading-tools') : null;
  if (!toolbar || !['ArrowLeft', 'ArrowRight'].includes(event.key) || event.metaKey || event.ctrlKey || event.altKey) return;
  const buttons = [...toolbar.querySelectorAll('button:not(:disabled)')].filter(button => button.getClientRects().length);
  const index = buttons.indexOf(document.activeElement);
  if (index < 0 || buttons.length < 2) return;
  event.preventDefault();
  buttons[(index + (event.key === 'ArrowRight' ? 1 : -1) + buttons.length) % buttons.length].focus();
});


// Project-specific execution flow explorer: switch paths, inspect individual stages, and play the trace.
const executionFlowTimers = new WeakMap();

function stopExecutionFlow(root) {
  const timer = executionFlowTimers.get(root);
  if (timer) window.clearInterval(timer);
  executionFlowTimers.delete(root);
  root.dataset.flowPlaying = 'false';
  const playButton = root.querySelector('[data-flow-action="play"]');
  if (playButton) {
    playButton.textContent = '▶ Play trace';
    playButton.setAttribute('aria-pressed', 'false');
    playButton.setAttribute('aria-label', 'Play execution trace');
  }
}

function getExecutionFlowPath(root) {
  const selected = root.querySelector('[data-flow-scenario="' + CSS.escape(root.dataset.flowActiveScenario || '') + '"]');
  return selected ? (selected.dataset.flowSteps || '').split('>').filter(Boolean) : [];
}

function updateExecutionFlow(root) {
  if (!root || !root.isConnected) return;
  const path = getExecutionFlowPath(root);
  if (!path.length) return;
  let step = Number.parseInt(root.dataset.flowStep || '0', 10);
  step = Math.max(0, Math.min(path.length - 1, Number.isFinite(step) ? step : 0));
  root.dataset.flowStep = String(step);
  const currentId = path[step];
  const selectedId = root.dataset.flowSelected || currentId;
  const scenarioButton = root.querySelector('[data-flow-scenario].is-selected');
  const totalProgress = path.length > 1 ? Math.round(step / (path.length - 1) * 100) : 100;

  root.querySelectorAll('[data-flow-scenario]').forEach(button => {
    const active = button.dataset.flowScenario === root.dataset.flowActiveScenario;
    button.classList.toggle('is-selected', active);
    button.setAttribute('aria-pressed', String(active));
  });
  const scenarioDescription = root.querySelector('[data-flow-scenario-description]');
  if (scenarioDescription && scenarioButton) scenarioDescription.textContent = scenarioButton.dataset.flowSummary || '';

  const nodeButtons = [...root.querySelectorAll('[data-flow-node]')];
  nodeButtons.forEach(button => {
    const id = button.dataset.flowNode;
    const pathIndex = path.indexOf(id);
    const onPath = pathIndex >= 0;
    button.classList.toggle('is-on-path', onPath);
    button.classList.toggle('is-off-path', !onPath);
    button.classList.toggle('is-visited', onPath && pathIndex < step);
    button.classList.toggle('is-current-step', id === currentId);
    button.classList.toggle('is-inspected', id === selectedId);
    button.setAttribute('aria-pressed', String(id === selectedId));
  });

  root.querySelectorAll('[data-flow-edge]').forEach(group => {
    const parts = (group.dataset.flowEdge || '').split('>');
    const edgeIndex = path.findIndex((id, index) => id === parts[0] && path[index + 1] === parts[1]);
    const onPath = edgeIndex >= 0;
    group.classList.toggle('is-traced', onPath);
    group.classList.toggle('is-traversed', onPath && edgeIndex < step);
    group.classList.toggle('is-current-edge', onPath && edgeIndex === step - 1);
  });

  const selectedNode = nodeButtons.find(button => button.dataset.flowNode === selectedId) ||
    nodeButtons.find(button => button.dataset.flowNode === currentId);
  if (selectedNode) {
    const selectedOnPath = path.includes(selectedNode.dataset.flowNode);
    const selectedStep = path.indexOf(selectedNode.dataset.flowNode);
    const kicker = root.querySelector('[data-flow-inspector-kicker]');
    if (kicker) {
      kicker.textContent = selectedOnPath
        ? 'STEP ' + (selectedStep + 1) + ' / ' + path.length + ' · ' + (selectedNode.dataset.flowKind || 'STAGE').toUpperCase()
        : 'INSPECTING ANOTHER BRANCH · ' + (selectedNode.dataset.flowKind || 'STAGE').toUpperCase();
    }
    const valueMap = {
      '[data-flow-inspector-title]': 'flowNodeTitle',
      '[data-flow-inspector-detail]': 'flowDetail',
      '[data-flow-inspector-input]': 'flowInput',
      '[data-flow-inspector-output]': 'flowOutput',
      '[data-flow-inspector-why]': 'flowWhy'
    };
    for (const [selector, key] of Object.entries(valueMap)) {
      const target = root.querySelector(selector);
      if (target) target.textContent = selectedNode.dataset[key] || '';
    }
  }

  const counter = root.querySelector('[data-flow-step-counter]');
  if (counter) counter.textContent = 'Step ' + (step + 1) + ' of ' + path.length;
  const progress = root.querySelector('[data-flow-progress]');
  if (progress) progress.setAttribute('aria-valuenow', String(totalProgress));
  const fill = root.querySelector('[data-flow-progress-fill]');
  if (fill) fill.style.width = totalProgress + '%';
  const previous = root.querySelector('[data-flow-action="prev"]');
  const next = root.querySelector('[data-flow-action="next"]');
  if (previous) previous.disabled = step <= 0;
  if (next) next.disabled = step >= path.length - 1;
}

function setExecutionFlowStep(root, nextStep, announceChange = false) {
  const path = getExecutionFlowPath(root);
  if (!path.length) return;
  const step = Math.max(0, Math.min(path.length - 1, nextStep));
  root.dataset.flowStep = String(step);
  root.dataset.flowSelected = path[step];
  updateExecutionFlow(root);
  if (announceChange) {
    const announcer = document.querySelector('#announcer');
    if (announcer) announcer.textContent = 'Execution step ' + (step + 1) + ' of ' + path.length + ': ' +
      (root.querySelector('[data-flow-node="' + CSS.escape(path[step]) + '"]')?.dataset.flowNodeTitle || path[step]);
  }
}

document.addEventListener('click', event => {
  const target = event.target instanceof Element
    ? event.target.closest('[data-flow-scenario], [data-flow-node], [data-flow-action]')
    : null;
  if (!target) return;
  const root = target.closest('[data-execution-flow]');
  if (!root) return;

  if (target.matches('[data-flow-scenario]')) {
    stopExecutionFlow(root);
    root.dataset.flowActiveScenario = target.dataset.flowScenario;
    root.dataset.flowStep = '0';
    root.dataset.flowSelected = (target.dataset.flowSteps || '').split('>').filter(Boolean)[0] || '';
    updateExecutionFlow(root);
    const announcer = document.querySelector('#announcer');
    if (announcer) announcer.textContent = 'Execution path selected: ' + target.textContent.trim();
    return;
  }
  if (target.matches('[data-flow-node]')) {
    stopExecutionFlow(root);
    root.dataset.flowSelected = target.dataset.flowNode;
    const path = getExecutionFlowPath(root);
    const pathIndex = path.indexOf(target.dataset.flowNode);
    if (pathIndex >= 0) root.dataset.flowStep = String(pathIndex);
    updateExecutionFlow(root);
    const announcer = document.querySelector('#announcer');
    if (announcer) announcer.textContent = 'Inspecting ' + (target.dataset.flowNodeTitle || 'execution stage');
    return;
  }

  const action = target.dataset.flowAction;
  const step = Number.parseInt(root.dataset.flowStep || '0', 10) || 0;
  if (action === 'prev') {
    stopExecutionFlow(root);
    setExecutionFlowStep(root, step - 1, true);
  } else if (action === 'next') {
    stopExecutionFlow(root);
    setExecutionFlowStep(root, step + 1, true);
  } else if (action === 'reset') {
    stopExecutionFlow(root);
    setExecutionFlowStep(root, 0, true);
  } else if (action === 'play') {
    if (root.dataset.flowPlaying === 'true') {
      stopExecutionFlow(root);
      return;
    }
    let path = getExecutionFlowPath(root);
    if (!path.length) return;
    if (step >= path.length - 1) setExecutionFlowStep(root, 0, false);
    root.dataset.flowPlaying = 'true';
    target.textContent = 'Ⅱ Pause';
    target.setAttribute('aria-pressed', 'true');
    target.setAttribute('aria-label', 'Pause execution trace');
    const timer = window.setInterval(() => {
      if (!root.isConnected) {
        stopExecutionFlow(root);
        return;
      }
      path = getExecutionFlowPath(root);
      const current = Number.parseInt(root.dataset.flowStep || '0', 10) || 0;
      if (!path.length || current >= path.length - 1) {
        stopExecutionFlow(root);
        return;
      }
      setExecutionFlowStep(root, current + 1, false);
      if (current + 1 >= path.length - 1) stopExecutionFlow(root);
    }, 1050);
    executionFlowTimers.set(root, timer);
  }
});

document.addEventListener('keydown', event => {
  const nodeButton = event.target instanceof Element ? event.target.closest('[data-flow-node]') : null;
  if (!nodeButton || !['ArrowLeft', 'ArrowRight'].includes(event.key) || event.metaKey || event.ctrlKey || event.altKey) return;
  const root = nodeButton.closest('[data-execution-flow]');
  if (!root) return;
  const path = getExecutionFlowPath(root);
  const index = path.indexOf(nodeButton.dataset.flowNode);
  if (index < 0) return;
  event.preventDefault();
  stopExecutionFlow(root);
  const nextIndex = Math.max(0, Math.min(path.length - 1, index + (event.key === 'ArrowRight' ? 1 : -1)));
  const nextNode = root.querySelector('[data-flow-node="' + CSS.escape(path[nextIndex]) + '"]');
  if (nextNode) nextNode.focus();
  setExecutionFlowStep(root, nextIndex, true);
});

function refreshExecutionFlows() {
  document.querySelectorAll('[data-execution-flow]').forEach(updateExecutionFlow);
}
const executionFlowObserver = new MutationObserver(records => {
  const addedFlow = records.some(record => [...record.addedNodes].some(node =>
    node instanceof Element && (node.matches('[data-execution-flow]') || node.querySelector('[data-execution-flow]'))
  ));
  if (addedFlow) requestAnimationFrame(refreshExecutionFlows);
});
executionFlowObserver.observe(document.body, { childList: true, subtree: true });
requestAnimationFrame(refreshExecutionFlows);
