#!/bin/bash
# (C) Copyright Jon Williams 2015 - See LICENSE file
#

cd ..
unset GIT_DIR

# New Repo?
git rev-parse --verify HEAD > /dev/null
if [ $? -ne 0 ] ; then 
  echo "Target is a new repo."
  exit 0
fi

# Echo the current version
ONELINE=`git log --oneline -n 1`
echo "Current:" $ONELINE

UNSTAGED=`git diff-index --name-status HEAD`
if [ "$UNSTAGED" != "" ]
  then echo "The target repository has unstaged changes, aborting push."
  exit -1
fi
