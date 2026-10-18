"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";
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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen]);

  // Close menu if viewport expands to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 w-full pointer-events-none"
      style={{ viewTransitionName: "site-header" }}
    >
      {/* Top viewport progressive blur & gradient melt */}
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-24 -z-10 transition-opacity duration-300",
          isScrolled || isOpen ? "opacity-100" : "opacity-0"
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

      {/* Invisible backdrop click-to-close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 pointer-events-auto sm:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Main Navbar Pill */}
      <div className="h-20 flex items-center w-full">
        <nav
          className={cn(
            "pointer-events-auto w-[calc(100%-2rem)] max-w-4xl mx-auto flex items-center justify-between rounded-full border px-4 sm:px-6 py-2.5",
            "transition-[background-color,border-color,box-shadow] duration-300 ease-out",
            isScrolled || isOpen
              ? "bg-background/88 dark:bg-background/82 border-border/70 backdrop-blur-[24px] [backdrop-filter:blur(24px)_saturate(180%)] shadow-[0_8px_32px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
              : "bg-transparent border-transparent py-4"
          )}
        >
          {/* Logo / Wordmark */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-foreground font-mono text-sm tracking-tight hover:text-foreground/70 transition-colors duration-200 lowercase flex items-center"
          >
            <motion.span
              initial="initial"
              animate="animate"
              variants={{
                animate: { transition: { staggerChildren: 0.025 } },
              }}
              className="flex"
            >
              {LOGO_CHARS.map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    initial: { opacity: 0, y: 5 },
                    animate: { opacity: 1, y: 0 },
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
            {/* Desktop links */}
            <div className="hidden sm:flex items-center gap-0.5 sm:gap-1">
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
                        : "text-muted-foreground hover:text-foreground"
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

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="sm:hidden p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-foreground/5 dark:hover:bg-foreground/10 transition-colors duration-200 flex items-center justify-center w-8 h-8 cursor-pointer"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <div className="w-3.5 h-2.5 relative flex flex-col justify-between">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="w-3.5 h-[1.2px] bg-foreground block origin-center rounded-full"
                />
                <motion.span
                  animate={
                    isOpen ? { opacity: 0, scaleX: 0.5 } : { opacity: 1, scaleX: 1 }
                  }
                  transition={{ duration: 0.12 }}
                  className="w-3.5 h-[1.2px] bg-foreground block origin-center rounded-full"
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="w-3.5 h-[1.2px] bg-foreground block origin-center rounded-full"
                />
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile navigation dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -6, filter: "blur(4px)" }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-40 pointer-events-auto sm:hidden w-[calc(100%-2rem)] max-w-4xl mx-auto -mt-3"
          >
            <div className="rounded-2xl border border-border/70 bg-background/95 dark:bg-background/90 backdrop-blur-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)] p-2">
              <div className="flex flex-col gap-0.5">
                {navLinks.map(({ href, label, external }, index) => {
                  const isActive =
                    !external &&
                    (href === "/" ? pathname === "/" : pathname.startsWith(href));
                  return (
                    <motion.div
                      key={href}
                      initial={{ opacity: 0, x: -4 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.18,
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.025,
                      }}
                    >
                      <Link
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center justify-between py-2 px-3 text-xs lowercase font-mono tracking-tight transition-colors duration-150 rounded-lg",
                          isActive
                            ? "text-foreground font-semibold"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        <span>{label}</span>
                        {external && (
                          <span className="text-[10px] opacity-60">↗</span>
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
