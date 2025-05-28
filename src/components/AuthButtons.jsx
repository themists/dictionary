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
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "600px",
            margin: "0 auto",
            width: "100%",
            flexWrap: "nowrap"
          }}
        >
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <button onClick={handleLogout}>🔓</button>
            <span style={{ fontSize: "0.9rem", color: "#666" }}>{user.displayName || user.email}</span>
          </div>
          <div>
            <button onClick={() => window.location.reload()}>🔄</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AuthButtons;
