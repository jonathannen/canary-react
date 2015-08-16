# Canary React

## Overview

This is a boilerplate node.js project built with:

- ES6 via the Babel component.
- React.js with:
	- Isomorphic rendering.
	- React-Router.
	- Hot-reloading of components (in development).
- Webpack for JavaScript components.

## Usage

Clone the repository and then:

	cd canary-react
	npm install
	npm run server

Then take your browser to http://localhost:3000/

## Todo

- Currently the tests are very heavy-handed due to the Router requirements.
- Would like an alternative to jsdom as they [only support iojs](https://github.com/tmpvar/jsdom/issues/1047) as of version jsdom-4.0.

## License
MIT Licensed. See LICENSE for more information.

Thanks, [@jonathannen](http://twitter.com/jonathannen).
