const nextConfig = {
  reactStrictMode: false,
  output: 'export', // Enables static export
  trailingSlash: true, // Adds a trailing slash to all routes
  images: {
    unoptimized: true, // Disables Next.js Image Optimization API
    domains: ['images.unsplash.com'], // Allowed image domains
  },
};

export default nextConfig;
