import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { About } from "@/components/about";
import { ContactForm } from "@/components/contact-form";
import { SiteFooter } from "@/components/site-footer";
import { Skills } from "@/components/skills";
import { RabbitHoles } from "@/components/rabbit-holes";
import { GoToTop } from "@/components/go-to-top";
import { Nav } from "@/components/nav";
import { GithubActivity } from "@/components/github-activity";

export default function App() {
  return (
    <div
      className="min-h-screen bg-background text-foreground transition-colors duration-500 font-sans"
    >
      <Nav />
      <main className="max-w-2xl mx-auto px-6 pt-8 pb-12 md:pb-24">
        <Hero />
        <GithubActivity />
        <Projects />
        <About />
        <Skills />
        <RabbitHoles />
        <ContactForm />
        <SiteFooter />
      </main>
      
      <GoToTop />
    </div>
  );
}
