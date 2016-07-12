var _Locations = {};
(function(){

var eventLocations = document.createEvent('Event');
eventLocations.initEvent('builder-locations', true, true);

_Locations.searchLocs = function(term){

    //TODO:: Translate the locations.
    var tempLang = _User.lang.replace('-', '_');
    var getLocUrl = 'https://dsx.weather.com/x/v2/web/loc/' + tempLang + '/1/4/5/9/11/13/19/21/1000/1001/1003//us%5E/(' +
        term + ')?api=7bb1c920-7027-4289-9c96-ae5e263980bc';
    AjaxRequest.get(
        {
            'url' : getLocUrl,
            'generateUniqueUrl' : false,
            'onSuccess':function(req){
                var data = JSON.parse(req.responseText);
                _Locations.results =  data[0].doc ? data[0].doc : [];
                document.getElementById('event-anchor').dispatchEvent(eventLocations);
            }
        }
    );
};

_Locations.getGeoCoordinates = function(position){
    if(position && position.coords) {
        var lat = position.coords.latitude.toFixed(2);
        var long = position.coords.longitude.toFixed(2);
        _Locations.supplementLoc(lat + ', ' + long).then(function(data){
            _User.newActiveLocation(data);
        });
    }
};

_Locations.supplementLoc = function(loc){
   return new Promise(function(resolve, reject){
       if(!loc){
           reject('no location object');
       }
       if(loc.length === 5 && loc.indexOf(',') === -1){
           loc += ':4:US';
       }
       var locUrl = 'https://dsx.weather.com/wxd/loc/' + loc +
            '?format=json&apiKey=c1ea9f47f6a88b9acb43aba7faf389d4';

       AjaxRequest.get(
           {
               'url' : locUrl,
               'generateUniqueUrl' : false,
               'onSuccess':function(req){
                   resolve(JSON.parse(req.responseText));
               }
           }
       );
   });
};



_Locations.callGeoLocation = function(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(_Locations.getGeoCoordinates);
    }
};


var defaultLocations =
helper.getJSON('/js-src/default-locations.json').then(function(data){
    defaultLocations = data;
});

//   If a user does not have a default location, let's try to geolocate them

    //TODO:  for testing only remove the below line before going to prod.

_Locations.getDefaultLocation = function(){
   return new Promise(function(resolve, retreat){
       if (!_User.activeLocation.prsntNm) {
           if(defaultLocations[_User.lang]){
               _Locations.supplementLoc(defaultLocations[_User.lang].locId).then(function(results){
                   resolve(results);
               });
           } else {
               _Locations.callGeoLocation();
               resolve();
           }
       }
   });

};


})();