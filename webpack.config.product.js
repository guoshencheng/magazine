var path = require('path');
var webpack = require('webpack');
var base = require('./webpack.config');
base.output.publicPath = '';
base.plugins = [
  new webpack.DefinePlugin({
    env: {
      isDevelopment:false,
      BROWSER_ENV: true
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress:{
      warnings:false
    }
  })
];

module.exports = base;
