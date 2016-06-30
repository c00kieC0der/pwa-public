var _Data = {}, app = {};
(function() {
    console.log('data init');
    var dataUrl,dataAstroUrl;
    var eventData = document.createEvent('Event');
    var astroEventData = document.createEvent('Event');
    astroEventData.initEvent('astro-builder', true, true);
    eventData.initEvent('builder', true, true);

    var almanacEventData = document.createEvent('Event'),
        almanacDataUrl = "https://dsx.weather.com/wxd/v2/FarmingAlmanac/" +
        _User.lang + "/0/"+
        _User.locations[0].loc +
        "?api=7bb1c920-7027-4289-9c96-ae5e263980bc";
    almanacEventData.initEvent('almanac-builder', true, true);



    _Data.collectNew = function () {
        dataUrl = "https://api.weather.com/v2/turbo/vt1fifteenminute;vt1hourlyForecast;vt1precipitation;vt1currentdatetime;vt1dailyForecast;vt1observation?units=" +
        _User.unitPref +
        '&language=' + _User.lang +
        '&geocode=' +
        _User.activeLocation.lat + ',' + _User.activeLocation.long +
        '&format=json&apiKey=c1ea9f47f6a88b9acb43aba7faf389d4';

        dataAstroUrl = "https://dsx.weather.com/wxd/v2/Astro/" + _User.lang + "/0/3/(" + _User.activeLocation.lat + ',' + _User.activeLocation.long + ")?api=7bb1c920-7027-4289-9c96-ae5e263980bc";

        app.hasRequestPending = true;
        if ('caches' in window) {
            // console.log(caches);
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
console.log('data get new');
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
        AjaxRequest.get({
            'url': dataAstroUrl,
            'generateUniqueUrl': false,
            'onSuccess': function (req) {
                var data = JSON.parse(req.responseText);
                //_Data.solarNoonData = formatTime(data[0].doc.AstroData[0].sun.zenith.local);
                _Data.solarData =data[0].doc;
                massageSolarData();
                document.getElementById('event-anchor').dispatchEvent(astroEventData);
            }, 'onError' : function(err) {
                console.log(err);
            }
        });
        AjaxRequest.get({
            'url' : almanacDataUrl,
            'generateUniqueUrl' : false,
            'onSuccess' : function(req) {
                var data = JSON.parse(req.responseText).FarmingAlmanacRecordData;
                var oneDayHistorical = data.OneDayHistorical;
                var reportedConditions = data.ReportedConditions;
                var historicalMonthlyAvg = data.HistoricalMonthlyAvg;

                if (_User.unitPref === 'e') {
                    _Data.tempUnit = 'F';
                    _Data.precipUnit = 'in';

                    cleanOneDayHxData(oneDayHistorical, _Data.tempUnit);

                }
                document.getElementById('event-anchor').dispatchEvent(almanacEventData);
                app.hasRequestPending = false;

            }, 'onError' : function(err) {
                console.log(err);
            }
        });

    };
    if (_User.activeLocation.lat) {
        _Data.collectNew();
    }

    var cleanOneDayHxData = function(oneDayHxObj, tempUnit, precipUnit) {
        var _Data = {
            recordHighYear: null,
            recordLowYear: null,
            recordHigh: null,
            recordLow: null,
            recordPrecip: null, // precip values will stay null
                                // added for consistency with table
            avgPrecip: null,
            avgHigh: null,
            avgLow: null
        },
            nullPlaceholder = '\u2014';
        //_Data.oneDayHistorical = {
        //    avgHigh: oneDayHistorical.avgHighF,
        //    avgLow: oneDayHistorical.avgLowF,
        //    recordHigh: oneDayHistorical.recordHighF,
        //    recordLow: oneDayHistorical.recordLowF
        //};

            (isValidRecord(oneDayHxObj.yearOfRecordHighTemp)) ?
                _Data.recordHighYear = oneDayHxObj.yearOfRecordHighTemp :
            _Data.recordHighYear = '';

            (isValidRecord(oneDayHxObj.yearOfRecordLowTemp)) ?
                _Data.recordLowYear = oneDayHxObj.yearOfRecordLowTemp :
            _Data.recordLowYear = '';

            (isValidRecord(oneDayHxObj['recordHigh' + tempUnit])) ?
                _Data.recordHigh = oneDayHxObj['recordHigh' + tempUnit] :
                _Data.recordHigh = nullPlaceholder;

            (isValidRecord(oneDayHxObj['recordLow' + tempUnit])) ?
                _Data.recordLow = oneDayHxObj['recordLow' + tempUnit] :
                _Data.recordLow = nullPlaceholder;

            _Data.avgPrecip = nullPlaceholder;

            (isValidRecord(oneDayHxObj['avgHigh' + tempUnit])) ?
                _Data.avgHigh = oneDayHxObj['avgHigh' + tempUnit] :
                _Data.avgHigh = nullPlaceholder;

            (isValidRecord(oneDayHxObj['avgLow' + tempUnit])) ?
                _Data.avgLow = oneDayHxObj['avgLow' + tempUnit] :
                _Data.avgLow = nullPlaceholder;

        return _Data;
    };
    var isValidRecord = function(data) {
        return !(isNaN(data));
    };

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
     Formats dailyforecast datetimes, currently used for sunrise/sunset, and moonrise/moonset
     */
    var formatDFDateTimes = function(dataObj){
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
        formatDFDateTimes(sunMoonData);
        _Data.tenDay = _Data.dailyForecast.day;

        getDayData();
        _Data.hourly.time = [];
        _Data.hourly.date = [];
        _Data.lookingAhead = getLookingAhead();
        for (var i in _Data.hourly.processTime) {
            _Data.hourly.time[i] = formatTime(_Data.hourly.processTime[i]);
            _Data.hourly.date[i] = formatDate(_Data.hourly.processTime[i]);
        }
    };


    var getDayData = function () {
        //Day night data, should be optimized
        _Data.dailyForecast.dayData = {};
        _Data.dailyForecast.dayData.day = _Data.dailyForecast.day;
        _Data.dailyForecast.dayData.night =_Data.dailyForecast.night;
        _Data.dailyForecast.dayData.day.date =[];
        _Data.dailyForecast.dayData.day.sunrise =[];
        _Data.dailyForecast.dayData.day.sunset =[];
        _Data.dailyForecast.dayData.day.moonrise =[];
        _Data.dailyForecast.dayData.day.moonset =[];
        _Data.dailyForecast.dayData.night.date =[];
        for (var i in _Data.dailyForecast.validDate) {
            _Data.dailyForecast.dayData.day.date[i] = formatDate(_Data.dailyForecast.validDate[i]);
            _Data.dailyForecast.dayData.night.date[i] = formatDate(_Data.dailyForecast.validDate[i]);
            _Data.dailyForecast.dayData.day.sunrise[i] = formatTime(_Data.dailyForecast.sunrise[i]);
            _Data.dailyForecast.dayData.day.sunset[i] = formatTime(_Data.dailyForecast.sunset[i]);
            console.log(_Data.dailyForecast.dayData.day.sunset[i]);
            _Data.dailyForecast.dayData.day.moonrise[i] = formatTime(_Data.dailyForecast.moonrise[i]);
            _Data.dailyForecast.dayData.day.moonset[i] = formatTime(_Data.dailyForecast.moonset[i]);
        }
        //_Data.dailyForecast.dayData.day.date = _Data.dailyForecast.validDate;
        _Data.dailyForecast.dayData.day.highs = _Data.dailyForecast.day.temperature;
        _Data.dailyForecast.dayData.day.lows = _Data.dailyForecast.night.temperature;
        _Data.dailyForecast.dayData.night.lows = _Data.dailyForecast.night.temperature;
        //For replacing null values. Will rewrite and finish
        for(var i in _Data.dailyForecast.dayData.day.highs = _Data.dailyForecast.day.temperature){
            if(_Data.dailyForecast.dayData.day.highs[i]==null){};
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
                sunrise: formatTime(daily.sunrise[0]),
                sunset: formatTime(daily.sunset[0])

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
                sunrise: formatTime(daily.sunrise[1]),
                sunset: formatTime(daily.sunset[1])

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
                sunrise: formatTime(daily.sunrise[2]),
                sunset: formatTime(daily.sunset[2])

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
                sunrise: formatTime(daily.sunrise[0]),
                sunset: formatTime(daily.sunset[0])

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
                sunrise: formatTime(daily.sunrise[0]),
                sunset: formatTime(daily.sunset[0])

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
                sunrise: formatTime(daily.sunrise[1]),
                sunset: formatTime(daily.sunset[1])

            }];
        }
        return retData;
    };

    /*
     Formats solar noon dates and times.
     */
    var massageSolarData = function(){
        _Data.solarData.noonTime=[];
        _Data.solarData.noonDate=[];
        _Data.solarData.moonIcons =[];
        var moonIcCount=0;
        for(var j in _Data.solarData.AstroData){
            if(_Data.solarData.AstroData.hasOwnProperty(j)) {
                _Data.solarData.noonTime[j] = formatTime(_Data.solarData.AstroData[j].sun.zenith.local);
                _Data.solarData.noonDate[j] = formatDate(_Data.solarData.AstroData[j].sun.zenith.local);
                _Data.solarData.moonIcons[moonIcCount++]= (_Data.solarData.AstroData[j].moon.riseSet.riseIcon);
                _Data.solarData.moonIcons[moonIcCount++]= (_Data.solarData.AstroData[j].moon.riseSet["setIcon"]);

            }
        }
    };
})();

