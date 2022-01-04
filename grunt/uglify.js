/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, 2018-2021.
 */

'use strict';

module.exports = {
  options: {
    beautify: false,
    mangle: false,
    compress: false,
    output: {
      comments: 'all'
    }
  },
  dist: {
    files: {
      'dist/js/elements.min.js': [
        'node_modules/jquery/dist/jquery.min.js',
        'tmp/js/elements.bundle.js.LICENSE.txt',
        'tmp/js/vendors.min.js',
        'tmp/js/elements.bundle.js'
      ]
    }
  }
};
