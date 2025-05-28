// src/components/HeaderBar.jsx
import React from "react";

function HeaderBar({
  wordCount,
  onToggleSettings // ✅ 새 props로 토글
}) {
  return (
    <div className="header-title-line">
      <h1>EchoWord ({wordCount} words)</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <button onClick={onToggleSettings}>⚙️</button>
      </div>
    </div>
  );
}

export default HeaderBar;
