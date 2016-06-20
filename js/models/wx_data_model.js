var _Data = {};
var dataUrl = '';
var eventData = document.createEvent('Event');
eventData.initEvent('builder', true, true);

_Data.collectNew = function(){
     dataUrl = "https://api.weather.com/v2/turbo/vt1fifteenminute;vt1hourlyForecast;vt1precipitation;vt1currentdatetime;vt1pollenforecast;vt1dailyForecast;vt1observation;vt1alerts?units=" +
        _User.unitPref +
        '&language=' + _User.lang +
        '&geocode=' +
        _User.activeLocation.lat + ',' + _User.activeLocation.long +
        '&format=json&apiKey=c1ea9f47f6a88b9acb43aba7faf389d4';

    AjaxRequest.get(
        {
            'url' : dataUrl,
            'generateUniqueUrl' : false,
            'onSuccess':function(req){

               var data = JSON.parse(req.responseText);
                _Data.obs = data.vt1observation;
                _Data.datetime = data.vt1currentdatetime;
                _Data.dailyForecast = data.vt1dailyForecast;
                _Data.pollenforecast = data.vt1pollenforecast;
                _Data.precipitation = data.vt1precipitation;
                _Data.fifteen = data.vt1fifteenminute;
                _Data.hourly = data.vt1hourlyForecast;
                document.getElementById('event-anchor').dispatchEvent(eventData);
            }
        }
    );
};
if(_User.activeLocation.prsntNm){
    _Data.collectNew();
}

