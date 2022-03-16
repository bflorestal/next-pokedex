/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputStandalone: true,
  },
  reactStrictMode: true,
};

const path = require("path");

module.exports = {
  images: {
    domains: ["raw.githubusercontent.com"],
  },
  nextConfig,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
