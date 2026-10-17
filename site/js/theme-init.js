// Runs before styles load so a saved theme never flashes the default palette.
try {
  const saved = localStorage.getItem('levi-theme');
  if (['gruvbox-material', 'gruvbox', 'panda', 'dracula', 'monokai-pro', 'catppuccin-frappe'].includes(saved)) {
    document.documentElement.dataset.theme = saved;
  }
} catch { /* The default theme works without browser storage. */ }
