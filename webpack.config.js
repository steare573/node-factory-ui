/**
 * The base webpack config
 */

/* eslint-disable strict */

'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    dist: [
      'babel-polyfill',
      './src/index.jsx',
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[hash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.css',
      '.scss',
    ],
    modules: [
      'src',
      path.join(__dirname, 'src'),
      'node_modules',
      path.join(__dirname, 'node_modules'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.woff.*$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'application/font-woff',
            },
          },
        ],
      },
      {
        test: /\.ttf.*$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'application/octet-stream',
            },
          },
        ],
      },
      {
        test: /\.eot.*$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.ico$/,
        use: [
          {
            loader: 'file-loader?name=[name].[ext]',
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Passport Node Factory',
      inject: 'body',
      template: path.join('src', 'template', 'index.html'),
      showErrors: true,
    }),
  ],
};
