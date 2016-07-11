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
            helper.getJSON('/js-src/siteSmartlingLocales.json').then(function(localeMap){
                var path;
                if (_User.lang == 'en-US') {
                    path = '/js-src/translations/';
                } else {
                    path = '/js-src/translated/' + localeMap[_User.lang] + '/';
                }
                console.log(path);

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
        });
    };

