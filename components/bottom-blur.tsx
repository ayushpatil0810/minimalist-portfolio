"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

export function BottomBlur() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Show after user scrolls down a little, but hide when right at the bottom
      const hasScrolledDown = scrollY > 60;
      const isAtBottom = windowHeight + scrollY >= docHeight - 30;

      setIsVisible(hasScrolledDown && !isAtBottom);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-x-0 bottom-0 h-10 sm:h-14 z-30 transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0"
      )}
      aria-hidden="true"
    >
      <ProgressiveBlur
        direction="bottom"
        blurIntensity={0.8}
        blurLayers={6}
        className="h-full w-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-background/20 to-transparent" />
    </div>
  );
}
