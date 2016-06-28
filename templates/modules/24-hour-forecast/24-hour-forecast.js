/**
 * Created by ecook on 6/6/16.
 */
(function(){
    var ngRepeatMap = [
        ['js-time',        'time'],
        ['js-date',        'date'],
        ['js-wxicon',      'icon'],
        ['js-temp',        'temperature'],
        ['js-feels',       'feelsLike'],
        ['js-description', 'phrase'],
        ['js-precip',      'precipPct'],
        ['js-humidity',    'rh'],
        ['js-wind-direction',        'windDirCompass'],
        ['js-wind-speed',  'windSpeed']
    ];
    /*
        What div,
        what's the template's name?,
        match data to div in the component,
        data
        do it how many times?
     */
    if(_Data.hourly){
        helper.ngRepeat('ls-row-wrap', 'ls-24-hour-data', ngRepeatMap, _Data.hourly, 12);
    }

    document.getElementById('event-anchor').addEventListener('builder', function() {
        console.log('STUFF...', '_User.activeLocation.prsntNm');
        helper.ngRepeat('ls-row-wrap', 'ls-hourly-data', ngRepeatMap, _Data.hourly, 12);
    });
})();