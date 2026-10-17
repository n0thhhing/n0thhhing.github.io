# Levi’s workspace

A personal portfolio as a Zed-inspired workspace: a project tree, file tabs, Markdown-style pages, a terminal, and native file/theme picker dialogs. Static HTML, CSS, and JavaScript, with no build step, runtime dependencies, or API keys.

## Preview

From the repository directory:

```sh
npm run dev
```

Open http://127.0.0.1:4173. Requires Python 3 for the local server. If that port is occupied, use `python3 -m http.server 4187 --bind 127.0.0.1 --directory site` instead. Serve the directory over HTTP; ES modules do not work by opening `index.html` as a file.

```sh
npm test
```

Tests use Node’s built-in test runner (Node 22+). No `npm install` is needed.

## Edit the content

- **Projects, social links, music, anime:** `site/js/content.js`. The explorer, project pages, filters, and terminal share this data.
- **About and other page copy:** `site/js/pages.js`.
- **Theme names, swatches, and sources:** `site/js/themes.js`. Theme colors are semantic variables in `site/styles.css`.

To publish a local project’s repository link, set its `repoUrl` in `content.js` to its public `https://github.com/n0thhhing/repository-name` URL. No template edits are needed. Keep it `null` until the repository is public. Local projects remain readable with no repository button. The site does not poll GitHub, so verify URLs when editing them.

Set `featured: true` to include a project on Home. Add a project entry with `id`, `name`, `category`, `description`, `tech`, `status`, `repoUrl`, and `details`; `snippet` is optional. Keep identifiers stable because `#projects/<id>` links are shareable.

Theme preferences are saved locally when browser storage is available. If you add a seventh theme, also add its ID to the early theme loader in `site/js/theme-init.js`. Theme transitions respect reduced-motion preferences. Neutral secondary-text colors are adjusted for readability; accent swatches follow the published palettes.

## Interactions

Use the explorer or file tabs to navigate, or type `help` in the terminal. The portfolio shell has a virtual home directory containing the page files, `projects/`, and `themes/`. It reads the same content as the website.

```text
ls                        list the page files and directories
cd projects               explore the project directory
cat rarm64.md              read a local project without opening a tab
open rarm64                open its project tab
cd ../themes              inspect the theme directory
cat panda.json             read a published palette
fetch                      show a themed personal profile
history                    review this session’s commands
```

`pwd`, `echo`, `whoami`, `about`, `projects`, `project <name>`, `art`, `music`, `anime`, `themes`, `theme <name>`, and `clear` are also available. `neofetch` and `fastfetch` are aliases for `fetch`. History and the current directory last for the current page session. The current directory appears in the prompt. File listings and help entries are clickable; completion suggestions fill the prompt.

- Up / Down: command history, preserving an unfinished command.
- Tab: complete a command, project ID, or theme ID. Repeated Tab can leave the field; Shift+Tab always moves backward.
- Tab after `cat`, `ls`, `cd`, or `open`: complete paths relative to the current directory, including `../` and `~/`.
- Ctrl+L: clear the terminal while preserving the current input. Ctrl+C cancels an unfinished command; Ctrl+U clears the input.
- Cmd/Ctrl+P: open the file picker. Type to filter pages and projects; Up / Down and Enter select a result.
- Escape: leave the terminal or close a picker/navigation drawer.
- Theme name in the status bar or Change theme in the project tree: open the centered theme picker. Up / Down moves between themes; Enter applies one.
- Explorer icon in the bottom left: toggle the project tree. On smaller screens it opens a keyboard-accessible drawer.
- Folder chevrons: collapse or expand branches in the project tree.
- Projects open in their own named tabs. The close button returns an active project tab to the project overview.
- Terminal buttons: collapse or restore the terminal.
- Terminal expand button: maximize or restore the dock. Opening a page or pressing Escape restores the editor.
- Drag the terminal’s top edge to resize it. The resize handle also accepts Up / Down, Home, and End when focused; double-click resets its height.

The music section is curated, not a live Spotify feed. The terminal handles only the listed commands against portfolio data. It cannot access the visitor’s filesystem or execute system commands. The site embeds no artwork, analytics, remote fonts, or media players.

## GitHub Pages

The workflow runs the unit tests and uploads **only `site/`**. Source documentation and tests stay outside the published artifact. Add this checkout to your GitHub repository, then choose **GitHub Actions** as the Pages source in repository settings. A push to `main` or a manual workflow run deploys it. All assets use relative paths, so it works at a repository subpath without configuration.

No remote repository or deployment was created by this implementation. No GitHub profile README is included.

## Palette credits

[Gruvbox Material](https://github.com/sainnhe/gruvbox-material), [Gruvbox](https://github.com/morhetz/gruvbox), [Panda](https://github.com/tinkertrain/panda-syntax-vscode), [Dracula](https://draculatheme.com/contribute), [Monokai Pro](https://monokai.pro/), and [Catppuccin Frappé](https://github.com/catppuccin/palette).
