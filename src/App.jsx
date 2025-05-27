import { useEffect, useState } from "react";
import "./App.css";

import { db, auth, provider } from "./utils/firebase";
import { setDoc, deleteDoc, doc, getDocs, collection } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

import HeaderBar from "./components/HeaderBar";
import AuthButtons from "./components/AuthButtons";
import SortControls from "./components/SortControls";
import PaginationBlock from "./components/PaginationBlock";
import WordInput from "./components/WordInput";
import WordList from "./components/WordList";

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
  const [highlightedWord, setHighlightedWord] = useState(null);

  const pageSize = 30;

  // 다크모드 적용
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // 자동 복원 (마이그레이션 없음, 병합은 AuthButtons에서 수동 처리)
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wordData")) || {};
    setWords(saved);
    onAuthStateChanged(auth, (u) => setUser(u));
  }, []);

  const addWord = async (word) => {
    const lower = word.toLowerCase();
    const today = getToday();
    const existing = words[lower];
    const updated = { ...words };

    if (existing) {
      updated[lower] = { ...existing, lastReviewedAt: today };
    } else {
      updated[lower] = {
        count: 0,
        lastReviewedAt: today,
        reviewedSources: [],
        createdAt: "2024-05-20"
      };
    }

    setWords(updated);
    setHighlightedWord(lower);
    setPage(1);
    localStorage.setItem("wordData", JSON.stringify(updated));

    if (user) {
      try {
        await setDoc(doc(db, "users", user.uid, "words", lower), updated[lower]);
        console.log("📘 단어 저장 완료:", lower);
      } catch (err) {
        console.error("❌ 단어 저장 실패:", err);
      }
    }
  };

  const handleReview = async (word, sourceType) => {
    const today = getToday();
    const data = words[word];
    if (!data) return;

    const isToday = data.lastReviewedAt === today;
    const reviewed = data.reviewedSources || [];
    const alreadyByThisSource = isToday && reviewed.includes(sourceType);
    if (alreadyByThisSource) return;

    const updatedSources = isToday
      ? [...new Set([...reviewed, sourceType])]
      : [sourceType];

    const updatedWord = {
      ...data,
      count: isToday && reviewed.length > 0 && !alreadyByThisSource
        ? data.count
        : data.count + 1,
      lastReviewedAt: today,
      reviewedSources: updatedSources
    };

    const updated = {
      ...words,
      [word]: updatedWord
    };

    setWords(updated);
    localStorage.setItem("wordData", JSON.stringify(updated));

    if (user) {
      try {
        await setDoc(doc(db, "users", user.uid, "words", word), updatedWord);
        console.log("📘 복습 저장 완료:", word);
      } catch (err) {
        console.error("❌ 복습 저장 실패:", err);
      }
    }
  };

  const deleteWord = async (word) => {
    const updated = { ...words };
    delete updated[word];
    setWords(updated);
    localStorage.setItem("wordData", JSON.stringify(updated));

    if (user) {
      try {
        await deleteDoc(doc(db, "users", user.uid, "words", word));
        console.log("🗑️ 단어 삭제 완료:", word);
      } catch (err) {
        console.error("❌ 단어 삭제 실패:", err);
      }
    }
  };

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
        onAddWord={addWord}
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
