// src/components/SettingsPanel.jsx
import React from "react";

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
  const handleConfirmedBackup = () => {
    if (confirm("💾 현재 데이터를 클라우드에 백업하시겠습니까?")) {
      onBackup();
    }
  };

  const handleConfirmedRestore = () => {
    if (confirm("⚠️ 클라우드 데이터를 현재 데이터에 덮어쓰시겠습니까?\n이 작업은 취소할 수 없습니다.")) {
      onRestore();
    }
  };

  const handleConfirmedImport = (file) => {
    if (file && confirm("📥 선택한 파일의 단어를 기존 데이터와 병합하시겠습니까?")) {
      onImport(file);
    }
  };

  return (
    <div className="settings-panel">
      <h2>Settings</h2>

      <button onClick={toggleDarkMode}>
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>

      <button onClick={toggleLang}>
        {lang === "en" ? "🇰🇷 한국어" : "🇺🇸 English"}
      </button>

      <button onClick={handleConfirmedBackup}>💾 Backup</button>

      <button onClick={handleConfirmedRestore}>♻️ Restore</button>

      <button onClick={onExport}>📤 Export</button>

      <label className="import-label">
        📥 Import
        <input
          type="file"
          accept="application/json"
          style={{ display: "none" }}
          onChange={(e) => handleConfirmedImport(e.target.files[0])}
        />
      </label>
    </div>
  );
}

export default SettingsPanel;
