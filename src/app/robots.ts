import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard", "/train", "/history", "/settings", "/api/"],
    },
    sitemap: "https://site-test-de-langue.vercel.app/sitemap.xml",
  };
}