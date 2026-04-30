"use client";

import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export function ContactForm() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <h2 className="text-[0.8rem] uppercase tracking-[0.15em] text-muted-foreground mb-8">
        Contact
      </h2>

      <form className="space-y-5 max-w-md">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="w-full bg-transparent border-b border-border/50 py-2 text-[0.9rem] outline-none placeholder:text-muted-foreground/60 focus:border-foreground transition-colors duration-300"
        />

        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="w-full bg-transparent border-b border-border/50 py-2 text-[0.9rem] outline-none placeholder:text-muted-foreground/60 focus:border-foreground transition-colors duration-300"
        />

        <textarea
          name="message"
          rows={4}
          placeholder="Your message"
          required
          className="w-full bg-transparent border-b border-border/50 py-2 text-[0.9rem] outline-none placeholder:text-muted-foreground/60 focus:border-foreground transition-colors duration-300 resize-none"
        />

        <button
          type="submit"
          className="inline-flex items-center gap-2 text-[0.875rem] tracking-tight
           px-5 py-2.5
           bg-foreground text-background
           hover:gap-3.5
           transition-all duration-200"
          style={{ borderRadius: 0 }}
        >
          Send message
          <ArrowUpRightIcon size={13} />
        </button>
      </form>
    </motion.section>
  );
}
