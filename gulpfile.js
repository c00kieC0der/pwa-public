/*
 LICENSE
 The MIT License (MIT)

 Copyright (c) 2015 Spencer Alger

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var gulp = require('gulp');
var fs = require('fs');
var _ = require('underscore');
var request = require('request');
var localesConfig = require('./locales.json');
var childProcess = require('child_process');
var jshint = require('gulp-jshint')
var jasmine = require('gulp-jasmine');
var exec = childProcess.exec;
var minify = require('gulp-minify');
var concat = require('gulp-concat');
var webserver = require('gulp-webserver');
var path = require('path');
var swPrecache = require('sw-precache');
var argv = require('yargs').argv;
var autoprefixer = require('gulp-autoprefixer');
var rtlcss = require('gulp-rtlcss');
var rename = require('gulp-rename');
var mergeStream = require('merge-stream');
var originalLocales = [
    'ar',
    'bn-BD',
    'ca-ES',
    'cs-CZ',
    'da-DK',
    'de-DE',
    'el-GR',
    'en-GB',
    'en-CA',
    'en-IN',
    //  'es-LA'
    'es-ES',
    'es-US',
    'fa-IR',
    'fi-FI',
    'fr-FR',
    'fr-CA',
    'he-IL',
    'hi-IN',
    'hr-HR',
    'hu-HU',
    'id-ID',
    'it-IT',
    'ja-JP',
    'ko-KR',
    'ms-MY',
    'nl-NL',
    'no-NO',
    'pl',
    'pt-PT',
    'pt-BR',
    'ro-RO',
    'ru-RU',
    'sv-SE',
    'sk-SK',
    'th-TH',
    'tl-PH',
    'tr-TR',
    'uk-UA',
    'ur',
    'vi-VN',
    'zh-CN',
    'zh-TW'
];
gulp.task('generate-service-worker', function(callback) {
    var rootDir = './';
    swPrecache.write(path.join(rootDir, 'service-worker.js'), {
        staticFileGlobs: [
            rootDir + '/ss-SS/assets/**/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}',
            rootDir + '/ss-SS/iconfont/**/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}',
            rootDir + '//**/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}',
            rootDir + '/ss-SS/js-src/**/*.js',
            rootDir + '/ss-SS/js-src/*.js'
        ],
        stripPrefix: rootDir
    }, callback);
});

