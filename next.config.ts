import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
  },
  transpilePackages: [],
  compiler: {
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 95, 100],
  },
};

export default nextConfig;
