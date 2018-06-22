#!/usr/bin/env bash
#
# (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2018.
# See the LICENSE file for more details.
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
cp -r build/* $REPO_THEME/tmp
cd $REPO_THEME/tmp

# Prepare and clean for packaging
rm -fr images/
rm -fr favicons/
mv svg/epfl-logo.svg icons/
rm -fr svg/
