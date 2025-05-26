// src/components/WordList.jsx
// 단어 카드 리스트 렌더링

import WordCard from "./WordCard";

function WordList({ words, lang, t, getDaysSince, onReview, onDelete }) {
  return (
    <>
      {words.map(([word, data]) => (
        <WordCard
          key={word}
          word={word}
          data={data}
          lang={lang}
          t={t}
          getDaysSince={getDaysSince}
          onReview={onReview}
          onDelete={onDelete}
        />
      ))}
    </>
  );
}

export default WordList;
