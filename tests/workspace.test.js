import test from 'node:test';
import assert from 'node:assert/strict';
import { projects, repositoryLink, projectStatus, music, anime } from '../site/js/content.js';
import { runCommand, completeCommand, parseRoute } from '../site/js/commands.js';
import { themes, resolveTheme, readTheme, saveTheme } from '../site/js/themes.js';
import { projectPage, escapeHTML } from '../site/js/pages.js';
import { findFiles } from '../site/js/files.js';

test('quick open finds pages and local projects without changing their routes', () => {
  assert.equal(findFiles('').length, 5 + projects.length);
  assert.equal(findFiles('readme')[0].route, 'home');
  assert.equal(findFiles('  PROJECTS RARM  ')[0].route, 'projects/rarm64');
  assert.equal(findFiles('ART.MD')[0].route, 'art');
  assert.deepEqual(findFiles('no such project'), []);
});

test('local projects gain a repository link with a single data edit', () => {
  const local = projects.find(project => project.id === 'rarm64');
  assert.equal(repositoryLink(local), null);
  assert.equal(repositoryLink({ ...local, repoUrl: 'https://github.com/n0thhhing/rarm64' }), 'https://github.com/n0thhhing/rarm64');
  for (const project of projects) {
    if (project.repoUrl) assert.match(repositoryLink(project), /^https:\/\/github\.com\/n0thhhing\/[\w-]+$/);
  }
  assert.equal(repositoryLink({ repoUrl: 'javascript:alert(1)' }), null);
  assert.doesNotMatch(projectPage(local), /View repository/);
  assert.match(projectPage({ ...local, repoUrl: 'https://github.com/n0thhhing/rarm64' }), /View repository/);
});

test('terminal-like text is escaped rather than interpreted as markup', () => {
  assert.equal(escapeHTML('<script>"&\'</script>'), '&lt;script&gt;&quot;&amp;&#39;&lt;/script&gt;');
});

test('experimental project status stays consistent in pages and shell output', () => {
  const project = projects.find(project => project.status === 'Experimental');
  assert.equal(projectStatus(project), 'Local / in development · Experimental');
  assert.match(runCommand(`cat projects/${project.id}.md`).text, /Local \/ in development · Experimental/);
  assert.match(projectPage(project), /Local \/ in development · Experimental/);
  assert.doesNotMatch(projectPage(project), /Experimental · Experimental/);
});

test('commands navigate to the same routes as workspace links', () => {
  for (const page of ['about', 'art', 'music', 'anime', 'projects']) {
    assert.equal(runCommand(page).route, page === 'music' || page === 'anime' ? 'interests' : page);
  }
  for (const project of projects) assert.equal(runCommand(`project ${project.id}`).route, `projects/${project.id}`);
  assert.equal(runCommand(' PROJECT   Wallify ').route, 'projects/wallify');
  assert.match(runCommand('project missing').text, /not found/i);
  assert.match(runCommand('project').text, /project <name>/);
  assert.match(runCommand('rm -rf /').text, /help/);
  assert.equal(runCommand('clear').clear, true);
  assert.equal(runCommand('   ').text, '');
  assert.match(runCommand('help').text, /whoami/);
  assert.match(runCommand('music').text, new RegExp(music[0]));
  assert.match(runCommand('anime').text, new RegExp(anime[0]));
});

test('completion handles commands, project names, and spaced theme names', () => {
  assert.deepEqual(completeCommand('who'), ['whoami']);
  assert.deepEqual(completeCommand('project rar'), ['project rarm64']);
  assert.deepEqual(completeCommand('theme cat'), ['theme catppuccin-frappe']);
  assert.equal(runCommand('theme Gruvbox Material').theme, 'gruvbox-material');
  assert.match(runCommand('theme missing').text, /Unknown theme/);
  assert.match(runCommand('themes').text, /Gruvbox Material/);
});

test('only known routes are accepted, including direct project links', () => {
  assert.equal(parseRoute('#projects/hexer'), 'projects/hexer');
  assert.equal(parseRoute('#about'), 'about');
  assert.equal(parseRoute('#projects/missing'), 'home');
  assert.equal(parseRoute('#%broken'), 'home');
  assert.equal(parseRoute(''), 'home');
});

test('theme persistence falls back safely for invalid and blocked storage', () => {
  assert.equal(themes.length, 6);
  assert.equal(themes[0].id, 'gruvbox-material');
  const blocked = { getItem() { throw new Error('blocked'); }, setItem() { throw new Error('blocked'); } };
  assert.equal(readTheme(blocked), 'gruvbox-material');
  assert.equal(saveTheme('panda', blocked), 'panda');
  assert.equal(resolveTheme('unknown'), 'gruvbox-material');
  const values = new Map();
  const storage = { getItem: key => values.get(key), setItem: (key, value) => values.set(key, value) };
  saveTheme('dracula', storage);
  assert.equal(readTheme(storage), 'dracula');
  values.set('levi-theme', 'removed-theme');
  assert.equal(readTheme(storage), 'gruvbox-material');
});
