/**
 * Created by ecook on 6/6/16.
 */
(function(){
    var ngRepeatMap = [
        ['js-dayPartName',      'dateDay'],
        ['js-date',             'dateMonthDate'], // 'MMM d'
        ['js-wxicon',           'icon'],
        ['js-iconExended',      'iconExtended'],
        ['js-tempHi',           'dayTemp'],
        ['js-tempLo',           'nightTemp'],
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
        ['js-dayPartName-night',      'dateNight'],
        ['js-date-night',             'dateMonthDate'], // 'MMM d'
        ['js-wxicon-night',           'nightIcon'],
        ['js-iconExended-night',      'nightIconExtended'],
        //['js-tempHi-night',           'highs'],
        ['js-tempLo-night',           'nightTemp'],
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
    var currOpenDetails = [];
    var currOpenDays=[];

    var showDetails = function(e) {
        var clickedEl = e.target;
        while(clickedEl!=null &&clickedEl.tagName.toLowerCase() !="tr"){
            clickedEl = clickedEl.parentNode;
        }
        var rowToStart = clickedEl.rowIndex-1;
        if(rowToStart<0) return;
        //Based on structure of table
        var table = clickedEl.parentNode;
        //if clicked element contains details, then hidden elements are shown.

        for(var j = 0;j<currOpenDetails.length;j++){
            helper.addClass(table.rows[currOpenDetails[j]], "hide");
        }
        currOpenDetails = [];

        if(clickedEl.className.indexOf("clickable open")!==-1){
            clickedEl.className = "day clickable";
            return;
        }
        for(var k = 0;k<currOpenDays.length;k++){
            table.rows[currOpenDays[k]].className = "day clickable";
        }
        currOpenDays = [];
        if(clickedEl.className.indexOf("day clickable")===-1){
            return;
        }
        currOpenDays.push(rowToStart);
        helper.addClass(table.rows[rowToStart++],"open");
        //var classes = table.rows[rowToStart++].className;
        for(var i=0;i<3;i++) {
            helper.removeClass(table.rows[rowToStart],"hide");
            currOpenDetails.push(rowToStart);
            rowToStart++;
        }
    };
    var makeClickable = function() {
        var table =document.getElementsByClassName("twc-table")[0];
        table.addEventListener("click", showDetails);
    };
    /*
     What div,
     what's the template's name?,
     match data to div in the component,
     data
     do it how many times?
     */
    if(_Data.dailyForecast){
        helper.ngRepeat('ls-row-wrap-5day', 'weekend', ngRepeatMap, _Data.dailyForecast.dayData, 5);
        makeClickable();
    }

    document.getElementById('event-anchor').addEventListener('builder', function() {
        helper.ngRepeat('ls-row-wrap-5day', 'weekend', ngRepeatMap, _Data.dailyForecast.dayData, 5);
        makeClickable();
    });
})();