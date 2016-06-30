/**
 * Created by cgardner on 6/24/16.
 */
(function(){
    var ngRepeatMap = [
        ['js-daypartname',      'daypart'],
        ['phrase-td',           'phrase'],
        ['temphi-td',           'tempHi'],
        ['templo-td',           'tempLo'],
        ['precip-td',           'precip'],
        ['wind-td',             'windDirCompass'],
        ['humidity-td',         'rh'],
        ['uvindex-td',          'uvIndex'],
        ['sunrise-td',          'sunrise'],
        ['sunset-td',           'sunset'],
        ['moonrise-td',         'moonrise'],
        ['moonset-td',          'moonset']
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
        helper.ngRepeat('ls-row-wrap-10day', 'ls-10day-data', ngRepeatMap, _Data.tenDay.day, 10);
        console.dir(_Data.dailyForecast);
    }

    //document.getElementById('event-anchor').addEventListener('builder', function() {
    //    //console.log('STUFF...', '_User.activeLocation.prsntNm');
    //    console.log('STUFF...', _Data.dailyForecast);
    //    helper.ngRepeat('ls-row-wrap-10day', 'ls-10day-data', ngRepeatMap, _Data.dailyForecast, 10);
    //});
})();