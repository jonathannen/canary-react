// (C) Copyright Jon Williams 2015 - See LICENSE file
//

import { expect, React, TestUtils } from './shared'
import HelloWorldComponent from '../views/HelloWorld';
var HelloWorld = TestUtils.wrapReactRouterContext(HelloWorldComponent);

describe('HelloWorld', function() {

  it('be welcoming to our vistors', function() {
    var component = TestUtils.renderIntoDocument(<HelloWorld/>);
    var h1 = TestUtils.findRenderedDOMComponentWithTag(component, 'h1')
    expect(h1.getDOMNode().textContent).to.contain('Hello');
  });

});
