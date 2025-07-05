const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  // ... other webpack config
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        fontawesome: {
          test: /[\\/]node_modules[\\/]@fortawesome[\\/]/,
          name: 'fontawesome',
          chunks: 'all',
        },
        swiper: {
          test: /[\\/]node_modules[\\/]swiper[\\/]/,
          name: 'swiper',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    // Add bundle analyzer in development
    process.env.ANALYZE && new BundleAnalyzerPlugin(),
  ].filter(Boolean),
};