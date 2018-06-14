/**
 * Dev webpack config
 */

/* eslint-disable strict */

'use strict';

const path = require('path');
const webpack = require('webpack');
const mergeWebpackConfig = require('webpack-merge');
const common = require('./webpack.config');

common.entry.dist.unshift('react-hot-loader/patch');

module.exports = mergeWebpackConfig(common, {
  // mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    compress: true,
    hot: true,
    open: false,
    port: 8080,
    overlay: {
      warnings: false,
      errors: true,
    },
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
  ],
});
