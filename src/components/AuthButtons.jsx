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
        <>
          <button onClick={handleLogout}>{t[lang].logout}</button>
          <button onClick={handleBackup} title={t[lang].backup}>
          ⬆️
          </button>
          <button onClick={handleRestore} title={t[lang].restore}>
          ⬇️
          </button>
          <div>👋 {user.displayName}</div>
        </>
      )}
    </div>
  );
}

export default AuthButtons;
