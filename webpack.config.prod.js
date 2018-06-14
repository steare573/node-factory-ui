/**
 * Production webpack config.
 */

/* eslint-disable strict */

'use strict';

const path = require('path');
const mergeWebpackConfig = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const common = require('./webpack.config');

module.exports = mergeWebpackConfig(common, {
  // mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
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
                outputStyle: 'compressed',
              },
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([path.join(__dirname, 'dist')]),
    new ExtractTextPlugin('[name]-[chunkhash].css'),
  ],
});
