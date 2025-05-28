// src/handlers/backupHandlers.js
import {
  saveDataToFirestore,
  restoreDataFromFirestore,
  exportWordsToFile,
  importWordsFromFile
} from "../utils/backupUtils";

export function createBackupHandlers({ user, words, setWords }) {
  const handleBackup = async () => {
    if (!user) return;
    await saveDataToFirestore(user.uid, words);
    alert("✅ 백업이 완료되었습니다.");
  };

  const handleRestore = async () => {
    if (!user) return;
    const restored = await restoreDataFromFirestore(user.uid);
    if (restored) {
      setWords(restored);
      alert("✅ 복원이 완료되었습니다. 새로고침합니다.");
      setTimeout(() => window.location.reload(), 800);
    }
  };

  const handleExport = () => {
    exportWordsToFile(words);
  };

  const handleImport = async (file) => {
    if (!file) return;
    const imported = await importWordsFromFile(file);
    if (imported) {
      setWords((prev) => ({ ...prev, ...imported }));
      alert("✅ 병합 완료");
    }
  };

  return {
    handleBackup,
    handleRestore,
    handleExport,
    handleImport,
  };
}
