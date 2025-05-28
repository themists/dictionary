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
    <div className="header-row">
      <h1>EchoWord ({wordCount} words)</h1>
      <button onClick={() => setShowSettings(!showSettings)}>⚙️</button>
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
