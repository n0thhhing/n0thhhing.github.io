<div align="center">

# Levi Lynch (`@n0thhhing`)
### Systems Programmer • Low-Level & SIMD Engineer • Binary Analyst • Cybersecurity Student

[![GitHub](https://img.shields.io/badge/GitHub-n0thhhing-282828?style=for-the-badge&logo=github&logoColor=ebdbb2&labelColor=1d2021)](https://github.com/n0thhhing)
[![Alias](https://img.shields.io/badge/Alias-levi.napz-282828?style=for-the-badge&logo=gnometerminal&logoColor=fabd2f&labelColor=1d2021)](https://github.com/n0thhhing)
[![Location](https://img.shields.io/badge/Location-Salisbury_%2F_Charlotte_NC-282828?style=for-the-badge&logo=googlemaps&logoColor=fb4934&labelColor=1d2021)](#)
[![Theme](https://img.shields.io/badge/Palette-Gruvbox_Dark-282828?style=for-the-badge&logoColor=b8bb26&labelColor=1d2021)](#06--environment-workflow--aesthetics)

[![Zig](https://img.shields.io/badge/Zig-F7A41D?style=flat-square&logo=zig&logoColor=black)](https://github.com/n0thhhing/zeon)
[![C](https://img.shields.io/badge/C-A8B9CC?style=flat-square&logo=c&logoColor=black)](#)
[![ARM64](https://img.shields.io/badge/AArch64_%2F_NEON-0091BD?style=flat-square&logo=arm&logoColor=white)](https://github.com/n0thhhing/zeon)
[![Lua](https://img.shields.io/badge/Lua-2C2D72?style=flat-square&logo=lua&logoColor=white)](#)
[![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)](#)
[![Go](https://img.shields.io/badge/Go-00ADD8?style=flat-square&logo=go&logoColor=white)](#)
[![Swift](https://img.shields.io/badge/Swift-F05138?style=flat-square&logo=swift&logoColor=white)](https://github.com/n0thhhing/wallify)
[![WebAssembly](https://img.shields.io/badge/WebAssembly-654FF0?style=flat-square&logo=webassembly&logoColor=white)](#)
[![Neovim](https://img.shields.io/badge/Neovim-57A143?style=flat-square&logo=neovim&logoColor=white)](#)
[![Android](https://img.shields.io/badge/Android_17_%2F_Termux-3DDC84?style=flat-square&logo=android&logoColor=black)](#)

</div>

---

## `01 // OVERVIEW`

I’m **Levi Lynch** (online as **[`n0thhhing`](https://github.com/n0thhhing)** and **`levi.napz`**), a developer based in **Salisbury, North Carolina**, focused on **systems programming, hardware-level optimization, binary reverse engineering, and developer tooling**. 

Rather than treating software as a stack of black boxes, I like building from the instruction level up—whether that means implementing **ARM NEON SIMD intrinsics** in Zig, writing a **WebAssembly binary decoder and runtime interpreter** from scratch in Lua, automating **IL2CPP binary offset resolution**, or compiling and debugging native **AArch64** binaries directly on mobile hardware.

I am currently completing my Associate in Arts at **Rowan-Cabarrus Community College (RCCC)** with plans to transfer to the **University of North Carolina at Charlotte (UNCC)** to pursue a degree in **Cybersecurity**.

### Core Engineering Interests
- **Low-Level & Systems Architecture:** Memory-safe systems programming in **Zig** (tracking bleeding-edge compiler evolutions through Zig `0.16.0`), C/ABI interoperability, manual memory management, and zero-overhead abstractions.
- **SIMD & Vectorization:** Hardware acceleration targeting **ARM64 / AArch64 NEON**, vector registers, lane permutations, cryptographic intrinsics, and floating-point conversion pipelines.
- **Reverse Engineering & Binary Analysis:** Static and dynamic analysis of compiled binaries, **IL2CPP** metadata/offset tracking, signature scanning, instruction disassembly, and Android/mobile runtime inspection.
- **Compilers, Parsers & Virtual Machines:** Bytecode decoding, stack-machine execution engines, AST/instruction dispatch, and binary format specifications (Wasm, ELF, Mach-O).
- **Custom Tooling & Desktop/Terminal Ecosystems:** Extending **Neovim**, **Kitty**, **macOS**, and **Android** using Lua, Python, Swift, and Zig.

---

## `02 // FEATURED GITHUB PROJECTS (@n0thhhing)`

All of my public open-source work lives at **[github.com/n0thhhing](https://github.com/n0thhhing)**. Below is an architectural breakdown of my flagship repositories and ongoing engineering work.

### 1. [`zeon`](https://github.com/n0thhhing/zeon) — ARM NEON SIMD Intrinsics Library for Zig
> **Stack:** `Zig (0.16.0)` • `C (Oracle Testing)` • `Python (Test Harness Automation)` • `AArch64 / ARM NEON`

`zeon` is a low-level SIMD intrinsic library bringing ergonomic, zero-cost **ARM NEON** vector operations to the **Zig** programming language.
- **Broad Intrinsic Coverage:** Implements NEON operations modularized across arithmetic, vector conversions (`src/intrinsics/convert.zig`), hardware cryptography (`src/intrinsics/crypto.zig`), and lane permutations/shuffles (`src/intrinsics/permute.zig`).
- **Modern Zig Compatibility:** Updated to align with modern Zig `0.16.0` module ergonomics (migrating away from legacy `usingnamespace` patterns, refining `std.io` interfaces, and enforcing strict pointer-alignment casts on vector loads such as `vld1q_f32`).
- **Automated C-Oracle Verification (`repair_zeon_tests.py`):** Built a custom Python verification pipeline that cross-checks Zig SIMD implementations against ground-truth C compiler NEON intrinsics, replacing weak assertions with deterministic C-derived expected vector outputs while accounting for complex return types (such as `vcvtq_mf8_f16_fpm`).
- **Vectorized Showcases:** Includes practical compute examples such as a SIMD-accelerated Mandelbrot set renderer (`examples/mandlebrot/main.zig`) demonstrating real-world throughput gains.

---

### 2. [`Offset-updater`](https://github.com/n0thhhing/Offset-updater) — Automated Binary & IL2CPP Offset Resolution
> **Stack:** `Reverse Engineering` • `Binary Analysis` • `IL2CPP` • `AArch64`

An active reverse-engineering utility built to streamline the maintenance of binary modifications and security research across application updates.
- **Automated Offset Migration:** Resolves and updates function, field, and metadata offsets across stripped or updated **IL2CPP** binaries without relying on heavyweight external disassembly dependencies.
- **Binary Pattern & Heuristic Tracking:** Designed to survive routine game and application patches by matching structural signatures and dump metadata rather than hardcoded static addresses.

---

### 3. `lwasm` — Pure Lua WebAssembly Parser, Decoder & Runtime Interpreter
> **Stack:** `Lua` • `WebAssembly (Wasm Binary Format)` • `Virtual Machines`

A ground-up implementation of the WebAssembly specification written entirely in Lua to explore binary format parsing and virtual machine execution.
- **Binary Spec Parser:** Decodes raw `.wasm` binary headers, LEB128 variable-length integers, type signatures, function tables, memory sections, and export descriptors.
- **Bytecode Disassembler & Control Flow Engine:** Parses structured Wasm control flow (`block`, `loop`, `if/else`, `br`, `br_if`, `call`) and executes instructions inside a custom Lua-managed stack machine.

---

### 4. `z-scanner` — Low-Level Memory & Pattern Scanner
> **Stack:** `Zig` • `Systems Programming` • `Memory Inspection`

A high-performance memory inspection and byte-pattern scanning utility written in Zig.
- Engineered for rapid signature resolution, wildcard byte-mask matching, and region scanning with minimal memory overhead.

---

### 5. `ts-capstone` — Disassembly & Instruction Inspection Tooling
> **Stack:** `TypeScript` • `Capstone Disassembly Framework` • `Binary Analysis`

Tooling and bindings around the **Capstone** disassembly engine for decoding raw machine code bytes into human-readable assembly instructions and inspecting instruction-level semantics across architectures.

---

### 6. [`wallify`](https://github.com/n0thhhing/wallify) — Native macOS Widget & Desktop Application
> **Stack:** `Zig` • `Swift` • `macOS Native APIs`  
> **Branches:** [`native-macos-port`](https://github.com/n0thhhing/wallify/tree/native-macos-port) • [`combine`](https://github.com/n0thhhing/wallify/tree/combine)

A native macOS desktop widget application combining low-level **Zig** systems logic with native **Swift** UI rendering.
- Bridges systems code and Apple's native widget/windowing APIs to render responsive desktop media and wallpaper interfaces with minimal resource consumption.

---

### 7. Terminal, Editor & Media Ecosystem Tooling
> **Stack:** `Lua (Neovim API)` • `Python (Kitty API)` • `JSON / CSS (Spicetify & Spotifast)`

I build and maintain my own daily-driver extensions to keep my development workflow fast, keyboard-driven, and visually cohesive:
- **Neovim Spotify UI (`lua/spotify/ui.lua`):** Custom Lua floating windows, statusline integrations, and asynchronous media controls directly inside Neovim.
- **Kitty Terminal Media & Audio Tab Bar:** A custom Python tab-bar script for the Kitty terminal emulator that polls active media playback and connected audio output devices in real time.
- **Spotifast & Spicetify Gruvbox Themes:** Custom-authored JSON palettes and UI configurations bringing strict Gruvbox contrast and typography to Spotify clients.

---

## `03 // TECHNICAL STACK & CAPABILITIES MATRIX`

| Domain | Technologies, Languages & Tooling | Core Focus Areas |
| :--- | :--- | :--- |
| **Systems & Low-Level** | **Zig** (`0.16.0`), **C**, **C++**, **ARM64 / AArch64 Assembly**, **NEON SIMD** | Intrinsics, SIMD vectorization, zero-allocation patterns, C ABI interop, cross-compilation |
| **Reverse Engineering & Security** | **IL2CPP**, **Capstone**, **Memory Scanners**, **Hex/Binary Inspection**, **LADB** | Offset updating, static/dynamic binary analysis, signature scanning, mobile app internals |
| **Scripting, VMs & App Dev** | **Lua**, **Python**, **Go (Golang)**, **Swift**, **TypeScript**, **WebAssembly** | Bytecode interpreters (`lwasm`), test automation (`zeon`), macOS widgets (`wallify`), CLI tools |
| **Mobile & AArch64 Workflows** | **Android 17 (Pixel 11 Pro)**, **Termux**, **`proot`**, **Shizuku**, **Tasker** | On-device AArch64 compilation, rootless privileged API automation, wireless ADB debugging |
| **Developer Environment** | **Neovim**, **Kitty**, **Git / GitHub**, **macOS**, **Linux** | Custom Lua plugin architecture, terminal multiplexing, automated build systems (`build.zig`, `Make`) |

---

## `04 // ACADEMICS, COMPETITIONS & ACHIEVEMENTS`

### Education
- **Rowan-Cabarrus Community College (RCCC)** — *Associate in Arts (Current)*
  - Completing university transfer coursework (including General Chemistry I, foundational computing, and mathematics) prior to transferring to **UNC Charlotte (UNCC)** for a Bachelor’s degree in **Cybersecurity**.
- **Jesse C. Carson High School** *(China Grove, NC — Graduated)*
  - **Cumulative GPA:** `3.96`
  - **Advanced Placement:** Scored a **5** on **AP Precalculus** and a **4** on **AP Calculus AB**.
  - **Program Specialization:** Enrolled in the **Visual Arts Program**, blending technical precision with visual design.

### Hackathons & National Competitions
- **Catawba College Hackathon (3x Consecutive Placement):** Placed in competitive programming and software development challenges across **Sophomore, Junior, and Senior years** of high school.
- **National 4-H Youth Invitational (June 2026):** Selected to compete at the national level in **Grand Island, Nebraska**.

---

## `05 // ENVIRONMENT, WORKFLOW & AESTHETICS`

<details>
<summary><b>Click to expand my daily hardware, terminal setup, and creative interests</b></summary>
<br>

- **The Gruvbox Standard:** Every layer of my environment—from **Neovim** buffers and **Kitty** terminal tabs to **Spotifast** audio clients and custom pixel art—is standardized around the **Gruvbox** color palette.
- **On-Device Mobile Engineering:** I use a **Google Pixel 11 Pro (Android 17)** as both a daily device and a portable **AArch64** testbed. Using **Termux**, **`proot`** Linux containers, **LADB**, **Shizuku**, and **Tasker**, I can compile, test, and verify native ARM64/NEON code (such as `zeon`) directly on physical ARM silicon alongside desktop workflows.
- **Pixel Art & Sprite Animation:** Drawing from my background in the Visual Arts Program, I design custom pixel art animations and multi-frame sprite sheets (including walk/movement cycles for cat and raccoon characters rendered in Gruvbox palettes).
- **Audio & Soundscapes:** When writing Zig or debugging assembly, I’m usually tuning EQ profiles for high-energy underground, hyperpop, and alternative tracks—especially artists like **redize**, **neet**, and **potterdabooter**.

</details>

---

## `06 // WORK ETHIC & OPERATIONAL EXPERIENCE`

Alongside software engineering and full-time academics, I have worked consistently in fast-paced, high-accountability environments since 2022:
- **Back of House (BOH) Team Member — Chick-fil-A** *(Nov 2024 – Sep 2026)*: Managed high-volume kitchen operations, rush execution, inventory logistics, equipment maintenance, closing operations, and new staff training while maintaining a 3.96 GPA and building open-source systems projects.
- **Prior Roles:** Catering Operations & Maintenance *(May 2024 – Nov 2024)*, **Custom Glass Products** *(Summer 2023)*, and independent local contracting *(2022 – 2023)*.

---

## `07 // CONNECT & LINKS`

| Platform | Handle / Link | Notes |
| :--- | :--- | :--- |
| **GitHub** | [**github.com/n0thhhing**](https://github.com/n0thhhing) | Primary code repositories (`zeon`, `Offset-updater`, `wallify`, `lwasm`, `z-scanner`) |
| **Alias** | `n0thhhing` / `levi.napz` | Developer handle across platforms |
| **Location** | Salisbury / Charlotte Metro, NC | Open to systems, security, and software engineering opportunities |

---

<div align="center">
  <sub>Built with Gruvbox aesthetics (`#282828` • `#ebdbb2` • `#fabd2f` • `#b8bb26`) — <b>Levi Lynch (@n0thhhing)</b></sub>
</div>
