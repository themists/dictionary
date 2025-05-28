// src/hooks/useSettingsPanel.js
import { useEffect, useRef, useState } from "react";

export default function useSettingsPanel() {
  const [showSettings, setShowSettings] = useState(false);
  const settingsRef = useRef(null);
  const settingsButtonRef = useRef(null);

  const toggleSettings = () => setShowSettings((prev) => !prev);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target) &&
        settingsButtonRef.current &&
        !settingsButtonRef.current.contains(event.target)
      ) {
        setShowSettings(false);
      }
    }

    if (showSettings) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSettings]);

  return {
    showSettings,
    toggleSettings,
    settingsRef,
    settingsButtonRef,
  };
}
