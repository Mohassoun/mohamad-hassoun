"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

export type Language = "fr" | "en";

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  toggle: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

// La route est la source de vérité : "/" = français (défaut), "/en" = anglais.
// Chaque langue possède donc sa propre URL indexable (SEO bilingue + hreflang).
function routeLanguage(pathname: string | null): Language {
  return pathname === "/en" || (pathname?.startsWith("/en/") ?? false) ? "en" : "fr";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [lang, setLangState] = useState<Language>(() => routeLanguage(pathname));

  useEffect(() => {
    setLangState(routeLanguage(pathname));
  }, [pathname]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback(
    (next: Language) => {
      if (next === lang) return;
      // Navigation complète : chaque langue a sa propre URL statique (/ et /en)
      window.location.assign(next === "en" ? "/en" : "/");
    },
    [lang]
  );

  const toggle = useCallback(() => {
    window.location.assign(lang === "fr" ? "/en" : "/");
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
