import { pages, projects, repositoryLink } from './content.js';
import { themes, readTheme, saveTheme } from './themes.js';
import { parseRoute } from './commands.js';
import { initTerminal } from './terminal.js';
import { findFiles } from './files.js';
import { escapeHTML as e, renderPage } from './pages.js';

const $ = selector => document.querySelector(selector);
const root = document.documentElement;
const content = $('#content');
let category = 'All';
let drawer = null;
let drawerTrigger = null;
let storage;
let fileIndex = 0;
try { storage = window.localStorage; } catch { /* The workspace also works without storage. */ }

function fileLink(page, className) {
  return `<a class="${className}" href="#${page.id}" data-page="${page.id}"><span class="file-icon ${page.id}" aria-hidden="true">${page.icon}</span>${page.file}</a>`;
}
$('#file-nav').innerHTML = pages.map(page => fileLink(page, 'file-link')).join('');
$('#tabs').innerHTML = pages.map(page => fileLink(page, 'tab')).join('');
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
  const titlebarThemeLabel = $('#titlebar-theme-label');
  if (titlebarThemeLabel) titlebarThemeLabel.textContent = theme.name;
  $('#theme-source').href = theme.source;
  document.querySelector('meta[name="theme-color"]').content = getComputedStyle(root).getPropertyValue('--bg').trim();
  if (notify) announce(`Theme changed to ${theme.name}`);
}
applyTheme(readTheme(storage), false);
requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add('theme-ready')));

function renderRoute(focus = false) {
  const route = parseRoute(location.hash);
  const [page, id] = route.split('/');
  const project = projects.find(project => project.id === id);
  content.innerHTML = renderPage(route, category);
  content.scrollTop = 0;
  if (project && !document.querySelector(`[data-project-tab="${id}"]`)) {
    const tab = document.createElement('div');
    tab.className = 'project-tab';
    tab.innerHTML = `<a class="tab" href="#projects/${e(id)}" data-project-tab="${e(id)}"><span class="file-icon" aria-hidden="true">M↓</span>${e(project.name)}.md</a><button class="tab-close" data-close-project="${e(id)}" aria-label="Close ${e(project.name)} tab">×</button>`;
    $('#tabs').append(tab);
  }
  document.querySelectorAll('[data-page]').forEach(link => {
    const active = link.dataset.page === page && !project;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current');
  });
  document.querySelectorAll('[data-project-tab]').forEach(link => {
    const active = link.dataset.projectTab === id;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current');
  });
  document.querySelector('#tabs .active')?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  document.querySelectorAll('[data-project]').forEach(link => {
    link.classList.toggle('active', link.dataset.project === id);
    if (link.dataset.project === id) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current');
  });
  const file = pages.find(entry => entry.id === page)?.file ?? 'README.md';
  $('#breadcrumb').textContent = `website  ›  site  ›  ${project ? `projects  ›  ${project.name}` : file}`;
  if (project) $('#project-tree').open = true;
  document.title = `${project?.name ?? (page === 'home' ? 'Levi’s workspace' : file)} · levi.napz`;
  if (focus) content.focus({ preventScroll: true });
}
window.addEventListener('hashchange', () => renderRoute(true));
renderRoute();

$('#history-back')?.addEventListener('click', () => window.history.back());
$('#history-forward')?.addEventListener('click', () => window.history.forward());

function syncControls() {
  const mobileExplorer = matchMedia('(max-width: 760px)').matches;
  const explorerOpen = mobileExplorer ? drawer === 'explorer' : !document.body.classList.contains('explorer-hidden');
  $('#explorer-toggle').setAttribute('aria-expanded', explorerOpen);
  $('#explorer-toggle').classList.toggle('selected', explorerOpen);
  document.querySelectorAll('[data-terminal-toggle]').forEach(button => button.setAttribute('aria-expanded', !$('#terminal').hidden));
}

