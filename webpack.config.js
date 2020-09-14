const path = require('path');

module.exports = {
  entry: './src/ipx.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: '.',
  },
};