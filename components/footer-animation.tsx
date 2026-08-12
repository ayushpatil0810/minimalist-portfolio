"use client";

import { motion } from "framer-motion";

// Plan 004: spring scroll-reveal (was bare tween duration:0.5 with no type)
export function FooterAnimation({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", bounce: 0, duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.footer>
  );
}
