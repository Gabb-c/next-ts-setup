const withImages = require('next-images');

// Enable inline images
module.exports = withImages({
  esModule: true,
  fileExtensions: ['jpg', 'jpeg', 'png', 'svg', 'gif', 'ico', 'webp', 'jp2', 'avif']
});

// Bundle analyzer plugin
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({});

// Enable Webpack 5
// The script analyze, in the package.json, will not work with Webpack 5 (will be fixed) 
// So you can comment the lines, then Next will use Webpack 4
module.exports = {
  future: {
    webpack5: true
  }
}
