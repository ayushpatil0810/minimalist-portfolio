import Link from "next/link";
import { ArrowUpRightIcon, GithubLogoIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { projectsData } from "@/config/projects";
import { icons } from "@/config/icons";
import { StaggerFadeIn, StaggerItem } from "@/components/stagger-fade-in";

export function Projects() {
  return (
    <StaggerFadeIn className="mb-24">
      <h2 className="text-[0.8rem] uppercase tracking-[0.15em] text-muted-foreground mb-8">
        Projects
      </h2>

      <div className="space-y-4">
        {projectsData.map((project, index) => (
          <StaggerItem key={project.name} index={index}>
            <div
              className="group flex flex-col items-start gap-4 p-4 -mx-4 
              border border-transparent
              hover:border-dashed hover:border-border/70 hover:bg-muted/10 
              transition-all duration-300"
              style={{ borderRadius: 0 }}
            >
            <div className="w-full">
              <div className="flex items-center justify-between w-full">
                <h3 className="text-[1rem] tracking-tight text-foreground/90 group-hover:text-foreground transition-colors">
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
        ))}
      </div>
    </StaggerFadeIn>
  );
}
