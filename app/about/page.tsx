import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { SiteFooter } from "@/components/site-footer";
import { AboutContent } from "@/components/about-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Ayush Patil, Full Stack Engineer, AI/ML explorer, and backend systems enthusiast.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ayushpatil.in/about",
    title: "About | Ayush Patil",
    description: "About Ayush Patil, Full Stack Engineer, AI/ML explorer, and backend systems enthusiast.",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Ayush Patil",
    description: "About Ayush Patil, Full Stack Engineer, AI/ML explorer, and backend systems enthusiast.",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="max-w-4xl mx-auto px-6 pt-10 pb-16 md:pb-24">
        <AboutContent />
        <SiteFooter />
      </main>
    </div>
  );
}
