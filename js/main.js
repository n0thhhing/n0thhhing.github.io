/**
 * Main Application Orchestrator
 */

import { initDisassembler } from './disassembler.js';
import { Terminal } from './terminal.js';
import { initSimdVisualizer } from './simd.js';
import { initProjectsGrid } from './projects.js';
import { initThemes } from './themes.js';

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Themes (Defaults to Gruvbox Material)
  initThemes();

  // Initialize Disassembler (Default Tab)
  initDisassembler();

  // Initialize Terminal
  const termContainer = document.getElementById("terminal-view-container");
  const termInput = document.getElementById("terminal-cli-input");
  const termHistory = document.getElementById("terminal-history-log");
  if (termContainer && termInput && termHistory) {
    window.terminalInstance = new Terminal(termContainer, termInput, termHistory);
  }

  // Initialize SIMD Visualizer
  initSimdVisualizer();

  // Initialize Projects Grid
  initProjectsGrid();

  // Setup Sandbox Tab Switching
  setupSandboxTabs();

  // Smooth scroll links
  setupSmoothScroll();
});

function setupSandboxTabs() {
  const tabButtons = document.querySelectorAll(".sandbox-tab-btn");
  const panels = document.querySelectorAll(".sandbox-panel");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.dataset.tab;

      // Update button active state
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Update panel visibility
      panels.forEach(p => {
        if (p.id === `panel-${targetTab}`) {
          p.classList.add("active");
          // Focus terminal input if switching to terminal
          if (targetTab === "terminal" && window.terminalInstance) {
            setTimeout(() => {
              window.terminalInstance.input.focus();
            }, 50);
          }
        } else {
          p.classList.remove("active");
        }
      });
    });
  });
}

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
}
