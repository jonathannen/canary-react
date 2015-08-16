#!/bin/bash
# (C) Copyright Jon Williams 2015 - See LICENSE file
#
# Runs all the build tasks to produce a distribution in the build directory.
# Should be run via 'npm run build' or from the project root directory.

set -o errexit # Exit on error

echo "Building App to ./build"
export NODE_ENV=production

echo "  Cleaning the build directory..."
rm -rf build
mkdir -p build
cp -R ./public build/
mkdir -p build/public/assets

# Media like images go first as they're digested and ready for other component
# builds
echo "  Building media..."
npm run mincer-media-build

echo "  Building client and server JavaScript..."
npm run babel-build
npm run webpack-build

echo "  Building CSS and other view assets..."
npm run stylus-build
npm run mincer-css-build
cp app/views/index.jade build/views

# Clean up
rm -rf build/_assets

echo
echo "Build complete."
echo "To generate the production scripts use 'npm run scripts-build'"
echo "To run tests on the build code use 'npm run test-build'"
echo
