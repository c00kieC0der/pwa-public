var _Language = {}; _Lang = {}, _Locales = {};
    var langEvent = document.createEvent('Event');
    langEvent.initEvent('lang-builder', true, true);

    _Locales.isLTRLanguage = function (lang) {
        var rtlPrefix = ['fa-', 'ar-', 'ur-', 'he-'];
        if (lang) {
            for (var i = 0; i < rtlPrefix.length; i++) {
                if (lang.indexOf(rtlPrefix[i]) === 0) {
                    return true;
                }
            }
        }

        return false;
    };

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
                if (_User.lang === 'en-US') {
                    path = '/js-src/translations/';
                } else {
                    path = '/js-src/translated/' + localeMap[_User.lang] + '/';
                }
                helper.getJSON(path + 'app.json').then(function (result) {
                    _Lang = result;
                    helper.getJSON(path + 'metadata.json').then(function(result) {
                        _Locales.metadata = result;
                        document.getElementById('event-anchor').dispatchEvent(langEvent);
                        resolve();
                    });

                }, function (error) {
                    reject(error);
                });
            });
        });
    };

