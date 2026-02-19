"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Badge from "../Badge";
import Container from "../Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { type Image as ImageType } from "@/types";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type ProblemItem = {
  id: string;
  title: string;
  description: string;
  img: ImageType;
};

const problemItems: ProblemItem[] = [
  {
    id: "too-many-tools",
    title: "Too Many Tools. No Ownership.",
    description:
      "Work is scattered across apps, with no clear source of truth or accountability.",
    img: { src: "/images/problem/problem_1.webp", alt: "Problem" },
  },
  {
    id: "decisions-get-lost",
    title: "Decisions Get Lost",
    description:
      "RFIs, clarifications, and changes disappear, weakening design intent over time.",
    img: { src: "/images/problem/problem_2.webp", alt: "Problem" },
  },
  {
    id: "schedules-slip",
    title: "Schedules Slip",
    description:
      "Small, unseen delays compound until timelines break all at once.",
    img: { src: "/images/problem/problem_3.webp", alt: "Problem" },
  },
  {
    id: "busy-but-misaligned",
    title: "Busy, But Misaligned",
    description:
      "Teams stay active, but manual coordination replaces real progress.",
    img: { src: "/images/problem/problem_4.webp", alt: "Problem" },
  },
];

const Problem = () => {
  const isDesktop = useMediaQuery("lg");

  return isDesktop ? <ProblemDesktop /> : <ProblemMobile />;
};

export default Problem;

const ProblemDesktop = () => {
  return (
    <section className="pt-18 lg:pt-30">
      <Container>
        <ProblemSectionHeader />

        <div className="relative">
          <div className="absolute -top-15 left-1/2 z-0 h-full w-315 -translate-x-1/2">
            <Image
              src="/images/problem/problem_gray_dots.png"
              alt="Problem overlay"
              fill
              className="object-contain object-center"
              quality={80}
              sizes="1260px"
            />
            <Image
              src="/images/problem/problem_red_dots.png"
              alt="Problem background"
              fill
              className="z-10 object-contain object-center"
              sizes="1260px"
            />
          </div>
          <ul className="relative mt-14 grid grid-cols-4 gap-14.5">
            {problemItems.map((item) => (
              <li key={item.id}>
                <div className="relative max-w-53.5">
                  <div className="to-black-bg absolute bottom-0 left-0 h-32 w-px rounded-sm bg-linear-to-b from-transparent" />
                  <Image
                    src={item.img.src}
                    alt={item.img.alt}
                    width={214}
                    height={152}
                    quality={80}
                    className="h-auto w-full"
                  />
                </div>
                <div className="max-w-55 lg:mt-4">
                  <h3 className="text-lg leading-[1.2em] font-medium tracking-[-0.01em] capitalize lg:text-[1.375rem]">
                    {item.title}
                  </h3>
                  <p className="text-black-64 mt-2 text-[0.813rem] leading-[1.23em] max-lg:leading-[-0.01em] lg:mt-1 lg:text-[0.938rem] lg:leading-[1.47em]">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

const ProblemMobile = () => {
  const [open, setOpen] = useState<string>("0");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    watchDrag: false,
  });

  useEffect(() => {
    if (!emblaApi) return;
    const i = parseInt(open, 10);

    if (!Number.isNaN(i)) emblaApi.scrollTo(i);
  }, [open, emblaApi]);

  const onAccordionChange = (value: string | undefined) => {
    if (!value) return;
    setOpen(value);
  };

  return (
    <section className="pt-18 lg:pt-30">
      <Container>
        <ProblemSectionHeader />

        <div
          className="relative -mx-4 mt-8 overflow-hidden md:-mx-10"
          ref={emblaRef}
        >
          <div className="relative flex">
            <div
              className="absolute inset-0"
              style={{
                width: `calc(${problemItems.length} * 100vw + ${problemItems.length - 1} * 1rem)`,
                backgroundImage:
                  "url(/images/problem/problem_red_dots.webp), url(/images/problem/problem_gray_dots.webp)",
                backgroundRepeat: "repeat-x, repeat-x",
                backgroundSize: "auto 100%, auto 100%",
              }}
            />
            {problemItems.map((item) => (
              <div
                key={item.id}
                className="relative z-10 flex aspect-214/152 flex-[0_0_100%] items-center justify-center"
              >
                <Image
                  src={item.img.src}
                  alt={item.img.alt}
                  fill
                  className="h-full w-full object-contain drop-shadow-xs"
                  sizes="(max-width: 640px) 80vw, 214px"
                />
              </div>
            ))}
          </div>
        </div>

        <Accordion
          type="single"
          value={open}
          onValueChange={onAccordionChange}
          className="mt-8"
        >
          {problemItems.map((item, idx) => (
            <AccordionItem
              key={item.id}
              value={String(idx)}
              className={cn(
                "border-black-24 border-b transition-colors duration-300",
                open === String(idx) && "border-black"
              )}
            >
              <AccordionTrigger
                className={cn(
                  "text-black-64 max-w-md py-4 text-left text-[1.125rem] leading-[1em] tracking-[-0.01em] transition-colors duration-300 hover:no-underline",
                  open === String(idx) && "text-black"
                )}
                isChevronVisible={false}
              >
                <span className="flex items-center gap-2">
                  <ArrowRight className="size-4 shrink-0" />
                  {item.title}
                </span>
              </AccordionTrigger>
              <AccordionContent
                className={cn(
                  "text-black-64 max-w-lg text-left text-[0.813rem] leading-[1.23em] tracking-[-0.01em] transition-colors duration-300 hover:no-underline",
                  open === String(idx) && "text-black"
                )}
              >
                {item.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
};

const ProblemSectionHeader = () => (
  <div>
    <Badge variant="square-red">Problem</Badge>
    <h2 className="font-space-grotesk mt-4 max-w-175 text-2xl font-bold tracking-[-0.04em] lg:mt-6 lg:text-5xl lg:font-medium">
      Every project is slowed down by <br />
      one thing → fragmentation.
    </h2>
  </div>
);
