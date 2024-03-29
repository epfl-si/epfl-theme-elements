/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, 2018-2021.
 */

'use strict';

module.exports = {
  icons: {
    files: [{
      expand: true,
      flatten: true,
      cwd: 'node_modules/epfl-elements/dist/',
      src: [
        'icons/icons.svg',
        'icons/feather-sprite.svg',
        'svg/epfl-logo.svg',
        'svg/epfl-logo-negative.svg',
        'favicons/apple-touch-icon.png',
        'favicons/favicon-16.png',
        'favicons/favicon-32.png',
        'favicons/favicon.ico',
        'images/email/epfl-logo.png',
        'images/email/square.png'
      ],
      dest: 'dist/icons/',
      nonull: true
    }, {
      expand: true,
      cwd: 'node_modules/epfl-elements/dist/',
      src: ['images/icons/**'],
      dest: 'dist/',
      nonull: true
    }]
  },
  release: {
    files: [{
      expand: true,
      cwd: 'dist/',
      src: ['**'],
      dest: 'release/',
      nonull: true
    }]
  },
  robots: {
    files: [{
      expand: true,
      cwd: 'src/',
      src: ['robots.txt'],
      dest: 'release/',
      nonull: true
    }]
  },
  license: {
    files: [{
      expand: true,
      cwd: 'node_modules/epfl-elements/dist/js/',
      src: [
        'vendors.min.js.LICENSE.txt',
        'elements.min.js.LICENSE.txt'
      ],
      dest: 'dist/js',
      nonull: true
    }]
  }
};
