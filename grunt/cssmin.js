/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2018.
 * See the LICENSE file for more details.
 */

'use strict';

module.exports = {
  dist: {
    files: {
      'dist/css/epfl-theme-elements.min.css': [
        'tmp/css/base.css',
        'tmp/css/vendors.min.css'
      ]
    }
  },
  release: {
    files: {
      'release/css/epfl-theme-elements-<%= pkg.version %>.min.css': [
        'tmp/css/base.css',
        'tmp/css/vendors.min.css'
      ]
    }
  }
};
