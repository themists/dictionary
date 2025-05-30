import { getToday } from "../utils/dateUtils";

export default function useWordActions({ words, setWords, user, db, skipNextSaveRef }) {
  const addWord = (word, setHighlightedWord, setPage) => {
    const lower = word.toLowerCase().trim();
    if (!lower) return;

    const today = getToday();
    const now = new Date().toISOString();
    const existing = words[lower];
    const updated = { ...words };

    if (existing) {
      updated[lower] = {
        ...existing,
        lastReviewedAt: today,
        updatedAt: now
      };
    } else {
      updated[lower] = {
        count: 0,
        lastReviewedAt: today,
        reviewedSources: [],
        createdAt: today,
        updatedAt: now
      };
    }

    setWords(updated);
    setHighlightedWord(lower);
    setPage(1);
    localStorage.setItem("wordData", JSON.stringify(updated));
  };

  const handleReview = (word, sourceType) => {
    const today = getToday();
    const now = new Date().toISOString();
    const data = words[word];
    if (!data) return;

    const isToday = data.lastReviewedAt === today;
    const reviewed = Array.isArray(data.reviewedSources) ? data.reviewedSources : [];
    const alreadyByThisSource = isToday && reviewed.includes(sourceType);
    if (alreadyByThisSource) return;

    const updatedSources = isToday
      ? [...new Set([...reviewed, sourceType])]
      : [sourceType];

    const updatedWord = {
      ...data,
      count: isToday && reviewed.length > 0 && !alreadyByThisSource
        ? data.count
        : data.count + 1,
      lastReviewedAt: today,
      reviewedSources: updatedSources,
      updatedAt: now
    };

    const isSignificantUpdate =
      updatedWord.count !== data.count || updatedWord.lastReviewedAt !== data.lastReviewedAt;

    if (!isSignificantUpdate) return;

    const updated = {
      ...words,
      [word]: updatedWord
    };

    setWords(updated);
    localStorage.setItem("wordData", JSON.stringify(updated));
  };

  const deleteWord = (word) => {
    const updated = { ...words };
    delete updated[word];
    setWords(updated);
    localStorage.setItem("wordData", JSON.stringify(updated));
  };

  return { addWord, handleReview, deleteWord };
}
