import { FadeIn } from "@/components/fade-in";
import { aboutData } from "@/config/about";

export function About() {
  return (
    <FadeIn className="mb-24">
      <h2 className="text-[0.8rem] uppercase tracking-[0.15em] text-muted-foreground mb-8">
        {aboutData.title}
      </h2>
      <div className="flex flex-col gap-2">
        {aboutData.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-[0.95rem] leading-[1.8] text-foreground/85 text-justify">
            {paragraph}
          </p>
        ))}
      </div>
    </FadeIn>
  );
}
