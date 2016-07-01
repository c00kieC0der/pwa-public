//require('serviceworker-cache-polyfill');

var version = 'v1';
var staticCacheName = 'twc-pwa-static';

self.addEventListener('install', function(e) {
    console.log('installed? ');
    self.skipWaiting();

    e.waitUntil(
        caches.open(staticCacheName).then(function(cache) {
            return cache.addAll([
                '/',
                '/iconfont/wx-iconfont-global/fonts/wx-iconfont-global.eot',
                '/iconfont/wx-iconfont-global/fonts/wx-iconfont-global.svg',
                '/docroot/iconfont/wx-iconfont-global/fonts/wx-iconfont-global.ttf',
                '/docroot/iconfont/wx-iconfont-global/fonts/wx-iconfont-global.woff',
                '/docroot/iconfont/wx-iconfont-global/style.css',
                '/docroot/backend.js',
                '/docroot/styles/core.css'
            ]);
        })
    );
});


console.log(caches);
var expectedCaches = [
    staticCacheName,
    'twc-pwa-imgs',
    'twc-pwa-data'
];

self.onactivate = function(event) {
    if (self.clients && clients.claim) {
        clients.claim();
    }
    console.log('on activation');

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

self.onfetch = function(event) {
    console.log('on fetch?? ');
    var dataUrl = 'https://api.weather.com/v2/turbo/vt1fifteenminute;vt1hourlyForecast;vt1precipitation;vt1currentdatetime;vt1pollenforecast;vt1dailyForecast;vt1observation;vt1alerts?';
    if (e.request.url.indexOf(dataUrl) === 0) {
        e.respondWith(
            fetch(e.request)
                .then(function(response) {
                    return caches.open('twc-pwa-data').then(function(cache) {
                        cache.put(e.request.url, response.clone());
                        console.log('[ServiceWorker] Fetched&Cached Data');
                        return response;
                    });
                })
        );
    } else {
        event.respondWith(
            caches.match(event.request,
                {
                    ignoreVary: true
                })
        );
    }
};
