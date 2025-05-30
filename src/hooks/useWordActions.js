import { getToday } from "../utils/dateUtils";

export default function useWordActions({ words, setWords, user, db, skipNextSaveRef }) {
  const addWord = (word, setHighlightedWord, setPage) => {
    const lower = word.toLowerCase().trim();
    if (!lower) return;

    const today = getToday();
    const now = new Date().toISOString(); // ✅ updatedAt 기준
    const existing = words[lower];
    const updated = { ...words };

    if (existing) {
      updated[lower] = {
        ...existing,
        lastReviewedAt: today,
        updatedAt: now // ✅ 재등록 시도 시에도 갱신
      };
    } else {
      updated[lower] = {
        count: 0,
        lastReviewedAt: today,
        reviewedSources: [],
        createdAt: today,
        updatedAt: now // ✅ 새 단어 등록
      };
    }

    setWords(updated);
    setHighlightedWord(lower);
    setPage(1);
    localStorage.setItem("wordData", JSON.stringify(updated));
    skipNextSaveRef.current = true;
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
      updatedAt: now // ✅ 복습도 수정 시간 갱신
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
    skipNextSaveRef.current = true;
  };

  const deleteWord = (word) => {
    const updated = { ...words };
    delete updated[word];
    setWords(updated);
    localStorage.setItem("wordData", JSON.stringify(updated));
    skipNextSaveRef.current = true;
  };

  return { addWord, handleReview, deleteWord };
}
