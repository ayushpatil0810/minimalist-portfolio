import { StaggerFadeIn, StaggerItem } from "@/components/stagger-fade-in";
import { aboutData } from "@/config/about";
import { ArrowBendDownRight } from "@phosphor-icons/react/dist/ssr";

export function RabbitHoles() {
  const holes = aboutData.rabbitHoles ?? [];

  if (holes.length === 0) return null;

  return (
    <StaggerFadeIn className="mb-24">
      <h2 className="text-[0.75rem] uppercase tracking-[0.2em] text-muted-foreground/60 mb-8">
        Recent Rabbit Holes
      </h2>
      <div className="flex flex-col gap-3">
        {holes.map((hole: string, index: number) => (
          <StaggerItem key={index} index={index}>
            <div className="flex items-center gap-3 text-foreground/80 hover:text-foreground transition-colors group">
              <ArrowBendDownRight className="text-muted-foreground/50 group-hover:text-foreground/70 transition-colors" size={16} />
              <span className="text-[0.95rem]">{hole}</span>
            </div>
          </StaggerItem>
        ))}
      </div>
    </StaggerFadeIn>
  );
}
