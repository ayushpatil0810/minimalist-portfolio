"use client";

import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/config/projects";
import { icons } from "@/config/icons";
import { ArrowUpRightIcon, GithubLogoIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export function FeaturedCard({
  project,
  index,
}: {
  project: (typeof projectsData)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="h-full"
    >
      <div className="group relative flex flex-col border border-border/60 hover:border-border transition-all duration-300 overflow-hidden h-full">
        {/* Screenshot if available */}
        {project.image && (
          <Link
            href={`/projects/${project.slug}`}
            className="w-full aspect-[16/9] overflow-hidden bg-muted/30 border-b border-border/50 block relative z-0"
            style={{ viewTransitionName: `project-image-${project.slug}` }}
            tabIndex={-1}
          >
            <Image
              src={project.image}
              alt={`${project.name} screenshot`}
              width={800}
              height={450}
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
            />
          </Link>
        )}

        <div className="p-5 flex flex-col gap-3 flex-1">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-0.5">
              <span className="text-[0.65rem] font-mono uppercase tracking-[0.18em] text-muted-foreground/80">
                {project.category} · {project.year}
              </span>
              <h3 className="text-[1.05rem] font-semibold tracking-tight text-foreground">
                <Link
                  href={`/projects/${project.slug}`}
                  className="hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm"
                >
                  {project.name}
                </Link>
              </h3>
            </div>
            <div className="flex items-center gap-2 shrink-0 mt-1 relative z-10">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  title="View GitHub repository"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  <GithubLogoIcon size={16} />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  title="View Live site"
                  aria-label={`View live site for ${project.name}`}
                >
                  <ArrowUpRightIcon size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-[0.875rem] text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
            {project.tech.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="flex items-center gap-1 px-2 py-0.5 border border-border/70 bg-muted/30 text-[0.65rem] text-muted-foreground font-mono"
              >
                {icons[tech] && (
                  <Image
                    src={icons[tech]!}
                    alt=""
                    width={12}
                    height={12}
                    className="w-3 h-3"
                    unoptimized
                  />
                )}
                {tech}
              </span>
            ))}
            {project.tech.length > 5 && (
              <span className="px-2 py-0.5 text-[0.65rem] text-muted-foreground/70 font-mono">
                +{project.tech.length - 5} more
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
