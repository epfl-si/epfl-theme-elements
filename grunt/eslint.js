/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, 2018-2021.
 */

'use strict';

module.exports = {
  options: {
    overrideConfigFile: '.eslintrc.json'
  },
  target: [
    '**/*.js',
    '!node_modules/**/*.js',
    '!tmp/**/*.js',
    '!dist/**/*.js',
    '!release/**/*.js'
  ]
};
