import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const siteUrl = "https://portfoliohassoun.web.app";
const siteTitle = "Mohamad Hassoun | Full-Stack Developer in Saudi Arabia";
const siteDescription =
  "Mohamad Hassoun is a full-stack developer based in Saudi Arabia with experience in React, Laravel, Flutter, AWS serverless, and secure web applications.";

const montserrat = localFont({
  src: "../public/fonts/montserrat.ttf",
  variable: "--font-montserrat"
});

const poppins = localFont({
  src: [
    { path: "../public/fonts/Poppins-Light.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/Poppins-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Poppins-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/Poppins-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/Poppins-Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/Poppins-Italic.ttf", weight: "400", style: "italic" }
  ],
  variable: "--font-poppins"
});

const agustina = localFont({
  src: "../public/fonts/agustina.otf",
  variable: "--font-agustina"
});

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
    "Full-Stack Developer Saudi Arabia",
    "React Developer Saudi Arabia",
    "Laravel Developer Saudi Arabia",
    "Flutter Developer Saudi Arabia",
    "AWS serverless developer",
    "secure web applications"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Mohamad Hassoun Portfolio",
    title: siteTitle,
    description: siteDescription,
    locale: "en_US",
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
    images: ["/images/photos/colored.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  icons: {
    icon: [
      { url: "/icons/Icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/Icon-512.png", sizes: "512x512", type: "image/png" }
    ],
    shortcut: "/icons/Icon-192.png",
    apple: "/icons/Icon-192.png"
  }
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohamad Hassoun",
  url: siteUrl,
  image: `${siteUrl}/images/photos/colored.png`,
  jobTitle: "Full-Stack Developer",
  description: siteDescription,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jeddah",
    addressCountry: "SA"
  },
  knowsAbout: [
    "React",
    "Laravel",
    "Flutter",
    "AWS Serverless",
    "Full-Stack Development",
    "Secure Web Applications"
  ],
  sameAs: [
    siteUrl,
    "https://www.linkedin.com/in/mohamad-hassoun-788949234",
    "https://github.com/Mohassoun",
    "https://www.threads.net/@mhamadhassoun45/post/Cud6WmTt9Ds/?igshid=NTc4MTIwNjQ2YQ==",
    "https://twitter.com/mohamad1p1/status/1689104891761811456?t=2Vm0zNdRCy8eWDf2voVlNg&s=19"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${poppins.variable} ${agustina.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
