// src/hooks/useAppLifecycle.js
import { useEffect, useRef } from "react";
import { optimizedBackup } from "../utils/optimizedBackup";
import { restoreFromFirestoreWithMerge } from "../utils/firestoreUtils";
import { debounce } from "../utils/debounce";
import { db } from "../utils/firebase"; // ✅ db 인자 전달용

export default function useAppLifecycle({
  user,
  words,
  inputWord,
  darkMode,
  setWords,
  setSaveStatus,
  setIsRestoring,
  skipNextSaveRef,
  setBackupError
}) {
  const lastWordUpdateRef = useRef(Date.now()); // ✅ 최근 단어 변경 시간 기록

  // ✅ 다크모드 반영
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // ✅ 로컬에서 초기 복원
  useEffect(() => {
    const uid = user?.uid;
    if (!uid) return;

    const snapshotKey = `wordSnapshot_${uid}`;
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

  // ✅ 단어 변경 시 타임스탬프 갱신
  useEffect(() => {
    if (user && words) {
      lastWordUpdateRef.current = Date.now();
    }
  }, [user, words]);

  // ✅ 자동 백업
  const debouncedBackup = useRef(
    debounce(async () => {
      const uid = user?.uid;
      if (!uid) return;

      try {
        await optimizedBackup(uid, words);
        setSaveStatus("");
        if (setBackupError) setBackupError(false);
      } catch (err) {
        console.error("❌ 저장 실패:", err);

        const message = err?.message || "";
        const code = err?.code || "";

        if (message.includes("quota") || code === "resource-exhausted") {
          console.warn("⚠️ Firestore quota exceeded. 자동 저장 중단");
          if (setBackupError) setBackupError(true);

          setSaveStatus("⏸️ 저장이 중단되었습니다. Firebase 일일 사용량 초과로 인해 30분 후 자동 재시도됩니다.");

          setTimeout(() => {
            if (setBackupError) setBackupError(false);
            setSaveStatus("");
          }, 30 * 60 * 1000);
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

  // ✅ 탭 복귀 시 자동 병합 복원 (단, 최근 단어 변경 시 복원 생략)
  useEffect(() => {
    const handleVisibilityChange = async () => {
      if (document.visibilityState === "visible" && user && inputWord.length === 0) {
        const timeSinceLastChange = Date.now() - lastWordUpdateRef.current;
        if (timeSinceLastChange < 3000) {
          console.log("🛑 최근 단어 변경으로 인해 복원 생략");
          return;
        }

        const uid = user?.uid;
        if (!uid) return;

        try {
          setIsRestoring(true);
          await restoreFromFirestoreWithMerge(uid, db, setWords);
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
