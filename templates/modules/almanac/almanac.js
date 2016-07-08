/**
 * Created by ecook on 6/10/16.
 */
(function(){
    var dataAssignmentAlmanac = [];
    var mapDataAlmanac = function(){
        dataAssignmentAlmanac = [

            ['almanac-prevday-avghigh',     _Data.ReportedConditions.prevDayHigh],
            ['almanac-prevday-avglow',      _Data.ReportedConditions.prevDayLow + '&deg;'],
            ['almanac-prevday-avgprecip',   _Data.ReportedConditions.prevDayPrecip],

            ['almanac-7day-avghigh',        _Data.ReportedConditions.sevenDayHigh + '&deg;'],
            ['almanac-7day-avglow',         _Data.ReportedConditions.sevenDayLow + '&deg;'],
            ['almanac-7day-avgprecip',      _Data.ReportedConditions.sevenDayPrecip],

            ['almanac-mtd-high',            _Data.ReportedConditions.mtdHigh + '&deg;'],
            ['almanac-mtd-low',             _Data.ReportedConditions.mtdLow + '&deg;'],
            ['almanac-mtd-precip',          _Data.ReportedConditions.mtdPrecip],

            ['almanac-recordhigh',          _Data.oneDayHistorical.recordHigh + '&deg;'],
            ['almanac-recordhighyr',        _Data.oneDayHistorical.recordHighYear],
            ['almanac-recordlow',           _Data.oneDayHistorical.recordLow + '&deg;'],
            ['almanac-recordlowyr',         _Data.oneDayHistorical.recordLowYear],

            ['almanac-avghigh',             _Data.oneDayHistorical.avgHigh + '&deg;'],
            ['almanac-avglow',              _Data.oneDayHistorical.avgLow + '&deg;'],
            ['almanac-avgprecip',           _Data.oneDayHistorical.avgPrecip],

            ['almanac-month1-avghigh',      _Data.historicalMonthlyAvg.currentMonthAvgHigh + '&deg;'],
            ['almanac-month1-avglow',       _Data.historicalMonthlyAvg.currentMonthAvgLow + '&deg;'],
            ['almanac-month1-avgprecip',    _Data.historicalMonthlyAvg.currentMonthAvgPrecip + ' in'],

            ['almanac-month2-avghigh',      _Data.historicalMonthlyAvg.nextMonthAvgHigh + '&deg;'],
            ['almanac-month2-avglow',       _Data.historicalMonthlyAvg.nextMonthAvgLow + '&deg;'],
            ['almanac-month2-avgprecip',    _Data.historicalMonthlyAvg.nextMonthAvgPrecip],

            ['almanac-month3-avghigh',      _Data.historicalMonthlyAvg.monthAfterNextAvgHigh + '&deg;'],
            ['almanac-month3-avglow',       _Data.historicalMonthlyAvg.monthAfterNextAvgLow + '&deg;'],
            ['almanac-month3-avgprecip',    _Data.historicalMonthlyAvg.monthAfterNextAvgPrecip]

        ];
    };
    if (_Data.oneDayHistorical && _Data.historicalMonthlyAvg && _Data.ReportedConditions) {
        mapDataAlmanac();
        helper.setContent(dataAssignmentAlmanac);
    };

    document.getElementById('event-anchor').addEventListener('builder', function(){
        mapDataAlmanac();
        helper.setContent(dataAssignmentAlmanac);
    });


    /*
     Translations Handling
     */
    var almanacForecastLangs = [];
    var updateAlmanacForecastLangs = function(){
        todayForecastLangs = [
            ['almanac-hdr',             helper.capitalize(_Lang['almanac'])],
            ['almanac-high-label' ,     helper.capitalize(_Lang['high'])],
            ['almanac-low-label' ,      helper.capitalize(_Lang['low'])],
            ['almanac-precip-label',    helper.capitalize(_Lang['precip'])],
            ['almanac-yesterday-label', helper.capitalize(_Lang['yesterday'])],
            ['almanac-last-7days-label', helper.capitalize(_Lang['last 7 days'])],
            ['almanac-averages-label',  helper.capitalize(_Lang['averages'])],
            ['almanac-records-label',   helper.capitalize(_Lang['records'])],
            ['almanac-mtd-label',       helper.capitalize(_Lang['month to date'])],
            ['almanac-monthly-hdr',     helper.capitalize(_Lang['historical monthly average'])]
        ];
        helper.setContent(almanacForecastLangs);
    };
    if(window['_Lang'] && window['_Lang']['feels like']){
        updateAlmanacForecastLangs();
    }
    document.getElementById('event-anchor').addEventListener('lang-builder', function(){

        updateAlmanacForecastLangs();
        mapDataAlmanac();
        helper.setContent(dataAssignmentAlmanac);

    });

})();
