/**
 * Created by ecook on 6/5/16.
 */
var _SW = {};

//require('serviceworker-cache-polyfill');

var version = 'v1';
var staticCacheName = 'twc-pwa-static';

self.oninstall = function(event) {
    self.skipWaiting();

    event.waitUntil(
        caches.open(staticCacheName).then(function(cache) {
            return cache.addAll([
                '/pwa/',
                '/pwa/iconfont/wx-iconfont-global/fonts/wx-iconfont-global.eot',
                '/pwa/iconfont/wx-iconfont-global/fonts/wx-iconfont-global.svg',
                '/pwa/iconfont/wx-iconfont-global/fonts/wx-iconfont-global.ttf',
                '/pwa/iconfont/wx-iconfont-global/fonts/wx-iconfont-global.woff',
                '/pwa/iconfont/wx-iconfont-global/style.css',
                '/pwa/js/models/language_model.js',
                '/pwa/js/models/locations_model.js',
                '/pwa/js/models/map_model.js',
                '/pwa/js/models/metrics_model.js',
                '/pwa/js/models/router_model.js',
                '/pwa/js/models/user_model.js',
                '/pwa/js/models/wx_data_model.js',
                '/pwa/styles/core.css'
            ]);
        })
    );
};

var expectedCaches = [
    staticCacheName,
    'twc-pwa-imgs',
    'twc-pwa-data'
];

self.onactivate = function(event) {
    if (self.clients && clients.claim) {
        clients.claim();
    }

    // remove caches beginning "trains-" that aren't in
    // expectedCaches
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (/^twc-/.test(cacheName) && expectedCaches.indexOf(cacheName) == -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
};

/*self.onfetch = function(event) {
    var requestURL = new URL(event.request.url);

    //if (requestURL.hostname == '/something_specific') {  //do something};
    //otherwise.
    event.respondWith(
        caches.match(event.request,
       {
            ignoreVary: true
        })
    );
};*/

_SW.success = function(){

};
_SW.failure = function(){
  //Someway to fail gracefully?
};