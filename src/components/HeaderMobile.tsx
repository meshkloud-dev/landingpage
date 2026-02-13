"use client";

import Link from "next/link";
import Button from "./Button";
import CornerUpRightArrow from "./icons/CornerUpRightArrow";
import Logo from "./icons/Logo";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTriggerButton,
} from "@/components/ui/accordion";
import navigation from "@/variables/navigation";
import { cn } from "@/lib/utils";
import { useHeader } from "@/providers/HeaderProvider";

const HeaderMobile = () => {
  const { isMenuOpen, closeMenu, toggleMenu } = useHeader();

  return (
    <Accordion
      type="single"
      collapsible
      value={isMenuOpen ? "menu" : ""}
      onValueChange={toggleMenu}
      className="w-full"
    >
      <AccordionItem value="menu">
        <AccordionHeader className="w-full items-center justify-between py-0">
          <Link href="#hero" onClick={closeMenu}>
            <Logo className="h-5 w-33" />
          </Link>
          <div className="flex items-center gap-1">
            <Button
              variant="light"
              className={cn(
                "px-4 py-2 text-[0.938rem] leading-[1.3em] tracking-[-0.01em] transition-all duration-200",
                isMenuOpen && "pointer-events-none opacity-0"
              )}
            >
              <CornerUpRightArrow className="size-2.5" /> Join
            </Button>
            <AccordionTriggerButton className="bg-white-12 flex w-10 flex-col items-center justify-center gap-1 self-stretch rounded-lg p-2">
              <span
                className={cn(
                  "block h-px w-5 bg-white transition-all duration-300",
                  isMenuOpen && "translate-y-[5px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "block h-px w-5 bg-white transition-all duration-300",
                  isMenuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-px w-5 bg-white transition-all duration-300",
                  isMenuOpen && "-translate-y-[5px] -rotate-45"
                )}
              />
            </AccordionTriggerButton>
          </div>
        </AccordionHeader>
        <AccordionContent className="overflow-visible border-0 p-2.5">
          <div>
            <nav>
              <ul className="flex flex-col">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="hover:text-white-56 border-white-12 block border-b py-3 text-lg tracking-[-0.01em] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Button
              variant="light"
              href="#waitlist"
              className="mt-8 w-full px-2 py-4.5 text-[0.938rem]"
              onClick={closeMenu}
            >
              <CornerUpRightArrow className="size-3" /> Join Early Access
            </Button>
            <p className="text-white-56 mt-3 text-center text-[0.813rem] leading-[1em]">
              * Launching soon / No spam / Cancel anytime
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default HeaderMobile;
