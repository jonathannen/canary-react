#!/bin/bash
# (C) Copyright Jon Williams 2015 - See LICENSE file
#
# Kicks off all the "watch" tasks necessary to run a hot-refresh development
# environment.
# Should be run via 'npm run server' or from the project root directory.

set -o errexit # Exit on error

npm run babel-watch &
sleep 5 # Short delay to let babel catch up
npm run saas-watch & npm run webpack-watch & npm run web-watch
