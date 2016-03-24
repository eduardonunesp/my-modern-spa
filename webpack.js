'use strict';

// Modules
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = makeWebpackConfig();

function makeWebpackConfig () {
  var config = {};
  config.entry = {
    app: './src/app.js'
  };

  config.output = {
    path: __dirname + '/build',
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js'
  };

  config.module = {
    preLoaders: [],

    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.html$/,
      loader: 'raw'
    }]
  };

  config.plugins = [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new ngAnnotatePlugin({
      add: true,
    })
  ];

  config.devServer = {
    contentBase: './build',
    stats: {
      modules: false,
      cached: false,
      colors: true,
      chunk: false
    }
  };

  return config;
}