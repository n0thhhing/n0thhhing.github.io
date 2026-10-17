# Tasks: Levi (@n0thhhing) Portfolio & Profile

## Phase 1: Foundation & Design System

### Task 1: Project Scaffolding & Zero-Dependency Structure
**Description:** Initialize the directory layout in `/Users/levi.napz/Projects/website` with clean modern HTML5 structure, assets folder, and modular files.

**Acceptance criteria:**
- [ ] Directory structure created under `/Users/levi.napz/Projects/website` (`index.html`, `css/style.css`, `js/main.js`, `assets/`).
- [ ] Valid HTML5 boilerplate with responsive viewport, metadata, and custom favicon SVG.
- [ ] Local preview script / command documented.

**Verification:**
- [ ] Open in local server or browser (`python3 -m http.server 8080 -d /Users/levi.napz/Projects/website`).
- [ ] Verify HTML passes standard semantic validation without errors.

**Dependencies:** None
**Files likely touched:**
- `/Users/levi.napz/Projects/website/index.html`
- `/Users/levi.napz/Projects/website/css/style.css`
- `/Users/levi.napz/Projects/website/js/main.js`

**Estimated scope:** Small (1-3 files)

---

### Task 2: Design System & Styling Architecture
**Description:** Implement the "Low-Level Meets High-Level" styling system: dark slate/void background, cyan and neon emerald accents, amber register highlights, glassmorphism card surfaces, custom scrollbars, and monospace typography hierarchy.

**Acceptance criteria:**
- [ ] CSS custom properties defined for colors, shadows, borders, transitions, and typography.
- [ ] Terminal window chrome components (Mac-style red/yellow/green pills, header title, status bar).
- [ ] Responsive grid and container system that looks sharp on mobile and ultrawide displays.

**Verification:**
- [ ] Inspect responsive behavior in browser across mobile (375px), tablet (768px), and desktop (1200px+).
- [ ] Check contrast ratios for accessibility.

**Dependencies:** Task 1
**Files likely touched:**
- `/Users/levi.napz/Projects/website/css/style.css`

**Estimated scope:** Small (1 file)

---

## Checkpoint: Foundation
- [ ] Base page loads cleanly without stylesheet or script errors.
- [ ] Design system tokens and terminal container styles are active and responsive.

---

## Phase 2: Core Features & Interactive Gadgets

### Task 3: Hero Section & Persona Narrative
**Description:** Craft the hero section capturing Levi's identity (`@n0thhhing`): Systems Architect & Reverse Engineer, bridging bare-metal hardware/firmware/assembly with high-level developer tools.

**Acceptance criteria:**
- [ ] Striking headline, sub-headline, and live status pill ("Tracing opcodes & vectorizing intrinsics").
- [ ] Quick social / repository links (GitHub: `@n0thhhing`, email, Discord).
- [ ] Quick nav bar with smooth scrolling to sections (`#projects`, `#interactive`, `#skills`, `#about`).

**Verification:**
- [ ] Navigation anchors scroll smoothly to target sections.
- [ ] Links open correctly in new tabs with `rel="noopener noreferrer"`.

**Dependencies:** Task 2
**Files likely touched:**
- `/Users/levi.napz/Projects/website/index.html`
- `/Users/levi.napz/Projects/website/css/style.css`

**Estimated scope:** Small (2 files)

---

### Task 4: Interactive Low-Level Sandbox Widget
**Description:** Build the interactive centerpiece widget with 3 tabbed modes:
1. **Live ARM64 Disassembler & Hex Inspector**: Shows annotated ARM64 instructions from `rarm64`, allowing users to click/hover bytes to see immediate values, target registers, and instruction descriptions.
2. **Interactive Terminal CLI**: Lightweight terminal allowing commands like `help`, `cat bio.txt`, `projects`, `skills`, `disasm`, `clear`.
3. **NEON SIMD Visualizer**: Visual animation illustrating 4x32-bit vector lanes computing operations (`zeon` NEON tribute).

**Acceptance criteria:**
- [ ] Tab switching between Disassembler, Terminal CLI, and SIMD Visualizer works seamlessly.
- [ ] Terminal accepts user keystrokes, provides autocomplete/help, and produces clean output.
- [ ] Disassembler displays memory offsets, raw hex bytes, assembly mnemonics, and comment annotations with hover highlights.

**Verification:**
- [ ] Type `help` and each supported command in terminal to confirm expected output.
- [ ] Click through instructions in the disassembler view to verify interactive tooltips.

