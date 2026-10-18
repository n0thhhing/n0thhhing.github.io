import { createWorkspace } from './workspace.js';
import { searchText } from './search.js';
import { pages, projects } from './content.js';
import { parseRoute } from './commands.js';
import { renderPage, escapeHTML as e } from './pages.js';

const icon = path => `<svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${path}"/></svg>`;
const closeIcon = icon('M4 4l8 8M12 4l-8 8').replace('<svg ', '<svg class="tab-close-icon" ');
const names = route => projects.find(p => `projects/${p.id}` === route)?.name + '.md';
const fileName = route => pages.find(p => p.id === route)?.file ?? (route ? names(route) : 'No open files');
const headings = { home: 'Levi (@n0thhhing) - Personal Portfolio & Systems Showcase', about: 'A little about the person.', projects: 'From bits to little worlds.', achievements: 'Hackathons, runtimes & craft.', art: 'I think in color, too.', interests: 'Usually, there’s music on.' };

export function initEditor({ announce, onActive, openFiles }) {
  const host = document.querySelector('#pane-layout');
  const template = document.querySelector('#pane-template');
  const switcher = document.querySelector('#pane-switcher');
  const state = createWorkspace(parseRoute(location.hash));
  const nameFor = route => state.buffers.get(route)?.name ?? fileName(route);
  const elements = new Map();
  let dragging = null;
  let chord = false;
  let chordTimer;
  let menu = null;
  let menuPane = null;
  let outlineIndex = 0;
  const outline = document.querySelector('#outline-picker');
  const role = (element, name) => element.querySelector(`[data-role="${name}"]`);
  const activeElement = () => elements.get(state.activeId);
  const activeContent = () => role(activeElement(), 'content');
  const paneFor = element => state.panes().find(p => p.id === element.closest('[data-pane-id]')?.dataset.paneId);

  function capture() {
    for (const p of state.panes()) {
      const content = elements.get(p.id)?.querySelector('.content');
      const tab = p.tabs.find(t => t.route === content?.dataset.route);
      if (tab) tab.scroll = (content.querySelector('.scratch-buffer') ?? content).scrollTop;
    }
  }
  function updateHash(push = false) {
    const route = state.active().route;
    const hash = state.buffers.has(route) ? location.hash : route ? `#${route}` : '';
    const method = push && location.hash !== hash ? 'pushState' : 'replaceState';
    window.history[method]({ pane: state.activeId, route, navigationIndex: state.active().historyIndex }, '', `${location.pathname}${location.search}${hash}`);
  }
  function syncActive() {
    for (const [id, element] of elements) {
      const active = id === state.activeId;
      element.classList.toggle('active-pane', active);
      for (const node of element.querySelectorAll('[data-role]')) {
        if (active) node.id = node.dataset.role;
        else node.removeAttribute('id');
      }
    }
    const p = state.active(), route = p.route;
    document.querySelectorAll('[data-page], [data-project]').forEach(link => {
      const active = (link.dataset.project ? `projects/${link.dataset.project}` : link.dataset.page) === route;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current');
    });
    switcher.value = p.id;
    document.querySelector('#status-lang').textContent = state.buffers.has(route) ? 'Plain Text' : route ? 'Markdown' : '';
    document.querySelector('#status-cursor').textContent = state.buffers.has(route) ? 'Scratch file' : route ? 'Preview' : 'No open files';
    document.title = `${route === 'home' || !route ? 'Levi’s workspace' : nameFor(route)} · levi.napz`;
    onActive(activeContent());
  }
  function activate(id) {
    if (state.activeId === id) return;
    closeMenu();
    state.focus(id);
    syncActive();
    updateVisibility();
    refreshSearch(state.active(), activeElement(), false);
    updateHash();
  }
  function updateVisibility() {
    const single = state.zoomed;
    host.classList.toggle('single-pane', single);
    for (const [id, element] of elements) element.hidden = single && id !== state.activeId;
    for (const group of host.querySelectorAll('.pane-group')) group.hidden = single && !group.querySelector(`[data-pane-id="${state.activeId}"]`);
    host.classList.toggle('pane-zoomed', state.zoomed);
    document.querySelector('.editor')?.classList.toggle('pane-zoomed', state.zoomed);
  }
  function renderPane(p) {
    let element = elements.get(p.id);
    if (!element) {
      element = template.content.firstElementChild.cloneNode(true);
      element.dataset.paneId = p.id;
      element.id = p.id;
      element.setAttribute('aria-label', `Editor ${p.id.replace('-', ' ')}`);
      elements.set(p.id, element);
    }
    const tabs = role(element, 'tabs');
    tabs.innerHTML = p.tabs.map(t => `<div class="pane-tab ${p.route === t.route ? 'selected' : ''} ${t.preview ? 'preview-tab' : ''}" draggable="true" data-tab-route="${e(t.route)}"><a class="tab ${p.route === t.route ? 'active' : ''}" href="#${e(t.route)}" ${t.route.startsWith('projects/') ? `data-project-tab="${e(t.route.slice(9))}"` : ''}><span class="file-icon" aria-hidden="true">${icon('M4 2h5l3 3v9H4zM9 2v4h3')}</span><span class="tab-name">${e(nameFor(t.route))}</span></a><button class="tab-close" data-close-tab="${e(t.route)}" aria-label="Close ${e(nameFor(t.route))}">${closeIcon}</button></div>`).join('');
    role(element, 'history-back').disabled = p.historyIndex <= 0;
    role(element, 'history-forward').disabled = p.historyIndex >= p.history.length - 1;
    const maxBtn = role(element, 'editor-maximize-btn');
    const isZoomed = Boolean(state.zoomed && state.activeId === p.id);
    maxBtn.setAttribute('aria-pressed', String(isZoomed));
    maxBtn.setAttribute('aria-label', isZoomed ? 'Zoom out' : 'Zoom in');
    maxBtn.title = isZoomed ? 'Zoom Out' : 'Zoom In';
    maxBtn.innerHTML = `<svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" aria-hidden="true"><path d="${isZoomed ? 'M9 2v5h5M7 14V9H2M14 2L9 7M2 14l5-5' : 'M10 2h4v4M6 14H2v-4M14 2l-4 4M2 14l4-4'}" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    const content = role(element, 'content');
    const tab = p.tabs.find(t => t.route === p.route);
    const buffer = state.buffers.get(p.route);
    content.classList.toggle('scratch-file', Boolean(buffer));
    role(element, 'editor-split-btn').disabled = !p.route;
    content.setAttribute('aria-label', buffer ? `${buffer.name} editor` : `${nameFor(p.route)} preview`);
    if (content.dataset.route !== (p.route ?? '') || content.dataset.category !== (tab?.category ?? 'All')) {
      content.innerHTML = buffer ? `<div class="scratch-toolbar"><span>Scratch file · download to keep</span><button data-download-buffer>Download</button></div><textarea class="scratch-buffer" aria-label="${e(buffer.name)}" spellcheck="false"></textarea>` : p.route ? renderPage(p.route, tab.category) : '<div class="empty-pane"><p>No open files</p><button class="primary-link" data-open-files>Open a file <kbd>⌘/Ctrl P</kbd></button></div>';
      content.dataset.route = p.route ?? '';
      content.dataset.category = tab?.category ?? 'All';
      // Rendered articles can appear in several panes, so namespace their ARIA targets.
      for (const node of content.querySelectorAll('[id]')) {
        const original = node.id;
        node.id = `${p.id}-${original}`;
        content.querySelectorAll('[aria-labelledby], [aria-describedby]').forEach(label => {
          for (const attribute of ['aria-labelledby', 'aria-describedby']) {
            if (label.hasAttribute(attribute)) label.setAttribute(attribute, label.getAttribute(attribute).split(' ').map(id => id === original ? node.id : id).join(' '));
          }
        });
      }
      content.scrollTop = tab?.scroll ?? 0;
    }
    if (buffer && content.querySelector('.scratch-buffer').value !== buffer.text) content.querySelector('.scratch-buffer').value = buffer.text;
    const project = projects.find(project => `projects/${project.id}` === p.route);
    role(element, 'breadcrumb').textContent = buffer ? `${buffer.name} · Unsaved file` : p.route ? `${project ? 'projects › ' : ''}${nameFor(p.route)} › # ${project?.name ?? headings[p.route]}` : 'No open files';
    role(element, 'editor-lang-badge').textContent = buffer ? 'Plain text' : p.route ? 'Markdown preview' : '';
    role(element, 'outline-btn').disabled = Boolean(buffer) || !p.route;
    let search = element.querySelector('.buffer-search');
    if (!search) {
      search = document.createElement('div');
      search.className = 'buffer-search';
      search.innerHTML = `<input type="text" data-find-query aria-label="Find in page" placeholder="Find in page…" autocomplete="off" spellcheck="false"><div class="search-options"><button data-search-option="caseSensitive" aria-label="Match case" title="Match case">Aa</button><button data-search-option="wholeWord" aria-label="Match whole word" title="Match whole word">ab</button><button data-search-option="regex" aria-label="Use regular expression" title="Use regular expression">.*</button></div><span class="match-count" role="status" aria-live="polite"></span><button data-find-step="-1" aria-label="Previous match">${icon('M4 10l4-4 4 4')}</button><button data-find-step="1" aria-label="Next match">${icon('M4 6l4 4 4-4')}</button><button data-close-search aria-label="Close search">${closeIcon}</button>`;
      content.before(search);
    }
    search.hidden = !p.search.open;
    search.querySelector('input').value = p.search.query;
    for (const button of search.querySelectorAll('[data-search-option]')) button.setAttribute('aria-pressed', String(p.search[button.dataset.searchOption]));
    return element;
  }
  function renderNode(node) {
    if (!node.children) return renderPane(node);
    const group = document.createElement('div');
    group.className = `pane-group ${node.axis}`;
    group.dataset.groupId = node.id;
    const first = renderNode(node.children[0]), second = renderNode(node.children[1]);
    const handle = document.createElement('div');
    handle.className = 'pane-separator';
    handle.tabIndex = 0;
    handle.setAttribute('role', 'separator');
    handle.setAttribute('aria-label', 'Resize editor panes');
    handle.setAttribute('aria-orientation', node.axis === 'horizontal' ? 'vertical' : 'horizontal');
    handle.setAttribute('aria-valuemin', '15');
    handle.setAttribute('aria-valuemax', '85');
    handle.setAttribute('aria-controls', `${first.id || node.children[0].id} ${second.id || node.children[1].id}`);
    group.id = node.id;
    function resize(value) {
      node.ratio = Math.min(85, Math.max(15, value));
      first.style.flex = `${node.ratio} 1 0px`;
      second.style.flex = `${100 - node.ratio} 1 0px`;
      handle.setAttribute('aria-valuenow', String(Math.round(node.ratio)));
    }
    resize(node.ratio);
    let resizing = false;
    handle.addEventListener('pointerdown', event => {
      if (event.button !== 0) return;
      event.preventDefault(); resizing = true; handle.setPointerCapture(event.pointerId);
    });
    handle.addEventListener('pointermove', event => {
      if (!resizing) return;
      const rect = group.getBoundingClientRect();
      resize(node.axis === 'horizontal' ? (event.clientX - rect.left) / rect.width * 100 : (event.clientY - rect.top) / rect.height * 100);
    });
    for (const name of ['pointerup', 'pointercancel', 'lostpointercapture']) handle.addEventListener(name, () => { resizing = false; });
    handle.addEventListener('dblclick', () => resize(50));
    handle.addEventListener('keydown', event => {
      const keys = node.axis === 'horizontal' ? ['ArrowLeft', 'ArrowRight'] : ['ArrowUp', 'ArrowDown'];
      if (![...keys, 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      resize(event.key === 'Home' ? 15 : event.key === 'End' ? 85 : node.ratio + (event.key === keys[0] ? -5 : 5));
    });
    group.append(first, handle, second);
    return group;
  }
  function render(focus = false) {
    closeMenu();
    const live = new Set(state.panes().map(p => p.id));
    for (const [id, element] of elements) if (!live.has(id)) { element.remove(); elements.delete(id); }
    host.replaceChildren(renderNode(state.tree));
    switcher.innerHTML = state.panes().map((p, i) => `<option value="${p.id}">${i + 1}: ${e(nameFor(p.route))}</option>`).join('');
    document.querySelector('.pane-switcher').classList.toggle('has-panes', live.size > 1);
    syncActive();
    updateVisibility();
    for (const p of state.panes()) {
      const element = elements.get(p.id);
      if (!element.hidden) refreshSearch(p, element, false);
      const content = role(element, 'content');
      (content.querySelector('.scratch-buffer') ?? content).scrollTop = p.tabs.find(t => t.route === p.route)?.scroll ?? 0;
    }
    role(activeElement(), 'tabs').querySelector('.selected')?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    if (focus) (activeContent().querySelector('.scratch-buffer') ?? activeContent()).focus({ preventScroll: true });
  }
  function navigate(route, { preview = false, push = true, history = true } = {}) {
    capture();
    state.open(state.buffers.has(route) ? route : parseRoute(`#${route}`), { preview, history });
    const terminalMax = document.querySelector('.terminal-maximized');
    if (terminalMax) document.querySelector('#terminal-maximize').click();
    updateHash(push);
    render(true);
    if (route.startsWith('projects/')) document.querySelector('#project-tree').open = true;
  }
  function newFile() {
    capture(); state.newFile(); updateHash(); render(true); announce('New untitled file');
  }
  function split(direction, route) {
    capture(); state.split(direction, route ? (state.buffers.has(route) ? route : parseRoute(`#${route}`)) : undefined); render(true); updateHash(Boolean(route));
    announce(`Pane split ${direction}`);
  }
  function refreshSearch(p, element, scroll = true) {
    const content = role(element, 'content');
    for (const mark of content.querySelectorAll('mark[data-search-match]')) mark.replaceWith(...mark.childNodes);
    content.normalize();
    const nodes = [], walker = document.createTreeWalker(content, NodeFilter.SHOW_TEXT, {
      acceptNode: node => node.parentElement.closest('[aria-hidden="true"], [hidden], script, style') || !node.parentElement.getClientRects().length ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT,
    });
    let text = '', node, previousBlock;
    while ((node = walker.nextNode())) {
      const block = node.parentElement.closest('h1,h2,h3,h4,h5,h6,p,li,pre,dt,dd,div,section,article');
      if (text && block !== previousBlock) text += '\n';
      nodes.push({ node, start: text.length }); text += node.data; previousBlock = block;
    }
    const buffer = state.buffers.get(p.route);
    const result = searchText(buffer ? buffer.text : text, p.search.open ? p.search.query : '', p.search);
    const matches = result.matches;
    p.search.index = matches.length ? (p.search.index + matches.length) % matches.length : 0;
    for (const entry of buffer ? [] : nodes) {
      const ranges = matches.map((match, index) => ({ start: Math.max(0, match.start - entry.start), end: Math.min(entry.node.length, match.end - entry.start), index })).filter(m => m.end > m.start);
      if (!ranges.length) continue;
      const fragment = document.createDocumentFragment();
      let offset = 0;
      for (const match of ranges) {
        fragment.append(document.createTextNode(entry.node.data.slice(offset, match.start)));
        const mark = document.createElement('mark');
        mark.dataset.searchMatch = match.index;
        mark.className = match.index === p.search.index ? 'current-match' : '';
        mark.textContent = entry.node.data.slice(match.start, match.end);
        fragment.append(mark); offset = match.end;
      }
      fragment.append(document.createTextNode(entry.node.data.slice(offset)));
      entry.node.replaceWith(fragment);
    }
    const bar = element.querySelector('.buffer-search');
    bar.querySelector('.match-count').textContent = result.error || `${matches.length ? p.search.index + 1 : 0} / ${matches.length}`;
    bar.querySelector('input').setAttribute('aria-invalid', String(Boolean(result.error)));
    for (const button of bar.querySelectorAll('[data-find-step]')) button.disabled = !matches.length;
    if (scroll && buffer && matches.length) content.querySelector('.scratch-buffer').setSelectionRange(matches[p.search.index].start, matches[p.search.index].end);
    if (scroll) content.querySelector('.current-match')?.scrollIntoView({ block: 'center' });
  }
  function showSearch() {
    const p = state.active(), element = activeElement();
    p.search.open = true;
    const selection = window.getSelection();
    if (selection?.toString() && activeContent().contains(selection.anchorNode)) p.search.query = selection.toString();
    const bar = element.querySelector('.buffer-search');
    bar.hidden = false;
    const input = bar.querySelector('input'); input.value = p.search.query; input.focus(); input.select();
    refreshSearch(p, element);
  }
  function closeSearch() {
    state.active().search.open = false;
    activeElement().querySelector('.buffer-search').hidden = true;
    refreshSearch(state.active(), activeElement(), false);
    (activeContent().querySelector('.scratch-buffer') ?? activeContent()).focus({ preventScroll: true });
  }
  function travel(delta) {
    capture();
    if (state.travel(delta)) { updateHash(true); render(true); }
  }
  function syncPaneFocus(target = document.activeElement) {
    for (const [id, element] of elements) element.classList.toggle('pane-focused', element.contains(target) || (menuPane === id && menu?.contains(target)));
  }
  function closeMenu() {
    if (menuPane) elements.get(menuPane)?.classList.remove('menu-open');
    menu?.remove(); menu = null; menuPane = null;
    syncPaneFocus();
  }
  function showMenu(button, actions) {
    closeMenu();
    menu = document.createElement('div');
    menuPane = state.activeId;
    activeElement().classList.add('menu-open');
    menu.className = 'workspace-menu'; menu.setAttribute('role', 'menu');
    const rect = button.getBoundingClientRect();
    menu.style.top = `${rect.bottom + 3}px`; menu.style.left = `${Math.max(4, Math.min(rect.right - 190, innerWidth - 198))}px`;
    for (const [label, action] of actions) {
      const item = document.createElement('button');
      item.textContent = label; item.setAttribute('role', 'menuitem');
      item.addEventListener('click', () => { closeMenu(); action(); }); menu.append(item);
    }
    menu.addEventListener('keydown', event => {
      const buttons = [...menu.querySelectorAll('button')], index = buttons.indexOf(document.activeElement);
      if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
        event.preventDefault(); buttons[event.key === 'Home' ? 0 : event.key === 'End' ? buttons.length - 1 : (index + (event.key === 'ArrowDown' ? 1 : -1) + buttons.length) % buttons.length].focus();
      }
      if (event.key === 'Escape' || event.key === 'Tab') { closeMenu(); button.focus(); if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); } }
    });
    document.body.append(menu); menu.firstElementChild.focus();
  }
  function updateOutline() {
    const query = document.querySelector('#outline-query').value.toLowerCase();
    const items = [...activeContent().querySelectorAll('h1,h2,h3,h4,h5,h6')];
    document.querySelector('#outline-results').innerHTML = items.map((heading, i) => heading.textContent.toLowerCase().includes(query) ? `<button class="file-result" data-heading="${i}" style="padding-left:${12 + (Number(heading.tagName[1]) - 1) * 12}px">${e(heading.textContent)}</button>` : '').join('') || '<p class="empty-files">No matching headings.</p>';
    selectHeading(0);
  }
  function selectHeading(index) {
    const buttons = [...outline.querySelectorAll('[data-heading]')];
    outlineIndex = buttons.length ? (index + buttons.length) % buttons.length : 0;
    buttons.forEach((b, i) => b.classList.toggle('active', i === outlineIndex));
    buttons[outlineIndex]?.scrollIntoView({ block: 'nearest' });
  }
  function showOutline() {
    document.querySelector('#outline-query').value = ''; updateOutline(); outline.showModal();
    outline.returnValue = '';
    outline.addEventListener('close', () => { if (outline.returnValue !== 'selected') activeContent().focus({ preventScroll: true }); }, { once: true });
    document.querySelector('#outline-query').focus();
  }
  document.querySelector('#outline-query').addEventListener('input', updateOutline);
  outline.addEventListener('click', event => {
    const button = event.target.closest('[data-heading]');
    if (!button) return;
    const heading = activeContent().querySelectorAll('h1,h2,h3,h4,h5,h6')[Number(button.dataset.heading)];
    outline.close('selected'); heading.tabIndex = -1; heading.focus(); heading.scrollIntoView({ block: 'start' });
  });
  outline.addEventListener('keydown', event => {
    if (['ArrowDown', 'ArrowUp'].includes(event.key)) { event.preventDefault(); selectHeading(outlineIndex + (event.key === 'ArrowDown' ? 1 : -1)); }
    if (event.key === 'Enter' && event.target.matches('input')) { event.preventDefault(); outline.querySelector('.active')?.click(); }
  });
  host.addEventListener('click', event => {
    const button = event.target.closest('button, a');
    if (!button) return;
    const p = paneFor(button); activate(p.id);
    const name = button.dataset.role;
    if (button.matches('[data-close-tab]')) { capture(); state.closeTab(button.dataset.closeTab); updateHash(); render(true); }
    if (name === 'new-item-btn') showMenu(button, [['New File', newFile], ['Open File', () => openFiles(role(activeElement(), 'new-item-btn'))]]);
    if (button.matches('[data-download-buffer]')) {
      const buffer = state.buffers.get(p.route);
      const url = URL.createObjectURL(new Blob([buffer.text], { type: 'text/plain' }));
      const link = document.createElement('a');
      link.href = url; link.download = `${buffer.name}.txt`; link.click();
      setTimeout(() => URL.revokeObjectURL(url), 0);
      buffer.dirty = false;
    }
    if (name === 'history-back') travel(-1);
    if (name === 'history-forward') travel(1);
    if (name === 'editor-split-btn') showMenu(button, [...['left', 'right', 'up', 'down'].map(direction => [`Split ${direction}`, () => split(direction)]), ...(state.panes().length > 1 ? [['Close pane', () => { capture(); state.removePane(); updateHash(); render(true); }]] : [])]);
    if (name === 'editor-maximize-btn') { capture(); document.querySelector('.editor')?.classList.remove('terminal-maximized'); state.zoomed = !state.zoomed; render(true); }
    if (name === 'buffer-search-btn') showSearch();
    if (name === 'outline-btn') showOutline();
    if (button.matches('[data-close-search]')) closeSearch();
    if (button.matches('[data-find-step]')) { p.search.index += Number(button.dataset.findStep); refreshSearch(p, activeElement()); }
    if (button.matches('[data-search-option]')) { p.search[button.dataset.searchOption] = !p.search[button.dataset.searchOption]; button.setAttribute('aria-pressed', String(p.search[button.dataset.searchOption])); p.search.index = 0; refreshSearch(p, activeElement()); }
    if (button.matches('[data-filter]')) {
      capture(); p.tabs.find(t => t.route === p.route).category = button.dataset.filter; render();
      activeContent().querySelector(`[data-filter="${button.dataset.filter}"]`)?.focus();
    }
  });
  host.addEventListener('input', event => {
    if (event.target.matches('.scratch-buffer')) {
      const p = paneFor(event.target), buffer = state.buffers.get(p.route);
      buffer.text = event.target.value; buffer.dirty = true;
      for (const other of state.panes()) if (other.route === p.route) {
        const element = elements.get(other.id);
        if (other.id !== p.id) element.querySelector('.scratch-buffer').value = buffer.text;
        refreshSearch(other, element, false);
      }
      return;
    }
    if (!event.target.matches('[data-find-query]')) return;
    const p = paneFor(event.target); p.search.query = event.target.value; p.search.index = 0; refreshSearch(p, elements.get(p.id));
  });
  for (const type of ['pointerdown', 'focusin']) {
    host.addEventListener(type, event => { const p = paneFor(event.target); if (p) activate(p.id); });
    document.addEventListener(type, event => syncPaneFocus(event.target));
  }
  host.addEventListener('dblclick', event => {
    const tab = event.target.closest('[data-tab-route]');
    if (tab) { capture(); state.keep(tab.dataset.tabRoute); render(true); }
    else if (event.target.closest('.tabs') || (event.target.closest('.empty-pane') && !event.target.closest('button,a'))) { activate(paneFor(event.target).id); newFile(); }
  });
  host.addEventListener('contextmenu', event => {
    const tab = event.target.closest('[data-tab-route]');
    if (!tab) return;
    event.preventDefault(); activate(paneFor(tab).id);
    showMenu(tab.querySelector('a'), [['Keep tab', () => { capture(); state.keep(tab.dataset.tabRoute); render(true); }], ['Move tab left', () => moveWithin(-1)], ['Move tab right', () => moveWithin(1)], ...state.panes().filter(p => p.id !== state.activeId).map(p => [`Move to pane ${state.panes().indexOf(p) + 1}`, () => { capture(); state.moveTab(state.activeId, p.id, tab.dataset.tabRoute); updateHash(); render(true); }]), ['Close tab', () => { capture(); state.closeTab(tab.dataset.tabRoute); updateHash(); render(true); }]]);
    function moveWithin(delta) {
      const p = state.active(), index = p.tabs.findIndex(t => t.route === tab.dataset.tabRoute);
      capture(); state.moveTab(p.id, p.id, tab.dataset.tabRoute, Math.max(0, index + delta)); render(true);
    }
  });
  host.addEventListener('dragstart', event => {
    const tab = event.target.closest('[data-tab-route]');
    if (!tab) return;
    dragging = { from: paneFor(tab).id, route: tab.dataset.tabRoute };
    event.dataTransfer.setData('text/plain', dragging.route); event.dataTransfer.effectAllowed = 'move';
  });
  host.addEventListener('dragover', event => { if (dragging && paneFor(event.target)) { event.preventDefault(); event.dataTransfer.dropEffect = 'move'; } });
  host.addEventListener('drop', event => {
    const p = paneFor(event.target);
    if (!dragging || !p) return;
    event.preventDefault(); capture();
    const tab = event.target.closest('[data-tab-route]');
    const index = tab ? p.tabs.findIndex(t => t.route === tab.dataset.tabRoute) : p.tabs.length;
    state.moveTab(dragging.from, p.id, dragging.route, index); dragging = null; updateHash(); render(true);
  });
  host.addEventListener('dragend', () => { dragging = null; });
  switcher.addEventListener('change', () => { activate(switcher.value); activeContent().focus(); });
  document.addEventListener('pointerdown', event => { if (menu && !menu.contains(event.target)) closeMenu(); });
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || link.classList.contains('skip-link') || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const preview = Boolean(link.closest('#explorer'));
    navigate(link.hash.slice(1), { preview });
  });
  document.querySelector('#explorer').addEventListener('dblclick', event => {
    const link = event.target.closest('a[href^="#"]');
    if (link) { state.keep(link.hash.slice(1)); render(); }
  });
  window.addEventListener('hashchange', () => {
    const route = parseRoute(location.hash);
    if (route !== state.active().route) navigate(route, { push: false });
  });
  window.addEventListener('popstate', event => {
    if (event.state?.pane && state.panes().some(p => p.id === event.state.pane)) state.focus(event.state.pane);
    const p = state.active(), route = state.buffers.has(event.state?.route) ? event.state.route : parseRoute(location.hash);
    const index = event.state?.navigationIndex;
    if (Number.isInteger(index) && p.history[index] === route) p.historyIndex = index;
    else {
      const previous = p.history.lastIndexOf(route);
      if (previous >= 0) p.historyIndex = previous;
      else { p.history.push(route); p.historyIndex = p.history.length - 1; }
    }
    navigate(route, { push: false, history: false });
  });
  window.addEventListener('resize', () => { closeMenu(); updateVisibility(); });
  window.addEventListener('blur', () => { closeMenu(); syncPaneFocus(null); });
  window.addEventListener('focus', () => syncPaneFocus());
  window.addEventListener('beforeunload', event => {
    if ([...state.buffers.values()].some(buffer => buffer.dirty)) { event.preventDefault(); event.returnValue = ''; }
  });
  document.addEventListener('keydown', event => {
    if (document.querySelector('dialog[open]') || document.querySelector('#drawer-backdrop:not([hidden])')) return;
    const mod = event.metaKey || event.ctrlKey, key = event.key.toLowerCase();
    const inTerminal = event.target.closest('#terminal');
    if (chord) {
      chord = false; clearTimeout(chordTimer);
      const direction = { ArrowLeft: 'left', ArrowRight: 'right', ArrowUp: 'up', ArrowDown: 'down' }[event.key];
      if (direction) { event.preventDefault(); split(direction); return; }
    }
    if (!inTerminal && event.shiftKey && event.key === 'Escape') { event.preventDefault(); document.querySelector('.editor')?.classList.remove('terminal-maximized'); state.zoomed = !state.zoomed; capture(); render(true); return; }
    if (!inTerminal && mod && /^[1-9]$/.test(key)) {
      const pane = state.panes()[Number(key) - 1];
      if (pane) { event.preventDefault(); activate(pane.id); activeContent().focus(); }
    }
    if (!inTerminal && (event.key === 'ContextMenu' || (event.shiftKey && event.key === 'F10')) && event.target.closest('[data-tab-route]')) { event.preventDefault(); event.target.dispatchEvent(new MouseEvent('contextmenu', { bubbles: true, cancelable: true })); }
    if (!inTerminal && mod && key === 'k') { event.preventDefault(); chord = true; chordTimer = setTimeout(() => { chord = false; }, 1500); }
    if (!inTerminal && mod && key === 'n') { event.preventDefault(); newFile(); }
    if (!inTerminal && mod && key === 'f') { event.preventDefault(); showSearch(); }
    if (!inTerminal && mod && event.key === '\\') { event.preventDefault(); split('right'); }
    if (!inTerminal && mod && key === 'w') { event.preventDefault(); capture(); state.closeTab(state.active().route); updateHash(); render(true); }
    if (!inTerminal && mod && key === 'o' && event.shiftKey) { event.preventDefault(); showOutline(); }
    if (!inTerminal && event.altKey && ['ArrowLeft', 'ArrowRight'].includes(event.key)) { event.preventDefault(); travel(event.key === 'ArrowLeft' ? -1 : 1); }
    if (event.target.matches('[data-find-query]') && event.key === 'Enter') { event.preventDefault(); state.active().search.index += event.shiftKey ? -1 : 1; refreshSearch(state.active(), activeElement()); }
    if (!inTerminal && event.key === 'Escape' && !menu && state.active().search.open) { event.preventDefault(); event.stopImmediatePropagation(); closeSearch(); }
  });
  render(true);
  window.history.replaceState({ pane: state.activeId, navigationIndex: 0 }, '', location.href);
  return { state, navigate, split, render, unzoom: () => { if (state.zoomed) { state.zoomed = false; render(true); } } };
}
