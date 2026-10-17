import { pages, projects } from './content.js';

const files = [
  ...pages.map(page => ({ name: page.file, path: `levi/${page.file}`, route: page.id })),
  ...projects.map(project => ({ name: `${project.name}.md`, path: `levi/projects/${project.id}.md`, route: `projects/${project.id}` })),
];

export function fuzzyMatch(text, query) {
  const lower = text.toLowerCase(), positions = [];
  let score = 0;
  for (const word of query.trim().toLowerCase().split(/\s+/)) {
    let previous = -1;
    for (const char of word) {
      const index = lower.indexOf(char, previous + 1);
      if (index < 0) return null;
      score += (index === previous + 1 ? 8 : 0) + (index === 0 || /[\s/_.-]/.test(text[index - 1]) ? 12 : 0) - (index - previous - 1);
      positions.push(index);
      previous = index;
    }
  }
  return { score: score - text.length / 100, positions: [...new Set(positions)].sort((a, b) => a - b) };
}

export function findFiles(query) {
  if (!query.trim()) return files.map(file => ({ ...file, nameMatches: [], pathMatches: [] }));
  return files.flatMap(file => {
    const name = fuzzyMatch(file.name, query), path = fuzzyMatch(file.path, query);
    if (!path && !name) return [];
    return [{ ...file, score: name ? name.score + 100 : path.score, nameMatches: name?.positions ?? [], pathMatches: path?.positions ?? [] }];
  }).sort((a, b) => b.score - a.score);
}
