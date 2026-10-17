/**
 * Interactive Terminal CLI Module
 * Lightweight client-side pseudo-shell with tab completion and custom commands.
 */

import { selectRoutine } from './disassembler.js';
import { applyTheme, getCurrentTheme, THEMES } from './themes.js';

const TERMINAL_COMMANDS = {
  help: () => `
<span class="accent">Available commands:</span>
  <span class="mono" style="color:var(--cyan)">about</span>      - Display background, focus, and engineering ethos
  <span class="mono" style="color:var(--cyan)">projects</span>   - List featured systems, compilers, & reverse engineering tools
  <span class="mono" style="color:var(--cyan)">skills</span>     - Show architecture, languages, & low-level proficiencies
  <span class="mono" style="color:var(--cyan)">fetch</span>      - System architecture, testbeds, and toolchain info
  <span class="mono" style="color:var(--cyan)">status</span>     - Show current state (:bowtie: procrastinating)
  <span class="mono" style="color:var(--cyan)">theme</span>      - Switch or list themes (usage: theme [gruvbox|panda|dracula|monokai|catppuccin])
  <span class="mono" style="color:var(--cyan)">disasm</span>     - Inspect ARM64 routine (usage: disasm [rarm64|zeon|il2cpp])
  <span class="mono" style="color:var(--cyan)">simd</span>       - Jump to NEON SIMD vector visualizer
  <span class="mono" style="color:var(--cyan)">art</span>        - Digital illustration background & Clip Studio Paint works
  <span class="mono" style="color:var(--cyan)">music</span>      - Late-night 24-bit audio & anime OST rotation
  <span class="mono" style="color:var(--cyan)">contact</span>    - Instagram art, GitHub, and email details
  <span class="mono" style="color:var(--cyan)">uname -a</span>   - Print system & architecture identity
  <span class="mono" style="color:var(--cyan)">clear</span>      - Clear terminal screen
`,

  about: () => `
<span class="accent">Levi (@n0thhhing)</span>
Systems Architect, Reverse Engineer, & Visual Artist.

I build software with hardware-level empathy and an artist's obsession with color & craft:
• Visual artist: Deep background in color theory & visual ergonomics (Gruvbox Material purist)
• Zero-dependency binary tools (Mach-O, ARM64, ELF, WebAssembly)
• Pure Zig & Assembly SIMD vector intrinsics (2,800+ NEON implementations)
• Reverse engineering runtimes (Unity IL2CPP metadata, SQLite call-graph mining)
• High-level native user experiences (Apple glass shaders, Swift/Metal, ImGui diagnostics)
`,

  projects: () => `
<span class="accent">Featured Repositories (@n0thhhing):</span>
  • <span style="color:var(--emerald);font-weight:700;">zeon</span>            [★ 16] ARM/ARM64 NEON intrinsics in pure Zig & inline assembly
  • <span style="color:var(--cyan);font-weight:700;">ts-capstone</span>     [★ 6]  Full Capstone 5.0 disassembler bindings for TypeScript & Bun
  • <span style="color:var(--purple);font-weight:700;">Offset-updater</span>  [★ 2]  AArch64 IL2CPP offset updater with NEON SIMD scanning engine
  • <span style="color:var(--amber);font-weight:700;">rarm64</span>          Zero-dependency Mach-O ARM64/ARM64e disassembler in Rust (Arm 2026-09)
  • <span style="color:var(--pink);font-weight:700;">il2cpp</span>          Unity IL2CPP v29 & 64-bit Android ELF reverse engineering analyzer (Zig)
  • <span style="color:var(--yellow);font-weight:700;">z-scanner</span>       [★ 1]  High-performance AOB memory pattern scanner in Zig
  • <span style="color:var(--cyan);font-weight:700;">lwasm</span>           [★ 1]  WebAssembly 2.0 runtime & WAT decompiler in Lua/C (born as Game Guardian C memory-patcher for Pixel Gun 3D)
  • <span style="color:var(--emerald);font-weight:700;">wallify</span>         Native macOS wallpaper & widget experience with Apple glass shaders & ImGui inspector (Zig)
  • <span style="color:var(--amber);font-weight:700;">hexer</span>           Zero-dependency terminal hex viewer in Rust with ANSI mouse reporting
  • <span style="color:var(--purple);font-weight:700;">Discord-RPC</span>     [★ 2]  Lightweight Node.js Discord Rich Presence socket client
`,

  skills: () => `
<span class="accent">Technical Proficiencies & Toolchain:</span>
  • <b>Low-Level Systems:</b> ARM64/AArch64, ARM64e, Zig 0.16 (bleeding-edge), Rust, Assembly, C/C++
  • <b>Binary Analysis:</b> Mach-O (Fat/Thin), Android ELF, Unity IL2CPP, WebAssembly 2.0, Dyld chained fixups
  • <b>Hardware Testbeds:</b> Apple Silicon M-series + Google Pixel / Galaxy S22 aarch64 bare-metal testbeds (LADB / Shizuku)
  • <b>SIMD & Vectorization:</b> ARM NEON, SSE4, AVX, SIMD algorithmic acceleration
  • <b>Native & UI Tools:</b> Swift, Metal, Dear ImGui, TypeScript, Node.js, Bun
  • <b>Creative Tools:</b> Clip Studio Paint, Figma, Color Theory & Visual Ergonomics
`,

  status: () => `
<span class="accent">GitHub Status:</span>
  <span style="color:var(--amber);font-weight:700;">:bowtie: procrastinating</span>
  <span style="color:var(--text-secondary);font-size:0.85rem;">
  Backlog untouched, 20 browser tabs queued... followed by hyper-focusing until
  3 AM on a single ARM64 Neon intrinsic or dyld fixup chain.
  </span>
`,

  fetch: () => `
<div class="terminal-fetch" style="display:flex;align-items:center;gap:1.85rem;margin:0.5rem 0;font-family:var(--font-mono);white-space:normal;">
  <img src="assets/avatar.png" alt="levi@aarch64" class="fetch-image" style="width:190px;height:190px;border-radius:10px;object-fit:cover;border:1.5px solid var(--border-amber);box-shadow:0 6px 20px rgba(0,0,0,0.45);flex-shrink:0;display:block;">
  <div class="fetch-info" style="display:flex;flex-direction:column;gap:0.3rem;font-size:0.875rem;line-height:1.48;">
    <div class="fetch-title" style="font-size:0.95rem;margin-bottom:0.1rem;">
      <span style="color:var(--title-highlight);font-weight:700;">levi</span>@<span style="color:var(--cyan);font-weight:700;">aarch64</span>
    </div>
    <div class="fetch-sep" style="color:var(--text-muted);margin-bottom:0.15rem;user-select:none;">--------------</div>
    <div><span class="fetch-label" style="color:var(--text-muted);font-weight:600;display:inline-block;min-width:82px;">OS:</span> Darwin / macOS (Apple Silicon ARM64e)</div>
    <div><span class="fetch-label" style="color:var(--text-muted);font-weight:600;display:inline-block;min-width:82px;">Host:</span> MacBook Pro + Pixel &amp; Galaxy S22</div>
    <div><span class="fetch-label" style="color:var(--text-muted);font-weight:600;display:inline-block;min-width:82px;">Testbeds:</span> aarch64 bare-metal (LADB / Shizuku)</div>
    <div><span class="fetch-label" style="color:var(--text-muted);font-weight:600;display:inline-block;min-width:82px;">Toolchain:</span> Zig 0.16 (bleeding), Rust, Swift/Metal</div>
    <div><span class="fetch-label" style="color:var(--text-muted);font-weight:600;display:inline-block;min-width:82px;">Editor:</span> Zed (GPU-accelerated) / Ghostty</div>
    <div><span class="fetch-label" style="color:var(--text-muted);font-weight:600;display:inline-block;min-width:82px;">Theme:</span> Gruvbox Material <span style="color:var(--amber);font-weight:700;">[★ Daily Driver]</span></div>
    <div><span class="fetch-label" style="color:var(--text-muted);font-weight:600;display:inline-block;min-width:82px;">Status:</span> <span style="color:var(--amber);font-weight:600;">:bowtie: procrastinating</span></div>
    <div class="fetch-palette" style="display:flex;align-items:center;gap:7px;margin-top:0.45rem;">
      <span style="display:inline-block;width:18px;height:18px;background:#ea6962;border-radius:3px;"></span>
      <span style="display:inline-block;width:18px;height:18px;background:#e78a4e;border-radius:3px;"></span>
      <span style="display:inline-block;width:18px;height:18px;background:#d8a657;border-radius:3px;"></span>
      <span style="display:inline-block;width:18px;height:18px;background:#a9b665;border-radius:3px;"></span>
      <span style="display:inline-block;width:18px;height:18px;background:#7daea3;border-radius:3px;"></span>
      <span style="display:inline-block;width:18px;height:18px;background:#d3869b;border-radius:3px;"></span>
    </div>
  </div>
</div>
`,

  neofetch: () => TERMINAL_COMMANDS.fetch(),
  fastfetch: () => TERMINAL_COMMANDS.fetch(),

  music: () => `
<span class="accent">Late-Night Coding & Sketching Rotation:</span>
  • <span style="color:var(--pink);font-weight:600;">"Fukashigi no Carte"</span> (Rascal Does Not Dream ED — constant repeat)
  • <span style="color:var(--cyan);font-weight:600;">Roshidere / Alya</span> OST & character singles
  • <span style="color:var(--emerald);font-weight:600;">Anime OSTs:</span> Attack on Titan, One Piece, Dragon Ball
  • <span style="color:var(--text-muted);font-size:0.8rem;">Playback: 24-bit lossless audio</span>
`,

  art: () => `
<span class="accent">Visual Art & Character Illustrations:</span>
  • Tools: Clip Studio Paint, Figma, Canva
  • Focus: Character sketches, visual aesthetics, color theory
  • Instagram: <a href="https://instagram.com/levi.napz" target="_blank" rel="noopener noreferrer" style="color:var(--amber);font-weight:700;">instagram.com/levi.napz</a> (@levi.napz)
`,

  contact: () => `
<span class="accent">Reach Out:</span>
  • Instagram: <a href="https://instagram.com/levi.napz" target="_blank" rel="noopener noreferrer" style="color:var(--amber);">instagram.com/levi.napz</a> (@levi.napz — Art & Visual Works)
  • GitHub:    <a href="https://github.com/n0thhhing" target="_blank" rel="noopener noreferrer">github.com/n0thhhing</a>
  • Email:     <a href="mailto:lynchlm064@gmail.com">lynchlm064@gmail.com</a>
  • Profile:   <a href="https://github.com/n0thhhing/n0thhhing" target="_blank" rel="noopener noreferrer">n0thhhing/n0thhhing</a>
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

    if (command === "theme") {
      const target = args[0] ? args[0].toLowerCase() : null;
      if (!target || target === "list") {
        const current = getCurrentTheme();
        const listHtml = THEMES.map(t => {
          const isCur = t.id === current;
          const isFav = t.id === "gruvbox-material";
          const favBadge = isFav ? ` <span style="color:var(--amber);font-weight:700;">[★ Daily Driver]</span>` : '';
          const activeBadge = isCur ? ` <span style="color:var(--emerald);font-weight:700;">(active)</span>` : '';
          return `  • <span style="color:${isCur ? 'var(--title-highlight)' : 'var(--text-secondary)'};font-weight:${isCur ? '700' : '400'}">${t.id}</span>${activeBadge}${favBadge} — ${t.name}`;
        }).join("<br>");
        this.appendOutput(`<span class="accent">Artist-Curated Themes (Smooth 450ms Cross-Fade):</span><br>${listHtml}<br><span style="color:var(--text-muted);font-size:0.775rem;">Usage: theme &lt;name&gt; (e.g. theme gruvbox-material, theme panda)</span>`);
        return;
      }

      // Fuzzy match target theme
      const match = THEMES.find(t => t.id.includes(target) || t.name.toLowerCase().includes(target));
      if (match) {
        applyTheme(match.id, true);
        this.appendOutput(`<span class="accent">Theme smoothly cross-faded to: <b>${match.name}</b> (${match.id})</span>`);
      } else {
        this.appendOutput(`<span class="error">Unknown theme '${args[0]}'. Type 'theme' to see available themes.</span>`);
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
    line.innerHTML = typeof html === "string" ? html.trim() : html;
    this.historyEl.appendChild(line);
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.historyEl.scrollTop = this.historyEl.scrollHeight;
  }
}
