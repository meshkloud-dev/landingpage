"use client";

import dynamic from "next/dynamic";

export const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), {
  ssr: false,
});
