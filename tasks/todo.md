# Tasks: Levi (@n0thhhing) Portfolio & Profile

## Phase 1: Foundation & Design System

### Task 1: Project Scaffolding & Zero-Dependency Structure
**Description:** Initialize the directory layout in `/Users/levi.napz/Projects/website` with clean modern HTML5 structure, assets folder, and modular files.

**Acceptance criteria:**
- [x] Directory structure created under `/Users/levi.napz/Projects/website` (`index.html`, `css/style.css`, `js/main.js`, `assets/`).
- [x] Valid HTML5 boilerplate with responsive viewport, metadata, and custom favicon SVG.
- [x] Local preview script / command documented.

**Verification:**
- [x] Open in local server or browser (`python3 -m http.server 8080 -d /Users/levi.napz/Projects/website`).
- [x] Verify HTML passes standard semantic validation without errors.

**Dependencies:** None
**Files touched:**
- `/Users/levi.napz/Projects/website/index.html`
- `/Users/levi.napz/Projects/website/css/style.css`
- `/Users/levi.napz/Projects/website/js/main.js`
- `/Users/levi.napz/Projects/website/assets/favicon.svg`

**Estimated scope:** Small (1-3 files)

---

### Task 2: Design System & Styling Architecture
**Description:** Implement the "Low-Level Meets High-Level" styling system: dark slate/void background, cyan and neon emerald accents, amber register highlights, glassmorphism card surfaces, custom scrollbars, and monospace typography hierarchy.

**Acceptance criteria:**
- [x] CSS custom properties defined for colors, shadows, borders, transitions, and typography.
- [x] Terminal window chrome components (Mac-style red/yellow/green pills, header title, status bar).
- [x] Responsive grid and container system that looks sharp on mobile and ultrawide displays.

**Verification:**
- [x] Inspect responsive behavior in browser across mobile (375px), tablet (768px), and desktop (1200px+).
- [x] Check contrast ratios for accessibility.

**Dependencies:** Task 1
**Files touched:**
- `/Users/levi.napz/Projects/website/css/style.css`

**Estimated scope:** Small (1 file)

---

## Checkpoint: Foundation
- [x] Base page loads cleanly without stylesheet or script errors.
- [x] Design system tokens and terminal container styles are active and responsive.

---

## Phase 2: Core Features & Interactive Gadgets

### Task 3: Hero Section & Persona Narrative
**Description:** Craft the hero section capturing Levi's identity (`@n0thhhing`): Systems Architect & Reverse Engineer, bridging bare-metal hardware/firmware/assembly with high-level developer tools.

**Acceptance criteria:**
- [x] Striking headline, sub-headline, and live status pill ("Decoding ARM64 Mach-O & Vectorizing SIMD Intrinsics").
- [x] Quick social / repository links (GitHub: `@n0thhhing`, email, Discord).
- [x] Quick nav bar with smooth scrolling to sections (`#projects`, `#sandbox`, `#skills`, `#philosophy`).

**Verification:**
- [x] Navigation anchors scroll smoothly to target sections.
- [x] Links open correctly in new tabs with `rel="noopener noreferrer"`.

**Dependencies:** Task 2
**Files touched:**
- `/Users/levi.napz/Projects/website/index.html`
- `/Users/levi.napz/Projects/website/css/style.css`

**Estimated scope:** Small (2 files)

---

### Task 4: Interactive Low-Level Sandbox Widget
**Description:** Build the interactive centerpiece widget with 3 tabbed modes:
1. **Live ARM64 Disassembler & Hex Inspector**: Shows annotated ARM64 instructions from `rarm64`, allowing users to click/hover bytes to see immediate values, target registers, and instruction descriptions.
2. **Interactive Terminal CLI**: Lightweight terminal allowing commands like `help`, `about`, `projects`, `skills`, `disasm`, `simd`, `contact`, `clear`.
3. **NEON SIMD Visualizer**: Visual animation illustrating 4x32-bit vector lanes computing operations (`zeon` NEON tribute).

**Acceptance criteria:**
- [x] Tab switching between Disassembler, Terminal CLI, and SIMD Visualizer works seamlessly.
- [x] Terminal accepts user keystrokes, provides autocomplete/help, and produces clean output.
- [x] Disassembler displays memory offsets, raw hex bytes, assembly mnemonics, and comment annotations with hover highlights.

**Verification:**
- [x] Type `help` and each supported command in terminal to confirm expected output.
- [x] Click through instructions in the disassembler view to verify interactive tooltips.

