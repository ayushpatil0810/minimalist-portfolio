"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/config/skills";

export function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-24"
    >
      <h2 className="text-[0.8rem] uppercase tracking-[0.15em] text-muted-foreground mb-8">
        Skills
      </h2>

      <div className="flex flex-col gap-8">
        {skillCategories.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: groupIndex * 0.1 }}
          >
            <h3 className="text-[0.85rem] tracking-tight text-foreground/80 mb-3">
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: groupIndex * 0.1 + skillIndex * 0.05,
                  }}
                  className="group flex items-center h-11 px-3 
                  border border-dashed border-border/30 
                  bg-muted/40 dark:bg-foreground/10
                  hover:border-solid hover:border-border/80 hover:bg-muted dark:hover:bg-foreground/20
                  transition-all duration-300 ease-in-out cursor-default"
                  style={{ borderRadius: 0 }}
                >
                  <img
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    className="w-5 h-5 shrink-0"
                  />

                  <div className="overflow-hidden transition-all duration-300 ease-in-out max-w-0 opacity-0 group-hover:max-w-[200px] group-hover:opacity-100">
                    <span className="pl-2.5 text-[0.875rem] tracking-tight whitespace-nowrap text-foreground/85 block">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
