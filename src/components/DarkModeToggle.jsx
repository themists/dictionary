// src/components/DarkModeToggle.jsx
// 다크모드 토글 버튼
function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button onClick={() => setDarkMode((prev) => !prev)}>
      {darkMode ? "🌙" : "🌞"}
    </button>
  );
}

export default DarkModeToggle;
