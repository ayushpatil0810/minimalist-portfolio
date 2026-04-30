import { Flask } from "@phosphor-icons/react";
import { link } from "fs";

export const techIcons: Record<string, string> = {
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  CLI: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  Tailwind:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "Prism.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  WebSockets:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
  Redis:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  PostgreSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  BetterAuth:
    "https://better-auth.com/branding/svg/better-auth-mark-dark.svg?dpl=dpl_6wPEJu85RLsWx2UrNJWPc2wErK7V",
  NeonDB: "https://neon.com/brand/neon-logomark-dark-color.svg",
  Drizzle:
    "https://cdn.brandfetch.io/idkV0IyeZo/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1771999698192",
  Zod: "/tech-stack/zod-icon.svg",
  "Express.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  Flask:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  GitHub:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "Gemini API":
    "https://upload.wikimedia.org/wikipedia/commons/1/1d/Google_Gemini_icon_2025.svg",
  Shadcn: "/tech-stack/shadcn-icon.svg",
  Vercel: "/tech-stack/vercel.svg",
};

export const projectsData = [
  {
    name: "endpnt",
    description:
      "A platform enabling developers to create customizable portfolio pages with a single shareable link",
    liveUrl: "https://endpnt.dev",
    githubUrl: "https://github.com/ayushpatil/endpnt",
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "NeonDB",
      "BetterAuth",
      "Shadcn",
      "Tailwind",
      "Vercel",
    ],
  },
  {
    name: "URL Shortener Backend Service",
    description:
      "Built a secure, scalable URL shortener with custom links, analytics, and JWT authentication using Node.js and PostgreSQL.",
    githubUrl: "https://github.com/ayushpatil/url-shortener",
    tech: ["Node.js", "TypeScript", "Drizzle", "Zod", "Express.js"],
  },
  {
    name: "GitHub Profile Roaster",
    description:
      "A fun web application that analyzes your GitHub profile and repositories to generate roasts.",
    liveUrl: "https://github-roaster.example.com",
    githubUrl: "https://github.com/ayushpatil/github-roaster",
    tech: ["HTML", "CSS", "Python", "Flask", "GitHub", "Gemini API"],
  },
  {
    name: "Signal",
    description: "Real-time notification system built on WebSockets and Redis.",
    githubUrl: "https://github.com/ayushpatil/signal",
    tech: ["Node.js", "WebSockets", "Redis"],
  },
];
