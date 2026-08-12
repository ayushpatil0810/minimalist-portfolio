import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ayushpatil.in"),
  title: {
    default: "Ayush Patil, Full Stack Engineer",
    template: "%s | Ayush Patil",
  },
  description:
    "Portfolio of Ayush Patil, a Full Stack Engineer exploring AI & Machine Learning. I build fast, scalable applications.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Ayush Patil",
    "Portfolio",
    "Full Stack Developer",
    "Full Stack Engineer",
    "Software Engineer",
    "Devops",
    "Backend Engineer",
    "Backend Developer",
    "AI/ML",
    "React",
    "Next.js",
    "Node.js",
  ],
  authors: [{ name: "Ayush Patil" }],
  creator: "Ayush Patil",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ayushpatil.in",
    title: "Ayush Patil, Full Stack Engineer",
    description:
      "Portfolio of Ayush Patil, a Full Stack Engineer exploring AI & Machine Learning.",
    siteName: "Ayush Patil Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Ayush Patil, Full Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Patil, Full Stack Engineer",
    description:
      "Portfolio of Ayush Patil, a Full Stack Engineer exploring AI & Machine Learning.",
    images: ["/opengraph-image"],
    creator: "@ayushpatil0810",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        syne.variable,
        dmSans.variable,
        jetbrainsMono.variable,
      )}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              className: "!bg-card !text-card-foreground !border !border-border !shadow-md !rounded-md !text-xs font-mono",
            }}
          />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
