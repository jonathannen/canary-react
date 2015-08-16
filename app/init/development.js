// (C) Copyright Jon Williams 2015 - See LICENSE file
//
// Configure as a development server.

import express from 'express';
import main from '../main';

// Development and general configuration, which should be overriden
// in production.
module.exports = main.config = {
  port: 3000,
  javascriptPath: function(name) { return `http://localhost:3001/assets/${name}` },
  stylesheetPath: function(name) { return `/assets/${name}` },
}

// Static assets. This will initially serve static items like images and fonts,
// then attempt to serve generated assets that are put into the build/assets
// directory.
main.use('/assets', express.static('assets/fonts'));
main.use('/assets', express.static('assets/images'));
main.use(express.static('watch'));
