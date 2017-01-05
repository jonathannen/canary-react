// (C) Copyright Jon Williams 2015 - See LICENSE file
//
// Client bootstraps the JavaScript that is delivered to the browser via
// app.js. It's the representation of the React router and components
// for the client side.

import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from "./routes";

render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('app')
)
