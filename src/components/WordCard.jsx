// src/components/WordCard.jsx
// WordCard 컴포넌트
function WordCard({ word, data, lang, t, onReview, onDelete, getDaysSince }) {
  return (
    <div className="word-card">
      <div className="word-card-header">
        <strong>{word}</strong>
      </div>
      <div className="word-card-sub">
        <div>{t[lang].studies(data.count)}</div>
        <div className="meta">
          {t[lang].lastReviewedLabel}: {t[lang].lastStudied(getDaysSince(data.lastReviewedAt))}
        </div>
      </div>
      <div>
        <a
          href={`https://www.google.com/search?q=${word}+meaning`}
          target="_blank"
          onClick={() => onReview(word, "dictionary")}
        >
          {t[lang].dictionary}
        </a>
        <a
          href={`https://www.google.com/search?q=pronounce+${word}`}
          target="_blank"
          onClick={() => onReview(word, "pronunciation")}
          style={{ marginLeft: "1rem" }}
        >
          {t[lang].pronunciation}
        </a>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.5rem" }}>
        <button onClick={() => onReview(word, "complete")}>
          {t[lang].studyDone}
        </button>
        <button
          onClick={() => {
            if (confirm(t[lang].confirmDelete)) onDelete(word);
          }}
          style={{ color: "red" }}
        >
          {t[lang].delete}
        </button>
      </div>
    </div>
  );
}

export default WordCard;
