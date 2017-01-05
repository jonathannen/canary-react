// (C) Copyright Jon Williams 2015 - See LICENSE file
//

import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import GoodbyeWorldComponent from '../views/GoodbyeWorld';

describe('GoodbyeWorld', function() {

  it('be polite to those leaving', function() {
    var h1 = shallow(<GoodbyeWorldComponent />).find('h1').text();
    expect(h1).to.contains('Goodbye');
  });

});
