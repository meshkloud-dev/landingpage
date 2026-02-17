"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Container from "../Container";
import Badge from "../Badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTriggerButton,
} from "../ui/accordion";
import { cn } from "@/lib/utils";
import { type Image as ImageType } from "@/types";

type MeshFeaturesItem = {
  id: string;
  title: string;
  description: string;
  img: ImageType;
};

const MESH_FEATURES_ITEMS: MeshFeaturesItem[] = [
  {
    id: "project-hub",
    title: "Project Hub",
    description: "The single place where your project actually comes together.",
    img: { src: "/images/features-tabs/tab_1.png", alt: "Overview view" },
  },
  {
    id: "schedule",
    title: "Schedule",
    description:
      "Tasks, dependencies, reviews. Beautifully integrated, discipline-aware, and always in sync.",
    img: { src: "/images/features-tabs/tab_2.png", alt: "Schedule view" },
  },
  {
    id: "decisions",
    title: "Decisions",
    description: "RFIs, clarifications, and changes tracked in context.",
    img: { src: "/images/features-tabs/tab_3.png", alt: "Decisions view" },
  },
  {
    id: "documents",
    title: "Documents",
    description: "Drawings and files connected to the work.",
    img: { src: "/images/features-tabs/tab_4.png", alt: "Documents view" },
  },
  {
    id: "progress-cost",
    title: "Progress & Cost",
    description: "Time, progress, and budget visibility in real time.",
    img: {
      src: "/images/features-tabs/tab_5.png",
      alt: "Progress & Cost view",
    },
  },
];

export default function MeshFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  const activeId = MESH_FEATURES_ITEMS[activeIndex]?.id ?? "";

  const bumpProgress = () => setProgressKey((k) => k + 1);
  const goToNext = () => {
    setActiveIndex((i) => (i + 1) % MESH_FEATURES_ITEMS.length);
    bumpProgress();
  };

  return (
    <section className="pt-8 pb-18 text-white lg:py-30">
      <Container>
        <Badge variant="square-light">Mesh features</Badge>

        <h2 className="font-space-grotesk mt-4 text-2xl font-bold tracking-[-0.04em] lg:mt-6 lg:text-5xl lg:font-medium">
          From Concept to Completion <br /> One Source of Truth.
        </h2>

        <p className="mt-4 max-w-130 text-[0.813rem] leading-[1.23em] max-lg:tracking-[-0.01em] lg:mt-6 lg:text-[1.063rem] lg:leading-[1.47em]">
          MeshKloud links your proposals, tasks, drawings, timesheets, and
          financials, keeping every decision connected, every update instant.
        </p>

        <div className="mt-8 grid gap-8 lg:mt-14 lg:grid-cols-[16.25rem_1fr] lg:gap-10">
          {/* Left: shadcn Accordion */}
          <div className="flex flex-col">
            <Accordion
              type="single"
              collapsible
              value={activeId}
              onValueChange={(nextId) => {
                const nextIndex = MESH_FEATURES_ITEMS.findIndex(
                  (x) => x.id === nextId
                );
                if (nextIndex < 0 || nextIndex === activeIndex) return;
                setActiveIndex(nextIndex);
                bumpProgress();
              }}
            >
              {MESH_FEATURES_ITEMS.map((item) => {
                const isActive = item.id === activeId;

                return (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="relative border-b-0"
                  >
                    <AccordionTriggerButton
                      className={cn(
                        "flex w-full items-center justify-start gap-1.5 py-4.5 text-left text-lg leading-[1em] font-medium tracking-[-0.01em] transition-colors hover:text-white lg:py-4 lg:text-[1.375rem]",
                        isActive ? "text-white" : "text-white-56"
                      )}
                    >
                      <ArrowRight
                        className={cn(
                          "size-4.5 shrink-0 overflow-hidden transition-[max-width] duration-300 ease-in",
                          isActive ? "max-w-4.5" : "max-w-0"
                        )}
                      />
                      {item.title}
                    </AccordionTriggerButton>

                    <AccordionContent className="pt-0 pb-4">
                      <p
                        className={cn(
                          "text-[0.813rem] leading-[1.23em] transition-colors max-lg:max-w-130 max-lg:tracking-[-0.01em] lg:text-[0.938rem] lg:leading-[1.47em]",
                          isActive ? "text-white" : "text-white-56"
                        )}
                      >
                        {item.description}
                      </p>

                      <SlideContent
                        img={item.img}
                        className="mt-2 block lg:hidden"
                      />
                    </AccordionContent>

                    {/* Animated underline */}
                    <div
                      className="bg-white-12 absolute right-0 bottom-0 left-0 h-px overflow-hidden rounded-full"
                      aria-hidden
                    >
                      {isActive && (
                        <span
                          key={progressKey}
                          className="block h-full w-full origin-left rounded-full bg-white"
                          style={{
                            animation:
                              "mesh-features-underline-fill 5s linear forwards",
                          }}
                          onAnimationEnd={(e) => {
                            if (
                              e.animationName === "mesh-features-underline-fill"
                            ) {
                              goToNext();
                            }
                          }}
                        />
                      )}
                    </div>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>

          {/* Right: Image slider */}
          <div className="border-white-12 bg-gray-dark relative hidden min-h-[240px] overflow-hidden rounded-xl border lg:block lg:min-h-[320px]">
            {MESH_FEATURES_ITEMS.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={item.id}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-300",
                    isActive
                      ? "relative z-10 opacity-100"
                      : "pointer-events-none opacity-0"
                  )}
                  aria-hidden={!isActive}
                >
                  <SlideContent img={item.img} />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

function SlideContent({
  img,
  className,
}: {
  img: ImageType;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "border-gray-dark relative aspect-358/252 overflow-hidden rounded-2xl border lg:aspect-740/520",
        className
      )}
    >
      <Image
        src={img.src}
        alt={img.alt}
        priority
        quality={80}
        fill
        sizes="(max-width: 768px) 100vw, 740px"
        className="object-cover"
      />
    </div>
  );
}
