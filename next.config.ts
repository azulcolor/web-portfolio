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
  deviceSizes: [400, 640, 728, 750, 1080, 1200, 1920],
  imageSizes: [64, 128, 256, 384],
},
};

export default nextConfig;
