const node = (id, title, kind, x, y, detail, input, output, why) => ({
  id, title, kind, x, y, w: 170, h: 82, detail, input, output, why
});
const edge = (from, to, label = "", labelX = null, labelY = null) => ({ from, to, label, labelX, labelY });
const scenario = (id, label, steps, summary) => ({ id, label, steps, summary });

export const executionFlows = {
  "zeon": {
    title: "How a NEON intrinsic is resolved",
    intro: "Follow one vector operation through the selected backend. Compare the builtin, inline-assembly, and portable Zig implementations.",
    width: 1120, height: 560,
    scenarios: [
      scenario("builtin", "LLVM builtin", ["call", "dispatch", "builtin", "result", "tests"], "The build selects an LLVM ARM NEON builtin; the compiler handles lowering for the target."),
      scenario("asm", "Inline assembly", ["call", "dispatch", "asm", "result", "tests"], "The build selects an explicit AArch64 instruction for operations with an assembly implementation."),
      scenario("fallback", "Pure Zig vector", ["call", "dispatch", "vector", "result", "tests"], "The portable Zig vector expression preserves operation semantics when architecture-specific paths are unavailable or disabled.")
    ],
    nodes: [
      node("call", "Caller operation", "Input", 20, 240, "A caller invokes an intrinsic-shaped API with explicitly typed vector lanes. The API gives the operation a consistent name even when the implementation backend changes.", "Two typed Zig vectors", "An intrinsic call such as vector addition", "This is the contract the different backends must preserve."),
      node("dispatch", "Build + target", "Decision", 235, 240, "Compile-time target information and build options determine which implementation branch is available. Portable source does not mean every target emits the same instructions.", "Target architecture and backend flags", "A selected implementation path", "Keep backend selection explicit so the behavior is reviewable and testable."),
      node("builtin", "LLVM NEON builtin", "Backend", 465, 55, "The ARM-targeted path calls the compiler's NEON builtin. LLVM handles lowering and instruction selection for the configured target.", "Typed vectors + builtin-enabled build", "Compiler-lowered NEON operation", "Usually the most direct compiler-integrated path."),
      node("asm", "Inline AArch64 asm", "Backend", 465, 240, "An explicit assembly path expresses the target instruction and register constraints directly. It is only meaningful on compatible targets.", "Typed vectors + assembly-enabled build", "A specific AArch64 instruction", "This path makes instruction intent explicit, while increasing the importance of target guards and constraint correctness."),
      node("vector", "Zig @Vector fallback", "Backend", 465, 425, "The fallback expresses the same operation with Zig vector semantics. LLVM may still lower it to SIMD on a suitable target; source syntax alone does not guarantee a particular opcode.", "Typed Zig vectors", "A portable vector expression", "Useful for host builds and portability, but verify generated code when instruction selection matters."),
      node("result", "Vector result", "Output", 705, 240, "Each backend returns the same logical vector shape and operation result. Differences in representation or instruction selection should not leak into the API.", "Chosen backend result", "A typed result vector", "Backend parity is about observable semantics, not identical machine code."),
      node("tests", "Parity checks", "Validation", 920, 240, "The repository documents unit and cross-target tests, including target-specific and Big-Endian coverage. Compare behavior across backends rather than relying on compilation alone.", "Test vectors and expected values", "Pass/fail evidence for supported cases", "Cross-compilation and emulation increase coverage, but do not replace hardware performance testing.")
    ],
    edges: [edge("call", "dispatch", "intrinsic call", 202, 230), edge("dispatch", "builtin", "builtin enabled", 430, 130), edge("dispatch", "asm", "assembly enabled", 430, 230), edge("dispatch", "vector", "fallback", 430, 395), edge("builtin", "result"), edge("asm", "result"), edge("vector", "result"), edge("result", "tests", "check parity", 860, 230)]
  },

  "wallify": {
    title: "From playback event to a live desktop scene",
    intro: "Wallify turns several player/system signals into one playback state, then fans that state out to the widget, artwork treatment, and companion animation.",
    width: 1120, height: 560,
    scenarios: [
      scenario("system", "System Now Playing", ["system", "normalize", "pipeline", "state", "panel"], "A system playback event enters the shared state pipeline and updates the non-activating widget."),
      scenario("spotify", "Spotify / Music IPC", ["spotify", "normalize", "pipeline", "state", "artwork"], "Player-specific metadata is normalized before artwork palette work is triggered."),
      scenario("companion", "Companion update", ["system", "normalize", "pipeline", "state", "pet"], "The same normalized playback state can drive the animated companion without giving each provider its own rendering path.")
    ],
    nodes: [
      node("system", "System media events", "Input", 20, 60, "The system's Now Playing/MediaRemote signal provides playback changes that can arrive independently of the widget's view lifecycle.", "Playback notifications and system media state", "A provider event", "This keeps the widget connected to playback without becoming the primary player."),
      node("spotify", "Spotify / Music IPC", "Input", 20, 350, "Player integrations can provide richer or alternate metadata. The combine branch documents Spotify integrations and an automatic provider/fallback mode.", "Player metadata, controls, and artwork", "A provider-specific update", "Provider differences should end at the adapter boundary, not leak into every view."),
      node("normalize", "Normalize provider data", "Adapter", 240, 205, "Convert incoming provider information into the same playback model: title, artist, artwork, progress, playback status, and available controls.", "Player-specific event shape", "A common playback representation", "A shared model makes downstream views independent of which player supplied the event."),
      node("pipeline", "Combine pipeline", "Processing", 455, 205, "The documented pipeline debounces bursts and deduplicates repeated track IDs before publishing state changes.", "Normalized and possibly repeated updates", "A stable playback-state update", "Filtering noisy updates avoids redundant artwork work and unnecessary view changes."),
      node("state", "Shared playback state", "State", 665, 205, "The latest track and playback state becomes the source of truth for the widget's visible components.", "Stable title, artist, progress, artwork, and controls", "State observed by rendering subsystems", "One model feeds multiple outputs while keeping synchronization decisions in one place."),
      node("artwork", "Artwork palette", "Output", 900, 45, "Artwork analysis extracts dominant/contrast colors used by the ambient treatment. Palette transitions should follow artwork changes rather than every progress tick.", "Album artwork and track identity", "Dominant tones and ambient tint", "Image analysis is separate from playback-state normalization."),
      node("panel", "Non-activating NSPanel", "Output", 900, 220, "The AppKit panel hosts the media card and is configured to stay available across spaces without taking keyboard focus during normal use.", "Shared playback state and display/window settings", "Updated desktop widget", "Window behavior matters as much as rendering: the widget should not interrupt the active app."),
      node("pet", "Companion scene", "Output", 900, 395, "The companion layer uses lightweight animation state and can react to playback/context while remaining a separate rendering concern.", "Playback context and companion state", "An updated pixel-pet scene", "Keeping animation separate makes it easier to profile and tune independently.")
    ],
    edges: [edge("system", "normalize", "system provider", 198, 110), edge("spotify", "normalize", "player provider", 198, 385), edge("normalize", "pipeline"), edge("pipeline", "state"), edge("state", "artwork"), edge("state", "panel"), edge("state", "pet")]
  },

  "offset-updater": {
    title: "How a stable signature is built and resolved",
    intro: "The updater decodes instructions before masking unstable address fields, then tests the signature against the new library and uses metadata anchors when a pattern is ambiguous.",
    width: 1430, height: 600,
    scenarios: [
      scenario("unique", "Unique signature", ["library", "disassemble", "mask", "grow", "scan", "unique", "offset"], "The pattern finds exactly one suitable candidate in the updated binary."),
      scenario("anchored", "Metadata-assisted", ["metadata", "parse-metadata", "anchors", "resolve", "offset"], "When byte matches are ambiguous, metadata/string/method anchors help identify the intended candidate. The scan candidate remains part of the evidence.")
    ],
    nodes: [
      node("library", "Reference libil2cpp.so", "Input", 20, 65, "The known-good library provides the reference function bytes and instruction sequence used to build the signature.", "Reference binary + known function address", "An instruction window", "Addresses are interpreted against the binary layout, not treated as offsets that stay constant across builds."),
      node("metadata", "global-metadata.dat", "Input", 20, 370, "Unity metadata contains string, type, and method-definition tables that can contribute anchors when byte patterns alone are not unique.", "Metadata file and version/layout assumptions", "Method/type/string records", "Metadata helps disambiguate candidates; it does not guarantee every stripped build is reconstructible."),
      node("disassemble", "Decode AArch64", "Processing", 220, 65, "Capstone decodes the reference byte window into instruction boundaries and structured operands before any volatile fields are changed.", "Raw instruction bytes and virtual address", "Instruction records with operands", "Instruction-aware masking avoids treating immediates as arbitrary bytes."),
      node("parse-metadata", "Parse metadata tables", "Processing", 220, 370, "Parse the supported metadata structures and locate useful method/string definitions that can be correlated with native code.", "Metadata header and tables", "Candidate anchors", "This branch depends on the input format and version matching the parser's supported assumptions."),
      node("mask", "Mask relocatable fields", "Transform", 420, 65, "The masker neutralizes volatile AArch64 fields such as ADRP/ADD immediates and branch offsets while preserving stable opcode structure.", "Decoded instructions", "A byte pattern with wildcard positions", "Mask instruction fields, not instruction meaning wholesale; too much masking creates false matches."),
      node("grow", "Grow the signature", "Decision", 620, 65, "Begin with the documented 48-byte signature window and expand when the candidate set is not unique enough to identify one target.", "Masked signature and uniqueness feedback", "A longer, more discriminating signature", "Growth trades pattern length against specificity; it should stop when evidence is adequate or the method needs another anchor."),
      node("scan", "Scan updated library", "Search", 820, 65, "Search the updated binary for instruction-compatible candidates using the generated wildcard signature.", "New libil2cpp.so + masked signature", "One or more candidate addresses", "A match is a candidate, not proof that the function is semantically identical."),
      node("unique", "Check uniqueness", "Decision", 1020, 65, "If the signature identifies one plausible address, the updater can report that candidate. Multiple matches take the disambiguation path.", "Candidate address set", "Unique candidate or ambiguity", "Do not silently select the first match when several candidates remain."),
      node("anchors", "Find metadata anchors", "Analysis", 620, 370, "Use method definitions, strings, pointer tables, and relevant native structures as additional evidence for linking a managed method to a candidate.", "Metadata-derived records and scan candidates", "Anchor evidence for each candidate", "Anchors reduce ambiguity but remain dependent on format assumptions and matching context."),
      node("resolve", "Resolve candidate", "Decision", 1020, 370, "Combine signature evidence with available anchors and reject cases that cannot be resolved confidently.", "Candidate addresses plus anchor evidence", "A resolved candidate or an explicit unresolved result", "An honest unresolved result is safer than a false-positive offset."),
      node("offset", "Emit updated offset", "Output", 1220, 65, "Return the new address/offset with the associated signature and resolution evidence for downstream use.", "Unique or sufficiently corroborated candidate", "Updated offset result", "Regression fixtures and real-game tests are the final check against overconfident matching.")
    ],
    edges: [edge("library", "disassemble"), edge("disassemble", "mask"), edge("mask", "grow"), edge("grow", "scan", "test in new build", 800, 150), edge("scan", "unique"), edge("metadata", "parse-metadata"), edge("parse-metadata", "anchors"), edge("anchors", "resolve"), edge("scan", "resolve", "ambiguous set", 885, 315), edge("unique", "offset", "one candidate", 1010, 140), edge("resolve", "offset", "resolved", 1110, 200)]
  },

  "ts-capstone": {
    title: "From TypeScript bytes to structured Capstone instructions",
    intro: "Inspect the boundary between the C disassembler compiled to WebAssembly and the typed TypeScript representation built from WebAssembly linear memory.",
    width: 1120, height: 540,
    scenarios: [
      scenario("basic", "Instruction records", ["client", "wasm", "decode", "read-structs", "records"], "The basic path decodes bytes and returns instruction IDs, addresses, mnemonics, and sizes."),
      scenario("details", "Operand details", ["client", "wasm", "decode", "read-structs", "operands"], "Detail mode also reconstructs architecture-specific operand/register information from linear memory.")
    ],
    nodes: [
      node("client", "TypeScript API", "Input", 20, 220, "The caller supplies architecture/mode, machine-code bytes, and the virtual address used for decoding.", "Byte buffer, architecture, mode, virtual address", "A configured disassembly request", "Keep architecture selection explicit so instruction decoding is not guessed from bytes."),
      node("wasm", "WebAssembly boundary", "Adapter", 240, 220, "The Emscripten-generated JavaScript glue loads the Capstone WebAssembly module. Buffers are placed into its linear memory as required by the API.", "Disassembly request", "Pointers and lengths inside WASM memory", "The WASM boundary replaces a platform-native addon build, but memory layout remains an interface contract."),
      node("decode", "Capstone C core", "Processing", 455, 220, "Capstone decodes instruction bytes and writes its C structures into the linear-memory region exposed by Emscripten.", "Pointer, size, ISA/mode, detail option", "cs_insn and optional cs_detail records", "This is where decoding semantics live; TypeScript is responsible for exposing them safely."),
      node("read-structs", "Read heap structures", "Transform", 675, 220, "Typed DataView/HEAPU8 reads follow known C structure offsets instead of routing every field through a per-instruction native object copy.", "Offsets and structures within WASM memory", "JavaScript values and operand records", "Layout assumptions must match the Capstone/Emscripten build that produced the structures."),
      node("records", "Typed instruction records", "Output", 920, 65, "The basic result exposes instruction ID/address, mnemonic, operation count, and formatted operands as typed JavaScript values.", "Decoded instruction structures", "A predictable TypeScript-facing instruction list", "Consumers should not depend on undocumented internal pointers after the call returns."),
      node("operands", "Operand detail tree", "Output", 920, 350, "When detail is enabled, ARM64-specific records can include registers, immediate values, memory operands, vector arrangements, and related metadata.", "cs_detail and architecture-specific unions", "Typed operand/register objects", "Different architectures and instructions expose different shapes, so consumers must handle optional details.")
    ],
    edges: [edge("client", "wasm"), edge("wasm", "decode"), edge("decode", "read-structs"), edge("read-structs", "records", "detail off", 880, 160), edge("read-structs", "operands", "detail on", 880, 340)]
  },

  "lwasm": {
    title: "A module goes from bytes to WAT or execution",
    intro: "The same parsed WebAssembly structure can branch into readable WAT output or the Lua stack-machine runtime. Invalid headers stop before either path.",
    width: 1200, height: 600,
    scenarios: [
      scenario("inspect", "Inspect / decompile", ["binary", "validate", "sections", "decode", "wat", "text-output"], "Parse the binary and format instructions as readable WebAssembly Text without running the module."),
      scenario("execute", "Execute module", ["binary", "validate", "sections", "decode", "runtime", "run-result"], "Use the parsed functions and instructions to drive the Lua stack-machine execution engine."),
      scenario("invalid", "Invalid header", ["binary", "validate", "reject"], "A bad magic number or unsupported version is rejected before normal section parsing.")
    ],
    nodes: [
      node("binary", "WebAssembly file", "Input", 20, 240, "The input is a .wasm binary or byte stream. WebAssembly files start with the wasm magic bytes and a version field.", "Raw module bytes", "A candidate binary module", "Treat parsing as untrusted input: bounds and lengths must be validated."),
      node("validate", "Check magic + version", "Validation", 225, 240, "Validate the header before reading sections. The prototype documents the standard magic/version prefix for its supported module format.", "Header bytes", "Accepted header or rejection", "Early validation prevents later parsers from interpreting arbitrary bytes as section data."),
      node("reject", "Reject malformed input", "Error", 425, 430, "If the magic, version, or structural bounds are invalid, stop with a parse error instead of entering decompilation or execution.", "Invalid header/version/bounds", "An explicit failure", "Malformed-input behavior is part of the runtime contract."),
      node("sections", "Decode sections", "Processing", 425, 240, "Read LEB128 integers and build structured records for type, import, function, table, memory, global, code, and custom sections.", "Validated binary sections", "Structured module representation", "Section ordering, sizes, and index relationships must remain internally consistent."),
      node("decode", "Decode instructions", "Transform", 635, 240, "Walk function bodies and decode bytecode into instruction records. The decompiler and interpreter can reuse the parsed operation model.", "Function/code section bytes", "Structured instructions and control-flow operations", "Decode control structures and immediates according to the opcode format."),
      node("wat", "Format as WAT", "Output", 850, 70, "The decoder's instruction and section data is rendered as readable WebAssembly Text for inspection and analysis.", "Structured sections and instructions", "Readable .wat text", "Text output is a representation for humans, not proof that execution semantics are correct."),
      node("text-output", "Readable module", "Output", 1030, 70, "The formatted output exposes imports, types, functions, memory, and instruction structure for analysis.", "Formatted WAT", "Text output", "Keep display formatting separate from binary validation and runtime state."),
      node("runtime", "Stack-machine runtime", "Execution", 850, 350, "The interpreter maintains a value stack, label/control stack, and activation frames while executing instructions against module state.", "Structured function bodies + initial module state", "Values, memory/global updates, return or trap", "This is an interpreter path, not a claim of an optimizing JIT or hardened sandbox."),
      node("run-result", "Return or trap", "Output", 1030, 350, "Execution finishes with a result, function return, or a trap/error if an operation cannot proceed under the runtime's rules.", "Final interpreter state", "Result or explicit trap", "Runtime behavior must be validated independently from successful decoding.")
    ],
    edges: [edge("binary", "validate"), edge("validate", "reject", "invalid", 375, 360), edge("validate", "sections", "valid", 390, 220), edge("sections", "decode"), edge("decode", "wat", "decompile", 805, 160), edge("wat", "text-output"), edge("decode", "runtime", "execute", 805, 340), edge("runtime", "run-result")]
  },

  "z-scanner": {
    title: "From wildcard signature to candidate offsets",
    intro: "The pattern is compiled once into values and masks, then a preprocessed search loop scans the target buffer and reports candidate locations.",
    width: 1200, height: 610,
    scenarios: [
      scenario("match", "Signature found", ["pattern", "compile", "preprocess", "scan", "compare", "decision", "matches"], "A candidate window satisfies every exact-byte constraint and every wildcard position."),
      scenario("none", "No remaining match", ["pattern", "compile", "preprocess", "scan", "compare", "decision", "advance", "no-match"], "A failed comparison advances using preprocessed matching state until the buffer is exhausted.")
    ],
    nodes: [
      node("pattern", "AoB signature", "Input", 20, 75, "The caller supplies a byte pattern such as 48 89 5C 24 ?? 55. Wildcards represent positions whose values are allowed to change.", "Hex tokens with optional wildcards", "A parsed signature", "Wildcards should mean exactly what the parser documents; malformed tokens need explicit handling."),
      node("buffer", "Target byte buffer", "Input", 20, 370, "The scanner receives the bytes to search, such as a dump, executable region, or loaded buffer provided by the caller.", "Byte slice + length", "Searchable memory range", "The core operates on a supplied buffer; it does not itself establish what a match means."),
      node("compile", "Compile pattern", "Transform", 230, 75, "Turn tokens into a compact value/mask representation so exact bytes and wildcard bytes can be checked without reparsing the string for every candidate.", "Parsed pattern tokens", "Byte array and mask bits", "Separate pattern parsing from the hot loop so the search stays predictable."),
      node("preprocess", "Build failure table", "Processing", 440, 75, "Precompute KMP-style prefix/shift information adapted to the pattern's matching rules, so a mismatch can reuse earlier comparisons.", "Compiled pattern and wildcard rules", "Preprocessed shift table", "Wildcard-aware preprocessing is the tricky correctness boundary; algorithm names alone do not guarantee the invariant."),
      node("scan", "Scan candidate windows", "Search", 440, 370, "Move through the target buffer and compare candidate windows against the compiled pattern without allocating for each attempted offset.", "Target bytes + compiled pattern", "Candidate comparisons", "Zero allocation in the inner loop helps predictable throughput over large buffers."),
      node("compare", "Masked comparison", "Decision", 650, 370, "Compare exact positions against expected byte values and ignore positions explicitly marked as wildcards.", "Candidate byte window + value/mask arrays", "Match or mismatch", "The exact mask semantics must be consistent between preprocessing and candidate comparison."),
      node("decision", "Any match?", "Decision", 850, 370, "A match yields a candidate offset. A mismatch or exhaustion path advances the search instead of restarting all work from scratch.", "Comparison result and current offset", "Found candidate or next-search action", "Treat matches as candidate locations that downstream analysis may need to validate."),
      node("matches", "Report offsets", "Output", 1020, 75, "Collect the offsets at which the signature matches the buffer, preserving the address/offset convention used by the caller.", "Successful match positions", "A list of candidate offsets", "Offsets are not automatically resolved function addresses or proof of semantic identity."),
      node("advance", "Advance via shift state", "Processing", 1020, 370, "Use the preprocessed information to choose the next viable search position. Continue until the input ends or another candidate is found.", "Mismatch position and failure-table state", "Next search position or exhaustion", "The shift logic must preserve valid overlapping matches."),
      node("no-match", "Search exhausted", "Output", 1020, 500, "If no further candidate window remains, report that the signature was not found in this buffer.", "Exhausted search state", "An empty/no-match result", "An empty result is different from a malformed pattern or failed input read.")
    ],
    edges: [edge("pattern", "compile"), edge("compile", "preprocess"), edge("preprocess", "scan"), edge("buffer", "scan", "bytes to scan", 250, 355), edge("scan", "compare"), edge("compare", "decision"), edge("decision", "matches", "match", 1010, 225), edge("decision", "advance", "mismatch", 980, 405), edge("advance", "no-match", "end of buffer", 1105, 475)]
  },

  "rarm64": {
    title: "From Mach-O container to decoded ARM64e instructions",
    intro: "The disassembler identifies the Mach-O slice and its load commands, then extracts meaningful code ranges before decoding fixed-width AArch64 instructions.",
    width: 1200, height: 580,
    scenarios: [
      scenario("thin", "Thin Mach-O", ["binary", "container", "thin", "commands", "sections", "decode", "report"], "A single-architecture Mach-O proceeds directly to its load commands and executable sections."),
      scenario("universal", "Universal / fat binary", ["binary", "container", "fat", "commands", "sections", "decode", "report"], "A universal container needs a selected architecture slice before its Mach-O commands can be interpreted.")
    ],
    nodes: [
      node("binary", "Mach-O input", "Input", 20, 230, "Read a Mach-O file, which may be a thin 64-bit image or a universal/fat container holding multiple architecture slices.", "File bytes", "A candidate Mach-O container", "File format detection precedes instruction decoding."),
      node("container", "Detect container type", "Decision", 225, 230, "Check file magic to distinguish a regular Mach-O image from a universal container.", "Header magic and bounds", "Thin-image or fat-container path", "A fat file is not itself the instruction stream; one slice must be chosen."),
      node("thin", "Use thin image", "Input", 435, 65, "For a thin image, continue with the contained Mach-O header and its load-command table.", "Single-architecture Mach-O", "Header and load-command range", "Validate offsets and sizes before reading the command table."),
      node("fat", "Select architecture slice", "Decision", 435, 380, "Walk the fat architecture table and select the slice to inspect, checking offsets and sizes against the file boundary.", "Fat header + architecture entries", "A selected Mach-O slice", "Architecture selection must be explicit when multiple compatible-looking slices exist."),
      node("commands", "Dispatch load commands", "Parsing", 645, 230, "Interpret commands such as LC_SEGMENT_64, LC_SYMTAB, LC_DYSYMTAB, and LC_BUILD_VERSION to locate code, symbols, and build metadata.", "Mach-O header and command bytes", "Segment, section, symbol, and target records", "Load commands describe how offsets map into the file and process image."),
      node("sections", "Map code + symbols", "Analysis", 830, 230, "Extract sections such as __TEXT,__text and resolve available symbols, function starts, or indirect stubs to create useful disassembly regions.", "Section table and symbol/stub records", "Code ranges with addresses/labels", "Stripped binaries may lack enough information for perfect function boundaries."),
      node("decode", "Decode 32-bit opcodes", "Processing", 1020, 230, "Decode fixed-width AArch64 instructions and expose branch targets and ARM64e pointer-authentication-related forms where supported.", "Instruction words + virtual address", "Structured instruction records", "Instruction decoding does not itself emulate pointer authentication or recover unavailable symbols."),
      node("report", "Inspect the result", "Output", 1020, 410, "Present instructions with addresses, labels, branch destinations, and relevant ARM64e details for further analysis.", "Decoded records and available symbols", "Readable disassembly", "Report uncertainty when function boundaries or symbol information are missing.")
    ],
    edges: [edge("binary", "container"), edge("container", "thin", "thin", 415, 145), edge("container", "fat", "fat / universal", 415, 360), edge("thin", "commands"), edge("fat", "commands"), edge("commands", "sections"), edge("sections", "decode"), edge("decode", "report")]
  },

  "il2cpp": {
    title: "Join Unity metadata with native ELF structures",
    intro: "This analyzer combines two views of the same build: managed declarations in global-metadata.dat and native addresses/segments in libil2cpp.so.",
    width: 1200, height: 610,
    scenarios: [
      scenario("headers", "Generate declarations", ["metadata", "parse-metadata", "join", "hierarchy", "headers"], "After the managed/native join, reconstruct declarations and type relationships for C#-style output."),
      scenario("database", "Build query database", ["elf", "parse-elf", "join", "hierarchy", "database"], "The joined analysis records can be written into a structured database for indexed queries.")
    ],
    nodes: [
      node("metadata", "global-metadata.dat", "Input", 20, 65, "The metadata input supplies managed strings, types, method definitions, field layouts, and related table records for the targeted metadata version.", "Metadata bytes and version", "Managed declaration records", "Parser correctness is version-sensitive; do not assume all Unity builds share the same layouts."),
      node("elf", "libil2cpp.so (ELF64)", "Input", 20, 370, "The native Android library contains program segments, dynamic symbols, registration structures, and machine-code addresses.", "A matching ARM64 ELF image", "Native address and symbol records", "Virtual addresses must be mapped through ELF segments rather than treated as flat file offsets."),
      node("parse-metadata", "Parse managed tables", "Processing", 235, 65, "Decode metadata tables and build searchable records for classes, methods, fields, generic parameters, and strings.", "Header and metadata table offsets", "Managed type/method model", "Validate table ranges, counts, and string references before using them."),
      node("parse-elf", "Parse ELF structures", "Processing", 235, 370, "Read ELF64 headers, PT_LOAD segments, dynamic symbols, and relevant registration structures that connect metadata to native code.", "ELF header, segments, symbols, registration data", "Native addresses and registration candidates", "Stripping can remove helpful names; structural anchors may be needed."),
      node("join", "Join managed + native", "Analysis", 465, 220, "Correlate parsed metadata with native addresses and registration data to map managed methods and types to compiled structures.", "Managed records plus ELF-derived evidence", "Linked methods, fields, classes, and addresses", "This is the central inference step; ambiguous mappings should remain explicit."),
      node("hierarchy", "Rebuild types + vtables", "Transform", 690, 220, "Reconstruct class relationships and virtual-method-table entries from metadata/native evidence, producing a coherent model rather than a flat dump.", "Linked class/method records", "Type hierarchy and vtable model", "Generic sharing, stripping, and registration changes can make reconstruction incomplete."),
      node("headers", "C#-style declarations", "Output", 940, 65, "Generate readable declarations for managed types, fields, and methods from the reconstructed model.", "Type/member model", "Header/declaration output", "Generated declarations are an analysis aid, not original source code."),
      node("database", "SQLite analysis DB", "Output", 940, 370, "Export structured records into indexed tables so types, methods, fields, and addresses can be queried without reparsing every time.", "Normalized analysis records", "Structured SQLite database", "Database output improves querying, but inherits uncertainty from the parser and reconstruction stages.")
    ],
    edges: [edge("metadata", "parse-metadata"), edge("elf", "parse-elf"), edge("parse-metadata", "join"), edge("parse-elf", "join"), edge("join", "hierarchy"), edge("hierarchy", "headers"), edge("hierarchy", "database")]
  },

  "hexer": {
    title: "An input stream becomes an interactive byte viewport",
    intro: "Hexer separates byte access, terminal setup, rendering, and navigation. Keyboard actions update the viewport rather than modifying the underlying file.",
    width: 1200, height: 600,
    scenarios: [
      scenario("navigate", "Navigate by offset", ["input", "reader", "terminal", "render", "keys", "offset", "render"], "A navigation key changes the visible offset and redraws the hex/ASCII viewport."),
      scenario("search", "Find a byte pattern", ["input", "reader", "terminal", "render", "keys", "search", "render"], "A search request scans for a byte/text pattern and moves the viewport to a matching offset.")
    ],
    nodes: [
      node("input", "File path / stdin", "Input", 20, 235, "Open the selected file or accept a byte stream from standard input. The viewer presents bytes without writing changes back to the source.", "File descriptor or stdin stream", "Readable byte source", "Keeping the viewer read-only makes inspection safer and simplifies the interaction model."),
      node("reader", "Mapped / chunked reader", "IO", 230, 235, "Use a memory-mapped file where appropriate or a chunked reader to access data without eagerly duplicating huge files.", "File size and byte source", "A bounded byte-access interface", "Large-file support depends on careful bounds handling and the chosen access strategy."),
      node("terminal", "Enter terminal mode", "Setup", 440, 235, "Configure terminal input so keypresses and escape sequences can be read directly, while retaining a reliable path to restore normal terminal state.", "TTY capabilities and terminal settings", "A raw-ish input event stream", "Terminal restoration is a correctness requirement, including error and interrupt paths."),
      node("render", "Render hex + ASCII", "View", 650, 235, "Format rows as offset, hexadecimal bytes, and printable ASCII so byte values and text context remain aligned.", "Viewport offset, terminal size, bytes", "A dual-column screen frame", "The ASCII pane is a visualization of bytes, not a text decoder that changes them."),
      node("keys", "Decode key events", "Input", 850, 235, "Parse ANSI escape sequences and supported navigation keys such as Vim-style movement and Page Up/Down.", "Keypresses and terminal escape sequences", "A navigation or search command", "Escape sequences can be ambiguous or terminal-specific, so handling should be explicit."),
      node("offset", "Update viewport offset", "State", 850, 65, "Compute the next visible byte offset for a movement/jump command, clamping or reporting positions near the end of the file.", "Current offset, command, file length", "A new viewport offset", "Offset arithmetic must avoid wrapping and must respect end-of-file boundaries."),
      node("search", "Search bytes / text", "Search", 850, 405, "Search for an exact text needle or wildcard byte signature and report the matching offset for inspection.", "Query plus byte source", "Matching offset or not found", "Search results locate data; they do not infer the meaning of a binary format.")
    ],
    edges: [edge("input", "reader"), edge("reader", "terminal"), edge("terminal", "render"), edge("render", "keys"), edge("keys", "offset", "movement / jump", 990, 145), edge("keys", "search", "search command", 985, 360), edge("offset", "render", "redraw", 820, 150), edge("search", "render", "jump to match", 820, 420)]
  },

  "sse4-strstr-zig": {
    title: "Choose the short-input or vector comparison path",
    intro: "This experiment compares a scalar-friendly fallback with the wide comparison path. Step through the SIMD branch to see where vector width and boundary handling matter.",
    width: 1200, height: 590,
    scenarios: [
      scenario("short", "Short input", ["inputs", "length", "fallback", "found"], "Inputs shorter than the vector width use the documented short-input fallback rather than paying setup cost."),
      scenario("vector", "SSE4.2 vector path", ["inputs", "length", "load", "compare", "index", "found"], "Longer inputs enter the vector-oriented path, load a block, compare against the needle, and interpret the instruction's index/flags.")
    ],
    nodes: [
      node("inputs", "Haystack + needle", "Input", 20, 235, "The search begins with a haystack buffer and a needle. Correctness depends on exact byte ranges and empty/short input semantics.", "Haystack pointer/length and needle pointer/length", "A substring-search request", "SIMD does not remove the need to handle empty strings, overlaps, and the end of the buffer."),
      node("length", "Check useful width", "Decision", 235, 235, "Compare input length and the remaining safe range against the vector width before using a wide load.", "Input lengths and alignment", "Short-input or vector route", "The branch avoids reading beyond valid memory and avoids vector setup when it cannot help."),
      node("fallback", "Scalar fallback", "Fallback", 465, 65, "For short inputs, use a simpler search path, documented in the README as the small-input fallback.", "Short haystack/needle", "A found index or not-found result", "Fallback behavior should agree with the main path for every edge case."),
      node("load", "Load a vector block", "SIMD", 465, 370, "Load a vector-width chunk from a safe position in the haystack and prepare the comparison controls used by the SSE4.2 experiment.", "Vector-sized byte window", "A vector operand", "Unaligned loads may be permitted by an instruction, but the memory range must still be valid."),
      node("compare", "Compare strings in hardware", "SIMD", 680, 370, "The SSE4.2 string-comparison instruction evaluates the selected comparison mode over a block and returns status/index information.", "Vector bytes, needle data, control immediate", "Index and condition flags", "The control mask determines semantics; it must match the intended substring behavior."),
      node("index", "Interpret index + flags", "Transform", 890, 370, "Interpret the returned index/flags to decide whether a candidate exists in the current block or the search should advance.", "Hardware index and flags", "Candidate match position or next block", "Boundary checks and overlapping candidates still belong to the surrounding loop."),
      node("found", "Return search result", "Output", 890, 65, "Return the located position or a not-found result through the common API regardless of which branch ran.", "Scalar or vector candidate", "Index / not-found", "Benchmark results depend on CPU, alignment, needle length, and workload; validate correctness before optimizing.")
    ],
    edges: [edge("inputs", "length"), edge("length", "fallback", "shorter than block", 435, 150), edge("length", "load", "vector path", 440, 365), edge("load", "compare"), edge("compare", "index"), edge("index", "found"), edge("fallback", "found")]
  },

  "shizukuboothelper": {
    title: "The startup attempt and where Android can block it",
    intro: "This is an exploratory startup chain, not an authorization bypass. It discovers wireless-debugging state, then attempts the documented helper path only when the required conditions are present.",
    width: 1200, height: 600,
    scenarios: [
      scenario("ready", "Wi-Fi + debugging ready", ["trigger", "check", "discover", "connect", "script", "spawn"], "When wireless debugging is available and the current ADB service can be discovered and authorized, the helper can attempt startup."),
      scenario("blocked", "Required condition missing", ["trigger", "check", "blocked"], "If wireless debugging or a usable Wi-Fi/ADB endpoint is unavailable, stop and report the limitation rather than claiming successful startup.")
    ],
    nodes: [
      node("trigger", "Boot / network event", "Input", 20, 235, "A scheduled automation or user-started helper notices a reboot/network-state change and begins checking whether startup is possible.", "Device event or automation trigger", "A startup attempt", "Android background scheduling is not guaranteed to run immediately or in every device state."),
      node("check", "Check Wi-Fi + ADB", "Gate", 240, 235, "Verify active Wi-Fi and wireless-debugging availability instead of assuming the ADB endpoint or port persists across reboots.", "Current network/debugging state", "Ready to discover or blocked", "Wireless debugging availability depends on system settings and device state; mobile data alone may not satisfy this path."),
      node("blocked", "Stop with a clear reason", "Blocked", 465, 430, "If the required endpoint is unavailable, end this attempt and report what condition is missing. Do not attempt to bypass Android's authorization or privilege model.", "Missing Wi-Fi/debugging/endpoint", "A blocked/retryable state", "This project documents platform limitations rather than defeating them."),
      node("discover", "Discover current ADB port", "Discovery", 465, 235, "Query the currently advertised ADB wireless service, including mDNS where available, instead of hard-coding a port that may change.", "ADB daemon state and local discovery", "Current endpoint candidate", "Discovery may fail while wireless debugging is disabled, the device is offline, or the service is not published."),
      node("connect", "Connect + authorize", "Security", 690, 235, "Attempt the authorized local ADB/helper connection using the endpoint and credentials already established through Android's supported workflow.", "Discovered endpoint and existing authorization", "Authorized shell session or failure", "No step grants root; the helper remains within the privileges of its authorized execution context."),
      node("script", "Run helper script", "Execution", 830, 95, "Only after the connection is usable, invoke the existing startup script that launches the Shizuku daemon through its supported shell path.", "Authorized command channel and script path", "Daemon launch attempt", "File access, SELinux, shell permissions, and background restrictions can still prevent launch."),
      node("spawn", "Shizuku start result", "Output", 1020, 95, "Confirm the helper's observed result instead of assuming a spawn command means the service is ready.", "Daemon process/startup result", "Started, failed, or unconfirmed state", "Report only what was observed; a successful command invocation is not the same as persistent service availability.")
    ],
    edges: [edge("trigger", "check"), edge("check", "blocked", "missing requirement", 425, 385), edge("check", "discover", "ready", 435, 220), edge("discover", "connect"), edge("connect", "script", "authorized", 850, 150), edge("script", "spawn")]
  }
};

