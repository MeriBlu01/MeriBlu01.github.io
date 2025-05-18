import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/wedding-invitation",
  assetPrefix: "/wedding-invitation/",
  trailingSlash: true,
};

export default nextConfig;
