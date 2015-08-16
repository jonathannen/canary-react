// (C) Copyright Jon Williams 2015 - See LICENSE file
//
// A pretty simple Webpack production configuration. As we're using babel
// and an external build process, all we need to do is grab the JavaScript
// and assemble.

var webpack = require('webpack');
var path = require('path');
var ManifestPlugin = require('webpack-manifest-plugin');

var buildPath = path.resolve(__dirname, 'build/public/assets');
var clientPath = path.resolve(__dirname, './build/client.js');
var modulesPath = path.resolve(__dirname, 'node_modules');

module.exports = {
  devtool: 'source-map',
  entry: { 'app': clientPath },
  output: { path: buildPath, filename: 'app-[hash].js' },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new ManifestPlugin({ fileName: 'webpack-manifest.json' } )
  ]
};
