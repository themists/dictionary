import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export async function firestoreRestore(userId) {
  if (!userId) return null;

  try {
    const querySnapshot = await getDocs(collection(db, "users", userId, "words"));
    const restoredWords = {};
    querySnapshot.forEach((doc) => {
      restoredWords[doc.id] = doc.data();
    });

    localStorage.setItem(`wordSnapshot_${userId}`, JSON.stringify(restoredWords));
    return restoredWords;
  } catch (err) {
    console.error("❌ firestoreRestore 실패:", err);
    alert("⚠️ Firestore에서 복원하는 중 문제가 발생했습니다.");
    return null;
  }
}
