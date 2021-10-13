/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, 2018-2021.
 */

'use strict';

module.exports = function (grunt) {
  require('load-grunt-config')(grunt, {
    data: {
      pkg: grunt.file.readJSON('package.json')
    }
  });
};
