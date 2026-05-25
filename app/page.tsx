import { ThemeToggle } from "@/components/theme-toggle";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { About } from "@/components/about";
import { ContactForm } from "@/components/contact-form";
import { SiteFooter } from "@/components/site-footer";
import { Skills } from "@/components/skills";
import { RabbitHoles } from "@/components/rabbit-holes";
import { GoToTop } from "@/components/go-to-top";

export default function App() {
  return (
    <div
      className="min-h-screen bg-background text-foreground transition-colors duration-500 font-sans"
    >
      <ThemeToggle />

      <main className="max-w-2xl mx-auto px-6 py-24">
        <Hero />
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
