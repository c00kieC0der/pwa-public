/**
 * Created by ecook on 6/6/16.
 */
(function(){
    var ngRepeatMap = [
        ['js-day',        'dayPartName'],
        ['js-date',        'validDate'],
        ['js-wxicon',      'icon'],
        ['js-temp',        'temperature'],
        ['js-description', 'phrase'],
        ['js-precip',      'precipPct'],
        ['js-humidity',    'humidityPct']
    ];
    /*
        What div,
        what's the template's name?,
        match data to div in the component,
        data
        do it how many times?
     */
    helper.ngRepeat('ls-row-wrap-24', 'ls-24-hour-data', ngRepeatMap, _Data.dailyForecast.day, 5);

    document.getElementById('event-anchor').addEventListener('builder', function() {
        console.log('STUFF...', '_User.activeLocation.prsntNm');
        helper.ngRepeat('ls-row-wrap-24', 'ls-24-hour-data', ngRepeatMap, _Data.dailyForecast.day, 5);
    });
})();