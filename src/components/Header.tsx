"use client";

import Button from "./Button";
import Container from "./Container";
import CornerUpRightArrow from "./icons/CornerUpRightArrow";
import Logo from "./icons/Logo";
import Navigation from "./Navigation";
import HeaderMobile from "./HeaderMobile";
import { useHeader } from "@/providers/HeaderProvider";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Header = () => {
  const { isVisible, isMenuOpen } = useHeader();

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-transform duration-300 ease-in-out",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <Container>
        <div
          className={cn(
            "bg-black-bg-48 mt-10 flex w-full items-center justify-between rounded-lg p-2.5 text-white backdrop-blur-xs transition-colors duration-300 ease-in-out lg:p-2",
            isMenuOpen && "max-lg:bg-black-bg-80"
          )}
        >
          <div className="flex flex-1 lg:hidden">
            <HeaderMobile />
          </div>
          <div className="hidden w-full items-center justify-between lg:flex">
            <Link href="#hero">
              <Logo />
            </Link>
            <Navigation />
            <Button
              variant="light"
              className="px-3 py-2 text-[0.938rem] leading-[1.3em] tracking-[-0.01em] lg:px-4 lg:py-2.5"
            >
              <CornerUpRightArrow className="size-2.5" /> Join waitlist
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
