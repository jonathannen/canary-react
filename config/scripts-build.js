// (C) Copyright Jon Williams 2015 - See LICENSE file
//
// Generates scripts into build/scripts. These are system and
// deployment-specific production scripts.

var ejs = require('ejs');
var fs = require('fs');
var path = require('path');

options = {
  nginxHttpPort: 3000,
  nodeHttpPort: 3001,
  rootDirectory: path.resolve(__dirname, '../build')
}

var template = function(templateName, outputName, locals) {
  var templatePath = path.resolve(__dirname, templateName);
  var outputPath = path.resolve(__dirname, '../build/scripts', outputName);

  var templateContent = fs.readFileSync(templatePath, { encoding: 'utf-8'} );
  var output = ejs.render(templateContent, locals);

  fs.writeFileSync(outputPath, output);
  return output;
}

template('nginx.conf.ejs', 'nginx.conf', options);
