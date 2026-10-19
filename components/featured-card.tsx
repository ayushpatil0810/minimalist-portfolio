"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest("a[data-external]") || target.closest("button")) {
      return;
    }
    if (target.closest("a")) {
      return;
    }
    if (e.metaKey || e.ctrlKey) {
      window.open(`/projects/${project.slug}`, "_blank");
    } else {
      router.push(`/projects/${project.slug}`);
    }
  };

  const handleAuxClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button === 1) {
      const target = e.target as HTMLElement;
      if (target.closest("a[data-external]") || target.closest("button") || target.closest("a")) {
        return;
      }
      window.open(`/projects/${project.slug}`, "_blank");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", bounce: 0, duration: 0.5, delay: index * 0.08 }}
      whileHover={{ scale: 1.008 }}
      whileTap={{ scale: 0.99 }}
      onClick={handleCardClick}
      onAuxClick={handleAuxClick}
      className="h-full cursor-pointer select-none"
      style={{ willChange: "transform" }}
    >
      <div className="group relative flex flex-col border border-border/60 hover:border-border transition-[border-color,box-shadow] duration-300 overflow-hidden h-full hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_4px_24px_rgba(0,0,0,0.25)] rounded-2xl">
        {/* Screenshot if available */}
        {project.image && (
          <Link
            href={`/projects/${project.slug}`}
            className="w-full aspect-[16/9] overflow-hidden bg-muted/30 border-b border-border/50 block relative z-10"
            style={{ viewTransitionName: `project-image-${project.slug}` }}
            tabIndex={-1}
          >
            <div className="w-full h-full overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.name} screenshot`}
                width={800}
                height={450}
                className="w-full h-full object-cover"
                priority={index === 0}
              />
            </div>
          </Link>
        )}

        <div className="p-5 flex flex-col gap-3 flex-1 relative">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-[1.05rem] font-semibold tracking-tight text-foreground">
              <Link
                href={`/projects/${project.slug}`}
                className="group-hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md"
              >
                <span className="absolute inset-0 z-0" aria-hidden="true" />
                <span className="relative z-10">{project.name}</span>
              </Link>
            </h3>
            <div className="flex items-center gap-1 shrink-0 relative z-20">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-external="true"
                  onClick={(e) => e.stopPropagation()}
                  className="text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-full hover:bg-muted/60 focus:outline-none focus:ring-2 focus:ring-ring"
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
                  data-external="true"
                  onClick={(e) => e.stopPropagation()}
                  className="text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-full hover:bg-muted/60 focus:outline-none focus:ring-2 focus:ring-ring"
                  title="View Live site"
                  aria-label={`View live site for ${project.name}`}
                >
                  <ArrowUpRightIcon size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-[0.875rem] text-muted-foreground leading-relaxed pointer-events-none">
            {project.description}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-1.5 mt-auto pt-1 pointer-events-none">
            {project.tech.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="flex items-center gap-1.5 px-2.5 py-0.5 border border-border/70 bg-muted/30 rounded-full text-[0.65rem] text-muted-foreground font-mono"
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
              <span className="px-2.5 py-0.5 rounded-full border border-border/50 bg-muted/20 text-[0.65rem] text-muted-foreground/70 font-mono">
                +{project.tech.length - 5} more
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
