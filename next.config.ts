import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/nextjs-design-responsive-nyit2026",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
