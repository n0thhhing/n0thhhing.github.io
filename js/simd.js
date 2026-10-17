/**
 * NEON SIMD Vector Lane Visualizer Module
 * Inspired by zeon (2,800+ ARM/ARM64 NEON intrinsics in pure Zig & inline assembly)
 */

const SIMD_OPERATIONS = {
  vaddq_s32: {
    mnemonic: "vaddq_s32 (add v2.4s, v0.4s, v1.4s)",
    description: "4-lane parallel 32-bit integer addition in 1 clock cycle",
    regA: [12, 45, 89, 134],
    regB: [8, 55, 11, 66],
    compute: (a, b) => a + b
  },
  vmulq_s32: {
    mnemonic: "vmulq_s32 (mul v2.4s, v0.4s, v1.4s)",
    description: "4-lane parallel 32-bit integer multiplication",
    regA: [3, 7, 12, 25],
    regB: [4, 6, 8, 10],
    compute: (a, b) => a * b
  },
  vmaxq_s32: {
    mnemonic: "vmaxq_s32 (smax v2.4s, v0.4s, v1.4s)",
    description: "4-lane branchless maximum evaluation",
    regA: [98, 14, 250, 42],
    regB: [55, 87, 120, 99],
    compute: (a, b) => Math.max(a, b)
  },
  veorq_u32: {
    mnemonic: "veorq_u32 (eor v2.16b, v0.16b, v1.16b)",
    description: "128-bit bitwise exclusive-OR across all vector lanes",
    regA: [0x0F, 0xAA, 0xFF, 0x55],
    regB: [0xF0, 0x55, 0x00, 0xAA],
    compute: (a, b) => (a ^ b) & 0xFF
  }
};

let activeOpKey = "vaddq_s32";

export function initSimdVisualizer() {
  const opSelect = document.getElementById("simd-op-select");
  const stepBtn = document.getElementById("simd-step-btn");
  const resetBtn = document.getElementById("simd-reset-btn");

  if (opSelect) {
    opSelect.addEventListener("change", (e) => {
      activeOpKey = e.target.value;
      renderSimdState(false);
    });
  }

  if (stepBtn) {
    stepBtn.addEventListener("click", () => {
      executeSimdStep();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      renderSimdState(false);
    });
  }

  renderSimdState(false);
}

function renderSimdState(hasExecuted) {
  const op = SIMD_OPERATIONS[activeOpKey];
  const badgeEl = document.getElementById("simd-active-op-badge");
  const descEl = document.getElementById("simd-op-desc");
  if (badgeEl) badgeEl.textContent = op.mnemonic;
  if (descEl) descEl.textContent = op.description;

  for (let lane = 0; lane < 4; lane++) {
    const valAEl = document.getElementById(`lane-${lane}-val-a`);
    const valBEl = document.getElementById(`lane-${lane}-val-b`);
    const valOutEl = document.getElementById(`lane-${lane}-val-out`);
    const laneBox = document.getElementById(`simd-lane-${lane}`);

    const a = op.regA[lane];
    const b = op.regB[lane];
    const out = op.compute(a, b);

    if (valAEl) valAEl.textContent = typeof a === "number" && a > 0xFF ? `0x${a.toString(16)}` : a;
    if (valBEl) valBEl.textContent = typeof b === "number" && b > 0xFF ? `0x${b.toString(16)}` : b;

    if (valOutEl) {
      if (hasExecuted) {
        valOutEl.textContent = typeof out === "number" && out > 0xFF ? `0x${out.toString(16)}` : out;
        valOutEl.style.color = "var(--emerald)";
      } else {
        valOutEl.textContent = "—";
        valOutEl.style.color = "var(--text-muted)";
      }
    }

    if (laneBox) {
      if (hasExecuted) {
        laneBox.classList.add("computing");
      } else {
        laneBox.classList.remove("computing");
      }
    }
  }
}

function executeSimdStep() {
  const op = SIMD_OPERATIONS[activeOpKey];
  // Animate pulse
  for (let lane = 0; lane < 4; lane++) {
    const laneBox = document.getElementById(`simd-lane-${lane}`);
    if (laneBox) {
      laneBox.classList.add("computing");
    }
  }

  setTimeout(() => {
    renderSimdState(true);
  }, 200);
}
