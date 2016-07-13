var _Data = {}, app = {};
(function() {
    var dataUrl,dataAstroUrl,dataAlmanacUrl;
    var eventData = document.createEvent('Event');
    eventData.initEvent('builder', true, true);
    var astroEventData = document.createEvent('Event');
    astroEventData.initEvent('astro-builder', true, true);
    var almanacEventData = document.createEvent('Event');
    almanacEventData.initEvent('almanac-builder', true, true);




    _Data.collectNew = function () {
        dataUrl = "https://api.weather.com/v2/turbo/vt1fifteenminute;vt1hourlyForecast;vt1precipitation;vt1currentdatetime;vt1dailyForecast;vt1observation?units=" +
        _User.unitPref +
        '&language=' + _User.lang +
        '&geocode=' +
        _User.activeLocation.lat + ',' + _User.activeLocation.long +
        '&format=json&apiKey=c1ea9f47f6a88b9acb43aba7faf389d4';

        dataAstroUrl = "https://dsx.weather.com/wxd/v2/Astro/" + _User.lang + "/0/3/(" + _User.activeLocation.lat + ',' + _User.activeLocation.long + ")?api=7bb1c920-7027-4289-9c96-ae5e263980bc";
        //TODO: remove this dummy var
        var dummyLocId = "USDC0001:1:US";
        dataAlmanacUrl = "https://dsx.weather.com/wxd/v2/FarmingAlmanac/" +
            _User.lang + "/0/"+
            dummyLocId +
            //_User.activeLocation.locId +
            "?api=7bb1c920-7027-4289-9c96-ae5e263980bc";
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
                getDayData();
                getWeekendData();
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
            'url' : dataAlmanacUrl,
            'generateUniqueUrl' : false,
            'onSuccess' : function(req) {
                var data = JSON.parse(req.responseText).FarmingAlmanacRecordData;
                var oneDayHistorical = data.OneDayHistorical;
                var reportedConditions = data.ReportedConditions;
                var historicalMonthlyAvg = data.HistoricalMonthlyAvg;

                var units = setUnits(_User.unitPref);
                _Data.tempUnit = units.tempUnit;
                _Data.precipUnit = units.precipUnit;
                _Data.oneDayHistorical = cleanOneDayHxData(oneDayHistorical, _Data.tempUnit);
                _Data.reportedConditions = cleanReportedConditionsData(reportedConditions, _Data.tempUnit, _Data.precipUnit);
                _Data.historicalMonthlyAvg = cleanHxMonthlyAvgData(historicalMonthlyAvg, _Data.tempUnit, _Data.precipUnit);
                // END WIP

                document.getElementById('event-anchor').dispatchEvent(almanacEventData);
            }, 'onError' : function(err) {
                console.log('error: ', err);
            }
        });

    };
    if (_User.activeLocation.lat) {
        _Data.collectNew();
    }
// WIP 7/5/16 1119
    var cleanHxMonthlyAvgData = function(hxMonthlyAvgObj, tempUnit, precipUnit) {
    //    console.log(precipUnit);
        var data = {},
            nullPlaceholder = '\u2014',
            valueNames = ['currentMonthAvgHigh',
                          'currentMonthAvgLow',
                          'currentMonthAvgPrecip',
                          'monthAfterNextAvgHigh',
                          'monthAfterNextAvgLow',
                          'monthAfterNextAvgPrecip',
                          'nextMonthAvgHigh',
                          'nextMonthAvgLow',
                          'nextMonthAvgPrecip'];
        valueNames.forEach(function(currentVal) {
            if (currentVal.indexOf('Precip') > -1) {
                data[currentVal] = hxMonthlyAvgObj[currentVal + precipUnit];
            } else {
                data[currentVal] = hxMonthlyAvgObj[currentVal + tempUnit];
            }
        });
        return data;
    };
