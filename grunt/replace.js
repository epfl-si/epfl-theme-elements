/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2019.
 * See the LICENSE file for more details.
 */

'use strict';

module.exports = {
  release: {
    options: {
      patterns: [{
        match: /<FONTS_PATH>/g,
        replacement: 'https://web2018.epfl.ch/2.0.0/fonts'
      }]
    },
    files: [{
      expand: true,
      flatten: true,
      src: ['src/css/fonts.css'],
      dest: 'tmp/css/'
    }]
  }
};
