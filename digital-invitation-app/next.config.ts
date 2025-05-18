import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/wedding-invitation",
  assetPrefix: "/wedding-invitation/digital-invitation-app/public",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
