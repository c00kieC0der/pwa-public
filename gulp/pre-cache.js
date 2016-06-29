/**
 * Created by ljeff on 6/28/16.
 */
import gulp from 'gulp';
import minifyJS from 'gulp-uglify';
import fs from 'fs';
import path from 'path';
import swPrecache from 'sw-precache';
import rename from 'gulp-rename';
import tasks from './tasks';
import {uglifyOptions} from './tasks';

var rootDir = './';
var src = './';
var dist = './';

function minify() {
  return gulp.src([
      src + 'pwa-service-worker.js',
      src + 'pwa-service-worker-registration.js',
      src + '3rd-party-calls.js',
      src + 'adsController.js'
    ])
    .pipe(minifyJS(uglifyOptions))
    .pipe(rename(function(path) {
      path.extname = '.min.js';
    }))
    .pipe(gulp.dest(dist));
}

function preCache(callback) {
  swPrecache.write(path.join(src, 'pwa-service-worker.js'), {
    runtimeCaching: [{
      urlPattern: /jspm_packages/,
      handler: 'networkFirst'
    }, {
      urlPattern: /5001.js|.json}|.json/,
      handler: 'fastest',
      options: {
        cache: {
          maxEntries: 99,
          name: 'pwa-cache'
        }
      }
    }, {
      urlPattern: /.html/,
      handler: 'fastest',
      options: {
        cache: {
          maxEntries: 30,
          name: 'template-cache'
        }
      }
    }, {
      urlPattern: /.css/,
      handler: 'fastest',
      options: {
        cache: {
          maxEntries: 10,
          name: 'css-cache'
        }
      }
    }, {
      urlPattern: /gif|png|jpg|data:image/,
      handler: 'fastest',
      options: {
        cache: {
          maxEntries: 99,
          name: 'image-cache'
        }
      }
    }],
    staticFileGlobs: [
      '/js-src/**/*.{js,html,css,png,jpg,gif}'
    ],
    stripPrefix: rootDir,
    "verbose": true
  }, callback);
}

// generate service worker file
gulp.task(tasks.preCache, function() {
  preCache(function () {
    console.log('generated service-worker.js.');
    minify();
  });
});

export {preCache};