"use client";

import { useEffect, useRef, useState } from "react";
import { SITE_CONFIG } from "@/lib/constants";

const LABELS = {
  idle: "Copy address",
  copied: "Address copied",
  failed: "Copy failed",
};

export function CopyEmail({ className = "" }: { className?: string }) {
  const [state, setState] = useState<keyof typeof LABELS>("idle");
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(SITE_CONFIG.email);
      setState("copied");
    } catch {
      setState("failed");
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), 2000);
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={`inline-flex min-h-11 items-center rounded-full border border-current/30 px-4 text-[15px] font-medium transition-colors hover:border-current ${className}`}
    >
      <span aria-live="polite">{LABELS[state]}</span>
    </button>
  );
}
