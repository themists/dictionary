import { useState, useRef } from "react";
import "./App.css";

import { db, auth, provider } from "./utils/firebase";
import HeaderBar from "./components/HeaderBar";
import AuthButtons from "./components/AuthButtons";
import SortControls from "./components/SortControls";
import PaginationBlock from "./components/PaginationBlock";
import WordInput from "./components/WordInput";
import WordList from "./components/WordList";
import ScrollButtons from "./components/ScrollButtons";
import SettingsPanel from "./components/SettingsPanel";

import useSyncWithFirebase from "./hooks/useSyncWithFirebase";
import useWordActions from "./hooks/useWordActions";
import useAppLifecycle from "./hooks/useAppLifecycle";
import useSettingsPanel from "./hooks/useSettingsPanel";

import { getDaysSince } from "./utils/dateUtils";
import { getSortedEntries, getPaginatedEntries } from "./utils/wordUtils";
import { createBackupHandlers } from "./handlers/backupHandlers";
import t from "./utils/i18n";

function App() {
  const [words, setWords] = useState({});
  const [inputWord, setInputWord] = useState("");
  const [user, setUser] = useState(null);
  const [sortMode, setSortMode] = useState("countAsc");
  const [page, setPage] = useState(1);
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "ko");
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");
  const [highlightedWord, setHighlightedWord] = useState(null);
  const [saveStatus, setSaveStatus] = useState("");
  const [isRestoring, setIsRestoring] = useState(false);
  const [backupError, setBackupError] = useState(false); // ✅ 추가 상태

  const pageSize = 30;
  const skipNextSaveRef = useRef(false);

  const {
    showSettings,
    toggleSettings,
    settingsRef,
    settingsButtonRef,
  } = useSettingsPanel();

  useSyncWithFirebase({ auth, db, setUser, setWords });

  const { addWord, handleReview, deleteWord } = useWordActions({
    words,
    setWords,
    user,
    db,
    skipNextSaveRef
  });

  useAppLifecycle({
    user,
    words,
    inputWord,
    darkMode,
    setWords,
    setSaveStatus,
    setIsRestoring,
    skipNextSaveRef,
    setBackupError, // ✅ 상태 전달
  });

  const {
    handleBackup,
    handleRestore,
    handleExport,
    handleImport
  } = createBackupHandlers({ user, words, setWords });

  const sortedEntries = getSortedEntries(words, sortMode, highlightedWord);
  const paginated = getPaginatedEntries(sortedEntries, page, pageSize);
  const totalPages = Math.ceil(sortedEntries.length / pageSize);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    document.body.classList.toggle("dark-mode", newMode);
  };

  const toggleLang = () => {
    const newLang = lang === "en" ? "ko" : "en";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <div className="container" style={{ padding: "1rem", fontFamily: "Arial" }}>
      {(isRestoring || backupError) && (
        <div className={`progress-bar ${backupError ? "error" : ""}`} />
      )}

      <HeaderBar
        wordCount={Object.keys(words).length}
        onBackup={handleBackup}
        onRestore={handleRestore}
        onExport={handleExport}
        onImport={handleImport}
        toggleDarkMode={toggleDarkMode}
        toggleLang={toggleLang}
        lang={lang}
        darkMode={darkMode}
        onToggleSettings={toggleSettings}
        settingsButtonRef={settingsButtonRef}
      />

      <div className="top-group fixed-width-section">
        <div className="row">
          <AuthButtons
            user={user}
            setUser={setUser}
            auth={auth}
            provider={provider}
            db={db}
            words={words}
            setWords={setWords}
            t={t}
            lang={lang}
          />
        </div>

        <SortControls sortMode={sortMode} setSortMode={setSortMode} lang={lang} t={t} />
      </div>

      <PaginationBlock totalPages={totalPages} page={page} setPage={setPage} t={t[lang]} className="fixed-width-section" />

      <div className="fixed-width-section">
        <WordInput
          inputWord={inputWord}
          setInputWord={setInputWord}
          onAddWord={(word) => addWord(word, setHighlightedWord, setPage)}
          placeholder={t[lang].inputPlaceholder}
        />
      </div>

      <div className="fixed-width-section">
        <WordList
          words={paginated}
          lang={lang}
          t={t}
          getDaysSince={getDaysSince}
          onReview={handleReview}
          onDelete={deleteWord}
        />
      </div>

      <PaginationBlock totalPages={totalPages} page={page} setPage={setPage} t={t[lang]} className="fixed-width-section" />

      {saveStatus && (
        <div style={{ textAlign: "center", color: "#888", marginTop: "0.5rem" }}>{saveStatus}</div>
      )}

      <div style={{ marginTop: "2rem", fontSize: "0.8rem", color: "#888", textAlign: "center" }}>
        {t[lang].version(`v${import.meta.env.VITE_APP_VERSION}`)}
      </div>

      {showSettings && (
        <div ref={settingsRef} style={{ position: "absolute", right: "1rem", top: "3rem", zIndex: 1000 }}>
          <SettingsPanel
            onBackup={handleBackup}
            onRestore={handleRestore}
            onExport={handleExport}
            onImport={handleImport}
            toggleDarkMode={toggleDarkMode}
            toggleLang={toggleLang}
            lang={lang}
            darkMode={darkMode}
          />
        </div>
      )}

      <ScrollButtons />
    </div>
  );
}

export default App;
