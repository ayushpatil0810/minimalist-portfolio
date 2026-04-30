"use client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed top-6 right-6 z-50">
        <button
          className="p-2 rounded-full text-muted-foreground transition-colors duration-300"
          aria-label="Toggle theme"
        >
          <div className="w-4.5 h-4.5" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded-full text-muted-foreground hover:text-foreground transition-colors duration-300"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? <SunIcon size={18} /> : <MoonIcon size={18} />}
      </button>
    </div>
  );
}
