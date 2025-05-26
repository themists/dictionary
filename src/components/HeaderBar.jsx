// src/components/HeaderBar.jsx

import DarkModeToggle from "./DarkModeToggle";
import LanguageToggle from "./LanguageToggle";
import t from "../utils/i18n";

function HeaderBar({ wordCount, darkMode, setDarkMode, lang, setLang }) {
  return (
    <div className="header-row">
      <h1>EchoWord ({wordCount} words)</h1>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} t={t} lang={lang} />
        <LanguageToggle lang={lang} setLang={setLang} />
      </div>
    </div>
  );
}

export default HeaderBar;
