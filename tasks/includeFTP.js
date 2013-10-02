/*
 * grunt-git-ftp-include
 * https://github.com/GuilhermeMedeiros/grunt-git-ftp-include
 *
 * Copyright (c) 2013 Guilherme Medeiros
 * Licensed under the MIT license.
 * https://github.com/GuilhermeMedeiros/grunt-git-ftp-include/blob/master/LICENSE
 */

'use strict';
module.exports = function (grunt) {

	grunt.registerMultiTask('includeFTP', 'Generate .git-ftp-include file to upload untracked files', function () {

		var options = this.options({verbose: true, timestamp: true});
		var done = this.async();
		var path = require('path');

		var log = function(data){
			return grunt.log.writeln(JSON.stringify(data, null, 4));

		}

		var contents = '';

		this.files.forEach(function (file) {

			var files = file.src;


			// check to see if src has been set
			if (typeof file.src === "undefined") {
				grunt.fatal('Need to specify which files to include in the .git-ftp-include', 2);
			}

			// Exclude files
			if (options.exclude) {
				files = files.filter(function (item) {
					return options.exclude.indexOf(item) === -1;
				});
			}

			// add files to explicit cache
			if (files) {
				files.forEach(function (item) {
					contents += file.dest + ':' + encodeURI(item) + '\n';
				});
			}

		});

		grunt.log.ok(contents);
		grunt.file.write('.git-ftp-include', contents);
		done();

	});

};