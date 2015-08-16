// (C) Copyright Jon Williams 2015 - See LICENSE file
//
// routes.js maps url patterns to a given React component. In this case we
// have the HelloWorld component at home and another GoodbyeWorld component
// at /goodbye.

import React from 'react';
import { Route } from 'react-router';

import GoodbyeWorld from './views/GoodbyeWorld';
import HelloWorld from './views/HelloWorld';

export default (
  <Route>
    <Route name='hello' handler={ HelloWorld } path='/' />
    <Route name='goodbye' handler={ GoodbyeWorld } path='/goodbye' />
  </Route>
);
