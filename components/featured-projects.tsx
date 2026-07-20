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
          className="text-[0.75rem] text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 font-mono"
        >
          all projects <ArrowUpRightIcon size={11} />
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
