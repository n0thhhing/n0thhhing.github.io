export function searchText(text, query, options = {}) {
  if (!query) return { matches: [], error: '' };
  try {
    const pattern = options.regex ? query : query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const expression = new RegExp(pattern, options.caseSensitive ? 'gu' : 'giu');
    const matches = [];
    const word = char => char && /[\p{L}\p{N}_]/u.test(char);
    for (const match of text.matchAll(expression)) {
      if (!match[0].length) continue;
      const start = match.index, end = start + match[0].length;
      if (options.wholeWord && (word([...text.slice(0, start)].at(-1)) || word([...text.slice(end)][0]))) continue;
      matches.push({ start, end });
    }
    return { matches, error: '' };
  } catch { return { matches: [], error: 'Invalid regular expression' }; }
}
