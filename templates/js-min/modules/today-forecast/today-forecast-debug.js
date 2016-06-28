/**
 * Created by ecook on 6/10/16.
 */
(function(){
    var dataAssignment = [];
    var mapData = function(){

        //TODO::  Move these units to a global place.
        var windUnit = _User.unitPref === 'e' ? 'MPH' : 'KPH';
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
            ['nowcard-wind',        _Data.obs.windSpeed + ' ' + windUnit + ' ' + _Data.obs.windDirCompass],
            ['nowcard-dewpoint',    _Data.obs.dewPoint],
            ['nowcard-pressure',    _Data.obs.altimeter + ' ' + pressureUnit + ' ' + pressureArrow],
            ['nowcard-visibility',  _Data.obs.visibility + visibilityUnit],
            ['nowcard-uv-index',    uvIndex],
            ['dp1-daypartName', _Data.lookingAhead[0].daypartName],
            ['dp1-phrase', _Data.lookingAhead[0].phrase],
            ['la-part1-icon', _Data.lookingAhead[0].wxicon],
            ['dp1-highLow', _Data.lookingAhead[0].highLow],
            ['dp1-temperature', _Data.lookingAhead[0].temperature],
            ['dp1-precip', _Data.lookingAhead[0].precip],
            ['dp2-daypartName', _Data.lookingAhead[1].daypartName],
            ['dp2-phrase', _Data.lookingAhead[1].phrase],
            ['la-part2-icon', _Data.lookingAhead[1].wxicon],
            ['dp2-highLow', _Data.lookingAhead[1].highLow],
            ['dp2-temperature', _Data.lookingAhead[1].temperature],
            ['dp2-precip', _Data.lookingAhead[1].precip],
            ['dp3-daypartName', _Data.lookingAhead[2].daypartName],
            ['dp3-phrase', _Data.lookingAhead[2].phrase],
            ['la-part3-icon', _Data.lookingAhead[2].wxicon],
            ['dp3-highLow', _Data.lookingAhead[2].highLow],
            ['dp3-temperature', _Data.lookingAhead[2].temperature],
            ['dp3-precip', _Data.lookingAhead[2].precip],
            ['dp1-details-narrative', _Data.lookingAhead[0].narrative],
            ['dp1-details-wind', _Data.lookingAhead[0].windSpeed + ' ' + windUnit + ' ' + _Data.lookingAhead[0].windDirCompass],
            ['dp1-details-humidity', _Data.lookingAhead[0].humidity],
            ['dp1-details-uvIndex', _Data.lookingAhead[0].uvIndex]
        ];
        var highTemp = _Data.obs.temperatureMaxSince7am ? _Data.obs.temperatureMaxSince7am : _Data.dailyForecast.day.temperature[0] !== null ? _Data.dailyForecast.day.temperature[0] : '--';
        dataAssignment.push(['nowcard-hi-value', highTemp]);

        console.dir(_Data.lookingAhead);

        //Input the weather icon - Nowcard.
        document.getElementById('nowcard-icon').innerHTML = getWxIcon(_Data.obs.icon);

    };
    document.getElementById('event-anchor').addEventListener('builder', function(){
        mapData();
        helper.setContent(dataAssignment);
    });
    if(_Data.obs){
        mapData();
        helper.setContent(dataAssignment);
    }
})();