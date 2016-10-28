var path = require('path');
var fs = require('fs')
var webpack = require('webpack');
var webpackDevPort = 7301;

var dirPre = './public/apps/'
var apps = fs.readdirSync(dirPre)
var entry = {}
apps.filter(function(child) {
  var dir =  dirPre + child
  return fs.lstatSync(dir).isDirectory()
}).forEach(function(child) {
  entry[child] = [
    'webpack-hot-middleware/client',
    path.resolve(__dirname, dirPre + child + '/index.jsx')
  ]
})

module.exports = {
  webpackDevPort: webpackDevPort,
  resolve: {
    extensions: ['', '.js','.jsx'],
  },
  externals:{
    react:'React',
    'react-dom':'ReactDOM',
  },
  entry: entry,
  output: {
    path: path.resolve(__dirname, './public/dist/'),
    publicPath: '/dist/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test:/\.jsx|\.js$/,
        loader:'babel',
        query:{
          compact:false
        }
      },
      {
        test:/\.scss$/,
        exclude: /node_modules|bower_components/,
        loaders:['style','css','sass-loader']
      },{
        test:/\.css$/,
        exclude: /node_modules|bower_components/,
        loaders:['style','css']
      },{
        test:/\.ttf|otf$/,
        loaders:['file?name=[name].[ext]']
      }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      env:{
        isDevelopment:true,
        BROWSER_ENV: true
      },
      __DEV__:true
    })
  ],
  devtool: 'source-map'
};

//# sourceMappingURL=webpack.config.js.map
