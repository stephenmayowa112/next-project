/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true,  
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, 'src'),
    };
    return config;
  },

  images: {  
    domains: ['picsum.photos'], }};

export default nextConfig;

























