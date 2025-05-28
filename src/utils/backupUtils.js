// src/utils/backupUtils.js
import { setDoc, getDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

// 💾 수동 백업: 전체 덮어쓰기 저장
export async function saveDataToFirestore(userId, words) {
  if (!userId || !words) return;

  const ref = doc(db, "users", userId);
  try {
    await setDoc(ref, { words }, { merge: true });
    console.log("✅ 수동 백업 완료");
  } catch (err) {
    console.error("❌ 수동 백업 실패:", err);
    alert("❌ 클라우드에 백업하는 데 실패했습니다.");
  }
}

// ♻️ 수동 복원: 전체 덮어쓰기 복원
export async function restoreDataFromFirestore(userId) {
  if (!userId) return null;

  const ref = doc(db, "users", userId);
  try {
    const snap = await getDoc(ref);
    if (snap.exists()) {
      const data = snap.data();
      if (data.words && typeof data.words === "object") {
        console.log("✅ 수동 복원 완료");
        return data.words;
      }
    }
    alert("📭 복원할 데이터가 없습니다.");
    return null;
  } catch (err) {
    console.error("❌ 수동 복원 실패:", err);
    alert("❌ 클라우드에서 복원하는 데 실패했습니다.");
    return null;
  }
}

// 📤 내보내기: 단어장 JSON 파일 저장
export function exportWordsToFile(words) {
  const blob = new Blob([JSON.stringify(words, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `EchoWord-export-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

// 📥 불러오기: JSON 파일 → 객체로 파싱
export async function importWordsFromFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const imported = JSON.parse(reader.result);
        if (typeof imported === "object") {
          resolve(imported);
        } else {
          reject(new Error("❌ JSON 구조가 올바르지 않습니다."));
        }
      } catch (e) {
        reject(e);
      }
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsText(file);
  });
}
