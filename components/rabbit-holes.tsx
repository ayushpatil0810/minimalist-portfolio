import { aboutData } from "@/config/about";
import { FadeUpSection, HoleAnimation } from "@/components/about-animations";

export function RabbitHoles() {
  const holes = aboutData.rabbitHoles ?? [];
  if (holes.length === 0) return null;

  return (
    <FadeUpSection className="mb-24">
      <div className="flex items-end gap-3 mb-8">
        <h2 className="text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground/60 font-mono">
          Recent Rabbit Holes
        </h2>
        <div className="flex-1 border-t border-border/40" />
      </div>

      <div className="flex flex-wrap gap-2">
        {holes.map((hole, i) => (
          <HoleAnimation
            key={i}
            index={i}
            className="inline-flex items-center px-3 py-1.5 border border-border/70 text-[0.78rem] text-foreground/75 font-mono hover:border-border hover:text-foreground transition-[border-color,color] duration-200"
          >
            {hole}
          </HoleAnimation>
        ))}
      </div>
    </FadeUpSection>
  );
}
