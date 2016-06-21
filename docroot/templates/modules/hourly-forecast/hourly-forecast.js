/**
 * Created by ecook on 6/6/16.
 */
(function(){
    var ngRepeatMap = [
        ['time',        'processTime'],
        ['temp',        'temperature'],
        ['feels',       'feelsLike'],
        ['description', 'phrase'],
        ['precip',      'precipPct'],
        ['humidity',    'rh'],
        ['wind',        'windDirCompass'],
        ['wind-speed',  'windSpeed']
    ];
    /*
        What div,
        what's the template's name?,
        match data to div in the component,
        data
        do it how many times?
     */
    helper.ngRepeat('ls-row-wrap', 'ls-hourly-data', ngRepeatMap, _Data.hourly, 6);

    console.log(_Data.hourly) ;
    document.getElementById('event-anchor').addEventListener('builder', function() {
        // helper.ngRepeat('vertical-wx-row-div', 'vertical-wx-row', ngRepeatMap, _Data.hourly, 6);
        helper.ngRepeat('ls-row-wrap', 'ls-hourly-data', ngRepeatMap, _Data.hourly, 6);
    });
})();