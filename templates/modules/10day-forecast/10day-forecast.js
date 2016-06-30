/**
 * Created by ecook on 6/6/16.
 */
(function(){
    var ngRepeatMap = [
        ['js-dayPartName',      'dayPartName'],
        ['js-date',             'date'], // 'MMM d'
        ['js-wxicon',           'icon'],
        ['js-iconExended',      'iconExtended'],
        ['js-tempHi',           'highs'],
        ['js-tempLo',           'lows'],
        ['js-phrase',           'phrase'],
        ['js-narrative',        'narrative'],
        ['js-precipPct',        'precipPct'],
        ['js-windDirCompass',   'windDirCompass'],
        ['js-windSpeed',        'windSpeed'],
        ['js-humidityPct',      'humidityPct'],
        ['js-uvIndex',          'uvIndex'],
        ['js-sunrise',          'sunrise'],
        ['js-sunset',           'sunset'],
        ['js-moonrise',         'moonrise'],
        ['js-moonset',          'moonset']
    ];
    /*
     What div,
     what's the template's name?,
     match data to div in the component,
     data
     do it how many times?
     */
    if(_Data.dailyForecast.dayData){
        helper.ngRepeat('ls-row-wrap-10day', 'ls-daily-data', ngRepeatMap, _Data.dailyForecast.dayData.day, 5);
    }

    document.getElementById('event-anchor').addEventListener('builder', function() {
        helper.ngRepeat('ls-row-wrap-10day', 'ls-daily-data', ngRepeatMap, _Data.dailyForecast.dayData.day, 5);
    });
})();