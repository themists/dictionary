import { getToday } from "../utils/dateUtils";

export default function useWordActions({ words, setWords, user, db, skipNextSaveRef }) {
  const addWord = (word, setHighlightedWord, setPage) => {
    const lower = word.toLowerCase().trim();
    if (!lower) return;

    const today = getToday();
    const existing = words[lower];
    const updated = { ...words };

    if (existing) {
      updated[lower] = { ...existing, lastReviewedAt: today };
    } else {
      updated[lower] = {
        count: 0,
        lastReviewedAt: today,
        reviewedSources: [],
        createdAt: today
      };
    }

    setWords(updated);
    setHighlightedWord(lower);
    setPage(1);
    localStorage.setItem("wordData", JSON.stringify(updated));
    skipNextSaveRef.current = true; // ✅ 단어 추가 시 자동 저장 1회 생략
  };

  const handleReview = (word, sourceType) => {
    const today = getToday();
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
      reviewedSources: updatedSources
    };

    // ✅ 저장 의미가 있는 변경인지 판단
    const isSignificantUpdate =
      updatedWord.count !== data.count || updatedWord.lastReviewedAt !== data.lastReviewedAt;

    if (!isSignificantUpdate) {
      return; // ✅ 성과 변화 없으면 저장 생략
    }

    const updated = {
      ...words,
      [word]: updatedWord
    };

    setWords(updated);
    localStorage.setItem("wordData", JSON.stringify(updated));
    skipNextSaveRef.current = true; // ✅ 복습 후 자동 저장 1회 생략
  };

  const deleteWord = (word) => {
    const updated = { ...words };
    delete updated[word];
    setWords(updated);
    localStorage.setItem("wordData", JSON.stringify(updated));
    skipNextSaveRef.current = true; // ✅ 삭제 후 자동 저장 1회 생략
  };

  return { addWord, handleReview, deleteWord };
}
