"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Nav } from "@/components/nav";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="max-w-4xl mx-auto px-6 pt-24 pb-24 flex flex-col items-start">
        {/* Large Error Text */}
        <div className="mb-8 select-none">
          <span
            className="text-[6rem] md:text-[8rem] font-bold leading-none tracking-tighter text-border"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Error
          </span>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-3 mb-10 max-w-md">
          <h1 className="text-2xl font-semibold tracking-tight">
            Something went wrong
          </h1>
          <p className="text-muted-foreground text-[0.9rem] leading-relaxed">
            An unexpected error occurred. We have logged this issue and will look into it.
          </p>
        </div>

        {/* Action options */}
        <div className="flex items-center gap-3 flex-wrap">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-sm font-medium hover:bg-foreground/85 transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-sm font-medium hover:bg-muted/60 transition-colors"
          >
            Go home
          </Link>
        </div>
      </main>
    </div>
  );
}
