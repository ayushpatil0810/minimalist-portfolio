"use client";

import { useTheme } from "next-themes";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => <div className="w-full h-[120px] rounded-sm bg-muted/20 animate-pulse" />,
  }
);

const USERNAME = "ayushpatil0810";

type ContribDay = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

function StatPill({ label, value }: { label: string; value: string | number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", bounce: 0, duration: 0.4 }}
      className="flex flex-col gap-0.5"
    >
      <span className="text-[1.1rem] font-semibold tracking-tight tabular-nums text-foreground">
        {value}
      </span>
      <span className="text-[0.65rem] text-muted-foreground uppercase tracking-[0.15em] font-mono">
        {label}
      </span>
    </motion.div>
  );
}

function computeStats(data: ContribDay[]) {
  const total = data.reduce((s, d) => s + d.count, 0);

  // Longest streak
  let maxStreak = 0;
  let cur = 0;
  for (const d of data) {
    if (d.count > 0) {
      cur++;
      maxStreak = Math.max(maxStreak, cur);
    } else {
      cur = 0;
    }
  }

  // Most active day of week
  const byDay: Record<string, number> = {
    Sun: 0, Mon: 0, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0,
  };
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  for (const d of data) {
    if (d.count > 0) {
      const dayIdx = new Date(d.date).getDay();
      const dow = dayNames[dayIdx] || "Sun";
      byDay[dow] = (byDay[dow] || 0) + d.count;
    }
  }
  const mostActive = Object.entries(byDay).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "-";

  return { total, maxStreak, mostActive };
}

// Warm stone palette, amber at max level
const explicitTheme = {
  light: ["#f5f5f4", "#d6d3d1", "#a8a29e", "#78716c", "#f59e0b"],
  dark: ["#1c1917", "#44403c", "#78716c", "#a8a29e", "#f59e0b"],
};

export function GithubActivity() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [stats, setStats] = useState<{
    total: number;
    maxStreak: number;
    mostActive: string;
  } | null>(null);

  // Stores the latest data received from the calendar library.
  // Written synchronously during GitHubCalendar's render; read by useEffect below.
  const pendingDataRef = useRef<ContribDay[] | null>(null);
  // Counter bumped (via ref) each time new data arrives, so useEffect can detect it.
  const [dataVersion, setDataVersion] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Process stats whenever new data has been signalled via dataVersion
  useEffect(() => {
    if (pendingDataRef.current) {
      setStats(computeStats(pendingDataRef.current));
      // Don't null the ref here — keep it for potential re-renders
    }
  }, [dataVersion]);

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  // transformData is called synchronously by GitHubCalendar during its render.
  // Rules: must NOT call setState here. Store data in ref and bump a version
  // counter via a ref so the useEffect above can pick it up after the render.
  const versionRef = useRef(0);
  const transformData = (data: ContribDay[]) => {
    // Only re-signal if data identity has changed (library re-fetched or changed)
    if (data !== pendingDataRef.current) {
      pendingDataRef.current = data;
      // Increment stored version; schedule state bump after this render via queueMicrotask
      const nextVersion = ++versionRef.current;
      // Use queueMicrotask to defer past the current render but before paint —
      // safe, no re-render loop because dataVersion only changes when data changes
      queueMicrotask(() => setDataVersion(nextVersion));
    }
    return data;
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", bounce: 0, duration: 0.5 }}
      className="mb-24"
    >
      {/* Header row with stats */}
      <div className="flex items-end justify-between mb-6 flex-wrap gap-4">
        <h2 className="text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground/60 font-mono">
          Activity
        </h2>
        {stats && (
          <div className="flex items-end gap-8">
            <StatPill label="contributions" value={stats.total} />
            <StatPill label="longest streak" value={`${stats.maxStreak}d`} />
            <StatPill label="most active" value={stats.mostActive} />
          </div>
        )}
      </div>

      {/* Heatmap */}
      <div className="overflow-x-auto w-full pb-2 scrollbar-thin">
        {mounted ? (
          <GitHubCalendar
            username={USERNAME}
            year={new Date().getFullYear()}
            colorScheme={isDark ? "dark" : "light"}
            theme={explicitTheme}
            blockSize={11}
            blockMargin={3}
            blockRadius={2}
            fontSize={11}
            transformData={transformData as (data: ContribDay[]) => ContribDay[]}
            labels={{
              totalCount: "{{count}} contributions in {{year}}",
            }}
            style={{
              color: isDark ? "#a8a29e" : "#78716c",
            }}
            showTotalCount={false}
          />
        ) : (
          <div className="w-full h-[120px] rounded-sm bg-muted/20 animate-pulse" />
        )}
      </div>
    </motion.section>
  );
}
