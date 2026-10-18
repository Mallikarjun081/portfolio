import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary";

const base =
  "inline-flex h-11 items-center justify-center gap-2 px-5 text-[15px] font-medium transition-colors duration-200";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-paper hover:bg-accent",
  secondary: "border border-ink/80 text-ink hover:bg-ink hover:text-paper",
};

type Props = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({ variant = "primary", className = "", ...props }: Props) {
  return <Link className={`${base} ${variants[variant]} ${className}`} {...props} />;
}

type AnchorProps = ComponentProps<"a"> & { variant?: Variant };

/** For files and external URLs, where next/link adds nothing. */
export function ButtonAnchor({ variant = "primary", className = "", ...props }: AnchorProps) {
  return <a className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
