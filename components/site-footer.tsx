"use client";

import Link from "next/link";
import {
  LinkedinLogoIcon,
  GithubLogoIcon,
  EnvelopeIcon,
  XLogoIcon,
} from "@phosphor-icons/react";

export function SiteFooter() {
  return (
    <footer className="pt-12 border-t border-border/50 flex items-center justify-between">
      <p className="text-[0.75rem] text-muted-foreground/60">
        © 2026 Ayush Patil. All rights reserved.
      </p>

      <div className="flex items-center gap-4">
        <Link
          href="mailto:hello@ayushpatil.dev"
          className="text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <EnvelopeIcon size={18} />
        </Link>

        <Link
          href="https://github.com"
          target="_blank"
          className="text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <GithubLogoIcon size={18} />
        </Link>

        <Link
          href="https://linkedin.com"
          target="_blank"
          className="text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <LinkedinLogoIcon size={18} />
        </Link>

        <Link
          href="https://twitter.com"
          target="_blank"
          className="text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <XLogoIcon size={18} />
        </Link>
      </div>
    </footer>
  );
}
