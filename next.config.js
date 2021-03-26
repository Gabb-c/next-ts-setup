const withImages = require('next-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')

module.exports = withImages({
  esModule: true,
  fileExtensions: ['jpg', 'jpeg', 'png', 'svg', 'gif', 'ico', 'webp', 'jp2', 'avif']
});

module.exports = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});
