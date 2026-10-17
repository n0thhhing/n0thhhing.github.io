import test from 'node:test';
import assert from 'node:assert/strict';
import { runCommand, completeCommand } from '../site/js/commands.js';
import { homePage } from '../site/js/pages.js';

test('Markdown preview headings contain no source markers', () => {
  assert.doesNotMatch(homePage(), /markdown-hash/);
});

test('the portfolio shell navigates a virtual workspace without escaping its root', () => {
  assert.equal(runCommand('cd projects').cwd, '~/projects');
  assert.equal(runCommand('pwd', { cwd: '~/projects' }).text, '~/projects');
  assert.equal(runCommand('cd ../themes', { cwd: '~/projects' }).cwd, '~/themes');
  assert.equal(runCommand('cd ../../../', { cwd: '~/projects' }).cwd, '~');
  assert.equal(runCommand('cd', { cwd: '~/themes' }).cwd, '~');
  assert.equal(runCommand('cd about.md').error, true);
  assert.equal(runCommand('cd missing').cwd, undefined);
  assert.ok(runCommand('ls projects').entries.some(entry => entry.name === 'rarm64.md'));
});

test('cat reads real portfolio content and shared project/theme data', () => {
  assert.equal(runCommand('cat about.md').document, 'about');
  assert.equal(runCommand('cat ../README.md', { cwd: '~/projects' }).document, 'home');
  assert.match(runCommand('cat rarm64.md', { cwd: '~/projects' }).text, /Mach-O/);
  assert.doesNotMatch(runCommand('cat rarm64.md', { cwd: '~/projects' }).text, /github.com/);
  assert.match(runCommand('cat themes/dracula.json').text, /#bd93f9/);
  assert.equal(runCommand('cat nonexistent.md').error, true);
  assert.equal(runCommand('cat projects').error, true);
  assert.equal(runCommand('open rarm64').route, 'projects/rarm64');
  assert.equal(runCommand('open about.md').route, 'about');
});

test('shell input preserves text and exposes useful session information', () => {
  assert.equal(runCommand('echo Hello <world>').text, 'Hello <world>');
  assert.match(runCommand('history', { history: ['ls', 'cd projects'] }).text, /cd projects/);
  assert.match(runCommand('fetch', { theme: 'panda' }).text, /Panda/);
  assert.ok(runCommand('neofetch').fetch);
  assert.match(runCommand('help').text, /cat/);
});

test('completion follows the current directory and relative paths', () => {
  assert.deepEqual(completeCommand('cd pro'), ['cd projects/']);
  assert.deepEqual(completeCommand('cat rar', '~/projects'), ['cat rarm64.md']);
  assert.deepEqual(completeCommand('cat ../abo', '~/projects'), ['cat ../about.md']);
  assert.deepEqual(completeCommand('cat dra', '~/themes'), ['cat dracula.json']);
});

test('git command reports repository branch and working tree status', () => {
  assert.match(runCommand('git').text, /clean/);
  assert.match(runCommand('git status').text, /On branch main/);
  assert.match(runCommand('git branch').text, /\* main/);
  assert.match(runCommand('git log').text, /commit/);
  assert.equal(runCommand('git checkout').error, true);
  assert.deepEqual(completeCommand('git st'), ['git status']);
});
