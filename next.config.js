/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "euzdjprdvjwzsjgqxyfj.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;
