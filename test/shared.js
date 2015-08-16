// (C) Copyright Jon Williams 2015 - See LICENSE file
//
// Configures a virtual dom and other shims for testing react components.
// Generally you'll want to use via:
//
// import { expect, React, TestUtils } from './shared'
// import MyReactComponent from '../views/Component';
// var ReactComponent = TestUtils.wrapReactRouterContext(MyReactComponent);


import chai from 'chai';
import jsdom from 'jsdom';
import objectAssign from 'object-assign'
import ReactAddons from 'react/addons';
import router from '../routes'

// Export some useful and commonly used packages
export var expect = chai.expect;
export const React = ReactAddons;
export var TestUtils = React.addons.TestUtils;

// Create a DOM for tests to work against
export var document = global.document = jsdom.jsdom('<!doctype html><html><body><div id="app"></div></body></html>');
global.window = document.parentWindow;

// A router context is requried for react router links
// Adapted from https://labs.chie.do/jest-testing-with-react-router/
TestUtils.wrapReactRouterContext = function ReactRouterContext(Component, props, stubs) {
  function RouterStub() {}

  objectAssign(RouterStub, {
    makePath: function makePath() {},
    makeHref: function makeHref() {},
    transitionTo: function transitionTo() {},
    replaceWith: function replaceWith() {},
    goBack: function goBack() {},
    getCurrentPath: function getCurrentPath() {},
    getCurrentRoutes: function getCurrentRoutes() {},
    getCurrentPathname: function getCurrentPathname() {},
    getCurrentParams: function getCurrentParams() {},
    getCurrentQuery: function getCurrentQuery() {},
    isActive: function isActive() {},
    getRouteAtDepth: function getRouteAtDepth() {},
    setRouteComponentAtDepth: function setRouteComponentAtDepth() {}
  }, stubs);

  return React.createClass({
    childContextTypes: {
      router: React.PropTypes.func,
      routeDepth: React.PropTypes.number
    },

    getChildContext: function getChildContext() {
      return { router: RouterStub, routeDepth: 0 };
    },

    render: function render() {
      return React.createElement(Component, props);
    }
  });
};
