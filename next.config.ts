import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: process.env.VINEXT_EXPORT ? 'export' : undefined,
  trailingSlash: true,
};

export default nextConfig;
