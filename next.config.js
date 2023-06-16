/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
      },
    ],
  },
  experimental: {
    reactRefresh: true,
  },
};

module.exports = nextConfig;
