import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.2.117'],
  images:{
    remotePatterns: [new URL('https://images.microcms-assets.io/assets/**')]
  },
};

export default nextConfig;
