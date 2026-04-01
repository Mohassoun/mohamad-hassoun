"use client";

import { useEffect, useState } from "react";
import { FiChevronUp } from "react-icons/fi";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-0 z-40 rounded-l-2xl border border-r-0 border-[var(--border)] bg-[var(--panel-strong)] px-4 py-3 text-2xl text-[var(--accent)] shadow-glow"
      aria-label="Back to top"
    >
      <FiChevronUp />
    </button>
  );
}
