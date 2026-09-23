"use client";

import { footerTexts } from "@/components/portfolio-data";
import { useLanguage } from "@/context/language-context";

export function Footer() {
  const { lang } = useLanguage();
  return (
    <footer className="section-shell py-10 text-center text-sm text-[var(--text-muted)]">
      {footerTexts[lang]}
    </footer>
  );
}
