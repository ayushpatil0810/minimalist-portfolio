import { Nav } from "@/components/nav";
import { SiteFooter } from "@/components/site-footer";
import { GoToTop } from "@/components/go-to-top";
import { BackButton } from "@/components/back-button";
import { resumeURL } from "@/config/resume";
import { ArrowUpRightIcon, DownloadSimpleIcon } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "View my resume and work experience.",
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ayushpatil.in/resume",
    title: "Resume | Ayush Patil",
    description: "View my resume and work experience.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume | Ayush Patil",
    description: "View my resume and work experience.",
  },
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 font-sans flex flex-col">
      <Nav />
      <main className="max-w-4xl w-full mx-auto px-6 pt-8 pb-12 md:pb-24 flex flex-col gap-4 flex-1">
        <BackButton />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-3xl font-bold tracking-tight">Resume</h1>
          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              download="Ayush_Patil_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-foreground text-background text-xs font-medium rounded-md hover:bg-foreground/85 transition-colors"
            >
              <DownloadSimpleIcon size={14} />
              Download PDF
            </a>
            <a
              href={resumeURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 border border-border text-xs font-medium rounded-md hover:bg-muted/60 transition-colors"
            >
              Open in New Tab
              <ArrowUpRightIcon size={13} />
            </a>
          </div>
        </div>

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
