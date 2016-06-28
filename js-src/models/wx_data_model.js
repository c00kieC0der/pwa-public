var _Data = {}, app = {};
(function() {
    var dataUrl = "https://api.weather.com/v2/turbo/vt1fifteenminute;vt1hourlyForecast;vt1precipitation;vt1currentdatetime;vt1pollenforecast;vt1dailyForecast;vt1observation;vt1alerts?units=" +
        _User.unitPref +
        '&language=' + _User.lang +
        '&geocode=' +
        _User.activeLocation.lat + ',' + _User.activeLocation.long +
        '&format=json&apiKey=c1ea9f47f6a88b9acb43aba7faf389d4';
    var dataAstroUrl = '';
    var eventData = document.createEvent('Event');
    var eventAstroData = document.createEvent('Event');
    eventAstroData.initEvent('astro-builder', true, true);
    eventData.initEvent('builder', true, true);


    _Data.collectNew = function () {
        app.hasRequestPending = true;
        if ('caches' in window) {
            console.log(caches);
            caches.match(dataUrl).then(function (response) {
                if (response) {
                    response.json().then(function (json) {
                        console.log(json);
                        // Only update if the XHR is still pending, otherwise the XHR
                        // has already returned and provided the latest data.
                        if (app.hasRequestPending) {
                            console.log('updated from cache');
                            json.key = key;
                            json.label = label;
                            //app.updateForecastCard(json);
                        }
                    });
                }
            });
        }

        AjaxRequest.get({
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
                    app.hasRequestPending = false;
        }, 'onError' : function(err) {
                console.log(err);
            }
        });
    };
    if (_User.activeLocation.prsntNm) {
        _Data.collectNew();
    }

    var formatTime = function (fullDate) {
        var dateBase = new Date(fullDate);
        var hours = dateBase.getHours();
        var minutes = dateBase.getMinutes();
        if (minutes === 0) {
            minutes = '00';
        }
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
    /*
     Any after retrieval data massaging.
     */
    var massageData = function () {
        _Data.hourly.time = [];
        _Data.hourly.date = [];
        _Data.lookingAhead = getLookingAhead();
        for (var i in _Data.hourly.processTime) {
            _Data.hourly.time[i] = formatTime(_Data.hourly.processTime[i]);
            _Data.hourly.date[i] = formatDate(_Data.hourly.processTime[i]);
        }
    };

    var getLookingAhead = function () {
        var daily = _Data.dailyForecast, retData = [];
        if (daily.day.dayPartName[0] === null) {
            //its nighttime.
            retData = [{
                daypartName: daily.night.dayPartName[0],
                highLow: 'Low',
                phrase: daily.night.phrase[0],
                wxicon: getWxIcon(daily.night.icon[0]),
                temperature: daily.night.temperature[0],
                narrative: daily.night.narrative[0],
                precip: daily.night.precipPct[0],
                windDirCompass: daily.night.windDirCompass[0],
                windDirDegrees: daily.night.windDirDegrees[0],
                windSpeed: daily.night.windSpeed[0],
                humidity: daily.night.humidityPct[0],
                uvIndex: daily.night.uvIndex[0],
                sunrise: daily.night.sunrise[0],
                sunset: daily.night.sunset[0]

            }, {
                daypartName: daily.day.dayPartName[1],
                highLow: 'High',
                phrase: daily.day.phrase[1],
                wxicon: getWxIcon(daily.day.icon[1]),
                temperature: daily.day.temperature[1],
                narrative: daily.day.narrative[1],
                precip: daily.day.precipPct[1],
                windDirCompass: daily.day.windDirCompass[1],
                windDirDegrees: daily.day.windDirDegrees[1],
                windSpeed: daily.day.windSpeed[1],
                humidity: daily.day.humidityPct[1],
                uvIndex: daily.day.uvIndex[1],
                sunrise: daily.day.sunrise[1],
                sunset: daily.day.sunset[1]

            }, {
                daypartName: daily.night.dayPartName[1],
                highLow: 'Low',
                phrase: daily.night.phrase[1],
                wxicon: getWxIcon(daily.night.icon[1]),
                temperature: daily.night.temperature[1],
                narrative: daily.night.narrative[1],
                precip: daily.night.precipPct[1],
                windDirCompass: daily.night.windDirCompass[1],
                windDirDegrees: daily.night.windDirDegrees[1],
                windSpeed: daily.night.windSpeed[1],
                humidity: daily.night.humidityPct[1],
                uvIndex: daily.night.uvIndex[1],
                sunrise: daily.night.sunrise[1],
                sunset: daily.night.sunset[1]

            }];
        } else {
            retData = [{
                daypartName: daily.day.dayPartName[0],
                highLow: 'High',
                phrase: daily.day.phrase[0],
                wxicon: getWxIcon(daily.day.icon[0]),
                temperature: daily.day.temperature[0],
                narrative: daily.day.narrative[0],
                precip: daily.day.precipPct[0],
                windDirCompass: daily.day.windDirCompass[0],
                windDirDegrees: daily.day.windDirDegrees[0],
                windSpeed: daily.day.windSpeed[0],
                humidity: daily.day.humidityPct[0],
                uvIndex: daily.day.uvIndex[0],
                sunrise: daily.sunrise[0],
                sunset: daily.sunset[0]

            }, {
                daypartName: daily.night.dayPartName[0],
                highLow: 'Low',
                phrase: daily.night.phrase[0],
                wxicon: getWxIcon(daily.night.icon[0]),
                temperature: daily.night.temperature[0],
                narrative: daily.night.narrative[0],
                precip: daily.night.precipPct[0],
                windDirCompass: daily.night.windDirCompass[0],
                windDirDegrees: daily.night.windDirDegrees[0],
                windSpeed: daily.night.windSpeed[0],
                humidity: daily.night.humidityPct[0],
                uvIndex: daily.night.uvIndex[0],
                sunrise: daily.sunrise[0],
                sunset: daily.sunset[0]

            }, {
                daypartName: daily.day.dayPartName[1],
                highLow: 'High',
                phrase: daily.day.phrase[1],
                wxicon: getWxIcon(daily.day.icon[1]),
                temperature: daily.day.temperature[1],
                narrative: daily.day.narrative[1],
                precip: daily.day.precipPct[1],
                windDirCompass: daily.day.windDirCompass[1],
                windDirDegrees: daily.day.windDirDegrees[1],
                windSpeed: daily.day.windSpeed[1],
                humidity: daily.day.humidityPct[1],
                uvIndex: daily.day.uvIndex[1],
                sunrise: daily.sunrise[1],
                sunset: daily.sunset[1]

            }];
        }
        return retData;
    };
})();

