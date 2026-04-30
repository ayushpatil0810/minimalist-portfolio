"use client";

import { motion } from "framer-motion";
import { aboutData } from "@/config/about";

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
        {aboutData.title}
      </h2>
      <div className="flex flex-col gap-2">
        {aboutData.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-[0.95rem] leading-[1.8] text-foreground/85 text-justify">
            {paragraph}
          </p>
        ))}
      </div>
    </motion.section>
  );
}
