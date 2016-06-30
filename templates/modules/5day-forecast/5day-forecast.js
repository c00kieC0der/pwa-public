/**
 * Created by cgardner on 6/24/16.
 */
(function(){
    var ngRepeatMap = [
        ['js-dayPartName',  'dayPartName'],
        ['js-date',         'date'], // 'MMM d'
        ['js-wxicon',       'icon'],
        ['js-iconExended',  'iconExtended'],
        ['js-tempHi',       'tempHi'],
        ['js-tempLo',       'tempLo'],
        ['js-phrase',       'phrase'],
        ['js-precipPct',    'precipPct'],
        ['js-humidityPct',  'humidityPct'],
        ['js-uvIndex',      'uvIndex'],
        ['js-sunrise',      'sunrise'],
        ['js-sunset',       'sunset'],
        ['js-moonrise',     'moonrise'],
        ['js-moonset',      'moonset']
    ];
    /*
     What div,
     what's the template's name?,
     match data to div in the component,
     data
     do it how many times?
     */

    //(divId, componentName, dataMap, data, multiplier)

    if(_Data.dailyForecast){
        helper.ngRepeat('ls-row-wrap-10day', 'ls-10day-data', ngRepeatMap, _Data.dailyForecast.day, 5);
    }

    document.getElementById('event-anchor').addEventListener('builder', function() {
        helper.ngRepeat('ls-row-wrap-10day', 'ls-10day-data', ngRepeatMap, _Data.dailyForecast.day, 5);
    });
})();