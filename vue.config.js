// vue.config.js
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const bap = new BundleAnalyzerPlugin();

module.exports = {
  configureWebpack: config => {
    config.devtool = 'eval-source-map';
  }
}
