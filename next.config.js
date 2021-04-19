const withImages = require('next-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')

// Enable inline images
module.exports = withImages({
  esModule: true,
  fileExtensions: ['jpg', 'jpeg', 'png', 'svg', 'gif', 'ico', 'webp', 'jp2', 'avif']
});

// Bundle analyzer plugin
module.exports = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

// Enable Webpack 5
module.exports = {
  future: {
    webpack5: true
  }
}
