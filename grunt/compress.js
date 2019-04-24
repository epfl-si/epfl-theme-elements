/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2018-2019.
 * See the LICENSE file for more details.
 */

'use strict';

module.exports = {
  releaseDist: {
    options: {
      archive:
        'release/epfl-theme-elements-<%= pkg.version %>-dist.zip'
    },
    files: [{
      src: '**/*',
      cwd: 'dist/',
      dest: '',
      expand: true
    }]
  },
  releaseCdn: {
    options: {
      archive:
        'release/epfl-theme-elements-<%= pkg.version %>-cdn.zip'
    },
    files: [{
      src: '**/*',
      cwd: 'release/',
      dest: '<%= pkg.version %>',
      expand: true
    }, {
      src: ['*.html', '*.txt'],
      cwd: 'release/',
      dest: '',
      expand: true
    }]
  }
};
