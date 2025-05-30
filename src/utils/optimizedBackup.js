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

  // ✅ 비교 로그 출력
  console.log("🧪 [Backup] 이전 snapshot:", prevSnapshot?.slice(0, 100));
  console.log("🧪 [Backup] 현재 snapshot:", newSnapshot.slice(0, 100));

  if (prevSnapshot === newSnapshot) {
    console.log("🛑 [Backup] 변경 사항 없음 → 저장 생략됨");
    if (!silent) alert("✅ 변경된 항목이 없어 저장할 필요가 없습니다.");
    return;
  }

  const prevWords = prevSnapshot ? JSON.parse(prevSnapshot) : {};
  const changedEntries = Object.entries(words).filter(([key, value]) => {
    return JSON.stringify(value) !== JSON.stringify(prevWords[key]);
  });

  console.log(`📦 [Backup] 변경된 항목 수: ${changedEntries.length}`);

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