const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g, character => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
})[character]);

function renderEdges(flow) {
  const byId = new Map(flow.nodes.map(item => [item.id, item]));
  return flow.edges.map(item => {
    const from = byId.get(item.from), to = byId.get(item.to);
    if (!from || !to) return "";
    const sx = from.x + from.w, sy = from.y + from.h / 2;
    const tx = to.x, ty = to.y + to.h / 2;
    let d;
    if (tx >= sx + 12) {
      const mx = Math.round((sx + tx) / 2);
      d = "M " + sx + " " + sy + " H " + mx + " V " + ty + " H " + (tx - 9);
    } else {
      const channel = Math.max(sy, ty) + 32;
      d = "M " + sx + " " + sy + " H " + (sx + 18) + " V " + channel + " H " + (tx - 18) + " V " + ty + " H " + (tx - 9);
    }
    const ax = tx - 9, ay = ty;
    const labelX = item.labelX ?? (sx + tx) / 2;
    const labelY = item.labelY ?? ((sy + ty) / 2 - 9);
    const label = item.label ? '<text x="' + labelX + '" y="' + labelY + '" text-anchor="middle">' + escapeHTML(item.label) + '</text>' : "";
    return '<g class="execution-edge" data-flow-edge="' + escapeHTML(item.from) + '>' + escapeHTML(item.to) + '"><path d="' + d + '"/><polygon points="' + (ax - 7) + ',' + (ay - 4) + ' ' + ax + ',' + ay + ' ' + (ax - 7) + ',' + (ay + 4) + '"/>' + label + '</g>';
  }).join("");
}

