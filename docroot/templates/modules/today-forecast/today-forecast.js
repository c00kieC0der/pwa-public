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
            ['nowcard-uv-index',    uvIndex]
        ];
        var highTemp = _Data.obs.temperatureMaxSince7am ? _Data.obs.temperatureMaxSince7am : _Data.dailyForecast.day.temperature[0] !== null ? _Data.dailyForecast.day.temperature[0] : '--';
        dataAssignment.push(['nowcard-hi-value', highTemp]);


        //Input the weather icon.
        document.getElementsByClassName('condition-icon wx-weather-icon vector')[0].innerHTML =
            '<span class="wx-iconfont-global wx-icon-' + _Data.obs.phrase.toLowerCase() + '"></span>';
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