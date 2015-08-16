// (C) Copyright Jon Williams 2015 - See LICENSE file
//
// Configure as a production server.

import fs from 'fs';
import path from 'path';

import main from '../main';
import manifest from '../manifest';

// Uses the manifest files in public/assets to map a name like app.css
// to it's hash/digested form like app-acd45321defa49e4172d.css
var manifestFunction = function(name) {
  let value = manifest.assets[name];
  return `/assets/${value}`
}

// Ensure we have a temporary directory for things like unix domain sockets
// and pid files.
var tmpPath = path.join(__dirname, '../tmp');
if(!fs.existsSync(tmpPath)) {
  fs.mkdirSync(tmpPath);
}

// By default, production uses a unix domain socket that can then be
// proxied by nginx
// var domainSocket = path.join(__dirname, '../tmp/canary.sock');
// if(fs.existsSync(domainSocket)) {
//     fs.unlinkSync(domainSocket);
// }

module.exports = main.config = {
  port: 3001,
  javascriptPath: manifestFunction,
  stylesheetPath: manifestFunction,
}
