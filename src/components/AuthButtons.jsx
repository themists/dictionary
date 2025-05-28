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
// 이 div가 두 개의 자식 div를 감싸는 부모 역할을 합니다.
<div style={{
  display: "flex",             // 자식 div들을 flex 아이템으로 만듭니다.
  justifyContent: "space-between", // 첫 번째 자식은 왼쪽, 두 번째 자식은 오른쪽에 배치합니다.
  alignItems: "center",        // 자식 div들을 수직 중앙에 정렬합니다.
  width: "100%"                // 부모 div가 전체 너비를 차지하도록 하여 space-between이 효과적으로 작동하게 합니다.
}}>
  {/* 첫 번째 div (왼쪽 정렬 대상) */}
  <div style={{
    display: "flex",        // 내부 요소(버튼, 텍스트)를 위한 flex
    gap: "0.5rem",
    alignItems: "center"     // 버튼과 텍스트를 수직 중앙 정렬
  }}>
    <button onClick={handleLogout}>🔓</button>
    <span style={{ fontSize: "0.9rem", color: "#666" }}>
      Welcome back!
    </span>
  </div>

  {/* 두 번째 div (오른쪽 정렬 대상) */}
  <div style={{
    display: "flex",        // 내부 요소(버튼)를 위한 flex (항목이 하나라도 일관성을 위해 사용 가능)
    gap: "0.5rem",          // 필요에 따라 조절
    alignItems: "center"     // 버튼을 수직 중앙 정렬
  }}>
    <button onClick={() => window.location.reload()}>🔄</button>
  </div>
</div>
        </div>
      )}
    </div>
  );
}

export default AuthButtons;
