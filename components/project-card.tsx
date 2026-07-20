"use client";

import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/config/projects";
import { icons } from "@/config/icons";
import { ArrowUpRightIcon, GithubLogoIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export function ProjectCard({
  project,
  index,
  featured,
}: {
  project: (typeof projectsData)[0];
  index: number;
  featured: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={featured ? "md:col-span-2" : ""}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group flex flex-col border border-border/60 hover:border-border/90 transition-all duration-300 overflow-hidden h-full"
      >
        {/* Screenshot */}
        {project.image ? (
          <div
            className={`overflow-hidden bg-muted/20 border-b border-border/50 relative ${
              featured ? "aspect-[21/9]" : "aspect-[16/9]"
            }`}
            style={{ viewTransitionName: `project-image-${project.slug}` }}
          >
            <Image
              src={project.image}
              alt={`${project.name} screenshot`}
              fill
              sizes={featured ? "(max-width: 768px) 100vw, 800px" : "(max-width: 768px) 100vw, 400px"}
              className="object-cover group-hover:scale-[1.025] transition-transform duration-600 ease-out"
            />
          </div>
        ) : (
          /* No image, decorative placeholder with project initials */
          <div
            className={`overflow-hidden bg-muted/10 border-b border-border/40 flex items-center justify-center ${
              featured ? "aspect-[21/9]" : "aspect-[16/9]"
            }`}
          >
            <span className="text-4xl font-semibold tracking-tighter text-border select-none">
              {project.name
                .split(" ")
                .map((w) => w[0])
                .join("")
                .toUpperCase()
                .slice(0, 3)}
            </span>
          </div>
        )}

        {/* Content */}
        <div className="p-5 flex flex-col gap-3 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="flex flex-col gap-0.5">
              <span className="text-[0.62rem] font-mono uppercase tracking-[0.18em] text-muted-foreground/50">
                {project.category} · {project.year}
              </span>
              <h3
                className={`tracking-tight text-foreground font-semibold ${
                  featured ? "text-[1.2rem]" : "text-[1rem]"
                }`}
              >
                {project.name}
              </h3>
            </div>
            <div className="flex items-center gap-2 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-1">
              {project.githubUrl && (
                <span
                  role="button"
                  tabIndex={0}
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(project.githubUrl, "_blank", "noopener,noreferrer");
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      window.open(project.githubUrl, "_blank", "noopener,noreferrer");
                    }
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors p-1 cursor-pointer"
                  aria-label="View source on GitHub"
                >
                  <GithubLogoIcon size={15} />
                </span>
              )}
              {project.liveUrl && (
                <span
                  role="button"
                  tabIndex={0}
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(project.liveUrl, "_blank", "noopener,noreferrer");
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      window.open(project.liveUrl, "_blank", "noopener,noreferrer");
                    }
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors p-1 cursor-pointer"
                  aria-label="View live site"
                >
                  <ArrowUpRightIcon size={15} />
                </span>
              )}
              <ArrowUpRightIcon
                size={15}
                className="text-muted-foreground/50"
              />
            </div>
          </div>

          <p className="text-[0.85rem] text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {/* Insight quote */}
          {project.insight && (
            <div className="pl-3 border-l-2 border-border/60 text-[0.78rem] text-foreground/60 italic mt-1">
              &quot;{project.insight}&quot;
            </div>
          )}

          {/* Tech */}
          <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
            {project.tech.slice(0, featured ? 8 : 5).map((tech) => (
              <span
                key={tech}
                className="flex items-center gap-1 px-2 py-0.5 border border-border/60 bg-muted/25 text-[0.62rem] text-muted-foreground font-mono"
              >
                {icons[tech] && (
                  <Image
                    src={icons[tech]!}
                    alt={tech}
                    width={11}
                    height={11}
                    className="w-2.5 h-2.5"
                  />
                )}
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
