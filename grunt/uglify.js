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
        'node_modules/epfl-elements/js/vendors.min.js',
        'node_modules/epfl-elements/js/elements.min.js'
      ]
    }
  }
};
