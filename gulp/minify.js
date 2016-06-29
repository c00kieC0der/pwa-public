/**
 * Created by ljeff on 6/28/16.
 */
import concat from 'gulp-concat';
import gulp from 'gulp';
import minify from 'gulp-uglify';
import rename from 'gulp-rename';
import runSequence from 'run-sequence';

import tasks from './tasks';
import {uglifyOptions} from './tasks';

var src = './';
var dist = './dist';

function concatJS() {
  return gulp.src([
      './js-src/vendor/metrics.js',
      './js-src/vendor/ajax.js',
      './assets/wxicon/wxicon.js',
      './js-src/helper_functions.js',
      './js-src/appShell.js',
      './js-src/models/user_model.js',
      './js-src/models/locations_model.js',
      './js-src/models/router_model.js',
      './js-src/models/wxicon_model.js',
      './js-src/models/wx_data_model.js'
    ])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./dist/'));
}

function minifyJS() {
  return gulp.src([
      'dist/*.js',
    ])
    .pipe(minifyJS(uglifyOptions))
    .pipe(rename(function(path) {
      path.extname = '.min.js';
    }))
    .pipe(gulp.dest(dist));
}

gulp.task(tasks.concatJS, function() {
  return gulp.src([
      './js-src/vendor/metrics.js',
      './js-src/vendor/ajax.js',
      './assets/wxicon/wxicon.js',
      './js-src/helper_functions.js',
      './js-src/appShell.js',
      './js-src/models/user_model.js',
      './js-src/models/locations_model.js',
      './js-src/models/router_model.js',
      './js-src/models/wxicon_model.js',
      './js-src/models/wx_data_model.js'
    ])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task(tasks.minifyJS, function() {
  return gulp.src([
      'dist/*.js',
    ])
    .pipe(minify(uglifyOptions))
    .pipe(rename(function(path) {
      path.extname = '.min.js';
    }))
    .pipe(gulp.dest(dist));
});

gulp.task(tasks.bundle, function() {
  runSequence(tasks.concatJS, tasks.minifyJS);
});
