// src/components/HeaderBar.jsx
// 제목 + 다크모드 / 언어 전환 버튼 포함 상단 헤더

function HeaderBar({ wordCount, darkMode, setDarkMode, lang, setLang }) {
  return (
    <div className="header-row">
      <h1>EchoWord ({wordCount} words)</h1>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button
          className="dark-mode-toggle-button"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          {!darkMode ? "🌙" : "🌞"}
        </button>
        <button
          className="language-toggle-button"
          onClick={() => {
            const newLang = lang === "ko" ? "en" : "ko";
            setLang(newLang);
            localStorage.setItem("lang", newLang);
          }}
        >
          {lang === "ko" ? "🇺🇸" : "🇰🇷"}
        </button>
      </div>
    </div>
  );
}

export default HeaderBar;
