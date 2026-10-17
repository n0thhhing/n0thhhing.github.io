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

export function createTerminalSession({ body, initialCwd = '~', navigate, applyTheme, leave, onChange }) {
  const input = body.querySelector('textarea');
  const output = body.querySelector('[data-term-role="terminal-output"]');
  const intro = body.querySelector('.terminal-intro');
  function resizeInput() {
    if (!body.getClientRects().length) return;
    input.style.height = '0px';
    input.style.height = `${input.scrollHeight}px`;
  }
  const history = [];
  let historyIndex = 0, draft = '', cwd = initialCwd;

  function scrollToPrompt() {
    body.scrollTop = body.scrollHeight;
    input.focus({ preventScroll: true });
    resizeInput();
  }

  function getTimestamp() {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  }

  function sync() {
    const path = cwd === '~' ? 'website' : `website/${cwd.slice(2)}`;
    body.querySelector('[data-term-role="terminal-cwd"]').textContent = cwd;
    body.querySelector('form .prompt-path').textContent = path;
    const timeEl = body.querySelector('[data-term-role="terminal-time"]');
    if (timeEl) timeEl.textContent = getTimestamp();
    resizeInput();
    onChange();
  }

  function clear() {
    output.replaceChildren();
    intro.hidden = true;
    scrollToPrompt();
  }

  function appendEntry(command, result) {
    const entry = element('div', 'terminal-entry');
    const promptBox = element('div', 'terminal-entry-prompt');
    const row1 = element('div', 'terminal-prompt-row1');
    const displayPath = cwd === '~' ? 'website' : `website/${cwd.slice(2)}`;
    row1.innerHTML = `<span class="prompt-user">levi.napz</span> <span class="prompt-arrow">-&gt;</span> <span class="prompt-path">${displayPath}</span> <span class="prompt-branch">main*!?</span> <span class="prompt-time">${getTimestamp()}</span>`;
    const row2 = element('div', 'terminal-entry-command');
    row2.append(element('span', 'terminal-chevron', '>'), element('span', 'terminal-typed', command));
    promptBox.append(row1, row2);
    entry.append(promptBox);
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
    if (result.route) navigate(result.route);
    if (result.theme) applyTheme(result.theme);
    input.value = '';
    sync();
    input.focus({ preventScroll: true });
    if (entryNode && entryNode.offsetHeight + 50 > body.clientHeight) {
      body.scrollTop = entryNode.offsetTop - 8;
    } else {
      scrollToPrompt();
    }
  }

  body.querySelector('form').addEventListener('submit', event => { event.preventDefault(); execute(input.value); });
  input.addEventListener('keydown', event => {
    if (event.key === 'Enter' && !event.shiftKey && !event.isComposing) { event.preventDefault(); execute(input.value); return; }
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
      resizeInput();
    }
    if (event.key === 'Tab' && !event.shiftKey) {
      const matches = completeCommand(input.value, cwd);
      if (matches.length === 1 && matches[0] !== input.value.trimStart()) {
        event.preventDefault(); input.value = matches[0]; resizeInput();
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
    if (event.key === 'Escape') { event.preventDefault(); leave(); }
  });
  input.addEventListener('input', () => { delete input.dataset.completed; resizeInput(); });
  body.addEventListener('click', event => {
    if (!event.target.closest('a,button,textarea') && !window.getSelection()?.toString()) scrollToPrompt();
  });

  sync();
  return { body, input, get cwd() { return cwd; }, clear, execute, focus: scrollToPrompt, resizeInput,
    complete(value) { input.value = value; delete input.dataset.completed; scrollToPrompt(); },
  };
}
