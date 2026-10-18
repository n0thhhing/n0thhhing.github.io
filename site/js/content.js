export const profile = {
  name: 'Levi',
  handle: 'levi.napz',
  alias: 'Herx / levi.napz',
  githubHandle: 'n0thhhing',
  github: 'https://github.com/n0thhhing',
  instagram: 'https://instagram.com/levi.napz',
  intro: 'Systems programmer, reverse engineer (early modding roots as Herx), and character artist. I build tools close to the machine, draw characters, and get the colors right.',
};

export const music = ['redize', 'NEET', 'spawncamped', 'overtonight', 'lantern', 'wifiskeleton'];
export const anime = ['Tokyo Ghoul', 'Steins;Gate', 'Terror in Resonance'];

export { gitCommits } from './commits.js';

export const pages = [
  { id: 'home', file: 'README.md', icon: 'M↓' },
  { id: 'about', file: 'about.md', icon: 'M↓' },
  { id: 'projects', file: 'projects.md', icon: 'M↓' },
  { id: 'achievements', file: 'achievements.md', icon: 'M↓' },
  { id: 'art', file: 'art.md', icon: 'M↓' },
  { id: 'interests', file: 'interests.md', icon: 'M↓' },
];

export const hackathons = [
  {
    year: '2026',
    placement: '1st Place Overall · Podium Sweep',
    event: '3rd Annual Ralph W. Ketner School of Business Hackathon',
    host: 'Catawba College',
    context: 'Senior Year',
    summary: 'Carson High School teams swept all three podium spots (1st, 2nd, and 3rd). Competed on the first-place team while mentoring and assisting peers across teams on problem-solving, algorithmic design, and debugging to achieve the sweep.',
  },
  {
    year: '2025',
    placement: '1st Place Overall Winner',
    event: '2nd Annual Ralph W. Ketner School of Business Hackathon',
    host: 'Catawba College',
    context: 'Junior Year',
    summary: 'Confirmed first-place finish with the Carson High School team (Landon Patterson, Logan Bryant, Levi Lynch, Caden Seay), competing against 86 student participants from high schools across Rowan-Salisbury Schools.',
    link: 'https://www.catawba.edu/news/all-news/2025/hackathon/',
  },
  {
    year: '2024',
    placement: '2nd Place Finish',
    event: '1st Annual Ralph W. Ketner School of Business Hackathon',
    host: 'Catawba College',
    context: 'Sophomore Year',
    summary: 'Earned second place in sophomore year, establishing early teamwork and competitive problem-solving foundations.',
  },
];

export const ossContributions = [
  {
    project: 'oven-sh/bun',
    issue: 'Issue #9982',
    title: 'Transpiler stack overflow during Emscripten AST parsing',
    impact: 'Isolated deterministic SIGSEGV (Address boundary error) on Linux/fish during Emscripten wrapper bundling, proving the crash occurred before JS execution in Bun’s native transpiler.',
    url: 'https://github.com/oven-sh/bun/issues/9982',
  },
  {
    project: 'oven-sh/bun',
    issue: 'Issue #15527',
    title: 'Linux SIGSEGV when importing emcc WebAssembly output',
    impact: 'Diagnosed Linux-specific segfault when importing Emscripten output; confirmed by maintainers and landed upstream fix in Bun v1.1.42-canary.',
    url: 'https://github.com/oven-sh/bun/issues/15527',
  },
];

