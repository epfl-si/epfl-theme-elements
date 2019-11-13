/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2018.
 * See the LICENSE file for more details.
 */

'use strict';

const fs = require('fs');
const path = require('path');

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
  errors: {
    files: [{
      cwd: 'src/errors',
      expand: true,
      src: '*.html',
      dest: 'release/errors',
      ext: '.html'
    }],
    partials: [
      'src/includes/partials/*.html',
      'src/includes/full/*.html',
      'tmp/css/*.css'
    ],
    globals: [{
      VERSION: '<%= pkg.version %>',
      YEAR: (new Date()).getFullYear().toString(),
      FULL_JS: function () {
        return fs.readFileSync(
          path.join(__dirname, '/../dist/js/elements.min.js'), 'utf-8'
        );
      }
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
