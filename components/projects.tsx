"use client";

import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

const techIcons: Record<string, string> = {
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
};

const projects = [
  {
    name: "Tempo",
    description:
      "A minimal time-tracking CLI for developers who hate time-tracking.",
    url: "#",
    tech: ["Node.js", "TypeScript", "CLI"],
  },
  {
    name: "Inkwell",
    description: "Markdown editor that gets out of your way. Nothing more.",
    url: "#",
    tech: ["React", "Next.js", "Tailwind"],
  },
  {
    name: "Patchwork",
    description:
      "Git diff viewer with syntax highlighting and side-by-side diffs.",
    url: "#",
    tech: ["React", "Prism.js", "Git"],
  },
  {
    name: "Signal",
    description: "Real-time notification system built on WebSockets and Redis.",
    url: "#",
    tech: ["Node.js", "WebSockets", "Redis"],
  },
];

export function Projects() {
  return (
    <section className="mb-24">
      <h2 className="text-[0.8rem] uppercase tracking-[0.15em] text-muted-foreground mb-8">
        Projects
      </h2>

      <div className="space-y-6">
        {projects.map((project) => (
          <Link
            key={project.name}
            href={project.url}
            className="group flex items-start justify-between gap-4 py-2 hover:opacity-80 transition-opacity duration-200"
          >
            <div>
              <h3 className="text-[1rem] tracking-tight">{project.name}</h3>

              <p className="text-[0.875rem] text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mt-3">
                {project.tech.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-2 text-[0.75rem] text-muted-foreground"
                  >
                    <img src={techIcons[tech]} alt={tech} className="w-4 h-4" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <ArrowUpRightIcon
              size={16}
              className="mt-1 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
