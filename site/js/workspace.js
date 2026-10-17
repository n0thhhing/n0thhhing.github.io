// Pane state is independent of the DOM; routes remain the public navigation format.
export function createWorkspace(route) {
  let nextId = 0;
  let nextBuffer = 0;
  const tab = (route, preview = false) => ({ route, preview, scroll: 0, category: 'All' });
  const pane = route => ({
    id: `pane-${++nextId}`, route, tabs: route ? [tab(route)] : [],
    history: route ? [route] : [], historyIndex: route ? 0 : -1,
    search: { open: false, query: '', caseSensitive: false, wholeWord: false, regex: false, index: 0 },
  });
  const initial = pane(route);
  const w = {
    buffers: new Map(),
    tree: initial, activeId: initial.id, zoomed: false, recent: route ? [route] : [],
    panes(node = w.tree) { return node.children ? node.children.flatMap(child => w.panes(child)) : [node]; },
    active() { return w.panes().find(p => p.id === w.activeId); },
    focus(id) { if (w.panes().some(p => p.id === id)) w.activeId = id; },
    open(route, { preview = false, history = true } = {}) {
      const p = w.active();
      let existing = p.tabs.find(t => t.route === route);
      if (!existing) {
        if (preview) p.tabs = p.tabs.filter(t => !t.preview);
        existing = tab(route, preview);
        p.tabs.push(existing);
      } else if (!preview) existing.preview = false;
      p.route = route;
      if (history && p.history[p.historyIndex] !== route) {
        p.history.splice(p.historyIndex + 1);
        p.history.push(route);
        p.historyIndex = p.history.length - 1;
      }
      w.recent = [route, ...w.recent.filter(r => r !== route)];
    },
    newFile() {
      const number = ++nextBuffer, route = `untitled/${number}`;
      w.buffers.set(route, { name: number === 1 ? 'untitled' : `untitled ${number}`, text: '', dirty: false });
      w.open(route);
      return route;
    },
    keep(route) { const t = w.active().tabs.find(t => t.route === route); if (t) t.preview = false; },
    closeTab(route) {
      const p = w.active(), index = p.tabs.findIndex(t => t.route === route);
      if (index < 0) return;
      p.tabs.splice(index, 1);
      if (p.route === route) p.route = p.tabs[Math.min(index, p.tabs.length - 1)]?.route ?? null;
      if (!p.tabs.length && w.panes().length > 1) w.removePane();
    },
    back() { return w.travel(-1); },
    forward() { return w.travel(1); },
    travel(delta) {
      const p = w.active(), index = p.historyIndex + delta;
      if (index < 0 || index >= p.history.length) return false;
      p.historyIndex = index;
      w.open(p.history[index], { history: false });
      return true;
    },
    split(direction, route = w.active().route) {
      const old = w.active(), created = pane(route);
      const currentTab = old.tabs.find(t => t.route === old.route);
      if (currentTab && route === old.route) created.tabs = [{ ...currentTab, preview: false }];
      const children = ['left', 'up'].includes(direction) ? [created, old] : [old, created];
      replace(old.id, { id: `group-${++nextId}`, axis: ['left', 'right'].includes(direction) ? 'horizontal' : 'vertical', ratio: 50, children });
      w.activeId = created.id;
      if (route) w.recent = [route, ...w.recent.filter(r => r !== route)];
      w.zoomed = false;
      return created;
    },
    removePane() {
      const list = w.panes(), index = list.findIndex(p => p.id === w.activeId);
      if (list.length === 1) return;
      replace(w.activeId, null);
      w.activeId = list[index - 1]?.id ?? list[index + 1].id;
      w.zoomed = false;
    },
    moveTab(fromId, toId, route, index) {
      const from = w.panes().find(p => p.id === fromId), to = w.panes().find(p => p.id === toId);
      const moved = from?.tabs.find(t => t.route === route);
      if (!moved || !to) return;
      from.tabs.splice(from.tabs.indexOf(moved), 1);
      if (from.route === route) from.route = from.tabs[0]?.route ?? null;
      if (!to.tabs.some(t => t.route === route)) to.tabs.splice(Math.min(index ?? to.tabs.length, to.tabs.length), 0, { ...moved, preview: false });
      to.route = route;
      if (!from.tabs.length && from !== to) { w.activeId = from.id; w.removePane(); }
      w.activeId = to.id;
      w.open(route);
    },
  };
  function replace(id, replacement) {
    function walk(node) {
      if (node.id === id) return replacement;
      if (!node.children) return node;
      node.children = node.children.map(walk).filter(Boolean);
      return node.children.length === 1 ? node.children[0] : node;
    }
    w.tree = walk(w.tree);
  }
  return w;
}
