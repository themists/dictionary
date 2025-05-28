// src/utils/optimizedBackup.js
import { setDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

// 🔑 사용자별 localStorage 키 생성
export const getSnapshotKey = (userId) => `wordSnapshot_${userId}`;

/**
 * ✅ 변경된 단어만 Firestore에 저장하고 localStorage에 스냅샷 저장
 * @param {string} userId
 * @param {object} words
 * @param {object} options - { silent: true }일 경우 알림 없음
 */
export async function optimizedBackup(userId, words, { silent = true } = {}) {
  if (!userId || !words) return;

  const snapshotKey = getSnapshotKey(userId);
  const newSnapshot = JSON.stringify(words);
  const prevSnapshot = localStorage.getItem(snapshotKey);

  if (prevSnapshot === newSnapshot) {
    if (!silent) alert("✅ 변경된 항목이 없어 저장할 필요가 없습니다.");
    return;
  }

  const prevWords = prevSnapshot ? JSON.parse(prevSnapshot) : {};
  const changedEntries = Object.entries(words).filter(([key, value]) => {
    return JSON.stringify(value) !== JSON.stringify(prevWords[key]);
  });

  const batchSaves = changedEntries.map(([word, data]) =>
    setDoc(doc(db, "users", userId, "words", word), data)
  );

  try {
    await Promise.all(batchSaves);
    localStorage.setItem(snapshotKey, newSnapshot);
    if (!silent) alert(`✅ 백업 완료: ${changedEntries.length}개 항목 저장됨`);
  } catch (error) {
    console.error("❌ 백업 실패:", error);
    alert("❌ 백업 중 오류가 발생했습니다.");
  }
}

/**
 * ♻️ localStorage에서 백업 데이터 불러와 복원
 */
export function optimizedRestore(userId) {
  if (!userId) return null;

  const snapshotKey = getSnapshotKey(userId);
  const snapshot = localStorage.getItem(snapshotKey);

  if (!snapshot) {
    alert("📭 저장된 백업 데이터를 찾을 수 없습니다.");
    return null;
  }

  try {
    const parsed = JSON.parse(snapshot);
    alert(`📦 백업 데이터 불러오기 완료 (${Object.keys(parsed).length}개 항목)`);
    return parsed;
  } catch (error) {
    console.error("❌ 복원 실패:", error);
    alert("❌ 백업 데이터를 읽을 수 없습니다.");
    return null;
  }
}
