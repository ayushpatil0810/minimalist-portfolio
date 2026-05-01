"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  type Web3FormsResponse = {
    success?: boolean;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (loading) return;

    setLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY as string,
    );
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
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err) {
      toast.error("Network error. Please try again.");
    }

    setLoading(false);
  };

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

      <form onSubmit={handleSubmit} className="space-y-5 max-w-md">
        {/* Honeypot */}
        <input type="checkbox" name="botcheck" style={{ display: "none" }} />

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
          disabled={loading}
          className="inline-flex items-center gap-2 text-[0.875rem] tracking-tight px-5 py-2.5 bg-foreground text-background hover:gap-3.5 transition-all duration-200 disabled:opacity-50"
          style={{ borderRadius: 0 }}
        >
          {loading ? "Sending..." : "Send message"}
          <ArrowUpRightIcon size={13} />
        </button>
      </form>
    </motion.section>
  );
}
