# Implementation Plan: Levi (@n0thhhing) Portfolio & Profile

## Overview
Build a high-impact, custom-crafted personal portfolio website and companion GitHub Profile README for **Levi (`@n0thhhing`)**. The project bridges the user's signature duality: **deep bare-metal low-level systems & reverse engineering** (ARM64, Mach-O, Zig, Rust, SIMD NEON, WebAssembly, Unity IL2CPP) and **sleek, high-level application engineering & tool building** (macOS Metal/Swift audio widgets, TypeScript/Node.js, modern UI).

The portfolio will be built in `/Users/levi.napz/Projects/website` with zero external runtime dependencies—delivering lightning-fast load times, pure CSS glassmorphism and terminal aesthetics, an interactive live disassembler / hex / terminal sandbox, and an accompanying GitHub Profile README for `n0thhhing/n0thhhing`.

---

## User Context & Projects Catalog
Based on the user's local projects and repositories:
- **`rarm64`**: Zero-dependency Mach-O ARM64/ARM64e disassembler in Rust (4,429 encodings, Arm 2026-09 spec parity, dyld chained fixups, pure-Rust demangler for Rust & Swift 5+).
- **`zeon`**: ARM/ARM64 NEON intrinsics implemented in pure Zig and inline assembly (2,800+ intrinsics, cross-architecture testing, SIMD wave simulation, Mandelbrot, matrix math).
- **`il2cpp`**: Unity IL2CPP v29 metadata & ARM64 Android ELF analyzer in Zig 0.16 (stripped registration discovery, SQLite database export, call-graph analysis, AST/C# dump).
- **`lwasm`**: WebAssembly 2.0 runtime, disassembler, validator, and WAT decompiler in Lua with optional C accelerator (passing 292 W3C test suites).
- **`wallify`**: Native macOS desktop music widget in Zig & Swift/Metal with Dear ImGui diagnostics, live system audio waveform capture, ambient artwork glow.
- **`hexer`**: Zero-dependency terminal hex viewer in Rust with ANSI mouse reporting and wildcard pattern search.
- **`Offset-updater`**: AArch64 IL2CPP offset updater with Capstone wildcard signatures and C++ NEON SIMD engine.
- **`Discord-rich-presence`**: Node.js custom Discord Rich Presence IPC client.

---

## Architecture Decisions
1. **Zero-Dependency Static Architecture**:
   - Pure modern HTML5, CSS3, and ES6 JavaScript. No heavy frontend framework node_modules overhead; instantaneous cold-starts (<50ms), 100/100 Lighthouse score, fully responsive across mobile, tablet, and desktop.
   - Easily deployable via GitHub Pages, Cloudflare Pages, or Vercel with zero build step.
2. **"Low-Level Meets High-Level" Design System**:
   - **Color Palette**: Dark void slate (`#070a0f`, `#0d121d`), cyan accent (`#00f5ff`), electric emerald (`#00ff9d`), amber registers (`#ffb86c`), frosted glass (`backdrop-filter: blur(12px)`).
   - **Typography**: Monospace engineering font stack (`JetBrains Mono`, `Fira Code`, `ui-monospace`) paired with clean modern sans (`Inter`, `system-ui`).
   - **Visual Details**: Subtly animated scanlines, memory address gutters (`0x00000000:`), register chips, and smooth spring physics.
3. **Signature Interactive Hero Sandbox**:
   - An interactive widget letting visitors toggle between:
     - **Live ARM64 Disassembler & Hex Inspector**: Interactive byte-to-opcode decoding (`rarm64` & `hexer` tribute) with hoverable register/instruction breakdowns.
     - **Interactive Terminal CLI**: Working shell with commands (`help`, `cat bio.md`, `projects`, `skills`, `disasm`, `clear`).
     - **NEON SIMD Vector Visualizer**: Visual demonstration of 4-lane 32-bit SIMD vector execution (`zeon` tribute).
4. **GitHub Profile README Deliverable**:
   - A dedicated `README.md` crafted for the `n0thhhing/n0thhhing` repository featuring custom markdown tables, shields, architecture badges, and a link to the live portfolio site.

---

## Task List

### Phase 1: Foundation & Design System
- [ ] **Task 1: Project Scaffolding & Zero-Dependency Structure**
  - Initialize clean directory layout in `/Users/levi.napz/Projects/website` (`index.html`, `styles/`, `scripts/`, `assets/`).
  - Configure local preview runner and asset structure.
- [ ] **Task 2: Design System & Styling Architecture**
  - Implement CSS variables, typography, reset, glowing border utilities, terminal window chrome, and responsive layout grid.

### Checkpoint: Foundation
- [ ] Clean local rendering, responsive viewport scaling, and working design tokens.

### Phase 2: Core Sections & Content
- [ ] **Task 3: Hero Section & Persona Narrative**
  - High-impact header: Levi (`@n0thhhing`), Systems Architect, Reverse Engineer & Tool Builder.
  - Live status indicator ("Building bare-metal & SIMD engines"), quick-jump navigation, and social/GitHub links.
- [ ] **Task 4: Interactive Low-Level Sandbox Widget**
  - Build the multi-tab interactive hero widget (ARM64 Disassembler & Hex Inspector, Interactive Terminal CLI, and NEON SIMD visualizer).
- [ ] **Task 5: Projects Showcase Grid**
  - Deep-dive cards for `rarm64`, `zeon`, `il2cpp`, `lwasm`, `wallify`, `hexer`, `Offset-updater`, and `Discord-rich-presence` with architecture badges, tech stacks, GitHub links, and sample opcode/terminal snippets.
- [ ] **Task 6: Technical Skills Matrix & Engineering Philosophy**
  - Low-Level Systems, Reverse Engineering & Binaries, SIMD & Performance, High-Level Application & Tools.
  - Philosophy breakdown: Zero-dependency rigor, spec parity, hardware-aware software.

### Checkpoint: Core Features
- [ ] All interactive widgets functional, project links accurate, responsive layout tested.

### Phase 3: GitHub Profile README & Final Polish
- [ ] **Task 7: Companion GitHub Profile README**
  - Generate production-ready `README.md` for `n0thhhing/n0thhhing` with matching aesthetic, custom SVG/Markdown badges, pinned projects, and portfolio link.
- [ ] **Task 8: Production Verification & GitHub Pages Workflow**
  - Add GitHub Pages deployment workflow (`.github/workflows/deploy.yml`), test across browser viewports, and verify zero console errors.

### Checkpoint: Complete
- [ ] Portfolio site verified locally and ready for deployment.
- [ ] GitHub README ready to drop into `n0thhhing/n0thhhing`.

---

## Risks and Mitigations
| Risk | Impact | Mitigation |
|------|--------|------------|
| Interactive disassembler widget feeling too complex or bulky | Med | Keep opcode decoding lightweight and client-side with pre-decoded annotated fixtures and fast lookup |
| Disconnect between website and GitHub profile | Low | Use matching badge styles, typography conventions, and clear reciprocal links |
| Over-engineering build tooling | Med | Stick strictly to vanilla ES6, modern CSS, and HTML with no heavy bundle step |

---

## Open Questions & Choices for User
1. **Hosting preference**: Do you plan to host the website on **GitHub Pages** (`https://n0thhhing.github.io/website` or a custom domain) or **Vercel / Cloudflare**?
2. **Terminal default**: Do you prefer the hero section to default to the **Interactive ARM64 Disassembler / Hex Inspector** or the **Interactive CLI Terminal**?