**Dependencies:** Task 3
**Files touched:**
- `/Users/levi.napz/Projects/website/index.html`
- `/Users/levi.napz/Projects/website/css/style.css`
- `/Users/levi.napz/Projects/website/js/disassembler.js`
- `/Users/levi.napz/Projects/website/js/terminal.js`
- `/Users/levi.napz/Projects/website/js/simd.js`

**Estimated scope:** Medium (5 files)

---

### Task 5: Projects Showcase Grid
**Description:** Build interactive showcase cards for Levi's key projects (`rarm64`, `zeon`, `il2cpp`, `lwasm`, `wallify`, `hexer`, `Offset-updater`, `Discord-rich-presence`).

**Acceptance criteria:**
- [x] Each card showcases: Project title, tagline, architecture badges (`Rust`, `Zig`, `ARM64`, `WebAssembly`, `Metal`, `TypeScript`), key features, and direct GitHub links.
- [x] Highlight boxes showing authentic architecture feats from each codebase.
- [x] Filter pills by domain: `All`, `Low-Level & SIMD`, `Reverse Engineering`, `Apps & Tools`.

**Verification:**
- [x] Filter pills correctly filter the project cards with smooth transitions.
- [x] All external repository URLs match `https://github.com/n0thhhing/<repo>`.

**Dependencies:** Task 2
**Files touched:**
- `/Users/levi.napz/Projects/website/index.html`
- `/Users/levi.napz/Projects/website/css/style.css`
- `/Users/levi.napz/Projects/website/js/projects.js`

**Estimated scope:** Medium (3 files)

---

### Task 6: Technical Skills Matrix & Engineering Philosophy
**Description:** Implement the engineering skills matrix and philosophical ethos ("Zero Runtime Dependencies", "Hardware-Aware Software", "Specification Parity").

**Acceptance criteria:**
- [x] Structured skills breakdown categorized into Low-Level Systems, Binary Analysis & Reversing, SIMD & Performance, and High-Level Application & Tools.
- [x] Philosophy cards with crisp rationale and architecture tenets.

**Verification:**
- [x] Visually inspect layout and text alignment across desktop and mobile.

**Dependencies:** Task 2
**Files touched:**
- `/Users/levi.napz/Projects/website/index.html`
- `/Users/levi.napz/Projects/website/css/style.css`

**Estimated scope:** Small (2 files)

---

## Checkpoint: Core Features
- [x] All portfolio sections complete and styled.
- [x] Interactive Sandbox (Disassembler, Terminal, SIMD) operational without JavaScript errors.
- [x] Project filters and links fully operational.

---

## Phase 3: GitHub Profile README & Deployment

### Task 7: Companion GitHub Profile README
**Description:** Create a custom GitHub Profile README for `n0thhhing/n0thhhing` matching the website's aesthetic, with custom badges, terminal layout, project highlights, and a prominent link to the portfolio site.

**Acceptance criteria:**
- [x] Formatted markdown file created at `/Users/levi.napz/Projects/website/github-profile/README.md`.
- [x] Includes custom badges, terminal-styled layout, dual-column tech breakdown, pinned projects table, and portfolio link.
- [x] Tested rendering cleanly on GitHub's dark and light markdown viewers.

**Verification:**
- [x] Review markdown rendering for broken links, table formatting, and image/badge rendering.

**Dependencies:** Task 5
**Files touched:**
- `/Users/levi.napz/Projects/website/github-profile/README.md`

**Estimated scope:** Small (1 file)

---

### Task 8: Production Verification & GitHub Pages Workflow
**Description:** Add GitHub Pages automated deployment workflow, favicon assets, meta tags (OpenGraph, Twitter card), and conduct full end-to-end testing.

**Acceptance criteria:**
- [x] GitHub Actions workflow created at `.github/workflows/deploy.yml` for zero-config GitHub Pages hosting.
- [x] OpenGraph preview meta tags and crisp SVG icon in place.
- [x] Zero console warnings or errors.

**Verification:**
- [x] Test local serving via Python HTTP server (100% 200 OK responses).
- [x] Node syntax checks validated without errors.

**Dependencies:** Tasks 4, 5, 6, 7
**Files touched:**
- `/Users/levi.napz/Projects/website/.github/workflows/deploy.yml`
- `/Users/levi.napz/Projects/website/index.html`
- `/Users/levi.napz/Projects/website/README.md`

**Estimated scope:** Small (3 files)

---

## Checkpoint: Complete
- [x] Website fully built, polished, and tested in `/Users/levi.napz/Projects/website`.
- [x] GitHub Profile README ready in `github-profile/README.md`.
- [x] Git repository initialized and initial commit created.
