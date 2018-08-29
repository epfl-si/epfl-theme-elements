/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2018.
 * See the LICENSE file for more details.
 */

'use strict';

module.exports = function (grunt, options) {
  return {
    releaseDist: {
      options: {
        archive:
          'package/epfl-theme-elements-' + options.package.version +
            '-dist.zip'
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
          'package/epfl-theme-elements-' + options.package.version +
            '-cdn.zip'
      },
      files: [{
        src: '**/*',
        cwd: 'release/<%= pkg.version %>/',
        dest: '',
        expand: true
      }]
    }
  };
};
