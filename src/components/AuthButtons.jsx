// src/components/AuthButtons.jsx
// 로그인 / 백업 / 복원 / 로그아웃 버튼 (1줄 정렬 + 사용자 이름 통합)
import { signInWithPopup, signOut } from "firebase/auth";
import { doc, setDoc, getDocs, collection } from "firebase/firestore";

function AuthButtons({ user, setUser, auth, provider, db, words, setWords, t, lang }) {
  const handleLogin = async () => {
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
  };

  const handleLogout = async () => {
    if (!confirm("정말 로그아웃하시겠습니까?")) return;
    await signOut(auth);
    setUser(null);
  };

  const handleBackup = async () => {
    if (!user) return;
    try {
      const entries = Object.entries(words);
      for (const [word, data] of entries) {
        await setDoc(doc(db, "users", user.uid, "words", word), data);
      }
      alert(t[lang].backupSuccess);
    } catch (err) {
      console.error("❌ 백업 중 오류:", err);
      alert("⚠️ 백업 중 오류가 발생했습니다.");
    }
  };

  const handleRestore = async () => {
    const querySnapshot = await getDocs(collection(db, "users", user.uid, "words"));
    const firestoreWords = {};
    querySnapshot.forEach((doc) => {
      firestoreWords[doc.id] = doc.data();
    });

    const localWords = JSON.parse(localStorage.getItem("wordData")) || {};
    const merged = { ...firestoreWords };

    for (const [word, localData] of Object.entries(localWords)) {
      const remoteData = firestoreWords[word];
      const localDate = new Date(localData.lastReviewedAt || "2000-01-01");
      const remoteDate = new Date(remoteData?.lastReviewedAt || "2000-01-01");

      if (!remoteData || localDate > remoteDate) {
        merged[word] = localData;
      }
    }

    setWords(merged);
    localStorage.setItem("wordData", JSON.stringify(merged));
    alert("✅ 복원 완료 (신규/최근 단어는 병합되었습니다)");
  };

  return (
    <div>
      {!user && (
        <button onClick={handleLogin}>{t[lang].login}</button>
      )}
      {user && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", alignItems: "center" }}>
          <button onClick={handleBackup}>💾 {t[lang].backup}</button>
          <button onClick={handleRestore}>♻️ {t[lang].restore}</button>
          <button onClick={handleLogout}>🔓 </button>
          <button onClick={() => window.location.reload()}>🔄</button>
        </div>
      )}
    </div>
  );
}

export default AuthButtons;
