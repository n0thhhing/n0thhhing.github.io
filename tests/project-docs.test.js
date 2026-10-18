import test from 'node:test';
import assert from 'node:assert/strict';
import { projects } from '../site/js/content.js';
import { projectDeepDives } from '../site/js/deepdives.js';
import { projectPage } from '../site/js/project-page.js';

test('all projects have a document layout and a deep-dive record', () => {
  assert.equal(projects.length, 13);
  for (const project of projects) {
    assert.ok(projectDeepDives[project.id], 'missing deep dive: ' + project.id);
    const html = projectPage(project);
    assert.match(html, /project-document/);
    assert.match(html, /project-outline/);
    assert.match(html, new RegExp('data-doc-section="doc-' + project.id + '-overview"'));
  }
});
test('Proplam-menu documents the historical Herx/JUDSN work', () => {
  const project = projects.find(item => item.id === 'proplam-menu');
  assert.ok(project);
  assert.equal(project.repoUrl, 'https://github.com/n0thhhing/Proplam-menu');
  assert.match(projectDeepDives['proplam-menu'].summary, /Herx\/JUDSN era/);
});
test('Discord Rich Presence describes the Gateway WebSocket', () => {
  const project = projects.find(item => item.id === 'discord-rich-presence');
  assert.match(project.architectureFlow, /Gateway WebSocket/);
  assert.doesNotMatch(project.deepDive, /local IPC-only client/);
});
