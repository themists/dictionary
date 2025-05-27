import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { getDocs, collection } from "firebase/firestore";

export default function useSyncWithFirebase({ auth, db, setUser, setWords }) {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (!u) return;

      try {
        const querySnapshot = await getDocs(collection(db, "users", u.uid, "words"));
        const firestoreWords = {};
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data?.lastReviewedAt) {
            firestoreWords[doc.id] = data;
          }
        });

        const localWords = JSON.parse(localStorage.getItem("wordData") || "{}");
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

        setWords(merged);
        localStorage.setItem("wordData", JSON.stringify(merged));
        console.log("🔁 자동 복원 병합 완료");
      } catch (err) {
        console.error("❌ 자동 복원 중 오류:", err);
      }
    });

    return () => unsubscribe();
  }, [auth, db, setUser, setWords]);
}