// A public repo is optional. Add repoUrl here when a local project is published.
export const projects = [
  {
    id: 'zeon', name: 'zeon', category: 'Systems', featured: true,
    description: 'ARM and ARM64 NEON intrinsics, in pure Zig 0.16+ and inline assembly.',
    tech: ['Zig (0.16.0)', 'ARM64', 'NEON SIMD', 'Assembly', 'QEMU'], status: '2,806+ intrinsics',
    repoUrl: 'https://github.com/n0thhhing/zeon',
    specs: ['2,806+ Intrinsics', '2,815+ Passing Tests', '10 Modular Domains', 'Zig 0.16.0 Ready', 'Big-Endian QEMU Tested'],
    architectureFlow: `┌─────────────────────────────────────────────────────────────┐
│                    Caller SIMD Operation                    │
└──────────────────────────────┬──────────────────────────────┘
                               │
            ┌──────────────────┴──────────────────┐
            ▼                                     ▼
   use_builtins = true?                   use_asm = true?
            │                                     │
   ┌────────┴────────┐                   ┌────────┴────────┐
   ▼                 ▼                   ▼                 ▼
[LLVM Builtin]  [Inline Assembly]   [Pure Zig @Vector Fallback]
(@builtin_arm_   (fadd %0.4s, ...)   (a + b vector instruction)
 neon_vaddq_f32)`,
    subsystems: [
      { name: 'src/intrinsics/arithmetic.zig', description: '32-bit/64-bit vector addition, subtraction, multiplication, multiply-accumulate (vmlaq), and polynomial arithmetic (vmull_p64).' },
      { name: 'src/intrinsics/convert.zig', description: 'Floating-point and integer conversions, saturation scaling (vqmovn), and modern FP8/FP16 pipelines (vcvtq_mf8_f16_fpm).' },
      { name: 'src/intrinsics/crypto.zig', description: 'Hardware acceleration for AES (vaeseq_u8, vaesdq_u8), SHA-1 (vsha1cq_u32), SHA-256 (vsha256hq_u32), and SM3/SM4.' },
      { name: 'src/intrinsics/permute.zig', description: 'Vector lane permutations, interleaving zips (vzip1q), unzips (vuzp1q), transposes (vtrn1q), and table lookups (vtbl1_u8).' },
      { name: 'src/intrinsics/load_store.zig', description: 'Strict pointer-alignment vector loads (vld1q_f32, interleaved vld4q_u8) and de-interleaving vector stores.' },
      { name: 'src/intrinsics/reduction.zig', description: 'Pairwise additions (vpaddq) and horizontal min/max calculations across SIMD vector lanes (vmaxvq_f32).' },
    ],
    deepDive: `<p><code>zeon</code> brings zero-cost ARM NEON vector instructions into Zig 0.16+. Each intrinsic implements a three-tier execution hierarchy: LLVM compiler builtins take highest priority, followed by hand-crafted inline AArch64 assembly, falling back seamlessly to pure Zig <code>@Vector</code> primitives when executing on x86_64 host machines or during cross-compilation.</p><p>To guarantee complete mathematical fidelity across all 2,806+ intrinsics, I authored <code>repair_zeon_tests.py</code>: an automated Python oracle harness that compiles reference C implementations against GCC/Clang with native NEON flags, runs them in QEMU across both Little-Endian (<code>aarch64-linux</code>) and Big-Endian (<code>aarch64_be-linux</code>) architectures, extracts ground-truth vector register states, and validates the Zig test suites against them.</p>`,
    details: [
      'Implemented 2,806+ ARM/ARM64 NEON intrinsics with 2,815+ unit tests passing across modular domains: arithmetic, bitwise, compare, convert, crypto, load/store, permute, reduction, reinterpret, and shift.',
      'Tiered execution priority: LLVM builtins → inline assembly → pure Zig @Vector fallback when builtins/assembly are disabled or non-ARM host architectures run.',
      'Validated through automated QEMU cross-architecture testing: native, arm-linux, aarch64-linux, aarch64_be-linux (Big-Endian!), and x86_64-macos.',
      'Includes 7 real-world SIMD simulation showcases: 2D wave equation, SIMD Mandelbrot set rendering, 3D cube, matrix multiplication, fast matrix rotation, vertical flipping, and buffer-to-hex conversion.',
      'Modern Zig 0.16.0 ergonomics: cleaned up legacy usingnamespace patterns, refined std.io interfaces, and enforced strict pointer-alignment casts on vector loads.',
    ],
    snippet: `const std = @import("std");
const builtin = @import("builtin");

// 4 x 32-bit float vector register (128-bit Q register)
pub const float32x4_t = @Vector(4, f32);

pub inline fn vaddq_f32(a: float32x4_t, b: float32x4_t) float32x4_t {
    if (comptime is_arm64 and use_builtins) {
        return @builtin_arm_neon_vaddq_f32(a, b);
    }
    if (comptime is_arm64 and use_asm) {
        return asm ("fadd %0.4s, %1.4s, %2.4s"
            : [ret] "=w" (-> float32x4_t)
            : [a] "w" (a), [b] "w" (b)
        );
    }
    // Pure Zig @Vector fallback - compiles to hardware SIMD on LLVM
    return a + b;
}`,
  },
  {
    id: 'wallify', name: 'Wallify', category: 'Apps', featured: true,
    description: 'A native macOS desktop music widget with a little more personality.',
    tech: ['Swift', 'AppKit', 'Metal', 'Combine', 'SwiftUI'], status: 'Active (combine)',
    repoUrl: 'https://github.com/n0thhhing/wallify',
    specs: ['Active on branch: combine', 'Swift 6 & AppKit', 'Sub-1% Idle CPU', 'Dynamic Palette Glow', 'Live MediaRemote Sync'],
    architectureFlow: `┌───────────────────────────┐      ┌───────────────────────────┐
│ System MediaRemote Events │      │    Spotify / Music IPC    │
└─────────────┬─────────────┘      └─────────────┬─────────────┘
              │                                  │
              └─────────────────┬────────────────┘
                                ▼
              ┌───────────────────────────────────┐
              │     Combine Playback Pipeline     │
              │  (Debounce · Track ID Dedupe)     │
              └─────────────────┬─────────────────┘
                                ▼
         ┌──────────────────────┴──────────────────────┐
         ▼                                             ▼
┌─────────────────────────────┐               ┌─────────────────────────────┐
│ Artwork Palette Extractor   │               │ NSPanel Desktop Window      │
│ (CoreImage / Metal Shader)  │               │ (.floating / .canJoinAll    │
│ → Dominant · Ambient Tint   │               │  Spaces / .ignoresCycle)    │
└─────────────────────────────┘               └─────────────────────────────┘`,
    subsystems: [
      { name: 'WidgetWindow.swift', description: 'Non-activating NSPanel subclass configured to hover directly above the wallpaper layer (.canJoinAllSpaces, .stationary, .ignoresCycle).' },
      { name: 'MediaController.swift', description: 'Asynchronous Combine pipeline receiving system MediaRemote notifications, deduplicating track change events, and streaming artwork.' },
      { name: 'PaletteExtractor.swift', description: 'CoreImage-accelerated bitmap analyzer extracting dominant tonal clusters and warm/cool contrast pairs for atmospheric glow.' },
      { name: 'PetCompanionView.swift', description: 'Lightweight SpriteKit / Metal rendering loop animating interactive pixel companion pets directly on top of the media card.' },
    ],
    deepDive: `<p>On the <code>combine</code> branch, Wallify transitions to a reactive Swift architecture designed around AppKit desktop integration. Rather than a standard window that steals focus and clutters Mission Control, Wallify implements a borderless, non-activating <code>NSPanel</code> with <code>.canJoinAllSpaces</code> and <code>.stationary</code> behaviors, allowing it to rest naturally between the desktop wallpaper and application windows.</p><p>Album artwork is processed through a hardware-accelerated CoreImage pipeline that samples tonal clusters and computes dominant color temperatures. These colors feed dynamic Metal gradient shaders, casting an ambient glow across the card that seamlessly matches whatever track is currently playing.</p>`,
    details: [
      'Active development on the combine branch: built with Swift, AppKit windowing, and SwiftUI settings.',
      'Captures system media playback, track metadata, and album artwork via MediaRemote and Spotify integrations.',
      'Features native glass aesthetic, artwork palette transitions, aurora ambient backgrounds, and interactive companion pets.',
      'Engineered with non-activating NSPanel window level to ensure zero focus disruption during full-screen coding workflows.',
    ],
    snippet: `import AppKit
import SwiftUI
import Combine

final class DesktopWidgetPanel: NSPanel {
    init(contentRect: NSRect) {
        super.init(
            contentRect: contentRect,
            styleMask: [.nonactivatingPanel, .borderless],
            backing: .buffered,
            defer: false
        )
        self.level = .floating
        self.collectionBehavior = [.canJoinAllSpaces, .stationary, .ignoresCycle]
        self.isOpaque = false
        self.backgroundColor = .clear
        self.hasShadow = false
    }
    override var canBecomeKey: Bool { false }
}`,
  },
  {
    id: 'offset-updater', name: 'Offset-updater', category: 'Reversing', featured: true,
    description: 'High-performance AArch64 IL2CPP offset updater powered by Capstone.',
    tech: ['TypeScript', 'Bun', 'ARM64', 'Capstone 5.0', 'Termux'], status: 'Maintained',
    repoUrl: 'https://github.com/n0thhhing/Offset-updater',
    specs: ['Capstone 5.0 Engine', 'AArch64 Wildcard Masking', 'MethodInfo .rodata Anchoring', 'Dynamic Signature Growth', 'Android Termux Native'],
    architectureFlow: `┌───────────────────────────┐      ┌───────────────────────────┐
│   Updated libil2cpp.so    │      │  global-metadata.dat      │
└─────────────┬─────────────┘      └─────────────┬─────────────┘
              │                                  │
              ▼                                  ▼
┌───────────────────────────┐      ┌───────────────────────────┐
│ ts-capstone Disassembler  │      │ String & Method Definition│
│ (Opcode Stream Decoding)  │      │ Table Parser (.rodata)    │
└─────────────┬─────────────┘      └─────────────┬─────────────┘
              │                                  │
              └─────────────────┬────────────────┘
                                ▼
              ┌───────────────────────────────────┐
              │ Disassembler Wildcard Masker      │
              │ Neutralize ADRP/ADD Imm & B Offsets│
              └─────────────────┬─────────────────┘
                                ▼
              ┌───────────────────────────────────┐
              │ Dynamic Pattern Growth & Scan     │
              │ (48B Base → Disambiguate Anchor)  │
              └───────────────────────────────────┘`,
    subsystems: [
      { name: 'src/disasm.ts', description: 'Wraps ts-capstone to decode raw binary slices into structured ARM64 instruction records with full operand inspection.' },
      { name: 'src/masker.ts', description: 'Neutralizes volatile fields—such as PC-relative address loads (ADRP/ADD) and relative branch jumps (B, BL)—replacing dynamic bits with wildcards (??).' },
      { name: 'src/anchors.ts', description: 'Scans .rodata for Il2CppClass and MethodInfo pointer tables, resolving ambiguous single-line functions through static string and method anchors.' },
      { name: 'src/cli.ts', description: 'Fast command-line runner optimized for Bun and fully operational on ARM64 mobile hardware through Android Termux (proot-distro).' },
    ],
    deepDive: `<p>Traditional binary patchers fail across game patches because routine recompilations shift relative memory offsets and branch targets. <code>Offset-updater</code> solves this by disassembling the machine instructions using Capstone and analyzing instruction semantics. It identifies volatile fields—such as the 21-bit page offsets in <code>ADRP</code> instructions or relative jump targets in <code>BL</code>—and masks only those dynamic bits while preserving the fixed opcode structure.</p><p>For functions that are too short to generate a unique byte signature (such as 1-line getters or event stubs), it scans <code>.rodata</code> for Unity IL2CPP MethodInfo pointer tables, using metadata references to anchor and disambiguate functions with 100% precision.</p>`,
    details: [
      'Disassembles AArch64 instructions using Capstone (ts-capstone) to generate architecture-aware wildcard signatures that survive page offsets and relative branch shifts across game updates.',
      'Dynamic signature growth: begins at 48 bytes and incrementally expands only when necessary to disambiguate candidates.',
      'IL2CPP Auto-Anchoring: scans .rodata for MethodInfo pointer arrays to triangulate and resolve heavily ambiguous 1-liners without manual anchors.',
      'Engineered alongside ts-capstone to run natively in TypeScript/Bun—even on aarch64 mobile devices directly via Android Termux (proot).',
    ],
    snippet: `import Capstone, { ARM64 } from "ts-capstone";

function maskInstruction(insn: Capstone.Instruction): string {
  // Neutralize volatile branch targets and PC-relative address loads
  if (insn.id === ARM64.INS_ADRP || insn.id === ARM64.INS_B || insn.id === ARM64.INS_BL) {
    return "?? ?? ?? ??";
  }
  // Mask register immediates while keeping opcode encoding
  if (insn.id === ARM64.INS_ADD && insn.opStr.includes("pc")) {
    return \`\${insn.bytes[0].toString(16).padStart(2, "0")} ?? ?? ??\`;
  }
  return insn.bytes.map(b => b.toString(16).padStart(2, "0")).join(" ");
}`,
  },
  {
    id: 'ts-capstone', name: 'ts-capstone', category: 'Reversing',
    description: 'Capstone 5.0 multi-architecture disassembly framework for TypeScript and Bun.',
    tech: ['TypeScript', 'Capstone 5.0', 'Emscripten', 'Wasm', 'Bun'], status: 'NPM package',
    repoUrl: 'https://github.com/n0thhhing/ts-capstone',
    specs: ['NPM: ts-capstone (v1.0.8)', 'Capstone 5.0.1 C Core', 'Zero-Copy Deserialization', 'Direct Wasm Heap Views', 'TypeScript & Bun Ready'],
    architectureFlow: `[Capstone 5.0 C Source] ──(Emscripten/Clang)──► [capstone.wasm + capstone.js]
                                                        │
                                                        ▼
[TypeScript Client] ──► [allocateBuffer()] ───► [Wasm Linear Memory HEAPU8]
                                                        │
                                                        ▼
                        [Zero-Copy Struct Reader: cs_insn + cs_detail]
                                                        │
                                                        ▼
                        [Typed JS Objects: { id, mnemonic, op_count, operands }]`,
    subsystems: [
      { name: 'src/bindings.c', description: 'Minimal C export layer bridging Capstone’s native disassembler core (cs_open, cs_disasm_iter, cs_option) to WebAssembly exports.' },
      { name: 'src/deserialize.ts', description: 'Directly navigates WebAssembly linear memory (HEAPU8) using typed DataView offsets to reconstruct cs_insn and detail trees without C++ Node addons.' },
      { name: 'src/arm64.ts', description: 'Comprehensive type definitions and constants covering ARM64 registers, vector arrangement specifiers, condition codes, and system registers.' },
    ],
    deepDive: `<p>Native disassemblers in Node.js historically suffered from fragile native C++ addons (<code>node-gyp</code>) that broke with every Node version bump. <code>ts-capstone</code> compiles the industry-standard Capstone 5.0 engine to WebAssembly, making it completely portable across Node, Bun, Deno, and the browser.</p><p>To achieve high-speed disassembly throughput, it avoids intermediate JSON serialization or buffer copying. Instead, it reads Capstone's native C struct pointers directly from Emscripten linear memory, unpacking operand trees, instruction groups, and registers at exact byte offsets.</p>`,
    details: [
      'Published on NPM (npm i ts-capstone): compiles Capstone 5.0 C into WebAssembly/JS via Emscripten and Bun.build.',
      'High-performance zero-copy struct deserialization: directly reads Emscripten heap memory to reconstruct cs_insn and cs_detail trees at exact byte offsets.',
      'Exposes full ARM64 operand trees, registers, system registers, vector lanes, and formatting helpers.',
      'Built to provide a modern, high-speed disassembler engine for Bun and Node without outdated C++ node-gyp native addon headaches.',
    ],
    snippet: `import Capstone, { ARM64 } from "ts-capstone";

const cs = new Capstone(Capstone.ARCH_ARM64, Capstone.MODE_ARM);
cs.detail = true; // enable detailed operand decoding

const buffer = new Uint8Array([0x00, 0x00, 0x00, 0x91]); // ADD X0, X0, #0
const insns = cs.disasm(buffer, 0x1000);

for (const insn of insns) {
  console.log(\`0x\${insn.address.toString(16)}: \${insn.mnemonic} \${insn.opStr}\`);
  console.log(\`  Operands: \${insn.detail.arm64.operands.length}\`);
}`,
  },
  {
    id: 'lwasm', name: 'lwasm', category: 'Runtimes',
    description: 'A WebAssembly 2.0 runtime, decoder, and WAT decompiler in Lua.',
    tech: ['Lua', 'C Accelerator', 'WebAssembly 2.0', 'Bytecode VM'], status: 'Public project',
    repoUrl: 'https://github.com/n0thhhing/lwasm',
    specs: ['Wasm 2.0 Spec Compliant', '364,625 SQLite3 Instructions', '292 W3C Test Suites Passed', 'LEB128 Binary Decoder', 'Pure Lua VM Stack Machine'],
    architectureFlow: `[.wasm Binary File] ──► [Magic Number & Version Validator (\\0asm 0x01)]
                                     │
                                     ▼
                      [LEB128 Decoder & Section Parser]
                      (Types · Functions · Tables · Memory · Globals · Code)
                                     │
                                     ▼
                      [Structured Bytecode Disassembler]
                      (Decompiles to readable WebAssembly Text .wat)
                                     │
                                     ▼
                      [Stack Machine Execution Engine]
                      (Value Stack · Label Stack · Frame Activation)`,
    subsystems: [
      { name: 'src/decoder.lua', description: 'Reads binary headers, decodes signed/unsigned LEB128 integers, and parses custom, type, import, function, table, memory, global, and code sections.' },
      { name: 'src/wat.lua', description: 'Decompiles raw bytecode into formatted, indented WebAssembly Text format (.wat) with S-expression formatting.' },
      { name: 'src/vm.lua', description: 'Stack-machine interpreter managing operand value stacks, label stacks, function call activations, and structured control flow (block, loop, if, br, br_if, br_table).' },
      { name: 'src/accel.c', description: 'Optional native C shared library speeding up the inner opcode dispatch loop for compute-intensive workloads.' },
    ],
    deepDive: `<p><code>lwasm</code> is a ground-up WebAssembly 2.0 runtime written in pure Lua. It implements both a full binary decoder and a stack-machine interpreter. Structured control flow in Wasm relies on block labels and structured branching rather than arbitrary jumps; <code>lwasm</code> manages a dedicated label stack to calculate break targets and cleanly unwind operands to exact block arities.</p><p>It was validated by executing 364,625 instructions inside a compiled SQLite3 binary and passing 292 official W3C specification test suites, verifying compliance with SIMD, tail calls, atomics, and multi-value returns.</p>`,
    details: [
      'Full WebAssembly 2.0 execution engine, binary decoder, WAT decompiler, and disassembler in pure Lua with optional native C accelerator.',
      'Verified against 364,625 instructions in SQLite3 and 292 W3C specification test suites (SIMD, tail calls, atomics, memory64).',
      'Provides bytecode inspection, call graph generation, execution tracing, and instruction caching.',
      'Built from scratch to understand the mechanics of virtual stack machines, instruction decoding, and memory sandboxing.',
    ],
    snippet: `-- LEB128 unsigned variable-length integer decoder in Lua
local function decode_u32_leb128(stream)
    local result, shift = 0, 0
    while true do
        local byte = stream:read_byte()
        result = result | ((byte & 0x7F) << shift)
        if (byte & 0x80) == 0 then break end
        shift = shift + 7
    end
    return result
end`,
  },
  {
    id: 'z-scanner', name: 'z-scanner', category: 'Systems',
    description: 'Fast Array-of-Bytes (AoB) pattern scanner in Zig.',
    tech: ['Zig', 'Algorithms', 'Memory Scanning', 'KMP'], status: 'Public project',
    repoUrl: 'https://github.com/n0thhhing/z-scanner',
    specs: ['Modified KMP Algorithm', 'Zero Allocations in Scan Loop', 'Single & Multi-Byte Wildcards', 'Cache-Friendly Block Reads', 'Sub-Millisecond Execution'],
    architectureFlow: `[Hex Pattern: "48 89 5C 24 ?? 55"] ──► [Pattern Compiler]
                                              │
                                              ▼
                             [Byte Array + Mask Bitset + KMP Table]
                                              │
                                              ▼
[Target Process Memory Buffer] ──► [Scan Loop: Zero Allocation]
                                              │
                                              ▼
                             [List of Matching Offsets (0x...)]`,
    subsystems: [
      { name: 'src/pattern.zig', description: 'Parses hex string patterns with single (?) and double (??) wildcards into packed byte-and-mask structures (PatternByte).' },
      { name: 'src/kmp.zig', description: 'Computes a modified Knuth-Morris-Pratt failure table adapted to maintain prefix-suffix shift invariants in the presence of wildcard bytes.' },
      { name: 'src/scanner.zig', description: 'High-throughput linear search loop operating across memory buffers with zero heap allocations.' },
    ],
    deepDive: `<p>Memory scanning across gigabyte-scale process dumps is typically bottlenecked by redundant string comparisons or excessive cache misses. <code>z-scanner</code> modifies the Knuth-Morris-Pratt algorithm to support wildcard byte masks (<code>?</code> and <code>??</code>) while preserving the failure table's shift efficiency.</p><p>The search loop is engineered with strict zero-allocation constraints: all pattern tables and state buffers are pre-allocated at initialization, allowing the scanner to stream through memory buffers at near-memory-bandwidth speeds.</p>`,
    details: [
      'Fast memory and binary signature scanner implementing the Knuth-Morris-Pratt (KMP) pattern-matching algorithm in Zig.',
      'Supports single and multi-byte wildcard masks (? and ??) for memory analysis and reverse-engineering workflows.',
      'Engineered with zero dynamic allocations inside the search loop for predictable low-latency scanning across large binary dumps.',
    ],
    snippet: `pub const PatternByte = struct {
    value: u8,
    is_wildcard: bool,
};

pub fn scan(buffer: []const u8, pattern: []const PatternByte, kmp_table: []const usize) ?usize {
    var j: usize = 0;
    for (buffer, 0..) |b, i| {
        while (j > 0 and !pattern[j].is_wildcard and pattern[j].value != b) {
            j = kmp_table[j - 1];
        }
        if (pattern[j].is_wildcard or pattern[j].value == b) {
            j += 1;
        }
        if (j == pattern.len) return i + 1 - pattern.len;
    }
    return null;
}`,
  },
  {
    id: 'rarm64', name: 'rarm64', category: 'Systems',
    description: 'An ARM64 / ARM64e Mach-O disassembler written in Rust.',
    tech: ['Rust', 'Mach-O', 'ARM64e', 'PAC'], status: 'In development', repoUrl: null,
    specs: ['Pure Rust (std only)', 'Mach-O 64-bit & Fat Binaries', 'Apple Silicon ARM64e PAC', 'LC_SEGMENT_64 & LC_SYMTAB', 'Zero External Crates'],
    architectureFlow: `[Mach-O Binary] ──► [Header Parser: Magic 0xFEEDFACF / 0xCAFEBABE]
                                  │
                                  ▼
                  [Load Command Dispatcher]
                  (LC_SEGMENT_64 · LC_SYMTAB · LC_DYSYMTAB · LC_BUILD_VERSION)
                                  │
                                  ▼
                  [Section Extractor: __TEXT, __text]
                                  │
                                  ▼
                  [AArch64 / ARM64e Instruction Decoder]
                  (Decode 32-bit Opcode → PAC Modifiers · Branch Targets)`,
    subsystems: [
      { name: 'src/macho.rs', description: 'Parses Mach-O 64-bit headers (MH_MAGIC_64), detects universal fat binaries (FAT_MAGIC), and dispatches load commands.' },
      { name: 'src/symbols.rs', description: 'Traverses LC_SYMTAB and LC_DYSYMTAB to extract symbol strings and resolve indirect function stubs in __stubs.' },
      { name: 'src/decoder.rs', description: 'Pure Rust 32-bit opcode bitmask decoder handling AArch64 standard instructions and Apple Silicon PAC (Pointer Authentication Code) variants.' },
    ],
    deepDive: `<p><code>rarm64</code> was built to explore Apple Silicon binary formats without relying on heavy external crates like <code>object</code> or <code>goblin</code>. It directly implements the Mach-O file specification, parsing 64-bit segment load commands (<code>LC_SEGMENT_64</code>), symbol tables, and dynamic link stubs from raw bytes.</p><p>It features specialized decoding logic for ARM64e Pointer Authentication Codes (PAC), displaying cryptographic key modifiers (IA, IB, DA, DB) and branch authorization targets directly in disassembly dumps.</p>`,
    details: [
      'Parses thin and universal Mach-O binaries, symbols, function boundaries, and indirect stubs.',
      'Uses the Rust standard library without external crate dependencies for instant compilation and clean portability.',
      'Includes symbol demangling and decoding tables generated directly from Arm architecture specifications.',
      'Built to explore Apple Silicon binary formats and Pointer Authentication Code (PAC) instruction variants.',
    ],
    snippet: `// Decoding Mach-O 64-bit Header & Load Commands
#[repr(C)]
pub struct MachHeader64 {
    pub magic: u32,       // 0xFEEDFACF for MH_MAGIC_64
    pub cputype: i32,     // CPU_TYPE_ARM64
    pub cpusubtype: i32,  // CPU_SUBTYPE_ARM64E
    pub filetype: u32,
    pub ncmds: u32,
    pub sizeofcmds: u32,
    pub flags: u32,
    pub reserved: u32,
}`,
  },
  {
    id: 'il2cpp', name: 'IL2CPP analyzer', category: 'Reversing',
    description: 'Making Unity metadata and ARM64 Android binaries readable.',
    tech: ['Zig', 'ELF', 'SQLite', 'IL2CPP Metadata v29'], status: 'In development', repoUrl: null,
    specs: ['IL2CPP Metadata v29', 'Android ELF64 Parser', 'Vtable & Field Offset Resolution', 'Direct SQLite Export', 'C# Signature Generator'],
    architectureFlow: `[global-metadata.dat] ────────┐      ┌──────── [libil2cpp.so (ELF64)]
              │               │      │                 │
              ▼               └──────┼─────────────────┘
[Metadata Header Parser]             ▼
(String, Type & Method Tables)   [ELF Dynamic Symbol Resolver]
              │                  (Init Array · Function Addresses)
              │                              │
              └──────────────┬───────────────┘
                             ▼
              [Type & Vtable Hierarchy Reconstructor]
                             │
              ┌──────────────┴──────────────┐
              ▼                             ▼
   [C# Header Generator]        [Structured SQLite DB Export]`,
    subsystems: [
      { name: 'src/metadata.zig', description: 'Decodes global-metadata.dat structures, parsing string literals, generic parameters, method signatures, and field offset tables.' },
      { name: 'src/elf.zig', description: 'Parses 64-bit ELF headers, program segments (PT_LOAD), and dynamic symbols in compiled Android libil2cpp.so binaries.' },
      { name: 'src/reconstruct.zig', description: 'Triangulates metadata type definitions against ELF memory offsets to reconstruct class inheritance hierarchies and virtual method tables.' },
      { name: 'src/sqlite.zig', description: 'Exports parsed types, methods, fields, and addresses into an indexed SQLite database for rapid SQL querying.' },
    ],
    deepDive: `<p>When Unity compiles C# via IL2CPP, managed types and method pointers are split: high-level reflection metadata lives in <code>global-metadata.dat</code>, while executable machine code resides in the stripped <code>libil2cpp.so</code> ELF binary. This analyzer reconstructs the full object model in Zig.</p><p>It correlates method pointer indices with ELF virtual memory addresses, calculates field offsets with alignment padding, and generates clean C# header files and an indexed SQLite database for automated security audits.</p>`,
    details: [
      'Parses Unity IL2CPP metadata v29 and matching 64-bit ARM64 Android ELF binaries.',
      'Resolves managed types and native method addresses, including stripped registration structures.',
      'Exports C#-style declarations, structured analysis, call graphs, and a SQLite database for querying.',
      'Written in Zig to handle stripped mobile binaries and reconstruct type hierarchies without bloated external dependencies.',
    ],
    snippet: `pub const Il2CppGlobalMetadataHeader = extern struct {
    sanity: u32,
    version: i32,
    string_literal_offset: u32,
    string_literal_size: u32,
    string_literal_data_offset: u32,
    string_literal_data_size: u32,
    string_offset: u32,
    string_size: u32,
    events_offset: u32,
    events_size: u32,
    properties_offset: u32,
    properties_size: u32,
    methods_offset: u32,
    methods_size: u32,
};`,
  },
  {
    id: 'hexer', name: 'hexer', category: 'Systems',
    description: 'A read-only terminal hex viewer. Bytes, without the baggage.',
    tech: ['Rust', 'Terminal UI', 'ANSI', 'POSIX stty'], status: 'In development', repoUrl: null,
    specs: ['Pure Rust (std only)', 'Zero TUI Dependencies', 'POSIX stty Raw Terminal', 'Synchronized Hex & ASCII', 'Memory-Mapped O(1) Views'],
    architectureFlow: `[File Path / Stdin] ──► [Memory Mapped File (mmap / Chunked Reader)]
                                      │
                                      ▼
                      [Terminal Raw Mode Engine (POSIX stty)]
                                      │
                                      ▼
                      [Dual-Column Screen Formatter]
                      (Offset | Hex Bytes 00-0F | ASCII Printable)
                                      │
                                      ▼
                      [Key Event Loop (ANSI Escape Parser)]
                      (Vim keys · Page Up/Down · Jump to Offset)`,
    subsystems: [
      { name: 'src/terminal.rs', description: 'Configures the terminal into raw non-blocking mode using POSIX stty syscalls, capturing keypresses without echoing characters.' },
      { name: 'src/view.rs', description: 'Renders synchronized 16-byte hex and ASCII columns with ANSI color highlighting for null bytes, printables, and high ASCII values.' },
      { name: 'src/search.rs', description: 'Implements byte-pattern and text searching with offset jumping.' },
    ],
    deepDive: `<p>Most terminal hex viewers pull in heavy terminal UI dependencies (like <code>ratatui</code> or <code>ncurses</code>). <code>hexer</code> was engineered with pure Rust standard library constructs and POSIX <code>stty</code> syscalls, delivering an instant-launch tool with zero crate bloat.</p><p>It formats memory-mapped files into paired 16-byte hex and ASCII representations, supporting smooth keyboard navigation, offset jumps, and wildcard byte searching directly from the command line.</p>`,
    details: [
      'Shows paired hex and ASCII columns with terminal-sized rows and smooth keyboard/mouse navigation.',
      'Supports mouse interaction, offset jumps, and wildcard byte or exact text searches.',
      'Uses the Rust standard library, stty, and ANSI terminal reporting without heavy TUI dependencies.',
      'Crafted to inspect binary structures quickly in the terminal without waiting on heavy GUI disassemblers.',
    ],
    snippet: `// Formats 16-byte chunk into paired Hex and ASCII columns
fn render_row(offset: usize, chunk: &[u8]) -> String {
    let mut hex = String::with_capacity(48);
    let mut ascii = String::with_capacity(16);
    for &b in chunk {
        hex.push_str(&format!("{:02x} ", b));
        ascii.push(if b.is_ascii_graphic() || b == b' ' { b as char } else { '.' });
    }
    format!("{:08x}  {:48} |{:16}|", offset, hex, ascii)
}`,
  },
  {
    id: 'sse4-strstr-zig', name: 'sse4-strstr-zig', category: 'Systems',
    description: 'Exploring substring search through x86 SSE4.2 instructions.',
    tech: ['Zig', 'x86_64', 'SSE4.2', 'SIMD Intrinsics'], status: 'Public project',
    repoUrl: 'https://github.com/n0thhhing/sse4-strstr-zig',
    specs: ['x86_64 SSE4.2 Intrinsics', 'PCMPESTRI / PCMPISTRI', '16-Byte Parallel Comparisons', 'Zero Branch Penalty', 'Hardware strstr'],
    architectureFlow: `[Haystack String Buffer] ──────┐      ┌────── [Needle String Buffer]
             │                 │      │                │
             ▼                 └──────┼────────────────┘
[Align Haystack to 16B]               ▼
                               [16-Byte Vector Load: _mm_loadu_si128]
                                      │
                                      ▼
                               [PCMPESTRI Hardware Instruction]
                               (Control Mask: Equal Each · Positive Polarity)
                                      │
                                      ▼
                               [Hardware Output: ECX Register Index]
                               (Index of First Match or Carry Flag Shift)`,
    subsystems: [
      { name: 'src/sse42.zig', description: 'Binds direct LLVM vector intrinsics for _mm_cmpestri and _mm_cmpistri with explicit control immode masks.' },
      { name: 'src/strstr.zig', description: 'Chunking loop streaming 16 bytes of haystack per cycle, evaluating hardware flag outputs to locate matches in single clock cycles.' },
    ],
    deepDive: `<p>Standard <code>strstr</code> implementations rely on character-by-character loops or Boyer-Moore shift tables. This project explores dedicated silicon instructions introduced in x86 SSE4.2 (<code>PCMPESTRI</code>), which compare two 16-byte blocks in parallel within a single CPU cycle.</p><p>By configuring the hardware control mode (Equal Each, Positive Polarity), the instruction returns the matched index directly in the <code>ECX</code> register, bypassing CPU branch predictors entirely.</p>`,
    details: [
      'A hardware-focused string-search experiment using x86 SSE4.2 instructions (PCMPESTRI/PCMPISTRI).',
      'Explores how dedicated silicon compares 16-byte blocks in a single operation to optimize string matching.',
      'Measures cycle count differences against standard libc strstr across varying needle lengths and haystack alignments.',
    ],
    snippet: `const std = @import("std");

// x86_64 SSE4.2 hardware string search
pub fn sse42_strstr(haystack: []const u8, needle: []const u8) ?usize {
    const mode = 0x0C; // Equal Each, Positive Polarity, Least Significant Index
    var offset: usize = 0;
    while (offset + 16 <= haystack.len) : (offset += 16) {
        const idx = asm (
            "pcmpestri $0x0C, %xmm1, %xmm0"
            : [ret] "={ecx}" (-> usize)
            : [h] "{xmm0}" (haystack[offset..][0..16].*),
              [n] "{xmm1}" (needle[0..@min(16, needle.len)].*)
        );
        if (idx < 16) return offset + idx;
    }
    return null;
}`,
  },
  {
    id: 'discord-rich-presence', name: 'Discord-rich-presence', category: 'Apps',
    description: 'A custom Discord Rich Presence client.',
    tech: ['JavaScript', 'Node.js', 'Unix Sockets', 'IPC'], status: 'Public project',
    repoUrl: 'https://github.com/n0thhhing/Discord-rich-presence',
    specs: ['Unix Domain Sockets (/tmp/discord-ipc-0)', 'Direct IPC Framing', 'Zero Electron Overhead', 'Sub-5MB Memory Footprint', 'Dynamic Status Updates'],
    architectureFlow: `[Node.js Daemon Process] ──► [Connect to /tmp/discord-ipc-0 Unix Socket]
                                           │
                                           ▼
                           [Opcode 0: Handshake Packet (Client ID)]
                                           │
                                           ▼
                           [Receive Opcode 1: FRAME Handshake OK]
                                           │
                                           ▼
                           [Opcode 1: SET_ACTIVITY Packet Loop]
                           (State · Details · Timestamps · Assets)`,
    subsystems: [
      { name: 'src/ipc.js', description: 'Manages the low-level Unix domain socket connection, framing packets with 32-bit opcode and length headers.' },
      { name: 'src/activity.js', description: 'Encodes presence activity JSON payloads with current project status, elapsed timers, and asset keys.' },
    ],
    deepDive: `<p>Rather than using heavy SDKs or Electron-based companion tools, this client speaks directly to Discord's local IPC daemon over Unix domain sockets (<code>/tmp/discord-ipc-0</code> on macOS/Linux) or named pipes on Windows.</p><p>Packets are manually framed using 8-byte headers (4-byte LE opcode, 4-byte LE payload length), establishing a zero-overhead connection that runs as a lightweight background daemon consuming under 5MB of memory.</p>`,
    details: [
      'Communicates directly with Discord local IPC socket via Unix domain sockets / named pipes.',
      'Customizes profile activity with dynamic elapsed timestamps, customizable assets, and project status.',
      'Eliminates heavy runtime wrappers in favor of lightweight native Node.js net.Socket streams.',
    ],
    snippet: `import net from 'node:net';

// Encode Discord IPC packet: [Opcode (4B LE)] [Length (4B LE)] [JSON Payload]
function encodePacket(opcode, payload) {
  const json = JSON.stringify(payload);
  const buffer = Buffer.alloc(8 + Buffer.byteLength(json));
  buffer.writeInt32LE(opcode, 0);
  buffer.writeInt32LE(Buffer.byteLength(json), 4);
  buffer.write(json, 8);
  return buffer;
}`,
  },
  {
    id: 'shizukuboothelper', name: 'ShizukuBootHelper', category: 'Apps',
    description: 'An experimental Android helper for Shizuku startup.',
    tech: ['Java', 'Android 17', 'Termux', 'Wireless ADB'], status: 'Experimental', repoUrl: null,
    specs: ['Android 17 (Pixel 11 Pro)', 'Wireless ADB Loopback (127.0.0.1)', 'Termux Automation Scripting', 'SELinux Boundary Analysis', 'Rootless Privileged Execution'],
    architectureFlow: `[Device Boot / Network Event] ──► [Termux Automation Trigger]
                                             │
                                             ▼
                              [Verify Active Wi-Fi Connection]
                              (Wireless ADB disabled on Hotspot/Cellular)
                                             │
                                             ▼
                              [Query ADB Daemon Port via adb mdns]
                                             │
                                             ▼
                              [Execute sh /sdcard/Android/data/.../start.sh]
                                             │
                                             ▼
                              [Shizuku Daemon Spawned with UID 2000]`,
    subsystems: [
      { name: 'scripts/helper.sh', description: 'Shell script testing wireless ADB daemon availability on localhost, resolving dynamic mDNS pairing ports.' },
      { name: 'docs/limits.md', description: 'Technical investigation documenting Android 17 SELinux restrictions, ADB wireless loopback constraints, and background service execution limits.' },
    ],
    deepDive: `<p>On modern Android (Android 17), Shizuku provides rootless access to system APIs via the <code>shell</code> UID (2000). However, starting the service requires wireless ADB debugging, which resets its port upon reboot and requires an active Wi-Fi connection.</p><p>This project investigated native helper routines and Termux automation scripts to detect local network states, discover ADB ports via mDNS services, and automate daemon startup without manual developer settings intervention.</p>`,
    details: [
      'Explores a native helper and Termux script for starting Shizuku on Android 17 without root.',
      'Investigates platform limits: wireless ADB loopback requires an active Wi-Fi connection and cannot pair over mobile hotspot.',
      'An experiment documenting real-world Android SELinux permissions, ADB daemon pairing, and process boundaries.',
    ],
    snippet: `#!/data/data/com.termux/files/usr/bin/bash
# Query mDNS for wireless ADB pairing port on Android 17
PORT=$(adb mdns services | grep _adb-tls-connect | awk -F':' '{print $2}')
if [ -n "$PORT" ]; then
    adb connect 127.0.0.1:$PORT
    sh /sdcard/Android/data/moe.shizuku.privileged.api/start.sh
fi`,
  },
];

export function repositoryLink(project) {
  return /^https:\/\/github\.com\/n0thhhing\/[\w-]+$/.test(project.repoUrl ?? '') ? project.repoUrl : null;
}

export function projectStatus(project) {
  const status = repositoryLink(project) ? project.status : 'Local / in development';
  return project.status === 'Experimental' && status !== 'Experimental' ? `${status} · Experimental` : status;
}
