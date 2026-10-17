export const profile = {
  name: 'Levi',
  handle: 'levi.napz',
  alias: 'levi.napz',
  githubHandle: 'n0thhhing',
  github: 'https://github.com/n0thhhing',
  instagram: 'https://instagram.com/levi.napz',
  intro: 'I build tools close to the machine, draw characters, and spend a probably unreasonable amount of time getting my colors right.',
};

export const music = ['redize', 'NEET', 'spawncamped', 'overtonight', 'lantern', 'wifiskeleton'];
export const anime = ['Tokyo Ghoul', 'Steins;Gate', 'Terror in Resonance'];

export const pages = [
  { id: 'home', file: 'README.md', icon: 'M↓' },
  { id: 'about', file: 'about.md', icon: 'M↓' },
  { id: 'projects', file: 'projects.md', icon: 'M↓' },
  { id: 'art', file: 'art.md', icon: 'M↓' },
  { id: 'interests', file: 'interests.md', icon: 'M↓' },
];

// A public repo is optional. Add repoUrl here when a local project is published.
export const projects = [
  {
    id: 'zeon', name: 'zeon', category: 'Systems', featured: true,
    description: 'ARM and ARM64 NEON intrinsics, in pure Zig and inline assembly.',
    tech: ['Zig', 'ARM64', 'NEON'], status: 'In development',
    repoUrl: 'https://github.com/n0thhhing/zeon',
    details: ['Working with vector lanes, instruction behavior, and the code a compiler actually emits.', 'Includes experiments with matrix operations, wave simulations, and Mandelbrot rendering.', 'Built around ARM targets, with cross-target checks and pure Zig implementations alongside assembly.'],
    snippet: '// one instruction, multiple lanes\nconst result = vaddq_f32(a, b);',
  },
  {
    id: 'rarm64', name: 'rarm64', category: 'Systems', featured: true,
    description: 'An ARM64 / ARM64e Mach-O disassembler written in Rust.',
    tech: ['Rust', 'Mach-O', 'ARM64e'], status: 'In development', repoUrl: null,
    details: ['Parses thin and universal Mach-O binaries, symbols, function boundaries, and indirect stubs.', 'Uses the Rust standard library without external crate dependencies.', 'Includes symbol demangling and decoding tables generated from Arm architecture specifications.'],
    snippet: '$ rarm64 ./program\n_main:\n  stp x29, x30, [sp, #-16]!\n  mov x29, sp',
  },
  {
    id: 'wallify', name: 'Wallify', category: 'Apps', featured: true,
    description: 'A native macOS music widget with a little more personality.',
    tech: ['Swift', 'AppKit', 'Metal'], status: 'In development',
    repoUrl: 'https://github.com/n0thhhing/wallify',
    details: ['Built with Swift, AppKit controls, SwiftUI settings, and a Metal renderer.', 'Shows track metadata, album artwork, and playback controls from system media sources, Spotify, or Spotifast.', 'Explores native glass, artwork transitions, an aurora background, and idle companions.'],
    snippet: '// somewhere between music and pixels\nSwift + AppKit + Metal\nartwork → color → atmosphere',
  },
  {
    id: 'lwasm', name: 'lwasm', category: 'Runtimes', featured: true,
    description: 'A WebAssembly decoder, runtime, and inspection toolkit in Lua.',
    tech: ['Lua', 'C', 'WebAssembly'], status: 'In development',
    repoUrl: 'https://github.com/n0thhhing/lwasm',
    details: ['Decodes binary modules, disassembles instructions, produces WAT, and interprets WebAssembly.', 'Runs in Lua, with an optional native C acceleration backend.', 'Grew out of experimenting with Game Guardian and the idea of using WebAssembly for game-memory patches.'],
    snippet: 'local wasm = require("lwasm")\n-- binary in, a little less mystery out',
  },
  {
    id: 'il2cpp', name: 'IL2CPP analyzer', category: 'Reversing', featured: true,
    description: 'Making Unity metadata and ARM64 Android binaries readable.',
    tech: ['Zig', 'ELF', 'SQLite'], status: 'In development', repoUrl: null,
    details: ['Parses Unity IL2CPP metadata v29 and matching 64-bit ARM64 Android ELF binaries.', 'Resolves managed types and native method addresses, including stripped registration structures.', 'Exports C#-style declarations, structured analysis, call graphs, and a SQLite database.'],
    snippet: '$ il2cpp dump global-metadata.dat \\\n    libil2cpp.so ./analysis\n→ types, methods, strings, call graphs',
  },
  {
    id: 'hexer', name: 'hexer', category: 'Systems', featured: true,
    description: 'A read-only terminal hex viewer. Bytes, without the baggage.',
    tech: ['Rust', 'Terminal UI'], status: 'In development', repoUrl: null,
    details: ['Shows paired hex and ASCII columns with terminal-sized rows.', 'Supports mouse interaction, offset jumps, and wildcard byte or exact text searches.', 'Uses the Rust standard library, stty, and ANSI terminal reporting.'],
    snippet: '00000000  68 65 6c 6c 6f 20 77 6f  hello wo\n00000008  72 6c 64 2e              rld.',
  },
  {
    id: 'ts-capstone', name: 'ts-capstone', category: 'Reversing',
    description: 'Capstone disassembly bindings for TypeScript.',
    tech: ['TypeScript', 'Capstone', 'Emscripten'], status: 'Public project',
    repoUrl: 'https://github.com/n0thhhing/ts-capstone',
    details: ['Brings the Capstone disassembly engine into TypeScript through Emscripten.', 'Exposes instruction bytes, mnemonics, operands, and detailed register information.'],
  },
  {
    id: 'offset-updater', name: 'Offset-updater', category: 'Reversing',
    description: 'Tracking IL2CPP method locations across binary updates.',
    tech: ['TypeScript', 'C++', 'NEON'], status: 'In development',
    repoUrl: 'https://github.com/n0thhhing/Offset-updater',
    details: ['Builds disassembler-guided wildcard signatures to find methods after a binary changes.', 'Uses a native ARM NEON scanner with TypeScript fallbacks.', 'Handles signature growth, ambiguous matches, and branch or trampoline verification.'],
  },
  {
    id: 'z-scanner', name: 'z-scanner', category: 'Systems',
    description: 'Array-of-bytes pattern scanning in Zig.',
    tech: ['Zig', 'Pattern matching'], status: 'Public project',
    repoUrl: 'https://github.com/n0thhhing/z-scanner',
    details: ['An experiment in finding byte patterns for memory analysis and reverse-engineering workflows.'],
  },
  {
    id: 'sse4-strstr-zig', name: 'sse4-strstr-zig', category: 'Systems',
    description: 'Exploring substring search through x86 SSE4.2 instructions.',
    tech: ['Zig', 'x86', 'SSE4.2'], status: 'Public project',
    repoUrl: 'https://github.com/n0thhhing/sse4-strstr-zig',
    details: ['A hardware-focused string-search experiment using SSE4.2 string instructions.'],
  },
  {
    id: 'discord-rich-presence', name: 'Discord-rich-presence', category: 'Apps',
    description: 'A custom Discord Rich Presence client.',
    tech: ['JavaScript', 'Node.js', 'IPC'], status: 'Public project',
    repoUrl: 'https://github.com/n0thhhing/Discord-rich-presence',
    details: ['Works with Discord IPC to customize the presence shown on a profile.'],
  },
  {
    id: 'shizukuboothelper', name: 'ShizukuBootHelper', category: 'Apps',
    description: 'An experimental Android helper for Shizuku startup.',
    tech: ['Java', 'Android', 'Termux'], status: 'Experimental', repoUrl: null,
    details: ['Explores a native helper and Termux script for starting Shizuku on Android 17.', 'Hotspot/mobile-data-only startup does not work on the tested phone: wireless ADB requires a suitable Wi-Fi client connection.', 'An experiment with a documented platform limit, rather than a solved boot-start workflow.'],
  },
];

export function repositoryLink(project) {
  return /^https:\/\/github\.com\/n0thhhing\/[\w-]+$/.test(project.repoUrl ?? '') ? project.repoUrl : null;
}

export function projectStatus(project) {
  return repositoryLink(project) ? project.status : 'Local / in development';
}
