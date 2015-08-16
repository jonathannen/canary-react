// (C) Copyright Jon Williams 2015
//
// Everything that runs on the server side. As we're a principally
// isomorphic app, this bootstraps the client side to render components.

import path from 'path';
import React from 'react';
import Router from "react-router";

import main from "./main";
import routes from './routes';

// Initalize the custom configuration
var init = require('./init/' + main.settings.env);

// All other requests get rendered via React, in development using
// the Jade template engine. In development all we need to do is serve up
// the index page (app/views/index.jade) with the right CSS and the client
// javascript.
main.set('views', ['./views', './app/views']);
main.set('view engine', 'jade');

var stylesheetPath = main.config.stylesheetPath("app.css");
var javascriptPath = main.config.javascriptPath("app.js");
main.get('*', function (req, res) {
  Router.run(routes, req.url, Handler => {
    let reactContent = React.renderToString(<Handler />);
    res.render('index', {
      content: reactContent,
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
