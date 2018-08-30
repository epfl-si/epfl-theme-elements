/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2018.
 * See the LICENSE file for more details.
 */

'use strict';

module.exports = {
  options: {
    compress: {
      drop_console: true
    },
    output: {
      comments: /^!/
    }
  },
  dist: {
    files: {
      'dist/js/elements.min.js': [
        'node_modules/jquery/dist/jquery.min.js',
        'tmp/js/vendors.min.js',
        'tmp/js/vendors.bundle.js',
        'tmp/js/app.bundle.js'
      ]
    }
  }
};
