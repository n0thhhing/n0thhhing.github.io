/**
 * Interactive Terminal CLI Module
 * Lightweight client-side pseudo-shell with tab completion and custom commands.
 */

import { selectRoutine } from './disassembler.js';

const TERMINAL_COMMANDS = {
  help: () => `
<span class="accent">Available commands:</span>
  <span class="mono" style="color:var(--cyan)">about</span>      - Display background, focus, and engineering ethos
  <span class="mono" style="color:var(--cyan)">projects</span>   - List featured systems, compilers, & reverse engineering tools
  <span class="mono" style="color:var(--cyan)">skills</span>     - Show architecture, languages, & low-level proficiencies
  <span class="mono" style="color:var(--cyan)">disasm</span>     - Inspect ARM64 routine (usage: disasm [rarm64|zeon|il2cpp])
  <span class="mono" style="color:var(--cyan)">simd</span>       - Jump to NEON SIMD vector visualizer
  <span class="mono" style="color:var(--cyan)">contact</span>    - GitHub, email, and Discord details
  <span class="mono" style="color:var(--cyan)">uname -a</span>   - Print system & architecture identity
  <span class="mono" style="color:var(--cyan)">clear</span>      - Clear terminal screen
`,

  about: () => `
<span class="accent">Levi (@n0thhhing)</span>
Systems Architect & Reverse Engineer.

I build software with hardware-level empathy:
• Zero-dependency binary tools (Mach-O, ARM64, ELF, WebAssembly)
• Pure Zig & Assembly SIMD vector intrinsics (2,800+ NEON implementations)
• Reverse engineering runtimes (Unity IL2CPP metadata, SQLite call-graph mining)
• High-level native user experiences (Swift/Metal desktop widgets, TypeScript)
`,

  projects: () => `
<span class="accent">Core Repositories:</span>
  • <span style="color:var(--cyan)">rarm64</span>        Zero-dependency Mach-O ARM64/ARM64e disassembler in Rust (Arm 2026-09 spec)
  • <span style="color:var(--emerald)">zeon</span>         2,800+ ARM/ARM64 NEON intrinsics in pure Zig & inline assembly
  • <span style="color:var(--purple)">il2cpp</span>       Unity IL2CPP v29 & 64-bit Android ELF reverse engineering analyzer (Zig)
  • <span style="color:var(--amber)">lwasm</span>        WebAssembly 2.0 runtime, disassembler, & WAT decompiler in Lua/C
  • <span style="color:var(--pink)">wallify</span>      Native macOS music widget in Zig & Swift/Metal with live waveform capture
  • <span style="color:var(--yellow)">hexer</span>        Zero-dependency terminal hex viewer in Rust with ANSI mouse reporting
  • <span style="color:var(--cyan)">Offset-updater</span> AArch64 IL2CPP offset updater with NEON SIMD scanning engine
`,

  skills: () => `
<span class="accent">Technical Proficiencies:</span>
  • <b>Low-Level Systems:</b> ARM64/AArch64, ARM64e, Zig 0.16, Rust, Assembly, C/C++
  • <b>Binary Analysis:</b> Mach-O (Fat/Thin), Android ELF, Unity IL2CPP, WebAssembly 2.0, Dyld chained fixups
  • <b>SIMD & Vectorization:</b> ARM NEON, SSE4, AVX, SIMD algorithmic acceleration
  • <b>Native & UI Tools:</b> Swift, Metal, Dear ImGui, TypeScript, Node.js, Bun
`,

  contact: () => `
<span class="accent">Reach Out:</span>
  • GitHub:  <a href="https://github.com/n0thhhing" target="_blank" rel="noopener noreferrer">github.com/n0thhhing</a>
  • Email:   <a href="mailto:lynchlm064@gmail.com">lynchlm064@gmail.com</a>
  • Profile: <a href="https://github.com/n0thhhing/n0thhhing" target="_blank" rel="noopener noreferrer">n0thhhing/n0thhhing</a>
`,

  "uname -a": () => `Darwin levi-macbook.local 24.1.0 Darwin Kernel Version: ARM64e root:xnu-11215/RELEASE_ARM64_T6000 aarch64`,

  uname: () => `Darwin`,

  clear: (term) => {
    term.historyEl.innerHTML = "";
    return "";
  }
};

