// src/components/HeaderBar.jsx
import React, { useState } from "react";
import SettingsPanel from "./SettingsPanel";

function HeaderBar({
  wordCount,
  onBackup,
  onRestore,
  onExport,
  onImport,
  toggleDarkMode,
  toggleLang,
  lang,
  darkMode
}) {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="header-title-line">
      <h1>EchoWord ({wordCount} words)</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <button onClick={() => window.location.reload()}>🔄</button>
        <button onClick={() => setShowSettings(!showSettings)}>⚙️</button>
      </div>
      {showSettings && (
        <SettingsPanel
          onBackup={onBackup}
          onRestore={onRestore}
          onExport={onExport}
          onImport={onImport}
          toggleDarkMode={toggleDarkMode}
          toggleLang={toggleLang}
          lang={lang}
          darkMode={darkMode}
        />
      )}
    </div>
  );
}

export default HeaderBar;
