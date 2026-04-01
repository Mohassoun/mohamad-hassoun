"use client";
import { useEffect, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { navItems, resumeUrl } from "@/components/portfolio-data";

type NavbarProps = {
  isDark: boolean;
  onToggleTheme: () => void;
};

export function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
        className={`fixed inset-x-0 top-0 z-50 transition ${
          isScrolled ? "bg-[var(--bg)]" : "bg-transparent"
        }`}
      >
        <div className="section-shell flex items-center justify-between py-4">
          <button
            onClick={() => navigate("home")}
            className="font-heading text-xl font-semibold tracking-wide"
          >
            <span className="text-[var(--text)]">&lt; </span>
            <span className="font-script text-3xl text-[var(--accent)]">Hassoun</span>
            <span className="text-[var(--text)]"> /&gt;</span>
          </button>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className="rounded px-3 py-2 text-[13px] text-[var(--text)] transition hover:bg-[var(--accent)] hover:text-white"
              >
                {item.label}
              </button>
            ))}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="ml-2 rounded border border-[var(--accent)] px-4 py-2 text-[13px] font-medium text-[var(--text)] transition hover:bg-[var(--accent)] hover:text-white"
            >
              RESUME
            </a>
            <button
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className="ml-2 p-2 text-[var(--text)]"
            >
              {isDark ? <FiSun /> : <FiMoon />}
            </button>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className="p-2 text-[var(--text)]"
            >
              {isDark ? <FiSun /> : <FiMoon />}
            </button>
            <button
              onClick={() => setIsOpen((value) => !value)}
              aria-label="Open menu"
              className="p-2 text-[var(--text)]"
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
              className="block border border-[var(--accent)] px-4 py-3 text-center font-medium text-[var(--text)]"
            >
              RESUME
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
