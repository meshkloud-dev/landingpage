import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  pageExtensions: ["js", "jsx", "ts", "tsx"],

  images: {
    qualities: [25, 50, 80],
  },
};

export default nextConfig;
