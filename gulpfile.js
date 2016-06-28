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
var cors = require('cors');

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
    return gulp.src(['./js-min/user_model-min.js', './js-min/locations_model-min.js', './js-min/helper_functions-min.js', './js-min/router_model-min.js', './js-min/*-min.js'])
        .pipe(concat('backend.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('js-minify', function() {
    gulp.src('./js-src/models/*.js')
        .pipe(minify({
            ext:{
                src:'-debug.js',
                min:'-min.js'
            },
           // exclude: ['tasks'],
            ignoreFiles: ['-min.js', 'content_model.js']
        }))
        .pipe(gulp.dest('js-min'));
    gulp.src('./js-src/*.js')
        .pipe(minify({
            ext:{
                src:'-debug.js',
                min:'-min.js'
            },
            // exclude: ['tasks'],
            ignoreFiles: ['-min.js']
        }))
        .pipe(gulp.dest('js-min'));
    gulp.src('./templates/*/*/*.js')
        .pipe(minify({
            ext:{
                src:'-debug.js',
                min:'-min.js'
            },
            // exclude: ['tasks'],
            ignoreFiles: ['-min.js']
        }))
        .pipe(gulp.dest('./templates/js-min'));
});

gulp.task('lint', function(){
    gulp.src('./js-src/models/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
    gulp.src('./js-src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
    gulp.src('./templates/*/*/*.js')
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
    // place code for your default task here
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
        var locales = _.uniq(_.pluck(localesConfig, 'smartlingLocale'));

        // Remove en-US locale
        locales = _.without(locales, 'en-US');

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
          //  var accessToken = body.response.data.accessToken;
            var accessToken = 'eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJiNjA4ZWJlZC1lMmJkLTQxOTEtOTcwMy02NDgyN2IzMzNlMmYiLCJleHAiOjE0NjcxMjg5OTUsIm5iZiI6MCwiaWF0IjoxNDY3MTI4Njk1LCJpc3MiOiJodHRwczovL3Nzby5zbWFydGxpbmcuY29tL2F1dGgvcmVhbG1zL1NtYXJ0bGluZyIsImF1ZCI6ImF1dGhlbnRpY2F0aW9uLXNlcnZpY2UiLCJzdWIiOiIwYTIzYzY2MC0xMjExLTQ4YjUtODM4MC03ZTJiZjE5MWY5OTMiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhdXRoZW50aWNhdGlvbi1zZXJ2aWNlIiwic2Vzc2lvbl9zdGF0ZSI6ImMwMDRhYWM5LTc3ZDQtNDljYy04MzgzLWIxOWRiZjkyZDQzNyIsImNsaWVudF9zZXNzaW9uIjoiMTYwYmQ2ZTMtYjEwZS00MDdlLWFlNDYtNzYyYzE0NDU2Y2E4IiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlJPTEVfQVBJX1VTRVIiLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsInZpZXctcHJvZmlsZSJdfX0sInVpZCI6IjJjYWM1MzkxMyIsIm5hbWUiOiJwd2EtYXV0aC11c2VyIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYXBpOmZ3c3V2bXVhcmtqZGtrcHZ5eWxxbHVibWh5ZXVtZyIsImVtYWlsIjoiYXBpVXNlcitwcm9qZWN0KzJjYWM1MzkxM0BzbWFydGxpbmcuY29tIn0.Whn1rw5W7zjOe0xMJ3dO4NXJeSVgUZ2kuJv-np3_Whk5aJ8ygEKVMa6NHXXo3A7BjuoBkIiRnp6QI3-mEZoSMLlXAwf7H75QqokKZdqRhfqlvws5voRfMqUAT8nnV1D7ukeMaD4uhASxbDWPcaRx9-gpf2A2PiuWI0OJuqT1alk';
            console.log('error', error, ' body', body);
console.log(locales);
            // Download files
            var options = {
                url: 'https://api.smartling.com/files-api/v2/projects/' + projectId + '/files/zip',
                method: 'GET',
                qs: {
                    fileUris: ['app.json'],
                    localeIds: ['fr-FR']
                },
                qsStringifyOptions: {
                    arrayFormat: 'brackets'
                },
                headers: {
                    Authorization: 'Bearer' + accessToken
                }
            };
console.log(request)
            request(options)
                .on('error', function(err) {
                    console.log(err);
                })
                .pipe(fs.createWriteStream('./translations.zip'))
                .on('close', function() {
                    var destinationDir = 'js-src/translated';
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
            console.log(body.response);
            var accessToken = body.response.data.accessToken;

            // Upload files
            var options = {
                url: 'https://api.smartling.com/files-api/v2/projects/' + projectId + '/file',
                method: 'POST',
                formData: {
                    file: fs.createReadStream('./js-src/translations/app.json'),
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

gulp.task('all', ['lint', 'js-minify', 'js-concat']);
