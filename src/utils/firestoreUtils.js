// src/utils/firestoreUtils.js
import { collection, getDocs } from "firebase/firestore";

/**
 * Firestore와 localStorage 데이터를 병합하여 복원하고 setWords에 적용
 * @param {string} userId - Firebase 사용자 UID
 * @param {object} db - Firebase Firestore 인스턴스
 * @param {function} setWords - 상태 업데이트 함수
 */
export async function restoreFromFirestoreWithMerge(userId, db, setWords) {
  try {
    const snapshotKey = `wordSnapshot_${userId}`;

    const querySnapshot = await getDocs(collection(db, "users", userId, "words"));
    const firestoreWords = {};
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data) {
        firestoreWords[doc.id] = data;
      }
    });

    let localWords = {};
    try {
      localWords = JSON.parse(localStorage.getItem(snapshotKey) || "{}");
    } catch (parseError) {
      console.warn("⚠️ localStorage JSON 파싱 실패. Firestore 데이터만 사용:", parseError);
    }

    const merged = { ...localWords }; // 🔁 local 우선 병합 시작

    for (const [word, remoteData] of Object.entries(firestoreWords)) {
      const localData = localWords[word];
      const localTime = new Date(localData?.updatedAt || "2000-01-01");
      const remoteTime = new Date(remoteData?.updatedAt || "2000-01-01");

      if (!localData || remoteTime > localTime) {
        merged[word] = remoteData;
      }
    }

    try {
      localStorage.setItem(snapshotKey, JSON.stringify(merged));
    } catch (storageError) {
      console.warn("⚠️ localStorage 저장 실패. 병합은 성공했지만 로컬 저장 실패:", storageError);
    }

    if (typeof setWords === "function") {
      setWords(merged);
    } else {
      console.error("⚠️ setWords is not a function:", setWords);
    }

  } catch (err) {
    console.error("❌ restoreFromFirestoreWithMerge 실패:", err);
    console.error("⚠️ 병합 복원 중 오류가 발생했습니다.");
  }
}
