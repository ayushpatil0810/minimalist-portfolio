"use client";

import { motion } from "framer-motion";

export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", bounce: 0, duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
