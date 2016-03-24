
module.exports = function(grunt) {
    grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		copy: {
			app: {
				expand: false, 
				src:"src/app.html",
				dest: "dist/app.html"
			}
		},
		uglify:{
			options: {
				banner:'',
				mangle: false
			},
			min:{
				files:{
					"dist/scripts/routes.min.js": "src/scripts/routes.js"
					, "dist/scripts/services.min.js": "src/scripts/services.js"
					, "dist/scripts/modules.min.js": "src/scripts/modules.js"
				}
			}
		},
		alan_replace:{
			options:{
				keep: false
			},
			app:{
				replaces:[{
					src:"dist/app.html",
					pattern:/\/(\w+)\.js"/g,
					replace:"\/$1.min.js?v=v1\""
				}]
			}
		},
		htmlmin:{
			min:{
				options:{
					removeComments: true,
					collapseWhitespace: true
				},
				files:{
					"dist/app.html":"src/app.html"
				}
			}
		}
	});


	
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-alan-replace");


	grunt.registerTask("default", ["copy", "uglify", "htmlmin",  "alan_replace"]);
};
