import Link from "next/link";
import {
  ArrowUpRightIcon,
  GithubLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { projectsData } from "@/config/projects";
import { icons } from "@/config/icons";
import { StaggerFadeIn, StaggerItem } from "@/components/stagger-fade-in";

export function Projects() {
  return (
    <StaggerFadeIn className="mb-24">
      <h2 className="text-[0.75rem] uppercase tracking-[0.2em] text-muted-foreground/60 mb-10">
        Projects
      </h2>

      <div className="flex flex-col gap-6">
        {projectsData.map((project, index) => {
          const isFeatured = index === 0;
          return (
            <StaggerItem key={project.name} index={index}>
              <div
                className={`group flex flex-col items-start gap-4 p-5 -mx-5 
                border transition-all duration-300 ${
                  isFeatured
                    ? "border-border/60 bg-muted/20 hover:border-border"
                    : "border-transparent hover:border-dashed hover:border-border/70 hover:bg-muted/5"
                }`}
                style={{ borderRadius: 0 }}
              >
                <div className="w-full">
                  <div className="flex items-center justify-between w-full mb-2">
                    <h3
                      className={`${isFeatured ? "text-[1.2rem]" : "text-[1.05rem]"} tracking-tight text-foreground/90 group-hover:text-foreground transition-colors font-medium`}
                    >
                      {project.name}
                    </h3>

                    {/* Links for desktop */}
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

                  <p className="text-[0.9rem] text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* @ts-ignore - insight field added dynamically */}
                  {project.insight && (
                    <div className="mt-3 pl-3 border-l-2 border-border/60 text-[0.8rem] text-foreground/70 italic">
                      {/* @ts-ignore */}"{project.insight}"
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.tech.map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center gap-1.5 px-2 py-1 
                        border border-dashed border-border/70 
                        bg-muted/30 dark:bg-foreground/10
                        text-[0.7rem] text-muted-foreground group-hover:text-foreground/80
                        transition-colors duration-300"
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
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </div>
    </StaggerFadeIn>
  );
}
