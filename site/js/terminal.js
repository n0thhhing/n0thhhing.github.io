import { runCommand, completeCommand } from './commands.js';
import { renderPage } from './pages.js';

function element(tag, className, text = '') {
  const node = document.createElement(tag);
  node.className = className;
  node.textContent = text;
  return node;
}

function fileText(route) {
  const document = window.document.createElement('div');
  document.innerHTML = renderPage(route);
  document.querySelectorAll('[aria-hidden="true"]').forEach(node => node.remove());
  const blocks = [...document.querySelectorAll('h1, h2, h3, p, li, pre, .inline-note')].map(node => {
    const lines = node.querySelectorAll('.code-line');
    return lines.length ? [...lines].map(line => line.textContent).join('\n') : node.textContent.trim();
  });
  const links = [...new Set([...document.querySelectorAll('a[href^="https:"]')].map(link => link.href))];
  return [...blocks, ...links].join('\n\n');
}

function appendText(container, text) {
  for (const part of text.split(/(https:\/\/[^\s<>"]+)/g)) {
    if (part.startsWith('https://')) {
      const link = element('a', 'terminal-link', part);
      link.href = part;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      container.append(link);
    } else container.append(document.createTextNode(part));
  }
}

export function initTerminal({ navigate, applyTheme }) {
  const terminal = document.querySelector('#terminal');
  const editor = terminal.parentElement;
  const body = document.querySelector('#terminal-body');
  const input = document.querySelector('#terminal-input');
  const output = document.querySelector('#terminal-output');
  const intro = terminal.querySelector('.terminal-intro');
  const resizer = document.querySelector('#terminal-resizer');
  const maximize = document.querySelector('#terminal-maximize');
  const history = [];
  let historyIndex = 0, draft = '', cwd = '~', drag = null;

  function scrollToPrompt() {
    body.scrollTop = body.scrollHeight;
    input.focus({ preventScroll: true });
  }

  function sync() {
    document.querySelectorAll('[data-terminal-toggle]').forEach(button => button.setAttribute('aria-expanded', !terminal.hidden));
    document.querySelector('#terminal-cwd').textContent = cwd;
    document.querySelector('#terminal-tab-cwd').textContent = cwd;
  }

  function setMaximized(value) {
    editor.classList.toggle('terminal-maximized', value);
    maximize.setAttribute('aria-pressed', value);
    maximize.setAttribute('aria-label', value ? 'Restore terminal size' : 'Maximize terminal');
    maximize.title = value ? 'Restore terminal size' : 'Maximize terminal';
    maximize.querySelector('path').setAttribute('d', value ? 'M8 8h13v13H8zM3 16V3h13' : 'M8 3H3v5m13-5h5v5M3 16v5h5m8 0h5v-5');
  }

  function clear() {
    output.replaceChildren();
    intro.hidden = true;
    scrollToPrompt();
  }

  function appendEntry(command, result) {
    const entry = element('div', 'terminal-entry');
    const prompt = element('div', 'terminal-entry-command');
    prompt.append(element('span', 'terminal-command-cwd', cwd), element('span', 'terminal-chevron', '❯'), element('span', 'terminal-typed', command));
    entry.append(prompt);
    if (result.fetch) {
      const fetch = element('div', 'terminal-fetch');
      const art = element('pre', 'fetch-art', '██╗\n██║\n██║\n███████╗\n╚══════╝');
      art.setAttribute('aria-hidden', 'true');
      fetch.append(art);
      const info = element('div', 'fetch-info');
      info.append(element('div', 'fetch-title', 'levi / levi.napz'));
      const rows = element('dl', 'fetch-rows');
      for (const [key, value] of result.fetch) rows.append(element('dt', '', key), element('dd', '', value));
      const colors = element('div', 'tiny-palette');
      colors.setAttribute('aria-hidden', 'true');
      for (let i = 0; i < 6; i++) colors.append(element('i', ''));
      info.append(rows, colors);
      fetch.append(info);
      entry.append(fetch);
    } else if (result.help || result.entries) {
      const list = element('div', 'terminal-list');
      const entries = result.help?.map(([command, detail]) => ({ name: command, command, detail })) ?? result.entries;
      for (const item of entries) {
        const button = element('button', 'terminal-list-row');
        button.dataset.command = item.command;
        button.append(element('span', item.directory ? 'terminal-directory' : 'terminal-filename', item.name));
        if (item.detail) button.append(element('span', 'terminal-file-detail', item.detail));
        list.append(button);
      }
      entry.append(list);
      if (result.help) entry.append(element('div', 'terminal-footnote', 'Click a command to try it. ↑↓ history · Tab complete · Ctrl+L clear · Ctrl+C cancel.'));
    } else {
      const text = result.document ? fileText(result.document) : result.text;
      if (text) {
        const response = element('pre', `terminal-entry-output${result.error ? ' terminal-error' : ''}`);
        appendText(response, text);
        entry.append(response);
      }
    }
    output.append(entry);
    return entry;
  }

  function execute(command) {
    if (!command.trim()) return;
    history.push(command);
    historyIndex = history.length;
    draft = '';
    delete input.dataset.completed;
    const result = runCommand(command, { cwd, history, theme: document.documentElement.dataset.theme });
    intro.hidden = true;
    let entryNode = null;
    if (result.clear) clear(); else entryNode = appendEntry(command, result);
    if (result.cwd) cwd = result.cwd;
    if (result.route) { setMaximized(false); navigate(result.route); }
    if (result.theme) applyTheme(result.theme);
    input.value = '';
    sync();
    if (entryNode && entryNode.offsetHeight + 50 > body.clientHeight) {
      body.scrollTop = entryNode.offsetTop - 8;
    } else {
      scrollToPrompt();
    }
  }

  document.querySelector('#terminal-form').addEventListener('submit', event => { event.preventDefault(); execute(input.value); });
  input.addEventListener('keydown', event => {
    if (event.ctrlKey && ['l', 'u', 'c'].includes(event.key.toLowerCase())) {
      const key = event.key.toLowerCase();
      if (key === 'c' && input.selectionStart !== input.selectionEnd) return;
      event.preventDefault();
      if (key === 'l') clear();
      if (key === 'c') { intro.hidden = true; appendEntry(`${input.value}^C`, { text: '' }); }
      if (key !== 'l') input.value = '';
      if (key !== 'l') { historyIndex = history.length; draft = ''; delete input.dataset.completed; }
      scrollToPrompt();
      return;
    }
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
      if (historyIndex === history.length) draft = input.value;
      historyIndex = Math.max(0, Math.min(history.length, historyIndex + (event.key === 'ArrowUp' ? -1 : 1)));
      input.value = history[historyIndex] ?? draft;
      input.setSelectionRange(input.value.length, input.value.length);
      delete input.dataset.completed;
    }
    if (event.key === 'Tab' && !event.shiftKey) {
      const matches = completeCommand(input.value, cwd);
      if (matches.length === 1 && matches[0] !== input.value.trimStart()) {
        event.preventDefault(); input.value = matches[0];
      } else if (matches.length > 1 && input.dataset.completed !== input.value) {
        event.preventDefault();
        const suggestions = element('div', 'terminal-completions');
        for (const match of matches) {
          const button = element('button', '', match);
          button.dataset.complete = match;
          suggestions.append(button);
        }
        output.append(suggestions);
        input.dataset.completed = input.value;
        body.scrollTop = body.scrollHeight;
      }
    }
    if (event.key === 'Escape') { event.preventDefault(); setMaximized(false); document.querySelector('#content').focus(); }
  });
  input.addEventListener('input', () => { delete input.dataset.completed; });
  body.addEventListener('click', event => { if (event.target === body || event.target === output) input.focus({ preventScroll: true }); });

  document.addEventListener('click', event => {
    const button = event.target.closest('button');
    if (!button) return;
    if (button.matches('[data-command]')) { terminal.hidden = false; execute(button.dataset.command); }
    if (button.matches('[data-complete]')) { input.value = button.dataset.complete; delete input.dataset.completed; scrollToPrompt(); }
    if (button.matches('[data-terminal-toggle]')) {
      const wasFocused = terminal.contains(document.activeElement);
      setMaximized(false);
      terminal.hidden = !terminal.hidden;
      sync();
      if (!terminal.hidden) scrollToPrompt();
      else if (wasFocused) document.querySelector('.statusbar [data-terminal-toggle]').focus();
    }
    if (button.id === 'terminal-clear') clear();
    if (button.id === 'terminal-maximize') { setMaximized(!editor.classList.contains('terminal-maximized')); scrollToPrompt(); }
  });

  function setHeight(height) {
    const max = Math.max(140, editor.clientHeight - 155);
    const value = Math.round(Math.min(max, Math.max(140, height)));
    terminal.style.setProperty('--terminal-height', `${value}px`);
    resizer.setAttribute('aria-valuenow', value);
    resizer.setAttribute('aria-valuemax', max);
    resizer.setAttribute('aria-valuetext', `Terminal height ${value} pixels`);
  }
  resizer.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    drag = { y: event.clientY, height: terminal.getBoundingClientRect().height };
    resizer.setPointerCapture(event.pointerId);
    document.body.classList.add('terminal-resizing');
    event.preventDefault();
  });
  resizer.addEventListener('pointermove', event => { if (drag) setHeight(drag.height + drag.y - event.clientY); });
  const endDrag = () => { drag = null; document.body.classList.remove('terminal-resizing'); };
  resizer.addEventListener('pointerup', endDrag);
  resizer.addEventListener('pointercancel', endDrag);
  resizer.addEventListener('keydown', event => {
    if (!['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    setHeight(event.key === 'Home' ? 140 : event.key === 'End' ? editor.clientHeight : terminal.getBoundingClientRect().height + (event.key === 'ArrowUp' ? 25 : -25));
  });
  resizer.addEventListener('dblclick', () => setHeight(matchMedia('(max-width: 540px)').matches ? 200 : 240));
  window.addEventListener('resize', () => { if (!terminal.hidden && !editor.classList.contains('terminal-maximized')) setHeight(terminal.getBoundingClientRect().height); });
  setHeight(matchMedia('(max-width: 540px)').matches ? 200 : 240);
  sync();
}
