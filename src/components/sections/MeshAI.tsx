"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import Badge from "../Badge";
import Container from "../Container";
import DiamondDots from "../icons/DiamondDots";
import { gsap } from "@/lib/gsap";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const ANIM_DURATION = 0.6;
const STACK_SIZE = 4;

const MESH_ITEMS: { id: number; title: string }[] = [
  {
    id: 1,
    title:
      "Mesh AI predicts delays before they happen, keeping your projects on track ...",
  },
  {
    id: 2,
    title:
      "Writes proposals and drafts content that actually gets approved ...",
  },
  {
    id: 3,
    title:
      "Summarizes reports and extracts only the insights you need to act fast ...",
  },
  {
    id: 4,
    title:
      "Organizes drawings, docs, and plans so your team always knows what's next ...",
  },
];

function getStackPosition(cardIndex: number, frontIndex: number): number {
  return (cardIndex - frontIndex + STACK_SIZE) % STACK_SIZE;
}

function getStackStyles(stackPos: number, isDesktop: boolean) {
  const isFront = stackPos === 0;
  if (isFront) {
    return {
      y: 0,
      scale: 1,
      zIndex: STACK_SIZE,
      backdropFilter: "none",
      backgroundColor: "rgba(255,255,255,0.96)",
      borderWidth: 0,
      borderColor: "transparent",
    };
  }
  const offset = isDesktop ? stackPos * 24 : stackPos * 12; // Stack offset in pixels
  const scale = 1 - stackPos * 0.06; // Scale step
  return {
    y: -offset,
    scale,
    zIndex: STACK_SIZE - stackPos,
    backdropFilter: "blur(28px)",
    backgroundColor: "rgba(255,255,255,0.12)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.5)",
    boxShadow:
      "0 12px 40px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.22)",
  };
}

