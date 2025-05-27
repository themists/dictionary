import { useEffect, useState } from "react";
import "./App.css";

import { db, auth, provider } from "./utils/firebase";
import HeaderBar from "./components/HeaderBar";
import AuthButtons from "./components/AuthButtons";
import SortControls from "./components/SortControls";
import PaginationBlock from "./components/PaginationBlock";
import WordInput from "./components/WordInput";
import WordList from "./components/WordList";

import { getDaysSince } from "./utils/dateUtils";
import t from "./utils/i18n";

import useSyncWithFirebase from "./hooks/useSyncWithFirebase";
import useWordActions from "./hooks/useWordActions";

function App() {
  const [words, setWords] = useState({});
  const [inputWord, setInputWord] = useState("");
  const [user, setUser] = useState(null);
  const [sortMode, setSortMode] = useState("countAsc");
  const [page, setPage] = useState(1);
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "ko");
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");
  const [highlightedWord, setHighlightedWord] = useState(null);

  const pageSize = 30;

  // 🌙 다크모드 반영
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // 🧠 앱 시작 시 localStorage → 상태 초기화
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("wordData")) || {};
      setWords(saved);
    } catch (err) {
      console.error("❌ localStorage 복원 실패:", err);
      setWords({});
    }
  }, []);

  // 🔄 Firebase와 로그인 감지 및 동기화
  useSyncWithFirebase({ auth, db, setUser, setWords });

  const { addWord, handleReview, deleteWord } = useWordActions({ words, setWords, user, db });

  const sortedEntries = Object.entries(words)
    .filter(([w]) => w !== highlightedWord)
    .sort(([a, aData], [b, bData]) => {
      switch (sortMode) {
        case "abcAsc":
          return a.localeCompare(b);
        case "abcDesc":
          return b.localeCompare(a);
        case "countDesc":
          return bData.count - aData.count || a.localeCompare(b);
        case "dateAsc":
          return new Date(aData.lastReviewedAt) - new Date(bData.lastReviewedAt) || a.localeCompare(b);
        case "dateDesc":
          return new Date(bData.lastReviewedAt) - new Date(aData.lastReviewedAt) || a.localeCompare(b);
        default:
          return aData.count - bData.count || a.localeCompare(b);
      }
    });

  const withHighlight = highlightedWord && words[highlightedWord]
    ? [[highlightedWord, words[highlightedWord]], ...sortedEntries]
    : sortedEntries;

  const paginated = withHighlight.slice((page - 1) * pageSize, page * pageSize);
  const totalPages = Math.ceil(withHighlight.length / pageSize);

  return (
    <div className="container" style={{ padding: "1rem", fontFamily: "Arial" }}>
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

      <div style={{ marginTop: "2rem", fontSize: "0.8rem", color: "#888", textAlign: "center" }}>
        {t[lang].version(`v${import.meta.env.VITE_APP_VERSION}`)}
      </div>
    </div>
  );
}

export default App;
