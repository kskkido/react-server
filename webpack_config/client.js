const { root } = require('../'),
      { join } = require('path'),
      webpack = require('webpack'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      extractCSS = new ExtractTextPlugin('/public/[name].bundle.css')

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    join(root, './client/index.js'),
  ],
  output: {
    path: join(root, 'app/public'),
    filename: 'bundle.js'
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'env']
        }
      },
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.css$/,
        loader: extractCSS.extract(['style-loader, css-loader'])
      },
      {
        loader: 'url-loader',
        options: {
          name: 'public/media/[name].[ext]',
          publicPath: url => url.replace('/public/', '')
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    extractCSS
  ]
}
