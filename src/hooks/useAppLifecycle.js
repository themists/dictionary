// src/hooks/useAppLifecycle.js
import { useEffect } from "react";
import { optimizedBackup } from "../utils/optimizedBackup";
import { restoreFromFirestoreWithMerge } from "../utils/firestoreUtils";

export default function useAppLifecycle({
  user,
  words,
  inputWord,
  darkMode,
  setWords,
  setSaveStatus,
  setIsRestoring,
  skipNextSaveRef,
}) {
  // 다크모드 반영 및 저장
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // 로컬스토리지에서 복원
  useEffect(() => {
    if (!user) return;
    const snapshotKey = `wordSnapshot_${user.uid}`;
    if (localStorage.getItem("wordData") && !localStorage.getItem(snapshotKey)) {
      localStorage.setItem(snapshotKey, localStorage.getItem("wordData"));
    }
    try {
      const saved = JSON.parse(localStorage.getItem(snapshotKey)) || {};
      setWords(saved);
    } catch (err) {
      console.error("❌ localStorage 복원 실패:", err);
      setWords({});
    }
  }, [user]);

  // 단어 자동 저장
  useEffect(() => {
    if (!user || !words) return;
    if (skipNextSaveRef.current) {
      skipNextSaveRef.current = false;
      return;
    }

    const timer = setTimeout(async () => {
      try {
        await optimizedBackup(user.uid, words);
        setSaveStatus("");
      } catch (err) {
        console.error("❌ 저장 실패:", err);
        setSaveStatus("⚠️ 저장 실패");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [user, words]);

  // 탭 복귀 시 자동 복원
  useEffect(() => {
    const handleVisibilityChange = async () => {
      if (document.visibilityState === "visible" && user && inputWord.length === 0) {
        try {
          setIsRestoring(true);
          await restoreFromFirestoreWithMerge(user.uid, setWords);
          skipNextSaveRef.current = true;
          console.log("🔁 복원 완료, 자동 저장 1회 생략");
        } catch (error) {
          console.error("❌ 복원 실패:", error);
        } finally {
          setTimeout(() => setIsRestoring(false), 500);
        }
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [user, inputWord]);
}
