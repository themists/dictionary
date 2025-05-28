// src/utils/wordUtils.js

export function getSortedEntries(words, sortMode, highlightedWord) {
  const sorted = Object.entries(words)
    .filter(([word]) => word !== highlightedWord)
    .sort(([a, aData], [b, bData]) => {
      switch (sortMode) {
        case "abcAsc": return a.localeCompare(b);
        case "abcDesc": return b.localeCompare(a);
        case "countDesc": return bData.count - aData.count || a.localeCompare(b);
        case "dateAsc": return new Date(aData.lastReviewedAt) - new Date(bData.lastReviewedAt) || a.localeCompare(b);
        case "dateDesc": return new Date(bData.lastReviewedAt) - new Date(aData.lastReviewedAt) || a.localeCompare(b);
        default: return aData.count - bData.count || a.localeCompare(b);
      }
    });

  if (highlightedWord && words[highlightedWord]) {
    return [[highlightedWord, words[highlightedWord]], ...sorted];
  }
  return sorted;
}

export function getPaginatedEntries(entries, page, pageSize) {
  const start = (page - 1) * pageSize;
  const end = page * pageSize;
  return entries.slice(start, end);
}
