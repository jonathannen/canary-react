// (C) Copyright Jon Williams 2015
//
// Everything that runs on the server side. As we're a principally
// isomorphic app, this bootstraps the client side to render components.

import morgan from 'morgan';
import path from 'path';
import React from 'react';
import { match, RouterContext } from 'react-router'
import { renderToString } from 'react-dom/server'
// import HelloWorld from './views/HelloWorld';

import main from "./main";
import routes from './routes';

// Initalize the custom configuration
var init = require('./init/' + main.settings.env);

// Log request outcomes to STDOUT
morgan.token('pid', function getPid() { return process.pid; });
main.use(morgan('pid-:pid :method :url :status :response-time ms - :res[content-length]'));

// All other requests get rendered via React, in development using
// the Jade template engine. In development all we need to do is serve up
// the index page (app/views/index.jade) with the right CSS and the client
// javascript.
main.set('views', ['./views', './app/views']);
main.set('view engine', 'jade');

var stylesheetPath = main.config.stylesheetPath("app.css");
var javascriptPath = main.config.javascriptPath("app.js");
main.get('*', function (req, res) {

  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    const reactHtml = renderToString(<RouterContext {...props}/>)
    res.render('index', {
      content: reactHtml,
      javascriptPath: javascriptPath,
      stylesheetPath: stylesheetPath,
    });
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
