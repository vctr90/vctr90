const merge = require('webpack-merge');
const config = require('./config.js');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  watch: true,
  devServer: {
    port: config.PORT,
    host: config.HOST,
    overlay: true
  }
});