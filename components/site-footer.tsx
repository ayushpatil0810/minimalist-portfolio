import Link from "next/link";
import { socials } from "@/config/socials";
import { FooterAnimation } from "@/components/footer-animation";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";

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
            © {year}, Built by Ayush Patil
          </span>
        </div>

        {/* Right: social links */}
        <div className="flex items-center gap-2 flex-wrap">
          {socials.slice(0, 4).map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group px-3 py-1 rounded-full border border-border/40 hover:border-border hover:bg-muted/40 text-[0.75rem] text-muted-foreground hover:text-foreground transition-all duration-200 flex items-center lowercase font-mono"
            >
              <span>{social.label.split(" ")[0]}</span>
              <span className="w-0 group-hover:w-3 opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] inline-flex items-center group-hover:ml-1">
                <ArrowUpRightIcon
                  size={11}
                  className="shrink-0 -translate-x-1 group-hover:translate-x-0 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </FooterAnimation>
  );
}
