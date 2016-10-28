var path = require('path');
var gutil = require('gulp-util');
var exec = require('child_process').exec;
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('../webpack.config.js');

module.exports = function (gulp) {
  gulp.task('webpack', function (callback) {
    webpack(webpackConfig, function (err, stats) {
      if (err) throw new gutil.PluginError('webpack', err);
      gutil.log("[webpack]", stats.toString({
        })
      );
    });
  });
  //@Deprecated
  gulp.task('webpackDevServer', function(callback) {
    exec('webpack-dev-server --hot --inline --display-error-details --port '+webpackConfig.webpackDevPort,function(){
      console.log.apply(console,arguments);
    });
    console.log('webpack dev on:',webpackConfig.webpackDevPort);
  });
};
