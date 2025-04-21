/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // basePath: "/portfolio-page",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
