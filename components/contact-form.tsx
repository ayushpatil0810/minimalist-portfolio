"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
};

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (loading) return;

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      toast.error("Contact service key is missing. Please contact via email.");
      return;
    }

    setLoading(true);

    const formData = new FormData(e.currentTarget);
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
        toast.success("Message sent successfully.");
        form.reset();
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

          <div className="flex flex-col gap-1">
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
              className="w-full bg-transparent border-b border-border/60 py-2 text-[0.875rem] outline-none placeholder:text-muted-foreground/40 focus:border-foreground transition-colors duration-200"
            />
          </div>

          <div className="flex flex-col gap-1">
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
              className="w-full bg-transparent border-b border-border/60 py-2 text-[0.875rem] outline-none placeholder:text-muted-foreground/40 focus:border-foreground transition-colors duration-200"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="contact-message" className="text-[0.65rem] font-mono uppercase tracking-[0.18em] text-muted-foreground/70">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              placeholder="What's on your mind?"
              required
              className="w-full bg-transparent border-b border-border/60 py-2 text-[0.875rem] outline-none placeholder:text-muted-foreground/40 focus:border-foreground transition-colors duration-200 resize-none"
            />
          </div>

          {/* Plan 002: transition-all → transition-colors (was animating all props off-GPU) */}
          {/* Plan 007 (missed opp): whileTap press feedback — every other CTA has it */}
          <motion.button
            type="submit"
            disabled={loading}
            whileTap={{ scale: loading ? 1 : 0.97 }}
            transition={{ type: "spring", bounce: 0, duration: 0.15 }}
            className="inline-flex items-center gap-2 text-[0.875rem] tracking-tight px-5 py-2.5 bg-foreground text-background hover:bg-foreground/85 transition-colors duration-200 disabled:opacity-50 font-medium"
          >
            {loading ? "Sending…" : "Send message"}
            <ArrowUpRightIcon size={13} />
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
}
