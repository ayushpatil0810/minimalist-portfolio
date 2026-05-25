"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "@phosphor-icons/react";

export function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="flex items-center justify-center w-10 h-10 rounded-full border border-border/40 bg-background/80 backdrop-blur-sm text-foreground shadow-sm transition-all hover:bg-muted hover:scale-105"
        aria-label="Go to top"
      >
        <ArrowUp size={20} weight="regular" />
      </button>
    </div>
  );
}
