const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const CopyPlugin = require('copy-webpack-plugin');
const JoinResourcesPlugin = require('./plugins/join-resources');
const CoveoPublishPlugin = require('./plugins/coveo-publish');

const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

module.exports = () => {
  const plugins = buildPlugins();

  return {
    mode: 'production',
    entry: {
      ipx: './src/ipx.js',
    },
    output: {
      filename: '[name].js',
      path: distPath,
    },
    devServer: {
      contentBase: distPath,
      writeToDisk: true
    },
    plugins
  };

}

function buildPlugins() {
  return [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
      {
        from: path.resolve(__dirname, 'templates/index.html'),
        to: distPath
      },
      {
        from: path.resolve(srcPath, 'ipx.html'),
        to: distPath
      }, {
        from: path.resolve(srcPath, 'ipx.css'),
        to: distPath
      }]
    }),
    new JoinResourcesPlugin({
      htmlFileName: path.resolve(distPath, 'ipx.html'),
      css: [path.resolve(distPath, 'ipx.css')],
      js: [path.resolve(distPath, 'ipx.js')],
    }),
    new CoveoPublishPlugin({
      filename: path.join(distPath, 'ipx.html')
    })
  ]
}