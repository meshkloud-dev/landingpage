"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Badge from "../Badge";
import Container from "../Container";
import { cn } from "@/lib/utils";
import Fade from "embla-carousel-fade";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    id: "architects",
    title: "Architects",
    description:
      "Protect your design intent → all the way to site. MeshKloud keeps architectural decisions clear and connected, so RFIs, approvals, and changes stay true to the design.",
    image: "/images/builders/architects.png",
  },
  {
    id: "contractors",
    title: "Contractors",
    description:
      "Build with clarity → from plan to site. MeshKloud keeps schedules, RFIs, and field decisions connected in real time, so teams move faster, reduce rework, and keep projects safe and on track.",
    image: "/images/builders/contractors.png",
  },
  {
    id: "developers",
    title: "Developers",
    description:
      "See the whole project → without chasing updates. MeshKloud provides real-time visibility into progress, risk, and decisions across every phase, helping protect timelines, budgets, and outcomes with confidence.",
    image: "/images/builders/developers.png",
  },
  {
    id: "owners",
    title: "Owners",
    description:
      "Confidence at every stage of delivery. MeshKloud aligns teams, documents decisions, and makes progress transparent, giving owners clarity and trust throughout the full project lifecycle.",
    image: "/images/builders/owners.png",
  },
];

const Builders = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { containScroll: false, loop: true, watchDrag: false },
    [Fade()]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", () =>
      setSelectedIndex(emblaApi.selectedScrollSnap())
    );
  }, [emblaApi]);

  return (
    <section className="pt-18 lg:pt-30">
      <Container>
        <div>
          <Badge variant="square-dark">Built for builders</Badge>
          <h2 className="font-space-grotesk mt-4 max-w-175 text-2xl font-bold tracking-[-0.04em] lg:mt-6 lg:text-5xl lg:font-medium">
            One community. <br />
            One platform. Infinite impact.
          </h2>
          <p className="mt-4 max-w-xl text-left text-[0.813rem] leading-[1.23em] max-lg:tracking-[-0.01em] lg:mt-6 lg:text-[1.063rem] lg:leading-[1.47em]">
            Join thousands of early adopters shaping the future of AEC
            technology, exploring new ideas, and building smarter workflows
            together
          </p>
        </div>
      </Container>

      <div className="relative mt-8 min-h-dvh w-full overflow-hidden text-white lg:mt-14">
        <div ref={emblaRef} className="h-full overflow-hidden">
          <div className="flex h-full">
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="relative min-h-dvh min-w-0 flex-[0_0_100%]"
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />

                <div
                  className="absolute inset-0 bg-linear-to-b from-transparent to-black/72"
                  aria-hidden
                />

                <Container className="absolute inset-0 flex flex-col justify-end py-10 lg:py-14">
                  <div className="flex h-full w-full flex-col justify-end rounded-lg border border-white p-4 lg:p-10">
                    <h3 className="font-space-grotesk text-2xl leading-[1.17em] font-bold tracking-[-0.04em] text-shadow-[0_6px_16px_rgba(15,15,17,0.16)] lg:text-[3rem] lg:leading-[1.08em]">
                      {slide.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-[0.813rem] leading-[1.47] text-shadow-[0_4px_10px_rgba(15,15,17,0.4)] lg:mt-3 lg:text-[1.063rem]">
                      {slide.description}
                    </p>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2 max-lg:w-screen lg:mt-27 lg:gap-4">
                    <div className="no-scrollbar flex gap-1 max-lg:overflow-x-auto max-lg:pr-20 max-sm:pr-8 lg:w-full lg:max-w-3xl lg:flex-wrap lg:gap-2">
                      {slides.map((s, i) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => scrollTo(i)}
                          className={cn(
                            "group flex items-center gap-2 rounded-sm px-3 py-2.5 font-mono text-[0.813rem] transition-colors duration-300 ease-in lg:text-[0.938rem]",
                            selectedIndex === i
                              ? "bg-black text-white"
                              : "hover:bg-blue bg-white text-black hover:text-white"
                          )}
                        >
                          <span
                            className={cn(
                              "block size-1.5 rounded-xs bg-white transition-colors duration-300 ease-in",
                              selectedIndex === i
                                ? "bg-white"
                                : "bg-black group-hover:bg-white"
                            )}
                          />
                          {s.title}
                        </button>
                      ))}
                    </div>
                    <div className="hidden gap-2 lg:flex">
                      <button
                        type="button"
                        onClick={scrollPrev}
                        className="group relative flex items-center justify-center overflow-hidden rounded-sm bg-white px-3 py-2.5 text-black transition-colors duration-300 ease-in hover:bg-gray-300"
                      >
                        <span className="relative block">
                          <ArrowLeft className="size-5 translate-x-0 opacity-100 transition duration-200 ease-in group-hover:-translate-x-full group-hover:opacity-0" />

                          <ArrowLeft className="absolute inset-0 size-5 translate-x-full opacity-0 transition duration-200 ease-in group-hover:translate-x-0 group-hover:opacity-100" />
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={scrollNext}
                        className="group flex items-center justify-center rounded-sm bg-white px-3 py-2.5 text-black transition-colors duration-300 ease-in hover:bg-gray-300"
                      >
                        <span className="relative block">
                          <ArrowRight className="size-5 translate-x-0 opacity-100 transition duration-200 ease-in group-hover:-translate-x-full group-hover:opacity-0" />

                          <ArrowRight className="absolute inset-0 size-5 translate-x-full opacity-0 transition duration-200 ease-in group-hover:translate-x-0 group-hover:opacity-100" />
                        </span>
                      </button>
                    </div>
                  </div>
                </Container>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Builders;
