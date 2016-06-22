/**
 * Created by ecook on 6/6/16.
 */
(function(){
    console.log(_Data.hourly);
    //['date-td',        'processDate'],
    var ngRepeatMap = [
        ['time-td',        'processTime'],
        ['temp-td',        'temperature'],
        ['feels-td',       'feelsLike'],
        ['description-td', 'phrase'],
        ['precip-td',      'precipPct'],
        ['humidity-td',    'rh'],
        ['wind-direction-td',        'windDirCompass'],
        ['wind-speed-td',  'windSpeed']
    ];
    /*
        What div,
        what's the template's name?,
        match data to div in the component,
        data
        do it how many times?
     */
    if(_Data.hourly){
        helper.ngRepeat('ls-row-wrap', 'ls-hourly-data', ngRepeatMap, _Data.hourly, 12);
        console.log(_Data.hourly);
    }

    document.getElementById('event-anchor').addEventListener('builder', function() {
        helper.ngRepeat('ls-row-wrap', 'ls-hourly-data', ngRepeatMap, _Data.hourly, 12);
    });
})();