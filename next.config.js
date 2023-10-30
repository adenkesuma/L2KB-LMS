/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    unoptimized: true,
    domains: [
      "https://api.pdkindonesia.com/",
      process.env.NODE_ENV === "development" ? "localhost" : "",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.pdkindonesia.com",
        port: "",
        pathname: "/**",
      },
    ],
    minimumCacheTTL: 0,
  },
};

module.exports = nextConfig;
