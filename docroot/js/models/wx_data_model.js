var _Data = {};
(function () {
    //Variables and events for dsx call. Required for solar noon data
    var astroURl = '';
    var astroEventData = document.createEvent('Event');
    astroEventData.initEvent('astro-builder', true, true);


    var dataUrl = '';
    var eventData = document.createEvent('Event');
    eventData.initEvent('builder', true, true);


    var getDataDispatchEvent = function (requestObj) {
        AjaxRequest.get(requestObj);
    };

    _Data.collectNew = function () {
        //For dsx weather request
        dataUrl = "https://api.weather.com/v2/turbo/vt1fifteenminute;vt1hourlyForecast;vt1precipitation;vt1currentdatetime;vt1pollenforecast;vt1dailyForecast;vt1observation;vt1alerts?units=" +
            _User.unitPref + '&language=' + _User.lang + '&geocode=' + _User.activeLocation.lat + ',' + _User.activeLocation.long + '&format=json&apiKey=c1ea9f47f6a88b9acb43aba7faf389d4';
        //For dsx astro request
        astroURl = "https://dsx.weather.com/wxd/v2/Astro/" + _User.lang + "/0/3/(" + _User.activeLocation.lat + ',' + _User.activeLocation.long + ")?api=7bb1c920-7027-4289-9c96-ae5e263980bc";



        var dataRequistObj = {
            astroData: {
                'url': astroURl,
                'generateUniqueUrl': false,
                'onSuccess': function (req) {

                    var data = JSON.parse(req.responseText);
                    _Data.solarNoon = data[0].doc.AstroData[0].sun.zenith.local;
                    //This data needs to be "massaged"
                    document.getElementById('event-anchor').dispatchEvent(astroEventData);
                }
            },
            weatherData: {
                'url': dataUrl,
                'generateUniqueUrl': false,
                'onSuccess': function (req) {

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
        };

        getDataDispatchEvent(dataRequistObj.weatherData);
        getDataDispatchEvent(dataRequistObj.astroData);

    };
    if (_User.activeLocation.prsntNm) {
        _Data.collectNew();
    }

    var formatTime = function (fullDate) {
        var dateBase = new Date(fullDate);
        var hours = dateBase.getHours();
        var minutes = dateBase.getMinutes();
        if (minutes === 0) minutes = '00';
        var meridian = 'AM';
        if (hours === 12) {
            meridian = 'PM';
        }
        if (hours > 12) {
            hours -= 12;
            meridian = 'PM';
        }
        if (hours === 0) {
            hours = 12;
        }

        return hours + ':' + minutes + ' ' + meridian;
    };
    var formatDate = function (fullDate) {
        var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
        var monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        var dateBase = new Date(fullDate);
        return daysOfWeek[dateBase.getDay()] + ', ' + monthsOfYear[dateBase.getMonth()] + ' ' + dateBase.getDate();
    };


    var formatDateTimes = function(dataObj){
        for(var key in dataObj){
            if(dataObj.hasOwnProperty(key)){

                _Data.dailyForecast[key + 'Time'] = [];
                _Data.dailyForecast[key + 'Date'] = [];

                dataObj[key].forEach(function(item, index){
                    _Data.dailyForecast[key + 'Time'][index] = formatTime(dataObj[key][index]);
                    _Data.dailyForecast[key + 'Date'][index] = formatTime(dataObj[key][index]);
                });
            }
        }
    };

    /*
     Any after retrieval data massaging.
     */
    var massageData = function () {
        var sunMoonData = {
            sunrise: _Data.dailyForecast.sunrise,
            sunset: _Data.dailyForecast.sunset,
            moonrise: _Data.dailyForecast.moonrise,
            moonset: _Data.dailyForecast.moonset
        };
        formatDateTimes(sunMoonData);

        _Data.hourly.time = [];
        _Data.hourly.date = [];
        for (var i in _Data.hourly.processTime) {
            if(_Data.hourly.processTime.hasOwnProperty(i)) {
                _Data.hourly.time[i] = formatTime(_Data.hourly.processTime[i]);
                _Data.hourly.date[i] = formatDate(_Data.hourly.processTime[i]);
            }
        }
    };
})();

