import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-md">
      <nav className="max-w-2xl mx-auto px-6 flex items-center justify-between py-4">
        <Link
          href="/"
          className="text-foreground tracking-tight hover:opacity-80 transition-opacity lowercase font-medium text-lg"
        >
          ayush patil
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="https://blog.ayushpatil.in"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors lowercase text-lg"
          >
            blog
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
