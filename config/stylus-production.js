// (C) Copyright Jon Williams 2015 - See LICENSE file

var manifest = require('../build/manifest.js');
var	stylus = require('stylus');

// Maps CSS url('...') functions in stylus files to the production location,
// which will be a digested form
module.exports = function(options) {
  return function(style) {
		style.define('url', function(name) {
      name = name.toString().replace(/[\'\"]/g, "");
      value = manifest.assets[name];
      if(value === undefined) {
        throw("Asset not found for name " + name);
      }
      return new stylus.nodes.Literal("url('/assets/" + value + "')");
    });
	};
};
