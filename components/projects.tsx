"use client";

import Link from "next/link";
import {
  ArrowUpRightIcon,
  GithubLogoIcon,
  CaretDown as CaretDownIcon,
  CaretUp as CaretUpIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { projectsData, type Project, type ProjectCaseStudy } from "@/config/projects";
import { icons } from "@/config/icons";
import { StaggerFadeIn, StaggerItem } from "@/components/stagger-fade-in";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const INITIAL_VISIBLE = 2;

/** Renders the three-part case study block */
function CaseStudyContent({ cs }: { cs: ProjectCaseStudy }) {
  return (
    <div className="flex flex-col gap-5 pt-4 border-t border-border/40 mt-4">
      {cs.problem && (
        <div>
          <span className="text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground/50">
            Problem
          </span>
          <p className="text-[0.875rem] text-foreground/75 mt-1.5 leading-relaxed">
            {cs.problem}
          </p>
        </div>
      )}
      {cs.solution && (
        <div>
          <span className="text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground/50">
            Approach
          </span>
          <p className="text-[0.875rem] text-foreground/75 mt-1.5 leading-relaxed">
            {cs.solution}
          </p>
        </div>
      )}
      {cs.outcome && (
        <div>
          <span className="text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground/50">
            Outcome
          </span>
          <p className="text-[0.875rem] text-foreground/75 mt-1.5 leading-relaxed">
            {cs.outcome}
          </p>
        </div>
      )}
    </div>
  );
}

/** Full-width project image with subtle border */
function ProjectImage({ src, name }: { src: string; name: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={`${name} screenshot`}
      className="w-full object-cover border border-border/30"
      style={{ borderRadius: 0 }}
    />
  );
}

/** Animated caret icon */
function AnimatedCaret({ open }: { open: boolean }) {
  return (
    <motion.span
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="inline-flex"
    >
      <CaretDownIcon size={11} />
    </motion.span>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isFeatured = index === 0;
  const hasImage = !!project.image;
  const hasCaseStudy = !!project.caseStudy;
  const hasAnyExtra = hasImage || hasCaseStudy;

  // Featured: image always shown, case study has its own toggle
  // Non-featured: single "details" toggle reveals image + case study
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <div
      className={`group flex flex-col p-5 -mx-5 border transition-all duration-300 ${
        isFeatured
          ? "border-border/60 bg-muted/20 hover:border-border"
          : "border-transparent hover:border-dashed hover:border-border/70 hover:bg-muted/5"
      }`}
      style={{ borderRadius: 0 }}
    >
      {/* Header row: name + links */}
      <div className="flex items-center justify-between w-full mb-2">
        <h3
          className={`${
            isFeatured ? "text-[1.2rem]" : "text-[1.05rem]"
          } tracking-tight text-foreground/90 group-hover:text-foreground transition-colors font-medium`}
        >
          {project.name}
        </h3>
        <div className="flex items-center gap-3 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
              title="View Source on GitHub"
            >
              <span className="sr-only">View Source on GitHub</span>
              <GithubLogoIcon size={18} />
            </Link>
          )}
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
              title="View Live Site"
            >
              <span className="sr-only">View Live Site</span>
              <ArrowUpRightIcon size={18} />
            </Link>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-[0.9rem] text-muted-foreground leading-relaxed">
        {project.description}
      </p>

      {/* Insight quote */}
      {project.insight && (
        <div className="mt-3 pl-3 border-l-2 border-border/60 text-[0.8rem] text-foreground/70 italic">
          &quot;{project.insight}&quot;
        </div>
      )}

      {/* Tech badges */}
      <div className="flex flex-wrap gap-2 mt-5">
        {project.tech.map((tech) => (
          <div
            key={tech}
            className="flex items-center gap-1.5 px-2 py-1 border border-dashed border-border bg-muted/30 dark:bg-foreground/10 text-[0.7rem] text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300"
            style={{ borderRadius: 0 }}
          >
            <Image
              src={icons[tech] || ""}
              alt={tech}
              width={14}
              height={14}
              className="w-3.5 h-3.5"
            />
            <span className="tracking-tight">{tech}</span>
          </div>
        ))}
      </div>

      {/* ── FEATURED PROJECT ── image always shown + separate case study toggle */}
      {isFeatured && hasAnyExtra && (
        <div className="mt-5 flex flex-col gap-4">
          {hasImage && <ProjectImage src={project.image!} name={project.name} />}

          {hasCaseStudy && (
            <>
              <button
                onClick={() => setCaseStudyOpen((v) => !v)}
                className="flex items-center gap-1.5 w-fit text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground/60 hover:text-muted-foreground transition-colors"
              >
                Case study <AnimatedCaret open={caseStudyOpen} />
              </button>
              <AnimatePresence>
                {caseStudyOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <CaseStudyContent cs={project.caseStudy!} />
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
        </div>
      )}

      {/* ── NON-FEATURED ── single "details" toggle for image + case study */}
      {!isFeatured && hasAnyExtra && (
        <div className="mt-4">
          <button
            onClick={() => setDetailsOpen((v) => !v)}
            className="flex items-center gap-1.5 w-fit text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground/60 hover:text-muted-foreground transition-colors"
          >
            Details <AnimatedCaret open={detailsOpen} />
          </button>
          <AnimatePresence>
            {detailsOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{ overflow: "hidden" }}
              >
                <div className="pt-4 flex flex-col gap-5">
                  {hasImage && <ProjectImage src={project.image!} name={project.name} />}
                  {hasCaseStudy && <CaseStudyContent cs={project.caseStudy!} />}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = projectsData.slice(0, INITIAL_VISIBLE);

  return (
    <StaggerFadeIn className="mb-24">
      <h2 className="text-[0.75rem] uppercase tracking-[0.2em] text-muted-foreground/60 mb-10">
        Projects
      </h2>

      <div className="flex flex-col gap-6">
        {/* Always-visible first 2 projects with stagger animation */}
        {visibleProjects.map((project, index) => (
          <StaggerItem key={project.name} index={index}>
            <ProjectCard project={project} index={index} />
          </StaggerItem>
        ))}

        {/* Additional projects animated in/out via AnimatePresence */}
        <AnimatePresence>
          {showAll &&
            projectsData.slice(INITIAL_VISIBLE).map((project, i) => {
              const index = INITIAL_VISIBLE + i;
              return (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.07, ease: "easeOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <ProjectCard project={project} index={index} />
                </motion.div>
              );
            })}
        </AnimatePresence>
      </div>

      {projectsData.length > INITIAL_VISIBLE && (
        <div className="w-full flex justify-center mt-6">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="text-sm font-medium text-foreground hover:text-foreground/80 transition-colors uppercase tracking-widest flex items-center justify-center gap-2 border-t border-border/40 w-full pt-4 pb-2"
          >
            {showAll ? (
              <>Show Less <CaretUpIcon size={16} /></>
            ) : (
              <>View More <CaretDownIcon size={16} /></>
            )}
          </button>
        </div>
      )}
    </StaggerFadeIn>
  );
}
