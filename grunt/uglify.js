/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2018.
 * See the LICENSE file for more details.
 */

'use strict';

module.exports = {
  options: {
    beautify: false,
    mangle: false,
    compress: false,
    output: {
      comments: /^!/
    }
  },
  dist: {
    files: {
      'dist/js/elements.min.js': [
        'node_modules/jquery/dist/jquery.min.js',
        'tmp/js/vendors.min.js',
        'tmp/js/elements.bundle.js'
      ]
    }
  }
};
