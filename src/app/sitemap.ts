import type { MetadataRoute } from "next";
import { MINNA_LESSONS } from "@/lib/minnaLessons";
import { ENGLISH_LESSONS } from "@/lib/englishLessons";
import { ALL_N5_KANJI } from "@/lib/kanjiData";
import { ALL_KANA_LESSONS } from "@/lib/kanaLessons";

const BASE_URL = "https://site-test-de-langue.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = ["/", "/ja", "/en", "/ja/hiragana", "/ja/kanji", "/ja/lecons", "/en/lecons"].map(
    (path) => ({ url: BASE_URL + path, lastModified: now })
  );

  const kanaRoutes = ALL_KANA_LESSONS.map((l) => ({
    url: `${BASE_URL}/ja/lecons/${l.slug}`,
    lastModified: now,
  }));

  const minnaRoutes = MINNA_LESSONS.map((l) => ({
    url: `${BASE_URL}/ja/lecons/${l.slug}`,
    lastModified: now,
  }));

  const englishRoutes = ENGLISH_LESSONS.map((l) => ({
    url: `${BASE_URL}/en/lecons/${l.slug}`,
    lastModified: now,
  }));

  const kanjiRoutes = ALL_N5_KANJI.map((k) => ({
    url: `${BASE_URL}/ja/kanji/${k.slug}`,
    lastModified: now,
  }));

  return [...staticRoutes, ...kanaRoutes, ...minnaRoutes, ...englishRoutes, ...kanjiRoutes];
}