# Zed workspace reference

Reference: zed-industries/zed commit `56934ec0560bce8929025497411de7f5322fb6ca`, recorded before implementation on 2026-10-17.

- `crates/workspace/src/pane.rs`: pane-local tabs, previews, active item, navigation and focus.
- `crates/workspace/src/pane_group.rs`: nested axes, directional splits, resizing, removal and zoom.
- `crates/file_finder/src/file_finder.rs`: fuzzy paths, navigation history, selection and split opening.
- `crates/search/src/buffer_search.rs`: inline search, options, match navigation and dismissal.
- `crates/workspace/src/dock.rs`: separate docked panels and focus restoration.
- `assets/keymaps/default-macos.json`: Cmd+P, Cmd+F, Cmd+\ and directional split chords.

Design contract: compact 32px pane headers and tabs, flat theme surfaces, thin separators, restrained SVG controls, active-pane focus, upper-center file/heading pickers, inline find below breadcrumbs. Preserve rendered portfolio content and the existing theme palette. Only supported actions are shown. Browser-owned shortcuts retain clickable alternatives. Mobile shows one active pane without discarding the desktop split tree.

Additional chrome references at the same commit: `crates/title_bar/src/title_bar.rs`, `crates/workspace/src/status_bar.rs`, `crates/project_panel/src/project_panel.rs`, `crates/terminal_view/src/terminal_view.rs`, `crates/git_ui/src/git_panel.rs`, and `crates/picker/src/picker.rs`.

The web implementation keeps one stable ID per pane, namespaces article ARIA targets, and exposes the existing `#content`, `#tabs`, and breadcrumb/control IDs only on the active pane. All pane operations use scoped data attributes. URL hashes identify portfolio routes, not serialized layouts; reload starts a fresh workspace.

Supported shortcuts: Cmd/Ctrl+P file finder; Cmd/Ctrl+F find; Cmd/Ctrl+\ split right; Cmd/Ctrl+K followed by an arrow splits in that direction; Cmd/Ctrl+W closes the active tab; Cmd/Ctrl+Shift+O headings; Alt+Left/Right pane history; Cmd/Ctrl+1–9 activates panes; Shift+Escape zooms a pane; Cmd/Ctrl+B toggles the explorer; Cmd/Ctrl+J toggles the terminal. Browser-reserved shortcuts may be intercepted by the browser, so every action also has a visible control. Tab context menus offer keyboard-accessible reordering and moving between panes.

Screenshot refinements: folder disclosure uses the folder icon alone; tab separators are single neutral borders, the selected tab uses a raised fill, and there is no accent stripe across the tab bar. The breadcrumb row remains visible by request, including for rendered Markdown. Tab border behavior was also checked against `crates/ui/src/components/tab.rs` at the pinned commit.

Tab-bar actions follow `default_render_tab_bar_buttons`: visible only while their pane or its context menu has focus, with split disabled without an active item. The empty tab-strip drop target and empty-pane placeholder dispatch New File on double-click. The plus menu exposes New File and Open File. New untitled files are plain-text scratch buffers shared between split views; they can be downloaded, stay recoverable through pane history while the page is open, and are not persisted across reloads. Leaving with undownloaded edits prompts the browser’s unsaved-changes warning.

Terminal panel behavior follows `crates/terminal_view/src/terminal_panel.rs`: independent sessions and tabs, nested splits with draggable and keyboard-accessible separators, and tab-bar controls (New Terminal, Split Pane, Zoom In/Out, Close Panel) visible when the terminal pane or its menu has focus. Prompt commands wrap dynamically across rows with natural command entry, and clicking terminal output or empty space returns focus to the prompt while preserving mouse text selection.
