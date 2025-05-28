// src/components/SortControls.jsx
// 정렬 기준 선택 버튼들 + 새로 고침 버튼 우측 정렬

function SortControls({ sortMode, setSortMode, lang, t }) {
  return (
    <div className="sort-controls-wrapper">
      <div className="sort-buttons">
        <span style={{ fontWeight: "bold", marginRight: "0.5rem" }}>
          {lang === "ko" ? "정렬" : "Sort"}
        </span>
        <button onClick={() => setSortMode(s => s === "abcAsc" ? "abcDesc" : "abcAsc")}>
          {t[lang].sortABC}
        </button>
        <button onClick={() => setSortMode(s => s === "countAsc" ? "countDesc" : "countAsc")}>
          {t[lang].sortCount}
        </button>
        <button onClick={() => setSortMode(s => s === "dateAsc" ? "dateDesc" : "dateAsc")}>
          {t[lang].sortDate}
        </button>
      </div>
      <div className="refresh-button">
        <button onClick={() => window.location.reload()}>🔄</button>
      </div>
    </div>
  );
}

export default SortControls;
