"use client";

import { Nav } from "@/components/nav";
import { SiteFooter } from "@/components/site-footer";
import { GoToTop } from "@/components/go-to-top";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { resumeURL } from "@/config/resume";
export default function ResumePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 font-sans flex flex-col">
      <Nav />
      <main className="max-w-4xl w-full mx-auto px-6 pt-8 pb-12 md:pb-24 flex flex-col gap-4 flex-1">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
        >
          <ArrowLeftIcon size={16} />
          Go back
        </button>

        <h1 className="text-3xl font-bold tracking-tight">Resume</h1>

        <div className="w-full rounded-lg overflow-hidden border border-border shadow-sm bg-muted/20" style={{ height: "calc(100vh - 220px)", minHeight: "600px" }}>
          <iframe
            src={resumeURL}
            className="w-full h-full border-0"
            title="Resume PDF"
            allow="autoplay"
          />
        </div>

        <SiteFooter />
      </main>
      <GoToTop />
    </div>
  );
}
