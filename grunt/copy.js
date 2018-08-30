/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2018.
 * See the LICENSE file for more details.
 */

'use strict';

module.exports = {
  icons: {
    files: [{
      expand: true,
      cwd: 'tmp/',
      src: ['icons/**'],
      dest: 'dist/',
      nonull: true
    }]
  },
  favicons: {
    files: [{
      expand: true,
      cwd: 'src/',
      src: ['icons/**'],
      dest: 'dist/',
      nonull: true
    }]
  }
};
