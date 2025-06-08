import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "codewithmosh.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
      {
        protocol: "https",
        hostname: "img-c.udemycdn.com",
      },
      {
        protocol: "https",
        hostname: "miro.medium.com",
      },
    ],
  },
  // Reduce favicon compilation time
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.cache = true;
    }
    return config;
  },
};

export default nextConfig;
