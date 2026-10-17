// Optional browser checks: supply an existing Playwright install; no site dependency is needed.
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { mkdir } from 'node:fs/promises';
import { projects, pages } from '../site/js/content.js';
import { themes } from '../site/js/themes.js';
import { checkEditor } from './editor-browser.mjs';
import { checkTerminal } from './terminal-browser.mjs';

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const browser = await chromium.launch({ channel: process.env.BROWSER_CHANNEL || 'chrome', headless: true });
const page = await browser.newPage();
const errors = [];
page.on('pageerror', error => errors.push(error.message));
page.on('console', message => {
  if (['warning', 'error'].includes(message.type())) errors.push(message.text());
});
page.on('response', response => {
  if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`);
});
const origin = process.env.TEST_URL || 'http://127.0.0.1:4173';
const panel = page.locator('#explorer');
const separator = page.locator('#explorer-resizer');
const artifactDir = process.env.SCREENSHOT_DIR;
if (artifactDir) await mkdir(artifactDir, { recursive: true });
async function inViewport(selector) {
  await page.waitForFunction(selector => {
    const rect = document.querySelector(selector).getBoundingClientRect();
    return rect.width > 0 && rect.x >= 0 && rect.y >= 0 && rect.right <= innerWidth + 1 && rect.bottom <= innerHeight + 1;
  }, selector, { timeout: 2000 });
  const rect = await page.locator(selector).boundingBox();
  const viewport = page.viewportSize();
  assert.ok(rect && rect.x >= 0 && rect.y >= 0 && rect.x + rect.width <= viewport.width + 1 && rect.y + rect.height <= viewport.height + 1, `${selector} stays in viewport`);
}

function contrastFailures() {
  const rgb = value => value.match(/[\d.]+/g).map(Number);
  const luminance = color => color.slice(0, 3).map(value => value / 255).map(value => value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4).reduce((sum, value, index) => sum + value * [.2126, .7152, .0722][index], 0);
  const background = element => {
    for (; element; element = element.parentElement) {
      const color = rgb(getComputedStyle(element).backgroundColor);
      if (color[3] !== 0) return color;
    }
    return [40, 40, 40];
  };
  return [...document.querySelectorAll('body *')].filter(node => node.getClientRects().length && !node.closest('[aria-hidden="true"]') && [...node.childNodes].some(child => child.nodeType === 3 && child.textContent.trim())).flatMap(node => {
    const style = getComputedStyle(node);
    const light = [luminance(rgb(style.color)), luminance(background(node))].sort((a, b) => b - a);
    const ratio = (light[0] + .05) / (light[1] + .05);
    const large = parseFloat(style.fontSize) >= 24 || (parseFloat(style.fontSize) >= 18.66 && Number(style.fontWeight) >= 700);
    return ratio < (large ? 3 : 4.5) ? [{ text: node.textContent.slice(0, 40), ratio }] : [];
  });
}

try {
  for (const width of [768, 1100, 1728]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(origin);
    const initial = await panel.boundingBox();
    const handle = await separator.boundingBox();
    assert.ok(Math.abs(handle.x + handle.width / 2 - initial.width) < 1, `Resize handle aligned at ${width}px`);
    await separator.focus();
    assert.equal(await separator.evaluate(node => getComputedStyle(node).outlineStyle), 'solid');
    await page.keyboard.press('ArrowRight');
    assert.equal((await panel.boundingBox()).width, initial.width + 25);
    await page.keyboard.press('End');
    assert.equal((await panel.boundingBox()).width, Math.min(500, width - 400));
    await page.keyboard.press('Home');
    assert.equal((await panel.boundingBox()).width, 160);
    await page.mouse.move(160, 300);
    await page.mouse.down();
    await page.mouse.move(285, 300);
    await page.mouse.up();
    assert.equal((await panel.boundingBox()).width, 285);
    await page.reload();
    assert.equal((await panel.boundingBox()).width, 285);
    await page.evaluate(() => localStorage.removeItem('levi-explorer-width'));
  }
  await page.goto(`${origin}/#about`);
  assert.equal(await page.locator('#breadcrumb').textContent(), 'about.md › # A little about the person.');
  assert.equal(await page.locator('.titlebar button').count(), 1);
  await page.locator('.profile-button').click();
  assert.equal(await page.locator('#social-menu').evaluate(node => node.matches(':popover-open')), true);
  assert.deepEqual(await page.locator('#social-menu a').evaluateAll(links => links.map(link => link.href)), ['https://github.com/n0thhhing', 'https://instagram.com/levi.napz']);
  assert.equal(await page.locator('.profile-button img').evaluate(image => image.complete && image.naturalWidth > 0), true);
  await page.keyboard.press('Escape');
  assert.equal(await page.locator('#social-menu').evaluate(node => node.matches(':popover-open')), false);
  assert.equal(await page.locator('#status-theme').count(), 1);
  await page.locator('.statusbar [data-open-files]').click();
  assert.equal(await page.locator('#file-picker').evaluate(node => node.open), true);
  await page.keyboard.press('Escape');
  await page.mouse.click(20, 20);
  await page.keyboard.press(process.platform === 'darwin' ? 'Meta+A' : 'Control+A');
  const selected = await page.evaluate(() => getSelection().toString());
  assert.match(selected, /A little about the person/);
  assert.doesNotMatch(selected, /Go to file|README\.md|Instagram/);
  assert.equal(await page.locator('#explorer .chevron').count(), 0);
  const rootFolder = page.locator('.folder-root');
  assert.equal(await rootFolder.locator('.folder-open').isVisible(), true);
  assert.equal(await rootFolder.locator('.folder-closed').isVisible(), false);
  await rootFolder.click();
  assert.equal(await rootFolder.locator('.folder-open').isVisible(), false);
  assert.equal(await rootFolder.locator('.folder-closed').isVisible(), true);
  assert.equal(await page.locator('#file-nav').isVisible(), false);
  await page.keyboard.press('Enter');
  assert.equal(await rootFolder.locator('.folder-open').isVisible(), true);
  assert.equal(await page.locator('#file-nav').isVisible(), true);
  await page.locator('.skip-link').focus();
  await page.keyboard.press('Enter');
  await page.waitForFunction(() => document.activeElement.id === 'content');
  assert.equal(new URL(page.url()).hash, '#about', 'Skip link preserves the current page');
  await page.locator('#terminal-input').focus();
  await page.locator('#terminal-maximize').click();
  await page.locator('#file-nav a[href="#art"]').click();
  await page.waitForURL('**/#art');
  assert.equal(await page.locator('#content').isVisible(), true, 'Page links restore the editor');
  await page.locator('#terminal-input').focus();
  await page.locator('#terminal-maximize').click();
  await page.goto(`${origin}/#interests`);
  assert.equal(await page.locator('#content').isVisible(), true, 'Hash navigation restores the editor');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(origin);
  assert.equal(await page.locator('#breadcrumb').textContent(), 'README.md › # Levi (@n0thhhing) - Personal Portfolio & Systems Showcase');
  assert.equal(await separator.isVisible(), false);
  assert.equal(await page.locator('#terminal').isVisible(), false);

  await page.locator('#explorer-toggle').click();
  assert.equal(await page.locator('.editor').evaluate(node => node.inert), true);
  await page.locator('#explorer .folder-header').last().focus();
  await page.keyboard.press('Tab');
  assert.equal(await page.locator('.folder-root').evaluate(node => node === document.activeElement), true);
  await page.keyboard.press('Shift+Tab');
  assert.equal(await page.locator('#explorer .folder-header').last().evaluate(node => node === document.activeElement), true);
  await page.keyboard.press('Escape');
  assert.equal(await page.locator('#explorer-toggle').evaluate(node => node === document.activeElement), true);
  await page.locator('#explorer-toggle').click();
  await page.keyboard.press('Control+p');
  assert.equal(await page.locator('.editor').evaluate(node => node.inert), false);
  await page.locator('#file-query').fill('no such file');
  assert.equal(await page.locator('.empty-files').isVisible(), true);
  await page.locator('#file-query').fill('rarm');
  await page.keyboard.press('Enter');
  await page.waitForURL('**/#projects/rarm64');
  await page.waitForFunction(() => document.activeElement.id === 'content');
  assert.equal(await page.locator('#breadcrumb').textContent(), 'projects › rarm64.md › # rarm64');
  assert.equal(await page.locator('[data-close-tab="projects/rarm64"] svg').count(), 1, 'Project tab has SVG close icon');
  await page.locator('[data-close-tab="projects/rarm64"]').click();
  await page.waitForURL('**/#home');
  await page.keyboard.press('Control+p');
  await page.locator('#file-query').fill('projects.md');
  await page.keyboard.press('Enter');
  await page.waitForURL('**/#projects');
  await page.locator('[data-filter="Apps"]').click();
  assert.equal(await page.locator('.project-row').count(), projects.filter(project => project.category === 'Apps').length);

  assert.equal(await page.locator('#status-bell, #notification-popover').count(), 0);
  const leftControls = await page.locator('.statusbar-left button').evaluateAll(buttons => buttons.map(button => button.getAttribute('aria-label')));
  const rightControls = await page.locator('.statusbar-right button').evaluateAll(buttons => buttons.map(button => button.getAttribute('aria-label')));
  assert.deepEqual(leftControls, ['Toggle file explorer', 'Go to file']);
  assert.deepEqual(rightControls, ['Open theme palette', 'Toggle terminal', 'Toggle git panel']);

  assert.equal(await page.locator('#git-panel').isHidden(), true);
  await page.locator('#git-toggle').click();
  assert.equal(await page.locator('#git-panel').isVisible(), true);
  assert.ok(await page.locator('.git-commit-row').count() >= 100, 'Overall git commits are listed');
  await page.locator('[data-filter-repo="website"]').click();
  assert.equal(await page.locator('.git-commit-row').count(), 23, '23 website commits listed');
  await page.locator('[data-filter-repo="zeon"]').click();
  assert.equal(await page.locator('.git-commit-row').count(), 138, '138 zeon commits listed');
  await page.locator('#git-tab-changes').click();
  assert.equal(await page.locator('#git-changes-view').isVisible(), true);
  assert.equal(await page.locator('#git-history-view').isHidden(), true);
  await page.locator('#git-tab-history').click();
  assert.equal(await page.locator('#git-history-view').isVisible(), true);
  await page.locator('#git-panel-close').click();
  assert.equal(await page.locator('#git-panel').isHidden(), true);

  await page.locator('.statusbar [data-terminal-toggle]').click();
  await page.locator('#terminal-resizer').focus();
  await page.keyboard.press('Home');
  assert.equal(await page.locator('#terminal-resizer').getAttribute('aria-valuenow'), '140');
  assert.equal(await page.locator('#terminal-resizer').evaluate(node => getComputedStyle(node).outlineStyle), 'solid');
  await page.locator('#terminal-input').fill('cd projects');
  await page.keyboard.press('Enter');
  await page.locator('#terminal-input').fill('cat rar');
  await page.keyboard.press('Tab');
  assert.equal(await page.locator('#terminal-input').inputValue(), 'cat rarm64.md');
  await page.keyboard.press('Enter');
  assert.match(await page.locator('#terminal-output').innerText(), /Mach-O/);
  await page.keyboard.press('ArrowUp');
  assert.equal(await page.locator('#terminal-input').inputValue(), 'cat rarm64.md');
  await page.locator('#terminal-maximize').click();
  assert.equal(await page.locator('#content').isVisible(), false);
  await page.keyboard.press('Escape');
  assert.equal(await page.locator('#content').isVisible(), true);
  await page.locator('.statusbar [data-terminal-toggle]').click();

  await page.locator('#git-toggle').click();
  assert.equal(await page.locator('#git-panel').isVisible(), true, 'Git button opens git panel');
  assert.equal(await page.locator('#terminal').isVisible(), false, 'Git button does not open terminal');
  assert.match(await page.locator('#git-panel').innerText(), /Overall Git Activity/);
  await page.locator('#git-tab-changes').click();
  assert.match(await page.locator('#git-panel').innerText(), /Working tree clean/);
  await page.locator('#git-tab-history').click();
  assert.equal(await page.locator('#git-toggle').getAttribute('aria-expanded'), 'true');
  await page.locator('#git-panel-close').click();
  assert.equal(await page.locator('#git-panel').isVisible(), false, 'Close button closes git panel');
  assert.equal(await page.locator('#git-toggle').getAttribute('aria-expanded'), 'false');
  await page.locator('#git-toggle').click();
  assert.equal(await page.locator('#git-panel').isVisible(), true);
  await page.keyboard.press('Escape');
  assert.equal(await page.locator('#git-panel').isVisible(), false);

  // A dragged overlay must remain reachable after a desktop-to-phone resize.
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.locator('#git-toggle').click();
  assert.equal(await page.locator('#git-panel').isVisible(), true, 'Desktop git toggle opens panel');
  await page.locator('#git-toggle').click();
  assert.equal(await page.locator('#git-panel').isVisible(), false, 'Desktop git toggle closes panel');
  await page.locator('#status-theme').click();
  const heading = await page.locator('#palette .picker-heading').boundingBox();
  await page.mouse.move(heading.x + 120, heading.y + 10);
  await page.mouse.down();
  await page.mouse.move(1050, 460);
  await page.mouse.up();
  await page.setViewportSize({ width: 320, height: 568 });
  await inViewport('#palette');
  assert.equal(await page.locator('#palette').evaluate(node => node.scrollWidth <= node.clientWidth), true);
  await page.keyboard.press('Escape');

  await page.setViewportSize({ width: 1440, height: 900 });
  for (const [saved, expected] of [['9999px', 500], ['1px', 160], ['garbage', 240], ['-20px', 240]]) {
    await page.evaluate(value => localStorage.setItem('levi-explorer-width', value), saved);
    await page.reload();
    assert.equal((await panel.boundingBox()).width, expected);
  }
  await page.evaluate(() => localStorage.removeItem('levi-explorer-width'));

  for (const width of [320, 390, 768, 1100, 1728]) {
    await page.setViewportSize({ width, height: width === 320 ? 568 : 900 });
    for (const route of [...pages.map(page => page.id), ...projects.map(project => `projects/${project.id}`)]) {
      await page.goto(`${origin}/#${route}`);
      assert.equal(await page.locator('#content h1').count(), 1, `${route} has a title`);
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${route} fits at ${width}px`);
      assert.ok(await page.locator('#content').evaluate(node => node.scrollWidth <= node.clientWidth), `${route} content fits at ${width}px`);
    }
    await page.goto(origin);
    if (artifactDir) await page.screenshot({ path: `${artifactDir}/after-${width}.png` });
  }

  for (const [width, height] of [[844, 390], [720, 450], [390, 300]]) {
    await page.setViewportSize({ width, height });
    await page.goto(origin);
    assert.equal(await page.locator('#terminal').isVisible(), false);
    await inViewport('#content');
    await page.locator('#status-theme').click();
    await inViewport('#palette');
    await page.keyboard.press('Escape');
    await page.locator('.statusbar [data-terminal-toggle]').click();
    await inViewport('#terminal-input');
  }

  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(origin);
  await page.locator('a[href="#about"]').first().click();
  await page.waitForURL('**/#about');
  await page.locator('#history-back').click();
  await page.waitForURL('**/#home');
  await page.locator('#history-forward').click();
  await page.waitForURL('**/#about');

  await page.locator('#status-theme').click();
  await page.locator('[data-theme-id="gruvbox-material"]').focus();
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  assert.equal(await page.locator('html').getAttribute('data-theme'), 'gruvbox');
  await page.keyboard.press('Escape');

  for (const theme of themes) {
    await page.locator('#status-theme').click();
    await page.locator(`[data-theme-id="${theme.id}"]`).click();
    assert.deepEqual(await page.evaluate(contrastFailures), [], `${theme.id} picker contrast`);
    await page.keyboard.press('Escape');
    await page.reload();
    assert.equal(await page.locator('html').getAttribute('data-theme'), theme.id);
    await page.emulateMedia({ reducedMotion: 'reduce' });
    for (const route of ['home', 'projects', 'art', 'interests', 'projects/shizukuboothelper']) {
      await page.goto(`${origin}/#${route}`);
      const failures = await page.evaluate(contrastFailures);
      assert.deepEqual(failures, [], `${theme.id} contrast on ${route}`);
    }
  }

  await checkEditor(page, origin, artifactDir, contrastFailures);

  await checkTerminal(page, origin, artifactDir);

  const blocked = await browser.newContext();
  await blocked.addInitScript(() => Object.defineProperty(window, 'localStorage', { get() { throw new Error('Storage blocked'); } }));
  const privatePage = await blocked.newPage();
  privatePage.on('pageerror', error => errors.push(error.message));
  await privatePage.goto(origin);
  await privatePage.locator('#status-theme').click();
  await privatePage.locator('[data-theme-id="panda"]').click();
  assert.equal(await privatePage.locator('html').getAttribute('data-theme'), 'panda');
  await blocked.close();
  assert.deepEqual(errors, []);
  console.log('Browser regression checks passed.');
} catch (error) {
  if (artifactDir) await page.screenshot({ path: `${artifactDir}/failure.png` });
  throw error;
} finally {
  await browser.close();
}
