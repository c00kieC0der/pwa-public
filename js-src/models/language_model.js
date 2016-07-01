var _Language = {}; _Lang = {}, _Locales = {};


    var eventData = document.createEvent('Event');
    eventData.initEvent('lang-builder', true, true);

    var getJSON = function(path){
        return new Promise(function(resolve) {
            var xobj = new XMLHttpRequest();
            xobj.overrideMimeType("application/json");
            xobj.open('GET', path, true); // Replace 'my_data' with the path to your file
            xobj.onreadystatechange = function () {
                if (xobj.readyState == 4 && xobj.status == "200") {
                    resolve(JSON.parse(xobj.responseText));
                }
            };
            xobj.send(null);
        });
    };
    _Locales.getLocales = function(){
        return new Promise(function(resolve, reject){
            getJSON('/locales.json').then(function(result){
                resolve(result);
            }, function(error){
                reject(error);
            });
        });
    };
    _Language.updateTranslations = function(){
        return new Promise(function(resolve, reject){
            var path;
            if(_User.lang == 'en-US'){
                path = '/js-src/translations/app.json';
            } else {
                path = '/js-src/translated/' + _User.lang + '/app.json';
            }
            getJSON(path).then(function(result){
                _Lang = result;
                document.getElementById('event-anchor').dispatchEvent(eventData);
                resolve();
            }, function(error){
                reject(error);
            });
        });
    };

console.log(_Lang);

