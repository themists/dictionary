// src/components/SettingsPanel.jsx
import React, { useState } from "react";

function SettingsPanel({
  onBackup,
  onRestore,
  onExport,
  onImport,
  toggleDarkMode,
  toggleLang,
  lang,
  darkMode
}) {
  return (
    <div className="settings-panel">
      <h2>Settings</h2>
      <button onClick={toggleDarkMode}>{darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}</button>
      <button onClick={toggleLang}>{lang === "en" ? "🇰🇷 한국어" : "🇺🇸 English"}</button>
      <button onClick={onBackup}>💾 Backup</button>
      <button onClick={onRestore}>♻️ Restore</button>
      <button onClick={onExport}>📤 Export</button>
      <label className="import-label">
        📥 Import
        <input
          type="file"
          accept="application/json"
          style={{ display: "none" }}
          onChange={(e) => onImport(e.target.files[0])}
        />
      </label>
    </div>
  );
}

export default SettingsPanel;


// src/components/HeaderBar.jsx (수정)
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


// src/App.jsx (핵심 기능 함수 연결 추가)
import { saveDataToFirestore, restoreDataFromFirestore, exportWordsToFile, importWordsFromFile } from "./utils/backupUtils";

function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "ko");

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    document.body.classList.toggle("dark-mode", newMode);
  };

  const toggleLang = () => {
    const newLang = lang === "en" ? "ko" : "en";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const handleBackup = async () => {
    if (user) await saveDataToFirestore(user.uid, words);
  };

  const handleRestore = async () => {
    if (user) {
      const restored = await restoreDataFromFirestore(user.uid);
      if (restored) setWords(restored);
    }
  };

  const handleExport = () => {
    exportWordsToFile(words);
  };

  const handleImport = async (file) => {
    const imported = await importWordsFromFile(file);
    if (imported) setWords((prev) => ({ ...prev, ...imported }));
  };

  return (
    <div className="container">
      <HeaderBar
        wordCount={Object.keys(words).length}
        onBackup={handleBackup}
        onRestore={handleRestore}
        onExport={handleExport}
        onImport={handleImport}
        toggleDarkMode={toggleDarkMode}
        toggleLang={toggleLang}
        lang={lang}
        darkMode={darkMode}
      />
      {/* 기존 구성 유지 */}
    </div>
  );
}


// App.css (변경 없음 - 기존 스타일로 충분히 대응 가능)
