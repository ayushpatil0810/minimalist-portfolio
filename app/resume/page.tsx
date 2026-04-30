import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 font-sans">
      <ThemeToggle />
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-24 flex flex-col items-start gap-6 h-screen">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Portfolio
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Resume</h1>
        <div className="w-full grow rounded-lg overflow-hidden border border-border shadow-sm bg-muted/20">
          <iframe
            src="/resume.pdf"
            className="w-full h-full border-0"
            title="Resume PDF"
          />
        </div>
      </main>
    </div>
  );
}
