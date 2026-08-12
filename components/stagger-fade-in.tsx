"use client";

import { motion, MotionStyle } from "framer-motion";

export function StaggerFadeIn({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", bounce: 0, duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export function StaggerItem({
  children,
  className,
  index,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  index: number;
  style?: MotionStyle;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", bounce: 0, duration: 0.5, delay: index * 0.07 }}
      className={className}
      {...(style ? { style } : {})}
    >
      {children}
    </motion.div>
  );
}

export function SkillStaggerItem({
  children,
  className,
  groupIndex,
  skillIndex,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  groupIndex: number;
  skillIndex: number;
  style?: MotionStyle;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        bounce: 0,
        duration: 0.4,
        delay: groupIndex * 0.08 + skillIndex * 0.04,
      }}
      className={className}
      {...(style ? { style } : {})}
    >
      {children}
    </motion.div>
  );
}
