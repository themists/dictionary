import { setDoc, deleteDoc, doc } from "firebase/firestore";
import { getToday } from "../utils/dateUtils";

export default function useWordActions({ words, setWords, user, db }) {
  const addWord = async (word, setHighlightedWord, setPage) => {
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

    if (user) {
      try {
        await setDoc(doc(db, "users", user.uid, "words", lower), updated[lower]);
        console.log("📘 단어 저장 완료:", lower);
      } catch (err) {
        console.error("❌ 단어 Firestore 저장 실패:", err);
      }
    }
  };

  const handleReview = async (word, sourceType) => {
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

    const updated = {
      ...words,
      [word]: updatedWord
    };

    setWords(updated);
    localStorage.setItem("wordData", JSON.stringify(updated));

    if (user) {
      try {
        await setDoc(doc(db, "users", user.uid, "words", word), updatedWord);
        console.log("📘 복습 저장 완료:", word);
      } catch (err) {
        console.error("❌ 복습 저장 실패:", err);
      }
    }
  };

  const deleteWord = async (word) => {
    const updated = { ...words };
    delete updated[word];
    setWords(updated);
    localStorage.setItem("wordData", JSON.stringify(updated));

    if (user) {
      try {
        await deleteDoc(doc(db, "users", user.uid, "words", word));
        console.log("🗑️ 단어 삭제 완료:", word);
      } catch (err) {
        console.error("❌ 단어 삭제 실패:", err);
      }
    }
  };

  return { addWord, handleReview, deleteWord };
}