gulp.task('webserver', function() {
    gulp.src('')
        .pipe(webserver({
            livereload: false,
            port: 5001,
            open: true,
            fallback : 'index.html'
        }));
});
gulp.task('js-concat', function() {
    gulp.src(['./ss-ss/js-min/ajax-min.js', './ss-SS/js-min/moment-with-locales-min.js', './ss-SS/js-min/helper_functions-min.js', './ss-SS/js-min/user_model-min.js', './ss-SS/js-min/language_model-min.js', './ss-SS/js-min/locations_model-min.js', './ss-SS/js-min/router_model-min.js', './ss-SS/js-min/*-min.js'])
        .pipe(concat('./ss-SS/backend.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('js-minify', function() {
    gulp.src(['./ss-SS/js-src/models/*.js', './ss-SS/js-src/vendor/ajax.js', './ss-SS/js-src/vendor/moment-with-locales.js'])
        .pipe(minify({
            ext:{
                src:'-debug.js',
                min:'-min.js'
            },
           // exclude: ['tasks'],
            ignoreFiles: ['-min.js']
        }))
        .pipe(gulp.dest('./ss-SS/js-min'));
    gulp.src('./ss-SS/js-src/*.js')
        .pipe(minify({
            ext:{
                src:'-debug.js',
                min:'-min.js'
            },
            // exclude: ['tasks'],
            ignoreFiles: ['-min.js']
        }))
        .pipe(gulp.dest('./ss-SS/js-min'));
    gulp.src('./ss-SS/js-src/*.js')
        .pipe(minify({
            ext:{
                src:'-debug.js',
                min:'-min.js'
            },
            // exclude: ['tasks'],
            ignoreFiles: ['-min.js']
        }))
        .pipe(gulp.dest('./ss-SS/js-min'));
    gulp.src('./ss-SS/js-src/ads/*.js')
        .pipe(minify({
            ext:{
                src:'-debug.js',
                min:'-min.js'
            },
            // exclude: ['tasks'],
            ignoreFiles: ['-min.js']
        }))
        .pipe(gulp.dest('./ss-SS/js-min/ads/'));
});

gulp.task('lint', function(){
    gulp.src('./ss-SS/js-src/models/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
    gulp.src('./ss-SS/js-src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
    gulp.src('./ss-SS/templates/*/*/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
    return;
});

gulp.task('unit', function(){
    gulp.src('./spec/test.js')
        // gulp-jasmine works on filepaths so you can't have any plugins before it
        .pipe(jasmine())
});


gulp.task('css-minify', function() {
    // Currently done through compass compiling.
});

// RTL content with autoprefixer
gulp.task('css-rtl', function () {
    var args = argv;
    // if there is --style-module passed then do below.
    if(args.module) {
        console.log(args.module);
        return gulp.src(['ss-SS/styles/**/*.css', '!ss-SS/styles/**/*-rtl.css'], {base: 'ss-SS/styles/**/' })
            .pipe(autoprefixer(["last 2 versions", "> 1%"]))
            .pipe(gulp.dest('ss-SS/styles/**/')) // Output LTR stylesheets.
            .pipe(rtlcss()) // Convert to RTL.
            .pipe(rename({ suffix: '-rtl' })) // Append "-rtl" to the filename.
            .pipe(gulp.dest('ss-SS/styles/**/')); // Output RTL stylesheets.
    }
    var styles = gulp.src(['ss-SS/styles/**/*.css', '!ss-SS/styles/**/*-rtl.css'], {base: 'ss-SS/styles/**/' })
        .pipe(autoprefixer(["last 2 versions", "> 1%"]))
        .pipe(gulp.dest('ss-SS/styles/**/')) // Output LTR stylesheets.
        .pipe(rtlcss()) // Convert to RTL.
        .pipe(rename({ suffix: '-rtl' })) // Append "-rtl" to the filename.
        .pipe(gulp.dest('ss-SS/styles/**/')); // Output RTL stylesheets.
                                        //
    var templates = gulp.src(['templates/modules/**/*.css', '!templates/modules/**/*-rtl.css'], {base: 'templates/modules/**/' })
        .pipe(autoprefixer(["last 2 versions", "> 1%"]))
        .pipe(gulp.dest('ss-SS/templates/modules/**/')) // Output LTR stylesheets.
        .pipe(rtlcss()) // Convert to RTL.
        .pipe(rename({ suffix: '-rtl' })) // Append "-rtl" to the filename.
        .pipe(gulp.dest('ss-SS/templates/modules/**/')); // Output RTL stylesheets.
    return mergeStream([styles, templates]);

});


gulp.task('download-translations', function() {
    fs.readFile('./keys.json', 'utf-8', function(err, data) {
        if (err) {
            // If no keys.json file exists then return
            console.log('No keys.json file exists with Smartling credentials');
            return;
        }

        var keys = JSON.parse(data);
        var projectId = '2cac53913';
        //var locales = _.uniq(_.pluck(localesConfig, 'smartlingLocale'));

        //console.log(locales);
        // Remove en-US locale
        //locales = _.without(locales, 'en-US');

        // Get access token
        var options = {
            url: 'https://api.smartling.com/auth-api/v2/authenticate',
            method: 'POST',
            json: true,
            body: {
                userIdentifier: keys.smartling.userIdentifier,
                userSecret: keys.smartling.userSecret
            }
        };
        request(options, function(error, response, body) {
            var accessToken = body.response.data.accessToken;
            console.log('error', error, ' body', body);

            // Download files
            var options = {
                url: 'https://api.smartling.com/files-api/v2/projects/' + projectId + '/files/zip',
                method: 'GET',
                qs: {
                    fileUris: ['app.json'],
                    localeIds: originalLocales
                },
                qsStringifyOptions: {
                    arrayFormat: 'brackets'
                },
                headers: {
                    Authorization: 'Bearer ' + accessToken
                }
            };

            request(options)
                .on('error', function(err) {
                    console.log(err);
                })
                .pipe(fs.createWriteStream('./translations.zip'))
                .on('close', function() {
                    var destinationDir = './ss-SS/js-src/translated';
                    var unzipError = false;
                    var child = exec('unzip -o translations.zip -d ' + destinationDir, {async: true});

                    child.stderr.on('data', function(error) {
                        console.log(error);
                        unzipError = true;
                    });

                    child.stdout.on('close', function(data) {
                        if (!unzipError) {
                            console.log('Translations successfully downloaded to ' + destinationDir);
                        } else {
                            console.log('There was an error unzipping the translations ZIP file');
                        }
                    });
                });
        });
    });
});

gulp.task('upload-translations', function() {

    fs.readFile('./keys.json', 'utf-8', function(err, data) {
        if (err) {
            // If no keys.json file exists then return
            console.log('No keys.json file exists with Smartling credentials');
            return;
        }
        var keys = JSON.parse(data);
        var projectId = '2cac53913';

        // Get access token
        var options = {
            url: 'https://api.smartling.com/auth-api/v2/authenticate',
            method: 'POST',
            json: true,
            body: {
                userIdentifier: keys.smartling.userIdentifier,
                userSecret: keys.smartling.userSecret
            }
        };

        request(options, function(error, response, body) {
            var accessToken = body.response.data.accessToken;

            // Upload files
            var options = {
                url: 'https://api.smartling.com/files-api/v2/projects/' + projectId + '/file',
                method: 'POST',
                formData: {
                    file: fs.createReadStream('./ss-SS/js-src/translations/app.json'),
                    fileUri: ['app.json'],
                    fileType: 'json',
                    authorize: 'true'
                },
                headers: {
                    Authorization: 'Bearer ' + accessToken
                }
            };

            request(options, function(error, response, body) {
                console.log(error, body);
            });
        });
    });
});

gulp.task('all', function(){
    //all default tasks.
});

gulp.task('all', ['js-minify', 'js-concat']);
