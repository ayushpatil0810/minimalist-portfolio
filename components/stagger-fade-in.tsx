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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
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
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.3,
        delay: groupIndex * 0.1 + skillIndex * 0.05,
      }}
      className={className}
      {...(style ? { style } : {})}
    >
      {children}
    </motion.div>
  );
}
