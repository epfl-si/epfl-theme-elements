/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2018-2019.
 * See the LICENSE file for more details.
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
