/**
 * Theme Engine Module
 * Supports Levi's favorite themes in requested priority:
 * 1. Gruvbox Material (Default)
 * 2. Gruvbox (Classic)
 * 3. Panda Syntax
 * 4. Dracula
 * 5. Monokai Pro
 * 6. Catppuccin Frappé
 * 7. Void Cyber (Original)
 */

export const THEMES = [
  {
    id: "gruvbox-material",
    name: "Gruvbox Material",
    swatchPrimary: "#ea6962",
    swatchAccent: "#d8a657",
    swatchBg: "#282828"
  },
  {
    id: "gruvbox",
    name: "Gruvbox",
    swatchPrimary: "#fb4934",
    swatchAccent: "#fabd2f",
    swatchBg: "#282828"
  },
  {
    id: "panda",
    name: "Panda Syntax",
    swatchPrimary: "#ff75b5",
    swatchAccent: "#19f9d8",
    swatchBg: "#292a2b"
  },
  {
    id: "dracula",
    name: "Dracula",
    swatchPrimary: "#bd93f9",
    swatchAccent: "#50fa7b",
    swatchBg: "#282a36"
  },
  {
    id: "monokai-pro",
    name: "Monokai Pro",
    swatchPrimary: "#ffd866",
    swatchAccent: "#a9dc76",
    swatchBg: "#2d2a2e"
  },
  {
    id: "catppuccin-frappe",
    name: "Catppuccin Frappé",
    swatchPrimary: "#ca9ee6",
    swatchAccent: "#81c8be",
    swatchBg: "#303446"
  },
  {
    id: "void-cyber",
    name: "Void Cyber",
    swatchPrimary: "#00f5ff",
    swatchAccent: "#00ff9d",
    swatchBg: "#05070b"
  }
];

const STORAGE_KEY = "levi-preferred-theme";
const DEFAULT_THEME = "gruvbox-material";

export function initThemes() {
  const saved = localStorage.getItem(STORAGE_KEY);
  const initialTheme = saved && THEMES.some(t => t.id === saved) ? saved : DEFAULT_THEME;
  applyTheme(initialTheme, false);

  const themeBtn = document.getElementById("theme-btn");
  const dropdown = document.getElementById("theme-dropdown");

  if (themeBtn && dropdown) {
    themeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropdown.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target) && !themeBtn.contains(e.target)) {
        dropdown.classList.remove("open");
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && dropdown.classList.contains("open")) {
        dropdown.classList.remove("open");
      }
    });

    document.querySelectorAll(".theme-option-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const themeId = btn.dataset.theme;
        applyTheme(themeId, true);
        dropdown.classList.remove("open");
      });
    });
  }
}

export function applyTheme(themeId, save = true) {
  const theme = THEMES.find(t => t.id === themeId) || THEMES[0];
  document.documentElement.setAttribute("data-theme", theme.id);

  if (save) {
    localStorage.setItem(STORAGE_KEY, theme.id);
  }

  // Update theme button label
  const labelEl = document.getElementById("theme-label");
  if (labelEl) {
    labelEl.textContent = theme.name;
  }

  // Update active state in dropdown
  document.querySelectorAll(".theme-option-btn").forEach(btn => {
    if (btn.dataset.theme === theme.id) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  return theme;
}

export function getCurrentTheme() {
  return document.documentElement.getAttribute("data-theme") || DEFAULT_THEME;
}
