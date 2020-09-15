const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const CopyPlugin = require('copy-webpack-plugin');
const JoinResourcesPlugin = require('./plugins/join-resources');
const CoveoPublishPlugin = require('./plugins/coveo-publish');

module.exports = {
  entry: {
    ipx: './src/ipx.js',
    bootstrap: './bootstrap.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'src/ipx.html'),
        to: path.resolve(__dirname, 'dist')
      }]
    }),
    new JoinResourcesPlugin({
      htmlFileName: path.resolve(__dirname, 'dist/ipx.html'),
      js: [
        path.resolve(__dirname, 'dist/ipx.js')
      ],
    }),
    new CoveoPublishPlugin({
      filename: path.join(__dirname, 'dist/ipx.html')
    })
  ]
};