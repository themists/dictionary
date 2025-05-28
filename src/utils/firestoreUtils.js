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

    if (typeof setWords === "function") {
      setWords(merged); // ✅ 안전하게 호출
    } else {
      console.error("⚠️ setWords is not a function:", setWords);
      alert("⚠️ 복원에 실패했습니다. setWords 함수가 전달되지 않았습니다.");
    }

  } catch (err) {
    console.error("❌ restoreFromFirestoreWithMerge 실패:", err);
    alert("⚠️ 병합 복원 중 오류가 발생했습니다.");
  }
}
