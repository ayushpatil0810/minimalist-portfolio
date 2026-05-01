import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayush Patil - Full Stack Software Developer",
  description:
    "Portfolio of Ayush Patil, a Full Stack Engineer exploring AI & Machine Learning. I build fast, scalable applications.",
  keywords: [
    "Ayush Patil",
    "Portfolio",
    "Full Stack Developer",
    "Software Engineer",
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
    title: "Ayush Patil - Full Stack Software Developer",
    description:
      "Portfolio of Ayush Patil, a Full Stack Engineer exploring AI & Machine Learning.",
    siteName: "Ayush Patil Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Patil - Full Stack Software Developer",
    description:
      "Portfolio of Ayush Patil, a Full Stack Engineer exploring AI & Machine Learning.",
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
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
