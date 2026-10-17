import test from 'node:test';
import assert from 'node:assert/strict';
import { createWorkspace } from '../site/js/workspace.js';
import { findFiles, fuzzyMatch } from '../site/js/files.js';
import { searchText } from '../site/js/search.js';

test('splits duplicate only the active item and keep independent tabs and history', () => {
  const w = createWorkspace('home');
  const first = w.active();
  w.open('about');
  const second = w.split('right');
  assert.equal(second.route, 'about');
  assert.deepEqual(second.tabs.map(t => t.route), ['about']);
  w.open('art');
  w.back();
  assert.equal(second.route, 'about');
  assert.equal(first.route, 'about');
  w.forward();
  assert.equal(second.route, 'art');
  w.split('down');
  assert.equal(w.panes().length, 3);
  assert.equal(w.tree.axis, 'horizontal');
  assert.equal(w.tree.children[1].axis, 'vertical');
  w.removePane();
  assert.equal(w.panes().length, 2);
  assert.equal(w.tree.children[1].id, second.id);
});

test('preview tabs replace each other; keeping, closing and moving tabs preserve content', () => {
  const w = createWorkspace('home');
  const first = w.active();
  w.open('about', { preview: true });
  w.open('art', { preview: true });
  assert.deepEqual(first.tabs.map(t => t.route), ['home', 'art']);
  w.keep('art');
  w.open('interests', { preview: true });
  const second = w.split('left');
  w.moveTab(first.id, second.id, 'art', 0);
  assert.equal(first.tabs.some(t => t.route === 'art'), false);
  assert.equal(second.tabs[0].route, 'art');
  w.moveTab(second.id, second.id, 'art', 2);
  assert.equal(second.tabs.at(-1).route, 'art');
  for (const tab of [...second.tabs]) w.closeTab(tab.route);
  assert.equal(w.panes().length, 1);
  for (const tab of [...first.tabs]) w.closeTab(tab.route);
  assert.equal(w.active().route, null);
  assert.equal(w.panes().length, 1);
  w.open('projects');
  assert.equal(w.active().route, 'projects');
});

test('revisiting a preview from history does not destroy kept tabs or forward history', () => {
  const w = createWorkspace('home');
  w.open('about', { preview: true });
  w.open('art', { preview: true });
  w.back();
  assert.equal(w.active().route, 'about');
  w.forward();
  assert.equal(w.active().route, 'art');
  w.back();
  w.open('interests');
  assert.equal(w.forward(), false);
  assert.equal(w.recent[0], 'interests');
});

test('file finder supports fuzzy paths, filename ranking and matched character positions', () => {
  assert.equal(findFiles('rdme')[0].route, 'home');
  assert.equal(findFiles('rarm')[0].route, 'projects/rarm64');
  assert.ok(findFiles('PROJECTS RARM').some(f => f.route === 'projects/rarm64'));
  assert.equal(fuzzyMatch('README.md', 'rdme').positions.map(i => 'README.md'[i]).join('').toLowerCase(), 'rdme');
  assert.equal(fuzzyMatch('about.md', 'zz'), null);
  assert.ok(findFiles('.md').every(f => f.name.endsWith('.md') && f.path.endsWith('.md')));
});

test('find supports literals, case, Unicode word boundaries, regex and invalid patterns', () => {
  assert.equal(searchText('Art art artist', 'art').matches.length, 3);
  assert.equal(searchText('Art art artist', 'art', { caseSensitive: true }).matches.length, 2);
  assert.equal(searchText('art artist café caféine', 'art', { wholeWord: true }).matches.length, 1);
  assert.equal(searchText('café caféine', 'café', { wholeWord: true }).matches.length, 1);
  assert.equal(searchText('a.b aXb', 'a.b').matches.length, 1);
  assert.equal(searchText('a.b aXb', 'a.b', { regex: true }).matches.length, 2);
  assert.ok(searchText('text', '[', { regex: true }).error);
  assert.deepEqual(searchText('text', '', {}).matches, []);
  assert.equal(searchText('text', '^', { regex: true }).matches.length, 0);
});

test('all split directions preserve tab state without sharing mutable search state', () => {
  for (const direction of ['left', 'right', 'up', 'down']) {
    const w = createWorkspace('projects');
    const old = w.active();
    old.tabs[0].scroll = 123;
    old.tabs[0].category = 'Apps';
    old.search.query = 'old';
    const next = w.split(direction);
    assert.equal(next.tabs[0].scroll, 123);
    next.tabs[0].category = 'Systems';
    next.search.query = 'new';
    assert.equal(old.tabs[0].category, 'Apps');
    assert.equal(old.search.query, 'old');
    assert.equal(w.tree.children[['left', 'up'].includes(direction) ? 0 : 1].id, next.id);
  }
});

test('moving onto an existing preview keeps one permanent tab and records navigation', () => {
  const w = createWorkspace('home');
  const first = w.active();
  w.open('about');
  const second = w.split('right');
  w.open('art');
  w.closeTab('about');
  w.open('about', { preview: true });
  assert.equal(second.tabs.find(t => t.route === 'about').preview, true);
  w.moveTab(first.id, second.id, 'about');
  assert.equal(second.tabs.filter(t => t.route === 'about').length, 1);
  assert.equal(second.tabs.find(t => t.route === 'about').preview, false);
  assert.equal(second.history.at(-1), 'about');
});

test('opening a file into a split opens only that file in the new pane', () => {
  const w = createWorkspace('home');
  const first = w.active();
  const next = w.split('right', 'about');
  assert.deepEqual(next.tabs.map(t => t.route), ['about']);
  assert.equal(first.route, 'home');
  assert.equal(w.recent[0], 'about');
});

test('new untitled files have distinct buffers and retain text through tab moves and history', () => {
  const w = createWorkspace('home');
  const first = w.newFile();
  w.buffers.get(first).text = 'scratch notes';
  w.open('about');
  w.back();
  assert.equal(w.active().route, first);
  assert.equal(w.buffers.get(first).text, 'scratch notes');
  const second = w.newFile();
  assert.notEqual(second, first);
  assert.equal(w.buffers.get(second).text, '');
  const source = w.active();
  const target = w.split('right');
  w.moveTab(source.id, target.id, first);
  assert.equal(w.buffers.get(first).text, 'scratch notes');
});
