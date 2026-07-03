import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.2.117'],
  images:{
    remotePatterns: [new URL('https://images.microcms-assets.io/assets/**')]
  },
  compiler:{
    removeConsole: process.env.NODE_ENV === 'production',
  }
};

export default nextConfig;
