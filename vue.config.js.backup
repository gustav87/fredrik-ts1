// vue.config.js
module.exports = {
  configureWebpack: config => {
    config.devtool = 'eval-source-map';
    config.output.devtoolModuleFilenameTemplate = info =>

      info.resourcePath.match(/\.vue$/) && !info.identifier.match(/type=script/)
        ? `webpack-generated:///${info.resourcePath}?${info.hash}`
        : `webpack-yourCode:///${info.resourcePath}`;

    config.output.devtoolFallbackModuleFilenameTemplate = 'webpack:///[resource-path]?[hash]';
  }
}