// END WIP

    var setUnits = function(unitPref) {
        var unitObj = {};
        unitObj.tempUnit = (unitPref === 'e' ? 'F' : 'C');
        unitObj.precipUnit = (unitPref === 'e' ? 'In' : 'Mm');
        return unitObj;
    };

    var cleanOneDayHxData = function(oneDayHxObj, tempUnit) {
            var data = {},
                nullPlaceholder = '\u2014';

            (isValidRecord(oneDayHxObj.yearOfRecordHighTemp)) ?
                data.recordHighYear = oneDayHxObj.yearOfRecordHighTemp :
            data.recordHighYear = '';

            (isValidRecord(oneDayHxObj.yearOfRecordLowTemp)) ?
                data.recordLowYear = oneDayHxObj.yearOfRecordLowTemp :
            data.recordLowYear = '';

            (isValidRecord(oneDayHxObj['recordHigh' + tempUnit])) ?
                data.recordHigh = oneDayHxObj['recordHigh' + tempUnit] :
                data.recordHigh = nullPlaceholder;

            (isValidRecord(oneDayHxObj['recordLow' + tempUnit])) ?
                data.recordLow = oneDayHxObj['recordLow' + tempUnit] :
                data.recordLow = nullPlaceholder;

            data.avgPrecip = nullPlaceholder;

            (isValidRecord(oneDayHxObj['avgHigh' + tempUnit])) ?
                data.avgHigh = oneDayHxObj['avgHigh' + tempUnit] :
                data.avgHigh = nullPlaceholder;

            (isValidRecord(oneDayHxObj['avgLow' + tempUnit])) ?
                data.avgLow = oneDayHxObj['avgLow' + tempUnit] :
                data.avgLow = nullPlaceholder;

        return data;
    };
    var isValidRecord = function(data) {
        return !(isNaN(data));
    };

    var cleanReportedConditionsData = function(recordedConditionsObj, tempUnit, precipUnit) {
        var data = {},
            nullPlaceholder = '\u2014',
            valueNames = ['mtdHigh', 'mtdLow', 'mtdPrecip', 'prevDayHigh', 'prevDayLow', 'prevDayPrecip', 'sevenDayHigh', 'sevenDayLow', 'sevenDayPrecip'];
        valueNames.forEach(function(currentVal) {
           data[currentVal] = (currentVal.indexOf('Precip') > -1) ?
               recordedConditionsObj[currentVal + precipUnit] :
               data[currentVal] = recordedConditionsObj[currentVal + tempUnit];
        });
        return data;
    };


    var formatTime = function (fullDate) {
        var dateBase = new Date(fullDate);
        var hours = dateBase.getHours();
        var minutes = dateBase.getMinutes();
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

        return hours + ':' + (minutes>9?minutes + ' ':'0'+minutes + ' ') + meridian;
    };
    var formatDate = function (fullDate) {
        var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
        var monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        var dateBase = new Date(fullDate);
        return daysOfWeek[dateBase.getDay()] + ', ' + monthsOfYear[dateBase.getMonth()] + ' ' + dateBase.getDate();
    };
    /*
    returns array of curr date information. Can be combined with above function with some work if approved
     */
    var formatDateArray = function(fullDate){
        var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
        var monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        var dateBase = new Date(fullDate);
        return{
            dayName:daysOfWeek[dateBase.getDay()],
            date:monthsOfYear[dateBase.getMonth()]+' '+dateBase.getDate(),
            dayIndex:dateBase.getDay()
        };
    };
    var formatMonthDate = function (fullDate) {
        retMonthData = [];
        var monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var dateBase = new Date(fullDate);
        return{
            month1: monthsOfYear[dateBase.getMonth()],
            month2: monthsOfYear[dateBase.getMonth()+1],
            month3: monthsOfYear[dateBase.getMonth()+2],
            currentDate: monthsOfYear[dateBase.getMonth()] + ' ' + dateBase.getDate()
         };
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
        _Data.hourly.time = [];
        _Data.hourly.date = [];
        _Data.lookingAhead = getLookingAhead();
        _Data.obs.timestamp = getTimestamp();
        _Data.almanacMonths = getMonths();
        for (var i in _Data.hourly.processTime) {
            _Data.hourly.time[i] = formatTime(_Data.hourly.processTime[i]);
            _Data.hourly.date[i] = formatDate(_Data.hourly.processTime[i]);
        }

    };


    var getMonths = function () {
        var currentMonth = formatMonthDate(_Data.datetime.datetime);
        return currentMonth;
    };

    var getTimestamp = function () {
        var currentTime = formatTime(_Data.obs.observationTime);
        return currentTime;
    };


    var getDayData = function () {
        //Day night data, should be optimized
        _Data.dailyForecast.dayData = _Data.dailyForecast.day;
        var nightly = _Data.dailyForecast.night;
        var dayData= {
            dateDay: [],
            dateDayIndex: [],
            dateMonthDate: [],
            sunrise: [],
            sunset: [],
            moonrise: [],
            moonset: [],
            ////Night Data////
            dayTemp: _Data.dailyForecast.day.temperature,
            nightPrecipPct: nightly.precipPct,
            nightTemp: nightly.temperature,
            nightUVIndex: nightly.uvIndex,
            nightIcon: nightly["icon"],
            nightIconExtended: nightly.iconExtended,
            nightPhrase: nightly.phrase,
            nightNarrative: nightly.narrative,
            nightWindDirCompass: nightly.windDirCompass,
            nightWindSpeed: nightly.windSpeed,
            nightHumidityPct: nightly.humidityPct,
            dateNight: []
        };

        for (var i in _Data.dailyForecast.validDate) {
            var dateInfo = formatDateArray(_Data.dailyForecast.validDate[i]);
            //Does this take translation into account? Should be fixed
            dayData.dateDay[i] = (_Data.dailyForecast.day.dayPartName[i]==="Today"?"Today":dateInfo.dayName);
            dayData.dateNight[i] = dayData.dateDay[i] ==="Today"?"Tonight":dateInfo.dayName + " Night";
            dayData.dateDayIndex[i] = dateInfo.dayIndex;
            dayData.dateMonthDate[i] = dateInfo.date;
            dayData.sunrise[i] = formatTime(_Data.dailyForecast.sunrise[i]);
            dayData.sunset[i] = formatTime(_Data.dailyForecast.sunset[i]);
            dayData.moonrise[i] = formatTime(_Data.dailyForecast.moonrise[i]);
            dayData.moonset[i] = formatTime(_Data.dailyForecast.moonset[i]);
            dayData.nightIcon[i] = dayData.nightIcon[i];
        }
        for (var key in dayData){
            _Data.dailyForecast.dayData[key] = dayData[key];
        }
    };
    //Must be called after getDayData
    var getWeekendData = function () {
        //var dayLimit = 6;
        //if (_Data.dayData.day.dateDayIndex[0] ==6){};
        //else if(_Data.dayData.day.dateDayIndex[0] ==6){};
        _Data.dailyForecast.currWeekendData = [];
        _Data.dailyForecast.nextWeekendData = [];
        var currWeekDataFound = false;
        var counter = 0;
        for(var i in _Data.dailyForecast.dayData.dateDayIndex){
            if(_Data.dailyForecast.dayData.dateDayIndex.hasOwnProperty(i)&&
                (_Data.dailyForecast.dayData.dateDayIndex[i]>4||_Data.dailyForecast.dayData.dateDayIndex[i]===0)) {
                //Indicates Fri, sat, or sun
                if(!currWeekDataFound) {
                    for (var key in _Data.dailyForecast.dayData) {
                        if(!_Data.dailyForecast.currWeekendData[key])_Data.dailyForecast.currWeekendData[key]=[];
                        _Data.dailyForecast.currWeekendData[key][counter] = _Data.dailyForecast.dayData[key][i];
                    }
                    counter++;
                }
                else
                    for (var key in _Data.dailyForecast.dayData) {
                        if(!_Data.dailyForecast.nextWeekendData[key]) {
                            _Data.dailyForecast.nextWeekendData[key] = [];
                        }
                        _Data.dailyForecast.nextWeekendData[key][counter] = _Data.dailyForecast.dayData[key][i];
                    }
                if(_Data.dailyForecast.dayData.dateDayIndex[i]===0){
                    if(currWeekDataFound===true){
                        break;
                    }
                    currWeekDataFound = true;
                    counter = 0;
                }
            }
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
                wxicon: daily.night.icon[0],
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
                wxicon: daily.day.icon[1],
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
                wxicon: daily.night.icon[1],
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
                wxicon: daily.day.icon[0],
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
                wxicon: daily.night.icon[0],
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
                wxicon: daily.day.icon[1],
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
        if(_Data && _Data.solarData){
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
        }
    };
})();