export class Terminal {
  constructor(containerEl, inputEl, historyEl) {
    this.container = containerEl;
    this.input = inputEl;
    this.historyEl = historyEl;
    this.history = [];
    this.historyIndex = -1;

    this.bindEvents();
    this.printInitialGreeting();
  }

  printInitialGreeting() {
    this.appendOutput(`
<span class="mono" style="color:var(--text-muted)">Levi Systems Terminal [v2.4.0-release]</span>
<span class="mono" style="color:var(--emerald)">Ready. Type '<span style="color:var(--cyan)">help</span>' for a list of available commands.</span>
`);
  }

  bindEvents() {
    this.input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const cmd = this.input.value.trim();
        if (cmd) {
          this.history.push(cmd);
          this.historyIndex = this.history.length;
          this.execute(cmd);
        } else {
          this.appendEcho("");
        }
        this.input.value = "";
      } else if (e.key === "ArrowUp") {
        if (this.historyIndex > 0) {
          this.historyIndex--;
          this.input.value = this.history[this.historyIndex] || "";
        }
        e.preventDefault();
      } else if (e.key === "ArrowDown") {
        if (this.historyIndex < this.history.length - 1) {
          this.historyIndex++;
          this.input.value = this.history[this.historyIndex] || "";
        } else {
          this.historyIndex = this.history.length;
          this.input.value = "";
        }
        e.preventDefault();
      } else if (e.key === "Tab") {
        e.preventDefault();
        this.autocomplete();
      }
    });

    // Keep focus when clicking inside terminal
    this.container.addEventListener("click", () => {
      this.input.focus();
    });
  }

  autocomplete() {
    const val = this.input.value.trim().toLowerCase();
    const available = Object.keys(TERMINAL_COMMANDS);
    const matches = available.filter(c => c.startsWith(val));
    if (matches.length === 1) {
      this.input.value = matches[0];
    }
  }

  execute(rawCmd) {
    this.appendEcho(rawCmd);
    const parts = rawCmd.trim().split(/\s+/);
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    if (rawCmd.toLowerCase() === "uname -a") {
      this.appendOutput(TERMINAL_COMMANDS["uname -a"]());
      return;
    }

    if (command === "disasm") {
      const routine = args[0] ? args[0].toLowerCase() : "rarm64";
      if (routine.includes("zeon")) {
        selectRoutine("zeon_neon_fma");
        this.appendOutput(`<span class="accent">Switched disassembler to 'zeon :: neon_fma_4s_vectorized'</span>`);
      } else if (routine.includes("il2cpp")) {
        selectRoutine("il2cpp_stripped");
        this.appendOutput(`<span class="accent">Switched disassembler to 'il2cpp :: resolve_stripped_registration'</span>`);
      } else {
        selectRoutine("rarm64_demangle");
        this.appendOutput(`<span class="accent">Switched disassembler to 'rarm64 :: _swift_demangle_entry'</span>`);
      }
      return;
    }

    if (command === "simd") {
      const tabBtn = document.querySelector('[data-tab="simd"]');
      if (tabBtn) tabBtn.click();
      this.appendOutput(`<span class="accent">Switched to NEON SIMD Visualizer tab.</span>`);
      return;
    }

    if (TERMINAL_COMMANDS[command]) {
      const result = TERMINAL_COMMANDS[command](this);
      if (result) this.appendOutput(result);
    } else {
      this.appendOutput(`<span class="error">zsh: command not found: ${command}. Type 'help' for available commands.</span>`);
    }
  }

  appendEcho(cmd) {
    const line = document.createElement("div");
    line.className = "terminal-line";
    line.innerHTML = `<span class="terminal-prompt-prefix">levi@aarch64 ~ %</span><span class="terminal-cmd-echo">${cmd}</span>`;
    this.historyEl.appendChild(line);
    this.scrollToBottom();
  }

  appendOutput(html) {
    const line = document.createElement("div");
    line.className = "terminal-line terminal-output";
    line.innerHTML = html;
    this.historyEl.appendChild(line);
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.historyEl.scrollTop = this.historyEl.scrollHeight;
  }
}
