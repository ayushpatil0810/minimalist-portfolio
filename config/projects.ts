export type ProjectCaseStudy = {
  problem?: string;
  solution?: string;
  outcome?: string;
  features?: string[];
  architecture?: string;
};

export type Project = {
  slug: string;
  name: string;
  description: string;
  longDescription?: string;
  insight?: string;
  liveUrl?: string;
  githubUrl?: string;
  tech: string[];
  /** Path or URL to a main project screenshot */
  image?: string;
  /** Array of project screenshots for carousel display */
  images?: string[];
  /** Optional deep-dive written by you */
  caseStudy?: ProjectCaseStudy;
  /** Year the project was built */
  year?: string;
  /** Category/type label */
  category?: string;
  /** Whether to feature prominently on home/projects page */
  featured?: boolean;
};

export const projectsData: Project[] = [
  {
    slug: "mentis-ai",
    name: "Mentis AI",
    category: "AI / Full Stack",
    year: "2026",
    featured: true,
    description:
      "An elegant, fast AI assistant supporting OpenAI, Anthropic, and Gemini models with native web search, tools, and BYOK key privacy.",
    longDescription:
      "Mentis AI is a full stack AI workspace built with Next.js 16, Vercel AI SDK, Better Auth, and PostgreSQL. Users can interact with OpenAI, Anthropic, and Gemini models using encrypted keys, streaming responses, server tools (Web Search, URL Reader, Calculator, Search), conversation branching, and PDF or Markdown exporting.",
    insight:
      "Designed with a decoupled provider architecture, server tool execution engine, and dynamic key injection with AES 256 encryption.",
    liveUrl: "https://mentis.ayushpatil.in",
    githubUrl: "https://github.com/ayushpatil0810/mentis-ai",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn",
      "PostgreSQL",
      "Drizzle",
      "BetterAuth",
      "OpenAI SDK",
      "Gemini API",
      "Vercel",
    ],
    image: "/projects/mentis-ai/mentis-ai-1.png",
    images: [
      "/projects/mentis-ai/mentis-ai-1.png",
      "/projects/mentis-ai/mentis-ai-2.png",
      "/projects/mentis-ai/mentis-ai-3.png",
      "/projects/mentis-ai/mentis-ai-4.png",
      "/projects/mentis-ai/mentis-ai-5.png",
      "/projects/mentis-ai/mentis-ai-6.png",
      "/projects/mentis-ai/mentis-ai-7.png",
    ],
    caseStudy: {
      problem:
        "Users are often locked into single AI provider platforms or forced to pay subscription fees across multiple services without being able to bring their own API keys, run custom tools (like web search or webpage reading), search past message history, or branch conversation turns cleanly.",
      solution:
        "Built Mentis AI as a unified multi-provider AI assistant environment utilizing Next.js 16 App Router, React 19, and Drizzle ORM. Integrated Vercel AI SDK with custom provider adapters, client/server AES-256 key encryption, PostgreSQL full-text search, Better Auth, and a domain-driven tool suite (Tavily Web Search, URL Fetcher, Safe Math Calculator, Date/Time Manager, and Full-Text Message Search).",
      outcome:
        "Delivered a high-performance, privacy-respecting AI workbench where users control their API keys, chat trajectories, and model preferences with zero platform lock-in. Features rich conversation branching, custom system prompts per chat, request latency and token cost tracking, and export options to PDF, Markdown, and JSON.",
      features: [
        "Multi-Provider BYOK: Connect OpenAI, Anthropic, or Google Gemini API keys with AES-256 encryption.",
        "Integrated AI Tools Suite: Live web search (Tavily API), URL content fetcher with SSRF protection, safe math calculator, date/time manager, and conversation/message search.",
        "Full-Text Message Search: Native PostgreSQL full-text search (to_tsvector / websearch_to_tsquery) across all past user messages.",
        "Real-Time Response Streaming: Ultra-low latency streaming powered by Vercel AI SDK and custom UI message streams.",
        "Conversation Branching & Versioning: Retry assistant responses to generate alternative versions without losing prior history.",
        "Custom System Instructions: Define per-chat custom system prompts to tailor AI behavior and outputs.",
        "Exporting & Sharing: Export chats to PDF, Markdown, or JSON cleanly, and share via public links.",
        "Token & Cost Tracking: Dynamic latency measurements, input/output token analysis, and model cost calculations per turn.",
        "Modern Dark-First UI: WCAG 2.2 AA compliant UI built with Tailwind CSS v4, Geist typography, shadcn/ui, and micro-animations.",
      ],
    },
  },
  {
    slug: "endpnt",
    name: "endpnt",
    category: "Full Stack Product",
    year: "2026",
    featured: true,
    description:
      "A platform enabling developers to create customizable portfolio pages with a single shareable link",
    longDescription:
      "endpnt is a developer-first portfolio and link-in-bio platform that centralizes a developer's digital identity into a single customizable profile. It integrates with GitHub, LeetCode, Dev.to, Medium, and Hashnode to automatically surface technical contributions and content.",
    insight:
      "Designed around reusable profile schemas instead of hardcoded sections.",
    liveUrl: "https://endpnt.vercel.app",
    githubUrl: "https://github.com/ayushpatil0810/endpnt",
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
    image: "/projects/endpnt.png",
    caseStudy: {
      problem:
        "Developers often maintain their online presence across multiple disconnected platforms such as GitHub, LeetCode, Dev.to, Medium, Hashnode, and personal project websites. Existing link-in-bio solutions primarily target creators and marketers, offering limited support for developer-specific needs. As a result, developers struggle to showcase their technical achievements, projects, and content in a unified, professional, and visually appealing manner while also lacking meaningful analytics about visitor engagement.",
      solution:
        "endpnt was built as a developer-first portfolio and link-in-bio platform that centralizes a developer's digital identity into a single customizable profile. The platform integrates with popular developer ecosystems including GitHub, LeetCode, Dev.to, Medium, and Hashnode to automatically showcase technical contributions and content. Users can highlight projects with associated technologies, repository links, and live demos while customizing their profiles using modern layouts and themes. A serverless architecture powered by Next.js, PostgreSQL, Drizzle ORM, Better Auth, and Upstash Redis ensures scalability, security, and performance. Additionally, privacy-friendly analytics provide real-time insights into profile views, link clicks, and traffic sources through an event-driven tracking system with intelligent deduplication mechanisms.",
      outcome:
        "The resulting platform transforms fragmented developer profiles into a centralized and professional digital hub. Developers can present their technical expertise, content, and projects through a polished interface without writing custom CSS or maintaining multiple portfolio pages. Performance optimizations such as parallel data fetching, database indexing, and Redis-backed deduplication enable fast profile loading and accurate analytics at scale.",
    },
  },
  {
    slug: "realfiesta",
    name: "RealFiesta",
    category: "Full Stack Platform",
    year: "2026",
    featured: false,
    description:
      "A web platform for discovering, listing, and managing property listings and real estate events.",
    longDescription:
      "RealFiesta is a full-stack platform designed to simplify real estate management, property browsing, and interactive event coordination with structured filtering, user authentication, and responsive management dashboard.",
    insight:
      "Built with clean data model schemas to handle real-time search filters and listing workflows.",
    githubUrl: "https://github.com/ayushpatil0810/realfiesta",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Tailwind CSS",
    ],
  },
  {
    slug: "url-shortener",
    name: "URL Shortener Service",
    category: "Backend",
    year: "2026",
    featured: false,
    description:
      "A secure, scalable URL shortener with custom links, analytics, and JWT authentication using Node.js and PostgreSQL.",
    longDescription:
      "A production-ready URL shortening backend service that enables users to create, manage, and track shortened URLs through a secure REST API. The system supports custom short codes, click analytics, URL management, and high-performance redirection.",
    insight:
      "Optimized redirects for constant-time lookup and reduced database load.",
    githubUrl: "https://github.com/ayushpatil0810/url-shortner-backend",
    tech: ["Node.js", "TypeScript", "Drizzle", "Zod", "Express.js"],
    caseStudy: {
      solution:
        "Developed a production-ready URL shortening backend service that enables users to create, manage, and track shortened URLs through a secure REST API. The system supports custom short codes, click analytics, URL management, and high-performance redirection while providing a complete authentication ecosystem including email verification, JWT-based access and refresh tokens, token rotation, password reset workflows, and secure logout mechanisms. Built with Node.js, Express, TypeScript, PostgreSQL, and Drizzle ORM, the architecture follows a clean separation of concerns through controllers, services, validations, and middleware layers.",
      outcome:
        "The resulting platform provides a reliable and secure URL shortening infrastructure capable of handling authentication, link management, analytics tracking, and redirection workflows within a single backend service. The layered architecture and TypeScript-based codebase improve maintainability, scalability, and developer experience, while security measures such as token rotation, input validation, and rate limiting significantly reduce common attack vectors.",
    },
  },
  {
    slug: "github-profile-roaster",
    name: "GitHub Profile Roaster",
    category: "AI / Fun",
    year: "2025",
    featured: false,
    description:
      "A fun web application that analyzes your GitHub profile and repositories to generate roasts using Gemini AI.",
    longDescription:
      "A lightweight web app that takes any GitHub username, pulls repository and profile metadata via the GitHub API, and feeds it into a Gemini LLM chain to produce a witty, personalized roast of the developer.",
    insight:
      "Leveraged LLM chaining to dynamically score and analyze repository metadata.",
    liveUrl: "https://githubprofileroaster.onrender.com",
    githubUrl: "https://github.com/ayushpatil0810/github-profile-roaster",
    tech: ["HTML", "CSS", "Python", "Flask", "GitHub", "Gemini API"],
  },
  {
    slug: "minimalist-portfolio",
    name: "Minimalist Portfolio",
    category: "Frontend",
    year: "2026",
    featured: false,
    description:
      "A minimalist portfolio built with Next.js and TypeScript, showcasing projects and skills with a clean, editorial design.",
    longDescription:
      "This very site, built with intentional restraint. The design philosophy centers on typography, whitespace, and meaningful motion over decoration.",
    insight:
      "Focused on an intentional, asymmetric design to reflect a backend engineer's aesthetic.",
    liveUrl: "https://ayushpatil.in",
    githubUrl: "https://github.com/ayushpatil0810/minimalist-portfolio",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vercel"],
  },
];
