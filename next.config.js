/** @type {import('next').NextConfig} */
const nextConfig = {
  runtime: "edge",
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["https://api.pdkindonesia.com/"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.pdkindonesia.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
