import { useEffect, useState } from "react";

function ScrollButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <div className="scroll-buttons">
      <button onClick={scrollToTop} className="scroll-btn">↑</button>
      <button onClick={scrollToBottom} className="scroll-btn">↓</button>
    </div>
  );
}

export default ScrollButtons;
