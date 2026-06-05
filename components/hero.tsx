import Image from "next/image";
import Link from "next/link";
import { socials } from "@/config/socials";
import { ReadCvLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { FadeIn } from "@/components/fade-in";
import { openToWork } from "@/config/experience";


export function Hero() {
  return (
    <FadeIn className="mb-24">
      <div className="flex items-center gap-6 mb-10">
        <div className="w-28 h-28 rounded-full overflow-hidden ring-1 ring-border/40">
          <Image
            src="https://avatars.githubusercontent.com/u/94798136?v=4"
            alt="Ayush Patil avatar"
            width={112}
            height={112}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className="flex flex-col">
          <span className="text-[2rem] tracking-tight">Ayush Patil</span>
          <div className="flex items-center gap-2 mt-2 text-muted-foreground">
            <span className="text-[1.1rem] font-semibold">
              Full Stack Engineer
            </span>
          </div>
          {openToWork.active && (
              <span className="text-[0.8rem] text-muted-foreground/60 mt-1.5 tracking-tight">
                {openToWork.label}
              </span>
            )}
        </div>
      </div>

      <h1 className="text-[2rem] md:text-[2.5rem] tracking-tight leading-[1.2] mb-8 font-medium">
        Mostly backend. Occasionally frontend.
        <br />
        <span className="text-muted-foreground">
          Always obsessed with system design.
        </span>
      </h1>

      {/* Social Icons */}
      <div className="flex items-center gap-3">
        {socials.map(({ href, icon: Icon, label }) => (
          <div key={label} className="relative group">
            <Link
              href={href}
              target="_blank"
              className="flex items-center justify-center w-12 h-12 
              text-muted-foreground
              transition-colors duration-300
              hover:text-foreground"
            >
              <span className="sr-only">{label}</span>
              <Icon size={24} weight="regular" />
            </Link>

            {/* Tooltip */}
            <span
              className="
              pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2
              whitespace-nowrap text-xs px-2 py-1 rounded-md
              bg-foreground text-background
              opacity-0 translate-y-1
              transition-all duration-200
              group-hover:opacity-100 group-hover:translate-y-0
            "
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8 flex gap-4 items-center">
        <Link
          href="/resume"
          className="inline-flex h-9 items-center justify-center bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90 disabled:pointer-events-none disabled:opacity-50"
        >
          View Resume
          <ReadCvLogoIcon className="ml-2" />
        </Link>
      </div>
    </FadeIn>
  );
}
