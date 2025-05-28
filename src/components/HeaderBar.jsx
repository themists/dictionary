// src/components/HeaderBar.jsx
import React from "react";

function HeaderBar({
  wordCount,
  onToggleSettings,
  settingsButtonRef // ✅ 버튼 참조 받기
}) {
  return (
    <div className="header-title-line">
      <h1>EchoWord ({wordCount} words)</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <button ref={settingsButtonRef} onClick={onToggleSettings}>⚙️</button>
      </div>
    </div>
  );
}

export default HeaderBar;
