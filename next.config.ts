import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
      },
    ],
    
    unoptimized: true, 
  },
  // This helps Cloudflare handle the build output correctly
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;