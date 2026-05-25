import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "seaborn.pydata.org" },
      { protocol: "https", hostname: "neon.com" },
      { protocol: "https", hostname: "cdn.brandfetch.io" },
      { protocol: "https", hostname: "better-auth.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.vercel-insights.com; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; img-src 'self' data: https://avatars.githubusercontent.com https://cdn.jsdelivr.net https://upload.wikimedia.org https://seaborn.pydata.org https://neon.com https://cdn.brandfetch.io https://better-auth.com; connect-src 'self' https://api.web3forms.com; font-src 'self';",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
