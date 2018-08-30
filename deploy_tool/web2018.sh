#!/usr/bin/env bash

#
# (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2018.
# See the LICENSE file for more details.
#

WEB2018_PATH=/home/kis/web2018.epfl.ch
APP_NAME=epfl-theme-elements-X.Y.Z-cdn.zip
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
SERVERS_LIST=( "exopgesrv1.epfl.ch"
               "kissrv104.epfl.ch"
               "kissrv105.epfl.ch" )

# Deploy the tools to the various servers
deploy_tools() {
  for SERVER in "${SERVERS_LIST[@]}"; do
    echo "Deploy to $SERVER..."
    scp $DIR/web2018.sh kis@$SERVER:~/
  done
}

# Deploy a new version of the application
deploy() {

  if [ -z "$1" ]; then
    echo "Usage: $0 deploy <$APP_NAME>"
    exit 51
  fi

  if [ ! -f "$1" ]; then
    echo "Archive does not exist: $1"
    exit 69
  fi

  # Deploying new version
  unzip -o $1 -d $WEB2018_PATH/$VERSION

  echo "Deployed version $VERSION"
}

case $1 in
  deploy) $1 $2;;
  deploy_tools) $1;;
  *)
    echo "Usage: $0 operation [options]"
    echo ""
    echo -e "\tdeploy <archive>:\tdeploys the specified app archive (<$APP_NAME>)"
    echo ""
    echo -e "\tdeploy_tools:\t\tdeploys the tools to the servers"
    exit 2
    ;;

esac
