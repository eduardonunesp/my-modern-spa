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
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: {presets: ['es2015'] }},
      {test: /\.html$/, loader: 'raw-loader'},
      {test: /\.css$/, loader: 'css-loader'},
      {test: /\.scss$/, loader: 'style!css!sass'},
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,loader: "url-loader?limit=10000&mimetype=application/font-woff"},
      {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,loader: "file-loader"}
    ]
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
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "hammerjs": "hammerjs"
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