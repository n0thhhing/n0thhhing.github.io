/**
 * Interactive Terminal CLI Module
 * Lightweight client-side pseudo-shell with tab completion and custom commands.
 */

import { selectRoutine } from './disassembler.js';
import { applyTheme, getCurrentTheme, THEMES } from './themes.js';

const TERMINAL_COMMANDS = {
  help: () => `
<span class="accent">Available commands:</span>
  <span class="mono" style="color:var(--cyan);font-weight:700;">IDENTITY &amp; LORE:</span>
    <span class="mono" style="color:var(--amber)">about</span>       - Identity, philosophy, and engineering ethos
    <span class="mono" style="color:var(--amber)">whoami</span>      - Quick bio, academic flex, and handle
    <span class="mono" style="color:var(--amber)">lore</span>        - Origin story (Pixel Gun 3D, LADB, Game Guardian roots)
    <span class="mono" style="color:var(--amber)">hackathon</span>   - Catawba College Hackathon back-to-back 1st place streak
    <span class="mono" style="color:var(--amber)">edu</span>         - Academics (3.96 GPA, AP scores, RCCC → UNCC transfer)
    <span class="mono" style="color:var(--amber)">setup</span>       - Daily workstation &amp; mobile aarch64 hardware testbeds
    <span class="mono" style="color:var(--amber)">status</span>      - Current state (:bowtie: procrastinating)

  <span class="mono" style="color:var(--cyan);font-weight:700;">SYSTEMS &amp; CODE:</span>
    <span class="mono" style="color:var(--amber)">projects</span>    - Featured compilers, engines, and reverse engineering tools
    <span class="mono" style="color:var(--amber)">skills</span>      - Low-level proficiencies, architectures, and toolchains
    <span class="mono" style="color:var(--amber)">fetch</span>       - Fastfetch-style avatar &amp; system specs summary
    <span class="mono" style="color:var(--amber)">disasm</span>      - Inspect ARM64 routine (usage: disasm [rarm64|zeon|il2cpp])
    <span class="mono" style="color:var(--amber)">simd</span>        - Switch to NEON SIMD vector visualizer
    <span class="mono" style="color:var(--amber)">matrix</span>      - ARM64 128-bit NEON vector banner

  <span class="mono" style="color:var(--cyan);font-weight:700;">CREATIVE &amp; SOCIAL:</span>
    <span class="mono" style="color:var(--amber)">art</span>         - Clip Studio Paint character illustrations &amp; Instagram
    <span class="mono" style="color:var(--amber)">music</span>       - Late-night 24-bit audio chain &amp; anime rotation
    <span class="mono" style="color:var(--amber)">anime</span>       - Aesthetic &amp; story inspirations (Bunny Girl Senpai, Roshidere)
    <span class="mono" style="color:var(--amber)">theme</span>       - Switch theme (usage: theme [gruvbox|panda|dracula|monokai|catppuccin])
    <span class="mono" style="color:var(--amber)">contact</span>     - Instagram, GitHub, and email coordinates

  <span class="mono" style="color:var(--cyan);font-weight:700;">SHELL UTILITIES:</span>
    <span class="mono" style="color:var(--amber)">ls</span>          - List simulated files &amp; documents
    <span class="mono" style="color:var(--amber)">cat</span>         - Inspect file content (usage: cat &lt;filename&gt;)
    <span class="mono" style="color:var(--amber)">history</span>     - Show recent shell commands
    <span class="mono" style="color:var(--amber)">echo</span>        - Print text to terminal
    <span class="mono" style="color:var(--amber)">date</span>        - Display current Darwin system timestamp
    <span class="mono" style="color:var(--amber)">uptime</span>      - Display current session uptime &amp; load
    <span class="mono" style="color:var(--amber)">uname -a</span>    - Print kernel and hardware architecture
    <span class="mono" style="color:var(--amber)">clear</span>       - Clear terminal screen
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

  whoami: () => `
<span class="accent">identity:</span>
  levi lynch (<span style="color:var(--cyan);font-weight:700;">@n0thhhing</span> / <span style="color:var(--amber);font-weight:700;">@levi.napz</span>)
  systems architect • reverse engineer • visual artist
  Jesse Carson High alum (3.96 GPA) • RCCC → UNCC Cybersecurity
  Catawba College Hackathon back-to-back 1st place champion ('25, '26)
  daily driver: Gruvbox Material purist
`,

  lore: () => `
<span class="accent">// ORIGIN &amp; DEEP-CUT LORE (@n0thhhing):</span>

  <span style="color:var(--emerald);font-weight:700;">1. Mobile Modding Roots (2022-2023):</span>
     Started by looking at compiled mobile games on Android (Pixel Gun 3D),
     running local ADB shells (LADB), and writing Lua memory-patching scripts
     in Game Guardian. Chasing runtime pointers and patch offsets taught
     memory addresses, registers, and engine internals before college.

  <span style="color:var(--amber);font-weight:700;">2. Stepping Into Systems &amp; Zig (2024-2026):</span>
     Moved past manual scripts into heavy automation. Built Il2Cpp-Offset-Updater
     in Kotlin Multiplatform, then dove headfirst into bleeding-edge Zig 0.16,
     writing 2,800+ ARM/ARM64 NEON intrinsics (zeon) and fast AoB scanners (z-scanner).

  <span style="color:var(--cyan);font-weight:700;">3. The Catawba Hackathon Streak:</span>
     Sophomore podium finish followed by back-to-back 1st Place wins in 2025
     and 2026 representing Jesse Carson High. Teammates essentially "pre-ordered"
     Levi for senior year to lock in the repeat championship.

  <span style="color:var(--purple);font-weight:700;">4. The Alias:</span>
     "n0thhhing" reflects quiet code running under the hood rather than loud
     corporate hype. No fake buzzwords, just pure low-level craft.
`,

  hackathon: () => `
<span class="accent">Ralph W. Ketner School of Business Hackathon @ Catawba College:</span>
  • <span style="color:var(--cyan);font-weight:700;">Sophomore Year:</span> Podium finish
  • <span style="color:var(--amber);font-weight:700;">Junior Year (2025):</span> 1st Place Champion ★
  • <span style="color:var(--emerald);font-weight:700;">Senior Year (2026):</span> 1st Place Champion (Back-to-back!) ★
  
  <i>Behind the scenes:</i> Carried the team through sleepless overnight sprints:
  teammates pre-ordered him for senior year to guarantee the repeat win.
`,

  setup: () => `
<span class="accent">Hardware &amp; Daily Developer Setup:</span>
  • <b>Workstation:</b> Apple Silicon M-series (macOS Darwin 24.1.0 ARM64e)
  • <b>Hardware Testbeds:</b> Google Pixel 11 Pro + Samsung Galaxy S22 (aarch64 / LADB / Shizuku)
  • <b>Primary Editor:</b> Zed (fast, GPU-accelerated editing for Zig)
  • <b>Terminal:</b> Ghostty (custom tab bars, keybindings, inspector)
  • <b>Auxiliary Tools:</b> VS Code (GitLens), JetBrains Fleet (KMP/Gradle), Acode (mobile edits)
  • <b>Aesthetics:</b> Gruvbox Material (matte, warm, zero eye fatigue)
`,
  hardware: () => TERMINAL_COMMANDS.setup(),

  anime: () => `
<span class="accent">Anime, Light Novels &amp; Aesthetic Inspirations:</span>
  • <span style="color:var(--pink);font-weight:700;">Rascal Does Not Dream of Bunny Girl Senpai:</span> Visual mood, emotional depth, and the legendary ED "Fukashigi no Carte"
  • <span style="color:var(--cyan);font-weight:700;">Roshidere (Alya Sometimes Hides Her Feelings in Russian):</span> Character dynamics &amp; acoustic singles
  • <span style="color:var(--emerald);font-weight:700;">Shonen Favorites:</span> Attack on Titan, One Piece, Dragon Ball
  • <b>Audio Setup:</b> Always coding or sketching with music on via 24-bit lossless audio
`,

  edu: () => `
<span class="accent">Academic Background &amp; Trajectory:</span>
  • <b>High School:</b> Jesse Carson High School — 3.96 GPA (ruined only by an 89 in Spanish I)
  • <b>AP Intuition:</b> 5 in AP Precalc (last-minute cramming) • 4 in AP Calc AB (zero studying)
  • <b>Current:</b> Rowan-Cabarrus Community College (RCCC), Associate in Arts
  • <b>Target Transfer:</b> UNC Charlotte (UNCC) for Cybersecurity
`,
  academics: () => TERMINAL_COMMANDS.edu(),

  ls: () => `
<span class="mono" style="line-height:1.45;">
<span style="color:var(--cyan);font-weight:700;">drwxr-xr-x</span>  levi  staff   4.0K  <span style="color:var(--cyan);font-weight:700;">projects/</span>
<span style="color:var(--cyan);font-weight:700;">drwxr-xr-x</span>  levi  staff   4.0K  <span style="color:var(--cyan);font-weight:700;">artwork/</span>
<span style="color:var(--text-muted);">-rw-r--r--</span>  levi  staff   1.8K  about.md
<span style="color:var(--text-muted);">-rw-r--r--</span>  levi  staff   2.4K  lore.txt
<span style="color:var(--text-muted);">-rw-r--r--</span>  levi  staff   1.1K  hackathons.log
<span style="color:var(--emerald);font-weight:700;">-rwxr-xr-x</span>  levi  staff    640  <span style="color:var(--emerald);">setup.sh</span>
<span style="color:var(--text-muted);">-rw-r--r--</span>  levi  staff    320  contact.json
</span>
<span style="color:var(--text-muted);font-size:0.75rem;">Tip: use 'cat &lt;filename&gt;' to read any file (e.g. cat lore.txt)</span>
`,

  cat: (term, args) => {
    const file = args && args[0] ? args[0].toLowerCase() : null;
    if (!file) return `<span class="error">usage: cat &lt;filename&gt; (try: cat about.md, cat lore.txt, cat hackathons.log, cat contact.json)</span>`;
    
    if (file === "about.md") {
      return TERMINAL_COMMANDS.about();
    } else if (file === "lore.txt") {
      return TERMINAL_COMMANDS.lore();
    } else if (file === "hackathons.log" || file === "hackathon.log") {
      return TERMINAL_COMMANDS.hackathon();
    } else if (file === "contact.json") {
      return `{\n  "name": "Levi",\n  "alias": "n0thhhing",\n  "instagram": "https://instagram.com/levi.napz",\n  "github": "https://github.com/n0thhhing",\n  "email": "lynchlm064@gmail.com"\n}`;
    } else if (file === "setup.sh") {
      return `#!/usr/bin/env zsh\n# Levi systems bootstrap\nexport ARCH="aarch64"\nexport EDITOR="zed"\nexport THEME="gruvbox-material"\necho "ready to build."`;
    } else {
      return `<span class="error">cat: ${file}: No such file or directory. Try 'ls' to list files.</span>`;
    }
  },

  echo: (term, args) => {
    return args && args.length ? args.join(" ") : "";
  },

  date: () => new Date().toString(),

  uptime: () => `up 8 hours, 42 mins, 1 user, load averages: 4.20 3.80 2.90 (hyperfocused)`,

  history: () => `
  1  ladb connect 127.0.0.1:5555
  2  zig build test -Dtarget=aarch64-linux
  3  ghostty +open-inspector
  4  git commit -m "feat: zeon neon fma"
  5  clip-studio-paint ~/art/wip_character.clip
  6  curl -sI http://localhost:8080
  7  fetch
  8  echo "procrastinating..."
`,

  matrix: () => `
<span class="mono" style="color:var(--emerald);line-height:1.25;">
  01001100 01000101 01010110 01001001   [ aarch64 ]
  ┌───┬───┬───┬───┬───┬───┬───┬───┐
  │ L │ E │ V │ I │ A │ S │ S │ M │  ARM64 NEON: 128-bit vector lanes
  └───┴───┴───┴───┴───┴───┴───┴───┘
  &gt; memory patched. fixups resolved. gruvbox active.
</span>
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
      const result = TERMINAL_COMMANDS[command](this, args);
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
