"use client";

import Image from "next/image";
import Link from "next/link";
import { socials } from "@/config/socials";
import { openToWork } from "@/config/experience";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { useRef } from "react";
import { Highlighter } from "@/components/highlighter";

const headline = ["Mostly backend.", "Occasionally frontend."];

/** Split text into word-level spans with stagger */
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
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.07,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block mr-[0.3em] last:mr-0"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/** Avatar with mouse-follow 3D tilt */
function TiltAvatar() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 22 });
  const springY = useSpring(y, { stiffness: 200, damping: 22 });
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
        transition={{ duration: 0.4 }}
        className="flex items-start gap-6 mb-10"
      >
        <TiltAvatar />

        <div className="flex flex-col gap-1 pt-1">
          <span className="text-2xl md:text-3xl font-semibold tracking-tight leading-none">
            Ayush Patil
          </span>
          <span className="text-sm text-muted-foreground font-mono tracking-tight">
            Full Stack Engineer
          </span>
          {openToWork.active && (
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="flex items-center mt-1"
            >
              <span className="text-[0.7rem] text-muted-foreground tracking-tight">
                {openToWork.label}
              </span>
            </motion.div>
          )}
        </div>
      </motion.div>

      <h1 className="text-[2rem] md:text-[2.6rem] leading-[1.15] tracking-tight font-semibold mb-4">
        {headline.map((line, i) => (
          <span key={i} className="block">
            <SplitText text={line} delay={0.15 + i * 0.15} />
          </span>
        ))}
        <motion.span
          initial={{ opacity: 0, y: 8, filter: "blur(2px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
          className="block mt-2 text-muted-foreground font-normal text-[1.6rem] md:text-[2.2rem] leading-snug"
        >
          Obsessed with building scalable systems &{" "}
          <Highlighter action="underline" color="var(--accent-color)" strokeWidth={2.5} animationDuration={1000}>
            Generative AI
          </Highlighter>
          .
        </motion.span>
      </h1>

      {/* Social links, text style, editorial */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.4 }}
        className="flex items-center gap-4 flex-wrap mt-8 mb-8"
      >
        {socials.slice(0, 4).map(({ href, label }) => (
          <Link
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="group text-[0.8rem] text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1 lowercase font-mono"
          >
            {label}
            <ArrowUpRightIcon
              size={11}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            />
          </Link>
        ))}
      </motion.div>

      {/* CTA row */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85, duration: 0.4 }}
        className="flex items-center gap-3"
      >
        <Link
          href="/resume"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-sm font-medium tracking-tight hover:bg-foreground/85 transition-colors duration-200"
        >
          View Resume
          <ArrowUpRightIcon size={13} />
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-sm font-medium tracking-tight hover:bg-muted/60 transition-colors duration-200"
        >
          See Projects
        </Link>
      </motion.div>
    </section>
  );
}
