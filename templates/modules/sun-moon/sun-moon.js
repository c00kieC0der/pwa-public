/**
 * Created by avery.horton on 6/23/16.
 */
(function () {
    var dataAssignment = [];
    var solarAssignment = [];
    var mapData = function () {
        dataAssignment = [
            ['sunmoon-sunrise', _Data.dailyForecast.sunriseTime[0]],
            ['sunmoon-sunset', _Data.dailyForecast.sunsetTime[0]],
            ['sunmoon-moonphrase', _Data.dailyForecast.moonPhrase[0]],
            ['sunmoon-moonrise', _Data.dailyForecast.moonriseTime[0]],
            ['sunmoon-moonset', _Data.dailyForecast.moonsetTime[0]]
        ];

    };
    
    var mapSolarNoon = function () {
        if(_Data.solarData.moonIcons[0] ||_Data.solarData.moonIcons[1]) {
            var moonIcon = "wx-iconfont-moon moon-phase-"
                + (_Data.solarData.moonIcons[0]?_Data.solarData.moonIcons[0]:_Data.solarData.moonIcons[1])
                + " sunmoon-icon";
            document.getElementById('sunmoon-moonphrase-icon').setAttribute("class", moonIcon);
        }
        solarAssignment = [
            ['sunmoon-noon', _Data.solarData.noonTime[0]],
        ];
    };


    document.getElementById('event-anchor').addEventListener('builder', function () {
        mapData();
        helper.setContent(dataAssignment);
    });
    document.getElementById('event-anchor').addEventListener('astro-builder', function () {
        mapSolarNoon();
        helper.setContent(solarAssignment);
    });

    if (_Data.dailyForecast) {
        mapData();
        helper.setContent(dataAssignment);
    }
    if (_Data.solarData) {
        mapSolarNoon();
        helper.setContent(solarAssignment);
    }
})();