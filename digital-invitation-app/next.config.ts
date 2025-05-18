import type { NextConfig } from "next";
const repoName = "wedding-invitation";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/wedding-invitation",
  assetPrefix: "/wedding-invitation/",
};

export default nextConfig;
