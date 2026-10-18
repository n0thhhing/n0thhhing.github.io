export const projectDeepDives = {
  "zeon": {
    "summary": "A portability-first NEON library: express vector operations in Zig, then make the implementation path and cross-target behavior testable.",
    "problem": "NEON intrinsics expose architecture-specific operations, but a usable library still needs clear lane types, alignment assumptions, fallback behavior, and expected semantics.",
    "workflow": [
      {
        "title": "Represent operations",
        "detail": "Keep vector shapes and element types explicit with Zig vectors so lane layout is visible in the API."
      },
      {
        "title": "Choose an implementation",
        "detail": "The README describes compiler builtins, hand-written assembly, and Zig vector expressions. The selected path depends on target/build options; portable source is not a guarantee of identical machine code."
      },
      {
        "title": "Group by semantics",
        "detail": "Arithmetic, conversion, crypto, memory, permutation, reduction, reinterpretation, comparison, bitwise, and shift operations live in distinct modules."
      }
    ],
    "validation": [
      {
        "label": "Repository snapshot",
        "detail": "README reports 2,806 implemented intrinsics and 2,815+ passing tests while also tracking remaining work. These are source-documented counts, not a claim that every upstream intrinsic is complete."
      },
      {
        "label": "Target coverage",
        "detail": "README lists native, ARM Linux, AArch64 Linux, Big-Endian AArch64 Linux, and x86_64 macOS test targets."
      },
      {
        "label": "Repeatable tests",
        "detail": "Documented entry point: `zig build test --summary all`, plus target-specific test commands."
      }
    ],
    "limits": [
      "The project roadmap still lists implementation and coverage gaps; builtin, assembly, and fallback variants need parity tests.",
      "QEMU and cross-compilation add coverage but do not replace physical hardware tests for microarchitecture-specific performance.",
      "A vector expression describes semantics, not guaranteed instruction selection."
    ],
    "next": "Keep closing the generated missing-intrinsics list, expand comparisons against C compiler intrinsics, and inspect emitted assembly where redundant instructions may remain.",
    "refs": [
      {
        "label": "zeon repository",
        "url": "https://github.com/n0thhhing/zeon"
      },
      {
        "label": "Arm intrinsics reference",
        "url": "https://developer.arm.com/architectures/instruction-sets/intrinsics/"
      }
    ]
  },
  "wallify": {
    "summary": "A native macOS music widget: track context, controls, artwork, glass, animation, and pixel companions without becoming another full-sized app window.",
    "problem": "A conventional player asks for a context switch; a decorative widget can be disconnected from playback. Wallify keeps the current track present while trying not to steal focus.",
    "workflow": [
      {
        "title": "Select a provider",
        "detail": "The `combine` branch documents System Now Playing, Spotify through AppleScript, Spotifast IPC, and an automatic mode with fallback."
      },
      {
        "title": "Normalize playback",
        "detail": "Providers feed shared state for title, artist, artwork, progress, and controls instead of duplicating player-specific behavior in every view."
      },
      {
        "title": "Render the scene",
        "detail": "The native branch uses Swift, AppKit, SwiftUI, and Metal for the panel, settings, artwork effects, waveform, and companion sprites."
      },
      {
        "title": "Budget background work",
        "detail": "Static artwork can be cached and animation work scaled to activity/visibility rather than rendering at full rate continuously."
      }
    ],
    "validation": [
      {
        "label": "Test areas",
        "detail": "The `combine` branch includes tests for media coordination, display placement, pointer actions, scene assets, animation, settings, waveform, and performance sampling."
      },
      {
        "label": "Feature surface",
        "detail": "Features span multiple providers/displays, five widget aspect ratios, glass settings, animation styles, and idle companions."
      }
    ],
    "limits": [
      "macOS-specific; Apple graphics/windowing toolchains are required. Media-key redirection requires Accessibility permission.",
      "Metadata availability varies by player and process state, so fallback behavior matters.",
      "Performance depends on hardware, visibility, animation, and playback state; one profile is not a universal CPU guarantee."
    ],
    "next": "Continue refining snapping/resizing, Now Playing layout, native glass, animation coordination, and the ability to go quiet when no visual state needs updating.",
    "refs": [
      {
        "label": "wallify repository",
        "url": "https://github.com/n0thhhing/wallify"
      },
      {
        "label": "Swift/AppKit/Metal branch",
        "url": "https://github.com/n0thhhing/wallify/tree/combine"
      }
    ]
  },
  "offset-updater": {
    "summary": "A patch-resilient IL2CPP offset updater that uses decoded instruction structure instead of hoping fixed byte sequences survive recompilation.",
    "problem": "After a Unity IL2CPP rebuild, function addresses and relative operands can move while a method's role remains similar. Static offsets go stale; short byte signatures can match multiple functions.",
    "workflow": [
      {
        "title": "Load two snapshots",
        "detail": "Consumes source and target libraries plus known offsets, then maps virtual addresses to ELF file data."
      },
      {
        "title": "Disassemble before masking",
        "detail": "Capstone identifies instruction boundaries so PC-relative page addresses and branch targets can be wildcarded while preserving stable opcode structure."
      },
      {
        "title": "Grow signatures",
        "detail": "The documented process starts at 48 bytes and expands when a shorter candidate does not uniquely identify a match."
      },
      {
        "title": "Anchor ambiguous methods",
        "detail": "For very short functions, IL2CPP `MethodInfo` pointer arrays in `.rodata` can triangulate candidates through neighboring references."
      },
      {
        "title": "Verify candidates",
        "detail": "Trampoline/detour checks and fixture-backed tests help distinguish a valid match from a plausible false positive."
      }
    ],
    "validation": [
      {
        "label": "Regression layers",
        "detail": "README describes synthetic libraries, compiled C fixtures imitating IL2CPP structures, and real-game builds with thousands of regression assertions."
      },
      {
        "label": "Available tests",
        "detail": "Unit, integration, real-game, stress, typecheck, and aggregate test commands are documented alongside fixture and manifest tools."
      }
    ],
    "limits": [
      "A signature is evidence, not magic. Inlining, substantial behavior changes, stripped metadata, or identical code may need another anchor or human review.",
      "Real-game fixtures are separate from the source tree and may need to be installed.",
      "Targets AArch64 Unity IL2CPP layouts, not arbitrary executable formats."
    ],
    "next": "Keep candidate resolution conservative and explainable, add regression fixtures for new compiler/linker changes, and keep the real-game manifest current.",
    "refs": [
      {
        "label": "Offset-updater repository",
        "url": "https://github.com/n0thhhing/Offset-updater"
      }
    ]
  },
  "ts-capstone": {
    "summary": "TypeScript-facing Capstone 5 bindings for detailed instruction decoding without a platform-specific native Node addon build.",
    "problem": "Capstone is a mature C disassembler, but native Node bindings bring a platform build matrix. WebAssembly improves portability while still requiring correct decoding of its memory structures.",
    "workflow": [
      {
        "title": "Compile the C core",
        "detail": "Emscripten packages Capstone into a WebAssembly module and JavaScript glue."
      },
      {
        "title": "Decode instructions",
        "detail": "The TypeScript API selects architecture/mode, then disassembles bytes at a caller-supplied virtual address."
      },
      {
        "title": "Expose structured details",
        "detail": "Detail mode reconstructs architecture-specific instruction and operand records from the Emscripten heap."
      },
      {
        "title": "Support iteration",
        "detail": "An iterator API processes one instruction at a time and can reduce allocation churn for large streams."
      }
    ],
    "validation": [
      {
        "label": "Published usage",
        "detail": "README documents npm/Bun installation and concrete AArch64 examples."
      },
      {
        "label": "Runtime debugging",
        "detail": "Bun issue #15527 records an Emscripten import crash and the fix documented for Bun v1.1.42-canary."
      }
    ],
    "limits": [
      "Operand detail differs by architecture/instruction; consumers should not assume every detail object has the same shape.",
      "Wasm removes native-addon build friction but not JavaScript runtime compatibility concerns.",
      "Zero-copy reads reduce one layer of copying, not the cost of disassembly itself."
    ],
    "next": "Keep compatibility notes current, expand coverage for uncommon architecture detail records, and retain minimal reproducers for Wasm-boundary regressions.",
    "refs": [
      {
        "label": "ts-capstone repository",
        "url": "https://github.com/n0thhhing/ts-capstone"
      },
      {
        "label": "Bun issue #15527",
        "url": "https://github.com/oven-sh/bun/issues/15527"
      }
    ]
  },
  "lwasm": {
    "summary": "A WebAssembly inspection toolkit in Lua combining decoding, disassembly, WAT generation, section inspection, and bytecode execution.",
    "problem": "A Wasm module is structured binary data: section bounds, types, variable-length integers, control flow, references, memory rules, and runtime semantics must agree.",
    "workflow": [
      {
        "title": "Read bounded fields",
        "detail": "The binary reader handles LEB128 integers and floating-point data before higher layers interpret payloads."
      },
      {
        "title": "Build a module model",
        "detail": "The decoder exposes type, import, function, table, memory, global, export, element, code, data, and custom sections."
      },
      {
        "title": "Inspect and decompile",
        "detail": "The dumper summarizes sections, the disassembler shows offsets/instruction bytes, and WAT generation converts modules to S-expressions."
      },
      {
        "title": "Execute code",
        "detail": "The runtime implements structured control flow, calls, tables, memories, references, and traps."
      },
      {
        "title": "Keep acceleration optional",
        "detail": "A C backend can accelerate selected paths while pure Lua remains the fallback."
      }
    ],
    "validation": [
      {
        "label": "Specification suites",
        "detail": "README documents 292 W3C specification suites, including SIMD, tail calls, atomics, and Memory64."
      },
      {
        "label": "Opcode inventory",
        "detail": "Project reports support for its tracked 561-opcode WebAssembly 2.0 inventory; this is project-reported coverage, not external certification."
      },
      {
        "label": "Profiling example",
        "detail": "README reports parsing an 869 KiB sqlite3.wasm module with 2,668 functions in roughly 14 ms on its measured environment; timings vary."
      }
    ],
    "limits": [
      "A tooling/runtime implementation, not a production optimizing JIT or hardened multi-tenant sandbox.",
      "Specification tests evolve; the checked-in corpus version matters.",
      "The optional native path adds toolchain requirements, so pure Lua remains the portable route."
    ],
    "next": "Keep the spec corpus current, expand differential tests against WABT, and ensure native acceleration follows the pure-Lua semantics.",
    "refs": [
      {
        "label": "lwasm repository",
        "url": "https://github.com/n0thhhing/lwasm"
      },
      {
        "label": "WebAssembly Core 2 specification",
        "url": "https://www.w3.org/TR/wasm-core-2/"
      }
    ]
  },
  "z-scanner": {
    "summary": "A focused Zig byte-pattern scanner for binary analysis, including signatures with positions that are allowed to vary.",
    "problem": "Searching dumps gets harder when some bytes change between builds or candidates overlap. Wildcard support must coexist with predictable matching and bounded allocation.",
    "workflow": [
      {
        "title": "Represent patterns",
        "detail": "A signature combines exact byte values and wildcard positions using familiar reverse-engineering notation."
      },
      {
        "title": "Preprocess matching",
        "detail": "The project describes a KMP-based search path that uses earlier comparisons instead of restarting naive matching at each byte."
      },
      {
        "title": "Avoid hot-loop allocation",
        "detail": "The inner search loop is designed to avoid dynamic allocations while matching large buffers."
      }
    ],
    "validation": [
      {
        "label": "Source status",
        "detail": "The public README is minimal, so the portfolio does not invent benchmark numbers or an automated test count."
      },
      {
        "label": "Useful test cases",
        "detail": "Wildcard edges, repeated prefixes, overlaps, empty patterns, and matches at the input boundary are important."
      }
    ],
    "limits": [
      "A byte match finds a candidate, not proof that it is the intended function.",
      "Wildcard semantics can affect algorithm guarantees; correctness depends on how wildcards are handled during preprocessing.",
      "Measure performance on representative patterns instead of inferring it from an algorithm name."
    ],
    "next": "Document pattern syntax/failure behavior and add repeatable correctness tests plus fixtures for exact and wildcard-heavy signatures.",
    "refs": [
      {
        "label": "z-scanner repository",
        "url": "https://github.com/n0thhhing/z-scanner"
      }
    ]
  },
  "rarm64": {
    "summary": "An in-development Rust tool for inspecting Apple Silicon Mach-O containers and instructions.",
    "problem": "Mach-O combines file metadata and machine code. Thin/universal containers, symbols, boundaries, stubs, and ARM64e pointer-authentication forms add separate layers of complexity.",
    "workflow": [
      {
        "title": "Select the slice",
        "detail": "Distinguish thin Mach-O files from universal containers before analysis."
      },
      {
        "title": "Find boundaries",
        "detail": "Symbols, function-start metadata, and indirect stubs can help split a byte stream into inspectable regions."
      },
      {
        "title": "Focus on ARM64e",
        "detail": "Instruction decoding includes pointer-authentication-related forms relevant to Apple Silicon."
      }
    ],
    "validation": [
      {
        "label": "Maturity",
        "detail": "The portfolio marks this project in development and does not claim a release or link a public repository."
      },
      {
        "label": "Suggested fixtures",
        "detail": "Thin ARM64, universal binaries with multiple slices, stripped files, symbol/stub cases, and ARM64e samples make a useful starter corpus."
      }
    ],
    "limits": [
      "Not presented as a replacement for LLVM tools, Hopper, or Ghidra.",
      "Function boundary recovery is heuristic if symbols and metadata are absent.",
      "Decoding a pointer-authentication instruction is not the same as emulating its runtime behavior."
    ],
    "next": "Build a known-good fixture corpus and compare parsing/disassembly against Apple tooling or LLVM before broadening format support.",
    "refs": []
  },
  "il2cpp": {
    "summary": "An exploratory analyzer for reconstructing searchable structure from Unity IL2CPP metadata and its matching native ARM64 ELF.",
    "problem": "IL2CPP maps managed declarations to native structures/code, often with stripped names and build-specific layouts. A joined model is easier to query than a flat dump.",
    "workflow": [
      {
        "title": "Parse metadata",
        "detail": "The current scope targets IL2CPP metadata v29 and extracts tables used to resolve managed types and methods."
      },
      {
        "title": "Parse the ELF image",
        "detail": "Read a 64-bit ARM Android ELF so addresses can be interpreted against segments and registration structures."
      },
      {
        "title": "Join native and managed data",
        "detail": "Relate declarations to native addresses even where friendly symbols are absent."
      },
      {
        "title": "Export analysis records",
        "detail": "Intended outputs include C#-style declarations, call graphs, structured records, and a SQLite database."
      }
    ],
    "validation": [
      {
        "label": "Maturity",
        "detail": "Marked local/in-development, not a public release with a completeness guarantee."
      },
      {
        "label": "Correctness checks",
        "detail": "Compare counts with known dumps, ensure addresses fall inside expected ELF segments, and cross-check declarations against existing IL2CPP tools."
      }
    ],
    "limits": [
      "Metadata versions differ; v29 scope does not imply compatibility with every Unity build.",
      "Generic sharing, stripping, and registration changes can make mappings ambiguous.",
      "This is exploratory analysis tooling, not a complete decompiler."
    ],
    "next": "Expose format assumptions in diagnostics and build known-good fixtures for metadata and registration paths before adding output formats.",
    "refs": []
  },
  "hexer": {
    "summary": "A small read-only terminal hex viewer for raw byte inspection without the overhead of a large GUI.",
    "problem": "Sometimes the question is simply which bytes exist at an offset. A good terminal view keeps offsets, raw bytes, and printable text aligned.",
    "workflow": [
      {
        "title": "Show bytes and text",
        "detail": "Paired hexadecimal and ASCII columns reveal strings, headers, padding, and recognizable patterns."
      },
      {
        "title": "Navigate quickly",
        "detail": "Keyboard/mouse navigation and direct offset jumps keep inspection fast in a terminal workflow."
      },
      {
        "title": "Search in place",
        "detail": "Exact text and wildcard byte searches locate markers before examining surrounding data."
      }
    ],
    "validation": [
      {
        "label": "Maturity",
        "detail": "Marked local/in-development; no stable release, package, benchmark, or test count is claimed."
      },
      {
        "label": "Edge cases",
        "detail": "Terminal resize, huge files, non-UTF-8 bytes, jumps near EOF, search wraparound, and terminal restoration matter."
      }
    ],
    "limits": [
      "Mouse/raw-mode support varies by terminal and OS.",
      "A hex view exposes bytes but does not interpret or validate the file format.",
      "The terminal must be restored safely after errors and interrupts."
    ],
    "next": "Prioritize file-boundary tests and terminal cleanup, then document keyboard controls and search syntax.",
    "refs": []
  },
  "sse4-strstr-zig": {
    "summary": "A substring-search experiment exploring Zig vector operations, short-input fallbacks, and compiler-generated code.",
    "problem": "SIMD search can compare several bytes per operation, but boundary correctness and workload-specific measurements decide whether it helps.",
    "workflow": [
      {
        "title": "Compare a vector block",
        "detail": "The public example uses Zig vector expressions inspired by SIMD substring-search implementations."
      },
      {
        "title": "Fallback for short inputs",
        "detail": "README documents `std.mem.indexOfAny` when the input is shorter than 16 bytes."
      },
      {
        "title": "Inspect emitted code",
        "detail": "Compare instruction output/timings across lengths and alignments instead of assuming a specific opcode is always emitted."
      }
    ],
    "validation": [
      {
        "label": "Public source",
        "detail": "README contains a usage example and short-input fallback but no comprehensive benchmark matrix."
      },
      {
        "label": "Correctness corpus",
        "detail": "Empty inputs, overlapping matches, unaligned pointers, vector-width boundaries, and no-match cases should match a trusted baseline."
      }
    ],
    "limits": [
      "Although the repo name references SSE4.2, README describes Zig vector operations; selection depends on target flags/compiler output.",
      "Vector setup may outweigh benefits for small strings; a timing on one CPU is not general."
    ],
    "next": "Add repeatable benchmarks against `std.mem.indexOf` and libc `strstr`, then save disassembly for target configurations.",
    "refs": [
      {
        "label": "sse4-strstr-zig",
        "url": "https://github.com/n0thhhing/sse4-strstr-zig"
      },
      {
        "label": "upstream reference",
        "url": "https://github.com/WojciechMula/sse4-strstr"
      }
    ]
  },
  "discord-rich-presence": {
    "summary": "A custom Node.js Rich Presence library publishing activity details, images, timestamps, and buttons through Discord's Gateway.",
    "problem": "Rich Presence is a structured activity, not a plain status string. The client has to handle connection lifecycle, activity metadata, and several image formats consistently.",
    "workflow": [
      {
        "title": "Connect to the Gateway",
        "detail": "README documents a WebSocket connection to Discord's Gateway API; this is not a local IPC-only client."
      },
      {
        "title": "Build the payload",
        "detail": "Callers provide activity name, details, state, timestamps, party metadata, images, and optional buttons."
      },
      {
        "title": "Normalize image references",
        "detail": "Handles Discord attachment URLs, media-proxy URLs, external images, and Developer Portal asset keys."
      },
      {
        "title": "Manage the session",
        "detail": "The API exposes `connect`, `setPresence`/`updatePresence`, and `disconnect`, including queuing updates during connection setup."
      }
    ],
    "validation": [
      {
        "label": "Documented usage",
        "detail": "README contains an end-to-end example and notes activity types, assets, buttons, and logging."
      },
      {
        "label": "Integration caveat",
        "detail": "README notes a second Discord account may be needed to verify activity buttons because they may not appear on your own profile."
      }
    ],
    "limits": [
      "Tokens and client credentials must stay out of public source; use private configuration or environment variables.",
      "Gateway behavior depends on Discord's protocol and application configuration.",
      "Presence buttons have client-side quirks and are limited to two."
    ],
    "next": "Add environment-based configuration examples, document reconnect/error behavior, and add a small payload validator.",
    "refs": [
      {
        "label": "Discord Rich Presence repository",
        "url": "https://github.com/n0thhhing/Discord-rich-presence"
      }
    ]
  },
  "shizukuboothelper": {
    "summary": "An Android experiment exploring automated Shizuku startup on a non-root device under wireless-debugging and background-execution constraints.",
    "problem": "Starting Shizuku depends on ADB authorization, changing wireless-debugging ports, network state, and Android's background-service rules.",
    "workflow": [
      {
        "title": "Detect debugging state",
        "detail": "The prototype looks for a discoverable ADB endpoint instead of assuming the port persists after reboot."
      },
      {
        "title": "Try a local connection",
        "detail": "A shell helper explores mDNS-discovered ADB services and loopback before invoking the Shizuku startup script."
      },
      {
        "title": "Record the failures",
        "detail": "The investigation documents Wi-Fi state, wireless-debugging availability, pairing, and privilege boundaries."
      }
    ],
    "validation": [
      {
        "label": "Maturity",
        "detail": "Local/unpublished work, not a released APK or guaranteed unattended-start solution."
      },
      {
        "label": "Test matrix",
        "detail": "Reboot, Wi-Fi toggles, wireless-debugging changes, changed ports, battery restrictions, and revoked authorization are relevant tests."
      }
    ],
    "limits": [
      "Does not bypass Android's authorization model or promise startup in every network state.",
      "Wireless debugging has been unavailable in some tested states without active Wi-Fi.",
      "Android version and OEM background restrictions can change behavior."
    ],
    "next": "Keep limitations with the prototype, make failure states visible, and avoid promising unattended startup until reboot/network tests are repeatable.",
    "refs": []
  },
  "proplam-menu": {
    "summary": "The GameGuardian Lua menu I built during the Herx/JUDSN era, later published openly as Proplam-menu.",
    "problem": "This work started in the Pixel Gun 3D modding community, where menu scripts could become tightly coupled. I wanted UI, memory helpers, pointer work, and feature logic to be easier to maintain independently.",
    "workflow": [
      {
        "title": "Build for the real device workflow",
        "detail": "The README documents a GameGuardian Lua menu for Pixel Gun 3D with `proplam.lua` as its entry point."
      },
      {
        "title": "Separate repeated responsibilities",
        "detail": "The approach groups menu rendering, memory search, pointer helpers, and feature-specific code instead of repeating each routine."
      },
      {
        "title": "Learn from a live IL2CPP target",
        "detail": "The feedback loop involved inspecting memory and testing on Android rather than relying on a managed debugger."
      },
      {
        "title": "Publish it openly",
        "detail": "After someone scraped the menu, I stopped caring about keeping it behind a sale and published my own version openly. The repo records that history, not a claim the work happened in isolation."
      }
    ],
    "validation": [
      {
        "label": "Public source",
        "detail": "README documents the GameGuardian/Pixel Gun 3D context and running `proplam.lua` with the project files present."
      },
      {
        "label": "Historical scope",
        "detail": "The repo preserves the public version but does not advertise automated tests or modern release metrics."
      }
    ],
    "limits": [
      "Game-specific historical work depending on GameGuardian and the target game's memory layout.",
      "Older build-specific details may not work with current versions.",
      "Read the repository's reuse terms before redistributing or adapting it."
    ],
    "next": "Its main portfolio value is showing where later interest in IL2CPP metadata, AArch64 instruction analysis, and reusable tooling came from.",
    "refs": [
      {
        "label": "Proplam-menu repository/terms",
        "url": "https://github.com/n0thhhing/Proplam-menu"
      }
    ]
  }
};
