// Real commit history aggregated from all local repositories and GitHub projects.
export function formatRelativeTime(dateInput) {
  const date = new Date(dateInput);
  const diffSec = Math.max(0, Math.floor((Date.now() - date.getTime()) / 1000));
  if (diffSec < 60) return 'just now';
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return diffMin === 1 ? '1 minute ago' : `${diffMin} minutes ago`;
  const diffHours = Math.floor(diffMin / 60);
  if (diffHours < 24) return diffHours === 1 ? '1 hour ago' : `${diffHours} hours ago`;
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 7) return diffDays === 1 ? '1 day ago' : `${diffDays} days ago`;
  const diffWeeks = Math.floor(diffDays / 7);
  if (diffWeeks < 5) return diffWeeks === 1 ? '1 week ago' : `${diffWeeks} weeks ago`;
  const diffMonths = Math.floor(diffDays / 30);
  if (diffMonths < 12) return diffMonths === 1 ? '1 month ago' : `${diffMonths} months ago`;
  const diffYears = Math.floor(diffDays / 365);
  return diffYears === 1 ? '1 year ago' : `${diffYears} years ago`;
}

export const rawCommits = [
  {
    "repo": "website",
    "repoName": "n0thhhing/website",
    "hash": "3c118f8",
    "date": "2026-10-17T01:20:26-04:00",
    "message": "fix(ui): format titlebar as project/worktree/branch and remove duplicate git from statusbar",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/website/commit/3c118f8"
  },
  {
    "repo": "website",
    "repoName": "n0thhhing/website",
    "hash": "e3c9bf0",
    "date": "2026-10-17T01:06:17-04:00",
    "message": "fix: adjust explorer scrollbar and add breathing room for badges",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/website/commit/e3c9bf0"
  },
  {
    "repo": "website",
    "repoName": "n0thhhing/website",
    "hash": "5d95593",
    "date": "2026-10-17T00:58:52-04:00",
    "message": "fix: indent projects tree, add movable windows/resizers without highlights, and implement interactive notifications",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/website/commit/5d95593"
  },
  {
    "repo": "website",
    "repoName": "n0thhhing/website",
    "hash": "c587c82",
    "date": "2026-10-17T00:50:01-04:00",
    "message": "feat: pixel-accurate Zed editor redesign with authentic project tree, tabs, Starship prompt, and dock controls",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/website/commit/c587c82"
  },
  {
    "repo": "website",
    "repoName": "n0thhhing/website",
    "hash": "b6c30b1",
    "date": "2026-10-17T00:33:54-04:00",
    "message": "feat: complete initial themed portfolio workspace",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/website/commit/b6c30b1"
  },
  {
    "repo": "website",
    "repoName": "n0thhhing/website",
    "hash": "ba993a3",
    "date": "2026-10-16T23:16:53-04:00",
    "message": "feat(terminal): add directory navigation (cd, pwd, dynamic prompt) and subdirectory listing for artwork and projects",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/website/commit/ba993a3"
  },
  {
    "repo": "website",
    "repoName": "n0thhhing/website",
    "hash": "9fee13c",
    "date": "2026-10-16T23:01:50-04:00",
    "message": "fix(music): replace anime osts with actual heavy rotation (redize, NEET, spawncamped, lantern)",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/website/commit/9fee13c"
  },
  {
    "repo": "website",
    "repoName": "n0thhhing/website",
    "hash": "ae61094",
    "date": "2026-10-16T22:57:53-04:00",
    "message": "feat(about,terminal): add dedicated About Me section and 15+ terminal commands",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/website/commit/ae61094"
  },
  {
    "repo": "website",
    "repoName": "n0thhhing/website",
    "hash": "0e597eb",
    "date": "2026-10-16T22:52:12-04:00",
    "message": "style(terminal): vertically center align avatar image with specs block in fetch",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/website/commit/0e597eb"
  },
  {
    "repo": "website",
    "repoName": "n0thhhing/website",
    "hash": "5f84f6b",
    "date": "2026-10-16T22:50:35-04:00",
    "message": "style(terminal): scale up avatar image to 190px and increase typography & palette size",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/website/commit/5f84f6b"
  },
  {
    "repo": "website",
    "repoName": "n0thhhing/website",
    "hash": "950c1c1",
    "date": "2026-10-16T22:46:23-04:00",
    "message": "feat(terminal): use actual avatar image in fetch command output",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/website/commit/950c1c1"
  },
  {
    "repo": "website",
    "repoName": "n0thhhing/website",
    "hash": "20b9a85",
    "date": "2026-10-16T22:43:42-04:00",
    "message": "fix(terminal): embed inline flex styling and cache buster to guarantee side-by-side neofetch layout",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/website/commit/20b9a85"
  },
  {
    "repo": "website",
    "repoName": "n0thhhing/website",
    "hash": "fc89a52",
    "date": "2026-10-16T22:42:22-04:00",
    "message": "fix(terminal): preserve pre-wrap formatting and implement robust two-column flex layout for fetch",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/website/commit/fc89a52"
  },
  {
    "repo": "website",
    "repoName": "n0thhhing/website",
    "hash": "df8a5fc",
    "date": "2026-10-16T22:37:38-04:00",
    "message": "feat(terminal,projects): add fetch, status, music, art commands and refine Wallify & hardware testbeds",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/website/commit/df8a5fc"
  },
  {
    "repo": "website",
    "repoName": "n0thhhing/website",
    "hash": "da70d25",
    "date": "2026-10-16T21:27:58-04:00",
    "message": "feat(social): add Instagram @levi.napz art showcase to navbar, footer, terminal, and github profile",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/website/commit/da70d25"
  },
  {
    "repo": "website",
    "repoName": "n0thhhing/website",
    "hash": "9b577b2",
    "date": "2026-10-16T21:23:56-04:00",
    "message": "feat(themes): add smooth 450ms cross-fade transitions and highlight artist background & Gruvbox Material devotion",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/website/commit/9b577b2"
  },
  {
    "repo": "website",
    "repoName": "n0thhhing/website",
    "hash": "bcd51c7",
    "date": "2026-10-16T21:19:45-04:00",
    "message": "fix(theme): eliminate green wash, dial in Gruvbox warm accents, and document lwasm Game Guardian origin",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/website/commit/bcd51c7"
  },
  {
    "repo": "website",
    "repoName": "n0thhhing/website",
    "hash": "6eb0d0f",
    "date": "2026-10-16T21:10:21-04:00",
    "message": "fix(themes): fix theme picker click handler and purge hardcoded neon colors",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/website/commit/6eb0d0f"
  },
  {
    "repo": "website",
    "repoName": "n0thhhing/website",
    "hash": "65f9ecc",
    "date": "2026-10-16T20:59:35-04:00",
    "message": "feat: add user favorite themes engine and graceful unreleased project badges",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/website/commit/65f9ecc"
  },
  {
    "repo": "website",
    "repoName": "n0thhhing/website",
    "hash": "e533b3e",
    "date": "2026-10-16T20:50:41-04:00",
    "message": "feat: align with actual GitHub profile, add star counts, ts-capstone, z-scanner, and metrics integration",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/website/commit/e533b3e"
  },
  {
    "repo": "website",
    "repoName": "n0thhhing/website",
    "hash": "dea29ab",
    "date": "2026-10-16T20:46:25-04:00",
    "message": "fix: replace fragile flex alignment with structured micro-card layout in skills matrix",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/website/commit/dea29ab"
  },
  {
    "repo": "website",
    "repoName": "n0thhhing/website",
    "hash": "fae0ed3",
    "date": "2026-10-16T20:39:48-04:00",
    "message": "docs: update task list completion",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/website/commit/fae0ed3"
  },
  {
    "repo": "website",
    "repoName": "n0thhhing/website",
    "hash": "d3b3797",
    "date": "2026-10-16T20:39:28-04:00",
    "message": "feat: initial portfolio website and github profile readme",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/website/commit/d3b3797"
  },
  {
    "repo": "Discord-rich-presence",
    "repoName": "n0thhhing/Discord-rich-presence",
    "hash": "d0b30cd",
    "date": "2026-10-14T17:10:59-04:00",
    "message": "feat: improve connection lifecycle, fix asset formatting, and enable buttons",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/Discord-rich-presence/commit/d0b30cd"
  },
  {
    "repo": "rarm64",
    "repoName": "rarm64 (local)",
    "hash": "c5826ca",
    "date": "2026-10-13T20:47:53-04:00",
    "message": "feat(arm64): support PAC, carry, ccmp/ccmn, and atomic memory ops with 73 automated tests",
    "author": "Levi",
    "url": null
  },
  {
    "repo": "rarm64",
    "repoName": "rarm64 (local)",
    "hash": "62c0539",
    "date": "2026-10-13T20:29:23-04:00",
    "message": "test: reach 64 automated tests with DP 3-source, 2-source, 1-source, unscaled/offset loads, Swift/Rust special symbols, and fat arch selection",
    "author": "Levi",
    "url": null
  },
  {
    "repo": "rarm64",
    "repoName": "rarm64 (local)",
    "hash": "3fc6801",
    "date": "2026-10-13T20:18:39-04:00",
    "message": "test: expand test suite to 52 tests with decoder fuzzing, demangler property tests, and Mach-O corruption fuzzing",
    "author": "Levi",
    "url": null
  },
  {
    "repo": "rarm64",
    "repoName": "rarm64 (local)",
    "hash": "7d31949",
    "date": "2026-10-13T20:07:47-04:00",
    "message": "test: add comprehensive decoder, demangler, and CLI integration tests with real macOS binary validation",
    "author": "Levi",
    "url": null
  },
  {
    "repo": "rarm64",
    "repoName": "rarm64 (local)",
    "hash": "863ef5b",
    "date": "2026-10-13T19:57:06-04:00",
    "message": "feat: add vector shifts/misc/ldst, system ops, dylib/object support, and terminal colors",
    "author": "Levi",
    "url": null
  },
  {
    "repo": "rarm64",
    "repoName": "rarm64 (local)",
    "hash": "c83b44a",
    "date": "2026-10-13T19:41:52-04:00",
    "message": "docs: add Arm MRS download and extraction steps to README",
    "author": "Levi",
    "url": null
  },
  {
    "repo": "rarm64",
    "repoName": "rarm64 (local)",
    "hash": "10776a9",
    "date": "2026-10-13T19:09:35-04:00",
    "message": "feat: add README, Advanced SIMD vector decoding, pure-Rust demangling, and chained fixups",
    "author": "Levi",
    "url": null
  },
  {
    "repo": "rarm64",
    "repoName": "rarm64 (local)",
    "hash": "5ee3ce7",
    "date": "2026-10-13T18:46:11-04:00",
    "message": "feat: complete ARM64 Mach-O disassembler with Arm 2026-09 MRS tables",
    "author": "Levi",
    "url": null
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "bc5abe2",
    "date": "2026-10-06T23:17:36-04:00",
    "message": "chore: checkpoint current work before audit cuts",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/bc5abe2"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "8669746",
    "date": "2026-10-06T22:53:00-04:00",
    "message": "Simplify metadata synchronization and player window lookup",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/8669746"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "4030ba2",
    "date": "2026-10-06T21:55:23-04:00",
    "message": "fix: use system Python without a virtual environment",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/4030ba2"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "2da2ee6",
    "date": "2026-10-06T21:54:47-04:00",
    "message": "fix: point basedpyright at project virtual environment",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/2da2ee6"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "9f0aea4",
    "date": "2026-10-06T21:53:03-04:00",
    "message": "fix: configure Python environment for sprite tools",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/9f0aea4"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "6a8fc10",
    "date": "2026-10-06T17:11:53-04:00",
    "message": "docs: add native widget previews",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/6a8fc10"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "084b2b1",
    "date": "2026-10-06T16:51:32-04:00",
    "message": "feat: isolate build variants and cache atomic app packaging",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/084b2b1"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "b14809a",
    "date": "2026-10-06T10:24:17-04:00",
    "message": "feat: update inspector controls and settings documentation",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/b14809a"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "1308486",
    "date": "2026-10-06T10:16:37-04:00",
    "message": "style: tighten settings spacing and clarify idle heading",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/1308486"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "70a8eb7",
    "date": "2026-10-06T10:14:05-04:00",
    "message": "refactor: clarify and organize settings controls",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/70a8eb7"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "b34072e",
    "date": "2026-10-06T10:08:59-04:00",
    "message": "feat: simplify widget menus and expose position lock",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/b34072e"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "a5a6955",
    "date": "2026-10-06T09:43:46-04:00",
    "message": "feat: remember widget placement per display",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/a5a6955"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "70bc3f5",
    "date": "2026-10-06T09:37:48-04:00",
    "message": "feat: configure widget behavior when music stops",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/70bc3f5"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "c0bec69",
    "date": "2026-10-06T09:36:12-04:00",
    "message": "feat: add widget position locking",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/c0bec69"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "274d768",
    "date": "2026-10-06T09:33:00-04:00",
    "message": "feat: make clickable media names optional",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/274d768"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "d441719",
    "date": "2026-10-06T09:30:14-04:00",
    "message": "feat: make track and artist names clickable",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/d441719"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "9552dc6",
    "date": "2026-10-05T21:48:55-04:00",
    "message": "docs: clarify metadata helper host explanation",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/9552dc6"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "1249f3b",
    "date": "2026-10-05T21:42:59-04:00",
    "message": "chore: suppress vendor diagnostics in clangd",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/1249f3b"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "f3a7b48",
    "date": "2026-10-05T21:37:57-04:00",
    "message": "fix: give native headers explicit clang compiler settings",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/f3a7b48"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "2427ac4",
    "date": "2026-10-05T21:27:40-04:00",
    "message": "fix: expose Inspector and ImGui compiler settings to clangd",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/2427ac4"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "55b7d49",
    "date": "2026-10-05T21:06:50-04:00",
    "message": "fix: expose Swift bridge and target settings to editors",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/55b7d49"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "7725486",
    "date": "2026-10-05T20:18:50-04:00",
    "message": "refactor: organize and explain media and rendering internals",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/7725486"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "6e9a764",
    "date": "2026-10-05T20:16:05-04:00",
    "message": "refactor: keep runtime sprite atlases with project assets",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/6e9a764"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "db76b61",
    "date": "2026-10-05T14:07:06-04:00",
    "message": "fix: match terminal widget size to display pixel scale",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/db76b61"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "68fceb1",
    "date": "2026-10-05T14:04:02-04:00",
    "message": "chore: remove tracked build output log",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/68fceb1"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "233a250",
    "date": "2026-10-05T14:02:41-04:00",
    "message": "fix: soften artwork glow on non-glass backgrounds",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/233a250"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "ceb6fac",
    "date": "2026-10-05T14:01:54-04:00",
    "message": "fix: detect terminal graphics protocol support directly",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/ceb6fac"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "be02469",
    "date": "2026-10-05T13:58:22-04:00",
    "message": "feat: add Kitty CLI display using shared Swift renderer",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/be02469"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "0a11c4c",
    "date": "2026-10-05T13:46:21-04:00",
    "message": "perf: cache build targets and enable incremental Swift compilation",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/0a11c4c"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "7493cdc",
    "date": "2026-10-05T13:39:21-04:00",
    "message": "feat: animate transitions between waveform and progress fill",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/7493cdc"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "641f452",
    "date": "2026-10-05T13:02:13-04:00",
    "message": "fix: wake idle transitions and refresh Spotify metadata targets",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/641f452"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "bf5170b",
    "date": "2026-10-01T11:08:37-04:00",
    "message": "fix: expose quiet audio waveform motion and verify GPU output",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/bf5170b"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "335f788",
    "date": "2026-10-01T11:02:04-04:00",
    "message": "fix: refine waveform bars and progress track",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/335f788"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "f1756a9",
    "date": "2026-10-01T10:59:16-04:00",
    "message": "feat: add readable live waveform to elapsed progress",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/f1756a9"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "0e67500",
    "date": "2026-10-01T10:34:21-04:00",
    "message": "fix: avoid image focus windows and log visual lifecycle",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/0e67500"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "1ea9da9",
    "date": "2026-10-01T10:25:37-04:00",
    "message": "fix: smooth and synchronize widget transitions",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/1ea9da9"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "c0efd7a",
    "date": "2026-10-01T10:17:05-04:00",
    "message": "test: record inconclusive snap SIMD trial and guard ties",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/c0efd7a"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "52e95a2",
    "date": "2026-10-01T10:15:12-04:00",
    "message": "test: benchmark snap target calculations",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/52e95a2"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "9a28ef5",
    "date": "2026-10-01T10:11:22-04:00",
    "message": "test: verify complete SIMD layout outputs and performance",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/9a28ef5"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "57aa31c",
    "date": "2026-10-01T09:30:31-04:00",
    "message": "perf: vectorize layout interpolation with SIMD",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/57aa31c"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "6a2d374",
    "date": "2026-10-01T09:29:03-04:00",
    "message": "test: benchmark layout and artwork math",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/6a2d374"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "11bf10d",
    "date": "2026-10-01T09:24:46-04:00",
    "message": "feat: show live performance and deduplicate snap previews",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/11bf10d"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "6b320cf",
    "date": "2026-10-01T09:17:25-04:00",
    "message": "perf: move widget without redundant Metal redraws",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/6b320cf"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "13ae1fb",
    "date": "2026-10-01T09:11:49-04:00",
    "message": "docs: record playback CPU benchmark improvement",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/13ae1fb"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "cebb08d",
    "date": "2026-10-01T09:11:05-04:00",
    "message": "perf: avoid Foundation formatting in playback frames",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/cebb08d"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "9401dd3",
    "date": "2026-10-01T09:04:17-04:00",
    "message": "docs: record measured rendering memory improvements",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/9401dd3"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "cf103e0",
    "date": "2026-10-01T09:01:30-04:00",
    "message": "perf: load pet sprite atlases only when visible",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/cf103e0"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "689b45c",
    "date": "2026-10-01T09:00:27-04:00",
    "message": "perf: size text raster scratch to rendered labels",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/689b45c"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "7a0e9dd",
    "date": "2026-10-01T08:58:54-04:00",
    "message": "test: measure frame preparation and texture memory",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/7a0e9dd"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "0c02902",
    "date": "2026-10-01T08:49:25-04:00",
    "message": "fix: animate paused artwork brightness across transitions",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/0c02902"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "d7f50d8",
    "date": "2026-10-01T08:46:28-04:00",
    "message": "fix: prepare the Inspector dependency only in the build script",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/d7f50d8"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "f60aae1",
    "date": "2026-10-01T08:42:05-04:00",
    "message": "fix: clear old media state and reject replies after source changes",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/f60aae1"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "49b25d6",
    "date": "2026-10-01T08:39:27-04:00",
    "message": "fix: publish Now Playing artwork changes and finish missing-artwork retries",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/49b25d6"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "65e67a1",
    "date": "2026-10-01T08:34:36-04:00",
    "message": "fix: reset cleared playback and respect canceled clicks and paused dimming",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/65e67a1"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "ee9ac3b",
    "date": "2026-10-01T08:18:18-04:00",
    "message": "docs: clarify native workaround rationale",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/ee9ac3b"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "6880801",
    "date": "2026-10-01T07:40:31-04:00",
    "message": "docs: explain native workarounds and rendering tricks",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/6880801"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "6175b3e",
    "date": "2026-09-30T21:58:32-04:00",
    "message": "docs: record Swift scene lock contention boundary",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/6175b3e"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "3d772e4",
    "date": "2026-09-30T21:56:14-04:00",
    "message": "refactor: retire Zig sources and complete Swift verification",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/3d772e4"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "6721610",
    "date": "2026-09-30T21:52:01-04:00",
    "message": "feat: launch and package Wallify as a standalone Swift app",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/6721610"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "321086f",
    "date": "2026-09-30T21:44:36-04:00",
    "message": "refactor: migrate frame scheduling and synchronize Swift state",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/321086f"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "427e995",
    "date": "2026-09-30T21:39:51-04:00",
    "message": "refactor: migrate scene composition and asset caches to Swift",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/427e995"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "faf742c",
    "date": "2026-09-30T21:28:54-04:00",
    "message": "refactor: migrate dragging seeking and click actions to Swift",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/faf742c"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "eff4df2",
    "date": "2026-09-30T21:26:09-04:00",
    "message": "refactor: migrate media coordination and helper lifecycle to Swift",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/eff4df2"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "954ce06",
    "date": "2026-09-30T21:16:37-04:00",
    "message": "refactor: migrate configuration and widget state coordination to Swift",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/954ce06"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "7e2408f",
    "date": "2026-09-30T21:10:51-04:00",
    "message": "refactor: move shared widget state storage to Swift",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/7e2408f"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "329d519",
    "date": "2026-09-30T21:02:42-04:00",
    "message": "docs: record Swift graphics and snapping migration progress",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/329d519"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "119796b",
    "date": "2026-09-30T21:01:54-04:00",
    "message": "test: verify Swift pet keyframes on a native Metal window",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/119796b"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "f499ee0",
    "date": "2026-09-30T20:56:26-04:00",
    "message": "refactor: migrate idle companion keyframe sampling to Swift",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/f499ee0"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "c0d3964",
    "date": "2026-09-30T20:54:40-04:00",
    "message": "refactor: share Swift GPU draw command construction",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/c0d3964"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "5326c6c",
    "date": "2026-09-30T20:53:47-04:00",
    "message": "refactor: migrate frame wakeups and icon motion to Swift",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/5326c6c"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "11becdd",
    "date": "2026-09-30T20:51:36-04:00",
    "message": "refactor: migrate sprite decoding and pet rendering to Swift",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/11becdd"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "5624fc8",
    "date": "2026-09-30T20:47:24-04:00",
    "message": "refactor: migrate desktop grid snap solver to Swift",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/5624fc8"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "4f96db1",
    "date": "2026-09-30T20:41:07-04:00",
    "message": "docs: update Swift migration progress and remaining responsibilities",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/4f96db1"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "18c38b4",
    "date": "2026-09-30T20:39:26-04:00",
    "message": "refactor: migrate media command worker to Swift dispatch queue",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/18c38b4"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "03e527c",
    "date": "2026-09-30T20:36:26-04:00",
    "message": "refactor: migrate widget layout and hit testing to Swift",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/03e527c"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "fa040ab",
    "date": "2026-09-30T20:33:32-04:00",
    "message": "refactor: migrate media payload parsing to Swift",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/fa040ab"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "8fe18b7",
    "date": "2026-09-30T20:30:12-04:00",
    "message": "refactor: migrate playback clock and reconciliation to Swift",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/8fe18b7"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "5c3d609",
    "date": "2026-09-30T20:28:43-04:00",
    "message": "refactor: migrate artwork downloads to Swift",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/5c3d609"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "4ba6581",
    "date": "2026-09-30T20:25:32-04:00",
    "message": "fix: synchronize native playback state without stale metadata delay",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/4ba6581"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "edf91fe",
    "date": "2026-09-30T20:18:14-04:00",
    "message": "refactor: migrate context menu to Swift and map remaining port",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/edf91fe"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "a680bee",
    "date": "2026-09-30T20:11:19-04:00",
    "message": "refactor: migrate desktop discovery and snap preview to Swift",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/a680bee"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "6b202ef",
    "date": "2026-09-30T20:03:49-04:00",
    "message": "refactor: migrate Metal renderer to Swift",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/6b202ef"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "d28d955",
    "date": "2026-09-30T19:14:07-04:00",
    "message": "fix: emit helper PID for notification wakeups",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/d28d955"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "f224bb7",
    "date": "2026-09-30T19:12:12-04:00",
    "message": "refactor: migrate desktop glass and panel positioning to Swift",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/f224bb7"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "85bec5b",
    "date": "2026-09-30T19:08:01-04:00",
    "message": "refactor: migrate text and image rasterization to Swift",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/85bec5b"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "12b8c97",
    "date": "2026-09-30T19:03:13-04:00",
    "message": "test: use absolute path for metadata loader check",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/12b8c97"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "a41e49e",
    "date": "2026-09-30T19:02:25-04:00",
    "message": "refactor: migrate Now Playing helper to Swift",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/a41e49e"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "1478648",
    "date": "2026-09-30T16:43:50-04:00",
    "message": "refactor: migrate idle compositor to Swift",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/1478648"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "32d95ec",
    "date": "2026-09-30T16:38:13-04:00",
    "message": "refactor: migrate Spotifast transport to Swift",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/32d95ec"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "4f0a5e5",
    "date": "2026-09-30T16:34:01-04:00",
    "message": "refactor: migrate Spotify integration to Swift",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/4f0a5e5"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "e4eaae5",
    "date": "2026-09-30T16:23:42-04:00",
    "message": "refactor: migrate system media commands to Swift",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/e4eaae5"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "2f4a212",
    "date": "2026-09-30T16:19:36-04:00",
    "message": "refactor: migrate hardware media key interception to Swift",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/2f4a212"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "7e9b910",
    "date": "2026-09-30T16:15:03-04:00",
    "message": "refactor: migrate desktop panel and input view to Swift",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/7e9b910"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "45c1c8d",
    "date": "2026-09-30T16:08:11-04:00",
    "message": "fix: describe pending frames accurately in inspector",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/45c1c8d"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "f7da113",
    "date": "2026-09-30T16:04:03-04:00",
    "message": "refactor: migrate configuration startup to Swift",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/f7da113"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "f71fd16",
    "date": "2026-09-30T16:00:09-04:00",
    "message": "refactor: move app lifecycle and menu bar to Swift",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/f71fd16"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "1493c3d",
    "date": "2026-09-30T15:47:51-04:00",
    "message": "refactor: migrate settings window to SwiftUI",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/1493c3d"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "c9ac6c0",
    "date": "2026-09-30T14:14:09-04:00",
    "message": "feat: improve menu bar metadata and playback controls",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/c9ac6c0"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "70951ad",
    "date": "2026-09-30T14:14:09-04:00",
    "message": "fix: accept external playback changes without a second snapshot",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/70951ad"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "8d39667",
    "date": "2026-09-30T09:59:15-04:00",
    "message": "fix: preserve idle animation y coordinates",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/8d39667"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "6d58041",
    "date": "2026-09-30T09:54:31-04:00",
    "message": "fix: ground sleeping pets and raise sleep effects",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/6d58041"
  },
  {
    "repo": "lwasm",
    "repoName": "n0thhhing/lwasm",
    "hash": "3eb330e",
    "date": "2026-09-29T15:40:27-04:00",
    "message": "Update CI to WABT 1.0.42",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/lwasm/commit/3eb330e"
  },
  {
    "repo": "lwasm",
    "repoName": "n0thhhing/lwasm",
    "hash": "321dec2",
    "date": "2026-09-29T15:38:53-04:00",
    "message": "Pin compatible WABT in CI",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/lwasm/commit/321dec2"
  },
  {
    "repo": "lwasm",
    "repoName": "n0thhhing/lwasm",
    "hash": "a432fc2",
    "date": "2026-09-29T15:34:12-04:00",
    "message": "Improve repository README",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/lwasm/commit/a432fc2"
  },
  {
    "repo": "lwasm",
    "repoName": "n0thhhing/lwasm",
    "hash": "5f9c2e8",
    "date": "2026-09-29T15:31:49-04:00",
    "message": "Initial release",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/lwasm/commit/5f9c2e8"
  },
  {
    "repo": "Offset-updater",
    "repoName": "n0thhhing/Offset-updater",
    "hash": "251014b",
    "date": "2026-09-28T18:44:07-04:00",
    "message": "Rewrite offset resolver with native verified scanning",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/Offset-updater/commit/251014b"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "eae0193",
    "date": "2026-09-21T16:27:34-04:00",
    "message": "Invalidate static cache when artwork changes",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/eae0193"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "45a135f",
    "date": "2026-09-21T16:27:29-04:00",
    "message": "Track artwork texture generation",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/45a135f"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "1ff8afe",
    "date": "2026-09-21T16:26:50-04:00",
    "message": "Fix static cache render block structure",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/1ff8afe"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "a44175c",
    "date": "2026-09-21T16:26:36-04:00",
    "message": "Cache static render commands in Zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/a44175c"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "0efb78a",
    "date": "2026-09-21T16:26:21-04:00",
    "message": "Fix duplicate text scratch declaration",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/0efb78a"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "5fa0c1c",
    "date": "2026-09-21T16:26:13-04:00",
    "message": "Reduce text cache memory footprint",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/5fa0c1c"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "e1c76d3",
    "date": "2026-09-21T16:14:38-04:00",
    "message": "Restore Spotify artwork generation counter",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/e1c76d3"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "2a5bccd",
    "date": "2026-09-21T16:14:33-04:00",
    "message": "Restore shared text raster scratch buffer",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/2a5bccd"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "cbec3f5",
    "date": "2026-09-21T16:11:51-04:00",
    "message": "Restore pending context menu event declaration",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/cbec3f5"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "5494e02",
    "date": "2026-09-21T16:10:48-04:00",
    "message": "Document renderer and interaction invariants",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/5494e02"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "475c98c",
    "date": "2026-09-21T16:10:45-04:00",
    "message": "Document renderer and interaction invariants",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/475c98c"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "a883dda",
    "date": "2026-09-21T16:10:41-04:00",
    "message": "Document renderer and interaction invariants",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/a883dda"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "463db3f",
    "date": "2026-09-21T16:10:38-04:00",
    "message": "Document renderer and interaction invariants",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/463db3f"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "c60b56d",
    "date": "2026-09-21T16:10:35-04:00",
    "message": "Document renderer and interaction invariants",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/c60b56d"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "4b8ceed",
    "date": "2026-09-21T16:10:08-04:00",
    "message": "Fix async animation comment-pass syntax",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/4b8ceed"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "935bca5",
    "date": "2026-09-21T16:09:45-04:00",
    "message": "Document resource ownership and lifetime",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/935bca5"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "4dfaec6",
    "date": "2026-09-21T16:09:42-04:00",
    "message": "Document resource ownership and lifetime",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/4dfaec6"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "eb4ccaa",
    "date": "2026-09-21T16:09:39-04:00",
    "message": "Document resource ownership and lifetime",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/eb4ccaa"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "b3e8aa6",
    "date": "2026-09-21T16:09:36-04:00",
    "message": "Document resource ownership and lifetime",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/b3e8aa6"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "a929b42",
    "date": "2026-09-21T16:09:32-04:00",
    "message": "Document resource ownership and lifetime",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/a929b42"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "3d38fb5",
    "date": "2026-09-21T16:09:28-04:00",
    "message": "Document resource ownership and lifetime",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/3d38fb5"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "4d99e04",
    "date": "2026-09-21T16:09:24-04:00",
    "message": "Document resource ownership and lifetime",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/4d99e04"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "d8abb6b",
    "date": "2026-09-21T16:04:36-04:00",
    "message": "Release cached MediaRemote CF keys at shutdown",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/d8abb6b"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "99e5a5a",
    "date": "2026-09-21T15:54:31-04:00",
    "message": "Remove stale Inspector symbol reference",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/99e5a5a"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "c99e106",
    "date": "2026-09-21T15:53:30-04:00",
    "message": "Use shared Inspector bridge in Settings",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/c99e106"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "cdf21a7",
    "date": "2026-09-21T15:53:22-04:00",
    "message": "Add build-safe Inspector bridge",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/cdf21a7"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "76e3aad",
    "date": "2026-09-21T15:53:18-04:00",
    "message": "Fix release inspector linkage and menu item ownership",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/76e3aad"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "4c16e8a",
    "date": "2026-09-21T15:51:12-04:00",
    "message": "Keep menu playback status ABI-safe",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/4c16e8a"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "e0ee293",
    "date": "2026-09-21T15:51:00-04:00",
    "message": "Show occlusion state in inspector header",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/e0ee293"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "d3948d4",
    "date": "2026-09-21T15:50:55-04:00",
    "message": "Fix menu playback title",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/d3948d4"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "ae9820e",
    "date": "2026-09-21T15:50:49-04:00",
    "message": "Show live playback status in menu bar",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/ae9820e"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "89ee291",
    "date": "2026-09-21T15:50:35-04:00",
    "message": "Fix new Settings section syntax and sizing",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/89ee291"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "722f113",
    "date": "2026-09-21T15:50:12-04:00",
    "message": "Correct menu item initializer brackets",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/722f113"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "ab0a1bb",
    "date": "2026-09-21T15:50:00-04:00",
    "message": "Fix status menu Objective-C syntax",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/ab0a1bb"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "0a4e624",
    "date": "2026-09-21T15:49:48-04:00",
    "message": "Document app controls and diagnostics",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/0a4e624"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "6a8934a",
    "date": "2026-09-21T15:49:38-04:00",
    "message": "Document menu bar and inspector controls",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/6a8934a"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "cbbbac8",
    "date": "2026-09-21T15:49:10-04:00",
    "message": "Sync settings sidebar and ServiceManagement API",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/cbbbac8"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "29a7ac9",
    "date": "2026-09-21T15:48:57-04:00",
    "message": "Show actual renderer draw-call average",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/29a7ac9"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "24a6e78",
    "date": "2026-09-21T15:48:52-04:00",
    "message": "Populate renderer draw-call stats",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/24a6e78"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "7c7f8c1",
    "date": "2026-09-21T15:48:49-04:00",
    "message": "Expose renderer draw-call counter",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/7c7f8c1"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "47b0d58",
    "date": "2026-09-21T15:48:33-04:00",
    "message": "Add performance and cache inspector tab",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/47b0d58"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "32c6520",
    "date": "2026-09-21T15:48:21-04:00",
    "message": "Track static cache rebuild telemetry",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/32c6520"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "6eace20",
    "date": "2026-09-21T15:48:16-04:00",
    "message": "Expose static cache telemetry",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/6eace20"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "d56fbc4",
    "date": "2026-09-21T15:48:07-04:00",
    "message": "Link ServiceManagement framework",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/d56fbc4"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "b8236e8",
    "date": "2026-09-21T15:48:01-04:00",
    "message": "Fix menu idle mapping and inspector availability",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/b8236e8"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "9cd93bb",
    "date": "2026-09-21T15:47:51-04:00",
    "message": "Add performance page, inspector access, and login controls",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/9cd93bb"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "416959d",
    "date": "2026-09-21T15:47:35-04:00",
    "message": "Add performance and system settings UI",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/416959d"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "50fc782",
    "date": "2026-09-21T15:47:18-04:00",
    "message": "Add performance and system setting sections",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/50fc782"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "dd0f809",
    "date": "2026-09-21T15:46:52-04:00",
    "message": "Add SMAppService launch at login",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/dd0f809"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "fa3311d",
    "date": "2026-09-21T15:46:45-04:00",
    "message": "Add login item settings API",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/fa3311d"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "3899844",
    "date": "2026-09-21T15:46:14-04:00",
    "message": "Fix menu playback snapshot field",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/3899844"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "77f59d0",
    "date": "2026-09-21T15:46:05-04:00",
    "message": "Expose playback state in settings snapshot",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/77f59d0"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "50a3fbe",
    "date": "2026-09-21T15:45:46-04:00",
    "message": "Add playback state to settings snapshot",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/50a3fbe"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "035fd43",
    "date": "2026-09-21T15:45:32-04:00",
    "message": "Wire menu playback actions correctly",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/035fd43"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "95ef856",
    "date": "2026-09-21T15:45:17-04:00",
    "message": "Expose menu playback controls",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/95ef856"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "6039626",
    "date": "2026-09-21T15:45:01-04:00",
    "message": "Expand Wallify menu bar controls",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/6039626"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "701bdbb",
    "date": "2026-09-21T15:38:06-04:00",
    "message": "Avoid per-frame resize logging",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/701bdbb"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "f4f0945",
    "date": "2026-09-21T15:37:52-04:00",
    "message": "Correct renderer profiling draw-call count",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/f4f0945"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "bd1ec0c",
    "date": "2026-09-21T15:37:43-04:00",
    "message": "Correct documented widget and idle modes",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/bd1ec0c"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "245f9c4",
    "date": "2026-09-21T15:37:31-04:00",
    "message": "Document renderer cache occlusion and profiling",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/245f9c4"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "0223e50",
    "date": "2026-09-21T15:37:23-04:00",
    "message": "Document renderer power and performance model",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/0223e50"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "ee21c0a",
    "date": "2026-09-21T15:37:15-04:00",
    "message": "Document animation budget and occlusion scheduler",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/ee21c0a"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "2068e0f",
    "date": "2026-09-21T15:37:03-04:00",
    "message": "Add native renderer lifecycle logs",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/2068e0f"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "8d6c6ce",
    "date": "2026-09-21T15:36:43-04:00",
    "message": "Log window visibility power state",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/8d6c6ce"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "b2e9861",
    "date": "2026-09-21T15:34:58-04:00",
    "message": "Avoid wakeups while window is occluded",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/b2e9861"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "7f15801",
    "date": "2026-09-21T15:34:46-04:00",
    "message": "Sleep renderer while window is occluded",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/7f15801"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "e0f9627",
    "date": "2026-09-21T15:34:40-04:00",
    "message": "Export native window visibility hook",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/e0f9627"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "7e32c96",
    "date": "2026-09-21T15:34:26-04:00",
    "message": "Sleep animation loop while widget is occluded",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/7e32c96"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "f9cbca4",
    "date": "2026-09-21T15:34:21-04:00",
    "message": "Track native window occlusion state",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/f9cbca4"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "1bb2ce0",
    "date": "2026-09-21T15:32:17-04:00",
    "message": "Smooth short animations with a 30 FPS budget",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/1bb2ce0"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "9c41c44",
    "date": "2026-09-21T15:31:43-04:00",
    "message": "Smooth ambient playback to 20 FPS",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/9c41c44"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "0b14acb",
    "date": "2026-09-21T15:29:16-04:00",
    "message": "Fix dynamic player elapsed expression",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/0b14acb"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "f5c5f85",
    "date": "2026-09-21T15:28:33-04:00",
    "message": "Fix ARC texture cache build errors",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/f5c5f85"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "08271c9",
    "date": "2026-09-21T15:27:49-04:00",
    "message": "Keep hidden controls out of dynamic hover rendering",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/08271c9"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "c441bb8",
    "date": "2026-09-21T15:27:27-04:00",
    "message": "Lower ambient rendering cadence to 15 FPS",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/c441bb8"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "d9107dc",
    "date": "2026-09-21T15:27:17-04:00",
    "message": "Bake artwork glow at half resolution",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/d9107dc"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "1e82fb6",
    "date": "2026-09-21T15:27:08-04:00",
    "message": "Reduce artwork glow bake resolution",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/1e82fb6"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "a549dde",
    "date": "2026-09-21T15:26:19-04:00",
    "message": "Include math declarations for Metal cache sizing",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/a549dde"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "381c5f9",
    "date": "2026-09-21T15:26:04-04:00",
    "message": "Reduce track transition GPU frame rate",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/381c5f9"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "6389b5b",
    "date": "2026-09-21T15:25:55-04:00",
    "message": "Split player rendering into cached static scene",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/6389b5b"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "d5cef17",
    "date": "2026-09-21T15:25:42-04:00",
    "message": "Split player rendering into static and dynamic passes",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/d5cef17"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "0697bbe",
    "date": "2026-09-21T15:25:29-04:00",
    "message": "Cache static Metal scene between frames",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/0697bbe"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "1ad8b48",
    "date": "2026-09-21T15:25:07-04:00",
    "message": "Expose split scene presentation",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/1ad8b48"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "9ed593e",
    "date": "2026-09-21T15:25:03-04:00",
    "message": "Add split static dynamic canvas submission",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/9ed593e"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "8ba75cb",
    "date": "2026-09-21T15:24:58-04:00",
    "message": "Reserve texture slot for static scene cache",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/8ba75cb"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "bc0c4b3",
    "date": "2026-09-21T15:22:25-04:00",
    "message": "Add missing layout cache fields",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/bc0c4b3"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "edd9265",
    "date": "2026-09-21T15:21:32-04:00",
    "message": "Skip SDF work for plain quads",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/edd9265"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "615aaf5",
    "date": "2026-09-21T15:21:08-04:00",
    "message": "Avoid zeroing every GPU draw command",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/615aaf5"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "a11e6a0",
    "date": "2026-09-21T15:20:57-04:00",
    "message": "Cache constant artwork glow extent",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/a11e6a0"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "af95907",
    "date": "2026-09-21T15:20:52-04:00",
    "message": "Cache unchanged widget layout geometry",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/af95907"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "adc0230",
    "date": "2026-09-21T15:20:45-04:00",
    "message": "Speed up hot text cache lookups",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/adc0230"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "35b6667",
    "date": "2026-09-21T15:20:38-04:00",
    "message": "Reduce playback toggle animation CPU rate",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/35b6667"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "ba25ecc",
    "date": "2026-09-21T15:18:05-04:00",
    "message": "Fix native glass clip type inference",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/ba25ecc"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "966c446",
    "date": "2026-09-21T15:16:17-04:00",
    "message": "Fix empty native glass clip rectangle",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/966c446"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "20179ae",
    "date": "2026-09-21T15:16:12-04:00",
    "message": "Fix unused artwork ease parameter",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/20179ae"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "7b494de",
    "date": "2026-09-21T15:16:08-04:00",
    "message": "Fix Metal anti-aliasing variable scope",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/7b494de"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "46603bd",
    "date": "2026-09-21T14:20:34-04:00",
    "message": "perf: fold artwork dimming into texture pass",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/46603bd"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "0fa9bef",
    "date": "2026-09-21T14:20:29-04:00",
    "message": "perf: support tinted texture draws",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/0fa9bef"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "278acb4",
    "date": "2026-09-21T14:20:06-04:00",
    "message": "perf: skip coverage math for native glass quads",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/278acb4"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "b187966",
    "date": "2026-09-21T14:19:55-04:00",
    "message": "perf: fast-path rectangular shader geometry",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/b187966"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "59f07cf",
    "date": "2026-09-21T14:19:50-04:00",
    "message": "perf: avoid duplicate native glass clip shader work",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/59f07cf"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "0d31bd6",
    "date": "2026-09-21T14:19:47-04:00",
    "message": "perf: replace cubic pow in mode animation",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/0d31bd6"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "65dbef8",
    "date": "2026-09-21T14:19:43-04:00",
    "message": "perf: replace cubic pow in player layout",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/65dbef8"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "6291683",
    "date": "2026-09-21T14:15:36-04:00",
    "message": "perf: cap ambient aurora updates at 20 fps",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/6291683"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "086795b",
    "date": "2026-09-21T14:15:28-04:00",
    "message": "perf: pace active ambient rendering below 60 fps",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/086795b"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "71af70b",
    "date": "2026-09-21T14:06:32-04:00",
    "message": "fix: correct idle compositor rendering and keyframe timing",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/71af70b"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "691d26c",
    "date": "2026-09-21T14:06:30-04:00",
    "message": "fix: correct idle compositor rendering and keyframe timing",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/691d26c"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "e2a9dad",
    "date": "2026-09-21T14:03:32-04:00",
    "message": "Add Core Animation idle compositor",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/e2a9dad"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "03f2beb",
    "date": "2026-09-21T14:03:24-04:00",
    "message": "Integrate native idle animation compositor",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/03f2beb"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "d62e8d2",
    "date": "2026-09-21T13:49:43-04:00",
    "message": "perf: batch pet effect pixels and skip redundant presentation work",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/d62e8d2"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "fed7124",
    "date": "2026-09-21T13:21:19-04:00",
    "message": "chore: configure Zed debug and CPU profiling launches",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/fed7124"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "8479ed0",
    "date": "2026-09-21T13:17:51-04:00",
    "message": "perf: skip invisible animations and reuse text during morphs",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/8479ed0"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "1fff3e7",
    "date": "2026-09-21T13:17:51-04:00",
    "message": "test: repair Spotify and context menu regression coverage",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/1fff3e7"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "2408072",
    "date": "2026-09-21T13:13:29-04:00",
    "message": "perf: coalesce frame wakeups and pace idle animations",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/2408072"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "b6e7421",
    "date": "2026-09-21T13:10:27-04:00",
    "message": "fix: restore intact context menu source",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/b6e7421"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "171c83b",
    "date": "2026-09-21T13:09:22-04:00",
    "message": "fix: restore application target for quit menu item",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/171c83b"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "338ba9c",
    "date": "2026-09-21T13:08:23-04:00",
    "message": "test: cover live Spotify playback idle state",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/338ba9c"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "244ae64",
    "date": "2026-09-21T13:08:00-04:00",
    "message": "fix: avoid app activation disrupting context menu tracking",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/244ae64"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "32fbde8",
    "date": "2026-09-21T13:07:57-04:00",
    "message": "fix: present context menu from right mouse down",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/32fbde8"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "17a19ad",
    "date": "2026-09-21T13:07:48-04:00",
    "message": "fix: keep Spotify active from live playback state",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/17a19ad"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "e4f8b8f",
    "date": "2026-09-21T13:06:27-04:00",
    "message": "fix: tolerate transient Spotify metadata misses",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/e4f8b8f"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "6442da5",
    "date": "2026-09-21T13:03:52-04:00",
    "message": "perf: reduce Now Playing notification fallback",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/6442da5"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "36d2e52",
    "date": "2026-09-21T13:03:49-04:00",
    "message": "perf: slow media recovery polling",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/36d2e52"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "9a99486",
    "date": "2026-09-21T13:03:39-04:00",
    "message": "perf: wake animation loop for menu actions",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/9a99486"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "3cbbda0",
    "date": "2026-09-21T13:03:36-04:00",
    "message": "perf: make idle animation loop event-driven",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/3cbbda0"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "18d10c3",
    "date": "2026-09-21T13:03:33-04:00",
    "message": "perf: initialize event-driven frame wakeup",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/18d10c3"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "19fbf0d",
    "date": "2026-09-21T13:03:02-04:00",
    "message": "perf: wake animation loop only on new frame requests",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/19fbf0d"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "8b9efd9",
    "date": "2026-09-21T13:02:54-04:00",
    "message": "perf: add event-driven frame wakeup",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/8b9efd9"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "71006cb",
    "date": "2026-09-21T13:00:38-04:00",
    "message": "perf: reduce metadata polling fallback frequency",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/71006cb"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "7c2ef88",
    "date": "2026-09-21T12:58:32-04:00",
    "message": "test: correct Spotify query regression assertions",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/7c2ef88"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "4cf6fbd",
    "date": "2026-09-21T12:58:18-04:00",
    "message": "fix: do not treat Spotify artwork errors as no track",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/4cf6fbd"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "bbb21e2",
    "date": "2026-09-21T12:57:48-04:00",
    "message": "test: cover event-backed context menu tracking",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/bbb21e2"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "abb3fc9",
    "date": "2026-09-21T12:57:39-04:00",
    "message": "fix: present context menu on right mouse up",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/abb3fc9"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "3fa3f5f",
    "date": "2026-09-21T12:57:25-04:00",
    "message": "fix: launch official Spotify app explicitly",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/3fa3f5f"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "76149d8",
    "date": "2026-09-21T12:54:52-04:00",
    "message": "fix: track context menu from originating view",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/76149d8"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "1b2ad41",
    "date": "2026-09-21T12:54:49-04:00",
    "message": "fix: expose context menu source view",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/1b2ad41"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "3d41814",
    "date": "2026-09-21T12:54:41-04:00",
    "message": "fix: give context menu its originating view",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/3d41814"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "67c3699",
    "date": "2026-09-21T12:54:24-04:00",
    "message": "fix: keep Spotify track presence across query hiccups",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/67c3699"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "6934ce7",
    "date": "2026-09-21T12:54:14-04:00",
    "message": "fix: make Spotify idle state explicit",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/6934ce7"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "c67d4cf",
    "date": "2026-09-21T12:49:50-04:00",
    "message": "test: make context menu threading regression test meaningful",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/c67d4cf"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "536557a",
    "date": "2026-09-21T12:49:41-04:00",
    "message": "test: cover right-click input routing",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/536557a"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "95a453c",
    "date": "2026-09-21T12:49:18-04:00",
    "message": "fix: present context menu in right-click event",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/95a453c"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "8a0ef64",
    "date": "2026-09-21T12:46:39-04:00",
    "message": "fix: keep native glass visible in idle mode",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/8a0ef64"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "b83ec87",
    "date": "2026-09-21T12:45:11-04:00",
    "message": "fix: correct context menu event type",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/b83ec87"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "44e30b4",
    "date": "2026-09-21T12:44:01-04:00",
    "message": "fix: invoke AppKit context menu with correct receiver",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/44e30b4"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "dbb5dd2",
    "date": "2026-09-21T12:43:48-04:00",
    "message": "fix: make context menu hover immediate",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/dbb5dd2"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "3ec4792",
    "date": "2026-09-21T12:43:42-04:00",
    "message": "fix: expose context menu event to AppKit menu",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/3ec4792"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "a041424",
    "date": "2026-09-21T12:43:39-04:00",
    "message": "fix: preserve right-click event for context menu tracking",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/a041424"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "1b151e2",
    "date": "2026-09-21T12:39:53-04:00",
    "message": "fix: refresh delayed Now Playing artwork safely",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/1b151e2"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "656f223",
    "date": "2026-09-21T12:39:35-04:00",
    "message": "fix: keep inspector size stable during widget clicks",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/656f223"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "41b07db",
    "date": "2026-09-21T12:36:30-04:00",
    "message": "fix: preserve helper PID output",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/41b07db"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "c7f67b5",
    "date": "2026-09-21T12:36:20-04:00",
    "message": "fix: keep all MediaRemote observers off main queue",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/c7f67b5"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "6f36998",
    "date": "2026-09-21T12:35:50-04:00",
    "message": "perf: wake Now Playing helper from MediaRemote",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/6f36998"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "b0191a0",
    "date": "2026-09-21T12:35:35-04:00",
    "message": "perf: make Now Playing metadata updates responsive",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/b0191a0"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "56082c7",
    "date": "2026-09-21T12:35:22-04:00",
    "message": "fix: deliver MediaRemote notifications off main queue",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/56082c7"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "029f316",
    "date": "2026-09-21T12:35:13-04:00",
    "message": "perf: add native MediaRemote notification bridge",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/029f316"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "3bb9f11",
    "date": "2026-09-21T12:35:07-04:00",
    "message": "perf: add native MediaRemote notification bridge",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/3bb9f11"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "3899e3a",
    "date": "2026-09-21T12:33:46-04:00",
    "message": "fix: preserve inspector when packaging Debug builds",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/3899e3a"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "5c8f569",
    "date": "2026-09-21T12:33:14-04:00",
    "message": "fix: defer Debug inspector until app run loop",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/5c8f569"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "03f3f01",
    "date": "2026-09-21T12:31:21-04:00",
    "message": "fix: show Debug inspector immediately on main thread",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/03f3f01"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "fd175a6",
    "date": "2026-09-21T12:30:12-04:00",
    "message": "fix: keep Now Playing metadata refreshing",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/fd175a6"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "07cff5c",
    "date": "2026-09-21T12:28:24-04:00",
    "message": "fix: restore 250ms Now Playing fallback",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/07cff5c"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "4bde8e2",
    "date": "2026-09-21T12:28:15-04:00",
    "message": "fix: restore responsive Now Playing refresh",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/4bde8e2"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "08c723d",
    "date": "2026-09-21T12:28:11-04:00",
    "message": "fix: remove stale Spotify idle state reference",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/08c723d"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "cbe9174",
    "date": "2026-09-21T12:27:01-04:00",
    "message": "fix: make Spotify semaphore timeout type-safe",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/cbe9174"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "df9db1c",
    "date": "2026-09-21T12:26:43-04:00",
    "message": "fix: make Spotify metadata refresh event-driven",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/df9db1c"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "a61827c",
    "date": "2026-09-21T12:26:39-04:00",
    "message": "cleanup: remove transient Spotify idle flag",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/a61827c"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "56f176f",
    "date": "2026-09-21T12:26:37-04:00",
    "message": "fix: wake Spotify metadata worker on events",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/56f176f"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "f7df6fa",
    "date": "2026-09-21T12:26:07-04:00",
    "message": "fix: honor recent Spotify playback events",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/f7df6fa"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "d9e4f0f",
    "date": "2026-09-21T12:26:04-04:00",
    "message": "fix: prevent transient Spotify idle state",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/d9e4f0f"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "014ebc7",
    "date": "2026-09-21T12:24:18-04:00",
    "message": "docs: update MediaRemote helper comment",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/014ebc7"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "251c3d8",
    "date": "2026-09-21T12:24:06-04:00",
    "message": "perf: reduce idle animation wakeups",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/251c3d8"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "fa68415",
    "date": "2026-09-21T12:24:02-04:00",
    "message": "perf: reduce media metadata polling",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/fa68415"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "ad7c389",
    "date": "2026-09-21T12:00:10-04:00",
    "message": "fix: use explicit type size for Spotifast socket option",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/ad7c389"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "528e076",
    "date": "2026-09-21T11:58:11-04:00",
    "message": "fix: repair Spotifast persistent query newlines",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/528e076"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "958e81d",
    "date": "2026-09-21T11:58:06-04:00",
    "message": "fix: remove leftover media watcher shutdown",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/958e81d"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "65fc786",
    "date": "2026-09-21T11:56:28-04:00",
    "message": "Merge pull request #2 from n0thhhing/optimize/media-bridge",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/65fc786"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "306710c",
    "date": "2026-09-21T11:51:50-04:00",
    "message": "perf: remove media polling and reuse Spotifast connection",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/306710c"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "2e5dc4e",
    "date": "2026-09-21T11:45:13-04:00",
    "message": "Merge pull request #1 from n0thhhing/optimize/ci-and-runtime",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/2e5dc4e"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "4dba843",
    "date": "2026-09-21T11:38:50-04:00",
    "message": "perf: cache media source and marquee metrics",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/4dba843"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "75c56dc",
    "date": "2026-09-21T11:37:17-04:00",
    "message": "perf: reduce render wakeups and harden CI",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/75c56dc"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "230b660",
    "date": "2026-09-21T09:14:45-04:00",
    "message": "feat: redesign cute sleeping raccoon from scratch",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/230b660"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "d8f2a28",
    "date": "2026-09-21T07:21:08-04:00",
    "message": "feat: match raccoon reference pixel art style",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/d8f2a28"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "658e93f",
    "date": "2026-09-21T07:15:57-04:00",
    "message": "feat: soften raccoon art and facial features",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/658e93f"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "c522301",
    "date": "2026-09-21T07:13:50-04:00",
    "message": "feat: refine curled raccoon and quicken breathing",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/c522301"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "fcfeca1",
    "date": "2026-09-21T07:05:17-04:00",
    "message": "feat: polish raccoon pixels and breathing animation",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/fcfeca1"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "e3c2189",
    "date": "2026-09-21T07:01:14-04:00",
    "message": "feat: refine sleeping raccoon pixel art",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/e3c2189"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "82f762c",
    "date": "2026-09-21T06:58:18-04:00",
    "message": "feat: add sleeping raccoon sprite pet",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/82f762c"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "e72ddca",
    "date": "2026-09-20T23:00:06-04:00",
    "message": "fix: sync inspector resizing with ImGui",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/e72ddca"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "b28be2d",
    "date": "2026-09-20T22:57:40-04:00",
    "message": "fix: capture startup console output",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/b28be2d"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "b712c95",
    "date": "2026-09-20T22:57:37-04:00",
    "message": "debug: log native platform events",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/b712c95"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "6406ec1",
    "date": "2026-09-20T22:57:19-04:00",
    "message": "debug: log context menu actions",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/6406ec1"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "ede2662",
    "date": "2026-09-20T22:57:17-04:00",
    "message": "debug: expand native runtime logs",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/ede2662"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "dd21124",
    "date": "2026-09-20T22:57:07-04:00",
    "message": "debug: log settings events",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/dd21124"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "275807b",
    "date": "2026-09-20T22:57:03-04:00",
    "message": "debug: log settings events",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/275807b"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "9b87542",
    "date": "2026-09-20T22:56:49-04:00",
    "message": "debug: log widget input events",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/9b87542"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "cada37c",
    "date": "2026-09-20T22:56:29-04:00",
    "message": "debug: log media runtime events",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/cada37c"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "b5db916",
    "date": "2026-09-20T22:56:22-04:00",
    "message": "debug: log widget mode transitions",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/b5db916"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "fc8371b",
    "date": "2026-09-20T22:56:17-04:00",
    "message": "debug: log startup state",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/fc8371b"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "8773339",
    "date": "2026-09-20T22:54:16-04:00",
    "message": "fix: preserve profiling env in watch mode",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/8773339"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "fddcfbc",
    "date": "2026-09-20T22:51:38-04:00",
    "message": "fix: simplify inspector console rendering",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/fddcfbc"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "54282a6",
    "date": "2026-09-20T22:51:30-04:00",
    "message": "feat: add live inspector console",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/54282a6"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "c5377a9",
    "date": "2026-09-20T22:51:18-04:00",
    "message": "debug: capture runtime console output",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/c5377a9"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "d9ee080",
    "date": "2026-09-20T22:49:01-04:00",
    "message": "ui: prevent inspector status text overlap",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/d9ee080"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "5b79ac4",
    "date": "2026-09-20T22:46:51-04:00",
    "message": "fix: keep inspector status bar non-scrollable",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/5b79ac4"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "334c32c",
    "date": "2026-09-20T22:45:23-04:00",
    "message": "ui: compact inspector status bar",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/334c32c"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "97ea734",
    "date": "2026-09-20T22:43:08-04:00",
    "message": "ui: clean up inspector status presentation",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/97ea734"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "ee5665e",
    "date": "2026-09-20T22:42:53-04:00",
    "message": "ui: add inspector status strip and adaptive tables",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/ee5665e"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "98569b5",
    "date": "2026-09-20T22:42:29-04:00",
    "message": "fix: prevent stretched inspector frame during resize",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/98569b5"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "befab9b",
    "date": "2026-09-20T22:39:34-04:00",
    "message": "ui: polish inspector hierarchy and controls",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/befab9b"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "911aa63",
    "date": "2026-09-20T22:36:03-04:00",
    "message": "fix: center and rebalance vertical widget layout",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/911aa63"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "dd4c504",
    "date": "2026-09-20T22:33:25-04:00",
    "message": "refactor: consolidate inspector into four tabs",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/dd4c504"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "8db9311",
    "date": "2026-09-20T22:32:05-04:00",
    "message": "feat: add renderer input layout and viewport diagnostics",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/8db9311"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "a3f5c71",
    "date": "2026-09-20T22:32:05-04:00",
    "message": "fix: align square layouts and disable hidden playback targets",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/a3f5c71"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "4d33ed2",
    "date": "2026-09-20T22:17:35-04:00",
    "message": "fix: refresh inspector pointer position for hit testing",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/4d33ed2"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "d570077",
    "date": "2026-09-20T22:17:35-04:00",
    "message": "fix: stream app logs in foreground watch mode",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/d570077"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "77d585b",
    "date": "2026-09-20T22:14:01-04:00",
    "message": "fix: narrow collapsed inspector title bar",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/77d585b"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "9a3db23",
    "date": "2026-09-20T22:12:30-04:00",
    "message": "fix: use native ImGui inspector collapse bar",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/9a3db23"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "87cca56",
    "date": "2026-09-20T22:08:45-04:00",
    "message": "ui: allow square inspector collapse",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/87cca56"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "d560f90",
    "date": "2026-09-20T22:08:36-04:00",
    "message": "ui: make inspector resizable and compact",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/d560f90"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "d441ab0",
    "date": "2026-09-20T22:06:12-04:00",
    "message": "ui: make inspector surface directly draggable and collapsible",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/d441ab0"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "6fcddf6",
    "date": "2026-09-20T22:04:16-04:00",
    "message": "ui: use ImGui title bar instead of macOS chrome",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/6fcddf6"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "6892113",
    "date": "2026-09-20T22:02:53-04:00",
    "message": "ui: use invisible fullscreen ImGui host",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/6892113"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "6b84243",
    "date": "2026-09-20T22:01:35-04:00",
    "message": "ui: make native inspector panel the ImGui window",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/6b84243"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "08b3e41",
    "date": "2026-09-20T22:00:01-04:00",
    "message": "fix: close inspector window on collapsed frame",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/08b3e41"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "474bb36",
    "date": "2026-09-20T21:58:46-04:00",
    "message": "ui: group inspector panels into tabs",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/474bb36"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "84d6907",
    "date": "2026-09-20T21:56:06-04:00",
    "message": "fix: keep runtime readouts inside ImGui table",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/84d6907"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "8550963",
    "date": "2026-09-20T21:55:06-04:00",
    "message": "fix: show inspector in Debug builds",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/8550963"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "c3c8319",
    "date": "2026-09-20T21:55:03-04:00",
    "message": "fix: enable inspector automatically in Debug",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/c3c8319"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "ba3e491",
    "date": "2026-09-20T21:51:52-04:00",
    "message": "fix: launch inspector from app run loop",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/ba3e491"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "6e24942",
    "date": "2026-09-20T21:51:21-04:00",
    "message": "fix: present inspector on main thread",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/6e24942"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "565650e",
    "date": "2026-09-20T21:51:19-04:00",
    "message": "fix: initialize inspector after native window",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/565650e"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "d6a8b15",
    "date": "2026-09-20T21:49:21-04:00",
    "message": "fix: activate debug inspector panel",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/d6a8b15"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "2d22540",
    "date": "2026-09-20T21:47:48-04:00",
    "message": "fix: import debug build options",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/2d22540"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "51874a9",
    "date": "2026-09-20T21:47:43-04:00",
    "message": "fix: show debug ImGui inspector",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/51874a9"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "4e90530",
    "date": "2026-09-20T21:41:44-04:00",
    "message": "fix: link libc++ from active macOS SDK",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/4e90530"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "b634606",
    "date": "2026-09-20T21:39:35-04:00",
    "message": "fix: use absolute Apple libc++ stub correctly",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/b634606"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "79c26ee",
    "date": "2026-09-20T21:38:43-04:00",
    "message": "fix: link Apple libc++ for debug ImGui",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/79c26ee"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "57f74a7",
    "date": "2026-09-20T21:38:16-04:00",
    "message": "Create out",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/57f74a7"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "9915955",
    "date": "2026-09-20T21:36:29-04:00",
    "message": "fix: link libc++ for debug ImGui",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/9915955"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "d3c322c",
    "date": "2026-09-20T21:33:28-04:00",
    "message": "fix(debug): remove final legacy AppKit inspector reference",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/d3c322c"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "866d063",
    "date": "2026-09-20T21:26:45-04:00",
    "message": "fix(build): avoid Zig libc++ sub-build for ImGui inspector",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/866d063"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "1ba4df3",
    "date": "2026-09-20T21:26:42-04:00",
    "message": "fix(debug): build ImGui without Zig libc++ runtime",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/1ba4df3"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "a248181",
    "date": "2026-09-20T21:20:59-04:00",
    "message": "fix(debug): update ImGui dockspace call for pinned API",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/a248181"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "07f6f17",
    "date": "2026-09-20T21:18:01-04:00",
    "message": "fix(build): construct optional ImGui source paths at build time",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/07f6f17"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "4e0f774",
    "date": "2026-09-20T21:17:38-04:00",
    "message": "fix(run): invoke debug inspector fetch script with bash",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/4e0f774"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "cc9e65e",
    "date": "2026-09-20T21:17:27-04:00",
    "message": "fix(debug): initialize ImGui backends after inspector view is attached",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/cc9e65e"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "6db37dd",
    "date": "2026-09-20T21:17:24-04:00",
    "message": "feat(run): enable Dear ImGui inspector only for debug builds",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/6db37dd"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "2f60930",
    "date": "2026-09-20T21:17:14-04:00",
    "message": "build(debug): keep ImGui opt-in even for debug optimization",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/2f60930"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "f89a373",
    "date": "2026-09-20T21:16:52-04:00",
    "message": "build(debug): make Dear ImGui inspector compile only in Debug",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/f89a373"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "1ddbd4d",
    "date": "2026-09-20T21:16:33-04:00",
    "message": "refactor(debug): keep inspector setting bridge in Zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/1ddbd4d"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "6d7e46c",
    "date": "2026-09-20T21:16:22-04:00",
    "message": "refactor(debug): replace native inspector with optional Dear ImGui",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/6d7e46c"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "8d3e65b",
    "date": "2026-09-20T21:16:10-04:00",
    "message": "feat(debug): add optional Dear ImGui inspector support",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/8d3e65b"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "0d2d610",
    "date": "2026-09-20T21:16:08-04:00",
    "message": "feat(debug): add optional Dear ImGui inspector support",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/0d2d610"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "d7c8452",
    "date": "2026-09-20T21:16:04-04:00",
    "message": "feat(debug): add optional Dear ImGui inspector support",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/d7c8452"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "b1fd6cc",
    "date": "2026-09-20T21:12:26-04:00",
    "message": "vendor(imgui): add imgui_impl_metal.h",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/b1fd6cc"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "19296b2",
    "date": "2026-09-20T21:12:16-04:00",
    "message": "vendor(imgui): add imstb_truetype.h",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/19296b2"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "ba7f433",
    "date": "2026-09-20T21:11:02-04:00",
    "message": "vendor(imgui): add imstb_textedit.h for optional debug inspector",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/ba7f433"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "244bb7a",
    "date": "2026-09-20T21:10:57-04:00",
    "message": "vendor(imgui): add imstb_rectpack.h for optional debug inspector",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/244bb7a"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "e50a34e",
    "date": "2026-09-20T21:10:51-04:00",
    "message": "vendor(imgui): add imgui_internal.h for optional debug inspector",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/e50a34e"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "91cc461",
    "date": "2026-09-20T21:10:47-04:00",
    "message": "vendor(imgui): add imgui_widgets.cpp for optional debug inspector",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/91cc461"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "110cdb3",
    "date": "2026-09-20T21:10:43-04:00",
    "message": "vendor(imgui): add imgui_tables.cpp for optional debug inspector",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/110cdb3"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "46b8093",
    "date": "2026-09-20T21:10:38-04:00",
    "message": "vendor(imgui): add imgui_draw.cpp for optional debug inspector",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/46b8093"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "e41e917",
    "date": "2026-09-20T21:10:32-04:00",
    "message": "vendor(imgui): add imgui.cpp for optional debug inspector",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/e41e917"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "f9dd591",
    "date": "2026-09-20T21:10:26-04:00",
    "message": "vendor(imgui): add imgui.h for optional debug inspector",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/f9dd591"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "4665ecd",
    "date": "2026-09-20T21:10:21-04:00",
    "message": "vendor(imgui): add imconfig.h for optional debug inspector",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/4665ecd"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "e2621de",
    "date": "2026-09-20T21:10:17-04:00",
    "message": "vendor(imgui): add LICENSE.txt for optional debug inspector",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/e2621de"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "aab9ac1",
    "date": "2026-09-20T21:08:43-04:00",
    "message": "fix(run): preserve flags when entering watch mode",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/aab9ac1"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "e405dce",
    "date": "2026-09-20T21:05:34-04:00",
    "message": "fix(inspector): remove unsupported text field action selector",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/e405dce"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "7793fc2",
    "date": "2026-09-20T21:04:28-04:00",
    "message": "fix(run): handle empty app args in launchd plist",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/7793fc2"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "327e2e7",
    "date": "2026-09-20T21:03:37-04:00",
    "message": "fix(run): expand launchd variables correctly",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/327e2e7"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "7655ba6",
    "date": "2026-09-20T21:03:28-04:00",
    "message": "fix(run): use one-shot GUI launchd job for app launch",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/7655ba6"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "6791ab2",
    "date": "2026-09-20T21:03:05-04:00",
    "message": "fix(run): launch GUI app through user launchd",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/6791ab2"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "9fb9f20",
    "date": "2026-09-20T21:01:10-04:00",
    "message": "fix(run): launch app binary directly without LaunchServices",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/9fb9f20"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "364f635",
    "date": "2026-09-20T20:59:34-04:00",
    "message": "fix(debug): resolve inspector enum and unused values",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/364f635"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "9f53291",
    "date": "2026-09-20T20:58:50-04:00",
    "message": "fix(debug): cast media key target for native callback",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/9f53291"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "3b3cee8",
    "date": "2026-09-20T20:58:32-04:00",
    "message": "feat(debug): sync editable inspector controls with live state",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/3b3cee8"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "a9186bd",
    "date": "2026-09-20T20:58:17-04:00",
    "message": "feat(debug): add native editable inspector pages",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/a9186bd"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "e8f2255",
    "date": "2026-09-20T20:57:24-04:00",
    "message": "feat(debug): add live editable inspector controls",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/e8f2255"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "7509d4d",
    "date": "2026-09-20T20:57:05-04:00",
    "message": "feat(debug): prepare editable inspector controls",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/7509d4d"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "191555e",
    "date": "2026-09-20T20:48:31-04:00",
    "message": "fix(run): handle empty rebuild arguments in watch loop",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/191555e"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "90ee12e",
    "date": "2026-09-20T20:47:47-04:00",
    "message": "fix(debug): correct tab page text field allocation",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/90ee12e"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "3b0c9f8",
    "date": "2026-09-20T20:47:33-04:00",
    "message": "refactor(debug): make inspector tabbed like Ghostty",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/3b0c9f8"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "6517576",
    "date": "2026-09-20T20:43:34-04:00",
    "message": "fix(run): handle empty watch arguments safely",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/6517576"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "18f85c3",
    "date": "2026-09-20T20:41:52-04:00",
    "message": "fix(run): only clean and test once in watch mode",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/18f85c3"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "a0b47d1",
    "date": "2026-09-20T20:41:28-04:00",
    "message": "feat(run): add dependency-free automatic watch mode",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/a0b47d1"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "e0a9792",
    "date": "2026-09-20T20:40:50-04:00",
    "message": "fix(debug): remove unused pane parameter",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/e0a9792"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "b024547",
    "date": "2026-09-20T20:39:24-04:00",
    "message": "fix(debug): make inspector panes resize like a docked workspace",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/b024547"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "3f7670e",
    "date": "2026-09-20T20:39:03-04:00",
    "message": "refactor(debug): build native Ghostty-style inspector panes",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/3f7670e"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "1368ed2",
    "date": "2026-09-20T20:36:28-04:00",
    "message": "polish(debug): give inspector an ImGui-inspired layout",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/1368ed2"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "987c8d7",
    "date": "2026-09-20T20:32:38-04:00",
    "message": "fix(debug): stop forced scrolling during live refresh",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/987c8d7"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "f4915f1",
    "date": "2026-09-20T20:30:39-04:00",
    "message": "fix(debug): use real newline escapes in console output",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/f4915f1"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "cc2fbae",
    "date": "2026-09-20T20:28:05-04:00",
    "message": "fix(debug): pass sender to text view scrolling",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/cc2fbae"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "112c88e",
    "date": "2026-09-20T20:27:51-04:00",
    "message": "feat(debug): make diagnostics console-like and detailed",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/112c88e"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "b69dd47",
    "date": "2026-09-20T20:22:01-04:00",
    "message": "fix(debug): include visual position in console formatting",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/b69dd47"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "1eaf2ba",
    "date": "2026-09-20T20:20:54-04:00",
    "message": "fix(debug): split console output under Zig formatter argument limit",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/1eaf2ba"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "c9f3e8f",
    "date": "2026-09-20T20:19:35-04:00",
    "message": "feat(debug): turn snap diagnostics into general debug console",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/c9f3e8f"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "d640b73",
    "date": "2026-09-20T20:19:32-04:00",
    "message": "feat(settings): animate navigation and rename debug console",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/d640b73"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "e46eacf",
    "date": "2026-09-20T20:17:17-04:00",
    "message": "fix(settings): remove unsupported button content inset",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/e46eacf"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "1b5a4f7",
    "date": "2026-09-20T20:17:06-04:00",
    "message": "polish(settings): align sidebar icons and give controls room",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/1b5a4f7"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "c01bc85",
    "date": "2026-09-20T20:14:28-04:00",
    "message": "fix(settings): declare shared label helper before sidebar control",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/c01bc85"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "b9c0191",
    "date": "2026-09-20T20:13:32-04:00",
    "message": "polish(settings): give navigation controls internal padding",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/b9c0191"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "0b22b5d",
    "date": "2026-09-20T20:12:37-04:00",
    "message": "polish(settings): add safe-area spacing and consistent padding",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/0b22b5d"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "f767706",
    "date": "2026-09-20T20:06:31-04:00",
    "message": "polish(settings): fix flipped layout and frost glass treatment",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/f767706"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "008fc54",
    "date": "2026-09-20T19:36:05-04:00",
    "message": "fix(settings): remove malformed row layout terminator",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/008fc54"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "f70f572",
    "date": "2026-09-20T19:27:34-04:00",
    "message": "polish(settings): tone down HUD glass and tighten layout",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/f70f572"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "4f1a1d5",
    "date": "2026-09-20T19:22:23-04:00",
    "message": "fix(settings): clean up HUD settings layout implementation",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/4f1a1d5"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "03952ea",
    "date": "2026-09-20T19:22:16-04:00",
    "message": "refactor(settings): rebuild as resizable HUD glass preferences",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/03952ea"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "d9b0800",
    "date": "2026-09-20T19:19:05-04:00",
    "message": "fix(settings): finish stack view alignment cleanup",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/d9b0800"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "5b18a1c",
    "date": "2026-09-20T19:17:38-04:00",
    "message": "fix(settings): use supported AppKit layout APIs",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/5b18a1c"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "4edb1ac",
    "date": "2026-09-20T19:16:55-04:00",
    "message": "fix(settings): close section definition helper",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/4edb1ac"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "bcbf18d",
    "date": "2026-09-20T19:15:38-04:00",
    "message": "refactor(settings): make special sections type-safe",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/bcbf18d"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "7d9d2b6",
    "date": "2026-09-20T19:15:28-04:00",
    "message": "fix(settings): make control dependencies declarative",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/7d9d2b6"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "e9931ea",
    "date": "2026-09-20T19:15:18-04:00",
    "message": "refactor(settings): rebuild UI as data-driven native preferences",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/e9931ea"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "3c047cb",
    "date": "2026-09-20T19:11:42-04:00",
    "message": "refactor(macos): simplify settings UI from scratch",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/3c047cb"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "653cc79",
    "date": "2026-09-20T19:09:38-04:00",
    "message": "refactor(macos): redesign settings in Boring Notch style",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/653cc79"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "5661692",
    "date": "2026-09-20T19:04:53-04:00",
    "message": "refactor(macos): completely redesign settings interface",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/5661692"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "83f2616",
    "date": "2026-09-20T18:58:57-04:00",
    "message": "fix(glass): use native widget material variant 5",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/83f2616"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "e4cc941",
    "date": "2026-09-20T18:41:36-04:00",
    "message": "fix(glass): match native widget refraction profile",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/e4cc941"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "1262006",
    "date": "2026-09-20T18:33:29-04:00",
    "message": "fix(glass): deepen native widget refraction",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/1262006"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "d4649d2",
    "date": "2026-09-20T18:30:19-04:00",
    "message": "fix(layout): keep playback time below progress bar",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/d4649d2"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "37ac980",
    "date": "2026-09-20T18:28:13-04:00",
    "message": "fix(render): use form-factor artwork geometry",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/37ac980"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "8025a92",
    "date": "2026-09-20T18:27:59-04:00",
    "message": "fix(layout): use deliberate geometry for all form factors",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/8025a92"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "f7a36ea",
    "date": "2026-09-20T18:25:20-04:00",
    "message": "fix(glow): remove stale art size layout reference",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/f7a36ea"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "52d0fca",
    "date": "2026-09-20T18:23:12-04:00",
    "message": "ci: focus macOS workflow on tests and build",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/52d0fca"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "1c784da",
    "date": "2026-09-20T18:22:55-04:00",
    "message": "docs: document CI and widget form factors",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/1c784da"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "1e4a72b",
    "date": "2026-09-20T18:22:10-04:00",
    "message": "ci: add macOS build and test workflow",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/1e4a72b"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "1a923e1",
    "date": "2026-09-20T18:22:06-04:00",
    "message": "fix(animation): remove stale compact threshold",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/1a923e1"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "2c87c21",
    "date": "2026-09-20T18:22:04-04:00",
    "message": "fix(settings): repair widget mode parser",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/2c87c21"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "86a69a7",
    "date": "2026-09-20T18:20:45-04:00",
    "message": "fix(settings): preserve previous form-factor aliases",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/86a69a7"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "808381e",
    "date": "2026-09-20T18:20:28-04:00",
    "message": "fix(render): remove obsolete layout alias",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/808381e"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "0f5eaab",
    "date": "2026-09-20T18:20:24-04:00",
    "message": "fix(render): remove obsolete layout alias",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/0f5eaab"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "478bb01",
    "date": "2026-09-20T18:20:20-04:00",
    "message": "fix(render): remove obsolete layout alias",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/478bb01"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "5b4fc4c",
    "date": "2026-09-20T18:20:09-04:00",
    "message": "fix(render): update glow sizing for responsive layout",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/5b4fc4c"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "44258ea",
    "date": "2026-09-20T18:19:56-04:00",
    "message": "fix(settings): unify restore defaults behavior",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/44258ea"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "f942ab6",
    "date": "2026-09-20T18:19:51-04:00",
    "message": "fix(settings): unify restore defaults behavior",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/f942ab6"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "5cf7848",
    "date": "2026-09-20T18:19:16-04:00",
    "message": "fix(layout): constrain artwork during form-factor morphs",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/5cf7848"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "05c2b7a",
    "date": "2026-09-20T18:18:38-04:00",
    "message": "test(snap): validate all widget form-factor sizes",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/05c2b7a"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "774bbe0",
    "date": "2026-09-20T18:18:11-04:00",
    "message": "docs(settings): document five widget form factors",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/774bbe0"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "e884416",
    "date": "2026-09-20T18:18:03-04:00",
    "message": "test(settings): cover all widget form factors",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/e884416"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "c5315a2",
    "date": "2026-09-20T18:17:50-04:00",
    "message": "fix(widget): finalize form-factor transitions",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/c5315a2"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "b37041f",
    "date": "2026-09-20T18:17:48-04:00",
    "message": "fix(widget): finalize form-factor transitions",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/b37041f"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "2f390ef",
    "date": "2026-09-20T18:17:46-04:00",
    "message": "fix(widget): finalize form-factor transitions",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/2f390ef"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "18e0df5",
    "date": "2026-09-20T18:17:43-04:00",
    "message": "fix(widget): finalize form-factor transitions",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/18e0df5"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "a2147a0",
    "date": "2026-09-20T18:17:13-04:00",
    "message": "feat(menu): expose five widget form factors",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/a2147a0"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "79d83da",
    "date": "2026-09-20T18:17:08-04:00",
    "message": "feat(settings): expose five widget form factors",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/79d83da"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "556c391",
    "date": "2026-09-20T18:17:01-04:00",
    "message": "fix(snap): use actual form-factor dimensions",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/556c391"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "d496cc3",
    "date": "2026-09-20T18:16:52-04:00",
    "message": "refactor(render): support responsive five-form-factor layouts",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/d496cc3"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "ce78889",
    "date": "2026-09-20T18:16:49-04:00",
    "message": "refactor(render): support responsive five-form-factor layouts",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/ce78889"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "d45791f",
    "date": "2026-09-20T18:16:46-04:00",
    "message": "refactor(render): support responsive five-form-factor layouts",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/d45791f"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "1c8685c",
    "date": "2026-09-20T18:16:31-04:00",
    "message": "refactor(render): use interpolated form-factor geometry",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/1c8685c"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "2e04a5c",
    "date": "2026-09-20T18:16:27-04:00",
    "message": "refactor(widget): initialize unified form-factor geometry",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/2e04a5c"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "6aeb833",
    "date": "2026-09-20T18:16:20-04:00",
    "message": "refactor(widget): remove legacy compact resize state",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/6aeb833"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "181ec68",
    "date": "2026-09-20T18:16:16-04:00",
    "message": "refactor(settings): animate all form-factor changes",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/181ec68"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "1f7d885",
    "date": "2026-09-20T18:16:06-04:00",
    "message": "refactor(widget): animate arbitrary form-factor transitions",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/1f7d885"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "b49cb82",
    "date": "2026-09-20T18:15:57-04:00",
    "message": "refactor(settings): support five widget form factors",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/b49cb82"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "ace97de",
    "date": "2026-09-20T18:15:52-04:00",
    "message": "refactor(widget): animate arbitrary form-factor resizing",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/ace97de"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "2e372a6",
    "date": "2026-09-20T18:15:47-04:00",
    "message": "refactor(widget): unify five form-factor geometries",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/2e372a6"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "6082da7",
    "date": "2026-09-20T18:15:42-04:00",
    "message": "refactor(widget): unify five form-factor geometries",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/6082da7"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "8f22b66",
    "date": "2026-09-20T18:15:38-04:00",
    "message": "refactor(widget): unify five form-factor geometries",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/8f22b66"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "b0b64a7",
    "date": "2026-09-20T18:10:22-04:00",
    "message": "fix(widget): preserve legacy widget mode values",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/b0b64a7"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "2f4af30",
    "date": "2026-09-20T18:10:14-04:00",
    "message": "fix(widget): resize correctly after restoring defaults",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/2f4af30"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "bcd02c5",
    "date": "2026-09-20T18:10:04-04:00",
    "message": "feat(widget): add more widget form factors",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/bcd02c5"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "8a2409c",
    "date": "2026-09-20T18:10:02-04:00",
    "message": "feat(widget): add more widget form factors",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/8a2409c"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "09594e5",
    "date": "2026-09-20T18:09:59-04:00",
    "message": "feat(widget): add more widget form factors",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/09594e5"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "745efe5",
    "date": "2026-09-20T18:09:09-04:00",
    "message": "feat(widget): add more widget form factors",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/745efe5"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "af9b3a8",
    "date": "2026-09-20T18:09:05-04:00",
    "message": "feat(widget): add more widget form factors",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/af9b3a8"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "742588d",
    "date": "2026-09-20T18:08:47-04:00",
    "message": "feat(widget): add more widget form factors",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/742588d"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "6e936b1",
    "date": "2026-09-20T18:08:42-04:00",
    "message": "feat(widget): add more widget form factors",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/6e936b1"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "e032247",
    "date": "2026-09-20T18:08:37-04:00",
    "message": "feat(widget): add more widget form factors",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/e032247"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "05be649",
    "date": "2026-09-20T18:08:33-04:00",
    "message": "feat(widget): add more widget form factors",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/05be649"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "b302cda",
    "date": "2026-09-20T18:08:17-04:00",
    "message": "feat(widget): add more widget form factors",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/b302cda"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "8f4d139",
    "date": "2026-09-20T18:08:13-04:00",
    "message": "feat(widget): add more widget form factors",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/8f4d139"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "c0ccda4",
    "date": "2026-09-20T18:07:51-04:00",
    "message": "feat(widget): add more widget form factors",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/c0ccda4"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "06873a7",
    "date": "2026-09-20T18:04:24-04:00",
    "message": "feat(glass): retain artwork glow with native glass",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/06873a7"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "c5f1c08",
    "date": "2026-09-20T18:01:13-04:00",
    "message": "fix(settings): persist advanced widget options",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/c5f1c08"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "af68dc1",
    "date": "2026-09-20T18:00:24-04:00",
    "message": "feat(macos): expose advanced widget settings",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/af68dc1"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "0f4028f",
    "date": "2026-09-20T18:00:05-04:00",
    "message": "fix(settings): reset new widget options in context menu",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/0f4028f"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "496d98c",
    "date": "2026-09-20T18:00:02-04:00",
    "message": "feat(settings): wire advanced widget appearance controls",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/496d98c"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "f77e6fa",
    "date": "2026-09-20T18:00:00-04:00",
    "message": "feat(settings): wire advanced widget appearance controls",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/f77e6fa"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "cb98240",
    "date": "2026-09-20T17:59:58-04:00",
    "message": "feat(settings): expose advanced widget options",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/cb98240"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "43d8d6d",
    "date": "2026-09-20T17:59:47-04:00",
    "message": "feat(settings): add advanced widget controls",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/43d8d6d"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "1fd3756",
    "date": "2026-09-20T17:59:44-04:00",
    "message": "feat(settings): add advanced widget controls",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/1fd3756"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "019c7e7",
    "date": "2026-09-20T17:59:42-04:00",
    "message": "feat(settings): add advanced widget controls",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/019c7e7"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "082b9b7",
    "date": "2026-09-20T17:58:43-04:00",
    "message": "fix(macos): disable settings superseded by native glass",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/082b9b7"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "2a88063",
    "date": "2026-09-20T17:58:40-04:00",
    "message": "fix(media): honor media key target for play pause",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/2a88063"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "b8f833f",
    "date": "2026-09-20T17:58:38-04:00",
    "message": "fix(settings): restore all defaults consistently",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/b8f833f"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "0f369c9",
    "date": "2026-09-20T17:56:18-04:00",
    "message": "refactor(macos): polish settings window UX",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/0f369c9"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "4aeba62",
    "date": "2026-09-20T17:54:31-04:00",
    "message": "fix(macos): fix settings UI compilation errors",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/4aeba62"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "e471453",
    "date": "2026-09-20T17:50:06-04:00",
    "message": "refactor(macos): redesign settings UI",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/e471453"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "30d5eb6",
    "date": "2026-09-20T17:47:47-04:00",
    "message": "refactor: add .clang-format, remove obsolete test scripts, and update native platform window appearance",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/30d5eb6"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "7969069",
    "date": "2026-09-20T17:08:11-04:00",
    "message": "fix: follow desktop activation for widget glass state",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/7969069"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "b80538a",
    "date": "2026-09-20T17:05:20-04:00",
    "message": "fix: correct subdued state and inset glass refraction",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/b80538a"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "0ea2971",
    "date": "2026-09-20T17:01:00-04:00",
    "message": "fix: keep widget glass active when window loses focus",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/0ea2971"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "6f25cc5",
    "date": "2026-09-20T16:57:17-04:00",
    "message": "fix: select glass variant directly on current AppKit runtime",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/6f25cc5"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "1e1e642",
    "date": "2026-09-20T16:55:34-04:00",
    "message": "fix: use native widget glass style without dark backing",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/1e1e642"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "99bb50b",
    "date": "2026-09-20T16:53:20-04:00",
    "message": "fix: darken glass backing without tinting player content",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/99bb50b"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "a0c4636",
    "date": "2026-09-20T16:51:49-04:00",
    "message": "fix: restore rounded native glass and renderer switching",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/a0c4636"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "9047b47",
    "date": "2026-09-18T17:23:23-04:00",
    "message": "remove: Delete the Glass Debugger",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/9047b47"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "6535000",
    "date": "2026-09-18T16:21:23-04:00",
    "message": "fix: revert Tint Alpha color to black",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/6535000"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "e50f510",
    "date": "2026-09-18T16:18:49-04:00",
    "message": "feat: Add Material slider, fix Tint and Adaptive Appearance in Glass Debugger",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/e50f510"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "a15d0ab",
    "date": "2026-09-18T16:08:18-04:00",
    "message": "fix: all glass params now live-update by tearing down and recreating the glass view",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/a15d0ab"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "630f717",
    "date": "2026-09-18T16:02:01-04:00",
    "message": "fix: style/blur/refraction now live-update without touching variant",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/630f717"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "fb8c059",
    "date": "2026-09-18T15:57:31-04:00",
    "message": "fix: blur/refraction now update live without needing a variant change",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/fb8c059"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "33232d8",
    "date": "2026-09-18T15:54:55-04:00",
    "message": "fix: glass debugger - frame nudge refresh + editable value fields",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/33232d8"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "ee7024c",
    "date": "2026-09-18T15:50:17-04:00",
    "message": "feat: add comprehensive WallifyGlassDebugger panel to native.m",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/ee7024c"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "56cfdd7",
    "date": "2026-09-18T13:29:28-04:00",
    "message": "chore: add reverse engineering script for Apple widget glass pipeline",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/56cfdd7"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "7bb3d66",
    "date": "2026-09-18T13:08:08-04:00",
    "message": "feat: adopt NSContainerConcentricGlassEffectView for native widget glass styling",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/7bb3d66"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "ddf6fbf",
    "date": "2026-09-18T02:05:25-04:00",
    "message": "fix(ui): apply subduedState override and restore specular rim to NSGlassEffectView",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/ddf6fbf"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "e900332",
    "date": "2026-09-18T01:52:27-04:00",
    "message": "fix(ui): force NSGlassEffectView variant 4 into VibrantDark appearance to match system widget dark material",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/e900332"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "fcf312f",
    "date": "2026-09-18T01:44:45-04:00",
    "message": "fix(ui): use NSVisualEffectView maskImage instead of layer masking to prevent rendering bugs and invisible views",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/fcf312f"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "75675e9",
    "date": "2026-09-18T01:38:15-04:00",
    "message": "fix(ui): wrap NSVisualEffectView in clipping container to fix opaque gray backdrop rendering bug",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/75675e9"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "ee649ae",
    "date": "2026-09-18T01:34:23-04:00",
    "message": "fix(ui): revert sendEvent override which broke AppleEvents, and use WallifyGlassView hitTest override to fix drag",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/ee649ae"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "402fd45",
    "date": "2026-09-18T01:28:03-04:00",
    "message": "fix(ui): use NSVisualEffectView instead of NSGlassEffectView to match true widget glass material, and route mouse events directly in panel",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/402fd45"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "7522c93",
    "date": "2026-09-18T00:33:30-04:00",
    "message": "fix(ui): fix rim z-order \u2014 render rim as NSView overlay above Metal content inside NSGlassEffectView",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/7522c93"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "aaec7a3",
    "date": "2026-09-18T00:30:36-04:00",
    "message": "fix(ui): true native Liquid Glass \u2014 framebufferOnly=NO, directional specular rim, suppress aurora overlay",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/aaec7a3"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "068db69",
    "date": "2026-09-18T00:08:12-04:00",
    "message": "feat(ui): implement true macOS 26 NSGlassEffectView and fix layer hierarchy",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/068db69"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "6649cef",
    "date": "2026-09-17T15:57:35-04:00",
    "message": "Revert \"fix(graphics): reduce backdrop blur inputRadius to 14.0 for native glass\"",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/6649cef"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "b1602b4",
    "date": "2026-09-17T15:56:55-04:00",
    "message": "fix(graphics): reduce backdrop blur inputRadius to 14.0 for native glass",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/b1602b4"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "2b6039b",
    "date": "2026-09-17T15:54:42-04:00",
    "message": "Revert \"fix(graphics): switch to pure NSVisualEffectMaterialUnderWindowBackground and skip Metal background quad in native glass mode\"",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/2b6039b"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "66a13e7",
    "date": "2026-09-17T15:54:27-04:00",
    "message": "fix(graphics): switch to pure NSVisualEffectMaterialUnderWindowBackground and skip Metal background quad in native glass mode",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/66a13e7"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "fc8f001",
    "date": "2026-09-17T15:52:26-04:00",
    "message": "Revert \"fix(graphics): properly mutate CAFilter array on CABackdropLayer and pull in desktop tint\"",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/fc8f001"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "a8ca171",
    "date": "2026-09-17T15:52:06-04:00",
    "message": "fix(graphics): properly mutate CAFilter array on CABackdropLayer and pull in desktop tint",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/a8ca171"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "10b0391",
    "date": "2026-09-17T15:49:01-04:00",
    "message": "fix(graphics): sharpen backdrop blur to radius 16 and reduce artwork glow over native glass",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/10b0391"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "6317ce1",
    "date": "2026-09-17T15:46:16-04:00",
    "message": "fix(graphics): remove milky tone layer and shader diffusion haze from native glass",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/6317ce1"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "dd4cabf",
    "date": "2026-09-17T15:43:56-04:00",
    "message": "fix(graphics): dynamically soften CoreUI fill and tone layer opacities for native glass translucency",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/dd4cabf"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "f684864",
    "date": "2026-09-17T15:39:41-04:00",
    "message": "fix(graphics): match native macOS widget glass appearance and fix Metal blending",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/f684864"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "797759f",
    "date": "2026-09-17T15:31:16-04:00",
    "message": "chore: untrack .agents/ and AGENTS.md per user gitignore",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/797759f"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "b8c8c1a",
    "date": "2026-09-17T15:29:26-04:00",
    "message": "docs: add AGENTS.md to root to enforce workspace agent rules",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/b8c8c1a"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "cac6ef5",
    "date": "2026-09-17T15:27:45-04:00",
    "message": "chore(rules): add git_commits rule and unignore .agents/rules/",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/cac6ef5"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "4f2b33e",
    "date": "2026-09-17T15:25:58-04:00",
    "message": "docs: update README.md and docs/architecture.md with latest features and architecture",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/4f2b33e"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "ec37d72",
    "date": "2026-09-17T12:07:28-04:00",
    "message": "feat: support XDG config path (~/.config/Wallify/widget-settings.conf)",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/ec37d72"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "014f461",
    "date": "2026-09-17T12:04:51-04:00",
    "message": "fix: increase settings window height by 100px to fit new Visibility and Media Key sections",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/014f461"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "e947874",
    "date": "2026-09-17T12:02:54-04:00",
    "message": "fix: persist and load all new settings (hide_text, hide_progress, font_scale, media_key_target) to widget-settings.conf",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/e947874"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "4e24468",
    "date": "2026-09-17T12:01:53-04:00",
    "message": "chore: remove stale tracked config/widget-settings.conf and gitignore local copies",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/4e24468"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "218fbc1",
    "date": "2026-09-17T12:01:04-04:00",
    "message": "feat: add hide text/progress, font scale, and hardware media key redirect (F7/F8/F9) settings",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/218fbc1"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "d0ed0e1",
    "date": "2026-09-17T11:46:47-04:00",
    "message": "fix: correctly wire Auto media source into Settings UI",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/d0ed0e1"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "cb82193",
    "date": "2026-09-17T11:43:45-04:00",
    "message": "fix: premultiply RGB by alpha in Metal shader to prevent additive blending over native glass",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/cb82193"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "4b806f6",
    "date": "2026-09-17T11:40:54-04:00",
    "message": "ui: switch native glass to UnderWindowBackground with VibrantDark appearance to perfectly match macOS Sonoma desktop widgets",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/4b806f6"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "bd73424",
    "date": "2026-09-17T11:37:48-04:00",
    "message": "ui: change widget glass material to Popover to precisely match macOS native widgets",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/bd73424"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "d6b7ece",
    "date": "2026-09-17T11:36:25-04:00",
    "message": "fix: restore autoresizing on Metal view to prevent aspect ratio distortion when window resizes",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/d6b7ece"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "a6e6ae4",
    "date": "2026-09-17T11:34:37-04:00",
    "message": "fix: decouple specular rim alpha from base color to allow fully transparent native glass",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/a6e6ae4"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "a056239",
    "date": "2026-09-17T11:32:04-04:00",
    "message": "ui: change widget glass material to HUDWindow for higher vibrancy and blur radius",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/a056239"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "f0bcd31",
    "date": "2026-09-17T11:31:17-04:00",
    "message": "feat: add intelligent Auto media source that automatically pivots to the lowest-latency active integration",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/f0bcd31"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "36fdd7d",
    "date": "2026-09-17T11:28:14-04:00",
    "message": "fix: resolve C-ABI struct mismatch and UI tag collision for native glass toggle",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/36fdd7d"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "635acab",
    "date": "2026-09-17T11:25:00-04:00",
    "message": "fix: make widget background dynamically transparent when native glass is enabled",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/635acab"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "90f4e1d",
    "date": "2026-09-17T11:23:21-04:00",
    "message": "ui: make settings window background fully translucent glass",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/90f4e1d"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "6ca6f23",
    "date": "2026-09-17T11:21:28-04:00",
    "message": "feat: add optional true native macOS frosted glass (NSVisualEffectView)",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/6ca6f23"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "7c33fe0",
    "date": "2026-09-17T11:18:59-04:00",
    "message": "docs: add descriptive comments explaining architecture optimizations",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/7c33fe0"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "a20106a",
    "date": "2026-09-17T11:14:50-04:00",
    "message": "ui: upgrade settings window with NSToolbar and NSVisualEffectView",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/a20106a"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "a4a49f0",
    "date": "2026-09-17T11:10:28-04:00",
    "message": "perf: eliminate polling delays, optimize memory, and static asset compilation",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/a4a49f0"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "dc1f516",
    "date": "2026-09-16T01:15:41-04:00",
    "message": "feat: add native settings window, app bundle packaging, and shader enhancements",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/dc1f516"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "a1984f7",
    "date": "2026-09-14T23:39:25-04:00",
    "message": "feat(gpu): add dynamic aurora mesh shader and streamline core engine",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/a1984f7"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "f65503b",
    "date": "2026-09-14T22:35:39-04:00",
    "message": "refactor(graphics): migrate from CPU pixel engine to Metal GPU renderer",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/f65503b"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "71dbe99",
    "date": "2026-09-14T17:50:16-04:00",
    "message": "fix: reset z particles hardcoded offset",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/71dbe99"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "babc6b3",
    "date": "2026-09-14T17:47:51-04:00",
    "message": "feat: move album artwork decoding and transitions to gpu textures",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/babc6b3"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "c5cf83c",
    "date": "2026-09-14T17:45:35-04:00",
    "message": "fix: restore text orientation and scale correctly",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/c5cf83c"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "c9fe756",
    "date": "2026-09-14T17:38:46-04:00",
    "message": "fix: text inversion and ui clicks",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/c9fe756"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "46c3a94",
    "date": "2026-09-14T17:35:33-04:00",
    "message": "feat: gpu text caching migration",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/46c3a94"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "6234f62",
    "date": "2026-09-14T17:30:21-04:00",
    "message": "fix: layout constraints and text blur",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/6234f62"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "6ec4a45",
    "date": "2026-09-14T16:35:16-04:00",
    "message": "docs: progress metal migration checklist",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/6ec4a45"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "004eb6a",
    "date": "2026-09-14T16:35:11-04:00",
    "message": "feat: migrate idle cat graphics to metal texture",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/004eb6a"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "5ae4541",
    "date": "2026-09-14T16:25:54-04:00",
    "message": "docs: progress metal migration checklist",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/5ae4541"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "cd8fa6d",
    "date": "2026-09-14T16:25:08-04:00",
    "message": "feat: switch to MTLRenderPipelineState for drawing frames",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/cd8fa6d"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "0cf0c94",
    "date": "2026-09-14T16:23:49-04:00",
    "message": "chore: setup offline metal compilation",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/0cf0c94"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "2e3f389",
    "date": "2026-09-14T01:52:43-04:00",
    "message": "Optimize performance, fix massive syscall bug, optimize RLE decoding, and fix Kitty rendering borders",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/2e3f389"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "413d72c",
    "date": "2026-09-12T12:13:10-04:00",
    "message": "refactor: modularize platform layer, switchify idle styles, and consolidate test runner",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/413d72c"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "3eff8c1",
    "date": "2026-09-07T05:07:25-04:00",
    "message": "feat: implement artwork glow, add UI menu system, and improve desktop runtime management",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/3eff8c1"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "56dcf6e",
    "date": "2026-09-06T22:20:58-04:00",
    "message": "build: auto-compile preview_frame in run-desktop.sh",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/56dcf6e"
  },
  {
    "repo": "wallify",
    "repoName": "n0thhhing/wallify",
    "hash": "1adb1f9",
    "date": "2026-09-06T22:18:32-04:00",
    "message": "Initial commit: Wallify macOS Kitty desktop media widget",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/wallify/commit/1adb1f9"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "09d00c1",
    "date": "2026-09-03T11:56:39-04:00",
    "message": "feat: add wave equation simulation example and standardize NEON intrinsics across the codebase",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/09d00c1"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "f9e019f",
    "date": "2026-09-02T23:20:44-04:00",
    "message": "feat: implement comparison intrinsics for floating point and integer vectors and regenerate API surface",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/f9e019f"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "6a90033",
    "date": "2026-09-02T22:38:08-04:00",
    "message": "feat: implement NEON intrinsics framework and register target-specific instructions",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/6a90033"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "b8f91ea",
    "date": "2025-10-07T11:36:30-04:00",
    "message": "Update tests.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/b8f91ea"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "b526e70",
    "date": "2025-09-02T09:11:25-04:00",
    "message": "Update tests.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/b526e70"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "1fe759a",
    "date": "2025-09-02T09:08:26-04:00",
    "message": "Update tests.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/1fe759a"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "ea5290d",
    "date": "2025-08-30T16:07:59-04:00",
    "message": "Update zig verion for actions",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/ea5290d"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "9c02597",
    "date": "2025-08-30T14:37:20-04:00",
    "message": "better way to test everything without going outside of comptime(but removed the option to forcefully remove asm/builtin support)",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/9c02597"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "908e472",
    "date": "2025-02-04T23:41:59-05:00",
    "message": "some fixes",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/908e472"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "ff2f416",
    "date": "2025-01-15T19:40:36-05:00",
    "message": "accidentally gitignored examples",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/ff2f416"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "cd241db",
    "date": "2025-01-15T19:23:04-05:00",
    "message": "name change and more cleanup",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/cd241db"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "c104356",
    "date": "2025-01-15T17:05:37-05:00",
    "message": "some cleanup",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/c104356"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "b370264",
    "date": "2025-01-12T23:48:21Z",
    "message": "implement zip1*, zip2* and vtrnq*",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/b370264"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "bae98bf",
    "date": "2025-01-12T20:26:21Z",
    "message": "implement vdupq_n*",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/bae98bf"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "235a299",
    "date": "2025-01-09T15:41:50Z",
    "message": "implement vmlaq*",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/235a299"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "f2414fe",
    "date": "2025-01-07T18:02:57-05:00",
    "message": "update version",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/f2414fe"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "eaecc71",
    "date": "2025-01-07T18:02:36-05:00",
    "message": "mention potential error",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/eaecc71"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "26a9a92",
    "date": "2025-01-07T17:57:27-05:00",
    "message": "Update tests.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/26a9a92"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "41ae0e0",
    "date": "2025-01-07T17:54:43-05:00",
    "message": "Create tests.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/41ae0e0"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "8c35e4a",
    "date": "2025-01-07T17:52:20-05:00",
    "message": "fix some stuff",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/8c35e4a"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "178493c",
    "date": "2025-01-07T17:42:37-05:00",
    "message": "fix typings path",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/178493c"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "cf196b2",
    "date": "2025-01-07T17:31:30-05:00",
    "message": "update package.json",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/cf196b2"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "b7634d7",
    "date": "2025-01-07T17:30:09-05:00",
    "message": "add main",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/b7634d7"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "9ad5bba",
    "date": "2025-01-07T17:23:50-05:00",
    "message": "edit makefile",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/9ad5bba"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "d67431d",
    "date": "2025-01-07T17:21:44-05:00",
    "message": "add license",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/d67431d"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "c6a6410",
    "date": "2025-01-07T17:17:41-05:00",
    "message": "change version #",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/c6a6410"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "fc4e810",
    "date": "2025-01-07T17:16:47-05:00",
    "message": "add homepage/repo",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/fc4e810"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "62c3acd",
    "date": "2025-01-07T17:11:53-05:00",
    "message": "fix some type errors, update keywords and remove dump()",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/62c3acd"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "98b5883",
    "date": "2025-01-07T15:15:43-05:00",
    "message": "update package name and version",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/98b5883"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "9acc3bf",
    "date": "2025-01-07T15:14:23-05:00",
    "message": "fix type file loc",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/9acc3bf"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "165a527",
    "date": "2025-01-07T15:12:49-05:00",
    "message": "compile using the latest emsdk",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/165a527"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "ba47bbb",
    "date": "2025-01-06T00:18:59Z",
    "message": "replace has_* with with a helper function to reduce long if statements, also add some aliases for the types",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/ba47bbb"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "ac8464b",
    "date": "2025-01-03T23:05:23Z",
    "message": "remove unnecessary targets(testIntrinsic covers everything)",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/ac8464b"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "6648a4c",
    "date": "2025-01-03T16:34:19Z",
    "message": "more inline assembly/builtins",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/6648a4c"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "4c04f9c",
    "date": "2025-01-02T22:37:51-05:00",
    "message": "Update README.md",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/4c04f9c"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "7e511b3",
    "date": "2025-01-02T22:37:07-05:00",
    "message": "Update README.md",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/7e511b3"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "b85d721",
    "date": "2025-01-02T18:35:53Z",
    "message": "fix errors uncaught when in Debug mode",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/b85d721"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "a2333b7",
    "date": "2025-01-01T20:35:49Z",
    "message": "additional functions",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/a2333b7"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "7adf143",
    "date": "2024-12-31T02:59:48Z",
    "message": "again",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/7adf143"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "cd4cc51",
    "date": "2024-12-31T02:59:29Z",
    "message": "fix problem with vecLen being called at runtime",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/cd4cc51"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "b7e3b67",
    "date": "2024-12-29T21:49:13Z",
    "message": "more inline assembly/builtins",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/b7e3b67"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "ccc91da",
    "date": "2024-12-27T20:36:35Z",
    "message": "additional functions",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/ccc91da"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "3cbf19a",
    "date": "2024-12-27T18:34:57Z",
    "message": "makefile",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/3cbf19a"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "dddc393",
    "date": "2024-12-27T18:33:40Z",
    "message": "fix ignorelines",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/dddc393"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "f601b85",
    "date": "2024-12-27T18:33:03Z",
    "message": "update git stuff",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/f601b85"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "2cc029d",
    "date": "2024-12-27T12:29:01-05:00",
    "message": "Update README.md",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/2cc029d"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "4e18ff2",
    "date": "2024-12-27T11:47:15-05:00",
    "message": "Update README.md",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/4e18ff2"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "6c787ab",
    "date": "2024-12-27T10:49:54-05:00",
    "message": "Update README.md",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/6c787ab"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "43115d2",
    "date": "2024-12-25T19:49:46Z",
    "message": "more inline assembly and builtins",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/43115d2"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "b4d368e",
    "date": "2024-12-25T00:11:59Z",
    "message": "more additions to assembly/builtins",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/b4d368e"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "850b9d7",
    "date": "2024-12-24T22:40:45Z",
    "message": "some more fixes",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/850b9d7"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "6670eb8",
    "date": "2024-12-23T23:32:10Z",
    "message": "some asm fixes(unfinished)",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/6670eb8"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "828a16b",
    "date": "2024-12-20T21:08:37Z",
    "message": "update README.md",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/828a16b"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "866c1c7",
    "date": "2024-12-20T15:30:14-05:00",
    "message": "Create .gitignore",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/866c1c7"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "e707947",
    "date": "2024-12-20T15:28:43-05:00",
    "message": "Update README.md",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/e707947"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "b4160c9",
    "date": "2024-12-20T15:28:27-05:00",
    "message": "Update README.md",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/b4160c9"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "7f98216",
    "date": "2024-12-20T15:27:41-05:00",
    "message": "Create LICENSE",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/7f98216"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "eb2b806",
    "date": "2024-12-20T15:27:11-05:00",
    "message": "Rename src/build.zig.zon to build.zig.zon",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/eb2b806"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "95da7c0",
    "date": "2024-12-20T15:26:55-05:00",
    "message": "Create build.zig.zon",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/95da7c0"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "8aed735",
    "date": "2024-12-20T15:22:21-05:00",
    "message": "Update zig-neon.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/8aed735"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "2eaf58e",
    "date": "2024-12-19T22:39:52-05:00",
    "message": "Update build.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/2eaf58e"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "6519cbc",
    "date": "2024-12-19T22:39:24-05:00",
    "message": "Update tests.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/6519cbc"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "245998b",
    "date": "2024-12-19T22:35:00-05:00",
    "message": "Update tests.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/245998b"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "2d0a749",
    "date": "2024-12-19T16:54:19-05:00",
    "message": "Update build.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/2d0a749"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "ab1d81f",
    "date": "2024-12-19T16:51:28-05:00",
    "message": "Update tests.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/ab1d81f"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "353156d",
    "date": "2024-12-19T16:49:29-05:00",
    "message": "Update tests.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/353156d"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "bbbb758",
    "date": "2024-12-19T16:47:43-05:00",
    "message": "Update tests.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/bbbb758"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "d11caa2",
    "date": "2024-12-19T16:44:59-05:00",
    "message": "Update tests.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/d11caa2"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "edc410c",
    "date": "2024-12-19T16:38:12-05:00",
    "message": "Update tests.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/edc410c"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "2b6572d",
    "date": "2024-12-19T16:36:01-05:00",
    "message": "Update tests.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/2b6572d"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "57c51b0",
    "date": "2024-12-19T16:24:07-05:00",
    "message": "Update tests.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/57c51b0"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "361a701",
    "date": "2024-12-19T15:37:07-05:00",
    "message": "Update tests.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/361a701"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "4514d19",
    "date": "2024-12-19T15:34:12-05:00",
    "message": "Update tests.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/4514d19"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "1e4c749",
    "date": "2024-12-19T15:31:14-05:00",
    "message": "added aarch64_be qemu for tests",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/1e4c749"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "61c117c",
    "date": "2024-12-19T15:24:50-05:00",
    "message": "big endian test",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/61c117c"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "bdab217",
    "date": "2024-12-19T10:09:30-05:00",
    "message": "features-sub",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/bdab217"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "704dc10",
    "date": "2024-12-19T09:49:14-05:00",
    "message": "bitwise select",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/704dc10"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "f10811d",
    "date": "2024-12-18T22:25:42-05:00",
    "message": "Update zig-neon.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/f10811d"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "79719c5",
    "date": "2024-12-18T18:27:38-05:00",
    "message": "added vand*",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/79719c5"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "db43796",
    "date": "2024-12-18T17:20:24-05:00",
    "message": "Update build.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/db43796"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "79918fb",
    "date": "2024-12-18T17:19:49-05:00",
    "message": "Update and rename native.yml to tests.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/79918fb"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "baa27ce",
    "date": "2024-12-18T17:19:22-05:00",
    "message": "Update build.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/baa27ce"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "ffd2038",
    "date": "2024-12-18T17:19:18-05:00",
    "message": "Delete .github/workflows/basic.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/ffd2038"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "5893149",
    "date": "2024-12-18T17:17:15-05:00",
    "message": "Update zig-neon.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/5893149"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "dd5fe2f",
    "date": "2024-12-18T17:14:43-05:00",
    "message": "Update zig-neon.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/dd5fe2f"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "23513a5",
    "date": "2024-12-18T17:13:29-05:00",
    "message": "Update zig-neon.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/23513a5"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "e5243f4",
    "date": "2024-12-18T17:10:47-05:00",
    "message": "Update zig-neon.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/e5243f4"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "c0cb8cf",
    "date": "2024-12-18T17:09:33-05:00",
    "message": "Update zig-neon.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/c0cb8cf"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "9b5a723",
    "date": "2024-12-18T17:06:09-05:00",
    "message": "Update zig-neon.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/9b5a723"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "48e5962",
    "date": "2024-12-18T17:02:52-05:00",
    "message": "Update zig-neon.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/48e5962"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "4b87762",
    "date": "2024-12-18T17:01:45-05:00",
    "message": "Update zig-neon.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/4b87762"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "458c1b7",
    "date": "2024-12-18T17:00:22-05:00",
    "message": "Update zig-neon.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/458c1b7"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "b0eb44e",
    "date": "2024-12-18T16:58:53-05:00",
    "message": "Update zig-neon.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/b0eb44e"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "5dc4806",
    "date": "2024-12-18T16:56:42-05:00",
    "message": "Update zig-neon.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/5dc4806"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "38fa84d",
    "date": "2024-12-18T16:55:24-05:00",
    "message": "Update zig-neon.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/38fa84d"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "54c6998",
    "date": "2024-12-18T16:53:47-05:00",
    "message": "Update basic.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/54c6998"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "d14a853",
    "date": "2024-12-18T16:47:59-05:00",
    "message": "Update zig-neon.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/d14a853"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "6eea83e",
    "date": "2024-12-18T16:43:37-05:00",
    "message": "Update zig-neon.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/6eea83e"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "4a801bd",
    "date": "2024-12-18T16:40:11-05:00",
    "message": "Update zig-neon.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/4a801bd"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "45e09a7",
    "date": "2024-12-18T16:27:59-05:00",
    "message": "Update basic.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/45e09a7"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "0ec6944",
    "date": "2024-12-18T16:25:45-05:00",
    "message": "Update native.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/0ec6944"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "98dbaac",
    "date": "2024-12-18T16:25:42-05:00",
    "message": "Update basic.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/98dbaac"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "93ade04",
    "date": "2024-12-18T16:22:57-05:00",
    "message": "Update basic.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/93ade04"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "abf1750",
    "date": "2024-12-18T16:21:10-05:00",
    "message": "Create basic.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/abf1750"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "3019edc",
    "date": "2024-12-18T16:21:02-05:00",
    "message": "Update build.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/3019edc"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "5bb6dc8",
    "date": "2024-12-18T16:17:33-05:00",
    "message": "Update and rename tests.yml to native.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/5bb6dc8"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "90c4229",
    "date": "2024-12-18T16:15:28-05:00",
    "message": "Update build.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/90c4229"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "f55fd63",
    "date": "2024-12-18T16:14:46-05:00",
    "message": "Update tests.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/f55fd63"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "360bf68",
    "date": "2024-12-18T16:14:29-05:00",
    "message": "Update build.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/360bf68"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "544dc17",
    "date": "2024-12-18T16:11:31-05:00",
    "message": "Update tests.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/544dc17"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "f688dd2",
    "date": "2024-12-18T16:05:29-05:00",
    "message": "Update build.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/f688dd2"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "64e4dc5",
    "date": "2024-12-18T16:04:09-05:00",
    "message": "Update build.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/64e4dc5"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "3501806",
    "date": "2024-12-18T16:02:40-05:00",
    "message": "Update build.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/3501806"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "537a318",
    "date": "2024-12-18T16:02:12-05:00",
    "message": "Delete native-build.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/537a318"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "afabe53",
    "date": "2024-12-18T15:37:42-05:00",
    "message": "Update zig-neon.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/afabe53"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "30a2274",
    "date": "2024-12-18T15:36:29-05:00",
    "message": "Update tests.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/30a2274"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "e1f7047",
    "date": "2024-12-18T15:34:47-05:00",
    "message": "Update build.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/e1f7047"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "eea0eba",
    "date": "2024-12-18T15:23:30-05:00",
    "message": "Update tests.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/eea0eba"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "b9ccc8c",
    "date": "2024-12-18T15:22:08-05:00",
    "message": "Update and rename arm-build.zig to build.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/b9ccc8c"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "7717482",
    "date": "2024-12-18T15:18:33-05:00",
    "message": "Update tests.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/7717482"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "cbae8ea",
    "date": "2024-12-18T15:13:02-05:00",
    "message": "Update tests.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/cbae8ea"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "2ba962a",
    "date": "2024-12-18T15:12:48-05:00",
    "message": "Update tests.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/2ba962a"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "6241378",
    "date": "2024-12-18T15:11:31-05:00",
    "message": "Update tests.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/6241378"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "ff0a0ca",
    "date": "2024-12-18T15:09:39-05:00",
    "message": "Update tests.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/ff0a0ca"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "eb5b059",
    "date": "2024-12-18T15:06:17-05:00",
    "message": "Update tests.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/eb5b059"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "3f635ea",
    "date": "2024-12-18T15:05:20-05:00",
    "message": "Rename build.zig to native-build.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/3f635ea"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "07bab23",
    "date": "2024-12-18T15:04:22-05:00",
    "message": "Update build.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/07bab23"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "b14f120",
    "date": "2024-12-18T15:03:20-05:00",
    "message": "Create arm-build.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/b14f120"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "7e7547b",
    "date": "2024-12-18T15:01:03-05:00",
    "message": "Update and rename blank.yml to tests.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/7e7547b"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "c0d7367",
    "date": "2024-12-18T14:56:35-05:00",
    "message": "Update blank.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/c0d7367"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "3e6db7a",
    "date": "2024-12-18T14:35:04-05:00",
    "message": "Update blank.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/3e6db7a"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "62d335f",
    "date": "2024-12-18T14:24:31-05:00",
    "message": "some more functions and some buitins/assembly",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/62d335f"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "af1307d",
    "date": "2024-12-18T14:23:53-05:00",
    "message": "test targets",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/af1307d"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "2cf9308",
    "date": "2024-12-11T17:02:35-05:00",
    "message": "Update README.md",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/2cf9308"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "84aeefe",
    "date": "2024-12-11T08:01:36-05:00",
    "message": "fix comments",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/84aeefe"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "0d941ea",
    "date": "2024-12-10T21:43:00-05:00",
    "message": "more vector add functions",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/0d941ea"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "b87a8a2",
    "date": "2024-12-10T13:25:24-05:00",
    "message": "Update zig-neon.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/b87a8a2"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "6417e1c",
    "date": "2024-12-10T11:17:10-05:00",
    "message": "Update blank.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/6417e1c"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "73b3280",
    "date": "2024-12-10T11:16:23-05:00",
    "message": "Update blank.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/73b3280"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "f63616c",
    "date": "2024-12-10T11:13:15-05:00",
    "message": "Update blank.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/f63616c"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "05550c5",
    "date": "2024-12-10T11:10:42-05:00",
    "message": "Update blank.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/05550c5"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "6b4b6d0",
    "date": "2024-12-10T11:07:06-05:00",
    "message": "Update zig-neon.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/6b4b6d0"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "246b5d0",
    "date": "2024-12-10T11:06:42-05:00",
    "message": "Update blank.yml",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/246b5d0"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "6d917c3",
    "date": "2024-12-10T11:03:49-05:00",
    "message": "Update zig-neon.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/6d917c3"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "cc61cd9",
    "date": "2024-12-10T11:03:06-05:00",
    "message": "added workflows",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/cc61cd9"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "69c0c5e",
    "date": "2024-12-10T10:53:42-05:00",
    "message": "move main file to src",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/69c0c5e"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "9798a97",
    "date": "2024-12-10T10:53:13-05:00",
    "message": "add build",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/9798a97"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "9274504",
    "date": "2024-12-10T10:47:26-05:00",
    "message": "Update zig-neon.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/9274504"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "74f95b4",
    "date": "2024-12-10T09:59:13-05:00",
    "message": "Update zig-neon.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/74f95b4"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "cc0413e",
    "date": "2024-12-09T18:04:15-05:00",
    "message": "handle overflows for abd*",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/cc0413e"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "f3a4b4c",
    "date": "2024-12-08T15:28:33-05:00",
    "message": "Update README.md",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/f3a4b4c"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "bc60cae",
    "date": "2024-12-07T12:02:06-05:00",
    "message": "Update README.md",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/bc60cae"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "32a6d8c",
    "date": "2024-12-06T11:52:56-05:00",
    "message": "Create README.md",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/32a6d8c"
  },
  {
    "repo": "zeon",
    "repoName": "n0thhhing/zeon",
    "hash": "b3422c1",
    "date": "2024-12-06T11:41:25-05:00",
    "message": "Create zig-neon.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/zeon/commit/b3422c1"
  },
  {
    "repo": "sse4-strstr-zig",
    "repoName": "n0thhhing/sse4-strstr-zig",
    "hash": "26227a9",
    "date": "2024-12-05T13:29:17Z",
    "message": "Update neon-strstr.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/sse4-strstr-zig/commit/26227a9"
  },
  {
    "repo": "sse4-strstr-zig",
    "repoName": "n0thhhing/sse4-strstr-zig",
    "hash": "3bf5822",
    "date": "2024-12-05T13:28:32Z",
    "message": "Update example.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/sse4-strstr-zig/commit/3bf5822"
  },
  {
    "repo": "sse4-strstr-zig",
    "repoName": "n0thhhing/sse4-strstr-zig",
    "hash": "a54f274",
    "date": "2024-12-05T13:28:00Z",
    "message": "Create example.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/sse4-strstr-zig/commit/a54f274"
  },
  {
    "repo": "sse4-strstr-zig",
    "repoName": "n0thhhing/sse4-strstr-zig",
    "hash": "baf4bc1",
    "date": "2024-12-05T12:06:25Z",
    "message": "Update neon-strstr.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/sse4-strstr-zig/commit/baf4bc1"
  },
  {
    "repo": "sse4-strstr-zig",
    "repoName": "n0thhhing/sse4-strstr-zig",
    "hash": "18b96b2",
    "date": "2024-12-05T03:10:51Z",
    "message": "Update README.md",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/sse4-strstr-zig/commit/18b96b2"
  },
  {
    "repo": "sse4-strstr-zig",
    "repoName": "n0thhhing/sse4-strstr-zig",
    "hash": "ce891ed",
    "date": "2024-12-05T03:10:35Z",
    "message": "Update neon-strstr.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/sse4-strstr-zig/commit/ce891ed"
  },
  {
    "repo": "sse4-strstr-zig",
    "repoName": "n0thhhing/sse4-strstr-zig",
    "hash": "7e11e3a",
    "date": "2024-12-05T02:42:10Z",
    "message": "Update README.md",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/sse4-strstr-zig/commit/7e11e3a"
  },
  {
    "repo": "sse4-strstr-zig",
    "repoName": "n0thhhing/sse4-strstr-zig",
    "hash": "c6c36a6",
    "date": "2024-12-05T02:41:49Z",
    "message": "Update README.md",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/sse4-strstr-zig/commit/c6c36a6"
  },
  {
    "repo": "sse4-strstr-zig",
    "repoName": "n0thhhing/sse4-strstr-zig",
    "hash": "974932e",
    "date": "2024-12-04T16:39:56Z",
    "message": "Create README.md",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/sse4-strstr-zig/commit/974932e"
  },
  {
    "repo": "sse4-strstr-zig",
    "repoName": "n0thhhing/sse4-strstr-zig",
    "hash": "98f3d29",
    "date": "2024-12-04T16:39:40Z",
    "message": "Create neon-strstr.zig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/sse4-strstr-zig/commit/98f3d29"
  },
  {
    "repo": "z-scanner",
    "repoName": "n0thhhing/z-scanner",
    "hash": "6995c47",
    "date": "2024-12-03T22:04:43Z",
    "message": "calback includes the buffer",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/z-scanner/commit/6995c47"
  },
  {
    "repo": "z-scanner",
    "repoName": "n0thhhing/z-scanner",
    "hash": "f0fb243",
    "date": "2024-12-01T21:06:42Z",
    "message": "Update README.md",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/z-scanner/commit/f0fb243"
  },
  {
    "repo": "z-scanner",
    "repoName": "n0thhhing/z-scanner",
    "hash": "d318ee3",
    "date": "2024-11-19T00:02:33Z",
    "message": "Delete offsets.txt",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/z-scanner/commit/d318ee3"
  },
  {
    "repo": "z-scanner",
    "repoName": "n0thhhing/z-scanner",
    "hash": "73d7aa0",
    "date": "2024-11-18T22:21:51Z",
    "message": "offsets.txt",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/z-scanner/commit/73d7aa0"
  },
  {
    "repo": "z-scanner",
    "repoName": "n0thhhing/z-scanner",
    "hash": "1c46c51",
    "date": "2024-11-18T22:18:06Z",
    "message": "initial commit",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/z-scanner/commit/1c46c51"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "a0a389e",
    "date": "2024-06-12T14:21:48-04:00",
    "message": "some minor fixes as well as new additions to functions",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/a0a389e"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "fd29b8a",
    "date": "2024-05-14T09:15:18-04:00",
    "message": "readme",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/fd29b8a"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "45b1d0b",
    "date": "2024-05-14T09:12:54-04:00",
    "message": "variable naming issues fixed",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/45b1d0b"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "ce37411",
    "date": "2024-05-08T09:31:46-04:00",
    "message": "some jsdoc",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/ce37411"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "d33a533",
    "date": "2024-05-06T09:45:02-04:00",
    "message": "path names",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/d33a533"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "85d4d0a",
    "date": "2024-05-05T16:33:41-04:00",
    "message": "dead code elimination",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/85d4d0a"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "9f7dd9d",
    "date": "2024-05-05T16:27:38-04:00",
    "message": "removed unnecessary *",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/9f7dd9d"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "6cd7cda",
    "date": "2024-05-05T16:24:47-04:00",
    "message": "submodule retry",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/6cd7cda"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "b1e55c4",
    "date": "2024-05-05T16:21:48-04:00",
    "message": "submodule didnt work,",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/b1e55c4"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "6f15dbc",
    "date": "2024-05-05T16:17:33-04:00",
    "message": "capstone submodule",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/6f15dbc"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "b89fa79",
    "date": "2024-05-05T16:13:24-04:00",
    "message": "more options have been added, also added examples in README.md",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/b89fa79"
  },
  {
    "repo": "Offset-updater",
    "repoName": "n0thhhing/Offset-updater",
    "hash": "96d31b0",
    "date": "2024-05-03T20:41:52-04:00",
    "message": "Update README.md",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/Offset-updater/commit/96d31b0"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "97f5fb5",
    "date": "2024-04-29T13:09:52-04:00",
    "message": "each arch has its own corresponding file, including constants, interfaces and the class for detail",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/97f5fb5"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "0c3b8aa",
    "date": "2024-04-24T16:05:49-04:00",
    "message": "all functions implemented w/there corresponding tests",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/0c3b8aa"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "43d9368",
    "date": "2024-04-21T19:49:41-04:00",
    "message": "Merge branch 'main' of https://github.com/n0thhhing/ts-capstone",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/43d9368"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "09a178a",
    "date": "2024-04-21T19:36:30-04:00",
    "message": "architecture tests",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/09a178a"
  },
  {
    "repo": "Discord-rich-presence",
    "repoName": "n0thhhing/Discord-rich-presence",
    "hash": "d02bed9",
    "date": "2024-04-20T19:03:34-04:00",
    "message": "unnecessary dependancies removed",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/Discord-rich-presence/commit/d02bed9"
  },
  {
    "repo": "Discord-rich-presence",
    "repoName": "n0thhhing/Discord-rich-presence",
    "hash": "b5cfc49",
    "date": "2024-04-20T18:12:01-04:00",
    "message": "Update RichPresence.js",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/Discord-rich-presence/commit/b5cfc49"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "80793c9",
    "date": "2024-04-20T17:42:56-04:00",
    "message": "eventually JSDoc will replace this anyways",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/80793c9"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "cd2ccd9",
    "date": "2024-04-19T17:57:24-04:00",
    "message": "adding tests for arch",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/cd2ccd9"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "c1392e6",
    "date": "2024-04-17T11:35:05-04:00",
    "message": "all architectures have been validated, also fixed i64 inaccuracy, also fixed some architecture objects",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/c1392e6"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "87c4fbc",
    "date": "2024-04-14T12:26:40-04:00",
    "message": "checks for xcore and m680x detail comapared to native capstone",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/87c4fbc"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "09fd19d",
    "date": "2024-04-14T09:52:16-04:00",
    "message": "formating",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/09fd19d"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "bc4af05",
    "date": "2024-04-14T09:43:58-04:00",
    "message": "All architectures implemented including wasm, riscv, tricore, sh ect, also all of cs.OPT_DETAIL has been implemented(currently tested 11)",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/bc4af05"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "2ef2211",
    "date": "2024-04-14T09:27:16-04:00",
    "message": "readme",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/2ef2211"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "c3e490e",
    "date": "2024-04-14T09:19:05-04:00",
    "message": "readme updated",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/c3e490e"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "f796376",
    "date": "2024-04-14T09:16:22-04:00",
    "message": "updated to 5.0, all arch implemented including wasm, riscv ect.. also detail",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/f796376"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "b6f3ba6",
    "date": "2024-04-05T09:13:38-04:00",
    "message": "SIGSEGV (Address boundary error)",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/b6f3ba6"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "eb60319",
    "date": "2024-03-23T06:00:07-04:00",
    "message": "some types and better build",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/eb60319"
  },
  {
    "repo": "ts-capstone",
    "repoName": "n0thhhing/ts-capstone",
    "hash": "739160f",
    "date": "2024-03-22T13:24:36-04:00",
    "message": "what",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/ts-capstone/commit/739160f"
  },
  {
    "repo": "Offset-updater",
    "repoName": "n0thhhing/Offset-updater",
    "hash": "6edf9c8",
    "date": "2024-03-10T09:59:22-04:00",
    "message": "Updated README.md",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/Offset-updater/commit/6edf9c8"
  },
  {
    "repo": "Offset-updater",
    "repoName": "n0thhhing/Offset-updater",
    "hash": "68f0d28",
    "date": "2024-03-10T09:57:44-04:00",
    "message": "idk brug, im horrible at making fast algorithms",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/Offset-updater/commit/68f0d28"
  },
  {
    "repo": "Offset-updater",
    "repoName": "n0thhhing/Offset-updater",
    "hash": "96c1a1c",
    "date": "2024-03-06T20:30:48-05:00",
    "message": "No Dependencies!!!!",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/Offset-updater/commit/96c1a1c"
  },
  {
    "repo": "Offset-updater",
    "repoName": "n0thhhing/Offset-updater",
    "hash": "f241610",
    "date": "2024-03-04T13:23:27-05:00",
    "message": "seems like i suck at effecient algorithms so im sticking to regex",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/Offset-updater/commit/f241610"
  },
  {
    "repo": "Offset-updater",
    "repoName": "n0thhhing/Offset-updater",
    "hash": "eaf52b3",
    "date": "2024-03-02T17:58:16-05:00",
    "message": "wha",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/Offset-updater/commit/eaf52b3"
  },
  {
    "repo": "Offset-updater",
    "repoName": "n0thhhing/Offset-updater",
    "hash": "457aa3f",
    "date": "2024-02-29T07:28:41-05:00",
    "message": "formats and more testing",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/Offset-updater/commit/457aa3f"
  },
  {
    "repo": "Offset-updater",
    "repoName": "n0thhhing/Offset-updater",
    "hash": "079f4e8",
    "date": "2024-02-25T20:45:49-05:00",
    "message": "wa",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/Offset-updater/commit/079f4e8"
  },
  {
    "repo": "Offset-updater",
    "repoName": "n0thhhing/Offset-updater",
    "hash": "5cd6e6c",
    "date": "2024-02-25T15:30:19-05:00",
    "message": "format",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/Offset-updater/commit/5cd6e6c"
  },
  {
    "repo": "Offset-updater",
    "repoName": "n0thhhing/Offset-updater",
    "hash": "0a87b57",
    "date": "2024-02-25T15:28:04-05:00",
    "message": "pattern algorthm tests",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/Offset-updater/commit/0a87b57"
  },
  {
    "repo": "Offset-updater",
    "repoName": "n0thhhing/Offset-updater",
    "hash": "3e0f7a0",
    "date": "2024-02-25T13:56:02-05:00",
    "message": "what",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/Offset-updater/commit/3e0f7a0"
  },
  {
    "repo": "Offset-updater",
    "repoName": "n0thhhing/Offset-updater",
    "hash": "ae809aa",
    "date": "2024-02-25T13:41:59-05:00",
    "message": "stuff",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/Offset-updater/commit/ae809aa"
  },
  {
    "repo": "Offset-updater",
    "repoName": "n0thhhing/Offset-updater",
    "hash": "89f7872",
    "date": "2024-02-24T21:59:44-05:00",
    "message": "more types",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/Offset-updater/commit/89f7872"
  },
  {
    "repo": "Offset-updater",
    "repoName": "n0thhhing/Offset-updater",
    "hash": "221e207",
    "date": "2024-02-24T19:29:59-05:00",
    "message": "updater config typings",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/Offset-updater/commit/221e207"
  },
  {
    "repo": "Offset-updater",
    "repoName": "n0thhhing/Offset-updater",
    "hash": "8ba6d5b",
    "date": "2024-02-24T19:26:08-05:00",
    "message": "more types",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/Offset-updater/commit/8ba6d5b"
  },
  {
    "repo": "Offset-updater",
    "repoName": "n0thhhing/Offset-updater",
    "hash": "0c2a880",
    "date": "2024-02-24T19:03:20-05:00",
    "message": "typescript error fixes",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/Offset-updater/commit/0c2a880"
  },
  {
    "repo": "Offset-updater",
    "repoName": "n0thhhing/Offset-updater",
    "hash": "cd4e947",
    "date": "2024-02-24T14:27:50-05:00",
    "message": "updates lol",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/Offset-updater/commit/cd4e947"
  },
  {
    "repo": "Offset-updater",
    "repoName": "n0thhhing/Offset-updater",
    "hash": "c9fbb5e",
    "date": "2024-02-24T14:14:06-05:00",
    "message": "w",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/Offset-updater/commit/c9fbb5e"
  },
  {
    "repo": "Offset-updater",
    "repoName": "n0thhhing/Offset-updater",
    "hash": "b1bcaea",
    "date": "2024-02-24T14:12:37-05:00",
    "message": "first commit",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/Offset-updater/commit/b1bcaea"
  },
  {
    "repo": "Discord-rich-presence",
    "repoName": "n0thhhing/Discord-rich-presence",
    "hash": "c608522",
    "date": "2023-12-11T22:39:15Z",
    "message": "S",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/Discord-rich-presence/commit/c608522"
  },
  {
    "repo": "Discord-rich-presence",
    "repoName": "n0thhhing/Discord-rich-presence",
    "hash": "d6c0c5e",
    "date": "2023-12-11T22:37:39Z",
    "message": "S",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/Discord-rich-presence/commit/d6c0c5e"
  },
  {
    "repo": "Discord-rich-presence",
    "repoName": "n0thhhing/Discord-rich-presence",
    "hash": "178281a",
    "date": "2023-12-11T22:29:51Z",
    "message": "Ycucu8c",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/Discord-rich-presence/commit/178281a"
  },
  {
    "repo": "Discord-rich-presence",
    "repoName": "n0thhhing/Discord-rich-presence",
    "hash": "72dc03c",
    "date": "2023-12-11T22:25:35Z",
    "message": "What",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/Discord-rich-presence/commit/72dc03c"
  },
  {
    "repo": "Discord-rich-presence",
    "repoName": "n0thhhing/Discord-rich-presence",
    "hash": "9cc5278",
    "date": "2023-12-03T04:00:10Z",
    "message": "S",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/Discord-rich-presence/commit/9cc5278"
  },
  {
    "repo": "Discord-rich-presence",
    "repoName": "n0thhhing/Discord-rich-presence",
    "hash": "7294948",
    "date": "2023-12-03T03:51:57Z",
    "message": "Idk",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/Discord-rich-presence/commit/7294948"
  },
  {
    "repo": "Discord-rich-presence",
    "repoName": "n0thhhing/Discord-rich-presence",
    "hash": "29a3185",
    "date": "2023-12-03T03:20:15Z",
    "message": "Added more error handling",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/Discord-rich-presence/commit/29a3185"
  },
  {
    "repo": "Discord-rich-presence",
    "repoName": "n0thhhing/Discord-rich-presence",
    "hash": "605ac50",
    "date": "2023-12-02T23:52:24Z",
    "message": "Added more stuff ig",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/Discord-rich-presence/commit/605ac50"
  },
  {
    "repo": "Discord-rich-presence",
    "repoName": "n0thhhing/Discord-rich-presence",
    "hash": "278b7d5",
    "date": "2023-12-02T23:44:35Z",
    "message": "Added some",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/Discord-rich-presence/commit/278b7d5"
  },
  {
    "repo": "Discord-rich-presence",
    "repoName": "n0thhhing/Discord-rich-presence",
    "hash": "7c8be89",
    "date": "2023-12-02T23:37:31Z",
    "message": "Added some informational param Comments, also promises for better error handling",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/Discord-rich-presence/commit/7c8be89"
  },
  {
    "repo": "Discord-rich-presence",
    "repoName": "n0thhhing/Discord-rich-presence",
    "hash": "93d8dff",
    "date": "2023-12-02T22:00:35Z",
    "message": "More git",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/Discord-rich-presence/commit/93d8dff"
  },
  {
    "repo": "Discord-rich-presence",
    "repoName": "n0thhhing/Discord-rich-presence",
    "hash": "35961c9",
    "date": "2023-12-02T21:59:25Z",
    "message": "Git",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/Discord-rich-presence/commit/35961c9"
  },
  {
    "repo": "Discord-rich-presence",
    "repoName": "n0thhhing/Discord-rich-presence",
    "hash": "f063799",
    "date": "2023-12-02T21:57:38Z",
    "message": "Added some error handling and a README.md",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/Discord-rich-presence/commit/f063799"
  },
  {
    "repo": "Discord-rich-presence",
    "repoName": "n0thhhing/Discord-rich-presence",
    "hash": "5d810ff",
    "date": "2023-12-02T20:33:00Z",
    "message": "Added url parsing to small and large image rpc params",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/Discord-rich-presence/commit/5d810ff"
  },
  {
    "repo": "Discord-rich-presence",
    "repoName": "n0thhhing/Discord-rich-presence",
    "hash": "51b0974",
    "date": "2023-12-02T17:35:40Z",
    "message": "Initial commit",
    "author": "Levi",
    "url": "https://github.com/n0thhhing/Discord-rich-presence/commit/51b0974"
  }
];

export const gitCommits = rawCommits.map(c => ({
  ...c,
  time: formatRelativeTime(c.date),
}));
