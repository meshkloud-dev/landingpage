"use client";

import dynamic from "next/dynamic";

export const SmoothScroll = dynamic(() => import("../SmoothScroll"), {
  ssr: false,
});
