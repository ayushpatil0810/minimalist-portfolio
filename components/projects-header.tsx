"use client";

import { motion } from "framer-motion";

// Plan 004 straggler: spring entrance (was bare tween duration:0.4 with no type)
export function ProjectsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", bounce: 0, duration: 0.45 }}
      className="mb-12"
    >
      <h1 className="text-[2rem] md:text-[2.4rem] font-semibold tracking-tight leading-tight mb-3">
        Projects
      </h1>
      <p className="text-muted-foreground text-[0.9rem] leading-relaxed max-w-xl">
        Things I&apos;ve built, side projects, experiments, and work I&apos;m proud of. Click any card to read more.
      </p>
    </motion.div>
  );
}
