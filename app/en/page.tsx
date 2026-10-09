import type { Metadata } from "next";
import { PortfolioApp } from "@/components/portfolio-app";

// Version anglaise : URL dédiée indexable (/en), français reste la langue
// par défaut sur "/". Le sélecteur de langue navigue entre les deux URLs.
const siteUrl = "https://portfoliohassoun.web.app";
const siteTitle = "Mohamad Hassoun | Full-Stack Developer in Paris, France";
const siteDescription =
  "Mohamad Hassoun is a full-stack developer based in Paris, France, currently a Master's student at SUPINFO Paris, specializing in React, Laravel, Flutter, and secure web applications.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Mohamad Hassoun"
  },
  description: siteDescription,
  keywords: [
    "Mohamad Hassoun",
    "Mohamad Hassoun portfolio",
    "Full-Stack Developer Paris",
    "React Developer Paris",
    "Laravel Developer Paris",
    "Flutter Developer Paris",
    "SUPINFO Paris",
    "secure web applications"
  ],
  alternates: {
    canonical: "/en",
    languages: {
      fr: "/",
      en: "/en"
    }
  },
  openGraph: {
    type: "website",
    url: "/en",
    siteName: "Mohamad Hassoun Portfolio",
    title: siteTitle,
    description: siteDescription,
    locale: "en_US",
    alternateLocale: ["fr_FR"],
    images: [
      {
        url: "/images/photos/colored.png",
        width: 700,
        height: 900,
        alt: "Mohamad Hassoun portrait"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    creator: "@mohamad1p1",
    images: ["/images/photos/colored.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function EnglishPage() {
  return <PortfolioApp />;
}
