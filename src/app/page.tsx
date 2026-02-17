"use client";

import { useRef } from "react";
import Hero from "@/components/sections/Hero";
import MeshFeatures from "@/components/sections/MeshFeatures";
import Problem from "@/components/sections/Problem";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";

export default function Home() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const meshSectionRef = useRef<HTMLDivElement>(null);
  const problemSectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (
        !overlayRef.current ||
        !meshSectionRef.current ||
        !problemSectionRef.current
      )
        return;
      gsap.fromTo(
        overlayRef.current,
        { opacity: 1 },
        {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: meshSectionRef.current,
            start: "70% top",
            endTrigger: problemSectionRef.current,
            end: "top 10%",
            scrub: 0.8,
          },
        }
      );
    },
    { scope: wrapperRef, dependencies: [] }
  );

  return (
    <div>
      <Hero />
      <div ref={wrapperRef} className="relative">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-white"
          aria-hidden
        />
        <div
          ref={overlayRef}
          className="bg-black-bg pointer-events-none absolute inset-0 -z-10 will-change-[opacity]"
          aria-hidden
        />
        <div ref={meshSectionRef}>
          <MeshFeatures />
        </div>
        <div ref={problemSectionRef}>
          <Problem />
        </div>
      </div>
    </div>
  );
}
