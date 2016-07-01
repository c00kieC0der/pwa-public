var _Locations = {};
(function(){

var eventLocations = document.createEvent('Event');
eventLocations.initEvent('builder-locations', true, true);

_Locations.searchLocs = function(term){
    var getLocUrl = 'https://dsx.weather.com/x/v2/web/loc/' + _User.lang + '/1/4/5/9/11/13/19/21/1000/1001/1003//us%5E/(' +
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

_Locations.getGeoCoordinates = function(position, cb){
    if(position && position.coords) {
        var coords = position.coords;
        var lat = coords.latitude.toFixed(2);
        var long = coords.longitude.toFixed(2);

        var locUrl = 'https://dsx.weather.com/wxd/loc/' +
            lat + ',' +
            long + '?format=json&apiKey=c1ea9f47f6a88b9acb43aba7faf389d4';

        AjaxRequest.get(
            {
                'url' : locUrl,
                'generateUniqueUrl' : false,
                'onSuccess':function(req){
                  cb(JSON.parse(req.responseText))
                    //_User.newActiveLocation(JSON.parse(req.responseText));
                }
            }
        );

    }
};

_Locations.callGeoLocation = function(cb){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          if(position && position.coords) {
            var coords = position.coords;
            var lat = coords.latitude.toFixed(2);
            var long = coords.longitude.toFixed(2);

            var locUrl = 'https://dsx.weather.com/wxd/loc/' +
              lat + ',' +
              long + '?format=json&apiKey=c1ea9f47f6a88b9acb43aba7faf389d4';

            AjaxRequest.get(
              {
                'url' : locUrl,
                'generateUniqueUrl' : false,
                'onSuccess':function(req){
                  cb(null, JSON.parse(req.responseText))
                  //_User.newActiveLocation(JSON.parse(req.responseText));
                }
              }
            );

          }
        });
       cb('something went wrong', null);
    }
};

_Locations.getUserLocation = function() {
  if (!_User.activeLocation.prsntNm) {
    _Locations.callGeoLocation();
  }
}



// TODO: This is bad should not rely on timeout
//   If a user does not have a default location, let's try to geolocate them
//setTimeout(function(){
//    if (!_User.activeLocation.prsntNm) {
//       _Locations.callGeoLocation();
//    }
//}, 100);

})();