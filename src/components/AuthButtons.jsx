// src/components/AuthButtons.jsx
import { useState } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { optimizedBackup } from "../utils/optimizedBackup";
import { firestoreRestore } from "../utils/firestoreRestore";
import { restoreFromFirestoreWithMerge } from "../utils/restoreFromFirestoreWithMerge";

function AuthButtons({ user, setUser, auth, provider, db, words, setWords, t, lang }) {
  const [isRestoring, setIsRestoring] = useState(false);

  const handleLogin = async () => {
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
  };

  const handleLogout = async () => {
    if (!confirm("정말 로그아웃하시겠습니까?")) return;
    await signOut(auth);
    setUser(null);
  };

  const handleBackup = () => {
    if (user) {
      optimizedBackup(user.uid, words);
    }
  };

  const handleRestore = async () => {
    if (!user || isRestoring) return;
    setIsRestoring(true);

    try {
      const restored = await restoreFromFirestoreWithMerge(user.uid, db);
      if (restored) {
        setWords(restored);
        alert("✅ 복원 완료. 곧 새로고침됩니다.");
        setTimeout(() => window.location.reload(), 800);
      }
    } catch (err) {
      console.error("❌ 복원 실패:", err);
      alert("⚠️ 복원 중 문제가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsRestoring(false);
    }
  };

  // 📦 클라우드 덮어쓰기 복원 – 추후 설정 메뉴 등에서 UI 적용 예정
  const handleCloudRestore = async () => {
    if (!user) return;
    const restored = await firestoreRestore(user.uid);
    if (restored) {
      setWords(restored);
      alert("📦 클라우드에서 복원 완료. 새로고침합니다.");
      setTimeout(() => window.location.reload(), 800);
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
          <button onClick={handleRestore} disabled={isRestoring}>♻️ {t[lang].restore}</button>
          {/* <button onClick={handleCloudRestore}>📦 클라우드 완전 복원</button> */}
          <button onClick={handleLogout}>🔓 </button>
          <button onClick={() => window.location.reload()}>🔄</button>
        </div>
      )}
    </div>
  );
}

export default AuthButtons;
