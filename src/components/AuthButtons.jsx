// src/components/AuthButtons.jsx
// 로그인 / 백업 / 복원 / 로그아웃 버튼 (1줄 정렬 + 사용자 이름 통합)
import { signInWithPopup, signOut } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

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
    await setDoc(doc(db, "users", user.uid), { wordData: words });
    alert(t[lang].backupSuccess);
  };

  const handleRestore = async () => {
    const docSnap = await getDoc(doc(db, "users", user.uid));
    if (docSnap.exists()) {
      const data = docSnap.data().wordData;
      setWords(data);
      localStorage.setItem("wordData", JSON.stringify(data));
      alert("✅ 복원 완료! 새로고침하세요.");
    }
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
          <button onClick={handleLogout}> ({t[lang].logout})</button>
        </div>
      )}
    </div>
  );
}

export default AuthButtons;
