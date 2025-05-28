import { collection, getDocs } from "firebase/firestore";

/**
 * Firestore와 localStorage 데이터를 병합하여 복원
 * @param {string} userId - Firebase 사용자 UID
 * @param {object} db - Firebase Firestore 인스턴스
 * @returns {object|null} - 병합된 단어 객체 또는 null
 */
export async function restoreFromFirestoreWithMerge(userId, db) {
  try {
    const snapshotKey = `wordSnapshot_${userId}`;

    const querySnapshot = await getDocs(collection(db, "users", userId, "words"));
    const firestoreWords = {};
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data && data.lastReviewedAt) {
        firestoreWords[doc.id] = data;
      }
    });

    const localWords = JSON.parse(localStorage.getItem(snapshotKey) || "{}");
    const merged = { ...firestoreWords };

    for (const [word, localData] of Object.entries(localWords)) {
      const remoteData = firestoreWords[word];
      if (!localData || typeof localData !== "object") continue;

      const localDate = new Date(localData.lastReviewedAt || "2000-01-01");
      const remoteDate = new Date(remoteData?.lastReviewedAt || "2000-01-01");

      if (!remoteData || localDate > remoteDate) {
        merged[word] = localData;
      }
    }

    localStorage.setItem(snapshotKey, JSON.stringify(merged));
    return merged;
  } catch (err) {
    console.error("❌ restoreFromFirestoreWithMerge 실패:", err);
    alert("⚠️ 병합 복원 중 오류가 발생했습니다.");
    return null;
  }
}
