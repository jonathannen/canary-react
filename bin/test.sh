#!/bin/bash
# (C) Copyright Jon Williams 2015 - See LICENSE file
#
# Runs all the test tasks.
# Should be run via 'npm run test' or from the project root directory.

set -o errexit # Exit on error

npm run babel-build-test
npm run mocha-run
