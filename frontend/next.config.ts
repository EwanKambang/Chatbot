// frontend/next.config.ts
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Disables image optimization for static export
  },
};

export default nextConfig;
