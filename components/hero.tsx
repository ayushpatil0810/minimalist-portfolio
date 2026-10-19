"use client";

import Image from "next/image";
import Link from "next/link";
import { socials } from "@/config/socials";
import { openToWork } from "@/config/experience";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { useRef } from "react";
import { Highlighter } from "@/components/highlighter";

const headline = ["Building scalable software", "& AI-powered products."];

/** Split text into word-level spans with spring stagger */
function SplitText({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            type: "spring",
            bounce: 0,
            duration: 0.55,
            delay: delay + i * 0.06,
          }}
          className="inline-block mr-[0.3em] last:mr-0"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/** Avatar with mouse-follow 3D tilt — weighted physical spring */
function TiltAvatar() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // Weighted, critically-damped spring — feels like a physical object, no overshoot
  const springX = useSpring(x, { stiffness: 160, damping: 20 });
  const springY = useSpring(y, { stiffness: 160, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }}
      className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-1 ring-border/50 shrink-0"
    >
      <Image
        src="https://avatars.githubusercontent.com/u/94798136?v=4"
        alt="Ayush Patil"
        width={96}
        height={96}
        className="w-full h-full object-cover"
        priority
      />
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="mb-28 pt-2 relative">
      {/* Name + avatar row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "spring", bounce: 0, duration: 0.5 }}
        className="flex items-start gap-6 mb-10"
      >
        <TiltAvatar />

        <div className="flex flex-col gap-1 pt-1">
          <span className="text-2xl md:text-3xl font-semibold leading-none" style={{ letterSpacing: "-0.025em" }}>
            Ayush Patil
          </span>
          <span className="text-sm text-muted-foreground font-mono tracking-tight">
            Full Stack Engineer
          </span>
          {openToWork.active && (
            <motion.div
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4, delay: 0.55 }}
              className="flex items-center gap-2 mt-2 w-fit px-2.5 py-0.5 rounded-full border border-border/60 bg-muted/30"
            >
              <span className="text-[0.7rem] text-muted-foreground tracking-tight">
                {openToWork.label}
              </span>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Headline */}
      <h1 className="text-[2rem] md:text-[2.6rem] leading-[1.1] font-semibold mb-4" style={{ letterSpacing: "-0.025em" }}>
        {headline.map((line, i) => (
          <span key={i} className="block">
            <SplitText text={line} delay={0.12 + i * 0.12} />
          </span>
        ))}
        <motion.span
          initial={{ opacity: 0, y: 8, filter: "blur(2px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ type: "spring", bounce: 0, duration: 0.55, delay: 0.38 }}
          className="block mt-2 text-muted-foreground font-normal text-[1.6rem] md:text-[2.2rem] leading-snug"
          style={{ letterSpacing: "-0.018em" }}
        >
          Focused on software engineering, system design, and{" "}
          <Highlighter action="underline" color="var(--accent-color)" strokeWidth={2.5} animationDuration={1000}>
            Generative AI
          </Highlighter>
          .
        </motion.span>
      </h1>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 0.6 }}
        className="flex items-center gap-2 flex-wrap mt-8 mb-8"
      >
        {socials.slice(0, 4).map(({ href, label }) => (
          <Link
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="group px-3 py-1 rounded-full border border-border/40 hover:border-border hover:bg-muted/40 text-[0.78rem] text-muted-foreground hover:text-foreground transition-all duration-200 flex items-center lowercase font-mono"
          >
            <span>{label}</span>
            <span className="w-0 group-hover:w-3 opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] inline-flex items-center group-hover:ml-1">
              <ArrowUpRightIcon
                size={11}
                className="shrink-0 -translate-x-1 group-hover:translate-x-0 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
              />
            </span>
          </Link>
        ))}
      </motion.div>

      {/* CTA row — pointer-down feedback on both buttons */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 0.72 }}
        className="flex items-center gap-3"
      >
        <motion.div
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", bounce: 0, duration: 0.15 }}
        >
          <Link
            href="/resume"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/85 transition-colors duration-200 shadow-sm"
            style={{ letterSpacing: "-0.01em" }}
          >
            <span>View Resume</span>
            <ArrowUpRightIcon
              size={13}
              className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", bounce: 0, duration: 0.15 }}
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-muted/60 transition-colors duration-200"
            style={{ letterSpacing: "-0.01em" }}
          >
            <span>See Projects</span>
            <ArrowUpRightIcon
              size={13}
              className="opacity-60 group-hover:opacity-100 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
