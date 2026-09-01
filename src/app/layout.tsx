import type { Metadata } from "next";
import localFont from "next/font/local";
import { createClient } from "@/lib/supabase/server";
import "./globals.css";

const shippori = localFont({
  src: [
    { path: "./fonts/shippori-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/shippori-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/shippori-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/shippori-700.woff2", weight: "700", style: "normal" },
    { path: "./fonts/shippori-800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-shippori",
  display: "swap",
});

const zen = localFont({
  src: [
    { path: "./fonts/zenkaku-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/zenkaku-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/zenkaku-700.woff2", weight: "700", style: "normal" },
    { path: "./fonts/zenkaku-900.woff2", weight: "900", style: "normal" },
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

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Kadoya — Apprentissage des langues",
  description:
    "Plateforme d'apprentissage des langues pour les francophones : alphabets, vocabulaire, examens et entretiens, avec audio, correction intelligente et suivi de progression.",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  let isDark = false;
  try {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      const { data: profile } = await supabase
        .from("profiles")
        .select("theme_pref")
        .eq("id", user.id)
        .single();
      isDark = profile?.theme_pref === "dark";
    }
  } catch {
    // Pas grave si indisponible (ex: page publique sans session) : on reste en thème clair par défaut.
  }

  return (
    <html
      lang="fr"
      className={`${shippori.variable} ${zen.variable} ${plexMono.variable} ${isDark ? "dark" : ""}`}
    >
      <body className="font-body bg-washi dark:bg-washi-dark text-sumi dark:text-washi antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
