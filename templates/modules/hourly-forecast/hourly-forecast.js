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
    if(_Data.hourly){ console.log('already have data', _Data.hourly);
        domReady(helper.ngRepeat('ls-row-wrap', 'ls-hourly-data', ngRepeatMap, _Data.hourly, 12));
    }

    document.getElementById('event-anchor').addEventListener('builder', function() { console.log('event'); console.log(_Data.hourly);
        domReady(helper.ngRepeat('ls-row-wrap', 'ls-hourly-data', ngRepeatMap, _Data.hourly, 12))
    });

    var hourlyForecastLangs = [];
    var updateHourlyForecastLangs = function(){
        hourlyForecastLangs = [
            ['hourly-time', _Lang['time'].toUpperCase()],
            ['hourly-description', _Lang['description'].toUpperCase()],
            ['hourly-temp', _Lang['temp'].toUpperCase()],
            ['hourly-feels', _Lang['feels'].toUpperCase()],
            ['hourly-precip', _Lang['precip'].toUpperCase()],
            ['hourly-humidity', _Lang['humidity'].toUpperCase()],
            ['hourly-wind', _Lang['wind'].toUpperCase()]
        ];
        helper.setContent(hourlyForecastLangs);
    };
    if(window['_Lang'] && window['_Lang']['feels like']){
        updateHourlyForecastLangs();
    }
    document.getElementById('event-anchor').addEventListener('lang-builder', function(){
        updateHourlyForecastLangs();
    });

})();