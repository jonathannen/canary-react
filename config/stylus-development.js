// (C) Copyright Jon Williams 2015 - See LICENSE file

var	stylus = require('stylus');

// Maps CSS url('...') functions in stylus files to the development
// bootstrapped location. e.g. /assets/canary.jpg
module.exports = function(options) {
  return function(style) {
		style.define('url', function(name) {
      name = name.toString().replace(/[\'\"]/g, "");
      return new stylus.nodes.Literal("url('/assets/" + name + "')");
    });
	};
};
