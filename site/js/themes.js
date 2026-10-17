export const themes = [
  { id: 'gruvbox-material', name: 'Gruvbox Material', note: 'warm, soft, feels like home', colors: ['#d4be98', '#a9b665', '#d8a657', '#e78a4e', '#d3869b', '#7daea3'], source: 'https://github.com/sainnhe/gruvbox-material' },
  { id: 'gruvbox', name: 'Gruvbox', note: 'the original warm contrast', colors: ['#ebdbb2', '#b8bb26', '#fabd2f', '#fe8019', '#d3869b', '#83a598'], source: 'https://github.com/morhetz/gruvbox' },
  { id: 'panda', name: 'Panda', note: 'mint, pink, and a little energy', colors: ['#e6e6e6', '#19f9d8', '#ffcc95', '#ffb86c', '#ff75b5', '#45a9f9'], source: 'https://github.com/tinkertrain/panda-syntax-vscode' },
  { id: 'dracula', name: 'Dracula', note: 'a familiar purple after dark', colors: ['#f8f8f2', '#50fa7b', '#f1fa8c', '#ffb86c', '#bd93f9', '#8be9fd'], source: 'https://draculatheme.com/contribute' },
  { id: 'monokai-pro', name: 'Monokai Pro', note: 'bright accents, quiet background', colors: ['#fcfcfa', '#a9dc76', '#ffd866', '#fc9867', '#ab9df2', '#78dce8'], source: 'https://monokai.pro/' },
  { id: 'catppuccin-frappe', name: 'Catppuccin Frappé', note: 'soft pastels for a slower evening', colors: ['#c6d0f5', '#a6d189', '#e5c890', '#ef9f76', '#ca9ee6', '#81c8be'], source: 'https://github.com/catppuccin/palette' },
];

export const THEME_KEY = 'levi-theme';
export function resolveTheme(value) {
  return themes.find(theme => theme.id === value)?.id ?? themes[0].id;
}
export function readTheme(storage) {
  try { return resolveTheme(storage.getItem(THEME_KEY)); }
  catch { return themes[0].id; }
}
export function saveTheme(value, storage) {
  const id = resolveTheme(value);
  try { storage.setItem(THEME_KEY, id); } catch { /* Storage is optional in private browsing. */ }
  return id;
}
