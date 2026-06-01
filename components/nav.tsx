import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { ThemeToggle } from "@/components/theme-toggle";

export function Nav() {
  return (
    <FadeIn>
      <nav className="flex items-center justify-between py-6 w-full mb-8">
        <Link
          href="/"
          className="text-foreground tracking-tight hover:opacity-80 transition-opacity lowercase font-medium text-lg"
        >
          ayush patil
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="https://blog.ayushpatil.in"
            className="text-muted-foreground hover:text-foreground transition-colors lowercase text-lg"
          >
            blog
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </FadeIn>
  );
}
