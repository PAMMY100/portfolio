import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', "vercel.com"],
  },
};

export default nextConfig;
