"use client";
import Link from "next/link";
import { socials } from "@/config/socials";

export function SiteFooter() {
  return (
    <footer className="pt-12 border-t border-border/50 flex flex-col md:flex-row gap-4 items-center justify-between">
      <p className="text-[0.75rem] text-muted-foreground/60">
        © {new Date().getFullYear()} Ayush Patil. All rights reserved.
      </p>

      <div className="flex items-center gap-4">
        {socials.slice(0, 4).map((social) => {
          const Icon = social.icon;
          return (
            <Link
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <Icon size={18} />
            </Link>
          );
        })}
      </div>
    </footer>
  );
}


