"use client";

import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-24"
    >
      <h2 className="text-[0.8rem] uppercase tracking-[0.15em] text-muted-foreground mb-8">
        Projects
      </h2>

      <div className="space-y-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Link
              href={project.url}
              className="group flex items-start justify-between gap-4 p-4 -mx-4 
              border border-transparent
              hover:border-dashed hover:border-border/70 hover:bg-muted/10 
              transition-all duration-300"
              style={{ borderRadius: 0 }}
            >
            <div>
              <h3 className="text-[1rem] tracking-tight text-foreground/90 group-hover:text-foreground transition-colors">
                {project.name}
              </h3>

              <p className="text-[0.875rem] text-muted-foreground leading-relaxed mt-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-1.5 px-2 py-1 
                    border border-dashed border-border/70 
                    bg-muted/40 dark:bg-foreground/10
                    text-[0.7rem] text-muted-foreground group-hover:text-foreground/80
                    transition-colors duration-300"
                    style={{ borderRadius: 0 }}
                  >
                    <Image
                      src={techIcons[tech]}
                      alt={tech}
                      width={14}
                      height={14}
                      className="w-3.5 h-3.5"
                    />
                    <span className="tracking-tight">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <ArrowUpRightIcon
              size={16}
              className="mt-1 text-muted-foreground opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"
            />
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
