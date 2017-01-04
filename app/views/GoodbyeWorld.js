// (C) Copyright Jon Williams 2015 - See LICENSE file

import React from 'react';
import { Link } from 'react-router';

export default class GoodbyeWorld extends React.Component {
  render() {
    return <div>
      <h1>Goodbye World...</h1>
      <p><Link to='/'>I want to go back</Link></p>
    </div>;
  }
}
