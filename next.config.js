/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'diyponmokjdkfdsflogb.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/wheels/**',
      },
    ],
  },
};

module.exports = nextConfig;
