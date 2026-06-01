"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { FadeIn } from "@/components/fade-in";
import { useState, useEffect } from "react";

export function GithubActivity() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  const explicitTheme = {
    light: ['#f4f4f5', '#9ca3af', '#6b7280', '#4b5563', '#111827'],
    dark: ['#27272a', '#6b7280', '#9ca3af', '#d1d5db', '#f9fafb'],
  };

  return (
    <FadeIn className="mb-24">
      <h2 className="text-xl font-medium tracking-tight mb-4 uppercase">
        Activity
      </h2>
      <p className="text-muted-foreground mb-6">GitHub contributions for {new Date().getFullYear()}.</p>
      <div className="overflow-x-auto w-full pb-4 min-h-[150px]">
        {mounted ? (
          <GitHubCalendar
            username="ayushpatil0810"
            year={new Date().getFullYear()}
            colorScheme={currentTheme === "dark" ? "dark" : "light"}
            theme={explicitTheme}
            blockSize={12}
            blockMargin={4}
            fontSize={14}
          />
        ) : (
          <div className="w-full h-[120px] bg-muted/10 animate-pulse rounded-md" />
        )}
      </div>
    </FadeIn>
  );
}
