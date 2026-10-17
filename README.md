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
2. In your repository settings: **Settings → Pages → Source**, select **GitHub Actions**.
3. The site will automatically build and publish to `https://n0thhhing.github.io/website`.

## Updating Your GitHub Profile README

To update your main GitHub profile (`https://github.com/n0thhhing`):
1. Copy the contents of [`github-profile/README.md`](github-profile/README.md).
2. Paste it into your special [`n0thhhing/n0thhhing`](https://github.com/n0thhhing/n0thhhing) repository's `README.md`.
