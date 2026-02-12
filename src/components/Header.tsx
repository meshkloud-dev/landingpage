"use client";

import Button from "./Button";
import Container from "./Container";
import CornerUpRightArrow from "./icons/CornerUpRightArrow";
import Logo from "./icons/Logo";
import Navigation from "./Navigation";
import { useHeader } from "@/providers/HeaderProvider";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Header = () => {
  const { isVisible, isMenuOpen } = useHeader();

  return (
    <header
      className={cn(
        "cubic-bezier(0.4, 0, 0.2, 1) fixed top-0 right-0 left-0 z-50 transition-transform duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <Container>
        <div className="bg-black-bg-48 mt-10 flex w-full items-center justify-between rounded-lg p-2 text-white">
          <Link href="#hero">
            <Logo />
          </Link>
          <Navigation className="hidden lg:block" />
          <div>
            <Button
              variant="light"
              className="px-3 py-2 text-[0.938rem] leading-[1.3em] tracking-[-0.01em] lg:px-4 lg:py-2.5"
            >
              <CornerUpRightArrow className="size-2.5" /> Join waitlist
            </Button>
            <Button
              variant="transparency"
              className="relative flex-col items-center justify-center gap-1 lg:hidden"
            >
              <span className="block h-px w-full bg-white transition-all duration-300 ease-in" />
              <span className="absolute top-1/2 left-1/2 block h-px w-full -translate-x-1/2 -translate-y-1/2 bg-white transition-all duration-300 ease-in" />
              <span className="block h-px w-full bg-white transition-all duration-300 ease-in" />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
