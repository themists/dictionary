// src/hooks/useAppLifecycle.js
import { useEffect, useRef } from "react";
import { optimizedBackup } from "../utils/optimizedBackup";
import { restoreFromFirestoreWithMerge } from "../utils/firestoreUtils";
import { debounce } from "../utils/debounce";

export default function useAppLifecycle({
  user,
  words,
  inputWord,
  darkMode,
  setWords,
  setSaveStatus,
  setIsRestoring,
  skipNextSaveRef,
  setBackupError // ✅ 외부에서 전달받음
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

  // ✅ 자동 저장 (debounce + quota 초과 시 중단 상태 외부로 전달)
  const debouncedBackup = useRef(
    debounce(async () => {
      try {
        await optimizedBackup(user.uid, words);
        setSaveStatus("");
        if (setBackupError) setBackupError(false); // 정상 시 상태 초기화
      } catch (err) {
        console.error("❌ 저장 실패:", err);

        const message = err?.message || "";
        const code = err?.code || "";

        if (message.includes("quota") || code === "resource-exhausted") {
          console.warn("⚠️ Firestore quota exceeded. 자동 저장 중단");
          if (setBackupError) setBackupError(true); // ⛔ 외부 상태로 오류 표시
          setSaveStatus("⏸️ 저장 중단됨: Firebase 일 사용량 초과");

          setTimeout(() => {
            if (setBackupError) setBackupError(false);
            setSaveStatus("");
          }, 30 * 60 * 1000); // 30분 후 자동 복구
        } else {
          setSaveStatus("⚠️ 저장 실패");
        }
      }
    }, 5000)
  ).current;

  useEffect(() => {
    if (!user || !words) return;
    if (skipNextSaveRef.current) {
      skipNextSaveRef.current = false;
      return;
    }

    debouncedBackup();
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
