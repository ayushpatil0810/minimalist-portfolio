"use client";

import { skillCategories } from "@/config/skills";
import { StaggerFadeIn, StaggerItem, SkillStaggerItem } from "@/components/stagger-fade-in";
import Image from "next/image";
import { useState } from "react";
import { CaretDown, CaretUp } from "@phosphor-icons/react/dist/ssr";
import { AnimatePresence, motion } from "framer-motion";

const INITIAL_VISIBLE = 2;

export function Skills() {
  const [showAll, setShowAll] = useState(false);

  const visibleCategories = skillCategories.slice(0, INITIAL_VISIBLE);

  return (
    <StaggerFadeIn className="mb-24">
      <h2 className="text-[0.75rem] uppercase tracking-[0.2em] text-muted-foreground/60 mb-10">
        Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {visibleCategories.map((group, groupIndex) => (
          <StaggerItem key={group.category} index={groupIndex}>
            <h3 className="text-[0.95rem] tracking-tight text-foreground/90 font-medium mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((skill, skillIndex) => (
                <SkillStaggerItem
                  key={skill.name}
                  groupIndex={groupIndex}
                  skillIndex={skillIndex}
                  className="flex items-center gap-2 px-3 py-1.5 
                  bg-muted/30 dark:bg-foreground/5
                  border border-dashed border-border
                  hover:bg-muted/80 dark:hover:bg-foreground/10
                  transition-all duration-300 ease-in-out cursor-default"
                  style={{ borderRadius: 0 }}
                >
                  {skill.icon && (
                    <Image
                      src={skill.icon}
                      alt={`${skill.name} icon`}
                      width={16}
                      height={16}
                      className="w-4 h-4 shrink-0 opacity-80"
                    />
                  )}
                  <span className="text-[0.8rem] tracking-tight text-foreground/85">
                    {skill.name}
                  </span>
                </SkillStaggerItem>
              ))}
            </div>
          </StaggerItem>
        ))}

        <AnimatePresence>
          {showAll &&
            skillCategories.slice(INITIAL_VISIBLE).map((group, i) => {
              const groupIndex = INITIAL_VISIBLE + i;
              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, height: 0, y: -8 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -8 }}
                  transition={{ duration: 0.35, delay: i * 0.07, ease: "easeOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <h3 className="text-[0.95rem] tracking-tight text-foreground/90 font-medium mb-4">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill, skillIndex) => (
                      <SkillStaggerItem
                        key={skill.name}
                        groupIndex={groupIndex}
                        skillIndex={skillIndex}
                        className="flex items-center gap-2 px-3 py-1.5 bg-muted/30 dark:bg-foreground/5 border border-dashed border-border hover:bg-muted/80 dark:hover:bg-foreground/10 transition-all duration-300 ease-in-out cursor-default"
                        style={{ borderRadius: 0 }}
                      >
                        {skill.icon && (
                          <Image
                            src={skill.icon}
                            alt={`${skill.name} icon`}
                            width={16}
                            height={16}
                            className="w-4 h-4 shrink-0 opacity-80"
                          />
                        )}
                        <span className="text-[0.8rem] tracking-tight text-foreground/85">
                          {skill.name}
                        </span>
                      </SkillStaggerItem>
                    ))}
                  </div>
                </motion.div>
              );
            })}
        </AnimatePresence>
      </div>

      {skillCategories.length > INITIAL_VISIBLE && (
        <div className="w-full flex justify-center mt-8">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="text-sm font-medium text-foreground hover:text-foreground/80 transition-colors uppercase tracking-widest flex items-center justify-center gap-2 border-t border-border/40 w-full pt-4 pb-2"
          >
            {showAll ? (
              <>Show Less <CaretUp size={16} /></>
            ) : (
              <>View More <CaretDown size={16} /></>
            )}
          </button>
        </div>
      )}
    </StaggerFadeIn>
  );
}
