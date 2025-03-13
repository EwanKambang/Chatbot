// frontend/next.config.ts
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export
  images: {
    unoptimized: true, // Disables image optimization for static export
  },
};

export default nextConfig;
