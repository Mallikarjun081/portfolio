import { ArrowUp } from "lucide-react";
import { profile } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule">
      <div className="container-page flex flex-col gap-4 py-8 text-sm text-ink-2 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {profile.copyrightYear} {profile.name}
        </p>
        <a
          href="#main"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-ink"
        >
          Back to top
          <ArrowUp className="size-3.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
