/*
 * grunt-alan-replace
 * https://github.com/Allen-Wei/grunt-alan-replace
 *
 * Copyright (c) 2016 Alan Wei
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('alan_replace', 'replace file content', function() {

        var options = this.options();

        var replaces = this.data.replaces;

        if (replaces && replaces.length) {

            var fs = require("fs");

            replaces.forEach((replace) => {
                grunt.log.writeln("handle: ", replace.src);

                var fileText = fs.readFileSync(replace.src).toString();
                var replacedText = "";
                if (typeof(replace.pattern) === "function") {
                    replacedText = replace.pattern.apply(grunt, [fileText]);
                } else {
                    replacedText = fileText.replace(replace.pattern, replace.replace);
                }

                if (!replace.dest) {
                    replace.dest = replace.src;
                    fs.unlinkSync(replace.src);
                    grunt.log.writeln("not special destination file, delete source file...");

                }
                if (replace.dest !== replace.src) {
                    var keep = !!options.keep;
                    if (typeof(replace.keep) === "boolean") {
                        keep = replace.keep;
                    }
                    if (!keep) {
                        fs.unlinkSync(replace.src);
                    }
                }

                grunt.log.writeln("start write file: ", replace.dest);
                fs.writeFileSync(replace.dest, replacedText);
                grunt.log.writeln("write end.");
            });
            grunt.log.writeln("all write end.");
        } else {
            grunt.log.warn("no replaces");
        }

    });

};
