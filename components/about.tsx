"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-24"
    >
      <h2 className="text-[0.8rem] uppercase tracking-[0.15em] text-muted-foreground mb-8">
        About
      </h2>
      <div className="flex flex-col gap-2">
        <p className="text-[0.95rem] leading-[1.8] text-foreground/85 text-justify">
          I’m Ayush Patil, a Full Stack Software Developer with a deep passion
          for building software and creating things from scratch. I’ve been
          exploring technology and writing code since an early age, driven by
          curiosity and the desire to bring my own ideas to life with a unique
          identity and branding.
        </p>
        <p className="text-[0.95rem] leading-[1.8] text-foreground/85 text-justify">
          Currently, I’m expanding my expertise in Artificial Intelligence and
          Machine Learning, while continuously strengthening my backend
          development and system design skills. I enjoy solving complex
          problems, designing scalable systems, and turning ideas into
          functional, impactful applications.
        </p>
        <p className="text-[0.95rem] leading-[1.8] text-foreground/85 text-justify">
          I’m in my third year of pursuing a Bachelor of Engineering in
          Artificial Intelligence and Data Science at Dr. D. Y. Patil Institute
          of Technology, Pimpri, Pune.
        </p>
      </div>
    </motion.section>
  );
}
