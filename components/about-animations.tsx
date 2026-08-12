"use client";

import { motion } from "framer-motion";

export function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", bounce: 0, duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeUpSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", bounce: 0, duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export function SkillAboutFadeIn({
  children,
  gi,
  si,
  className = "",
}: {
  children: React.ReactNode;
  gi: number;
  si: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -6 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        bounce: 0,
        duration: 0.4,
        delay: 0.04 * gi + si * 0.03,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HoleAnimation({
  children,
  index,
  className = "",
}: {
  children: React.ReactNode;
  index: number;
  className?: string;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", bounce: 0, duration: 0.35, delay: index * 0.06 }}
      className={className}
    >
      {children}
    </motion.span>
  );
}
