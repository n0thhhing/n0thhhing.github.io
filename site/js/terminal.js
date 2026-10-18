import { createWorkspace } from './workspace.js';
import { createTerminalSession } from './terminal-session.js';
import { escapeHTML as e } from './pages.js';

const svg = path => `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><path d="${path}"/></svg>`;

export function initTerminal({ navigate, applyTheme, unzoom }) {
  const terminal = document.querySelector('#terminal');
  const editor = terminal.parentElement;
  const host = document.querySelector('#terminal-layout');
  const resizer = document.querySelector('#terminal-resizer');
  const paneTemplate = document.querySelector('#terminal-pane-template');
  const sessionTemplate = document.querySelector('#terminal-session-template');
  const sessions = new Map(), panes = new Map();
  let state, nextSession = 0, drag = null, menu = null;
  terminal.hidden = matchMedia('(max-width: 760px), (max-height: 600px)').matches;
  const switcher = document.createElement('select');
  switcher.className = 'terminal-pane-switcher';
  switcher.setAttribute('aria-label', 'Active terminal pane');
  terminal.insertBefore(switcher, host);
  const activeSession = () => sessions.get(state.active().route);
  const activePane = () => panes.get(state.activeId);
  const label = session => `${session.cwd === '~' ? 'website' : `website/${session.cwd.slice(2)}`} — portfolio shell`;

  function makeSession(cwd = '~') {
    const route = `terminal/${++nextSession}`;
    const body = sessionTemplate.content.firstElementChild.cloneNode(true);
    body.dataset.session = route;
    const session = createTerminalSession({ body, initialCwd: cwd, applyTheme,
      navigate: route => { setMaximized(false); navigate(route); },
      leave: () => { setMaximized(false); document.querySelector('#content').focus(); },
      onChange: syncLabels,
    });
    sessions.set(route, session);
    return route;
  }
  function syncLabels() {
    if (!state) return;
    for (const tab of host.querySelectorAll('[data-session-route]')) {
      const session = sessions.get(tab.dataset.sessionRoute);
      if (session) tab.querySelector('.terminal-tab-name').textContent = label(session);
    }
  }
  function syncControls() {
    document.querySelectorAll('[data-terminal-toggle]').forEach(button => {
      button.setAttribute('aria-expanded', String(!terminal.hidden));
      button.classList.toggle('selected', !terminal.hidden);
    });
    for (const [id, pane] of panes) {
      const active = id === state.activeId;
      pane.classList.toggle('active-terminal-pane', active);
      for (const button of pane.querySelectorAll('[data-term-action]')) {
        if (active) button.id = button.dataset.termAction; else button.removeAttribute('id');
      }
      const maximize = pane.querySelector('[data-term-action="terminal-maximize"]');
      const zoomed = active && editor.classList.contains('terminal-maximized');
      maximize.setAttribute('aria-pressed', String(zoomed));
      maximize.setAttribute('aria-label', zoomed ? 'Restore terminal size' : 'Maximize terminal');
      maximize.title = zoomed ? 'Zoom Out' : 'Zoom In';
      maximize.innerHTML = svg(zoomed ? 'M9 2v5h5M7 14V9H2M14 2L9 7M2 14l5-5' : 'M10 2h4v4M6 14H2v-4M14 2l-4 4M2 14l4-4');
    }
    for (const session of sessions.values()) for (const node of [session.body, ...session.body.querySelectorAll('[data-term-role]')]) {
      if (session === activeSession()) node.id = node.dataset.termRole; else node.removeAttribute('id');
    }
    const tab = activePane().querySelector('.terminal-tab.selected .terminal-tab-name');
    document.querySelector('#terminal-title')?.removeAttribute('id');
    if (tab) tab.id = 'terminal-title';
    switcher.hidden = state.panes().length < 2;
    switcher.value = state.activeId;
    syncFocus();
  }
  function syncFocus(target = document.activeElement) {
    for (const pane of panes.values()) pane.classList.toggle('terminal-focused', pane.contains(target));
  }
  function setMaximized(value) {
    if (value) unzoom?.();
    editor.classList.toggle('terminal-maximized', value);
    syncControls();
    activeSession().resizeInput();
  }
  function activate(id) {
    if (id !== state.activeId) { state.focus(id); syncControls(); }
  }
  function newTerminal() {
    state.open(makeSession(activeSession().cwd)); render(true);
  }
  function split(direction) {
    state.split(direction, makeSession(activeSession().cwd)); render(true);
  }
  function renderPane(p) {
    let pane = panes.get(p.id);
    if (!pane) {
      pane = paneTemplate.content.firstElementChild.cloneNode(true);
      pane.dataset.terminalPane = p.id;
      panes.set(p.id, pane);
    }
    pane.querySelector('.terminal-tabs').innerHTML = p.tabs.map(tab => `<div class="terminal-tab ${tab.route === p.route ? 'selected' : ''}" data-session-route="${tab.route}"><button class="terminal-tab-select" aria-pressed="${tab.route === p.route}">${svg('M3 4l4 4-4 4M9 12h4')}<span class="terminal-tab-name">${e(label(sessions.get(tab.route)))}</span></button><button class="terminal-tab-close" data-close-terminal="${tab.route}" aria-label="Close terminal session">${svg('M4 4l8 8M12 4l-8 8')}</button></div>`).join('');
    pane.querySelector('.terminal-session-host').replaceChildren(sessions.get(p.route).body);
    return pane;
  }
  function renderNode(node) {
    if (!node.children) return renderPane(node);
    const group = document.createElement('div');
    group.className = `terminal-group ${node.axis}`;
    const first = renderNode(node.children[0]), second = renderNode(node.children[1]);
    const handle = document.createElement('div');
    handle.className = 'terminal-pane-separator'; handle.tabIndex = 0;
    handle.setAttribute('role', 'separator'); handle.setAttribute('aria-label', 'Resize terminal panes');
    handle.setAttribute('aria-orientation', node.axis === 'horizontal' ? 'vertical' : 'horizontal');
    handle.setAttribute('aria-valuemin', '15'); handle.setAttribute('aria-valuemax', '85');
    function resize(value) {
      node.ratio = Math.max(15, Math.min(85, value));
      first.style.flex = `${node.ratio} 1 0px`; second.style.flex = `${100 - node.ratio} 1 0px`;
      handle.setAttribute('aria-valuenow', String(Math.round(node.ratio)));
    }
    resize(node.ratio);
    let moving = false;
    handle.addEventListener('pointerdown', event => { if (event.button === 0) { event.preventDefault(); moving = true; handle.setPointerCapture(event.pointerId); } });
    handle.addEventListener('pointermove', event => {
      if (!moving) return;
      const rect = group.getBoundingClientRect();
      resize(node.axis === 'horizontal' ? (event.clientX - rect.left) / rect.width * 100 : (event.clientY - rect.top) / rect.height * 100);
    });
    for (const name of ['pointerup', 'pointercancel', 'lostpointercapture']) handle.addEventListener(name, () => { moving = false; });
    handle.addEventListener('dblclick', () => resize(50));
    handle.addEventListener('keydown', event => {
      const keys = node.axis === 'horizontal' ? ['ArrowLeft', 'ArrowRight'] : ['ArrowUp', 'ArrowDown'];
      if (![...keys, 'Home', 'End'].includes(event.key)) return;
      event.preventDefault(); resize(event.key === 'Home' ? 15 : event.key === 'End' ? 85 : node.ratio + (event.key === keys[0] ? -5 : 5));
    });
    group.append(first, handle, second);
    return group;
  }
  function render(focus = false) {
    closeMenu();
    const scroll = new Map([...sessions].map(([route, session]) => [route, session.body.scrollTop]));
    for (const [id, pane] of panes) if (!state.panes().some(p => p.id === id)) { pane.remove(); panes.delete(id); }
    host.replaceChildren(renderNode(state.tree));
    switcher.innerHTML = state.panes().map((p, i) => `<option value="${p.id}">Terminal pane ${i + 1}</option>`).join('');
    syncControls();
    for (const [route, session] of sessions) { session.body.scrollTop = scroll.get(route); session.resizeInput(); }
    if (focus) activeSession().focus();
  }
  function closeMenu() {
    menu?.remove(); menu = null;
    for (const pane of panes.values()) pane.classList.remove('menu-open');
  }
  function showMenu(button, items) {
    closeMenu(); activePane().classList.add('menu-open');
    menu = document.createElement('div'); menu.className = 'workspace-menu'; menu.setAttribute('role', 'menu');
    const rect = button.getBoundingClientRect();
    menu.style.left = `${Math.max(4, Math.min(innerWidth - 198, rect.right - 190))}px`;
    menu.style.top = `${Math.max(4, Math.min(innerHeight - items.length * 30 - 16, rect.bottom))}px`;
    for (const [label, action] of items) {
      const item = document.createElement('button'); item.textContent = label; item.setAttribute('role', 'menuitem');
      item.addEventListener('click', () => { closeMenu(); action(); }); menu.append(item);
    }
    menu.addEventListener('keydown', event => {
      const buttons = [...menu.children], index = buttons.indexOf(document.activeElement);
      if (['ArrowDown', 'ArrowUp'].includes(event.key)) { event.preventDefault(); buttons[(index + (event.key === 'ArrowDown' ? 1 : -1) + buttons.length) % buttons.length].focus(); }
      if (event.key === 'Escape' || event.key === 'Tab') { closeMenu(); button.focus(); if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); } }
    });
    document.body.append(menu); menu.firstElementChild.focus();
  }
  const paneFor = target => state.panes().find(p => p.id === target.closest('[data-terminal-pane]')?.dataset.terminalPane);
  for (const type of ['pointerdown', 'focusin']) {
    host.addEventListener(type, event => { const pane = paneFor(event.target); if (pane) activate(pane.id); });
    document.addEventListener(type, event => syncFocus(event.target));
  }
  host.addEventListener('click', event => {
    const pane = paneFor(event.target); if (!pane) return;
    activate(pane.id);
    const close = event.target.closest('[data-close-terminal]');
    if (close) {
      state.closeTab(close.dataset.closeTerminal);
      if (!state.active().route) { terminal.hidden = true; editor.classList.remove('terminal-maximized'); state.open(makeSession()); }
      render(!terminal.hidden); syncControls();
      if (terminal.hidden) document.querySelector('#content').focus();
      return;
    }
    const tab = event.target.closest('[data-session-route]');
    if (tab) { state.open(tab.dataset.sessionRoute); render(true); return; }
    const button = event.target.closest('[data-term-action]');
    if (!button) return;
    if (button.dataset.termAction === 'terminal-new') showMenu(button, [['New Terminal', newTerminal], ['Clear Terminal', () => activeSession().clear()]]);
    if (button.dataset.termAction === 'terminal-split') showMenu(button, ['Right', 'Left', 'Up', 'Down'].map(direction => [`Split ${direction}`, () => split(direction.toLowerCase())]));
    if (button.dataset.termAction === 'terminal-maximize') { setMaximized(!editor.classList.contains('terminal-maximized')); activeSession().focus(); }
  });
  host.addEventListener('dblclick', event => { if (event.target.matches('.terminal-tabs')) newTerminal(); });
  document.addEventListener('pointerdown', event => { if (menu && !menu.contains(event.target)) closeMenu(); });
  document.addEventListener('click', event => {
    if (event.target.closest('a[href^="#"]')) setMaximized(false);
    const button = event.target.closest('button'); if (!button) return;
    const route = button.closest('[data-session]')?.dataset.session;
    const session = sessions.get(route) ?? activeSession();
    if (button.matches('[data-command]')) { terminal.hidden = false; unzoom?.(); syncControls(); session.execute(button.dataset.command); }
    if (button.matches('[data-complete]')) session.complete(button.dataset.complete);
    if (button.matches('[data-terminal-toggle]')) {
      const wasFocused = terminal.contains(document.activeElement);
      const willOpen = terminal.hidden;
      setMaximized(false); terminal.hidden = !terminal.hidden;
      if (willOpen) unzoom?.();
      syncControls();
      if (!terminal.hidden) activeSession().focus(); else if (wasFocused) document.querySelector('#content').focus();
    }
  });
  switcher.addEventListener('change', () => { activate(switcher.value); activeSession().focus(); });
  window.addEventListener('hashchange', () => setMaximized(false), { capture: true });
  function setHeight(height) {
    const max = Math.max(140, editor.clientHeight - 155);
    const value = Math.round(Math.min(max, Math.max(140, height)));
    terminal.style.setProperty('--terminal-height', `${value}px`);
    resizer.setAttribute('aria-valuenow', value); resizer.setAttribute('aria-valuemax', max);
    resizer.setAttribute('aria-valuetext', `Terminal height ${value} pixels`);
    for (const session of sessions.values()) session.resizeInput();
  }
  resizer.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    drag = { y: event.clientY, height: terminal.getBoundingClientRect().height };
    resizer.setPointerCapture(event.pointerId); event.preventDefault();
    document.body.classList.add('terminal-resizing');
  });
  resizer.addEventListener('pointermove', event => { if (drag) setHeight(drag.height + drag.y - event.clientY); });
  const endDrag = () => { drag = null; document.body.classList.remove('terminal-resizing'); };
  for (const name of ['pointerup', 'pointercancel', 'lostpointercapture']) resizer.addEventListener(name, endDrag);
  resizer.addEventListener('keydown', event => {
    if (!['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault(); setHeight(event.key === 'Home' ? 140 : event.key === 'End' ? editor.clientHeight : terminal.getBoundingClientRect().height + (event.key === 'ArrowUp' ? 25 : -25));
  });
  resizer.addEventListener('dblclick', () => setHeight(matchMedia('(max-width: 540px)').matches ? 200 : 240));
  window.addEventListener('resize', () => { closeMenu(); if (!terminal.hidden && !editor.classList.contains('terminal-maximized')) setHeight(terminal.getBoundingClientRect().height); });
  state = createWorkspace(makeSession());
  render(); setHeight(matchMedia('(max-width: 540px)').matches ? 200 : 240);
}
