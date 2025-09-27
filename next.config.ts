import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Add the hostname of your Supabase storage
  images: {
    // Note: The value should be just the hostname, without 'https://' or trailing slashes.
    domains: ['qvkxzcskfhxoctkkkvvx.supabase.co'], 
  },
  // If you are using Next.js 13 or later, you might prefer the remotePatterns property:
  /*
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'qvkxzcskfhxoctkkkvvx.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**', // This ensures security and specificity
      },
    ],
  },
  */
};

export default nextConfig;