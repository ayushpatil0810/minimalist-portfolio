import { projectsData } from "@/config/projects";
import { Nav } from "@/components/nav";
import { SiteFooter } from "@/components/site-footer";
import { ProjectCard } from "@/components/project-card";
import { ProjectsHeader } from "@/components/projects-header";
import { JsonLd } from "@/components/json-ld";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things I've built, side projects, experiments, and work I'm proud of.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ayushpatil.in/projects",
    title: "Projects | Ayush Patil",
    description: "Things I've built, side projects, experiments, and work I'm proud of.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Ayush Patil",
    description: "Things I've built, side projects, experiments, and work I'm proud of.",
  },
};

const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Projects | Ayush Patil",
  "description": "Things I've built, side projects, experiments, and work I'm proud of.",
  "url": "https://ayushpatil.in/projects",
  "about": {
    "@type": "Person",
    "name": "Ayush Patil"
  },
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": projectsData.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "name": project.name,
        "description": project.description,
        "url": `https://ayushpatil.in/projects/${project.slug}`
      }
    }))
  }
};

export default function ProjectsPage() {
  const featured = projectsData.filter((p) => p.featured);
  const rest = projectsData.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd data={projectsSchema} />
      <Nav />
      <main className="max-w-4xl mx-auto px-6 pt-10 pb-16 md:pb-24">
        <ProjectsHeader />

        {/* Featured, full-width first */}
        {featured.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {featured.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={i}
                featured={i === 0 && featured.length === 1}
              />
            ))}
          </div>
        )}

        {/* Rest */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {rest.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={featured.length + i}
                featured={false}
              />
            ))}
          </div>
        )}

        <SiteFooter />
      </main>
    </div>
  );
}
