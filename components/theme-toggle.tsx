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
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ type: "spring", bounce: 0, duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {theme === "dark" ? <SunIcon size={18} /> : <MoonIcon size={18} />}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}
