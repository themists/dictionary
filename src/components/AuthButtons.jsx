// src/components/AuthButtons.jsx
// 로그인 / 백업 / 복원 버튼
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
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {/* 1줄: 로그아웃 버튼 + 사용자 이름 */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <button onClick={handleLogout}>🔓 {t[lang].logout}</button>
            <div>👋 {user.displayName}</div>
          </div>

          {/* 2줄: 백업 / 복원 버튼 */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            <button onClick={handleBackup}>💾 {t[lang].backup}</button>
            <button onClick={handleRestore}>♻️ {t[lang].restore}</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AuthButtons;
