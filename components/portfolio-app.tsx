"use client";

import { useEffect, useState } from "react";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { ProjectsSection } from "@/components/projects-section";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ServicesSection } from "@/components/services-section";

export function PortfolioApp() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-theme");
    const useDark = stored ? stored === "dark" : false;
    setIsDark(useDark);
    document.body.classList.toggle("theme-dark", useDark);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("theme-dark", isDark);
    window.localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <main>
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark((value) => !value)} />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
