/**
 * Created by avery.horton on 6/23/16.
 */
console.log('Running sunMoon');
(function(){
    var dataAssignment = [];
    var solarAssignment = [];
    var mapData = function(){
        dataAssignment=[
            ['sunmoon-moonPhrase',_Data.dailyForecast.moonPhrase[0]],
            ['sunmoon-sunrise',_Data.dailyForecast.sunriseTime[0]],
            ['sunmoon-sunset',_Data.dailyForecast.sunsetTime[0]],
            ['sunmoon-moonrise',_Data.dailyForecast.moonriseTime[0]],
            ['sunmoon-moonset',_Data.dailyForecast.moonsetTime[0]]
        ];

    }
    var mapSolarNoon = function(){
        solarAssignment=[
            ['sunmoon-noon',_Data.solarNoon]
        ];
    }


    document.getElementById('event-anchor').addEventListener('builder', function(){
        mapData();
        helper.setContent(dataAssignment);
    });
    document.getElementById('event-anchor').addEventListener('astro-builder', function(){
        mapSolarNoon();
        helper.setContent(solarAssignment);
    });
    if(_Data.dailyForecast){
        mapData();
        helper.setContent(dataAssignment);
    }
    if(_Data.solarNoon){
        mapSolarNoon();
        helper.setContent(solarAssignment);
    }
})();