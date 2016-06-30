/**
 * Created by ecook on 6/10/16.
 */
(function(){
    var dataAssignment = [];
    var mapData = function(){

        //TODO::  Move these units to a global place.
        var windUnit = _User.unitPref === 'e' ? 'mph' : 'kph';
        var pressureUnit = _User.unitPref === 'e' ? 'in' : 'mb';
        var visibilityUnit = _User.unitPref === 'e' ? 'mi' : 'km';
        var bt = _Data.obs.barometerTrend;
        var pressureArrow = bt === 'Falling' ? '<span class="wx-iconfont-global wx-icon-arrow-down-4"></span>' :
            bt === 'Rising' ? '<span class="wx-iconfont-global wx-icon-arrow-up-4"></span>' :
                '<span class="wx-iconfont-global wx-icon-arrow-right1-4"></span>';
        var uvIndex = _Data.obs.uvIndex > 10 ? 'Extreme' : _Data.obs.uvIndex + ' of 10';
        dataAssignment = [
            ['nowcard-location',    _User.activeLocation.prsntNm],
            ['nowcard-temp',        _Data.obs.temperature],
            ['nowcard-feels-value', _Data.obs.feelsLike],
            ['nowcard-phrase',      _Data.obs.phrase],
            ['nowcard-hi-value',    _Data.obs.phrase],
            ['nowcard-lo-value',    _Data.dailyForecast.night.temperature[0]],
            ['nowcard-humidity',    _Data.obs.humidity],
            ['nowcard-wind',        _Data.obs.windDirCompass + ' ' + _Data.obs.windSpeed + ' ' + windUnit],
            ['nowcard-dewpoint',    _Data.obs.dewPoint],
            ['nowcard-pressure',    _Data.obs.altimeter + ' ' + pressureUnit + ' ' + pressureArrow],
            ['nowcard-visibility',  _Data.obs.visibility + visibilityUnit],
            ['nowcard-uv-index',    uvIndex],
            ['dp1-daypartName',     _Data.lookingAhead[0].daypartName],
            ['dp1-phrase',          _Data.lookingAhead[0].phrase],
            ['la-part1-icon',       _Data.lookingAhead[0].wxicon],
            ['dp1-highLow',         _Data.lookingAhead[0].highLow],
            ['dp1-temperature',     _Data.lookingAhead[0].temperature],
            ['dp1-precip',          _Data.lookingAhead[0].precip],
            ['dp2-daypartName',     _Data.lookingAhead[1].daypartName],
            ['dp2-phrase',          _Data.lookingAhead[1].phrase],
            ['la-part2-icon',       _Data.lookingAhead[1].wxicon],
            ['dp2-highLow',         _Data.lookingAhead[1].highLow],
            ['dp2-temperature',     _Data.lookingAhead[1].temperature],
            ['dp2-precip',          _Data.lookingAhead[1].precip],
            ['dp3-daypartName',     _Data.lookingAhead[2].daypartName],
            ['dp3-phrase',          _Data.lookingAhead[2].phrase],
            ['la-part3-icon',       _Data.lookingAhead[2].wxicon],
            ['dp3-highLow',         _Data.lookingAhead[2].highLow],
            ['dp3-temperature',     _Data.lookingAhead[2].temperature],
            ['dp3-precip',          _Data.lookingAhead[2].precip],

            // Weather Details
            ['dp1-details-narrative', _Data.lookingAhead[0].narrative],
            ['dp1-details-wind',      _Data.lookingAhead[0].windDirCompass + ' ' + _Data.lookingAhead[0].windSpeed + ' ' + windUnit],
            ['dp1-details-humidity',  _Data.lookingAhead[0].humidity],
            ['dp1-details-uvIndex',   _Data.lookingAhead[0].uvIndex + ' of 10'],
            ['dp1-details-sunrise',   _Data.lookingAhead[0].sunrise],
            ['dp1-details-sunset',    _Data.lookingAhead[0].sunset],
            ['dp2-details-narrative', _Data.lookingAhead[1].narrative],
            ['dp2-details-wind',      _Data.lookingAhead[1].windDirCompass + ' ' + _Data.lookingAhead[1].windSpeed + ' ' + windUnit],
            ['dp2-details-humidity',  _Data.lookingAhead[1].humidity],
            ['dp2-details-uvIndex',   _Data.lookingAhead[1].uvIndex + ' of 10'],
            ['dp2-details-sunrise',   _Data.lookingAhead[1].sunrise],
            ['dp2-details-sunset',    _Data.lookingAhead[1].sunset],
            ['dp3-details-narrative', _Data.lookingAhead[2].narrative],
            ['dp3-details-wind',      _Data.lookingAhead[2].windDirCompass + ' ' + _Data.lookingAhead[2].windSpeed + ' ' + windUnit],
            ['dp3-details-humidity',  _Data.lookingAhead[2].humidity],
            ['dp3-details-uvIndex',   _Data.lookingAhead[2].uvIndex + ' of 10'],
            ['dp3-details-sunrise',   _Data.lookingAhead[2].sunrise],
            ['dp3-details-sunset',    _Data.lookingAhead[2].sunset],

        ];
        var highTemp = _Data.obs.temperatureMaxSince7am ? _Data.obs.temperatureMaxSince7am : _Data.dailyForecast.day.temperature[0] !== null ? _Data.dailyForecast.day.temperature[0] : '--';
        dataAssignment.push(['nowcard-hi-value', highTemp]);

        //Input the weather icon - Nowcard.
        document.getElementById('nowcard-icon').innerHTML = getWxIcon(_Data.obs.icon);

    };
    document.getElementById('event-anchor').addEventListener('builder', function(){
        mapData();
        helper.setContent(dataAssignment);
    });
    if(_Data.obs && _Data.obs.phrase){
        mapData();
        helper.setContent(dataAssignment);
    }
    // Hide other details on first paint
    document.getElementById("dp2-details").style.display = 'none';
    document.getElementById("dp3-details").style.display = 'none';

    /*
      Translations Handling
     */
    var todayForecastLangs = [];
    var updateTodayForecastLangs = function(){
        todayForecastLangs = [
            ['nowcard-feels-label', _Lang['feels like'].toUpperCase()],
            ['today-humidity' , helper.capitalize(_Lang.humidity)],
            ['today-wind', helper.capitalize(_Lang.wind)],
            ['today-dew-point', helper.capitalize(_Lang['dew point'])],
            ['today-pressure', helper.capitalize(_Lang.pressure)],
            ['today-visibility', helper.capitalize(_Lang.visibility)],
            ['today-uv-index', helper.capitalize(_Lang['uv index'])],
            ['dp1-lb-wind', helper.capitalize(_Lang['wind'])],
            ['dp1-lb-humidity', helper.capitalize(_Lang['humidity'])],
            ['dp1-lb-uv-index', helper.capitalize(_Lang['uv index'])],
            ['dp2-lb-wind', helper.capitalize(_Lang['wind'])],
            ['dp2-lb-humidity', helper.capitalize(_Lang['humidity'])],
            ['dp2-lb-uv-index', helper.capitalize(_Lang['uv index'])],
            ['dp3-lb-wind', helper.capitalize(_Lang['wind'])],
            ['dp3-lb-humidity', helper.capitalize(_Lang['humidity'])],
            ['dp3-lb-uv-index', helper.capitalize(_Lang['uv index'])]
        ];
        helper.setContent(todayForecastLangs);
    };
    if(window['_Lang'] && window['_Lang']['feels like']){
        updateTodayForecastLangs();
    }
    document.getElementById('event-anchor').addEventListener('lang-builder', function(){
        updateTodayForecastLangs();
        mapData();
        helper.setContent(dataAssignment);
    });

})();


//Looking ahead interactions

function dayPartClick(detail, clickedId) {
    //addClass(this, 'selected');
    document.getElementById("dp1-details").style.display = 'none';
    document.getElementById("dp2-details").style.display = 'none';
    document.getElementById("dp3-details").style.display = 'none';
    document.getElementById(detail).style.display = 'block';

    var daypart1 = document.getElementById('daypart-1'),
        daypart2 = document.getElementById('daypart-2'),
        daypart3 = document.getElementById('daypart-3');

    if (hasClass(this, 'selected')) {
        // Do nothing
    } else {

        removeClass(daypart1, 'selected');
        removeClass(daypart2, 'selected');
        removeClass(daypart3, 'selected');
        addClass(document.getElementById(clickedId), 'selected');
    }
}

