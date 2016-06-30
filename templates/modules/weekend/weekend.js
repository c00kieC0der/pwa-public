/**
 * Created by ecook on 6/6/16.
 */
(function(){
    var ngRepeatMap = [
        ['js-dayPartName',      'dateDay'],
        ['js-date',             'dateMonthDate'], // 'MMM d'
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

    var createWeekendModel = function(){
        var weekendInfo = [];
        var dayLimit = 6;
        //if (_Data.dayData.day.dateDayIndex[0] ==6){};
        //else if(_Data.dayData.day.dateDayIndex[0] ==6){};
        var currWeekendData = [];
        var nextWeekendData = [];
        console.log(_Data.dailyForecast.dayData.dateDayIndex);
        for(var i in _Data.dailyForecast.dayData.dateDayIndex){
            if(_Data.dailyForecast.dayData.dateDayIndex.hasOwnProperty(i)) {
                //Indicates Fri, sat, or sun
                console.log(_Data.dailyForecast.dayData.dateDayIndex[i]);
                if (_Data.dailyForecast.dayData.dateDayIndex[i]>4||_Data.dailyForecast.dayData.dateDayIndex[i]===0){
                    console.log("pushing");
                    currWeekendData.push(i);
                };
            }
        }
        console.log(currWeekendData);
        helper.ngRepeatSpecific('ls-row-wrap-24', 'ls-24-hour-data', ngRepeatMap, _Data.dailyForecast.dayData.day, currWeekendData);
    }



    /*
        What div,
        what's the template's name?,
        match data to div in the component,
        data
        do it how many times?
     */
    if(_Data.dailyForecast.dayData){
        createWeekendModel();
        //helper.ngRepeat('ls-row-wrap-24', 'ls-24-hour-data', ngRepeatMap, _Data.dailyForecast.dayData.day, 5);
    }

    document.getElementById('event-anchor').addEventListener('builder', function() {
        createWeekendModel();
        //console.log('STUFF...', '_User.activeLocation.prsntNm');
        //helper.ngRepeat('ls-row-wrap-24', 'ls-24-hour-data', ngRepeatMap, _Data.dailyForecast.dayData.day, 5);
    });
})();