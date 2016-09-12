var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var _ = require('lodash');

module.exports = {
  devtool: 'eval',
  entry: [
    './js/app.js',
  ],
  output: {
    path: path.resolve('./build/'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(css)$/, loader: 'file?name=css/[name].[ext]'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=font/[name].[ext]'
      }

    ]
  },
  resolve: {
    alias: {
      'react': path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
      'jquery': path.resolve('./node_modules/jquery')
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'root.jQuery': 'jquery'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('./index-template.html'), // Load a custom template
    })
  ]
};
