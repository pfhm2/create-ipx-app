const path = require('path');

module.exports = {
  entry: {
    main: './src/ipx.js',
    bootstrap: './bootstrap.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};