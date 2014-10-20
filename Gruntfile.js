/*
 * Generated on 2014-05-05
 * generator-assemble v0.4.11
 * https://github.com/assemble/generator-assemble
 *
 * Copyright (c) 2014 Hariadi Hinta
 * Licensed under the MIT license.
 */

'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// '<%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%= config.src %>/templates/pages/**/*.hbs'

module.exports = function(grunt) {

    // show elapsed time at the end
    require('time-grunt')(grunt);

    // load all grunt tasks
    require('load-grunt-tasks')(grunt, {
        pattern : ['grunt-*', 'assemble']
    });

    // Project configuration.
    grunt.initConfig({

        config: {
            src: 'src',
            dist: 'dist',
            tmp: 'tmp',
            pack: 'pack'
        },

        watch: {
            assemble: {
            files: ['<%= config.src %>/{content,data,source}/**/*.{md,hbs,yml,json}'],
                tasks: ['assemble:dev']
            },
            scripts: {
                files: ['<%= config.src %>/{scripts,json, ajax}/**/*'],
                tasks: ['copy:dev']
            },
            compass: {
                files: ['<%= config.src %>/sass/**/*.{scss,sass}'],
                tasks: ['compass:dev']
            },
            images: {
                files: [
                    '<%= config.src %>/images/**/*.*',
                    '<%= config.src %>/images/sprites/**/*.*'
                ],
                tasks: ['copy:dev']
            },
            sprites: {
                files: [
                    '<%= config.src %>/images/sprites/**/*.*',
                    '<%= config.src %>/images/sprites/*.*'
                ],
                tasks: ['copy:dev', 'compass:dev']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= config.tmp %>/{,*/}*.html',
                    '<%= config.tmp %>/styles/**/*.css',
                    '<%= config.tmp %>/{,*/}*.js',
                    '<%= config.tmp %>/{,*/}*.json',
                    '<%= config.tmp %>/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            },
        },

        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // change this to '0.0.0.0' to access the server from outside
                hostname: '0.0.0.0'
            },
            dev: {
                options: {
                    port: 9000,
                    open: true,
                    base: [
                        '<%= config.tmp %>'
                    ]
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%= config.dist %>'
                }
            }
        },

        assemble: {
            dev: {
                options: {
                    flatten: true,
                    assets: '<%= config.tmp %>',
                    layout: 'default.hbs',
                    layoutdir: '<%= config.src %>/source/layouts',
                    helpers: ['<%= config.src %>/source/helpers/*.js'],
                    data: '<%= config.src %>/data/{,*/}*.{json,yml}',
                    partials: '<%= config.src %>/source/partials/**/*.hbs'
                },
                files: {
                    '<%= config.tmp %>/': ['<%= config.src %>/source/pages/{,*/}*.hbs']
                }
            },
            prod : {
                options: {
                    flatten: true,
                    assets: '<%= config.dist %>',
                    layout: 'default.hbs',
                    layoutdir: '<%= config.src %>/source/layouts',
                    helpers: ['<%= config.src %>/source/helpers/*.js'],
                    data: '<%= config.src %>/data/{,*/}*.{json,yml}',
                    partials: '<%= config.src %>/source/partials/**/*.hbs'
                },
                files: {
                    '<%= config.dist %>/': ['<%= config.src %>/source/pages/**/*.hbs']
                }
            }
        },

        compass: {
            dev: {
                options: {
                    sassDir: ['<%= config.src %>/sass'],
                    cssDir: ['<%= config.tmp %>/styles'],
                    environment: 'development',
                    generatedImagesDir: '<%= config.tmp %>/images',
                    imagesDir: '<%= config.src %>/images',
                    javascriptsDir: '<%= config.src %>/scripts',
                    fontsDir: '<%= config.src %>/fonts',
                    importPath: 'bower_components',
                    httpImagesPath: '/images',
                    httpGeneratedImagesPath: '/images',
                    httpFontsPath: '/fonts',
                    relativeAssets: false,
                    assetCacheBuster: false
                }
            },
            prod: {
                options: {
                    sassDir: ['<%= config.src %>/sass'],
                    cssDir: ['<%= config.dist %>/styles'],
                    environment: 'production',
                    generatedImagesDir: '<%= config.tmp %>/images',
                    imagesDir: '<%= config.src %>/images',
                    javascriptsDir: '<%= config.src %>/scripts',
                    fontsDir: '<%= config.src %>/fonts',
                    importPath: 'bower_components',
                    httpImagesPath: '/images',
                    httpGeneratedImagesPath: '/images',
                    httpFontsPath: '/fonts',
                    relativeAssets: false,
                    assetCacheBuster: false,
                    noLineComments: true,
                    outputStyle: 'compact'
                }
            }
        },

        concat: {

            options: {
                banner: '/*! <%= grunt.template.today("yyyy-mm-dd") %> */',
            },
            prod: {
                files: {
                    '<%= config.tmp %>/scripts/slds.scripts.js': [
                        '<%= config.src %>/scripts/slds.main.js',
                        '<%= config.src %>/scripts/plugins/*.js',
                        '!<%= config.src %>/scripts/handlebars_helpers.js'
                    ]
                }
            }
        },

        copy: {
            dev: {
                files: [
                    {
                        flatten: true,
                        expand: true,
                        src: [
                            'bower_components/jquery/dist/jquery.js',
                            'bower_components/modernizr/modernizr.js',
                            'bower_components/requirejs/require.js'
                        ],
                        dest: '<%= config.tmp %>/scripts/vendor'
                    },
                    {
                        expand: true,
                        cwd: '<%= config.src %>',
                        dest: '<%= config.tmp %>',
                        src: [
                            'favicon.ico',
                            'apple-touch-icon.png',
                            'slide_config.js',
                            'images/**/*',
                            'videos/**/*',
                            'fonts/{,*/}*.*',
                            'scripts/**/*.js',
                            'css/**/*.css'
                        ]
                    }
                ]
            },
            prod: {
                files: [
                    {
                        flatten: true,
                        expand: true,
                        src: [
                            'bower_components/jquery/dist/jquery.js',
                            'bower_components/modernizr/modernizr.js',
                            'bower_components/requirejs/require.js'
                        ],
                        dest: '<%= config.dist %>/scripts/vendor'
                    },
                    {
                        expand: true,
                        cwd: '<%= config.src %>',
                        dest: '<%= config.dist %>',
                        src: [
                            'favicon.ico',
                            'apple-touch-icon.png',
                            'images/**/*',
                            'videos/**/*',
                            'fonts/{,*/}*.*',
                            'ajax/**/*.*',
                        ]
                    },
                    {expand: true, cwd: '<%= config.tmp %>', src: ['images/sprites/*.png'], dest: '<%= config.dist %>'}
                ]
            },
            werk: {
                files: [
                    {expand: true, cwd: '<%= config.tmp %>/styles', src: ['**/*.css'], dest: '<%= config.dist %>/styles'}
                ]
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            dev : ['<%= config.tmp %>'],
            prod : ['<%= config.dist %>']
        },

        uglify: {
            options: {
                mangle: {
                    except: ['jQuery']
                },
                compress: {
                    // drop_console: true
                }
            },
            prod: {
                files: {
                    '<%= config.dist %>/scripts/slds.scripts.js': ['<%= config.tmp %>/scripts/slds.scripts.js'],
                    '<%= config.dist %>/scripts/vendor/slds.vendor.js': [
                        'bower_components/jquery/dist/jquery.min.js'
                    ]
                }
            }
        },

        useminPrepare: {
            options: {
                dest: '<%= config.dist %>'
            },
            html: '<%= config.dist %>/index.html'
        },

        usemin: {
            options: {
                dirs: ['<%= config.dist %>']
            },
            html: ['<%= config.dist %>/{,*/}*.html']
        },

        cssmin: {
            prod: {
                files: {
                    '<%= config.dist %>/styles/slds.styles.css': ['<%= config.tmp %>/styles/slds.styles.css']
                }
            }
        },

        imagemin: {
            prod: {
                options : {
                    optimizationLevel: 3
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.src %>/images',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: '<%= config.dist %>/images'
                }]
            }
        },

        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.src %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= config.dist %>/images'
                }]
            }
        },

        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.tmp %>/styles/',
                    src: '{,*/}*.css',
                    dest: '<%= config.tmp %>/styles/'
                }]
            }
        },

        concurrent: {
            server: [
                'compass:dev' //,
            ],
            prod: [
                'compass:prod',
                'imagemin',
                'svgmin'
            ],
            werk: [
                'compass:prod' //,
            ]
        },

        modernizr: {
            dist: {
                'devFile' : 'bower_components/modernizr/modernizr.js',
                'outputFile' : '<%= config.dist %>/scripts/vendor/modernizr.js',
                'uglify' : true
            }
        }

    });

    // All tasks
    grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:dev',
            'copy:dev',
            'compass:dev',
            'assemble:dev',
            'modernizr',
            'connect:dev',
            'watch'
        ]);
    });

    grunt.registerTask('build', [
        'clean:prod',
        'assemble:prod',
        'useminPrepare',
        'copy:prod',
        'concurrent:prod',
        // 'autoprefixer', // Breaks CSS Gradient
        'concat:prod',
        // 'cssmin',
        'uglify:prod',
        'usemin',
        'modernizr',
        'regex-replace'
    ]);

    grunt.registerTask('werk', [
        'clean:prod',
        'assemble:prod',
        'useminPrepare',
        'copy:prod',
        'concurrent:werk',
        'concat:prod',
        // 'cssmin',
        'uglify:prod',
        'usemin',
        'modernizr',
        'regex-replace'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);

};
