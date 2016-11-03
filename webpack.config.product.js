var path = require('path');
var fs = require('fs')
var webpack = require('webpack');
var base = require('./webpack.config');

var dirPre = './public/apps/'
var apps = fs.readdirSync(dirPre)
var entry = {}
apps.filter(function(child) {
  var dir =  dirPre + child
  return fs.lstatSync(dir).isDirectory()
}).forEach(function(child) {
  entry[child] = [
    path.resolve(__dirname, dirPre + child + '/index.jsx')
  ]
})

base.entry = entry
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
