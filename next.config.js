/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dd20-109-198-100-196.ngrok-free.app',
        port: '',
        pathname: '/image/**',
      },
    ],
  },
};

module.exports = nextConfig;
