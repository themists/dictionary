// src/components/WordInput.jsx
// 단어 입력창 컴포넌트

function WordInput({ inputWord, setInputWord, onAddWord, placeholder }) {
  return (
    <input
      type="text"
      value={inputWord}
      onChange={(e) => setInputWord(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          const word = inputWord.trim().toLowerCase();
          if (word) onAddWord(word);
          setInputWord("");
        }
      }}
      placeholder={placeholder}
    />
  );
}

export default WordInput;
