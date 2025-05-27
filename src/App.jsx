import { useEffect, useState } from "react";
import "./App.css";

import { db, auth, provider } from "./utils/firebase";
import { getDoc, setDoc, doc, collection, getDocs, deleteDoc } from "firebase/firestore"; // Added collection, getDocs, deleteDoc
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

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (u) {
        try {
          // 🔁 기존 데이터가 남아 있다면 한 번만 마이그레이션
          const oldDocSnap = await getDoc(doc(db, "users", u.uid));
          if (oldDocSnap.exists() && oldDocSnap.data().wordData) {
            const oldData = oldDocSnap.data().wordData;
            for (const [word, data] of Object.entries(oldData)) {
              const wordRef = doc(db, "users", u.uid, "words", word);
              if (!data.createdAt) {
                data.createdAt = "2024-05-20";
              }
              await setDoc(wordRef, data);
            }
            console.log("📦 마이그레이션 완료");
            // 마이그레이션 후 기존 wordData 필드 삭제 (선택 사항이지만 권장)
            // await updateDoc(doc(db, "users", u.uid), { wordData: deleteField() });
          }

          const querySnapshot = await getDocs(collection(db, "users", u.uid, "words"));
          const wordMap = {};
          querySnapshot.forEach((d) => { // Changed doc to d to avoid conflict with imported doc
            wordMap[d.id] = d.data();
          });
          setWords(wordMap);
          localStorage.setItem("wordData", JSON.stringify(wordMap));
          console.log("🔄 자동 복원 완료");
        } catch (err) {
          console.error("🔥 자동 복원 오류:", err);
        }
      } else {
        // Clear words and local storage if user logs out
        setWords({});
        localStorage.removeItem("wordData");
      }
    });
  }, []); // Empty dependency array means this runs once on mount

  // autoBackup function is now redundant as we are saving/updating words individually
  // const autoBackup = async (updatedWords) => {
  //   if (user) {
  //     try {
  //       await setDoc(doc(db, "users", user.uid), { wordData: updatedWords });
  //       console.log("💾 자동 백업 완료");
  //     } catch (err) {
  //       console.error("💥 자동 백업 실패:", err);
  //     }
  //   }
  // };

  const addWord = async (word) => {
    const lower = word.toLowerCase();
    const today = getToday();
    const existing = words[lower];
    const updated = { ...words };
    if (existing) {
      updated[lower] = { ...existing, lastReviewedAt: today };
    } else {
      updated[lower] = { count: 0, lastReviewedAt: today, reviewedSources: [], createdAt: '2024-05-20' };
    }
    setWords(updated);
    setHighlightedWord(lower);
    setPage(1);
    localStorage.setItem("wordData", JSON.stringify(updated));

    // 🔁 Firestore에 단어별로 저장
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
    // const alreadyReviewedToday = isToday && reviewed.length > 0; // This logic might be flawed if you want to increment count only once per day
    const alreadyByThisSource = isToday && reviewed.includes(sourceType);
    if (alreadyByThisSource) return; // Prevent double review from the same source on the same day

    const updatedSources = isToday
      ? [...new Set([...reviewed, sourceType])]
      : [sourceType];

    const updatedWord = {
      ...data,
      // Increment count only if it's the first review of the day or first review from this source today
      count: isToday && reviewed.length > 0 && !alreadyByThisSource ? data.count : data.count + 1,
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
          // Ensure dates are parsed correctly or handle potential invalid dates
          const dateA_asc = new Date(aData.lastReviewedAt);
          const dateB_asc = new Date(bData.lastReviewedAt);
          return (isNaN(dateA_asc) ? 0 : dateA_asc.getTime()) - (isNaN(dateB_asc) ? 0 : dateB_asc.getTime()) || a.localeCompare(b);
        case "dateDesc":
          const dateA_desc = new Date(aData.lastReviewedAt);
          const dateB_desc = new Date(bData.lastReviewedAt);
          return (isNaN(dateB_desc) ? 0 : dateB_desc.getTime()) - (isNaN(dateA_desc) ? 0 : dateA_desc.getTime()) || a.localeCompare(b);
        default: // countAsc
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
        {t[lang].version(__APP_VERSION__)}
      </div>
    </div>
  );
}

export default App;