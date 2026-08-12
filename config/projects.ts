export type ProjectCaseStudy = {
  problem?: string;
  solution?: string;
  outcome?: string;
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
  /** Path or URL to a project screenshot */
  image?: string;
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
    year: "2025",
    featured: true,
    description:
      "An intelligent multi-provider AI chat and productivity workspace supporting OpenAI, Anthropic, and Gemini models.",
    longDescription:
      "Mentis AI is a full-stack AI workspace built with Next.js, Vercel AI SDK, Drizzle ORM, and PostgreSQL. It allows users to bring their own API keys, seamlessly switch between OpenAI, Anthropic, and Gemini models, stream real-time responses, manage chat histories, and export conversation notes.",
    insight: "Designed with a decoupled provider architecture allowing dynamic key injection and multi-model streaming.",
    githubUrl: "https://github.com/ayushpatil0810/mentis-ai",
    tech: [
      "Next.js",
      "TypeScript",
      "OpenAI SDK",
      "Gemini API",
      "PostgreSQL",
      "Drizzle",
      "BetterAuth",
      "Tailwind CSS",
    ],
    caseStudy: {
      problem:
        "Users are often locked into single AI provider platforms or forced to pay subscription fees across multiple services without being able to bring their own API keys or switch seamlessly between state-of-the-art models like GPT-4o, Claude 3.5 Sonnet, and Gemini 1.5 Pro.",
      solution:
        "Built Mentis AI as a unified multi-provider AI assistant environment. Integrated Vercel AI SDK with custom provider adapters, dynamic API key injection, PostgreSQL storage via Drizzle ORM, BetterAuth authentication, and real-time streaming markdown rendering.",
      outcome:
        "Created a responsive, privacy-respecting AI workspace where users control their keys, chat trajectories, and model preferences with zero platform vendor lock-in.",
    },
  },
  {
    slug: "endpnt",
    name: "endpnt",
    category: "Full Stack Product",
    year: "2024",
    featured: true,
    description:
      "A platform enabling developers to create customizable portfolio pages with a single shareable link",
    longDescription:
      "endpnt is a developer-first portfolio and link-in-bio platform that centralizes a developer's digital identity into a single customizable profile. It integrates with GitHub, LeetCode, Dev.to, Medium, and Hashnode to automatically surface technical contributions and content.",
    insight: "Designed around reusable profile schemas instead of hardcoded sections.",
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
    year: "2024",
    featured: false,
    description:
      "A web platform for discovering, listing, and managing property listings and real estate events.",
    longDescription:
      "RealFiesta is a full-stack platform designed to simplify real estate management, property browsing, and interactive event coordination with structured filtering, user authentication, and responsive management dashboard.",
    insight: "Built with clean data model schemas to handle real-time search filters and listing workflows.",
    githubUrl: "https://github.com/ayushpatil0810/realfiesta",
    tech: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    slug: "url-shortener",
    name: "URL Shortener Service",
    category: "Backend",
    year: "2024",
    featured: false,
    description:
      "A secure, scalable URL shortener with custom links, analytics, and JWT authentication using Node.js and PostgreSQL.",
    longDescription:
      "A production-ready URL shortening backend service that enables users to create, manage, and track shortened URLs through a secure REST API. The system supports custom short codes, click analytics, URL management, and high-performance redirection.",
    insight: "Optimized redirects for constant-time lookup and reduced database load.",
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
    year: "2024",
    featured: false,
    description:
      "A fun web application that analyzes your GitHub profile and repositories to generate roasts using Gemini AI.",
    longDescription:
      "A lightweight web app that takes any GitHub username, pulls repository and profile metadata via the GitHub API, and feeds it into a Gemini LLM chain to produce a witty, personalized roast of the developer.",
    insight: "Leveraged LLM chaining to dynamically score and analyze repository metadata.",
    liveUrl: "https://githubprofileroaster.onrender.com",
    githubUrl: "https://github.com/ayushpatil0810/github-profile-roaster",
    tech: ["HTML", "CSS", "Python", "Flask", "GitHub", "Gemini API"],
  },
  {
    slug: "minimalist-portfolio",
    name: "Minimalist Portfolio",
    category: "Frontend",
    year: "2025",
    featured: false,
    description:
      "A minimalist portfolio built with Next.js and TypeScript, showcasing projects and skills with a clean, editorial design.",
    longDescription:
      "This very site, built with intentional restraint. The design philosophy centers on typography, whitespace, and meaningful motion over decoration.",
    insight: "Focused on an intentional, asymmetric design to reflect a backend engineer's aesthetic.",
    liveUrl: "https://ayushpatil.in",
    githubUrl: "https://github.com/ayushpatil0810/minimalist-portfolio",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
  },
];
