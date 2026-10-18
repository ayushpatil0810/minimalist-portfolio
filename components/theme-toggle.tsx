"use client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-full text-muted-foreground transition-colors duration-300 flex items-center justify-center"
        aria-label="Toggle theme"
      >
        <div className="w-[18px] h-[18px]" />
      </button>
    );
  }

  return (
    <motion.button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-foreground/5 dark:hover:bg-foreground/10 transition-colors duration-200 flex items-center justify-center relative overflow-hidden"
      aria-label="Toggle theme"
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", bounce: 0, duration: 0.15 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ opacity: 0, scale: 0.25, filter: "blur(2px)", rotate: theme === "dark" ? -30 : 30 }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)", rotate: 0 }}
          exit={{ opacity: 0, scale: 0.25, filter: "blur(2px)", rotate: theme === "dark" ? 30 : -30 }}
          transition={{
            duration: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center justify-center"
        >
          {theme === "dark" ? <SunIcon size={18} /> : <MoonIcon size={18} />}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}
