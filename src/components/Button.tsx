"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import CornerUpRightArrow from "./icons/CornerUpRightArrow";

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
  isArrow?: boolean;
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

function AnimatedLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="leading-inherit relative block overflow-hidden">
      {/* default */}
      <span
        className={cn(
          "block transition duration-200 ease-in motion-reduce:transition-none",
          "translate-y-0 opacity-100",
          "group-hover:-translate-y-full group-hover:opacity-0"
        )}
      >
        {children}
      </span>

      {/* same text (duplicate) */}
      <span
        aria-hidden
        className={cn(
          "absolute inset-0 block transition duration-200 ease-in motion-reduce:transition-none",
          "translate-y-full opacity-0",
          "group-hover:translate-y-0 group-hover:opacity-100"
        )}
      >
        {children}
      </span>
    </span>
  );
}

export default function Button({
  variant = "light",
  className,
  children,
  href,
  disabled,
  isArrow = false,
  ...rest
}: ButtonProps) {
  const style = cn(
    "group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-4.5 lg:py-4",
    "leading-[1em] tracking-[-0.01em] text-[1.063rem] font-medium",
    "transition-colors duration-200 ease-in",
    "disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
    variants[variant],
    className
  );

  const content = (
    <>
      {isArrow && <CornerUpRightArrow className="size-3" />}
      <AnimatedLabel>{children}</AnimatedLabel>
    </>
  );

  if (href === undefined) {
    return (
      <button
        type="button"
        className={style}
        disabled={disabled}
        {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
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
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={style} {...anchorRest}>
      {content}
    </Link>
  );
}
