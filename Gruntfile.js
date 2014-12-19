var LIVERELOAD_PORT=57999;

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json'),

    browserify: {
      dev: {
        files: {
          '.tmp/<%= pkg.main %>': ['src/<%= pkg.main %>'],
        },
        options: {
          transform: ['reactify', 'es6ify']
        }
      }
    },
    connect: {
      dev: {
        options: {
          port: 8080,
          base: './.tmp',
          hostname: '*',
          livereload: LIVERELOAD_PORT
        }
      }
    },
    watch: {
      js: {
        files: ['src/**/*.js', 'src/*.js'],
        tasks: ['browserify:dev']
      },
      livereload: {
        files: ['tmp/**/*.js', 'tmp/**/*.css'],
        options: { livereload: LIVERELOAD_PORT }
      }
    }
  });

  grunt.registerTask('dev', function() {
    grunt.task.run([
      'connect:dev',
      'browserify:dev',
      'watch'
    ]);
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.registerTask('default', 'dev');
 };
