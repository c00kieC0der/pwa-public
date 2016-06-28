var _Lang = {};

(function(){
    var path;
    var eventData = document.createEvent('Event');
    eventData.initEvent('lang-builder', true, true);
    _Lang.updateTranslations = function(){
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        console.log(_User.lang);
        if(_User.lang == 'en-US'){
            path = '/js-src/translations/app.json';
        } else {
            path = '/js-src/translated/' + _User.lang + '/app.json';
        }
        xobj.open('GET', path, true); // Replace 'my_data' with the path to your file
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                _Lang = xobj.responseText;
                document.getElementById('event-anchor').dispatchEvent(eventData);
            }
        };
        console.log(xobj);
        xobj.send(null);
    };
   if(_User.lang){
       _Lang.updateTranslations();
   }
})();
