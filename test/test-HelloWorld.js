// (C) Copyright Jon Williams 2015 - See LICENSE file
//

import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import HelloWorldComponent from '../views/HelloWorld';

describe('HelloWorld', function() {

  it('be welcoming to our vistors', function() {
    var h1 = shallow(<HelloWorldComponent />).find('h1').text();
    expect(h1).to.contains('Hello');
  });

});
