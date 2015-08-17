#!/bin/bash
# (C) Copyright Jon Williams 2015 - See LICENSE file
#
# Produce a release tar from the build directory.

set -o errexit # Exit on error

echo "Making a release from ./build"
mkdir -p releases

NOW=`date +%Y-%m-%d-%H%M%S`
GIT_VERSION=`git rev-parse --verify HEAD`
FILENAME=releases/canary-$NOW--$GIT_VERSION.tgz

tar -cvzf $FILENAME build/
