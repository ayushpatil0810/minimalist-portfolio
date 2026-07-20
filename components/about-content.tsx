import { aboutData } from "@/config/about";
import { skillCategories } from "@/config/skills";
import Image from "next/image";
import { FadeUp, SkillAboutFadeIn } from "@/components/about-animations";

const sidebarItems = [
  {
    label: "Currently",
    value: "Building full-stack products & exploring AI tooling",
  },
  {
    label: "Studying",
    value: "B.E. Artificial Intelligence & Data Science\nDr. D. Y. Patil Institute of Technology, Pune",
  },
  {
    label: "Interests",
    value: "Microservices · System Design · Event-driven architecture",
  },
  {
    label: "Location",
    value: "Pune, India",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[0.62rem] font-mono uppercase tracking-[0.18em] text-muted-foreground/50">
      {children}
    </span>
  );
}

export function AboutContent() {
  return (
    <>
      {/* Page header */}
      <FadeUp className="mb-12">
        <h1 className="text-[2rem] md:text-[2.6rem] font-semibold tracking-tight leading-tight mb-2">
          About
        </h1>
        <p className="text-muted-foreground text-[0.9rem]">
          The longer version of who I am and what I care about.
        </p>
      </FadeUp>

      {/* Two-column editorial layout */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-10 mb-20">
        {/* Left: paragraphs */}
        <div className="flex flex-col gap-5">
          {aboutData.paragraphs.map((para, i) => (
            <FadeUp key={i} delay={0.1 + i * 0.08}>
              <p className="text-[0.95rem] leading-[1.85] text-foreground/85">{para}</p>
            </FadeUp>
          ))}
        </div>

        {/* Right: structured sidebar */}
        <div className="flex flex-col gap-6">
          {sidebarItems.map((item, i) => (
            <FadeUp key={item.label} delay={0.2 + i * 0.06}>
              <div className="flex flex-col gap-1.5">
                <SectionLabel>{item.label}</SectionLabel>
                <p className="text-[0.82rem] text-foreground/80 leading-relaxed whitespace-pre-line">
                  {item.value}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* Skills section */}
      <FadeUp className="mb-4">
        <div className="flex items-end gap-3 mb-10">
          <h2 className="text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground/60 font-mono">
            Skills
          </h2>
          <div className="flex-1 border-t border-border/40" />
        </div>
      </FadeUp>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
        {skillCategories.map((group, gi) => (
          <FadeUp key={group.category} delay={0.05 * gi}>
            <div className="flex flex-col gap-3">
              <span className="text-[0.78rem] font-semibold tracking-tight text-foreground/90">
                {group.category}
              </span>
              <div className="flex flex-col gap-2">
                {group.skills.map((skill, si) => (
                  <SkillAboutFadeIn
                    key={skill.name}
                    gi={gi}
                    si={si}
                    className="flex items-center gap-2.5 group"
                  >
                    {skill.icon ? (
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={16}
                        height={16}
                        className="w-4 h-4 shrink-0 opacity-75 group-hover:opacity-100 transition-opacity"
                      />
                    ) : (
                      <span className="w-4 h-4 shrink-0 flex items-center justify-center">
                        <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                      </span>
                    )}
                    <span className="text-[0.82rem] text-foreground/75 group-hover:text-foreground/95 transition-colors duration-200 font-mono tracking-tight">
                      {skill.name}
                    </span>
                  </SkillAboutFadeIn>
                ))}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </>
  );
}
