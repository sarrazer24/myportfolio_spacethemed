import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

/** @type {import('next').NextConfig} */
const createNextConfig = (phase) => ({
  output: "standalone",
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
  allowedDevOrigins: ["10.2.0.2"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
});

export default createNextConfig;
