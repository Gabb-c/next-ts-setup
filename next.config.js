const withImages = require('next-images');

// Enable inline images
module.exports = withImages({
  esModule: true,
  fileExtensions: ['jpg', 'jpeg', 'png', 'svg', 'gif', 'ico', 'webp', 'jp2', 'avif'],
});

// Bundle analyzer plugin
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer({});

// @ts-check

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
