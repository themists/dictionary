import { collection, getDocs } from "firebase/firestore";

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
      console.warn("⚠️ localStorage JSON 파싱 실패:", parseError);
    }

    const merged = { ...localWords };

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
      console.warn("⚠️ localStorage 저장 실패:", storageError);
    }

    if (typeof setWords === "function") {
      setWords(merged);
    } else {
      console.error("⚠️ setWords is not a function:", setWords);
    }

    return merged; // ✅ 병합 결과 반환
  } catch (err) {
    console.error("❌ restoreFromFirestoreWithMerge 실패:", err);
    return null;
  }
}
