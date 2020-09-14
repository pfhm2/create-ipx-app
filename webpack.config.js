const path = require('path');
const {CoveoPublishPlugin} = require('./plugins/coveo-publish');

module.exports = {
  entry: {
    main: './src/ipx.js',
    bootstrap: './bootstrap.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CoveoPublishPlugin({
      filename: path.join(__dirname, 'src/ipx.html')
    })
  ]
};