/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: [
      "@calcom/embed-react",
      "react-icons",
      "react-lottie-player",
    ],
  },
};

module.exports = nextConfig;
