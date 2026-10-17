import { pages, projects } from './content.js';

const files = [
  ...pages.map(page => ({ name: page.file, path: `levi/${page.file}`, route: page.id })),
  ...projects.map(project => ({ name: project.name, path: `levi/projects/${project.id}`, route: `projects/${project.id}` })),
];

export function findFiles(query) {
  const words = query.trim().toLowerCase().split(/\s+/);
  return files.filter(file => words.every(word => `${file.name} ${file.path}`.toLowerCase().includes(word)));
}
