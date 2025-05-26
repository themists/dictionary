// src/components/DarkModeToggle.jsx
// 다크모드 토글 버튼
function DarkModeToggle({ darkMode, setDarkMode, t, lang }) {
  return (
    <button onClick={() => setDarkMode((prev) => !prev)}>
      {darkMode ? "🌞 " + t[lang].darkModeOff : "🌙 " + t[lang].darkModeOn}
    </button>
  );
}

export default DarkModeToggle;
