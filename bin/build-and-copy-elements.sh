#!/usr/bin/env bash
#
# (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, 2018-2021.
#

REPO_ELEMENTS="../elements"
REPO_THEME="../epfl-theme-elements/"

# Clean
rm -fr build/
rm -fr dist/
rm -fr tmp/
rm -fr release/

# Build elements theme
cd $REPO_ELEMENTS
yarn build

# Copy assets for packaging
mkdir -p $REPO_THEME/tmp
cp -r dist/* $REPO_THEME/tmp
