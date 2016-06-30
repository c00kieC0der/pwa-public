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
        ['js-moonset',          'moonset'],
        //Night Values
        ['js-dayPartName-night',      'dateDay'],
        ['js-date-night',             'dateMonthDate'], // 'MMM d'
        ['js-wxicon-night',           'nightIcon'],
        ['js-iconExended-night',      'nightIconExtended'],
        //['js-tempHi-night',           'highs'],
        ['js-tempLo-night',           'lows'],
        ['js-phrase-night',           'nightPhrase'],
        ['js-narrative-night',        'nightNarrative'],
        ['js-precipPct-night',        'nightPrecipPct'],
        ['js-windDirCompass-night',   'nightWindDirCompass'],
        ['js-windSpeed-night',        'nightWindSpeed'],
        ['js-humidityPct-night',      'nightHumidityPct'],
        ['js-uvIndex-night',          'nightUVIndex'],
        ['js-sunrise-night',          'sunrise'],
        ['js-sunset-night',           'sunset'],
        ['js-moonrise-night',         'moonrise'],
        ['js-moonset-night',          'moonset']
    ];

    var createWeekendModel = function(){
        var weekendInfo = [];
        var dayLimit = 6;
        //if (_Data.dayData.day.dateDayIndex[0] ==6){};
        //else if(_Data.dayData.day.dateDayIndex[0] ==6){};
        var currWeekendData = [];
        var nextWeekendData = [];
        var currWeekDataFound = false;
        //console.log(_Data.dailyForecast.dayData.dateDayIndex);
        for(var i in _Data.dailyForecast.dayData.dateDayIndex){
            if(_Data.dailyForecast.dayData.dateDayIndex.hasOwnProperty(i)) {
                //Indicates Fri, sat, or sun
                //console.log(_Data.dailyForecast.dayData.dateDayIndex[i]);
                if (_Data.dailyForecast.dayData.dateDayIndex[i]>4||_Data.dailyForecast.dayData.dateDayIndex[i]===0){
                    //console.log("pushing and "+currWeekDataFound);
                    if(!currWeekDataFound)
                        currWeekendData.push(i);
                    else
                        nextWeekendData.push(i);
                    if(_Data.dailyForecast.dayData.dateDayIndex[i]==0){
                        if(currWeekDataFound==true)break;
                        currWeekDataFound = true;
                    }
                }
            }
        }
        //console.log(currWeekendData);
        helper.ngRepeatSpecific('ls-row-wrap-24', 'ls-24-hour-data', ngRepeatMap, _Data.dailyForecast.dayData.day, currWeekendData);
        //helper.ngRepeatSpecific('ls-row-wrap-24', 'ls-24-hour-data', ngRepeatMap, _Data.dailyForecast.dayData.day, nextWeekendData);
    }



    /*
        What div,
        what's the template's name?,
        match data to div in the component,
        data
        do it how many times?
     */
    if(_Data.dailyForecast){
        createWeekendModel();
        //helper.ngRepeat('ls-row-wrap-24', 'ls-24-hour-data', ngRepeatMap, _Data.dailyForecast.dayData.day, 5);
    }

    document.getElementById('event-anchor').addEventListener('builder', function() {
        createWeekendModel();
        //console.log('STUFF...', '_User.activeLocation.prsntNm');
        //helper.ngRepeat('ls-row-wrap-24', 'ls-24-hour-data', ngRepeatMap, _Data.dailyForecast.dayData.day, 5);
    });
})();