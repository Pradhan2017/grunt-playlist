module.exports = function(grunt){

    // Configuration
    grunt.initConfig({
        //pass in options to plugins, references to files etc
        concat: {
            js: {
                src: ['js/*.js'],
                dest: 'build/scripts.js'
            },
            css: {
                src: ['css/reset.css', 'css/bootstrap.css', 'css/styles.css'],
                dest: 'build/styles.css'
            }
        },

        sass: {
            build: {
                files: [{
                    src: 'css/sass/styles.scss',
                    dest: 'css/styles.css'
                }]
            }
        },

        uglify: {
            build: {
                files: [{
                    src: 'build/scripts.js',
                    dest: 'build/scripts.js'
                }]
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Register tasks
    // grunt.registerTask('run', function(){
    //     console.log('I am running');
    // });

    grunt.registerTask('concat-js', ['concat:js']);
    grunt.registerTask('concat-css', ['concat:css']);

};