function closeDrawer(restore = true) {
  if (!drawer) return;
  $(`#${drawer}`).removeAttribute('role');
  $(`#${drawer}`).removeAttribute('aria-modal');
  document.body.classList.remove('explorer-open');
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
  if (drawer) { closeDrawer(); return; }
  drawer = 'explorer';
  drawerTrigger = trigger;
  const element = $('#explorer');
  element.setAttribute('role', 'dialog');
  element.setAttribute('aria-modal', 'true');
  document.body.classList.add('explorer-open');
  $('#drawer-backdrop').hidden = false;
  syncControls();
  element.querySelector('button, a').focus();
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

function updateFiles() {
  const matches = findFiles($('#file-query').value);
  $('#file-results').innerHTML = matches.length ? matches.map(file => `<button class="file-result" data-open-route="${e(file.route)}"><span class="file-icon" aria-hidden="true">${file.route.includes('/') ? '⌑' : 'M↓'}</span><span><span class="file-result-name">${e(file.name)}</span><span class="file-result-path">${e(file.path)}</span></span><span class="file-result-enter" aria-hidden="true">↵</span></button>`).join('') : '<p class="empty-files">No matching files. Try a project name or “about”.</p>';
  $('#file-result-status').textContent = `${matches.length} matching files`;
  selectFile(0);
}

$('#file-query').addEventListener('input', updateFiles);
$('#file-picker').addEventListener('keydown', event => {
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault();
    selectFile(fileIndex + (event.key === 'ArrowDown' ? 1 : -1));
    if (event.target !== $('#file-query')) document.querySelector('.file-result.active')?.focus();
  }
  if (event.key === 'Enter' && event.target === $('#file-query')) {
    event.preventDefault();
    document.querySelector('.file-result.active')?.click();
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
  if (event.target === picker) picker.close();
}));
if (!navigator.platform.includes('Mac')) $('[data-file-shortcut]').textContent = 'Ctrl P';

initTerminal({
  navigate: route => {
    if (location.hash === `#${route}`) renderRoute(); else location.hash = route;
  },
  applyTheme,
});

document.addEventListener('click', event => {
  const target = event.target.closest('button, a');
  if (!target) return;
  if (target.matches('[data-theme-id]')) applyTheme(target.dataset.themeId);
  if (target.matches('[data-filter]')) {
    category = target.dataset.filter;
    renderRoute();
    [...document.querySelectorAll('[data-filter]')].find(button => button.dataset.filter === category)?.focus();
  }
  if (target.matches('#explorer-toggle')) toggleExplorer(target);
  if (target.matches('#status-theme, [data-open-palette]')) openPicker('palette', target);
  if (target.matches('[data-open-files]')) openPicker('file-picker', target);
  if (target.matches('[data-close-dialog]')) target.closest('dialog').close();
  if (target.matches('[data-open-route]')) {
    $('#file-picker').close('selected');
    if (location.hash === `#${target.dataset.openRoute}`) renderRoute(true);
    else location.hash = target.dataset.openRoute;
  }
  if (target.matches('[data-close-project]')) {
    const id = target.dataset.closeProject;
    target.closest('.project-tab').remove();
    if (parseRoute(location.hash) === `projects/${id}`) location.hash = 'projects';
    else $('#tabs .active')?.focus();
  }
  if (target.matches('a[href^="#"]') && !target.classList.contains('skip-link')) {
    closeDrawer(false);
    if (target.hash === location.hash) renderRoute(true);
  }
});
$('#drawer-backdrop').addEventListener('click', () => closeDrawer());
document.addEventListener('keydown', event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'p' && !event.shiftKey && !event.altKey) {
    event.preventDefault();
    if (!document.querySelector('dialog[open]')) openPicker('file-picker', document.activeElement);
  }
  if (!drawer) return;
  if (event.key === 'Escape') { event.preventDefault(); closeDrawer(); }
  if (event.key === 'Tab') {
    const controls = [...$(`#${drawer}`).querySelectorAll('a, button, summary')].filter(element => element.getClientRects().length);
    const first = controls[0], last = controls.at(-1);
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});
window.addEventListener('resize', () => { closeDrawer(false); syncControls(); });
syncControls();
