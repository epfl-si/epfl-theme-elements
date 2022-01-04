/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, 2019-2021.
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
