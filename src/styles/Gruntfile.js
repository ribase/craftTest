module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt); // load all necessery task for grunt

    grunt.initConfig({
        // *******************************
        // *          NODE-SASS          *
        // *******************************
        // - for the options see https://github.com/sass/node-sass#options
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                options: {
                    outpusStyle: 'nested'
                },
                files: {
                    'build/css/styles.css': [
                        'scss/bootstrap.scss'
                    ]
                }
            }
        },
        // *******************************
        // *      JavaScript             *
        // *******************************
        uglify: {
            my_target: {
                files: {
                    '../web/assets/js/app.min.js': [
                        'js/vendor/jquery.min.js',
                        'js/src/custom.js'
                    ]
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    '../web/assets/css/styles.min.css': [
                        'build/css/styles.css']
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions',
                    'ie >= 9',
                    'Android >= 2.3',
                    'ChromeAndroid > 20',
                    'FirefoxAndroid > 20',
                    'iOS >= 8']
                // map: true
            },
            single_target: {
                src: 'dist/css/styles.min.css',
                dest: 'dist/css/styles.min.css'
            }
        },
        copy: {
            fonts: {
                expand: true,
                cwd: 'fonts',
                src: '**',
                dest: 'dist/fonts'
            },
            icon: {
                expand: true,
                cwd: 'icons',
                src: '**',
                dest: 'dist/icons'
            },
            svg: {
                expand: true,
                cwd: 'images/',
                src: ['*.svg','*.jpeg'],
                dest: 'dist/images'
            }
        },
        htmlmin: {                                     // Task
            dist: {                                      // Target
                options: {                                 // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {                                   // Dictionary of files
                    'dist/index.html': 'build/index.html'    // 'destination': 'source'
                }
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'images/',                   // Src matches are relative to this path
                    src: ['**/*.{png,JPG,gif}'],   // Actual patterns to match
                    dest: 'dist/images/'                  // Destination path prefix
                }]
            }
        },
        replace: {
            dist: {
                options: {
                    patterns: [
                        {
                            match: /\.\.\/dist\//g,
                            replacement: ''
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['index.html'],
                        dest: 'build/'
                    }
                ]
            }
        },
        watch: {
            grunt: {
                files: ['Gruntfile.js']
            },
            autoprefixer: {
                files: 'css/styles.css',
                tasks: ['autoprefixer']
            },
            uglify: {
                files: 'js/**/*.js',
                tasks: ['uglify']
            },
            cssmin: {
                files: 'css/styles.css',
                tasks: ['cssmin']
            },
            compress: {
                files: 'css/styles.min.css',
                tasks: ['compress']
            },
            sass: {
                files: ['scss/**/*.scss'],
                tasks: ['sass', 'cssmin']
            },
            htmlmin: {
                files: ['*.html'],
                tasks: ['htmlmin']
            },
            copy: {
                files: ['*.html'],
                tasks: ['replace', 'copy']
            }
        }
    });

    // *******************************
    // *          TASKS              *
    // *******************************
    grunt.registerTask('prod', ['sass', 'cssmin', 'uglify', 'imagemin','replace', 'htmlmin', 'copy', 'autoprefixer']);
    grunt.registerTask('no-compress', ['sass', 'cssmin', 'uglify', 'imagemin','replace', 'htmlmin', 'copy', 'autoprefixer']);
    grunt.registerTask('plain', ['sass', 'imagemin', 'htmlmin','replace', 'copy', 'autoprefixer']);
    grunt.registerTask('default', ['prod', 'watch']);
};
