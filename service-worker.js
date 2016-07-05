/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';


/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["assets/wxcards/day-clear.jpg","e481274d59f0040fefc87fe1af6d947b"],["assets/wxcards/day-ice.jpg","92a8946161e6096c7f33ea16b250841c"],["assets/wxcards/day-mostly-cloudy.jpg","eeb37b3554ae90eb25869c312310900d"],["assets/wxcards/day-partly-cloudy.jpg","57b29bfa1833311073c4286e8e5c81d6"],["assets/wxcards/day-rainy.jpg","d5bd65edc9f1f57b7b98ce13f31ac746"],["assets/wxicon/css/wxicon.css","f8bafc59f10a2c75c6d6a79a76dd3836"],["assets/wxicon/png/blowing-snow.png","3d90c7d9a5010fc110d65df83da260b4"],["assets/wxicon/png/clear-night.png","e03ae183f9a80b6538b8c8e5558ac64f"],["assets/wxicon/png/cloudy.png","f8b7c7c58769973caacb75ad98d4b6c2"],["assets/wxicon/png/flurries.png","1315a7d6217a01c4d25bfcf916ff1008"],["assets/wxicon/png/fog.png","2ae1ce5e71d78eed544f2c60c8d6928d"],["assets/wxicon/png/freezing-drizzle.png","a0b477a050f44dbc2d29e8587b24a13d"],["assets/wxicon/png/hail.png","e803f31585a8c3ca2aa9fb85501aaa14"],["assets/wxicon/png/heavy-rain.png","76b128d7885ed555323f6fb60b6c3aab"],["assets/wxicon/png/heavy-snow.png","19bc5256e25ca0ad49d0fd703990c64d"],["assets/wxicon/png/isolated-thunderstorms.png","3cf52f4c491a86fa890d719a687374b0"],["assets/wxicon/png/mostly-clear-night.png","4dc50b3458933651576c6046bd88b59f"],["assets/wxicon/png/mostly-cloudy-night.png","10c2db6e48e2afce28a8b388145f6ff7"],["assets/wxicon/png/mostly-cloudy.png","93dbecc9955b6de80d6b8cd0d7dac736"],["assets/wxicon/png/mostly-sunny.png","7a5ed41c09c85abea00a1a98b518b5ca"],["assets/wxicon/png/na.png","41742e7801528ba58b8d2099e283e947"],["assets/wxicon/png/partly-cloudy-night.png","bdb7e7a5a831f7fc2a7ea10550f21d83"],["assets/wxicon/png/partly-cloudy.png","6571258edb7e82e5fdc45df00dfbd534"],["assets/wxicon/png/rain-hail.png","90fb08e4d82b176c8527f3b37a0da474"],["assets/wxicon/png/rain-snow.png","8747c42ed4fdabbca796084fbe2759a1"],["assets/wxicon/png/rain.png","b4297bd974e52aaf61689e9f739bbeb1"],["assets/wxicon/png/scattered-showers-night.png","5c33c346ba59949900466888687b38ac"],["assets/wxicon/png/scattered-showers.png","effa261cdba2dfdf8a08acabe871165b"],["assets/wxicon/png/scattered-snow-night.png","24f9d010669040f04cc2971bf63b070d"],["assets/wxicon/png/scattered-snow.png","df0926170b918d49e97e9728804d2312"],["assets/wxicon/png/scattered-thunderstorms-night.png","249ebc9d032e5eb6d0696596d83e58b3"],["assets/wxicon/png/scattered-thunderstorms.png","d27d682a8a753c1f466857c83e21fbec"],["assets/wxicon/png/snow.png","985629dff6039856e3adb78a3378c7ed"],["assets/wxicon/png/sunny.png","92148d9c46c262612e1d84737758c3d3"],["assets/wxicon/png/thunderstorm.png","ac2c3e4e8fe560e106a0c9b8633db734"],["assets/wxicon/png/tornado.png","a1a024bef09597577e0697f147355e1b"],["assets/wxicon/png/tropical-storm.png","0322c8c00d0361ba7062865d6e40289e"],["assets/wxicon/png/wind.png","0fec833e38b6fdb82c5c352df26c5005"],["assets/wxicon/svg/blowing-snow.svg","f1cd7a4fcfa4796cae784a83306e9a3b"],["assets/wxicon/svg/clear-night.svg","5b6c78dc7f65008fd0d457ce798b2596"],["assets/wxicon/svg/cloudy.svg","75e9b18dd14309e0df778bca45686581"],["assets/wxicon/svg/flurries.svg","4b92b8b8b422e8ea9bb00b0cb7955f51"],["assets/wxicon/svg/fog.svg","ecfe1cc4ccccf1919c20c1cd701c1dca"],["assets/wxicon/svg/freezing-drizzle.svg","3c40b9159fab91436215e76f342e6319"],["assets/wxicon/svg/hail.svg","4dcd99dbbe6334bdf37e07dc7cd59ab4"],["assets/wxicon/svg/heavy-rain.svg","6edfbd2644825f7f42c2ae1240521ff5"],["assets/wxicon/svg/heavy-snow.svg","8ef396172b78ce7e7010b6b54f0cc607"],["assets/wxicon/svg/isolated-thunderstorms.svg","851334589c07bffd342bbe4120d6d018"],["assets/wxicon/svg/mostly-clear-night.svg","5d309d9481ed59ef5844ee1e95e88204"],["assets/wxicon/svg/mostly-cloudy-night.svg","437b1092261020b8a3183246bfcbcb35"],["assets/wxicon/svg/mostly-cloudy.svg","ae40fba58d92635d04d6cdfc164771e3"],["assets/wxicon/svg/mostly-sunny.svg","1fd2e2ab3b173dbffa0da5bcc3081a89"],["assets/wxicon/svg/na.svg","3d017bc1293ae1e89b1a4f59b87a2816"],["assets/wxicon/svg/partly-cloudy-night.svg","a71823280f40e16a53d03f767e9daf35"],["assets/wxicon/svg/partly-cloudy.svg","6044a7e4f1e4f7070bca222c127c2b51"],["assets/wxicon/svg/rain-hail.svg","cff58f7db20d3d409c66ffde3fa45f51"],["assets/wxicon/svg/rain-snow.svg","40515c8c73f42529625f768922a786c6"],["assets/wxicon/svg/rain.svg","fedd9de9d85ca3eec13f4e93243b1210"],["assets/wxicon/svg/scattered-showers-night.svg","b17bc34c7018218c7b58b700da1c567b"],["assets/wxicon/svg/scattered-showers.svg","a46e11f7aef37797906c233746b1863f"],["assets/wxicon/svg/scattered-snow-night.svg","dd6ade82791e6fb71a136733143c2ca6"],["assets/wxicon/svg/scattered-snow.svg","6532423e8b77a0f3e32444824a543707"],["assets/wxicon/svg/scattered-thunderstorms-night.svg","d6e3332eb4956f8e8a1eefbffcdaf105"],["assets/wxicon/svg/scattered-thunderstorms.svg","6a831c7c19036883a59e51aad8e7be34"],["assets/wxicon/svg/snow.svg","7126e18b445ef35ce7a0fd5cc1c5314e"],["assets/wxicon/svg/sunny.svg","a9c41e5f58817ff0cd6b38c2ff31e5fb"],["assets/wxicon/svg/thunderstorm.svg","b59f2709ab1d0b497c2751be4334e2ed"],["assets/wxicon/svg/tornado.svg","6a6e4020b23b1d492c976ff4bcf242c6"],["assets/wxicon/svg/tropical-storm.svg","af0d110386e1b83c3a8a782d84dd5a30"],["assets/wxicon/svg/wind.svg","cc48612ec5fbe8b54175a1c9c4e17299"],["assets/wxicon/wxicon.js","38f898b0a01c992a3917978c630b5a56"],["iconfont/wx-iconfont-global/fonts/wx-iconfont-global.eot","5410007e9c17acea64d783ce7d982735"],["iconfont/wx-iconfont-global/fonts/wx-iconfont-global.svg","5bdc11b52e9e3840b7765170e51801f6"],["iconfont/wx-iconfont-global/fonts/wx-iconfont-global.ttf","60e4755ae8344cec9bafd3dffaeb20ac"],["iconfont/wx-iconfont-global/fonts/wx-iconfont-global.woff","a453aa905b5bbcd49ea6af4c3ac17e21"],["iconfont/wx-iconfont-global/style.css","776806a6ef5eefef006fbbaeb8d85e67"],["iconfont/wx-iconfont-moon/fonts/wx-iconfont-moon.eot","d2be74e46d63a7a2bd69974ad788cdf1"],["iconfont/wx-iconfont-moon/fonts/wx-iconfont-moon.svg","d94644119436f7ec59956b2c604d47e4"],["iconfont/wx-iconfont-moon/fonts/wx-iconfont-moon.ttf","f546c1d7c07cbe18f572140831b425fc"],["iconfont/wx-iconfont-moon/fonts/wx-iconfont-moon.woff","0e7139fa2e9859656f055423032c0527"],["iconfont/wx-iconfont-moon/moon_icon.css","259c3f9186b56122e9197ddf71a23ce2"],["js-src/appShell.js","c200a1bd0881aa7ef9dc94082861a8be"],["js-src/helper_functions.js","3ade2afcaeb04753d068836586b26b6e"],["js-src/init.js","4118f325bb422236bfff9ec3264e62cd"],["js-src/models/content_model.js","0f07b329a28df1d417a8b54b0124b6d7"],["js-src/models/language_model.js","e69ef14e38aa004e82fadfcb98ff5019"],["js-src/models/locations_model.js","a774ca2eef385131b4521805f8037f61"],["js-src/models/router_model.js","997a6deeda85ff4d749b03a17c542517"],["js-src/models/user_model.js","c1e0fb9081c078a96777e9ee134f444b"],["js-src/models/wx_data_model.js","99054621f02b9e5133e7e8de3e879964"],["js-src/models/wxicon_model.js","87a814322fbec3e311adbc3ee627425d"],["js-src/vendor/ajax.js","ad8bfdbad04709c53cd71115c6758018"],["js-src/vendor/bower-quojs-3.0.5/quo.ajax.js","0f4d96274ca91d2956c9b6921bdc4f68"],["js-src/vendor/bower-quojs-3.0.5/quo.css.js","495388795b97c2de0fe023ab45acdee2"],["js-src/vendor/bower-quojs-3.0.5/quo.element.js","36264776851314d29ff884f92e9d2d2d"],["js-src/vendor/bower-quojs-3.0.5/quo.environment.js","4b3c6bfc7d2b8097f247a937ee84f678"],["js-src/vendor/bower-quojs-3.0.5/quo.events.js","73ebae058e993326dc0e587555b87c02"],["js-src/vendor/bower-quojs-3.0.5/quo.gestures.js","8f5f8cfa3512b7d6a06a8dabf067428b"],["js-src/vendor/bower-quojs-3.0.5/quo.js","5f4affa4691011727cff86ea3bbd77bf"],["js-src/vendor/bower-quojs-3.0.5/quo.output.js","ee8fb1c70348e693d78aad541063ed52"],["js-src/vendor/bower-quojs-3.0.5/quo.query.js","b4f6178c6fbdd2acf035cd6cca05fddd"],["js-src/vendor/bower-quojs-3.0.5/quo.standalone.js","66f6e8dd90f7be833b11d4d188562ebc"],["js-src/vendor/leaflet.min.js","726baa4184fe765296e6e165d071969b"],["js-src/vendor/metrics.js","0c38b1cb22230d4ea7c594a8442be9f1"],["templates/components/dropdown-li/dropdown-li.html","0f36c20ce0c39f8a767ec49017815769"],["templates/components/ls-24-hour-data/ls-24-hour-data.html","0c8989c6d120728b2fba7e5fc02ec7ee"],["templates/components/ls-hourly-data/ls-hourly-data.html","38c9c8cd2709fa2ea78bf103b21491a0"],["templates/js-min/modules/24-hour-forecast/24-hour-forecast-debug.js","ac6aceb767ad981c10628addf698ec4e"],["templates/js-min/modules/24-hour-forecast/24-hour-forecast-min.js","8d86572ae80a3a505a287d302424ab51"],["templates/js-min/modules/almanac/almanac-debug.js","b194e0bf9a9e1ddab244a782190bbd69"],["templates/js-min/modules/almanac/almanac-min.js","d41d8cd98f00b204e9800998ecf8427e"],["templates/js-min/modules/hourly-forecast/hourly-forecast-debug.js","805430cc21869706a732678b478ffe10"],["templates/js-min/modules/hourly-forecast/hourly-forecast-min.js","106e771d25bd3e7948aee2fbd9d2debf"],["templates/js-min/modules/page-toast/page-toast-debug.js","04cc5c4cc840510bee38de12d4a40d36"],["templates/js-min/modules/page-toast/page-toast-min.js","bc7f74a24bec6485dabc12281ff643cf"],["templates/js-min/modules/static-map/static-map-debug.js","f32c7b99d95dab3774887aa42ddbf910"],["templates/js-min/modules/static-map/static-map-min.js","063a2f84fe04abbbd248fd03e403c9a1"],["templates/js-min/modules/today-forecast/today-forecast-debug.js","0e14baa514265e40af2b065c157685b0"],["templates/js-min/modules/today-forecast/today-forecast-min.js","8400046664458178a77341996d14507c"],["templates/js-min/pages/fiveday/fiveday-debug.js","a9af7590a92ccd20fef11cfeaf97b900"],["templates/js-min/pages/fiveday/fiveday-min.js","d41d8cd98f00b204e9800998ecf8427e"],["templates/js-min/pages/hourly/hourly-debug.js","44f284d83274ce228f45662a58b1e45c"],["templates/js-min/pages/hourly/hourly-min.js","b4f732fd9fddd4c78214b76d9c024c45"],["templates/js-min/pages/map/map-debug.js","f5b7758070a04baf2aa0e7c9dd718375"],["templates/js-min/pages/map/map-min.js","3cc6c2f3c47480ba582b21ae26143d0a"],["templates/js-min/pages/monthly/monthly-debug.js","f7244e3ccda63c9a20a726a95367f8d4"],["templates/js-min/pages/monthly/monthly-min.js","d41d8cd98f00b204e9800998ecf8427e"],["templates/js-min/pages/tenday/tenday-debug.js","dce0d5dcf71cdf70e125fefad12ba323"],["templates/js-min/pages/tenday/tenday-min.js","0a9f5c3a275ad94eed565fa0daa0752f"],["templates/js-min/pages/today/today-debug.js","ec5fe7664e77b022e65b3c2d7880b48b"],["templates/js-min/pages/today/today-min.js","a6360ee47a9d0f6b75288313cd0305a6"],["templates/js-min/pages/weekend/weekend-debug.js","a9af7590a92ccd20fef11cfeaf97b900"],["templates/js-min/pages/weekend/weekend-min.js","d41d8cd98f00b204e9800998ecf8427e"],["templates/modules/24-hour-forecast/24-hour-forecast.js","ca6f5899f6de58245b0d001749d466b3"],["templates/modules/24-hour-forecast/24_hour_forecast.html","c33bbfbce9501329364525a23bce33fa"],["templates/modules/almanac/almanac.html","ca057d305999324d15affb99494d8421"],["templates/modules/almanac/almanac.js","b194e0bf9a9e1ddab244a782190bbd69"],["templates/modules/hourly-forecast/hourly-forecast.html","67532b027d75d7fb00cf40774563b2c6"],["templates/modules/hourly-forecast/hourly-forecast.js","805430cc21869706a732678b478ffe10"],["templates/modules/page-toast/page-toast.html","98652bb768e027f7c5a042431c25fbc4"],["templates/modules/page-toast/page-toast.js","d054faec483750444888261e91fdd6df"],["templates/modules/static-map/static-map.css","249618efb6388a7a0e2443f273c1cad7"],["templates/modules/static-map/static-map.html","a70a8d0012133258096ee6700229ae09"],["templates/modules/static-map/static-map.js","d9199bed1ff9c69c5e03f79a28c074c1"],["templates/modules/today-forecast/today-forecast.html","6de289dbcfa5eeb93d4f52932374e92c"],["templates/modules/today-forecast/today-forecast.js","fcea3e578c5016ff3b65d4d69bf7923f"],["templates/modules/weekend/weekend.html","40ebeca2e3a5f8df0337d7e7c20148a6"],["templates/modules/weekend/weekend.js","8d14b6301adf1e1ea98a1304e432f5e9"],["templates/pages/fiveday/fiveday.html","ffe2a13a2f45276ef56f81373f41866c"],["templates/pages/fiveday/fiveday.js","a9af7590a92ccd20fef11cfeaf97b900"],["templates/pages/hourly/hourly.css","d41d8cd98f00b204e9800998ecf8427e"],["templates/pages/hourly/hourly.html","0491a829ef51be39f1f373bcf811083e"],["templates/pages/hourly/hourly.js","44f284d83274ce228f45662a58b1e45c"],["templates/pages/map/map.html","6b511155ff6bdffb29eee2093fa7d81a"],["templates/pages/map/map.js","f5b7758070a04baf2aa0e7c9dd718375"],["templates/pages/monthly/monthly.html","7c95297b00f5c934eb25abd39482ae29"],["templates/pages/monthly/monthly.js","f7244e3ccda63c9a20a726a95367f8d4"],["templates/pages/tenday/tenday.html","02faaf1593117b2b9a5ed6abae178834"],["templates/pages/tenday/tenday.js","dce0d5dcf71cdf70e125fefad12ba323"],["templates/pages/today/today.html","862c88fec3bffbf9e877b1ee84e3ee2c"],["templates/pages/today/today.js","ec5fe7664e77b022e65b3c2d7880b48b"],["templates/pages/weekend/weekend.html","58b2ca548843e94cd0096dc8b301a07f"],["templates/pages/weekend/weekend.js","4c0c46d20005c3609ada12fc8b939d51"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v6--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




