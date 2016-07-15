/**
 * Created by ecook on 6/10/16.
 */
(function(){
    var dataAssignmentNowCard = [];
    var mapDataNowCard = function(){
        // Hide other details on first paint
        var bt = _Data.obs.barometerTrend;
        var pressureArrow = bt === 'Falling' ? '<span class="wx-iconfont-global wx-icon-arrow-down-4"></span>' :
            bt === 'Rising' ? '<span class="wx-iconfont-global wx-icon-arrow-up-4"></span>' :
                '<span class="wx-iconfont-global wx-icon-arrow-right1-4"></span>';
        var uvIndex = _Data.obs.uvIndex > 10 ? 'Extreme' : _Data.obs.uvIndex + ' of 10';
        dataAssignmentNowCard = [
            ['nowcard-location',    _User.activeLocation.prsntNm.toUpperCase()],
            ['nowcard-timestamp',   'as of ' + _Data.obs.timestamp.toLowerCase()],
            ['nowcard-temp',        _Data.obs.temperature],
            ['nowcard-feels-value', _Data.obs.feelsLike],
            ['nowcard-phrase',      _Data.obs.phrase],
            ['nowcard-hi-value',    _Data.obs.phrase],
            ['nowcard-lo-value',    _Data.dailyForecast.night.temperature[0]],
            ['nowcard-humidity',    _Data.obs.humidity],
            ['nowcard-wind',        _Data.obs.windDirCompass + ' ' + _Data.obs.windSpeed + ' ' + _User.units.wind],
            ['nowcard-dewpoint',    _Data.obs.dewPoint],
            ['nowcard-pressure',    _Data.obs.altimeter + ' ' + _User.units.pressure + ' ' + pressureArrow],
            ['nowcard-visibility',  _Data.obs.visibility + ' ' + _User.units.visibility],
            ['nowcard-uv-index',    uvIndex]
        ];
        var highTemp = _Data.obs.temperatureMaxSince7am ? _Data.obs.temperatureMaxSince7am : _Data.dailyForecast.day.temperature[0] !== null ? _Data.dailyForecast.day.temperature[0] : '--';
        dataAssignmentNowCard.push(['nowcard-hi-value', highTemp]);
        //Input the weather icon - Nowcard.
        document.getElementById('nowcard-icon').innerHTML = getWxIcon(_Data.obs.icon, 'light');

        if (getWxCard(_Data.obs.icon) !== "undefined") {
            helper.addClass(document.getElementById("nowcard-bg"), getWxCard(_Data.obs.icon));
        } else {
            helper.addClass(document.getElementById("nowcard-bg"), 'day-clear');
        }





    };

    if(_Data.obs && _Data.obs) {
        mapDataNowCard();
        helper.setContent(dataAssignmentNowCard);
    }
    document.getElementById('event-anchor').addEventListener('builder', function(){
        mapDataNowCard();
        helper.setContent(dataAssignmentNowCard);
    });


    /*
      Translations Handling
     */
    var todayForecastLangs = [];
    var updateTodayForecastLangs = function(){
        todayForecastLangs = [
            ['looking-ahead-hdr', _Lang['looking ahead'].toUpperCase()],
            ['nowcard-feels-label', _Lang['feels like'].toLowerCase()],
            ['today-humidity' , helper.capitalize(_Lang.humidity)],
            ['today-wind', helper.capitalize(_Lang.wind)],
            ['today-dew-point', helper.capitalize(_Lang['dew point'])],
            ['today-pressure', helper.capitalize(_Lang.pressure)],
            ['today-visibility', helper.capitalize(_Lang.visibility)],
            ['today-uv-index', helper.capitalize(_Lang['uv index'])]
        ];
        helper.setContent(todayForecastLangs);
    };
    if(window['_Lang'] && window['_Lang']['feels like']){
        updateTodayForecastLangs();
    }
    document.getElementById('event-anchor').addEventListener('lang-builder', function(){
            updateTodayForecastLangs();
    });

})();
