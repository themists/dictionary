import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
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
  const pageSize = 30;

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wordData")) || {};
    // ✅ 마이그레이션은 2025-05-25 완료됨. 구조는 고정.
    setWords(saved);
    onAuthStateChanged(auth, (u) => setUser(u));
  }, []);

  const getToday = () => new Date().toISOString().slice(0, 10);

  const getDaysSince = (dateString) => {
    const today = new Date();
    const past = new Date(dateString);
    const diffTime = today.getTime() - past.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const addWord = (word) => {
    const lower = word.toLowerCase();
    const today = getToday();
    const existing = words[lower];

    const updated = { ...words };

    if (existing) {
      updated[lower] = {
        count: existing.count + 1,
        lastReviewedAt: today
      };
    } else {
      updated[lower] = {
        count: 0,
        lastReviewedAt: today
      };
    }

    setWords(updated);
    localStorage.setItem("wordData", JSON.stringify(updated));
  };

  const increment = (word) => {
    const today = getToday();
    const updated = {
      ...words,
      [word]: {
        count: words[word].count + 1,
        lastReviewedAt: today
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

  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (err) {
      alert("로그인 실패: " + err.message);
    }
  };

  const signOutUser = async () => {
    if (!confirm("정말 로그아웃하시겠습니까?")) return;
    await signOut(auth);
    setUser(null);
  };

  const backup = async () => {
    if (!user) return alert("로그인하세요.");
    await setDoc(doc(db, "users", user.uid), { wordData: words });
    alert("✅ 백업 완료!");
  };

  const restore = async () => {
    if (!user) return alert("로그인하세요.");
    const docSnap = await getDoc(doc(db, "users", user.uid));
    if (docSnap.exists()) {
      setWords(docSnap.data().wordData);
      localStorage.setItem("wordData", JSON.stringify(docSnap.data().wordData));
      alert("✅ 복원 완료! 새로고침하세요.");
    } else {
      alert("❗ 저장된 데이터 없음");
    }
  };

  const toggleSort = (type) => {
    setSortMode((prev) => {
      if (type === "abc") {
        return prev === "abcAsc" ? "abcDesc" : "abcAsc";
      } else {
        return prev === "countAsc" ? "countDesc" : "countAsc";
      }
    });
  };

  const sortedEntries = Object.entries(words).sort(([aWord, aData], [bWord, bData]) => {
    switch (sortMode) {
      case "abcAsc":
        return aWord.localeCompare(bWord);
      case "abcDesc":
        return bWord.localeCompare(aWord);
      case "countDesc":
        return bData.count - aData.count;
      case "countAsc":
      default:
        return aData.count - bData.count;
    }
  });

  const paginated = sortedEntries.slice((page - 1) * pageSize, page * pageSize);
  const totalPages = Math.ceil(sortedEntries.length / pageSize);

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial" }}>
      <h1>
        Quick Word Practice (총 {Object.keys(words).length}단어)
      </h1>
      <div>
        <button onClick={signIn}>🔑 로그인</button>
        <button onClick={backup}>📤 백업</button>
        <button onClick={restore}>📥 복원</button>
        <button onClick={signOutUser}>🚪 로그아웃</button>
        {user && <div>👋 안녕하세요, {user.displayName}님!</div>}
      </div>

      <div style={{ marginTop: "1rem" }}>
        <button onClick={() => toggleSort("abc")}>🔤 ABC 정렬</button>
        <button onClick={() => toggleSort("count")}>🔢 복습횟수 정렬</button>
      </div>

      {totalPages > 1 && (
        <PaginationControls page={page} totalPages={totalPages} onPageChange={setPage} />
      )}

      <input
        value={inputWord}
        onChange={(e) => setInputWord(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const word = inputWord.trim().toLowerCase();
            if (word) addWord(word);
            setInputWord("");
          }
        }}
        placeholder="Enter a word..."
        style={{ width: "100%", padding: "0.5rem", marginTop: "1rem" }}
      />

      <div>
        {paginated.map(([word, data]) => (
          <div
            key={word}
            style={{
              background: "white",
              borderRadius: "10px",
              padding: "1rem",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              marginTop: "1rem",
              color: "#222"
            }}
          >
            <strong style={{ fontSize: "1.2rem" }}>{word}</strong> (복습 횟수: {data.count})
            <div style={{ fontSize: "0.85rem", color: "#666" }}>
              마지막 복습일: {getDaysSince(data.lastReviewedAt) === 0
                ? "오늘"
                : `+${getDaysSince(data.lastReviewedAt)}일 전`}
            </div>
            <div>
              <a href={`https://www.google.com/search?q=${word}+meaning`} target="_blank">
                Dictionary
              </a>
              <a
                href={`https://www.google.com/search?q=pronounce+${word}`}
                target="_blank"
                style={{ marginLeft: "1rem" }}
              >
                Pronunciation
              </a>
            </div>
            <button onClick={() => increment(word)}>복습 완료</button>
            <button onClick={() => deleteWord(word)} style={{ color: "red" }}>
              삭제
            </button>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <PaginationControls page={page} totalPages={totalPages} onPageChange={setPage} />
      )}
    </div>
  );
}

export default App;
