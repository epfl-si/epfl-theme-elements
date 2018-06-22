/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2018.
 * See the LICENSE file for more details.
 */

'use strict';

module.exports = function (grunt, options) {
  return {
    release: {
      options: {
        archive:
          'package/epfl-theme-elements-v' + options.package.version + '.zip'
      },
      files: [{
        src: '**/*',
        cwd: 'release/',
        dest: '',
        expand: true
      }]
    }
  };
};
