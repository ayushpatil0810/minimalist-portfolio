"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  LinkedinLogoIcon,
  GithubLogoIcon,
  EnvelopeIcon,
  XLogoIcon,
  InstagramLogoIcon,
  ReadCvLogoIcon,
} from "@phosphor-icons/react";

const socials = [
  {
    href: "mailto:hello@ayushpatil.dev",
    icon: EnvelopeIcon,
    label: "Email",
  },
  {
    href: "https://github.com",
    icon: GithubLogoIcon,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com",
    icon: LinkedinLogoIcon,
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com",
    icon: XLogoIcon,
    label: "Twitter / X",
  },
  {
    href: "https://instagram.com",
    icon: InstagramLogoIcon,
    label: "Instagram",
  },
];

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-24"
    >
      <div className="flex items-center gap-6 mb-10">
        <div className="w-28 h-28 rounded-full overflow-hidden ring-1 ring-border/40">
          <Image
            src="https://avatars.githubusercontent.com/u/94798136?v=4"
            alt="Ayush Patil avatar"
            width={112}
            height={112}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className="flex flex-col">
          <span className="text-[2rem] tracking-tight">Ayush Patil</span>
          <div className="flex items-center gap-2 mt-1 text-[0.8rem] text-muted-foreground">
            <span>Full Stack Engineer</span>
            <span className="opacity-30">·</span>
            <span>Exploring AI / ML</span>
          </div>
        </div>
      </div>

      <h1 className="text-[1.75rem] md:text-[2rem] tracking-tight leading-[1.3] mb-6">
        I build full stack applications,
        <br />
        <span className="text-muted-foreground">
          with a focus on backend architecture and AI/ML.
        </span>
      </h1>

      {/* Social Icons */}
      <div className="flex items-center gap-3">
        {socials.map(({ href, icon: Icon, label }) => (
          <div key={label} className="relative group">
            <Link
              href={href}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 
              border border-border/40 
              bg-muted/40 
              text-muted-foreground
              transition-all duration-300
              hover:text-foreground
              hover:bg-muted
              hover:border-border
              hover:scale-105"
            >
              <Icon size={18} weight="regular" />
            </Link>

            {/* Tooltip */}
            <span
              className="
              pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2
              whitespace-nowrap text-xs px-2 py-1 rounded-md
              bg-foreground text-background
              opacity-0 translate-y-1
              transition-all duration-200
              group-hover:opacity-100 group-hover:translate-y-0
            "
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8 flex gap-4 items-center">
        <Link
          href="/resume"
          className="inline-flex h-9 items-center justify-center bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90 disabled:pointer-events-none disabled:opacity-50"
        >
          View Resume
          <ReadCvLogoIcon className="ml-2" />
        </Link>
      </div>
    </motion.section>
  );
}
