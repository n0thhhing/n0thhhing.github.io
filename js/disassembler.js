/**
 * ARM64 Disassembler & Hex Inspector Module
 * Inspired by rarm64 (zero-dependency Mach-O ARM64 disassembler) & hexer
 */

const DISASM_ROUTINES = {
  rarm64_demangle: {
    name: "rarm64 :: _swift_demangle_entry",
    arch: "arm64e / Mach-O MH_EXECUTE",
    section: "__TEXT,__text",
    instructions: [
      {
        addr: "0x100003b40",
        hex: "a9bf7bfd",
        mnemonic: "stp",
        operands: "x29, x30, [sp, #-16]!",
        comment: "; save frame pointer & link register",
        details: {
          class: "Load/Store Pair (Pre-indexed)",
          format: "STP Xt1, Xt2, [Xn|SP, #imm]!",
          registers: { read: ["sp"], written: ["sp", "mem"] },
          immediate: "-16 bytes",
          notes: "Allocates 16-byte stack frame with writeback."
        }
      },
      {
        addr: "0x100003b44",
        hex: "910003fd",
        mnemonic: "mov",
        operands: "x29, sp",
        comment: "; establish new stack frame",
        details: {
          class: "Data Processing (Immediate / Add)",
          format: "ADD Xd, Xn, #0",
          registers: { read: ["sp"], written: ["x29"] },
          immediate: "#0",
          notes: "Alias for `add x29, sp, #0`. Sets up x29 frame pointer."
        }
      },
      {
        addr: "0x100003b48",
        hex: "90000028",
        mnemonic: "adrp",
        operands: "x8, 0x100008000",
        comment: "; page base of __dyld_chained_fixups",
        details: {
          class: "PC-Relative Addressing",
          format: "ADRP Xd, label",
          registers: { read: ["pc"], written: ["x8"] },
          immediate: "+4KB page boundary",
          notes: "Computes 4KB aligned base address relative to PC for symbol resolution."
        }
      },
      {
        addr: "0x100003b4c",
        hex: "9101a101",
        mnemonic: "add",
        operands: "x1, x8, #0x68",
        comment: "; string table pointer offset",
        details: {
          class: "Arithmetic (Immediate)",
          format: "ADD Xd, Xn, #imm",
          registers: { read: ["x8"], written: ["x1"] },
          immediate: "0x68 (104 bytes)",
          notes: "Resolves pointer to mangled symbol slice (`$s...`)."
        }
      },
      {
        addr: "0x100003b50",
        hex: "14000ffc",
        mnemonic: "b",
        operands: "0x100004b40",
        comment: "; tail call -> _rust_demangle_v0",
        details: {
          class: "Branch & Control Flow",
          format: "B label",
          registers: { read: [], written: ["pc"] },
          immediate: "+0x100004b40 - 0x100003b50",
          notes: "Direct branch to demangling engine. Pure-Rust zero-dependency demangler."
        }
      }
    ]
  },
  zeon_neon_fma: {
    name: "zeon :: neon_fma_4s_vectorized",
    arch: "aarch64 / NEON SIMD",
    section: "__TEXT,__text",
    instructions: [
      {
        addr: "0x00001080",
        hex: "4eb01e20",
        mnemonic: "fmla",
        operands: "v0.4s, v17.4s, v16.4s",
        comment: "; fused multiply-accumulate 4x single-precision",
        details: {
          class: "NEON Advanced SIMD Vector Floating-Point",
          format: "FMLA Vd.4S, Vn.4S, Vm.4S",
          registers: { read: ["v17", "v16", "v0"], written: ["v0"] },
          immediate: "None (3-register vector)",
          notes: "Computes v0[i] += v17[i] * v16[i] across 4 float32 lanes in 1 clock cycle."
        }
      },
      {
        addr: "0x00001084",
        hex: "6e200800",
        mnemonic: "dup",
        operands: "v0.4s, w0",
        comment: "; broadcast scalar w0 to all 4 lanes",
        details: {
          class: "NEON Vector Copy / Lane Broadcast",
          format: "DUP Vd.4S, Wn",
          registers: { read: ["w0"], written: ["v0"] },
          immediate: "None",
          notes: "Replicates scalar 32-bit register w0 into 4 parallel 32-bit lanes."
        }
      },
      {
        addr: "0x00001088",
        hex: "4ea11c20",
        mnemonic: "fmax",
        operands: "v0.4s, v1.4s, v2.4s",
        comment: "; element-wise parallel IEEE-754 max",
        details: {
          class: "NEON Vector FP 2-source Arithmetic",
          format: "FMAX Vd.4S, Vn.4S, Vm.4S",
          registers: { read: ["v1", "v2"], written: ["v0"] },
          immediate: "None",
          notes: "Calculates max(v1[i], v2[i]) for lanes 0..3 without branching."
        }
      },
      {
        addr: "0x0000108c",
        hex: "d65f03c0",
        mnemonic: "ret",
        operands: "",
        comment: "; return result in v0",
        details: {
          class: "Branch & Control Flow (Register)",
          format: "RET [Xn]",
          registers: { read: ["lr/x30"], written: ["pc"] },
          immediate: "None",
          notes: "Returns execution to caller. Standard ABI return register for FP is v0."
        }
      }
    ]
  },
  il2cpp_stripped: {
    name: "il2cpp :: resolve_stripped_registration",
    arch: "aarch64 / Android ELF 64-bit",
    section: ".text",
    instructions: [
      {
        addr: "0x00491fea0",
        hex: "f9400001",
        mnemonic: "ldr",
        operands: "x1, [x0]",
        comment: "; load Il2CppCodeGenModule vtable",
        details: {
          class: "Loads & Stores (Single Register)",
          format: "LDR Xt, [Xn, #pimm]",
          registers: { read: ["x0"], written: ["x1"] },
          immediate: "#0",
          notes: "Reads pointer to IL2CPP v29 metadata registration table."
        }
      },
      {
        addr: "0x00491fea4",
        hex: "f9400c22",
        mnemonic: "ldr",
        operands: "x2, [x1, #24]",
        comment: "; load methodPointers array address",
        details: {
          class: "Loads & Stores (Single Register)",
          format: "LDR Xt, [Xn, #pimm]",
          registers: { read: ["x1"], written: ["x2"] },
          immediate: "+24 (offset in codegen descriptor)",
          notes: "Retrieves array of native compiled function entry points."
        }
      },
      {
        addr: "0x00491fea8",
        hex: "d63f0040",
        mnemonic: "blr",
        operands: "x2",
        comment: "; indirect branch with link to native method",
        details: {
          class: "Branch with Link (Register)",
          format: "BLR Xn",
          registers: { read: ["x2"], written: ["lr/x30", "pc"] },
          immediate: "None",
          notes: "Resolves runtime detour/trampoline call recorded in callgraph.json."
        }
      }
    ]
  }
};

