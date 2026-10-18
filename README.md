# Levi (@n0thhhing) — Personal Portfolio & Systems Showcase

Zero-dependency personal portfolio website and low-level systems showcase for **Levi (`@n0thhhing`)**.

## Features

- **Zero External Dependencies**: Pure modern HTML5, CSS3, and vanilla ES6 modules. No npm, no node_modules, no webpack/vite bundle step needed.
- **Pixel-Accurate Zed Workspace**: Faithful reproduction of the Zed editor interface with nested pane splitting, history navigation, tab management, symbol outlines, buffer search, hairline pane dividers, and Starship terminal prompt.
- **Monaspace Argon Typography**: Styled with GitHub's humanistic coding font Monaspace Argon with texture healing (`calt`) and programming ligatures.
- **Curated Theme System**: Live theme switching across 6 hand-tuned palettes: Gruvbox Material (default favorite), Gruvbox, Panda, Dracula, Monokai Pro, and Catppuccin Frappé.
- **Interactive Multi-Pane Terminal**: Fully split-aware terminal dock with Starship prompt, tab navigation, history, autocomplete, and portfolio commands (`zeon`, `hackathons`, `bun`, `stack`, `ls`, `cat`, `theme`).
- **Comprehensive Systems Portfolio**:
  - **`zeon`**: 2,806+ ARM/ARM64 NEON SIMD intrinsics in pure Zig 0.16+ with Big-Endian QEMU test suite.
  - **`wallify`**: Native macOS music widget in Swift, AppKit, and Metal on active branch `combine`.
  - **`Offset-updater`**: Disassembler-guided wildcard masking engine with Capstone 5.0 and IL2CPP auto-anchoring.
  - **Hackathons & OSS**: 3-year Catawba College podium streak and upstream Bun compiler diagnostics.

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
