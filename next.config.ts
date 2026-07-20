import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
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
    const isDev = process.env.NODE_ENV === "development";
    const scriptSrc = `script-src 'self' 'unsafe-inline' https://cdn.vercel-insights.com https://va.vercel-scripts.com${isDev ? " 'unsafe-eval'" : ""}`;

    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `default-src 'self'; ${scriptSrc}; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://fonts.googleapis.com; img-src 'self' data: blob: https://avatars.githubusercontent.com https://cdn.jsdelivr.net https://upload.wikimedia.org https://seaborn.pydata.org https://neon.com https://cdn.brandfetch.io https://better-auth.com; connect-src 'self' https://api.web3forms.com https://github-contributions-api.jogruber.de https://va.vercel-scripts.com https://cdn.vercel-insights.com; font-src 'self' https://fonts.gstatic.com data:; frame-src https://drive.google.com;`,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
