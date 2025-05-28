// src/hooks/useAppLifecycle.js
import { useEffect, useRef, useState } from "react";
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
}) {
  const [backupError, setBackupError] = useState(false); // ✅ 저장 중단 상태 추가

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

  // ✅ 자동 저장 (debounce 적용 + quota 초과 시 중단)
  const debouncedBackup = useRef(
    debounce(async () => {
      if (backupError) return; // ❌ 자동 저장 중단 시 저장 생략

      try {
        await optimizedBackup(user.uid, words);
        setSaveStatus("");
      } catch (err) {
        console.error("❌ 저장 실패:", err);

        const message = err?.message || "";
        const code = err?.code || "";

        // ✅ quota 초과 감지 시 자동 저장 일시 중단
        if (message.includes("quota") || code === "resource-exhausted") {
          console.warn("⚠️ Firestore quota exceeded. 자동 저장 30분 중단");
          setBackupError(true);
          setSaveStatus("⏸️ 저장 중단됨: Firebase 일 사용량 초과");

          setTimeout(() => {
            setBackupError(false);
            setSaveStatus(""); // 상태 복구
          }, 30 * 60 * 1000); // 30분 후 재시도 허용
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

    debouncedBackup(); // ✅ debounce된 자동 저장
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
