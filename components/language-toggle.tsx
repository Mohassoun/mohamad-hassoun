"use client";

import { useLanguage } from "@/context/language-context";

function FlagFR() {
  return (
    <svg viewBox="0 0 24 16" className="h-4 w-6 overflow-hidden rounded-full" aria-hidden="true">
      <rect width="24" height="16" fill="#ffffff" />
      <rect width="8" height="16" fill="#002654" />
      <rect x="16" width="8" height="16" fill="#ED2939" />
    </svg>
  );
}

function FlagGB() {
  return (
    <svg viewBox="0 0 24 16" className="h-4 w-6 overflow-hidden rounded-full" aria-hidden="true">
      <rect width="24" height="16" fill="#012169" />
      <path d="M0 0l24 16M24 0L0 16" stroke="#ffffff" strokeWidth="3" />
      <path d="M0 0l24 16M24 0L0 16" stroke="#C8102E" strokeWidth="1.4" />
      <path d="M12 0v16M0 8h24" stroke="#ffffff" strokeWidth="5" />
      <path d="M12 0v16M0 8h24" stroke="#C8102E" strokeWidth="2.6" />
    </svg>
  );
}

export function LanguageToggle() {
  const { lang, setLang, toggle } = useLanguage();

  const btn = (active: boolean) =>
    `flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[11px] font-semibold transition-all ${
      active
        ? "bg-[image:var(--brand-gradient)] text-white shadow-[0_4px_14px_rgba(99,102,241,0.39)]"
        : "text-[var(--text-muted)] hover:text-[var(--text)]"
    }`;

  const activeLabel = lang === "fr" ? "FR" : "EN";
  const activeTitle = lang === "fr" ? "Français (cliquer pour English)" : "English (click for Français)";

  return (
    <>
      {/* Compact: < sm — single button showing active lang only */}
      <button
        type="button"
        onClick={toggle}
        aria-label={activeTitle}
        title={activeTitle}
        className="flex shrink-0 items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--panel)] px-2.5 py-1.5 text-[11px] font-semibold text-[var(--text)] transition-all hover:border-[var(--accent)] sm:hidden"
      >
        {lang === "fr" ? <FlagFR /> : <FlagGB />}
        {activeLabel}
      </button>

      {/* Full pill: sm and up */}
      <div
        role="group"
        aria-label="Language / Langue"
        className="hidden items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--panel)] p-1 transition-all sm:flex"
      >
        <button
          type="button"
          onClick={() => setLang("fr")}
          aria-pressed={lang === "fr"}
          aria-label="Français"
          title="Français"
          className={btn(lang === "fr")}
        >
          <FlagFR />
          FR
        </button>
        <button
          type="button"
          onClick={() => setLang("en")}
          aria-pressed={lang === "en"}
          aria-label="English"
          title="English"
          className={btn(lang === "en")}
        >
          <FlagGB />
          EN
        </button>
      </div>
    </>
  );
}
