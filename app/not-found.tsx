import Link from "next/link";
import { Nav } from "@/components/nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404: Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="max-w-4xl mx-auto px-6 pt-24 pb-24 flex flex-col items-start">
        {/* Large 404 */}
        <div className="mb-8 select-none">
          <span
            className="text-[8rem] md:text-[12rem] font-bold leading-none tracking-tighter text-border"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            404
          </span>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-3 mb-10 max-w-md">
          <h1 className="text-2xl font-semibold tracking-tight">
            Page not found
          </h1>
          <p className="text-muted-foreground text-[0.9rem] leading-relaxed">
            This route doesn&apos;t exist. It might have been moved, deleted, or
            you may have mistyped the URL.
          </p>
        </div>

        {/* Navigation options */}
        <div className="flex items-center gap-3 flex-wrap">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-sm font-medium hover:bg-foreground/85 transition-colors"
          >
            Go home
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-sm font-medium hover:bg-muted/60 transition-colors"
          >
            View projects
          </Link>
        </div>

        {/* Subtle footer note */}
        <p className="mt-16 text-[0.7rem] font-mono text-muted-foreground/40 tracking-widest uppercase">
          Error 404 · ayushpatil.in
        </p>
      </main>
    </div>
  );
}
