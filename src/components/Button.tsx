"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  light: "bg-white text-black hover:bg-blue hover:text-white",
  dark: "bg-black text-white hover:bg-blue hover:text-white",
  transparency: "bg-white-24 text-white hover:bg-blue",
} as const;

type Variant = keyof typeof variants;

type Base = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
};

type ButtonProps =
  | (Base & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never })
  | (Base &
      Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "target" | "rel"> & {
        href: string;
      });

const isExternal = (href: string) =>
  href.startsWith("http://") ||
  href.startsWith("https://") ||
  href.startsWith("//");

export default function Button({
  variant = "light",
  className,
  children,
  href,
  disabled,
  ...rest
}: ButtonProps) {
  const style = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-4.5 lg:py-4 leading-[1em] tracking-[-0.01em] text-[1.063rem] font-medium transition-colors duration-300 ease-in disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
    variants[variant],
    className
  );

  if (href === undefined) {
    return (
      <button
        type="button"
        className={style}
        disabled={disabled}
        {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }

  const anchorRest = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
  if (isExternal(href)) {
    return (
      <a
        href={href}
        className={style}
        target="_blank"
        rel="noopener noreferrer"
        {...anchorRest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={style} {...anchorRest}>
      {children}
    </Link>
  );
}
