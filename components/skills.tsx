import { skillCategories } from "@/config/skills";
import { StaggerFadeIn, StaggerItem, SkillStaggerItem } from "@/components/stagger-fade-in";
import Image from "next/image";

export function Skills() {
  return (
    <StaggerFadeIn className="mb-24">
      <h2 className="text-[0.8rem] uppercase tracking-[0.15em] text-muted-foreground mb-8">
        Skills
      </h2>

      <div className="flex flex-col gap-8">
        {skillCategories.map((group, groupIndex) => (
          <StaggerItem key={group.category} index={groupIndex}>
            <h3 className="text-[0.85rem] tracking-tight text-foreground/80 mb-3">
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((skill, skillIndex) => (
                <SkillStaggerItem
                  key={skill.name}
                  groupIndex={groupIndex}
                  skillIndex={skillIndex}
                  className="group flex items-center h-11 px-3 
                  border border-dashed border-border/30 
                  bg-muted/40 dark:bg-foreground/10
                  hover:border-solid hover:border-border/80 hover:bg-muted dark:hover:bg-foreground/20
                  transition-all duration-300 ease-in-out cursor-default"
                  style={{ borderRadius: 0 }}
                >
                  <Image
                    src={skill.icon || ""}
                    alt={`${skill.name} icon`}
                    width={20}
                    height={20}
                    className="w-5 h-5 shrink-0"
                  />

                  <div className="overflow-hidden transition-all duration-300 ease-in-out max-w-0 opacity-0 group-hover:max-w-[200px] group-hover:opacity-100">
                    <span className="pl-2.5 text-[0.875rem] tracking-tight whitespace-nowrap text-foreground/85 block">
                      {skill.name}
                    </span>
                  </div>
                </SkillStaggerItem>
              ))}
            </div>
          </StaggerItem>
        ))}
      </div>
    </StaggerFadeIn>
  );
}
