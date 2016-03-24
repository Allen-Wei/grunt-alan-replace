/*
 * grunt-alan-replace
 * https://github.com/Allen-Wei/grunt-alan-replace
 *
 * Copyright (c) 2016 Alan Wei
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp']
        },

        // Configuration to be run (and then tested).
        alan_replace: {
            options: {
                keep: true  //是否保留源文件
            },
            main: {
                replaces: [{
                    src: "README.md",         //源文件
                    dest: "README.main.md",   //输出文件位置(如果不提供dest参数, 将会强制删除源文件之后才把替换后的内容写入到文件)
                    pattern: /alan/ig,        //把所有的alan替换成 Allen Wei
                    replace: "Allen Wei"
                },{
                src:"README.md",
                dest: "README.nowrap.md",
                pattern:/\s/g,    //删除所有的空白字符
                replace: ""
              }]
            },
            replace: {
              replaces:[{
                src:"README.md",
                dest:"README.replace.md",
                pattern:/`(.+)`/g,  //将所有的`包括的字符串用++包裹
                replace:"++$1++"
              } ]
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js']
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'alan_replace', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};
