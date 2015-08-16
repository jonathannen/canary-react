// (C) Copyright Jon Williams 2015
//
// Webpack development server. Runs in parallel with the overall server
// to dynamically deliver javascript assets. Will mount at port 3001 by
// default.

var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var path = require('path');

var config = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    './app/client',
  ],
  output: {
    path: path.join(__dirname, '..', '/public/assets/'),
    filename: 'app.js',
    publicPath: 'http://localhost:3001/assets/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel-loader?experimental'], exclude: /node_modules/
      }
    ]
  }
}

var server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  stats: { colors: true },
});
server.listen(3001, "localhost", function() {});
