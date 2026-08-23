import type { Metadata } from "next";
import { Shippori_Mincho, Zen_Kaku_Gothic_New, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const shippori = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-shippori",
  display: "swap",
});

const zen = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-zen",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "面接日本語 — Entraînement à l'entretien en japonais",
  description:
    "Entraînez-vous aux questions d'entretien en japonais avec audio, correction et suivi de progression.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${shippori.variable} ${zen.variable} ${plexMono.variable}`}>
      <body className="font-body bg-washi dark:bg-washi-dark text-sumi dark:text-washi antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
