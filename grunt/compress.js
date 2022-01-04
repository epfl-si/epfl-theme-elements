/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, 2018-2021.
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
