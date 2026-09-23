"use client";
import { useEffect, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { getNavItems, resumeUrl, uiStrings } from "@/components/portfolio-data";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/context/language-context";

type NavbarProps = {
  isDark: boolean;
  onToggleTheme: () => void;
};

export function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang } = useLanguage();
  const navItems = getNavItems(lang);
  const t = uiStrings[lang];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-all ${
          isScrolled
            ? "border-[var(--border)] bg-[var(--bg)]/95 shadow-[var(--shadow)]"
            : "border-transparent bg-[var(--bg)]/80"
        }`}
      >
        <div className="section-shell flex items-center justify-between gap-2 py-3 sm:py-4">
          <button
            onClick={() => navigate("home")}
            className="shrink-0 font-heading text-lg font-semibold tracking-wide sm:text-xl"
          >
            <span className="text-[var(--text)]">&lt; </span>
            <span className="font-script text-2xl text-[var(--accent)] sm:text-3xl">Hassoun</span>
            <span className="text-[var(--text)]"> /&gt;</span>
          </button>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className="rounded-full px-3 py-2 text-[13px] text-[var(--text)] transition hover:bg-[var(--accent)] hover:text-white"
              >
                {item.label}
              </button>
            ))}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="ml-2 rounded-full border-2 border-[var(--accent)] px-6 py-2 text-[13px] font-medium text-[var(--accent)] transition-all hover:bg-[var(--accent)] hover:text-white"
            >
              {t.resume}
            </a>
            <LanguageToggle />
            <button
              onClick={onToggleTheme}
              aria-label={t.toggleTheme}
              className="ml-2 p-2 text-[var(--text)]"
            >
              {isDark ? <FiSun /> : <FiMoon />}
            </button>
          </nav>

          <div className="flex shrink-0 items-center gap-1 sm:gap-2 lg:hidden">
            <LanguageToggle />
            <button
              onClick={onToggleTheme}
              aria-label={t.toggleTheme}
              className="shrink-0 p-2 text-[var(--text)]"
            >
              {isDark ? <FiSun /> : <FiMoon />}
            </button>
            <button
              onClick={() => setIsOpen((value) => !value)}
              aria-label={t.openMenu}
              className="shrink-0 p-2 text-[var(--text)]"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </header>

      {isOpen ? (
        <div className="fixed inset-x-4 top-20 z-40 border border-[var(--border)] bg-[var(--panel-strong)] p-4 lg:hidden">
          <div className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => navigate(item.id)}
                  className="flex w-full items-center gap-3 px-4 py-3 text-left text-[var(--text)] transition hover:bg-[var(--accent)] hover:text-white"
                >
                  <Icon className="text-[var(--accent)]" />
                  <span>{item.label}</span>
                </button>
              );
            })}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="block rounded-full border border-[var(--accent)] px-4 py-3 text-center font-medium text-[var(--text)]"
            >
              {t.resume}
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
