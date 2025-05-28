// src/components/AuthButtons.jsx
import { useState } from "react";
import { signInWithPopup, signOut } from "firebase/auth";

function AuthButtons({ user, setUser, auth, provider, t, lang }) {
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

  return (
    <div>
      {!user && (
        <button onClick={handleLogin}>{t[lang].login}</button>
      )}
      {user && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <button onClick={handleLogout}>🔓</button>
            <span style={{ fontSize: "0.9rem", color: "#666" }}>{user.displayName || user.email}</span>
          </div>
          <button onClick={() => window.location.reload()} style={{ marginLeft: "auto" }}>🔄</button>
        </div>
      )}
    </div>
  );
}

export default AuthButtons;
