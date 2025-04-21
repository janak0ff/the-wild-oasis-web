/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Required for static exports
    remotePatterns: [
      {
        protocol: "https",
        hostname: "impmvfdijimhxvvtlztv.supabase.co",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
  output: "export",
};

export default nextConfig;
