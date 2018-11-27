/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2018.
 * See the LICENSE file for more details.
 */

'use strict';

module.exports = {
  includes: {
    files: [{
      cwd: 'src/includes/full',
      expand: true,
      src: '**/*.html',
      dest: 'release/includes',
      ext: '.html'
    }],
    partials: 'src/includes/partials/*.html',
    globals: [{
      VERSION: '<%= pkg.version %>',
      YEAR: (new Date()).getFullYear().toString()
    }]
  },
  download: {
    files: [{
      cwd: 'src',
      expand: true,
      src: '*.html',
      dest: 'release/',
      ext: '.html'
    }],
    partials: [
      'src/includes/partials/*.html',
      'src/includes/full/*.html'
    ],
    globals: [{
      VERSION: '<%= pkg.version %>',
      YEAR: (new Date()).getFullYear().toString()
    }]
  }
};
