// (C) Copyright Jon Williams 2015 - See LICENSE file
//

import { expect, React, TestUtils } from './shared'
import GoodbyeWorldComponent from '../views/GoodbyeWorld';
var GoodbyeWorld = TestUtils.wrapReactRouterContext(GoodbyeWorldComponent);

describe('GoodbyeWorld', function() {

  it('be polite to those leaving', function() {
    var component = TestUtils.renderIntoDocument(<GoodbyeWorld/>);
    var h1 = TestUtils.findRenderedDOMComponentWithTag(component, 'h1')
    expect(h1.getDOMNode().textContent).to.contain('Goodbye');
    // If you want to see the rendered output
    // console.log(component.getDOMNode().innerHTML);
  });

});
