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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        bounce: 0,
        duration: 0.5,
        delay: index * 0.07,
      }}
      whileHover={{ scale: 1.008 }}
      whileTap={{ scale: 0.99 }}
      className={`${featured ? "md:col-span-2" : ""} cursor-pointer`}
      style={{ willChange: "transform" }}
    >
      <div className="group flex flex-col border border-border/60 hover:border-border/90 transition-[border-color,box-shadow] duration-300 overflow-hidden h-full hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_4px_24px_rgba(0,0,0,0.25)]">
        {/* Screenshot */}
        {project.image ? (
          <Link
            href={`/projects/${project.slug}`}
            className={`overflow-hidden bg-muted/20 border-b border-border/50 relative block ${
              featured ? "aspect-[21/9]" : "aspect-[16/9]"
            }`}
            style={{ viewTransitionName: `project-image-${project.slug}` }}
            tabIndex={-1}
          >
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.028 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            >
              <Image
                src={project.image}
                alt={`${project.name} screenshot`}
                fill
                sizes={featured ? "(max-width: 768px) 100vw, 800px" : "(max-width: 768px) 100vw, 400px"}
                className="object-cover"
                priority={index === 0}
              />
            </motion.div>
          </Link>
        ) : (
          /* Decorative placeholder with project initials */
          <Link
            href={`/projects/${project.slug}`}
            className={`overflow-hidden bg-muted/10 border-b border-border/40 flex items-center justify-center block ${
              featured ? "aspect-[21/9]" : "aspect-[16/9]"
            }`}
            tabIndex={-1}
          >
            <span className="text-4xl font-semibold tracking-tighter text-border select-none">
              {project.name
                .split(" ")
                .map((w) => w[0])
                .join("")
                .toUpperCase()
                .slice(0, 3)}
            </span>
          </Link>
        )}

        {/* Content */}
        <div className="p-5 flex flex-col gap-3 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="flex flex-col gap-0.5">
              <span className="text-[0.62rem] font-mono uppercase tracking-[0.18em] text-muted-foreground/80">
                {project.category} · {project.year}
              </span>
              <h3
                className={`tracking-tight text-foreground font-semibold ${
                  featured ? "text-[1.2rem]" : "text-[1rem]"
                }`}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm"
                >
                  {project.name}
                </Link>
              </h3>
            </div>
            <div className="flex items-center gap-2 shrink-0 mt-1">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  title="View source on GitHub"
                  aria-label={`View source code for ${project.name} on GitHub`}
                >
                  <GithubLogoIcon size={15} />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  title="View live site"
                  aria-label={`View live site for ${project.name}`}
                >
                  <ArrowUpRightIcon size={15} />
                </a>
              )}
            </div>
          </div>

          <p className="text-[0.85rem] text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {/* Insight quote */}
          {project.insight && (
            <div className="pl-3 border-l-2 border-border/60 text-[0.78rem] text-foreground/70 italic mt-1">
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
                    alt=""
                    width={11}
                    height={11}
                    className="w-2.5 h-2.5"
                    unoptimized
                  />
                )}
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
