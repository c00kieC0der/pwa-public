var _Data = {};
(function(){
    //Variables and events for dsx call. Required for solar noon data
    var astroURl = '';
    var astroEventData = document.createEvent('Event');
    astroEventData.initEvent('astro-builder',true,true);


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
                    massageData();
                    document.getElementById('event-anchor').dispatchEvent(eventData);
                }
            }
        );


        //For dsx request
        astroURl = "https://dsx.weather.com/wxd/v2/Astro/"
        +_User.lang+ "/0/3/("+
            _User.activeLocation.lat + ',' + _User.activeLocation.long +
        ")?api=7bb1c920-7027-4289-9c96-ae5e263980bc";

        AjaxRequest.get(
            {
                'url' : astroURl,
                'generateUniqueUrl' : false,
                'onSuccess':function(req){

                    var data = JSON.parse(req.responseText);
                    _Data.solarNoon = data[0].doc.AstroData[0].sun.zenith.local;
                    console.log(_Data.solarNoon);

                    //Removing massageData call, and adding call to format here. Currently only one value being pulled
                    document.getElementById('event-anchor').dispatchEvent(astroEventData);
                }
            }
        );


    };
    if(_User.activeLocation.prsntNm){
        _Data.collectNew();
    }

    var formatTime = function(fullDate){
        var dateBase = new Date(fullDate);
        var hours = dateBase.getHours();
        var minutes = dateBase.getMinutes();
        if(minutes === 0) minutes = '00';
        var meridian = 'AM';
        if(hours === 12){
            meridian = 'PM';
        }
        if(hours > 12){
            hours -= 12; meridian = 'PM';
        }
        if(hours === 0){
            hours = 12;
        }

        return hours + ':' + minutes + ' ' + meridian;
    };
    var formatDate = function(fullDate) {
        var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
        var monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        var dateBase = new Date(fullDate);
        return daysOfWeek[dateBase.getDay()] + ', ' + monthsOfYear[dateBase.getMonth()] + ' ' + dateBase.getDate();
    };
    /*
     Any after retrieval data massaging.
     */
    var massageData = function(){
        _Data.hourly.time = [];
        _Data.hourly.date = [];
        for(var i in _Data.hourly.processTime){
            _Data.hourly.time[i] = formatTime(_Data.hourly.processTime[i]);
            _Data.hourly.date[i] = formatDate(_Data.hourly.processTime[i]);
        }


        //This is ugly and temporary
        _Data.dailyForecast.sunriseTime = [];
        _Data.dailyForecast.sunriseDate = [];
        for(var i in _Data.dailyForecast.sunrise){
            _Data.dailyForecast.sunriseTime[i] = formatTime(_Data.dailyForecast.sunrise[i]);
            _Data.dailyForecast.sunriseDate[i] = formatDate(_Data.dailyForecast.sunrise[i]);
        }
        _Data.dailyForecast.sunsetTime = [];
        _Data.dailyForecast.sunsetDate = [];
        for(var i in _Data.dailyForecast.sunset){
            _Data.dailyForecast.sunsetTime[i] = formatTime(_Data.dailyForecast.sunset[i]);
            _Data.dailyForecast.sunsetDate[i] = formatDate(_Data.dailyForecast.sunset[i]);
        }_Data.dailyForecast.moonriseTime = [];
        _Data.dailyForecast.moonriseDate = [];
        for(var i in _Data.dailyForecast.moonrise){
            _Data.dailyForecast.moonriseTime[i] = formatTime(_Data.dailyForecast.moonrise[i]);
            _Data.dailyForecast.moonriseDate[i] = formatDate(_Data.dailyForecast.moonrise[i]);
        }
        _Data.dailyForecast.moonsetTime = [];
        _Data.dailyForecast.moonsetDate = [];
        for(var i in _Data.dailyForecast.moonset){
            _Data.dailyForecast.moonsetTime[i] = formatTime(_Data.dailyForecast.moonset[i]);
            _Data.dailyForecast.moonsetDate[i] = formatDate(_Data.dailyForecast.moonset[i]);
        }

    };
})();

