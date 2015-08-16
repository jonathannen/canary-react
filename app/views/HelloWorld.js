// (C) Copyright Jon Williams 2015 - See LICENSE file

import React from 'react';
import { Link } from 'react-router';

export default class HelloWorld extends React.Component {
  render() {
    return <div>
      <h1>Hello World!</h1>
      <p><Link to='goodbye'>I'm done here</Link></p>
    </div>;
  }
}