const MeshAI = () => {
  const [frontIndex, setFrontIndex] = useState(0);
  const isDesktop = useMediaQuery("lg");

  const prevFrontRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const wrappersRef = useRef<(HTMLDivElement | null)[]>([]);
  const innersRef = useRef<(HTMLButtonElement | null)[]>([]);
  const iconWrappersRef = useRef<(HTMLSpanElement | null)[]>([]);

  const animateFrontIcon = useCallback((nextFront: number) => {
    const icons = iconWrappersRef.current.filter(Boolean) as HTMLSpanElement[];
    if (icons.length !== STACK_SIZE) return;

    gsap.killTweensOf(icons);
    gsap.set(icons, {
      rotation: 0,
      transformOrigin: "50% 50%",
      force3D: true,
    });

    const el = iconWrappersRef.current[nextFront];
    if (!el) return;

    gsap.to(el, {
      keyframes: [
        { rotation: 200, duration: 0.45, ease: "power2.out" },
        { rotation: 180, duration: 0.2, ease: "power1.out" },
      ],
    });
  }, []);

  const goNext = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    const prev = prevFrontRef.current;
    const next = (prev + 1) % STACK_SIZE;

    setFrontIndex(next);

    const wrappers = wrappersRef.current.filter(Boolean) as HTMLDivElement[];
    const inners = innersRef.current.filter(Boolean) as HTMLButtonElement[];

    if (wrappers.length !== STACK_SIZE || inners.length !== STACK_SIZE) {
      isAnimatingRef.current = false;
      prevFrontRef.current = next;
      return;
    }

    const tl = gsap.timeline({
      defaults: { duration: ANIM_DURATION, ease: "power2.inOut" },
      onComplete: () => {
        prevFrontRef.current = next;
        isAnimatingRef.current = false;
        animateFrontIcon(next);
      },
    });

    for (let i = 0; i < STACK_SIZE; i++) {
      const fromStyle = getStackStyles(getStackPosition(i, prev), isDesktop);
      const toStyle = getStackStyles(getStackPosition(i, next), isDesktop);

      tl.fromTo(
        wrappers[i],
        { y: fromStyle.y, zIndex: fromStyle.zIndex },
        { y: toStyle.y, zIndex: toStyle.zIndex },
        i === 0 ? 0 : "<"
      );

      tl.fromTo(
        inners[i],
        {
          backdropFilter: fromStyle.backdropFilter,
          backgroundColor: fromStyle.backgroundColor,
          borderWidth: fromStyle.borderWidth,
          borderColor: fromStyle.borderColor,
        },
        {
          backdropFilter: toStyle.backdropFilter,
          backgroundColor: toStyle.backgroundColor,
          borderWidth: toStyle.borderWidth,
          borderColor: toStyle.borderColor,
        },
        i === 0 ? 0 : "<"
      );
    }
  }, [animateFrontIcon, isDesktop]);

  useEffect(() => {
    const wrappers = wrappersRef.current.filter(Boolean) as HTMLDivElement[];
    const inners = innersRef.current.filter(Boolean) as HTMLButtonElement[];
    const icons = iconWrappersRef.current.filter(Boolean) as HTMLSpanElement[];

    if (
      wrappers.length !== STACK_SIZE ||
      inners.length !== STACK_SIZE ||
      icons.length !== STACK_SIZE
    )
      return;

    for (let i = 0; i < STACK_SIZE; i++) {
      const s = getStackStyles(getStackPosition(i, 0), isDesktop);
      gsap.set(wrappers[i], { y: s.y, zIndex: s.zIndex });
      gsap.set(inners[i], {
        backdropFilter: s.backdropFilter,
        backgroundColor: s.backgroundColor,
        borderStyle: "solid",
        borderWidth: s.borderWidth,
        borderColor: s.borderColor,
      });
    }

    gsap.set(icons, { rotation: 0, transformOrigin: "50% 50%", force3D: true });
    animateFrontIcon(0);
  }, [animateFrontIcon, isDesktop]);

  useEffect(() => {
    intervalRef.current = setInterval(goNext, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [goNext]);

  return (
    <section className="relative mt-18 pt-18 pb-35.5 text-white lg:mt-30 lg:pt-30 lg:pb-67">
      <Image
        src="/images/noise.png"
        alt="Noise"
        fill
        priority
        quality={80}
        className="pointer-events-none absolute inset-0 z-1 object-cover opacity-40"
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <Badge variant="square-light">Mesh AI</Badge>
          <h2 className="font-space-grotesk mt-4 max-w-175 text-2xl font-bold tracking-[-0.04em] lg:mt-6 lg:text-5xl lg:font-medium">
            Make It Magical{" "}
            <span className="inline-block">
              <span className="flex-center">
                (<DiamondDots />)
              </span>
            </span>{" "}
            Intelligence woven into every workflow.
          </h2>
          <p className="mt-4 max-w-lg text-[0.813rem] leading-[1.23em] max-lg:tracking-[-0.01em] lg:mt-6 lg:text-[1.063rem] lg:leading-[1.47em]">
            Quietly powerful. Always invisible. Always helping.
          </p>
        </div>

        <div className="mt-15.5 lg:mt-31">
          <div
            className="relative mx-auto w-full overflow-visible max-lg:max-w-120"
            style={{ perspective: "800px" }}
          >
            {MESH_ITEMS.map((item, index) => {
              const stackPos = getStackPosition(index, frontIndex);
              const { scale } = getStackStyles(stackPos, isDesktop);

              return (
                <div
                  key={item.id}
                  ref={(el) => {
                    wrappersRef.current[index] = el;
                  }}
                  className="absolute inset-x-0 top-0 flex origin-bottom justify-center"
                  style={{
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <button
                    ref={(el) => {
                      innersRef.current[index] = el;
                    }}
                    type="button"
                    onClick={goNext}
                    className="flex w-full items-center gap-4 rounded-full px-5 py-[0.938rem] lg:gap-8 lg:px-10 lg:py-[1.969rem]"
                    style={{
                      transform: `scale(${scale})`,
                      transformOrigin: "center bottom",
                      transition: `transform ${ANIM_DURATION}s cubic-bezier(0.4, 0, 0.2, 1)`,
                    }}
                  >
                    <span
                      ref={(el) => {
                        iconWrappersRef.current[index] = el;
                      }}
                      className="inline-flex shrink-0 will-change-transform"
                    >
                      <DiamondDots className="text-blue size-5 lg:size-8" />
                    </span>

                    <h3 className="text-left text-[0.813rem] leading-[1em] tracking-[-0.01em] text-black lg:text-[1.375rem]">
                      {item.title}
                    </h3>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-full max-h-80 overflow-hidden lg:max-h-110.5">
        <Image
          src="/images/mesh_ai_bg.png"
          alt="Mesh AI background"
          fill
          className="object-cover"
          quality={80}
          sizes="100vw"
        />
      </div>
    </section>
  );
};

export default MeshAI;
