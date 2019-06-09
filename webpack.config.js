const path = require('path');
const config = require('./config');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  watch: true,
  devServer: {
    port: config.PORT,
    host: config.HOST,
    overlay: true
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test:  /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};
