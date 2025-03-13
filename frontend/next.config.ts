import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    API_BASE_URL: "https://chatbot-raos.onrender.com",
  },
};

export default nextConfig;
