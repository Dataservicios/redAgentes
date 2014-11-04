module.exports = function(grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            main: {
                expand: true,
                cwd: 'src/',
                src: ["**", "!css/**/*.less","!css/stylesheet.css"],
                dest: 'dist/'
            }
        },
        less: {
            options: {
                paths: ['src/css']
            },
            src: {        
                expand: true,
                cwd:    "src/css",
                src:    "stylesheet.less",
                ext:    ".css",
                dest:   "src/css"
            }
        },
        cssmin: {
          minify: {
            expand: true,
            cwd: 'src/css',
            src: ['*.css', '!*.min.css'],
            dest: 'src/css/',
            ext: '.min.css'
          }
        },

        watch: {
            options: {
                nospawn: true,
                livereload: true
            },
            less: {
                files: ['src/css/**/*.less'],
                tasks: ['less']
            },
            cssmin: {
                files: ['src/css/**/*.less'],
                tasks: ['cssmin']
            },
            copy: {
                files: ['src/**'],
                tasks: ['copy:main']
            }
        }
        
    });

    grunt.registerTask('default', ['watch']);
};