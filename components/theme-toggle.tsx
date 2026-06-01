"use client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

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
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <SunIcon size={18} /> : <MoonIcon size={18} />}
    </button>
  );
}
