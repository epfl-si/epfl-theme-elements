/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2018.
 * See the LICENSE file for more details.
 */

'use strict';

module.exports = function (grunt, options) {
  return {
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
    },
    package: {
      files: [{
        expand: true,
        dot: true,
        cwd: 'dist/icons/',
        dest: 'package/icons/',
        src: ['**'],
        filter: 'isFile',
        rename: function (dest, src) {
          console.log(src);
          var ext = src.substr((src.lastIndexOf('.')));
          return dest + src.replace(ext, '-' + options.package.version + ext);
        }
      }]
    }
  };
};
