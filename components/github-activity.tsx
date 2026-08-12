"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Use the lower-level ActivityCalendar directly so we can supply pre-fetched data.
// react-activity-calendar is a peer/transitive dep of react-github-calendar.
const ActivityCalendar = dynamic(
  () => import("react-activity-calendar").then((mod) => mod.ActivityCalendar),
  {
    ssr: false,
    loading: () => <div className="w-full h-[120px] rounded-sm bg-muted/20 animate-pulse" />,
  }
);

const USERNAME = "ayushpatil0810";
const YEAR = new Date().getFullYear();

// Cache key includes year so the cache auto-invalidates on Jan 1
const CACHE_KEY = `gh_activity_${USERNAME}_${YEAR}`;
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

type ContribDay = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

interface CacheEntry {
  data: ContribDay[];
  ts: number;
}

function readCache(): ContribDay[] | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const entry: CacheEntry = JSON.parse(raw);
    if (Date.now() - entry.ts > CACHE_TTL_MS) {
      localStorage.removeItem(CACHE_KEY);
      return null;
    }
    return entry.data;
  } catch {
    return null;
  }
}

function writeCache(data: ContribDay[]) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data, ts: Date.now() } satisfies CacheEntry));
  } catch {
    // Quota exceeded or private-browsing restriction — silently skip
  }
}

function computeStats(data: ContribDay[]) {
  const total = data.reduce((s, d) => s + d.count, 0);

  let maxStreak = 0;
  let cur = 0;
  for (const d of data) {
    if (d.count > 0) { cur++; maxStreak = Math.max(maxStreak, cur); }
    else { cur = 0; }
  }

  const byDay: Record<string, number> = {
    Sun: 0, Mon: 0, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0,
  };
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  for (const d of data) {
    if (d.count > 0) {
      const dow = dayNames[new Date(d.date).getDay()] ?? "Sun";
      byDay[dow] = (byDay[dow] ?? 0) + d.count;
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

export function GithubActivity() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activityData, setActivityData] = useState<ContribDay[] | null>(null);
  const [stats, setStats] = useState<{
    total: number;
    maxStreak: number;
    mostActive: string;
  } | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setMounted(true);

    // 1. Try localStorage cache first — no network call on cache hit
    const cached = readCache();
    if (cached) {
      setActivityData(cached);
      setStats(computeStats(cached));
      return;
    }

    // 2. Cache miss — fetch from the same API react-github-calendar uses
    fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=${YEAR}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<{ contributions: ContribDay[] }>;
      })
      .then(({ contributions }) => {
        writeCache(contributions);
        setActivityData(contributions);
        setStats(computeStats(contributions));
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

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
        {!mounted || (!activityData && !error) ? (
          // Skeleton shown until mount + data ready (or cache hit is instant)
          <div className="w-full h-[120px] rounded-sm bg-muted/20 animate-pulse" />
        ) : error || !activityData ? (
          <p className="text-[0.75rem] text-muted-foreground/50 font-mono">
            Activity unavailable
          </p>
        ) : (
          <ActivityCalendar
            data={activityData}
            colorScheme={isDark ? "dark" : "light"}
            theme={explicitTheme}
            blockSize={11}
            blockMargin={3}
            blockRadius={2}
            fontSize={11}
            labels={{
              totalCount: "{{count}} contributions in {{year}}",
            }}
            style={{
              color: isDark ? "#a8a29e" : "#78716c",
            }}
            showWeekdayLabels
          />
        )}
      </div>
    </motion.section>
  );
}
