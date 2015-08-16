# Canary React

## Overview

This is a boilerplate node.js project built with:

- ES6 transpiled via Babel.
- React.js with:
	- Isomorphic rendering.
	- React-Router using Browser History.
	- Hot-reloading of components (in development).
- Build with:
	- Sprockets-style asset compilation and digesting.
	- Webpack for JavaScript components.

## Usage

Clone the repository, change directory to the reposistory and then:

	npm install
	npm run test
	npm run start

Then take your browser to [http://localhost:3000/](http://localhost:3000/). You should see the Hello World component with a routed link to the Goodbye component.

## Build and Production Usage

To build the production code:

	npm run build
	npm run test-build
	npm run scripts-build
	
If you are on OSX you can try out a production scenario using nginx. Following instructions assume you're using [homebrew](http://brew.sh/), but can be easily adapted.
	
	brew install nginx
	echo "daemon off;" >> /usr/local/etc/nginx/nginx.conf # Optiona (1)
	cp build/scripts/nginx.conf /usr/local/etc/nginx/servers/canary.conf
	npm run pm2-start
	nginx
	# use pm2 kill to stop pm2 entirely along with cnary
		
Then take your browser to [http://localhost:3000/](http://localhost:3000/). Instead of the usual development hooks, this is now being served via nginx. Assets are delivered directly by nginx, with other application requests proxied via a unix domain socket.

1. Optional. Means nginx runs in the foreground and can be stopped

## Upcoming

- Currently the tests are heavy-handed due to the Router requirements.
- Would like an alternative to jsdom as they [only support io.js](https://github.com/tmpvar/jsdom/issues/1047) as of version jsdom-4.0.

## License
MIT Licensed. See LICENSE for more information.

Thanks, [@jonathannen](http://twitter.com/jonathannen).
