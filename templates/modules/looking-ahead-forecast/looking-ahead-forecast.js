/**
 * Created by ecook on 6/10/16.
 */
(function(){
    var dataAssignmentLookingAhead = [];
    var mapDataLookingAhead = function(){
        // Hide other details on first paint
        document.getElementById("dp2-details").style.display = 'none';
        document.getElementById("dp3-details").style.display = 'none';
        dataAssignmentLookingAhead = [
            ['dp1-daypartName',     _Data.lookingAhead[0].daypartName],
            ['dp1-phrase',          _Data.lookingAhead[0].phrase],
            ['la-part1-icon',       getWxIcon(_Data.lookingAhead[0].wxicon, 'light')],
            ['dp1-highLow',         _Data.lookingAhead[0].highLow],
            ['dp1-temperature',     _Data.lookingAhead[0].temperature],
            ['dp1-precip',          _Data.lookingAhead[0].precip],
            ['dp2-daypartName',     _Data.lookingAhead[1].daypartName],
            ['dp2-phrase',          _Data.lookingAhead[1].phrase],
            ['la-part2-icon',       getWxIcon(_Data.lookingAhead[1].wxicon, 'light')],
            ['dp2-highLow',         _Data.lookingAhead[1].highLow],
            ['dp2-temperature',     _Data.lookingAhead[1].temperature],
            ['dp2-precip',          _Data.lookingAhead[1].precip],
            ['dp3-daypartName',     _Data.lookingAhead[2].daypartName],
            ['dp3-phrase',          _Data.lookingAhead[2].phrase],
            ['la-part3-icon',       getWxIcon(_Data.lookingAhead[2].wxicon, 'light')],
            ['dp3-highLow',         _Data.lookingAhead[2].highLow],
            ['dp3-temperature',     _Data.lookingAhead[2].temperature],
            ['dp3-precip',          _Data.lookingAhead[2].precip],

            // Weather Details
            ['dp1-details-narrative', _Data.lookingAhead[0].narrative],
            ['dp1-details-wind',      _Data.lookingAhead[0].windDirCompass + ' ' + _Data.lookingAhead[0].windSpeed + ' ' + _User.units.wind],
            ['dp1-details-humidity',  _Data.lookingAhead[0].humidity],
            ['dp1-details-uvIndex',   _Data.lookingAhead[0].uvIndex + ' of 10'],
            ['dp1-details-sunrise',   _Data.lookingAhead[0].sunrise],
            ['dp1-details-sunset',    _Data.lookingAhead[0].sunset],
            ['dp2-details-narrative', _Data.lookingAhead[1].narrative],
            ['dp2-details-wind',      _Data.lookingAhead[1].windDirCompass + ' ' + _Data.lookingAhead[1].windSpeed + ' ' + _User.units.wind],
            ['dp2-details-humidity',  _Data.lookingAhead[1].humidity],
            ['dp2-details-uvIndex',   _Data.lookingAhead[1].uvIndex + ' of 10'],
            ['dp2-details-sunrise',   _Data.lookingAhead[1].sunrise],
            ['dp2-details-sunset',    _Data.lookingAhead[1].sunset],
            ['dp3-details-narrative', _Data.lookingAhead[2].narrative],
            ['dp3-details-wind',      _Data.lookingAhead[2].windDirCompass + ' ' + _Data.lookingAhead[2].windSpeed + ' ' + _User.units.wind],
            ['dp3-details-humidity',  _Data.lookingAhead[2].humidity],
            ['dp3-details-uvIndex',   _Data.lookingAhead[2].uvIndex + ' of 10'],
            ['dp3-details-sunrise',   _Data.lookingAhead[2].sunrise],
            ['dp3-details-sunset',    _Data.lookingAhead[2].sunset]




        ];
        var highTemp = _Data.obs.temperatureMaxSince7am ? _Data.obs.temperatureMaxSince7am : _Data.dailyForecast.day.temperature[0] !== null ? _Data.dailyForecast.day.temperature[0] : '--';
        dataAssignmentLookingAhead.push(['nowcard-hi-value', highTemp]);
        //Input the weather icon - Nowcard.
        document.getElementById('nowcard-icon').innerHTML = getWxIcon(_Data.obs.icon, 'light');

        if (getWxCard(_Data.obs.icon) !== "undefined") {
            helper.addClass(document.getElementById("nowcard-bg"), getWxCard(_Data.obs.icon));
        } else {
            helper.addClass(document.getElementById("nowcard-bg"), 'day-clear');
        }





    };

    if(_Data.obs && _Data.obs) {
        mapDataLookingAhead();
        helper.setContent(dataAssignmentLookingAhead);
    }
    document.getElementById('event-anchor').addEventListener('builder', function(){
        mapDataLookingAhead();
        helper.setContent(dataAssignmentLookingAhead);
    });




    /*
      Translations Handling
     */
    var todayForecastLangs = [];
    var updateTodayForecastLangs = function(){
        todayForecastLangs = [
            ['looking-ahead-hdr', _Lang['looking ahead'].toUpperCase()],
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

    if (helper.hasClass(this, 'selected')) {
        // Do nothing
    } else {

        helper.removeClass(daypart1, 'selected');
        helper.removeClass(daypart2, 'selected');
        helper.removeClass(daypart3, 'selected');
        helper.addClass(document.getElementById(clickedId), 'selected');
    }
}
