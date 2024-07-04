/** @type {import('next').NextConfig} */
export const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ['mongoose']
  },
  images: {
    domains: ['m.media-amazon.com']
  }
};

export default nextConfig;
