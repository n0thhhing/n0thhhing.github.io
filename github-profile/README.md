<div align="center">

# `levi@aarch64` ❖ `Levi (@n0thhhing)`

**Systems Architect & Reverse Engineer**  
*Bare-metal ARM64/ARM64e instruction decoding, 2,800+ NEON SIMD intrinsics in pure Zig/assembly, binary analysis, WebAssembly runtimes, and native macOS desktop tools.*

[![Portfolio Website](https://img.shields.io/badge/Live_Portfolio-n0thhhing.github.io%2Fwebsite-00f5ff?style=for-the-badge&logo=safari&logoColor=black)](https://n0thhhing.github.io/website)
[![GitHub](https://img.shields.io/badge/GitHub-@n0thhhing-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/n0thhhing)
[![Email](https://img.shields.io/badge/Contact-lynchlm064@gmail.com-00ff9d?style=for-the-badge&logo=gmail&logoColor=black)](mailto:lynchlm064@gmail.com)

</div>

---

### `// ABOUT ME`

I build software with hardware-level empathy:
- **Zero-Dependency Philosophy**: Hand-written demanglers, custom parsers, and zero runtime crates/dependencies for audit-proof speed and determinism.
- **Hardware-Aware Design**: Instruction-level optimization, 128-bit vectorization across NEON lanes, and cache-conscious memory layouts.
- **Specification Parity**: Full compliance with official standards (Arm 2026-09 MRS, W3C WebAssembly 2.0, Unity metadata v29).

---

### `// CORE REPOSITORIES & SYSTEMS`

| Project | Domain / Architecture | Highlights |
| :--- | :--- | :--- |
| [**`rarm64`**](https://github.com/n0thhhing/rarm64) | `Rust` `ARM64` `Mach-O` | Zero-dependency Mach-O ARM64/ARM64e disassembler matching Arm 2026-09 spec with pure-Rust demangler (Swift 5+ & Rust v0). |
| [**`zeon`**](https://github.com/n0thhhing/zeon) | `Zig` `NEON` `Assembly` | 2,800+ ARM/ARM64 NEON intrinsics in pure Zig & inline assembly with 2,815+ passing unit tests. |
| [**`il2cpp`**](https://github.com/n0thhhing/il2cpp) | `Zig` `ELF` `SQLite` | Unity IL2CPP v29 metadata & 64-bit Android ELF analyzer, stripped registration discovery, and SQLite call-graph exporter. |
| [**`lwasm`**](https://github.com/n0thhhing/lwasm) | `Lua` `C` `Wasm 2.0` | WebAssembly 2.0 runtime, disassembler, and WAT decompiler passing 292 W3C specification suites. |
| [**`wallify`**](https://github.com/n0thhhing/wallify) | `Zig` `Swift` `Metal` | Native macOS audio widget with live system audio waveform capture, ambient artwork glow, and Dear ImGui diagnostics. |
| [**`hexer`**](https://github.com/n0thhhing/hexer) | `Rust` `Terminal` `Zero-Deps` | Terminal hex viewer with ANSI mouse reporting, wildcard byte searching (`4? ??`), and zero Cargo dependencies. |
| [**`Offset-updater`**](https://github.com/n0thhhing/Offset-updater) | `TypeScript` `C++` `SIMD` | AArch64 IL2CPP offset updater with Capstone wildcard signatures and native NEON scanning engine. |

---

### `// TECHNICAL MATRIX`

```text
  ┌─────────────────────────────────┬─────────────────────────────────┐
  │  LOW-LEVEL & BARE METAL         │  HIGH-LEVEL & APPLICATION       │
  ├─────────────────────────────────┼─────────────────────────────────┤
  │  • ARM64 / ARM64e / AArch64     │  • Swift & Metal Shaders        │
  │  • Zig 0.16 (comptime, memory)  │  • Dear ImGui Diagnostics       │
  │  • Rust (zero-dep stdlib)       │  • TypeScript & Bun Ecosystem   │
  │  • Inline Assembly (NEON/A64)   │  • Discord IPC Protocol         │
  │  • Mach-O & Android ELF Parsing │  • Reactive Desktop Tooling     │
  │  • WebAssembly 2.0 Bytecode     │  • Automated Test Fixtures      │
  └─────────────────────────────────┴─────────────────────────────────┘
```

---

<div align="center">
  <sub>Check out the interactive disassembler and SIMD visualizer at <a href="https://n0thhhing.github.io/website">n0thhhing.github.io/website</a></sub>
</div>
