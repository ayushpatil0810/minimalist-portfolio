"use client";

import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@phosphor-icons/react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(isDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={() => setDark(!dark)}
        className="p-2 rounded-full text-muted-foreground hover:text-foreground transition-colors duration-300"
        aria-label="Toggle theme"
      >
        {dark ? <SunIcon size={18} /> : <MoonIcon size={18} />}
      </button>
    </div>
  );
}
