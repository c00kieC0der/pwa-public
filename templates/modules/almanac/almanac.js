/**
 * Created by ecook on 6/10/16.
 */
(function(){
    var dataAssignmentAlmanac = [];
    var mapDataAlmanac = function(){
        dataAssignmentAlmanac = [
            ['almanac-prevday-avghigh',     _Data.reportedConditions.prevDayHigh + '&deg;'],
            ['almanac-prevday-avglow',      _Data.reportedConditions.prevDayLow + '&deg;'],
            ['almanac-prevday-avgprecip',   _Data.reportedConditions.prevDayPrecip + ' in'],

            ['almanac-7day-avghigh',        _Data.reportedConditions.sevenDayHigh + '&deg;'],
            ['almanac-7day-avglow',         _Data.reportedConditions.sevenDayLow + '&deg;'],
            ['almanac-7day-avgprecip',      _Data.reportedConditions.sevenDayPrecip],

            ['almanac-mtd-high',            _Data.reportedConditions.mtdHigh + '&deg;'],
            ['almanac-mtd-low',             _Data.reportedConditions.mtdLow + '&deg;'],
            ['almanac-mtd-precip',          _Data.reportedConditions.mtdPrecip],

            ['almanac-recordhigh',          _Data.oneDayHistorical.recordHigh + '&deg;'],
            ['almanac-recordhighyr',        _Data.oneDayHistorical.recordHighYear],
            ['almanac-recordlow',           _Data.oneDayHistorical.recordLow + '&deg;'],
            ['almanac-recordlowyr',         _Data.oneDayHistorical.recordLowYear],

            ['almanac-avghigh',             _Data.oneDayHistorical.avgHigh + '&deg;'],
            ['almanac-avglow',              _Data.oneDayHistorical.avgLow + '&deg;'],
            ['almanac-avgprecip',           _Data.oneDayHistorical.avgPrecip],

            ['almanac-month1-avghigh',      _Data.historicalMonthlyAvg.currentMonthAvgHigh + '&deg;'],
            ['almanac-month1-avglow',       _Data.historicalMonthlyAvg.currentMonthAvgLow + '&deg;'],
            ['almanac-month1-avgprecip',    _Data.historicalMonthlyAvg.currentMonthAvgPrecip],

            ['almanac-month2-avghigh',      _Data.historicalMonthlyAvg.nextMonthAvgHigh + '&deg;'],
            ['almanac-month2-avglow',       _Data.historicalMonthlyAvg.nextMonthAvgLow + '&deg;'],
            ['almanac-month2-avgprecip',    _Data.historicalMonthlyAvg.nextMonthAvgPrecip],

            ['almanac-month3-avghigh',      _Data.historicalMonthlyAvg.monthAfterNextAvgHigh + '&deg;'],
            ['almanac-month3-avglow',       _Data.historicalMonthlyAvg.monthAfterNextAvgLow + '&deg;'],
            ['almanac-month3-avgprecip',    _Data.historicalMonthlyAvg.monthAfterNextAvgPrecip],

            //TODO: Translate these
            ['almanac-currentmonth',        _Data.almanacMonths.month1],
            ['almanac-nextmonth',           _Data.almanacMonths.month2],
            ['almanac-monthafternext',      _Data.almanacMonths.month3],

            ['almanac-date',                _Data.almanacMonths.currentDate]

        ];
        helper.setContent(dataAssignmentAlmanac);
    };

    if (_Data.oneDayHistorical) {  console.log('data almanac', _Data);
        mapDataAlmanac();
    }

    document.getElementById('event-anchor').addEventListener('almanac-builder', function(){  console.log("TRIGGERED", _Data);
        mapDataAlmanac();
    });

    /*
     Translations Handling
     */
    var almanacForecastLangs = [];
    var updateAlmanacForecastLangs = function(){
        almanacForecastLangs = [
            ['almanac-hdr',                 _Lang['almanac'].toUpperCase()],
            ['almanac-high-label',          _Lang['high'].toUpperCase()],
            ['almanac-low-label',           _Lang['low'].toUpperCase()],
            ['almanac-precip-label',        _Lang['precip'].toUpperCase()],
            ['almanac-yesterday-label',     helper.capitalize(_Lang['yesterday'])],
            ['almanac-last-7days-label',    helper.capitalize(_Lang['last 7 days'])],
            ['almanac-averages-label',      helper.capitalize(_Lang['averages'])],
            ['almanac-records-label',       helper.capitalize(_Lang['records'])],
            ['almanac-mtd-label',           helper.capitalize(_Lang['month to date'])],
            ['almanac-monthly-hdr',         helper.capitalize(_Lang['historical monthly average'])]
        ];
        helper.setContent(almanacForecastLangs);
    };
    document.getElementById('event-anchor').addEventListener('lang-builder', function(){
        updateAlmanacForecastLangs();
    });
    updateAlmanacForecastLangs();
})();
