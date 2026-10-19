"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@phosphor-icons/react";

export function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 bg-muted/15 hover:bg-muted/35 text-xs text-muted-foreground hover:text-foreground transition-colors w-fit font-mono cursor-pointer"
    >
      <ArrowLeftIcon size={14} />
      go back
    </button>
  );
}
