import { projectsData } from "@/config/projects";
import { icons } from "@/config/icons";
import { Nav } from "@/components/nav";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { ProjectCarousel } from "@/components/project-carousel";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeftIcon,
  ArrowUpRightIcon,
  GithubLogoIcon,
  CheckCircleIcon,
} from "@phosphor-icons/react/dist/ssr";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projectsData.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return {};
  const canonicalUrl = `/projects/${slug}`;
  const fullUrl = `https://ayushpatil.in/projects/${slug}`;
  return {
    title: project.name,
    description: project.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      url: fullUrl,
      title: `${project.name} | Ayush Patil`,
      description: project.description,
      images: project.image ? [{ url: project.image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | Ayush Patil`,
      description: project.description,
      images: project.image ? [project.image] : undefined,
    },
  };
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[0.62rem] font-mono uppercase tracking-[0.18em] text-muted-foreground/50">
      {children}
    </span>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) notFound();

  const { caseStudy } = project;

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.name,
    "description": project.description,
    "url": `https://ayushpatil.in/projects/${project.slug}`,
    "creator": {
      "@type": "Person",
      "name": "Ayush Patil"
    },
    "image": project.image ? `https://ayushpatil.in${project.image}` : undefined
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd data={projectSchema} />
      <Nav />
      <main className="max-w-4xl mx-auto px-6 pt-10 pb-16 md:pb-24">
        {/* Back link */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[0.78rem] text-muted-foreground hover:text-foreground transition-colors font-mono"
          >
            <ArrowLeftIcon size={13} />
            all projects
          </Link>
        </div>

        {/* Hero header */}
        <div className="mb-8">
          <div className="flex flex-col gap-1.5 mb-6">
            <span className="text-[0.62rem] font-mono uppercase tracking-[0.18em] text-muted-foreground/50">
              {project.category} · {project.year}
            </span>
            <h1 className="text-[2rem] md:text-[2.6rem] font-semibold tracking-tight leading-tight">
              {project.name}
            </h1>
            {project.longDescription && (
              <p className="text-[0.95rem] text-muted-foreground leading-relaxed max-w-2xl mt-1">
                {project.longDescription}
              </p>
            )}
          </div>

          {/* Link buttons */}
          <div className="flex items-center gap-3 flex-wrap">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background text-sm font-medium hover:bg-foreground/85 transition-colors"
              >
                Live Site
                <ArrowUpRightIcon size={13} />
              </Link>
            )}
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-border text-sm font-medium hover:bg-muted/60 transition-colors"
              >
                <GithubLogoIcon size={15} />
                View Source
              </Link>
            )}
          </div>
        </div>

        {/* Screenshot Carousel */}
        <ProjectCarousel
          images={project.images}
          image={project.image}
          title={project.name}
          slug={project.slug}
        />

        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-10 mb-12">
          {/* Left: Case Study */}
          <div className="flex flex-col gap-8">
            {caseStudy?.problem && (
              <div className="flex flex-col gap-2">
                <SectionLabel>Problem</SectionLabel>
                <p className="text-[0.9rem] leading-[1.8] text-foreground/80">
                  {caseStudy.problem}
                </p>
              </div>
            )}
            {caseStudy?.solution && (
              <div className="flex flex-col gap-2">
                <SectionLabel>Approach</SectionLabel>
                <p className="text-[0.9rem] leading-[1.8] text-foreground/80">
                  {caseStudy.solution}
                </p>
              </div>
            )}
            {caseStudy?.features && caseStudy.features.length > 0 && (
              <div className="flex flex-col gap-3">
                <SectionLabel>Key Features</SectionLabel>
                <div className="grid grid-cols-1 gap-2.5">
                  {caseStudy.features.map((feature, idx) => {
                    const parts = feature.split(":");
                    const titlePart = parts.length > 1 ? parts[0] : null;
                    const descPart = parts.length > 1 ? parts.slice(1).join(":") : feature;

                    return (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-[0.875rem] text-foreground/85 leading-relaxed bg-muted/15 p-3 rounded-lg border border-border/40"
                      >
                        <CheckCircleIcon size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                        <div>
                          {titlePart && (
                            <span className="font-semibold text-foreground mr-1.5">
                              {titlePart}:
                            </span>
                          )}
                          <span>{descPart}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {caseStudy?.architecture && (
              <div className="flex flex-col gap-2">
                <SectionLabel>Architecture & Flow</SectionLabel>
                <div className="text-[0.875rem] leading-[1.8] text-foreground/80 bg-muted/20 p-4 rounded-lg border border-border/50 font-mono text-[0.82rem]">
                  {caseStudy.architecture}
                </div>
              </div>
            )}
            {caseStudy?.outcome && (
              <div className="flex flex-col gap-2">
                <SectionLabel>Outcome</SectionLabel>
                <p className="text-[0.9rem] leading-[1.8] text-foreground/80">
                  {caseStudy.outcome}
                </p>
              </div>
            )}

            {/* Insight */}
            {project.insight && (
              <blockquote className="pl-4 border-l-2 border-amber-400/60 italic text-[0.875rem] text-foreground/70">
                &ldquo;{project.insight}&rdquo;
              </blockquote>
            )}
          </div>

          {/* Right sidebar: tech stack */}
          <div className="flex flex-col gap-5">
            <div>
              <SectionLabel>Tech Stack</SectionLabel>
              <div className="flex flex-col gap-2 mt-3">
                {project.tech.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-2.5 text-[0.8rem] text-foreground/80"
                  >
                    {icons[tech] && (
                      <Image
                        src={icons[tech]!}
                        alt={tech}
                        width={16}
                        height={16}
                        className="w-4 h-4 shrink-0"
                      />
                    )}
                    <span className="font-mono tracking-tight">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Meta */}
            <div className="pt-4 border-t border-border/50">
              <SectionLabel>Year</SectionLabel>
              <p className="text-sm mt-1 font-mono">{project.year}</p>
            </div>

            <div className="pt-4 border-t border-border/50">
              <SectionLabel>Category</SectionLabel>
              <p className="text-sm mt-1 font-mono">{project.category}</p>
            </div>
          </div>
        </div>

        {/* Navigation between projects */}
        <div className="border-t border-border/50 pt-8 flex items-center justify-between gap-4">
          <Link
            href="/projects"
            className="text-[0.78rem] text-muted-foreground hover:text-foreground transition-colors font-mono flex items-center gap-1.5"
          >
            <ArrowLeftIcon size={12} />
            Back to all projects
          </Link>

          {/* Next project */}
          {(() => {
            const allSlugs = projectsData.map((p) => p.slug);
            const currentIdx = allSlugs.indexOf(slug);
            const nextProject = projectsData[(currentIdx + 1) % projectsData.length];
            return nextProject && nextProject.slug !== slug ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="text-[0.78rem] text-muted-foreground hover:text-foreground transition-colors font-mono flex items-center gap-1.5"
              >
                Next: {nextProject.name}
                <ArrowUpRightIcon size={12} />
              </Link>
            ) : null;
          })()}
        </div>

        <SiteFooter />
      </main>
    </div>
  );
}
