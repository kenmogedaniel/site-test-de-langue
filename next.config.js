/** @type {import('next').NextConfig} */

// En-têtes de sécurité appliqués à toutes les réponses HTML.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  // Le micro (reconnaissance vocale, mode entraînement) reste autorisé sur notre
  // propre origine ; les autres capacités sensibles sont refusées.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(self), geolocation=(), payment=(), usb=()",
  },
  // CSP pragmatique : Next.js hydrate via des scripts inline (d'où 'unsafe-inline').
  // La connexion Supabase provient du navigateur ; Anthropic et Google TTS restent
  // appelés côté serveur uniquement.
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
      "style-src 'self' 'unsafe-inline'; " +
      "img-src 'self' data: blob: https://flagcdn.com; " +
      "font-src 'self' data:; " +
      "connect-src 'self' https://*.supabase.co wss://*.supabase.co; " +
      "media-src 'self' blob: data:; " +
      "frame-ancestors 'none'",
  },
];

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;