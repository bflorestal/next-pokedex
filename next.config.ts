import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pokeapi.co",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: ["./styles"],
  },
};

export default nextConfig;
