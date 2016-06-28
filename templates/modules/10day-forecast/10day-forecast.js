(function(){
    var ngRepeatMap = [
        ['phrase-td',           'phrase'],
        ['temphi-td',           'tempHi'],
        ['templo-td',           'tempLo'],
        ['precip-td',           'precipPct'],
        ['wind-direction-td',   'windDirCompass'],
        ['wind-speed-td',       'windSpeed'],
        ['humidity-td',         'rh'],
        ['uvindex-td',          'uvIndex']
    ];
    /*
     What div,
     what's the template's name?,
     match data to div in the component,
     data
     do it how many times?
     */
    if(_Data.dailyForecast){
        helper.ngRepeat('ls-row-wrap-10day', 'ls-hourly-data-10day', ngRepeatMap, _Data.dailyForecast, 10);
    }

    document.getElementById('event-anchor').addEventListener('builder', function() {
        console.log(_Data.dailyForecast);
        helper.ngRepeat('ls-row-wrap-10day', 'ls-10day-data', ngRepeatMap, _Data.dailyForecast, 10);
    });
})();