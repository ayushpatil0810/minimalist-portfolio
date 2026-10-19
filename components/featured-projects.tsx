import Link from "next/link";
import { projectsData } from "@/config/projects";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { FeaturedCard } from "@/components/featured-card";

export function FeaturedProjects() {
  const featured = projectsData.filter((p) => p.featured).slice(0, 2);

  return (
    <section className="mb-24">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground/60 font-mono">
          Selected Projects
        </h2>
        <Link
          href="/projects"
          className="group text-[0.75rem] text-muted-foreground hover:text-foreground transition-all duration-200 flex items-center font-mono px-3 py-1 rounded-full border border-border/50 bg-muted/15 hover:bg-muted/35"
        >
          <span>all projects</span>
          <span className="w-0 group-hover:w-3 opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] inline-flex items-center group-hover:ml-1">
            <ArrowUpRightIcon
              size={11}
              className="shrink-0 -translate-x-1 group-hover:translate-x-0 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
            />
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {featured.map((project, i) => (
          <FeaturedCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
