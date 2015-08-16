// (C) Copyright Jon Williams 2015 - See LICENSE file
//
// Loads the manifest file from the expected location at
// /dist/public/assets/manifest.json

var fs = require('fs');
var path = require('path');

var manifestPath = path.join(__dirname, './public/assets/manifest.json');
var manifestRaw = fs.readFileSync(manifestPath, { encoding: 'utf-8'});
var manifest  = JSON.parse(manifestRaw);

// Also load the webpack manifest in the build directory
manifestPath = path.join(__dirname, './public/assets/webpack-manifest.json');
var manifestRaw = fs.readFileSync(manifestPath, { encoding: 'utf-8'});
var webpackManifest = JSON.parse(manifestRaw);
for (var attrname in webpackManifest) { manifest.assets[attrname] = webpackManifest[attrname]; }

module.exports = manifest;
