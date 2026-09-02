import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { InterfaceLangProvider } from "@/components/interface/InterfaceLangProvider";
import "./globals.css";

const shippori = localFont({
  src: [
    { path: "./fonts/shippori-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/shippori-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/shippori-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/shippori-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-shippori",
  display: "swap",
});

const zen = localFont({
  src: [
    { path: "./fonts/zenkaku-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/zenkaku-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/zenkaku-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-zen",
  display: "swap",
});

const plexMono = localFont({
  src: [
    { path: "./fonts/plexmono-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/plexmono-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/plexmono-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-plex-mono",
  display: "swap",
});

// Script anti-flash (FOUC) : applique la classe `dark` depuis le cookie `theme`
// AVANT le premier rendu, sans requête serveur. Le layout reste ainsi statique.
const themeScript = `(function(){try{var m=document.cookie.match(/(?:^|; )theme=([^;]+)/);if(m){var v=m[1];if(v==="dark"||v==="light"){var e=document.documentElement;e.classList.toggle("dark",v==="dark");}}}catch(_){}})();`;

export const metadata: Metadata = {
  title: {
    default: "Kadoya — Apprentissage des langues",
    template: "%s — Kadoya",
  },
  description:
    "Plateforme d'apprentissage des langues pour les francophones : alphabets, vocabulaire, examens et entretiens, avec audio, correction intelligente et suivi de progression.",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Kadoya — Apprentissage des langues",
    description:
      "Alphabets, leçons guidées, tests blancs et entraînement à l'entretien, avec audio et correction intelligente.",
    url: "https://site-test-de-langue.vercel.app",
    siteName: "Kadoya",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Kadoya — Apprentissage des langues",
    description:
      "Alphabets, leçons guidées, tests blancs et entraînement à l'entretien, avec audio et correction intelligente.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${shippori.variable} ${zen.variable} ${plexMono.variable}`}
    >
      <body className="font-body bg-washi dark:bg-washi-dark text-sumi dark:text-washi antialiased min-h-screen">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <InterfaceLangProvider>{children}</InterfaceLangProvider>
        <Analytics />
      </body>
    </html>
  );
}