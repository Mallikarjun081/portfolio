"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Clipboard can be blocked (e.g. insecure context); the mailto link still works.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-9 items-center gap-2 border border-rule px-3 text-sm text-ink-2 transition-colors hover:border-ink hover:text-ink"
    >
      {copied ? (
        <Check className="size-4 text-accent" aria-hidden="true" />
      ) : (
        <Copy className="size-4" aria-hidden="true" strokeWidth={1.75} />
      )}
      <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
    </button>
  );
}
