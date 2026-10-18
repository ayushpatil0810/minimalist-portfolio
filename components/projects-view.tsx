"use client";

import { useState } from "react";
import { type Project } from "@/config/projects";
import { ProjectCard } from "@/components/project-card";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "Full Stack", "AI & ML", "Backend"] as const;

function matchesCategory(project: Project, category: string): boolean {
  if (category === "All") return true;
  const cat = (project.category ?? "").toLowerCase();
  if (category === "AI & ML") {
    return cat.includes("ai") || cat.includes("rag");
  }
  if (category === "Full Stack") {
    return cat.includes("full stack");
  }
  if (category === "Backend") {
    return cat.includes("backend");
  }
  return true;
}

export function ProjectsView({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = projects.filter((p) => matchesCategory(p, activeCategory));

  return (
    <div className="w-full">
      {/* Transitions.dev P16 — Sliding Active Pill Tabs */}
      <div className="flex items-center gap-1 p-1 rounded-full border border-border/60 bg-muted/20 w-fit mb-8 overflow-x-auto max-w-full">
        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "relative px-3.5 py-1 text-xs font-mono lowercase tracking-wide transition-colors duration-200 rounded-full cursor-pointer select-none",
                isActive
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="active-project-pill"
                  className="absolute inset-0 rounded-full bg-background border border-border/70 shadow-xs"
                  transition={{ type: "spring", bounce: 0.12, duration: 0.35 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          );
        })}
      </div>

      {/* Grid of projects with layout animations */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.98, filter: "blur(2px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.98, filter: "blur(2px)" }}
              transition={{
                duration: 0.25,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.04,
              }}
            >
              <ProjectCard
                project={project}
                index={index}
                featured={false}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
