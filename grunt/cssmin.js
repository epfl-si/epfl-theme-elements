/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, 2018-2021.
 */

'use strict';

module.exports = {
  tmpCloudflare: {
    files: {
      'tmp/css/css-elements-for-cloudflare-custom-pages.min.css': [
        'node_modules/epfl-elements/css/vendors.css',
        'node_modules/epfl-elements/css/elements.css'
      ]
    }
  },
  dist: {
    files: {
      'dist/css/elements.min.css': [
        'node_modules/epfl-elements/css/vendors.css',
        'node_modules/epfl-elements/css/elements.css',
        'tmp/css/fonts.css',
        'src/css/errors.css'
      ]
    }
  }
};
