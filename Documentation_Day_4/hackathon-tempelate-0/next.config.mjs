/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.sanity.io',
      },
      {
        hostname: 'images.unsplash.com',
      },
      {
        hostname: 'bondars.com',
      },
      {
        hostname: 'imgdataserver.com',
      },
    ],
  },
  // typescript: {
  //   // Set this to false if you want production builds to abort if there are type errors
  //   ignoreBuildErrors: false,
  // },
  eslint: {
    // Set this to false if you want production builds to abort if there are lint errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
