"use client";

import { Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { nav, profile } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 48rem)");
    const onResize = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper">
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-serif text-[19px] leading-none tracking-tight"
          onClick={() => setOpen(false)}
        >
          {profile.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7 text-[15px]">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-ink-2 transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={profile.resume.href}
            download={profile.resume.fileName}
            className="inline-flex h-9 items-center gap-2 border border-ink/80 px-3.5 text-sm font-medium transition-colors hover:bg-ink hover:text-paper"
          >
            <Download className="size-4" aria-hidden="true" strokeWidth={1.75} />
            Resume
          </a>
        </nav>

        <button
          type="button"
          className="-mr-2 inline-flex size-10 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        id={menuId}
        hidden={!open}
        className="border-t border-rule bg-paper md:hidden"
      >
        <nav aria-label="Mobile" className="container-page py-4">
          <ul className="divide-y divide-rule">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-3.5 font-serif text-2xl"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={profile.resume.href}
            download={profile.resume.fileName}
            className="mt-4 mb-2 flex h-11 w-full items-center justify-center gap-2 bg-ink text-[15px] font-medium text-paper"
          >
            <Download className="size-4" aria-hidden="true" strokeWidth={1.75} />
            Download Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
