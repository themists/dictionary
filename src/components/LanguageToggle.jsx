// src/components/LanguageToggle.jsx
// 언어 전환 버튼
function LanguageToggle({ lang, setLang }) {
  const handleToggle = () => {
    const newLang = lang === "ko" ? "en" : "ko";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <button onClick={handleToggle}>
      {lang === "ko" ? "🇺🇸 " : "🇰🇷 "}
    </button>
  );
}

export default LanguageToggle;
