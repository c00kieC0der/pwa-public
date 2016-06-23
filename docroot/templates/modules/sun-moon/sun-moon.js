/**
 * Created by avery.horton on 6/23/16.
 */
console.log('Running sunMoon');
(function(){
    var dataAssignment = [];
    var mapData = function(){
        dataAssignment=[
            ['sunmoon-moonPhrase',_Data.dailyForecast.moonPhrase[0]],
            ['sunmoon-sunrise',_Data.dailyForecast.sunriseTime[0]],
            //['sunmoon-noon',_Data.dailyForecast.moonPhrase[0]],
            ['sunmoon-sunset',_Data.dailyForecast.sunsetTime[0]],
            ['sunmoon-moonrise',_Data.dailyForecast.moonriseTime[0]],
            ['sunmoon-moonset',_Data.dailyForecast.moonsetTime[0]],

        ]
    }


    document.getElementById('event-anchor').addEventListener('builder', function(){
        mapData();
        helper.setContent(dataAssignment);
    });
    if(_Data.obs){
        mapData();
        helper.setContent(dataAssignment);
    }
})();