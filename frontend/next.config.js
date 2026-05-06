/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://dclaw-contract-backend:8135/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
