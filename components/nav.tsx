"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/about", label: "about" },
];

const LOGO_CHARS = "ayush patil".split("");

export function Nav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 w-full h-20 flex items-center pointer-events-none"
      style={{ viewTransitionName: "site-header" }}
    >
      <nav
        className={cn(
          "pointer-events-auto w-[calc(100%-2rem)] max-w-4xl mx-auto flex items-center justify-between rounded-full border px-4 sm:px-6 py-2.5",
          // Transition only border/shadow/bg — not transform — for smooth scroll appearance
          "transition-[background-color,border-color,box-shadow] duration-300 ease-out",
          isScrolled
            ? "bg-background/88 dark:bg-background/82 border-border/70 backdrop-blur-[24px] [backdrop-filter:blur(24px)_saturate(180%)] shadow-[0_8px_32px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
            : "bg-transparent border-transparent py-4"
        )}
      >
        {/* Logo / Wordmark */}
        <Link
          href="/"
          className="text-foreground font-mono text-sm tracking-tight hover:text-foreground/70 transition-colors duration-200 lowercase flex items-center"
        >
          <motion.span
            initial="initial"
            animate="animate"
            variants={{
              animate: { transition: { staggerChildren: 0.025 } }
            }}
            className="flex"
          >
            {LOGO_CHARS.map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  initial: { opacity: 0, y: 5 },
                  animate: { opacity: 1, y: 0 }
                }}
                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>
        </Link>

        {/* Center links */}
        <div
          className="flex items-center gap-1"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {navLinks.map(({ href, label }, index) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                onMouseEnter={() => setHoveredIndex(index)}
                className={cn(
                  "relative px-3.5 py-1 text-xs rounded-full lowercase tracking-wide",
                  "transition-colors duration-200",
                  isActive
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {hoveredIndex === index && !isActive && (
                  <motion.span
                    layoutId="nav-hover-pill"
                    className="absolute inset-0 rounded-full bg-foreground/5 dark:bg-foreground/10"
                    transition={{ type: "spring", bounce: 0.1, duration: 0.3 }}
                  />
                )}
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-foreground/8 dark:bg-foreground/15"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.35 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </Link>
            );
          })}
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <Link
            href="https://blog.ayushpatil.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors lowercase text-xs tracking-wide hidden sm:block"
          >
            blog ↗
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
