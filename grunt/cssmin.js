/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, 2018-2021.
 */

'use strict';

module.exports = {
  tmpCloudflare: {
    files: {
      'tmp/css/css-elements-for-cloudflare-custom-pages.min.css': [
        'tmp/css/vendors.min.css',
        'tmp/css/elements.css',
        'src/css/utilities.css'
      ]
    }
  },
  dist: {
    files: {
      'dist/css/elements.min.css': [
        'tmp/css/vendors.min.css',
        'tmp/css/elements.css',
        'tmp/css/fonts.css',
        'src/css/layout.css',
        'src/css/utilities.css',
        'src/css/errors.css'
      ]
    }
  }
};
