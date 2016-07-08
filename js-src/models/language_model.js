var _Language = {}; _Lang = {}, _Locales = {};
    var eventData = document.createEvent('Event');
    eventData.initEvent('lang-builder', true, true);


    _Locales.getLocales = function(){
        return new Promise(function(resolve, reject){
            helper.getJSON('/locales.json').then(function(result){
                resolve(result);
            }, function(error){
                reject(error);
            });
        });
    };
    _Language.updateTranslations = function(){
        return new Promise(function(resolve, reject) {
            var path;
            if (_User.lang == 'en-US') {
                path = '/js-src/translations/';
            } else if (_User.lang.indexOf('ar') > -1) {
                path = '/js-src/translated/ar/';
            } else if (_User.lang.indexOf('pl') > -1) {
                path = '/js-src/translated/pl/';
            } else if (_User.lang.indexOf('ur') > -1) {
                path = '/js-src/translated/ur/';
            } else {
                path = '/js-src/translated/' + _User.lang + '/';
            }

            helper.getJSON(path + 'app.json').then(function (result) {
                _Lang = result;
                helper.getJSON(path + 'metadata.json').then(function(result) {
                    _Locales.metadata = result;
                });
                document.getElementById('event-anchor').dispatchEvent(eventData);
                resolve();
            }, function (error) {
                reject(error);
            });
        });
    };

