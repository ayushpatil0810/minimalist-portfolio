import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { ContactForm } from "@/components/contact-form";
import { SiteFooter } from "@/components/site-footer";
import { GoToTop } from "@/components/go-to-top";
import { Nav } from "@/components/nav";
import { GithubActivity } from "@/components/github-activity";
import { FeaturedProjects } from "@/components/featured-projects";
import { RabbitHoles } from "@/components/rabbit-holes";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Ayush Patil | Full Stack Engineer",
  description:
    "Portfolio of Ayush Patil, a Full Stack Engineer exploring AI & Machine Learning. I build fast, scalable applications.",
  alternates: {
    canonical: "/",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ayush Patil",
  "url": "https://ayushpatil.in",
  "jobTitle": "Full Stack Engineer",
  "sameAs": [
    "https://github.com/ayushpatil0810",
    "https://linkedin.com/in/ayushpatil0810",
    "https://twitter.com/ayushpatil0810",
    "https://instagram.com/ayushpatil0810"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Ayush Patil Portfolio",
  "url": "https://ayushpatil.in"
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <JsonLd data={personSchema} />
      <JsonLd data={websiteSchema} />
      <Nav />
      <main className="max-w-4xl mx-auto px-6 pt-10 pb-16 md:pb-24">
        <Hero />
        <GithubActivity />
        <FeaturedProjects />
        <RabbitHoles />
        <ContactForm />
        <SiteFooter />
      </main>
      <GoToTop />
    </div>
  );
}
