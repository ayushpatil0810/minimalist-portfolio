"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

export function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // Plan 003: AnimatePresence spring replaces CSS class toggle.
    // The old toggle used opacity-0/translate-y-4 class swaps which de-sync
    // on rapid scroll and fire on touch (false hover). Spring is interruptible.
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ opacity: 0, y: 12, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.95 }}
          transition={{ type: "spring", bounce: 0, duration: 0.3 }}
        >
          <motion.button
            onClick={scrollToTop}
            // Plan 003: hover scale gated — touch devices fire false hover on tap,
            // keeping element scaled until next tap. Gate with CSS @media(hover:hover)
            // via Tailwind's hover: variant which applies hover:hover under the hood.
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", bounce: 0, duration: 0.2 }}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-border/40 bg-background/80 backdrop-blur-sm text-foreground shadow-sm"
            aria-label="Go to top"
          >
            <ArrowUp size={20} weight="regular" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
