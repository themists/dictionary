import { useEffect, useState, useRef } from "react";
import "./App.css";

import { db, auth, provider } from "./utils/firebase";
import HeaderBar from "./components/HeaderBar";
import AuthButtons from "./components/AuthButtons";
import SortControls from "./components/SortControls";
import PaginationBlock from "./components/PaginationBlock";
import WordInput from "./components/WordInput";
import WordList from "./components/WordList";
import ScrollButtons from "./components/ScrollButtons";

import { getDaysSince } from "./utils/dateUtils";
import t from "./utils/i18n";

import useSyncWithFirebase from "./hooks/useSyncWithFirebase";
import useWordActions from "./hooks/useWordActions";
import { optimizedBackup } from "./utils/optimizedBackup";
import { restoreFromFirestoreWithMerge } from "./utils/firestoreUtils";

function App() {
  const [words, setWords] = useState({});
  const [inputWord, setInputWord] = useState("");
  const [user, setUser] = useState(null);
  const [sortMode, setSortMode] = useState("countAsc");
  const [page, setPage] = useState(1);
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "ko");
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");
  const [highlightedWord, setHighlightedWord] = useState(null);
  const [saveStatus, setSaveStatus] = useState("");
  const [isRestoring, setIsRestoring] = useState(false); // ✅ 복원 중 상태

  const pageSize = 30;
  const skipNextSaveRef = useRef(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

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

  useSyncWithFirebase({ auth, db, setUser, setWords });

  const { addWord, handleReview, deleteWord } = useWordActions({ words, setWords, user, db });

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

  useEffect(() => {
    const handleVisibilityChange = async () => {
      if (document.visibilityState === "visible" && user && inputWord.length === 0) {
        try {
          setIsRestoring(true); // ✅ 시작
          await restoreFromFirestoreWithMerge(user.uid, db, setWords);
          skipNextSaveRef.current = true;
          console.log("🔁 복원 완료, 자동 저장 1회 생략");
        } catch (error) {
          console.error("❌ 복원 실패:", error);
        } finally {
          setTimeout(() => setIsRestoring(false), 500); // ✅ 부드럽게 사라짐
        }
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [user, inputWord]);

  const sortedEntries = Object.entries(words)
    .filter(([w]) => w !== highlightedWord)
    .sort(([a, aData], [b, bData]) => {
      switch (sortMode) {
        case "abcAsc": return a.localeCompare(b);
        case "abcDesc": return b.localeCompare(a);
        case "countDesc": return bData.count - aData.count || a.localeCompare(b);
        case "dateAsc": return new Date(aData.lastReviewedAt) - new Date(bData.lastReviewedAt) || a.localeCompare(b);
        case "dateDesc": return new Date(bData.lastReviewedAt) - new Date(aData.lastReviewedAt) || a.localeCompare(b);
        default: return aData.count - bData.count || a.localeCompare(b);
      }
    });

  const withHighlight = highlightedWord && words[highlightedWord]
    ? [[highlightedWord, words[highlightedWord]], ...sortedEntries]
    : sortedEntries;

  const paginated = withHighlight.slice((page - 1) * pageSize, page * pageSize);
  const totalPages = Math.ceil(withHighlight.length / pageSize);

  return (
    <div className="container" style={{ padding: "1rem", fontFamily: "Arial" }}>
      {isRestoring && <div className="progress-bar" />}

      <HeaderBar
        wordCount={Object.keys(words).length}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        lang={lang}
        setLang={setLang}
      />

      <div className="top-group">
        <div className="row">
          <AuthButtons
            user={user}
            setUser={setUser}
            auth={auth}
            provider={provider}
            db={db}
            words={words}
            setWords={setWords}
            t={t}
            lang={lang}
          />
        </div>

        <SortControls sortMode={sortMode} setSortMode={setSortMode} lang={lang} t={t} />
      </div>

      <PaginationBlock totalPages={totalPages} page={page} setPage={setPage} t={t[lang]} />

      <WordInput
        inputWord={inputWord}
        setInputWord={setInputWord}
        onAddWord={(word) => addWord(word, setHighlightedWord, setPage)}
        placeholder={t[lang].inputPlaceholder}
      />

      <WordList
        words={paginated}
        lang={lang}
        t={t}
        getDaysSince={getDaysSince}
        onReview={handleReview}
        onDelete={deleteWord}
      />

      <PaginationBlock totalPages={totalPages} page={page} setPage={setPage} t={t[lang]} />

      {saveStatus && (
        <div style={{ textAlign: "center", color: "#888", marginTop: "0.5rem" }}>{saveStatus}</div>
      )}

      <div style={{ marginTop: "2rem", fontSize: "0.8rem", color: "#888", textAlign: "center" }}>
        {t[lang].version(`v${import.meta.env.VITE_APP_VERSION}`)}
      </div>
      
      <ScrollButtons /> {/* ✅ 스크롤 버튼 추가 */}
    </div>
  );
}

export default App;
