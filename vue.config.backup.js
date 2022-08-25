// vue.config.js
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const bap = new BundleAnalyzerPlugin();

module.exports = {
  configureWebpack: config => {
    config.devtool = 'eval-source-map';
  },
  chainWebpack: config => {
    config.plugin('bap')
      .use(bap)
      .end()
    config.module
      .rule('vue')
      .use('vue-loader')
        .tap(options => {
          options.hotReload = false;
          options.cacheBusting = false;
          return options
        })
      .end()
  }
}
