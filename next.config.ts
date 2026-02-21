import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  // Optimize bundle
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['@chakra-ui/react', 'react-icons'],
  },

  // Turbopack config for Next.js 16
  turbopack: {
    // Chakra UI and emotion optimizations will be handled by Turbopack automatically
  },
};

export default nextConfig;
