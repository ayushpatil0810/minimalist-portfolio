import Link from "next/link";
import { socials } from "@/config/socials";
import { FooterAnimation } from "@/components/footer-animation";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <FooterAnimation className="pt-10 mt-12 border-t border-border/50">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        {/* Left: brand + copyright */}
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium tracking-tight lowercase font-mono">
            ayush patil
          </span>
          <span className="text-[0.7rem] text-muted-foreground/60">
            © {year}, Built with Next.js & Framer Motion
          </span>
        </div>

        {/* Right: social links */}
        <div className="flex items-center gap-5">
          {socials.slice(0, 4).map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="text-[0.72rem] text-muted-foreground hover:text-foreground transition-colors duration-200 lowercase font-mono tracking-wide"
            >
              {social.label.split(" ")[0]}
            </Link>
          ))}
        </div>
      </div>
    </FooterAnimation>
  );
}
