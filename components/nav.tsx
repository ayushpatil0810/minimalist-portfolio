"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

import { ProgressiveBlur } from "@/components/ui/progressive-blur";

interface NavLinkItem {
  href: string;
  label: string;
  external?: boolean;
}

const navLinks: NavLinkItem[] = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/about", label: "about" },
  { href: "https://blog.ayushpatil.in", label: "blog", external: true },
];

const LOGO_CHARS = "ayush patil".split("");

export function Nav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

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
      {/* Top viewport progressive blur & gradient melt */}
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-24 -z-10 transition-opacity duration-300",
          isScrolled ? "opacity-100" : "opacity-0"
        )}
        aria-hidden="true"
      >
        <ProgressiveBlur
          direction="top"
          blurIntensity={1.2}
          blurLayers={8}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-transparent" />
      </div>

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

        {/* Right side: navigation links, blog & theme toggle */}
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="flex items-center gap-0.5 sm:gap-1">
            {navLinks.map(({ href, label, external }) => {
              const isActive =
                !external &&
                (href === "/" ? pathname === "/" : pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className={cn(
                    "px-2.5 sm:px-3 py-1 text-xs lowercase tracking-wide inline-flex items-center gap-0.5",
                    "transition-colors duration-200",
                    isActive
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground",
                    external && "hidden min-[400px]:inline-flex"
                  )}
                >
                  <span>{label}</span>
                  {external && (
                    <span className="text-[10px] opacity-70">↗</span>
                  )}
                </Link>
              );
            })}
          </div>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
