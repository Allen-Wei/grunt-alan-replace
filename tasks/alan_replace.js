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

        var replacedCount = 0, unReplacedCount = 0;

        if (replaces && replaces.length) {

            var fs = require("fs");

            replaces.forEach(function(replace){
                grunt.log.writeln(replace.src);

                if (!fs.existsSync(replace.src)) {
                    unReplacedCount++;
                    grunt.log.warn("\tcan't find file:", replace.src);
                    grunt.log.writeln("\n");
                    return;
                }

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
                    grunt.log.writeln("\t>> haven't special dest file, delete source file.");
                }
                if (replace.dest !== replace.src) {
                    var keep = !!options.keep;
                    if (typeof(replace.keep) === "boolean") {
                        keep = replace.keep;
                    }
                    if (!keep) {
                        grunt.log.writeln("\t>> don't keep source file, delete source file.");
                        fs.unlinkSync(replace.src);
                    }
                }

                grunt.log.writeln("\t>> start write dest file: ", replace.dest);
                fs.writeFileSync(replace.dest, replacedText);
                grunt.log.writeln("\t>> replace end.");
                grunt.log.writeln("\n");
                replacedCount++;
            });

            grunt.log.writeln("all replace end.");
        } else {
            grunt.log.warn("empty replace.");
            grunt.log.writeln("");
        }
        grunt.log.success("Replaced: ", replacedCount, ". UnReplacedCount: ", unReplacedCount, ".");

        grunt.log.writeln("\n");
    });

};
