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
    deviceSizes: [390, 640, 750, 1080, 1200],
    imageSizes: [384, 640],
  },
};

export default nextConfig;
