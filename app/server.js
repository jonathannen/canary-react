// (C) Copyright Jon Williams 2015
//
// Everything that runs on the server side. As we're a principally
// isomorphic app, this bootstraps the client side to render components.

require('source-map-support').install(); // Enable source maps at the get-go

import morgan from 'morgan';
import path from 'path';
import React from 'react';
import { match, RouterContext } from 'react-router'
import { renderToString } from 'react-dom/server'

import main from "./main";
import routes from './routes';

// Initalize the custom configuration
var init = require('./init/' + main.settings.env);
var layout = require('./views/layout');

// Log request outcomes to STDOUT
morgan.token('pid', function getPid() { return process.pid; });
main.use(morgan('pid-:pid :method :url :status :response-time ms - :res[content-length]'));

main.get('*', function (req, res) {

  res.write(layout.header);
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    const reactHtml = renderToString(<RouterContext {...props}/>)
    res.write(reactHtml);
    res.write(layout.footer);
    res.end();
  });

});

// Kick off the actual server
var server = main.server = main.listen(main.config.port, function () {
  var host = server.address().address;
  var port = server.address().port;

  if(typeof(main.config.port) == 'string')
    console.log('Canary-React! Environment %s. Listening at unix:/%s', main.settings.env, main.config.port);
  else
    console.log('Canary-React! Environment %s. Listening at http://%s:%s', main.settings.env, host, port);
});