let currentRoutineKey = "rarm64_demangle";
let selectedInstructionIndex = 0;

export function initDisassembler() {
  renderDisassembler();
}

export function selectRoutine(key) {
  if (DISASM_ROUTINES[key]) {
    currentRoutineKey = key;
    selectedInstructionIndex = 0;
    renderDisassembler();
  }
}

function renderDisassembler() {
  const container = document.getElementById("disasm-instructions-list");
  const routine = DISASM_ROUTINES[currentRoutineKey];
  if (!container || !routine) return;

  // Update routine metadata badges
  const titleEl = document.getElementById("disasm-routine-name");
  const archEl = document.getElementById("disasm-routine-arch");
  if (titleEl) titleEl.textContent = routine.name;
  if (archEl) archEl.textContent = routine.arch;

  container.innerHTML = "";

  routine.instructions.forEach((insn, idx) => {
    const row = document.createElement("div");
    row.className = `disasm-instruction-row ${idx === selectedInstructionIndex ? "selected" : ""}`;
    row.dataset.index = idx;

    row.innerHTML = `
      <span class="disasm-addr mono">${insn.addr}</span>
      <span class="disasm-hex mono">${insn.hex}</span>
      <span class="disasm-insn mono">
        <span class="disasm-mnemonic">${insn.mnemonic}</span>
        <span class="disasm-operands">${insn.operands ? " " + insn.operands : ""}</span>
        <span class="disasm-comment">${insn.comment ? " " + insn.comment : ""}</span>
      </span>
    `;

    row.addEventListener("click", () => {
      selectedInstructionIndex = idx;
      updateSelectedRow();
      updateInspectorBar();
    });

    container.appendChild(row);
  });

  updateInspectorBar();
}

function updateSelectedRow() {
  const rows = document.querySelectorAll(".disasm-instruction-row");
  rows.forEach((r, idx) => {
    if (idx === selectedInstructionIndex) {
      r.classList.add("selected");
    } else {
      r.classList.remove("selected");
    }
  });
}

function updateInspectorBar() {
  const routine = DISASM_ROUTINES[currentRoutineKey];
  const insn = routine.instructions[selectedInstructionIndex];
  if (!insn) return;

  const classEl = document.getElementById("inspector-class");
  const formatEl = document.getElementById("inspector-format");
  const regsEl = document.getElementById("inspector-regs");
  const immEl = document.getElementById("inspector-imm");
  const notesEl = document.getElementById("inspector-notes");

  if (classEl) classEl.textContent = insn.details.class;
  if (formatEl) formatEl.textContent = insn.details.format;
  if (regsEl) {
    const reads = insn.details.registers.read.length ? `R:[${insn.details.registers.read.join(",")}]` : "R:none";
    const writes = insn.details.registers.written.length ? `W:[${insn.details.registers.written.join(",")}]` : "W:none";
    regsEl.textContent = `${reads} | ${writes}`;
  }
  if (immEl) immEl.textContent = insn.details.immediate;
  if (notesEl) notesEl.textContent = insn.details.notes;
}
