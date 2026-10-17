# Levi (@n0thhhing) — Personal Portfolio & Systems Showcase

Zero-dependency personal portfolio website and low-level systems showcase for **Levi (`@n0thhhing`)**.

## Features

- **Zero External Dependencies**: Pure modern HTML5, CSS3, and vanilla ES6 modules. No npm, no node_modules, no webpack/vite bundle step needed.
- **Cyber-Glass Aesthetics**: Dark void palette, neon cyan & electric emerald accents, CRT scanlines, memory address gutters, and glassmorphism.
- **Interactive Low-Level Sandbox**:
  - **Live ARM64 Disassembler & Hex Inspector**: Real disassembly from `rarm64`, `zeon`, and `il2cpp` with interactive opcode breakdown and register inspectors.
  - **Terminal CLI**: Interactive command prompt supporting `help`, `about`, `projects`, `skills`, `disasm`, `simd`, and `clear`.
  - **NEON SIMD Vector Visualizer**: 4x32-bit vector lane computer simulating parallel arithmetic from `zeon`.
- **Featured Projects Grid**: Interactive filtering across `rarm64`, `zeon`, `il2cpp`, `lwasm`, `wallify`, `hexer`, `Offset-updater`, and `Discord-rich-presence`.
- **GitHub Profile README**: Ready-to-use matching profile markdown in [`github-profile/README.md`](github-profile/README.md).

## Local Preview

You can preview the site locally using any simple HTTP server:

```bash
# Python 3
python3 -m http.server 8080

# Or using Bun / Node
npx serve .
```

Then open [http://localhost:8080](http://localhost:8080) in your browser.

## Deployment to GitHub Pages

The repository includes a ready-to-use GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

1. Push this repository to GitHub: `https://github.com/n0thhhing/website`.
2. In your repository settings: **Settings** -> **Pages** -> **Source**, select **GitHub Actions**.
3. The site will automatically build and publish to `https://n0thhhing.github.io/website`.

## Updating Your GitHub Profile README

To update your main GitHub profile (`https://github.com/n0thhhing`):
1. Copy the contents of [`github-profile/README.md`](github-profile/README.md).
2. Paste it into your special [`n0thhhing/n0thhhing`](https://github.com/n0thhhing/n0thhhing) repository's `README.md`.

## Zed-style workspace

The portfolio keeps rendered pages inside independent, nested editor panes. Split in any direction from the pane menu, resize separators with the mouse or arrow keys, drag tabs between panes, or use a tab’s context menu to move it. Explorer clicks open preview tabs; double-click keeps a tab. On phones, the pane selector switches views without discarding the desktop layout.

Cmd/Ctrl+P finds files by fuzzy name/path. Cmd/Ctrl+F searches the active page with case, whole-word, and regex options. The outline button jumps to page headings. Reload opens just the requested URL; layouts are not saved.

Run `npm run dev` to serve `site/` on port 4173. Run `npm test` for unit checks and `npm run test:browser` with an existing Playwright installation for browser regressions. Set `PLAYWRIGHT_MODULE` to that installation’s module path when it is not locally installed, and `SCREENSHOT_DIR` to capture desktop/mobile theme screenshots.

The pinned upstream commit and source references are documented in [docs/zed-reference.md](docs/zed-reference.md).

Double-click unused tab-strip space (or an empty pane) to create an untitled scratch file. The plus menu also offers New File and Open File. Pane actions appear while that pane or its menu has focus. Scratch files are editable plain text kept in memory; use Download to keep a copy before reloading or leaving.

The terminal panel supports independent sessions, tabs, and nested horizontal/vertical splits matching Zed. Terminal tab-bar actions appear when the terminal has focus, commands wrap at the prompt, and clicking output returns focus to typing while preserving selection.
