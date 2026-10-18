"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
};

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorField, setErrorField] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (loading) return;

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      toast.error("Contact service key is missing. Please contact via email.");
      return;
    }

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name) {
      setErrorField("name");
      toast.error("Please enter your name");
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorField("email");
      toast.error("Please enter a valid email address");
      return;
    }
    if (!message) {
      setErrorField("message");
      toast.error("Please enter a message");
      return;
    }

    setLoading(true);

    formData.append("access_key", accessKey);
    formData.append("subject", "New Contact from Portfolio");
    formData.append("from_name", "Portfolio Contact");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      let data: Web3FormsResponse = {};
      try {
        data = await res.json();
      } catch {}

      if (res.ok && data.success === true) {
        setIsSuccess(true);
        toast.success("Message sent successfully.");
        form.reset();
        setTimeout(() => setIsSuccess(false), 3000);
      } else {
        toast.error(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    }

    setLoading(false);
  };

  return (
    // Plan 004: spring scroll-reveal (was plain tween duration:0.5)
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", bounce: 0, duration: 0.5 }}
      className="mb-20"
    >
      <div className="flex items-end gap-3 mb-10">
        <h2 className="text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground/60 font-mono">
          Get in Touch
        </h2>
        <div className="flex-1 border-t border-border/40" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left: copy */}
        <div className="flex flex-col gap-3">
          <p className="text-[0.95rem] leading-relaxed text-foreground/80">
            I&apos;m currently open to interesting projects and conversations.
            Whether you have a question, an opportunity, or just want to say hi.
            My inbox is open.
          </p>
          <a
            href="mailto:ayushppatil2006@gmail.com"
            className="text-[0.82rem] text-muted-foreground hover:text-foreground transition-colors font-mono underline underline-offset-4 decoration-border"
          >
            ayushppatil2006@gmail.com
          </a>
        </div>

        {/* Right: form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Honeypot */}
          <input type="checkbox" name="botcheck" style={{ display: "none" }} />

          <motion.div
            animate={errorField === "name" ? { x: [0, -6, 6, -4, 4, -2, 2, 0] } : { x: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={() => { if (errorField === "name") setErrorField(null); }}
            className="flex flex-col gap-1"
          >
            <label htmlFor="contact-name" className="text-[0.65rem] font-mono uppercase tracking-[0.18em] text-muted-foreground/70">
              Name
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              autoComplete="name"
              placeholder="Your name"
              required
              className={cn(
                "w-full bg-transparent border-b py-2 text-[0.875rem] outline-none placeholder:text-muted-foreground/40 transition-colors duration-200",
                errorField === "name" ? "border-red-500/80 text-red-500" : "border-border/60 focus:border-foreground"
              )}
            />
          </motion.div>

          <motion.div
            animate={errorField === "email" ? { x: [0, -6, 6, -4, 4, -2, 2, 0] } : { x: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={() => { if (errorField === "email") setErrorField(null); }}
            className="flex flex-col gap-1"
          >
            <label htmlFor="contact-email" className="text-[0.65rem] font-mono uppercase tracking-[0.18em] text-muted-foreground/70">
              Email
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
              className={cn(
                "w-full bg-transparent border-b py-2 text-[0.875rem] outline-none placeholder:text-muted-foreground/40 transition-colors duration-200",
                errorField === "email" ? "border-red-500/80 text-red-500" : "border-border/60 focus:border-foreground"
              )}
            />
          </motion.div>

          <motion.div
            animate={errorField === "message" ? { x: [0, -6, 6, -4, 4, -2, 2, 0] } : { x: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={() => { if (errorField === "message") setErrorField(null); }}
            className="flex flex-col gap-1"
          >
            <label htmlFor="contact-message" className="text-[0.65rem] font-mono uppercase tracking-[0.18em] text-muted-foreground/70">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              placeholder="What's on your mind?"
              required
              className={cn(
                "w-full bg-transparent border-b py-2 text-[0.875rem] outline-none placeholder:text-muted-foreground/40 transition-colors duration-200 resize-none",
                errorField === "message" ? "border-red-500/80 text-red-500" : "border-border/60 focus:border-foreground"
              )}
            />
          </motion.div>

          <motion.button
            type="submit"
            disabled={loading || isSuccess}
            whileTap={{ scale: loading ? 1 : 0.97 }}
            transition={{ type: "spring", bounce: 0, duration: 0.15 }}
            className={cn(
              "group inline-flex items-center gap-2 text-[0.875rem] tracking-tight px-5 py-2.5 transition-all duration-300 disabled:opacity-90 font-medium cursor-pointer",
              isSuccess
                ? "bg-emerald-600 text-white dark:bg-emerald-500 dark:text-zinc-950"
                : "bg-foreground text-background hover:bg-foreground/85"
            )}
          >
            {isSuccess ? (
              <>
                <motion.svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 stroke-current fill-none stroke-[2.5]"
                  initial={{ rotate: -80, scale: 0.6 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: "spring", bounce: 0.35, duration: 0.5 }}
                >
                  <motion.path
                    d="M4 12.5l5.5 5.5L20 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                  />
                </motion.svg>
                <span>Message sent</span>
              </>
            ) : loading ? (
              <span>Sending…</span>
            ) : (
              <>
                <span>Send message</span>
                <ArrowUpRightIcon
                  size={13}
                  className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </>
            )}
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
}
