import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Blog temporarily disabled — remove this redirect when re-enabling
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/",
        permanent: false,
      },
      {
        source: "/blog/:path*",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
