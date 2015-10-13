module.exports = function(grunt) {
    "use strict";

    var EMPTY = "empty:";
    var pkg = grunt.file.readJSON('package.json');

    function include(paths) {

        var widgets = [];

        paths.forEach(function(path){
            widgets = widgets.concat(grunt.file.expand(path).map(function (file) {
                if(file.indexOf(".jsx") > -1){
                    return file.replace("public/", "jsx!").replace(".jsx", "");
                }
                if(file.indexOf(".svg") > -1){
                    return file.replace("public/", "text!");
                }
                else{
                	return file.replace("public/", "").replace(".js", "");;
                }
            }));
        });

        return widgets;
    }

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-requirejs");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks('grunt-processhtml');

    grunt.registerTask("default", ["requirejs", "uglify:version"]);

    grunt.initConfig({
        pkg: pkg,
        meta: {
            version: "<%= pkg.version %>",
            banner: "// <%= pkg.name %> - <%= pkg.version %> @ <%= grunt.template.today('yyyy-mm-dd HH:MM:ss') %> \r\n"
        },
        requirejs: {
            version: {
                options: {
                    baseUrl: 'public',
				    paths: {
				        'director' : 'packages/director/build/director.min',
				        'jquery' : 'packages/jquery/dist/jquery.min',
				        'velocity' : 'packages/velocity/velocity.min'
				    },
				    packages:[
				        {
				            name : 'less',
				            location : 'packages/require-less',
				            main : 'less'
				        },
				        {
				            name:'when',
				            location:'packages/when',
				            main:'when'
				        }
				    ],
				    include:[
							'less',
							'when',
							'director',
							'jquery',
							'velocity'
						]
						.concat(
							include(["public/pages/home/index.js"])
						),
                    out: "public/pages/home/all.built.js",
                    optimize: "none"
                }
            }
        },
        //复制静态资源
        copy: {
            version: {
                files: [{
                    expand: true,
                    cwd: "client/source/dev",
                    src: "**",
                    dest: "client/source/<%= pkg.version %>"
                }]
            }
        },
        uglify:{
            version:{
                files: {
                    "public/pages/home/all.built.min.js": ["public/pages/home/all.built.js"]
                }
            }
        }
    });
};