**Dependencies:** Task 3
**Files likely touched:**
- `/Users/levi.napz/Projects/website/index.html`
- `/Users/levi.napz/Projects/website/css/style.css`
- `/Users/levi.napz/Projects/website/js/sandbox.js`

**Estimated scope:** Medium (3 files)

---

### Task 5: Projects Showcase Grid
**Description:** Build interactive showcase cards for Levi's key projects (`rarm64`, `zeon`, `il2cpp`, `lwasm`, `wallify`, `hexer`, `Offset-updater`, `Discord-rich-presence`).

**Acceptance criteria:**
- [ ] Each card showcases: Project title, tagline, architecture badges (`Rust`, `Zig`, `ARM64`, `WebAssembly`, `Metal`, `TypeScript`), key features, and direct GitHub links.
- [ ] Code/Assembly preview drawer or expandable details showing authentic snippets from the projects.
- [ ] Filter pills by domain: `All`, `Low-Level & SIMD`, `Reverse Engineering`, `Apps & Tools`.

**Verification:**
- [ ] Filter pills correctly filter the project cards with smooth transitions.
- [ ] All external repository URLs match `https://github.com/n0thhhing/<repo>`.

**Dependencies:** Task 2
**Files likely touched:**
- `/Users/levi.napz/Projects/website/index.html`
- `/Users/levi.napz/Projects/website/css/style.css`
- `/Users/levi.napz/Projects/website/js/projects.js`

**Estimated scope:** Medium (3 files)

---

### Task 6: Technical Skills Matrix & Engineering Philosophy
**Description:** Implement the engineering skills matrix and philosophical ethos ("Zero Runtime Dependencies", "Hardware-Aware Software", "Instruction-Level Empathy").

**Acceptance criteria:**
- [ ] Structured skills breakdown categorized into Low-Level Systems, Binary Analysis & Reversing, SIMD & Performance, and High-Level Application & Tools.
- [ ] Philosophy cards with crisp rationale and architecture tenets.

**Verification:**
- [ ] Visually inspect layout and text alignment across desktop and mobile.

**Dependencies:** Task 2
**Files likely touched:**
- `/Users/levi.napz/Projects/website/index.html`
- `/Users/levi.napz/Projects/website/css/style.css`

**Estimated scope:** Small (2 files)

---

## Checkpoint: Core Features
- [ ] All portfolio sections complete and styled.
- [ ] Interactive Sandbox (Disassembler, Terminal, SIMD) operational without JavaScript errors.
- [ ] Project filters and links fully operational.

---

## Phase 3: GitHub Profile README & Deployment

### Task 7: Companion GitHub Profile README
**Description:** Create a custom GitHub Profile README for `n0thhhing/n0thhhing` matching the website's aesthetic, with custom badges, terminal layout, project highlights, and a prominent link to the portfolio site.

**Acceptance criteria:**
- [ ] Formatted markdown file created at `/Users/levi.napz/Projects/website/github-profile/README.md`.
- [ ] Includes custom badges, terminal-styled layout, dual-column tech breakdown, pinned projects table, and portfolio link.
- [ ] Tested rendering cleanly on GitHub's dark and light markdown viewers.

**Verification:**
- [ ] Review markdown rendering for broken links, table formatting, and image/badge rendering.

**Dependencies:** Task 5
**Files likely touched:**
- `/Users/levi.napz/Projects/website/github-profile/README.md`

**Estimated scope:** Small (1 file)

---

### Task 8: Production Verification & GitHub Pages Workflow
**Description:** Add GitHub Pages automated deployment workflow, favicon assets, meta tags (OpenGraph, Twitter card), and conduct full end-to-end testing.

**Acceptance criteria:**
- [ ] GitHub Actions workflow created at `.github/workflows/deploy.yml` for zero-config GitHub Pages hosting.
- [ ] OpenGraph preview meta tags and crisp SVG icon in place.
- [ ] Zero console warnings or errors.

**Verification:**
- [ ] Test local serving via Python HTTP server.
- [ ] Run automated Lighthouse / syntax checks.

**Dependencies:** Tasks 4, 5, 6, 7
**Files likely touched:**
- `/Users/levi.napz/Projects/website/.github/workflows/deploy.yml`
- `/Users/levi.napz/Projects/website/index.html`

**Estimated scope:** Small (2 files)

---

## Checkpoint: Complete
- [ ] Website fully built, polished, and tested in `/Users/levi.napz/Projects/website`.
- [ ] GitHub Profile README ready in `github-profile/README.md`.
- [ ] User review and ready to deploy.
