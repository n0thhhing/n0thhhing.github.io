import { pages, projects, profile, repositoryLink, projectStatus, music, anime } from './content.js';
import { themes } from './themes.js';

export const commands = ['help', 'ls', 'cd', 'pwd', 'cat', 'open', 'fetch', 'neofetch', 'fastfetch', 'whoami', 'about', 'projects', 'project', 'art', 'music', 'anime', 'themes', 'theme', 'history', 'echo', 'clear'];
const help = [
  ['ls', 'list files in the current directory'], ['cd projects', 'move around the workspace'],
  ['cat about.md', 'read a file right here'], ['open README.md', 'open a file in the editor'],
  ['pwd', 'show the current directory'], ['fetch', 'the short version of me'],
  ['projects', 'browse all projects'], ['project zeon', 'inspect a specific project'],
  ['about', 'the longer introduction'], ['art', 'art, color & Instagram'],
  ['music', 'what’s on repeat'], ['anime', 'favorite stories'],
  ['themes', 'list the palettes'], ['theme panda', 'change the whole workspace'],
  ['history', 'previous commands'], ['clear', 'a clean slate'],
];

export function parseRoute(hash) {
  const route = hash.replace(/^#/, '');
  if (pages.some(page => page.id === route)) return route;
  if (projects.some(project => route === `projects/${project.id}`)) return route;
  return 'home';
}

// These paths describe portfolio content, never the visitor’s filesystem.
function resolvePath(value, cwd = '~') {
  const parts = value.startsWith('~') || value.startsWith('/') ? [] : cwd.slice(2).split('/').filter(Boolean);
  for (const part of value.replace(/^~\/?/, '').split('/')) {
    if (!part || part === '.') continue;
    if (part === '..') parts.pop(); else parts.push(part);
  }
  return '~' + (parts.length ? '/' + parts.join('/') : '');
}

function directory(path) {
  switch (path.toLowerCase()) {
    case '~': return [
      ...pages.map(page => ({ name: page.file, document: page.id })),
      { name: 'projects/', directory: true }, { name: 'themes/', directory: true },
    ];
    case '~/projects': return projects.map(project => ({ name: `${project.id}.md`, project, detail: projectStatus(project) }));
    case '~/themes': return themes.map(theme => ({ name: `${theme.id}.json`, theme }));
    default: return null;
  }
}

function fileAt(path) {
  const split = path.lastIndexOf('/');
  const parent = split < 0 ? '~' : path.slice(0, split);
  const name = path.slice(split + 1).toLowerCase();
  return directory(parent)?.find(file => file.name.toLowerCase() === name);
}

const failure = text => ({ text, error: true });
const projectText = project => `${project.name}\n${project.description}\n\n${project.tech.join(' / ')}\n${projectStatus(project)}\n\n${project.details.map(detail => `• ${detail}`).join('\n')}\n\n${repositoryLink(project) ?? 'No public repository yet.'}`;

export function runCommand(input, context = {}) {
  const cwd = context.cwd ?? '~';
  const [rawCommand = '', ...args] = input.trim().split(/\s+/);
  const command = rawCommand.toLowerCase();
  const value = args.join(' ');
  const arg = value.toLowerCase();
  switch (command) {
    case '': return { text: '' };
    case 'help': return { help, text: `Explore the portfolio\n\n${help.map(([name, description]) => `${name.padEnd(19)} ${description}`).join('\n')}\n\nwhoami · echo <text> · neofetch / fastfetch\n↑ ↓ history · Tab completion · Ctrl+L clear · Ctrl+C cancel · Esc leave\n\nThis is a browser-local portfolio shell.` };
    case 'pwd': return { text: cwd };
    case 'cd': {
      const path = resolvePath(value || '~', cwd).toLowerCase();
      return directory(path) ? { text: '', cwd: path } : failure(`cd: ${value}: no such directory`);
    }
    case 'ls': {
      const path = resolvePath(value || '.', cwd);
      const files = directory(path);
      if (!files) return failure(`ls: ${value}: no such directory`);
      const entries = files.map(file => ({ name: file.name, detail: file.detail, directory: !!file.directory, command: `${file.directory ? 'cd' : 'cat'} ${path === '~' ? '~/' : path + '/'}${file.name}` }));
      return { text: entries.map(entry => entry.name).join('\n'), entries };
    }
    case 'cat': {
      if (!value) return failure('Usage: cat <file>\nTry cat about.md, or cd projects and cat rarm64.md.');
      const path = resolvePath(value, cwd);
      if (directory(path)) return failure(`cat: ${value}: is a directory. Try ls ${value}.`);
      const file = fileAt(path);
      if (!file) return failure(`cat: ${value}: no such file`);
      if (file.document) return { text: '', document: file.document };
      if (file.project) return { text: projectText(file.project) };
      return { text: JSON.stringify(file.theme, null, 2) };
    }
    case 'open': {
      if (!value) return failure('Usage: open <file or project>');
      const project = projects.find(project => project.id === arg || project.name.toLowerCase() === arg);
      const path = resolvePath(value, cwd);
      const file = fileAt(path);
      const route = project ? `projects/${project.id}` : file?.document ?? (file?.project ? `projects/${file.project.id}` : path.toLowerCase() === '~/projects' ? 'projects' : null);
      return route ? { text: `Opened ${value} in the editor.`, route } : failure(`open: ${value}: no page found. Use cat to read theme files.`);
    }
    case 'fetch': case 'neofetch': case 'fastfetch': {
      const theme = themes.find(theme => theme.id === context.theme) ?? themes[0];
      const rows = [
        ['handle', `@${profile.handle}`],
        ['github', `@${profile.githubHandle}`],
        ['focus', 'systems · reverse engineering · art'],
        ['code', 'Zig · Rust · TypeScript · Lua · Swift'],
        ['editor', 'Zed'],
        ['theme', theme.name],
        ['art', 'Clip Studio Paint / @levi.napz'],
      ];
      return { text: `${profile.name}\n${rows.map(([key, value]) => `${key.padEnd(8)} ${value}`).join('\n')}`, fetch: rows };
    }
    case 'history': return { text: (context.history ?? []).map((line, index) => `${String(index + 1).padStart(3)}  ${line}`).join('\n') || 'No commands yet.' };
    case 'echo': return { text: value };
    case 'whoami': return { text: `${profile.name} (@${profile.handle}) · GitHub: @${profile.githubHandle}\n${profile.intro}`, route: 'home' };
    case 'about': return { text: 'Opening about.md. Systems, sketches, and figuring things out.', route: 'about' };
    case 'projects': return { text: projects.map(project => `${project.id.padEnd(23)} ${projectStatus(project)}`).join('\n'), route: 'projects' };
    case 'project': {
      if (!arg) return failure('Usage: project <name>\nTry project zeon, or use Tab to complete a name.');
      const project = projects.find(project => project.id === arg || project.name.toLowerCase() === arg);
      if (!project) return failure(`Project not found: ${value}. Type projects to see the list.`);
      return { text: projectText(project), route: `projects/${project.id}` };
    }
    case 'art': return { text: `Character sketches, Clip Studio Paint, and a very specific relationship with color.\n${profile.instagram}`, route: 'art' };
    case 'music': return { text: `On repeat:\n${music.map(artist => `  ♫ ${artist}`).join('\n')}\n\nA curated rotation, not a live playback feed.`, route: 'interests' };
    case 'anime': return { text: `Favorite stories:\n${anime.join('\n')}`, route: 'interests' };
    case 'themes': return { text: `${themes.map(theme => `${theme.id.padEnd(23)} ${theme.name}`).join('\n')}\n\nTry: theme panda` };
    case 'theme': {
      if (!arg) return { text: 'Usage: theme <name>\nType themes to see the palette.' };
      const theme = themes.find(theme => theme.id === arg || theme.name.toLowerCase() === arg || theme.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') === arg);
      return theme ? { text: `Theme → ${theme.name}. Make yourself comfortable.`, theme: theme.id } : failure(`Unknown theme: ${value}. Type themes for the full list.`);
    }
    case 'clear': return { text: '', clear: true };
    default: return failure(`Command not found: ${rawCommand}. Type help to look around.`);
  }
}

export function completeCommand(input, cwd = '~') {
  const value = input.trimStart().toLowerCase();
  if (!value.includes(' ')) return commands.filter(command => command.startsWith(value));
  const [command, ...args] = value.split(/\s+/);
  const partial = args.join(' ');
  if (command === 'project') return projects.map(project => `project ${project.id}`).filter(candidate => candidate.startsWith(value));
  if (command === 'theme') return themes.map(theme => `theme ${theme.id}`).filter(candidate => candidate.startsWith(value));
  if (!['cd', 'cat', 'ls', 'open'].includes(command)) return [];
  const split = partial.lastIndexOf('/');
  const prefix = partial.slice(0, split + 1);
  const files = directory(resolvePath(prefix || '.', cwd)) ?? [];
  return files.filter(file => !['cd', 'ls'].includes(command) || file.directory)
    .map(file => `${command} ${prefix}${file.name}`).filter(candidate => candidate.toLowerCase().startsWith(value));
}
