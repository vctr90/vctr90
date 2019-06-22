const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/js/index.js',
  node: {
    fs: 'empty'
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
      },
      {
        test:  /\.(png|jpe?g|gif)$/,
        /*use: ['file-loader']*/
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: 'dist/'
            }
          }
        ]
      }/*,
      {
        test:  /\.(png|jpe?g|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000
          }
        }]
      }*/
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};
