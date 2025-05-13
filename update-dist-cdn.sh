#!/usr/bin/env bash

git checkout dist-cdn/
rm -fr vhosts

tar xf dist-cdn/releases.tar.xz

NODE_VERSION=$(node -p -e "require('./package.json').version")

if [ -d vhosts/web2018.epfl.ch/${NODE_VERSION} ]; then
  echo -e "\e[31m\nRelease already exists! \nBump a new version.\n"
  exit 1
fi

unzip -q -o release/epfl-theme-elements-${NODE_VERSION}-cdn.zip -d vhosts/web2018.epfl.ch/
tar cfJ dist-cdn/releases.tar.xz vhosts

rm -fr vhosts
