// (C) Copyright Jon Williams 2017 - See LICENSE file

var manifest = require('../build/manifest.js');
var sass = require('node-sass');

module.exports = {

  // URL functions in the SCSS are mapped to the asset path for the
  // development server
  "url": function(name, done) {
    done(new sass.types.String("url('/assets/" + name.getValue() + "')"));
  }
}
