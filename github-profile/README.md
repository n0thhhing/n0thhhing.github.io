<div align="center">

# `levi@aarch64` ❖ `Levi (@n0thhhing)`

**Systems Architect • Reverse Engineer • Visual Artist**  
*Bare-metal ARM64/ARM64e instruction decoding, 2,800+ NEON SIMD intrinsics in pure Zig/assembly, binary analysis, WebAssembly runtimes, and an artist's devotion to color theory & ergonomics (proud Gruvbox Material purist).*

[![Portfolio Website](https://img.shields.io/badge/Live_Portfolio-n0thhhing.github.io%2Fwebsite-e78a4e?style=for-the-badge&logo=safari&logoColor=black)](https://n0thhhing.github.io/website)
[![Instagram](https://img.shields.io/badge/Art_Instagram-@levi.napz-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/levi.napz)
[![GitHub](https://img.shields.io/badge/GitHub-@n0thhhing-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/n0thhhing)
[![Email](https://img.shields.io/badge/Contact-lynchlm064@gmail.com-d8a657?style=for-the-badge&logo=gmail&logoColor=black)](mailto:lynchlm064@gmail.com)

</div>

---

### `// ABOUT ME`

I build software with hardware-level empathy and an artist's eye for color and craft:
- **Visual Artist & Color Theory**: As an artist, colors aren't decoration—they are cognitive architecture. I share my art on Instagram [**@levi.napz**](https://instagram.com/levi.napz), and theme almost all my developer environments in **Gruvbox Material** for warm, matte contrast and zero visual fatigue.
- **Zero-Dependency Philosophy**: Hand-written demanglers, custom parsers, and zero runtime crates/dependencies for audit-proof speed and determinism.
- **Hardware-Aware Design**: Instruction-level optimization, 128-bit vectorization across NEON lanes, and cache-conscious memory layouts.
- **Specification Parity**: Full compliance with official standards (Arm 2026-09 MRS, W3C WebAssembly 2.0, Unity metadata v29).

---

### `// CORE REPOSITORIES & SYSTEMS`

| Project | Stars | Domain / Architecture | Highlights |
| :--- | :---: | :--- | :--- |
| [**`zeon`**](https://github.com/n0thhhing/zeon) | ★ 16 | `Zig` `ARM64` `NEON` `ASM` | 2,800+ ARM/ARM64 NEON intrinsics in pure Zig & inline assembly with 2,815+ passing unit tests. |
| [**`ts-capstone`**](https://github.com/n0thhhing/ts-capstone) | ★ 6 | `TypeScript` `Capstone 5.0` `Wasm` | Full-featured Capstone 5.0 bindings for TypeScript & Bun via Emscripten with detailed instruction inspection. |
| [**`Offset-updater`**](https://github.com/n0thhhing/Offset-updater) | ★ 2 | `TypeScript` `C++` `ARM NEON` | AArch64 IL2CPP offset updater with Capstone wildcard signatures and native NEON scanning engine. |
| **`rarm64`** *(In Dev)* | — | `Rust` `ARM64` `Mach-O` | Zero-dependency Mach-O ARM64/ARM64e disassembler matching Arm 2026-09 spec with pure-Rust demangler (Swift 5+ & Rust v0). |
| **`il2cpp v29`** *(In Dev)* | — | `Zig` `Android ELF` `SQLite` | Unity IL2CPP v29 metadata & 64-bit Android ELF analyzer, stripped registration discovery, and SQLite call-graph exporter. |
| [**`z-scanner`**](https://github.com/n0thhhing/z-scanner) | ★ 1 | `Zig` `AOB` `Memory Scan` | High-performance Array of Bytes (AOB) memory pattern scanner in Zig with wildcard masking (`?`, `??`). |
| [**`lwasm`**](https://github.com/n0thhhing/lwasm) | ★ 1 | `Lua` `C` `WebAssembly 2.0` | WebAssembly 2.0 runtime, disassembler, & WAT decompiler. Conceived for Game Guardian with shared memory to patch live game memory with C (Pixel Gun 3D modding); evolved into 292-test W3C compliant engine. |
| [**`wallify`**](https://github.com/n0thhhing/wallify) | — | `Zig` `Swift` `Metal` `ImGui` | Native macOS audio widget with live system audio waveform capture, ambient artwork glow, and Dear ImGui diagnostics. |
| **`hexer`** *(In Dev)* | — | `Rust` `Terminal` `Zero-Deps` | Terminal hex viewer with ANSI mouse reporting, wildcard byte searching (`4? ??`), and zero Cargo dependencies. |
| [**`Discord-rich-presence`**](https://github.com/n0thhhing/Discord-rich-presence) | ★ 2 | `Node.js` `IPC Sockets` | Custom Unix domain socket IPC client for dynamic Discord rich presence status management. |

---

### `// TECHNICAL MATRIX`

```text
  ┌────────────────────────────────────────┬────────────────────────────────────────┐
  │  LOW-LEVEL & BARE METAL                │  HIGH-LEVEL & APPLICATION              │
  ├────────────────────────────────────────┼────────────────────────────────────────┤
  │  • ARM64 / ARM64e / AArch64            │  • Swift & Metal GPU Shaders           │
  │  • Zig 0.16 (comptime, memory models)  │  • Dear ImGui Real-Time Diagnostics    │
  │  • Rust (zero-dep stdlib, unsafe)      │  • TypeScript & Bun Ecosystem          │
  │  • Inline Assembly (NEON / A64)        │  • Discord IPC Protocol                │
  │  • Mach-O & Android ELF Parsing        │  • Capstone Engine 5.0 Bindings        │
  │  • AOB Pattern Scanning (z-scanner)    │  • Termux & Android 17 Service Helpers │
  │  • WebAssembly 2.0 (lwasm runtime)     │  • Automated Test Fixtures & Oracles   │
  └────────────────────────────────────────┴────────────────────────────────────────┘
```

---

### `// GITHUB ACTIVITY & METRICS`

<div align="center">
  <a href="https://github.com/n0thhhing">
    <img src="./github-metrics.svg" alt="Levi's GitHub Metrics" width="95%" />
  </a>
</div>

---

<div align="center">
  <sub>Explore the live interactive ARM64 disassembler, terminal CLI, and NEON SIMD visualizer at <a href="https://n0thhhing.github.io/website">n0thhhing.github.io/website</a></sub>
</div>
