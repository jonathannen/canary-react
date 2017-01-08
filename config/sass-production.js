// (C) Copyright Jon Williams 2017 - See LICENSE file

// The manifest JSON file contains the mapping of names like canary.jpg
// to the digested form - e.g. canary-8294a3734e168f8200a8728133786f76.jpg
var manifest = require('../build/manifest.js');
var sass = require('node-sass');

module.exports = {

  // URL functions in the SCSS are mapped to the asset path
  "url": function(name, done) {
    name = name.getValue().toString().replace(/[\'\"]/g, "");
    value = manifest.assets[name];
    if(value === undefined) {
      throw("Asset not found for name " + name + "in the build/manifest.js file");
    }
    done(new sass.types.String("url('/assets/" + value + "')"));
  }
}
