import { FadeIn } from "@/components/fade-in";
import { aboutData } from "@/config/about";

export function About() {
  return (
    <FadeIn className="mb-24">
      <h2 className="text-[0.75rem] uppercase tracking-[0.2em] text-muted-foreground/60 mb-8">
        {aboutData.title}
      </h2>
      <div className="flex flex-col gap-4">
        {aboutData.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-[0.95rem] leading-[1.8] text-foreground/85">
            {paragraph}
          </p>
        ))}
      </div>
    </FadeIn>
  );
}
