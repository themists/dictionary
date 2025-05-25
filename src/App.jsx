import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import './App.css';
import {
  getFirestore,
  doc,
  setDoc,
  getDoc
} from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import PaginationControls from "./components/PaginationControls";

const firebaseConfig = {
  apiKey: "AIzaSyCS2cdIvwE8RuZXdAgCL-QE6tAYobYeixw",
  authDomain: "word-practice-app.firebaseapp.com",
  projectId: "word-practice-app",
  storageBucket: "word-practice-app.firebasestorage.app",
  messagingSenderId: "489669791875",
  appId: "1:489669791875:web:45291b0005ac5913068bb6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

function App() {
  const [words, setWords] = useState({});
  const [inputWord, setInputWord] = useState("");
  const [user, setUser] = useState(null);
  const [sortMode, setSortMode] = useState("countAsc");
  const [page, setPage] = useState(1);
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "ko");
  const pageSize = 30;

  const t = {
    ko: {
      title: "EchoWord",
      totalWords: (n) => `총 ${n}단어`,
      inputPlaceholder: "단어를 입력하세요...",
      login: "로그인",
      logout: "로그아웃",
      backup: "백업",
      restore: "복원",
      sortABC: "ABC 정렬",
      sortCount: "학습횟수 정렬",
      studies: (n) => `학습 횟수: ${n}`,
      lastReviewedLabel: "학습일",
      lastStudied: (days) => days === 0 ? "오늘" : `${days}일 전`,
      dictionary: "사전",
      pronunciation: "발음",
      studyDone: "학습 완료",
      delete: "삭제",
      confirmDelete: "정말 삭제하시겠습니까?",
      backupSuccess: "✅ 백업 완료!",
      prev: "이전",
      next: "다음",
      page: (p, t) => `페이지 ${p} / ${t}`,
      version: (v) => `버전: ${v}`
    },
    en: {
      title: "EchoWord",
      totalWords: (n) => `${n} words`,
      inputPlaceholder: "Enter a word...",
      login: "Sign In",
      logout: "Sign Out",
      backup: "Backup",
      restore: "Restore",
      sortABC: "Sort: A–Z",
      sortCount: "Sort: Study Count",
      studies: (n) => `Studied: ${n} times`,
      lastReviewedLabel: "Last reviewed",
      lastStudied: (days) => days === 0 ? "Today" : `${days} days ago`,
      dictionary: "Dictionary",
      pronunciation: "Pronunciation",
      studyDone: "Mark Studied",
      delete: "Delete",
      confirmDelete: "Are you sure you want to delete this word?",
      backupSuccess: "✅ Backup complete!",
      prev: "← Prev",
      next: "Next →",
      page: (p, t) => `Page ${p} of ${t}`,
      version: (v) => `Version: ${v}`
    }
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wordData")) || {};
    setWords(saved);
    onAuthStateChanged(auth, (u) => setUser(u));
  }, []);

  const getToday = () => new Date().toLocaleDateString('en-CA');

  const getDaysSince = (dateString) => {
    const todayStr = new Date().toLocaleDateString('en-CA');
    const pastStr = new Date(dateString).toLocaleDateString('en-CA');
    const todayDate = new Date(todayStr);
    const pastDate = new Date(pastStr);
    const diffTime = todayDate.getTime() - pastDate.getTime();
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
  };

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
      default: return aData.count - bData.count;
    }
  });

  const paginated = sortedEntries.slice((page - 1) * pageSize, page * pageSize);
  const totalPages = Math.ceil(sortedEntries.length / pageSize);

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial", maxWidth: "700px", margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>{t[lang].title} ({t[lang].totalWords(Object.keys(words).length)})</h1>
        <button onClick={() => {
          const newLang = lang === "ko" ? "en" : "ko";
          setLang(newLang);
          localStorage.setItem("lang", newLang);
        }}>
          {lang === "ko" ? "🇺🇸 English" : "🇰🇷 한국어"}
        </button>
      </div>

      <div>
        {!user && (
          <button onClick={() => signInWithPopup(auth, provider).then(r => setUser(r.user))}>
            {t[lang].login}
          </button>
        )}
        {user && (
          <button onClick={async () => {
            if (!confirm("정말 로그아웃하시겠습니까?")) return;
            await signOut(auth);
            setUser(null);
          }}>
            {t[lang].logout}
          </button>
        )}
        {user && (
          <>
            <button onClick={() =>
              setDoc(doc(db, "users", user.uid), { wordData: words })
                .then(() => alert(t[lang].backupSuccess))
            }>
              {t[lang].backup}
            </button>
            <button onClick={async () => {
              const docSnap = await getDoc(doc(db, "users", user.uid));
              if (docSnap.exists()) {
                setWords(docSnap.data().wordData);
                localStorage.setItem("wordData", JSON.stringify(docSnap.data().wordData));
                alert("✅ 복원 완료! 새로고침하세요.");
              }
            }}>
              {t[lang].restore}
            </button>
            <div>👋 {user.displayName}</div>
          </>
        )}
      </div>

      <div style={{ marginTop: "1rem" }}>
        <button onClick={() => setSortMode(s => s === "abcAsc" ? "abcDesc" : "abcAsc")}>
          {t[lang].sortABC}
        </button>
        <button onClick={() => setSortMode(s => s === "countAsc" ? "countDesc" : "countAsc")}>
          {t[lang].sortCount}
        </button>
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
          <div key={word} className="word-card">
            <div className="word-card-header">
              <strong>{word}</strong>
            </div>
            <div className="word-card-sub">
              <div>{t[lang].studies(data.count)}</div>
              <div className="meta">
                {t[lang].lastReviewedLabel}: {t[lang].lastStudied(getDaysSince(data.lastReviewedAt))}
              </div>
            </div>
            <div>
              <a href={`https://www.google.com/search?q=${word}+meaning`} target="_blank"
                 onClick={() => handleReview(word, "dictionary")}>
                {t[lang].dictionary}
              </a>
              <a href={`https://www.google.com/search?q=pronounce+${word}`} target="_blank"
                 onClick={() => handleReview(word, "pronunciation")}
                 style={{ marginLeft: "1rem" }}>
                {t[lang].pronunciation}
              </a>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.5rem" }}>
              <button onClick={() => handleReview(word, "complete")}>
                {t[lang].studyDone}
              </button>
              <button
                onClick={() => {
                  if (confirm(t[lang].confirmDelete)) deleteWord(word);
                }}
                style={{ color: "red" }}>
                {t[lang].delete}
              </button>
            </div>
          </div>
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
