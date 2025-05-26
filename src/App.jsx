import { useEffect, useState } from "react";
import "./App.css";

import { db, auth, provider } from "./utils/firebase";
import { getDoc, setDoc, doc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

import PaginationControls from "./components/PaginationControls";
import WordCard from "./components/WordCard";
import AuthButtons from "./components/AuthButtons";

import { getToday, getDaysSince } from "./utils/dateUtils";
import t from "./utils/i18n";

function App() {
  const [words, setWords] = useState({});
  const [inputWord, setInputWord] = useState("");
  const [user, setUser] = useState(null);
  const [sortMode, setSortMode] = useState("countAsc");
  const [page, setPage] = useState(1);
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "ko");
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");
  const pageSize = 30;

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wordData")) || {};
    setWords(saved);
    onAuthStateChanged(auth, (u) => setUser(u));
  }, []);

  const addWord = (word) => {
    const lower = word.toLowerCase();
    const today = getToday();
    const existing = words[lower];
    const updated = { ...words };
    if (existing) {
      updated[lower] = { ...existing, lastReviewedAt: today };
    } else {
      updated[lower] = { count: 0, lastReviewedAt: today, reviewedSources: [] };
    }
    setWords(updated);
    localStorage.setItem("wordData", JSON.stringify(updated));
  };

  const handleReview = (word, sourceType) => {
    const today = getToday();
    const data = words[word];
    if (!data) return;

    const isToday = data.lastReviewedAt === today;
    const reviewed = data.reviewedSources || [];
    const alreadyReviewedToday = isToday && reviewed.length > 0;
    const alreadyByThisSource = isToday && reviewed.includes(sourceType);
    if (alreadyByThisSource) return;

    const updatedSources = isToday
      ? [...new Set([...reviewed, sourceType])]
      : [sourceType];

    const updated = {
      ...words,
      [word]: {
        count: alreadyReviewedToday ? data.count : data.count + 1,
        lastReviewedAt: today,
        reviewedSources: updatedSources
      }
    };
    setWords(updated);
    localStorage.setItem("wordData", JSON.stringify(updated));
  };

  const deleteWord = (word) => {
    const updated = { ...words };
    delete updated[word];
    setWords(updated);
    localStorage.setItem("wordData", JSON.stringify(updated));
  };

  const sortedEntries = Object.entries(words).sort(([a, aData], [b, bData]) => {
    switch (sortMode) {
      case "abcAsc": return a.localeCompare(b);
      case "abcDesc": return b.localeCompare(a);
      case "countDesc": return bData.count - aData.count;
      case "dateAsc": return new Date(aData.lastReviewedAt) - new Date(bData.lastReviewedAt);
      case "dateDesc": return new Date(bData.lastReviewedAt) - new Date(aData.lastReviewedAt);
      default: return aData.count - bData.count;
    }
  });

  const paginated = sortedEntries.slice((page - 1) * pageSize, page * pageSize);
  const totalPages = Math.ceil(sortedEntries.length / pageSize);

  return (
    <div className="container" style={{ padding: "1rem", fontFamily: "Arial" }}>
      {/* 제목 + 다크모드 + 언어 버튼 */}
      <div className="header-row">
        <h1>EchoWord ({Object.keys(words).length} words)</h1>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button
            className="dark-mode-toggle-button"
            onClick={() => setDarkMode((prev) => !prev)}
          >
            {!darkMode ? "🌙" : "🌞"}
          </button>
          <button
            className="language-toggle-button"
            onClick={() => {
              const newLang = lang === "ko" ? "en" : "ko";
              setLang(newLang);
              localStorage.setItem("lang", newLang);
            }}
          >
            {lang === "ko" ? "🇺🇸" : "🇰🇷"}
          </button>
        </div>
      </div>

      {/* 상단 버튼 그룹 */}
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

        {/* 정렬 기준 라인 */}
        <div className="row" style={{ alignItems: "center" }}>
          <span style={{ fontWeight: "bold", marginRight: "0.5rem" }}>
            {lang === "ko" ? "정렬" : "Sort"}
          </span>
          <button onClick={() => setSortMode(s => s === "abcAsc" ? "abcDesc" : "abcAsc")}>
            {t[lang].sortABC}
          </button>
          <button onClick={() => setSortMode(s => s === "countAsc" ? "countDesc" : "countAsc")}>
            {t[lang].sortCount}
          </button>
          <button onClick={() => setSortMode(s => s === "dateAsc" ? "dateDesc" : "dateAsc")}>
            {t[lang].sortDate}
          </button>
        </div>
      </div>

      {totalPages > 1 && (
        <PaginationControls page={page} totalPages={totalPages} onPageChange={setPage} t={t[lang]} />
      )}

      <input
        type="text"
        value={inputWord}
        onChange={(e) => setInputWord(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const word = inputWord.trim().toLowerCase();
            if (word) addWord(word);
            setInputWord("");
          }
        }}
        placeholder={t[lang].inputPlaceholder}
      />

      <div>
        {paginated.map(([word, data]) => (
          <WordCard
            key={word}
            word={word}
            data={data}
            lang={lang}
            t={t}
            getDaysSince={getDaysSince}
            onReview={handleReview}
            onDelete={deleteWord}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <PaginationControls page={page} totalPages={totalPages} onPageChange={setPage} t={t[lang]} />
      )}

      <div style={{ marginTop: "2rem", fontSize: "0.8rem", color: "#888", textAlign: "center" }}>
        {t[lang].version(__APP_VERSION__)}
      </div>
    </div>
  );
}

export default App;
