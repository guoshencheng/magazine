var path = require('path');
var fs = require('fs');
var gulp = require('gulp');
var gutil = require('gulp-util');
var tasksPath = path.resolve(__dirname,'./tasks/');
var taskList = fs.readdirSync(tasksPath).forEach(function(taskName){
  var taskFn = require(path.resolve(tasksPath,taskName));
  taskFn(gulp);
});

gulp.task('development', function(){
  gulp.start('webpackDevServer');
});

gulp.task('product',function(){
  gulp.start('webpack');
});

module.exports = gulp;
