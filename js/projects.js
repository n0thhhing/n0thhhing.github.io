/**
 * Projects Data & Filter Management Module
 */

export const PROJECTS_DATA = [
  {
    id: "rarm64",
    name: "rarm64",
    category: "lowlevel",
    categoryLabel: "Low-Level & Disassembly",
    tagline: "Zero-dependency Mach-O ARM64/ARM64e disassembler with Arm 2026-09 specification parity.",
    repoUrl: "https://github.com/n0thhhing/rarm64",
    tech: ["Rust", "ARM64 / ARM64e", "Mach-O", "Dyld Fixups", "Demangler"],
    highlights: [
      "Zero external crate dependencies ([dependencies] is empty)",
      "4,429 encodings partitioned into 16 dispatch buckets for O(1) matching",
      "Pure-Rust demangler for Swift 5+, Rust legacy, and Rust v0 symbols",
      "Parses dyld chained fixups (0x80000034) & LC_FUNCTION_STARTS"
    ]
  },
  {
    id: "zeon",
    name: "zeon",
    category: "simd",
    categoryLabel: "SIMD & Vectorization",
    tagline: "ARM / ARM64 NEON intrinsics implemented in pure Zig and inline assembly.",
    repoUrl: "https://github.com/n0thhhing/zeon",
    tech: ["Zig 0.16", "ARM / ARM64", "NEON SIMD", "Inline Assembly"],
    highlights: [
      "2,800+ NEON intrinsics with over 2,815+ unit tests passing",
      "Cross-platform execution across host, arm-linux, and aarch64_be",
      "Vectorized real-world algorithms: Mandelbrot, wave equations, matrix ops",
      "Zero overhead pure Zig fallbacks matching assembly speeds"
    ]
  },
  {
    id: "il2cpp",
    name: "il2cpp v29 analyzer",
    category: "reversing",
    categoryLabel: "Reverse Engineering",
    tagline: "Unity IL2CPP metadata v29 & 64-bit ARM64 Android ELF disassembler and exporter.",
    repoUrl: "https://github.com/n0thhhing/il2cpp",
    tech: ["Zig 0.16", "Android ELF", "SQLite", "Unity Internals", "C#"],
    highlights: [
      "Discovers stripped registration structures and resolves native addresses",
      "Exports complete analysis to relational SQLite database & call graphs",
      "Emits clean C#-style types, method signatures, and string heaps",
      "High-performance ReleaseFast build with zero native pointer leaks"
    ]
  },
  {
    id: "lwasm",
    name: "lwasm",
    category: "compilers",
    categoryLabel: "Compilers & Runtimes",
    tagline: "WebAssembly 2.0 runtime, disassembler, validator, and WAT decompiler in Lua & C.",
    repoUrl: "https://github.com/n0thhhing/lwasm",
    tech: ["Lua", "C", "WebAssembly 2.0", "WAT", "Bytecode"],
    highlights: [
      "Verified against 292 W3C WebAssembly Specification suites",
      "Byte-for-byte instruction verification against reference SQLite3 WABT dumps",
      "128-bit SIMD, threads, atomics, memory64, and typed references",
      "Full interactive WAT decompiler and execution trace debugger"
    ]
  },
  {
    id: "wallify",
    name: "wallify",
    category: "apps",
    categoryLabel: "macOS & Graphics",
    tagline: "Native macOS desktop audio & music widget in Zig, Swift, Metal, and Dear ImGui.",
    repoUrl: "https://github.com/n0thhhing/wallify",
    tech: ["Zig", "Swift", "Metal", "Dear ImGui", "macOS API"],
    highlights: [
      "Real-time system audio waveform capture without saving audio streams",
      "Metal-rendered ambient artwork glow and spring-physics animations",
      "Adaptive frame scheduling: 20 FPS steady, 30 FPS transitions, 60 FPS motion",
      "Live Dear ImGui diagnostics HUD for render profiling and layout inspection"
    ]
  },
  {
    id: "hexer",
    name: "hexer",
    category: "lowlevel",
    categoryLabel: "Terminal & Systems",
    tagline: "Read-only terminal hex viewer in Rust with ANSI mouse reporting and wildcard search.",
    repoUrl: "https://github.com/n0thhhing/hexer",
    tech: ["Rust", "Terminal UI", "ANSI Codes", "Zero-Deps"],
    highlights: [
      "Zero Cargo dependencies; relies strictly on standard library & stty",
      "Full mouse interaction: click bytes, drag scrollbar, wheel navigation",
      "Pattern-masked byte searching (e.g. '48 89', '4? ??', 'text:hello')",
      "Dynamic responsive terminal row-budget resizing up to 4 GiB files"
    ]
  },
  {
    id: "offset-updater",
    name: "Offset-updater",
    category: "reversing",
    categoryLabel: "Reverse Engineering",
    tagline: "AArch64 IL2CPP offset updater with disassembler-guided wildcard signatures & NEON engine.",
    repoUrl: "https://github.com/n0thhhing/Offset-updater",
    tech: ["TypeScript", "C++", "Capstone", "ARM NEON", "Bun"],
    highlights: [
      "Dynamic signature growth from 48 bytes with automatic ambiguity resolution",
      "Native C++ ARM NEON SIMD pattern scanning engine",
      "Auto-anchors generic 1-liners via .rodata pointer arrays",
      "Validates trampolines, detours, and branch targets across game updates"
    ]
  },
  {
    id: "discord-rpc",
    name: "Discord-rich-presence",
    category: "apps",
    categoryLabel: "Apps & Tools",
    tagline: "Lightweight Node.js custom Discord Rich Presence client and IPC bridge.",
    repoUrl: "https://github.com/n0thhhing/Discord-rich-presence",
    tech: ["Node.js", "JavaScript", "IPC Sockets", "Discord RPC"],
    highlights: [
      "Fast Unix domain socket IPC connection directly to local Discord client",
      "Dynamic presence cycling, asset keys, and party state controls",
      "Zero heavy framework overhead, clean event loop"
    ]
  }
];

export function initProjectsGrid() {
  const grid = document.getElementById("projects-grid-container");
  const filterBtns = document.querySelectorAll(".filter-btn");

  if (!grid) return;

  function render(category = "all") {
    grid.innerHTML = "";
    const filtered = category === "all" 
      ? PROJECTS_DATA 
      : PROJECTS_DATA.filter(p => {
          if (category === "lowlevel") return p.category === "lowlevel" || p.category === "simd";
          if (category === "reversing") return p.category === "reversing" || p.category === "compilers";
          if (category === "apps") return p.category === "apps";
          return p.category === category;
        });

    filtered.forEach(p => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
        <div class="project-card-header">
          <div>
            <div class="project-meta-top">
              <span class="project-badge-tag mono">${p.categoryLabel}</span>
            </div>
            <h3 class="project-name mono" style="margin-top:0.4rem;">${p.name}</h3>
          </div>
          <a href="${p.repoUrl}" target="_blank" rel="noopener noreferrer" class="project-github-link" title="View Source on GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>

        <p class="project-tagline">${p.tagline}</p>

        <div class="project-highlight-box">
          ${p.highlights.map(h => `
            <div class="project-highlight-item">
              <span class="bullet">›</span>
              <span>${h}</span>
            </div>
          `).join("")}
        </div>

        <div class="project-tech-tags">
          ${p.tech.map(t => `<span class="tag-badge">${t}</span>`).join("")}
        </div>
      `;
      grid.appendChild(card);
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      render(btn.dataset.filter);
    });
  });

  render("all");
}