export function renderExecutionFlow(projectId, textDiagram = "") {
  const flow = executionFlows[projectId];
  if (!flow) return textDiagram ? '<details class="execution-text-fallback"><summary>Architecture flow</summary><pre class="arch-diagram"><code>' + escapeHTML(textDiagram) + '</code></pre></details>' : "";
  const scenarioButtons = flow.scenarios.map((item, index) =>
    '<button type="button" class="execution-scenario' + (index === 0 ? ' is-selected' : '') + '" data-flow-scenario="' + escapeHTML(item.id) + '" data-flow-steps="' + escapeHTML(item.steps.join(">")) + '" data-flow-summary="' + escapeHTML(item.summary) + '" aria-pressed="' + (index === 0 ? 'true' : 'false') + '">' + escapeHTML(item.label) + '</button>'
  ).join("");
  const nodeButtons = flow.nodes.map(item =>
    '<button type="button" class="flow-node flow-node-' + escapeHTML(item.kind.toLowerCase()) + '" data-flow-node="' + escapeHTML(item.id) + '" data-flow-node-title="' + escapeHTML(item.title) + '" data-flow-kind="' + escapeHTML(item.kind) + '" data-flow-detail="' + escapeHTML(item.detail) + '" data-flow-input="' + escapeHTML(item.input) + '" data-flow-output="' + escapeHTML(item.output) + '" data-flow-why="' + escapeHTML(item.why) + '" style="left:' + (item.x / flow.width * 100) + '%;top:' + (item.y / flow.height * 100) + '%;width:' + (item.w / flow.width * 100) + '%;height:' + (item.h / flow.height * 100) + '%" aria-pressed="false"><span class="flow-node-kind">' + escapeHTML(item.kind) + '</span><strong>' + escapeHTML(item.title) + '</strong><span class="flow-node-inspect">Inspect node ↗</span></button>'
  ).join("");
  const first = flow.nodes.find(item => item.id === flow.scenarios[0].steps[0]) ?? flow.nodes[0];
  const diagram = textDiagram ? '<details class="execution-text-fallback"><summary>Open the plain-text architecture sketch</summary><pre class="arch-diagram"><code>' + escapeHTML(textDiagram) + '</code></pre></details>' : "";
  return '<div class="execution-flow" data-execution-flow="' + escapeHTML(projectId) + '" data-flow-active-scenario="' + escapeHTML(flow.scenarios[0].id) + '" data-flow-step="0" data-flow-selected="' + escapeHTML(first.id) + '">' +
    '<div class="execution-flow-header"><div class="execution-flow-heading"><span class="execution-flow-eyebrow">INTERACTIVE TRACE</span><h3>' + escapeHTML(flow.title) + '</h3><p>' + escapeHTML(flow.intro) + '</p></div><div class="execution-flow-key"><span><i class="flow-key-dot input"></i> Input</span><span><i class="flow-key-dot process"></i> Processing</span><span><i class="flow-key-dot decision"></i> Decision</span><span><i class="flow-key-dot output"></i> Output</span></div></div>' +
    '<div class="execution-scenarios"><span class="execution-scenarios-label">EXECUTION PATH</span><div class="execution-scenario-options" role="group" aria-label="Choose an execution path">' + scenarioButtons + '</div><p class="execution-scenario-description" data-flow-scenario-description>' + escapeHTML(flow.scenarios[0].summary) + '</p></div>' +
    '<div class="execution-flow-graph-scroll" tabindex="0" aria-label="Scrollable execution flow diagram"><div class="execution-flow-graph" style="aspect-ratio:' + flow.width + ' / ' + flow.height + '">' +
    '<svg class="execution-flow-edges" viewBox="0 0 ' + flow.width + ' ' + flow.height + '" role="img" aria-label="Connected components for ' + escapeHTML(flow.title) + '" preserveAspectRatio="none"><g class="execution-edge-layer">' + renderEdges(flow) + '</g></svg>' +
    '<div class="execution-flow-nodes">' + nodeButtons + '</div></div></div>' +
    '<div class="execution-stepper"><div class="execution-stepper-actions"><button type="button" data-flow-action="prev" aria-label="Previous execution step" title="Previous step">← Prev</button><button type="button" data-flow-action="play" aria-label="Play execution trace" title="Play or pause trace">▶ Play trace</button><button type="button" data-flow-action="next" aria-label="Next execution step" title="Next step">Next →</button><button type="button" data-flow-action="reset" aria-label="Reset execution trace" title="Reset trace">↺ Reset</button></div><span class="execution-step-counter" data-flow-step-counter>Step 1 / ' + flow.scenarios[0].steps.length + '</span><div class="execution-step-progress" role="progressbar" aria-label="Trace progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" data-flow-progress><span data-flow-progress-fill></span></div></div>' +
    '<section class="execution-inspector" aria-live="polite" aria-atomic="true"><div class="execution-inspector-main"><div class="execution-inspector-kicker" data-flow-inspector-kicker>STEP 1 · ' + escapeHTML(first.kind.toUpperCase()) + '</div><h4 data-flow-inspector-title>' + escapeHTML(first.title) + '</h4><p data-flow-inspector-detail>' + escapeHTML(first.detail) + '</p><p class="execution-inspector-why" data-flow-inspector-why>' + escapeHTML(first.why) + '</p></div><dl class="execution-inspector-io"><div><dt>Input</dt><dd data-flow-inspector-input>' + escapeHTML(first.input) + '</dd></div><div><dt>Output</dt><dd data-flow-inspector-output>' + escapeHTML(first.output) + '</dd></div></dl></section>' +
    diagram + '<p class="execution-flow-footnote">Select any node for its details, or use the trace controls to follow a path. The diagram describes the documented project design, not a live trace from a running process.</p></div>';
}
