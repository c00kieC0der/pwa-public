/**
 * Created by ecook on 6/10/16.
 */
(function(){
    var dataAssignmentAlmanac = [];
    var mapDataAlmanac = function(){
        var DEG_SYMBOL = '&deg;';

        var prevDayHigh     = _Data.reportedConditions.prevDayHigh,
            prevDayLow      = _Data.reportedConditions.prevDayLow,
            prevDayPrecip   = _Data.reportedConditions.prevDayPrecip,

            sevenDayHigh    = _Data.reportedConditions.sevenDayHigh,
            sevenDayLow     = _Data.reportedConditions.sevenDayLow,
            sevenDayPrecip  = _Data.reportedConditions.sevenDayPrecip,

            mtdHigh         = _Data.reportedConditions.mtdHigh,
            mtdLow          = _Data.reportedConditions.mtdLow;
            mtdPrecip       = _Data.reportedConditions.mtdPrecip;

        var recordHigh      = _Data.oneDayHistorical.recordHigh,
            recordHighYear  = _Data.oneDayHistorical.recordHighYear,
            recordLow       = _Data.oneDayHistorical.recordLow,
            recordLowYear   = _Data.oneDayHistorical.recordLowYear,

            avgHigh         = _Data.oneDayHistorical.avgHigh,
            avgLow          = _Data.oneDayHistorical.avgLow,
            avgPrecip       = _Data.oneDayHistorical.avgPrecip;

        var currentMonthAvgHigh     = _Data.historicalMonthlyAvg.currentMonthAvgHigh,
            currentMonthAvgLow      = _Data.historicalMonthlyAvg.currentMonthAvgLow,
            currentMonthAvgPrecip   = _Data.historicalMonthlyAvg.currentMonthAvgPrecip,

            nextMonthAvgHigh        = _Data.historicalMonthlyAvg.nextMonthAvgHigh,
            nextMonthAvgLow         = _Data.historicalMonthlyAvg.nextMonthAvgLow,
            nextMonthAvgPrecip      = _Data.historicalMonthlyAvg.nextMonthAvgPrecip,

            monthAfterNextAvgHigh   = _Data.historicalMonthlyAvg.monthAfterNextAvgHigh,
            monthAfterNextAvgLow    = _Data.historicalMonthlyAvg.monthAfterNextAvgLow,
            monthAfterNextAvgPrecip = _Data.historicalMonthlyAvg.monthAfterNextAvgPrecip;

        dataAssignmentAlmanac = [
            ['almanac-prevday-avghigh',     helper.safeDisplay(prevDayHigh) + (prevDayHigh ? DEG_SYMBOL : '')],
            ['almanac-prevday-avglow',      helper.safeDisplay(prevDayLow) + (prevDayLow ? DEG_SYMBOL : '')],
            ['almanac-prevday-avgprecip',   helper.safeDisplay(prevDayPrecip) + (prevDayPrecip ? DEG_SYMBOL : '')],

            ['almanac-7day-avghigh',        helper.safeDisplay(sevenDayHigh) + (sevenDayHigh ? DEG_SYMBOL : '')],
            ['almanac-7day-avglow',         helper.safeDisplay(sevenDayLow) + (sevenDayLow ? DEG_SYMBOL : '')],
            ['almanac-7day-avgprecip',      helper.safeDisplay(sevenDayPrecip)],

            ['almanac-mtd-high',            helper.safeDisplay(mtdHigh) + (mtdHigh ? DEG_SYMBOL : '')],
            ['almanac-mtd-low',             helper.safeDisplay(mtdLow) + (mtdLow ? DEG_SYMBOL : '')],
            ['almanac-mtd-precip',          helper.safeDisplay(mtdPrecip)],

            ['almanac-avghigh',             helper.safeDisplay(avgHigh) + (avgHigh ? DEG_SYMBOL : '')],
            ['almanac-avglow',              helper.safeDisplay(avgLow) + (avgLow ? DEG_SYMBOL : '')],
            ['almanac-avgprecip',           helper.safeDisplay(avgPrecip)],

            ['almanac-month1-avghigh',      helper.safeDisplay(currentMonthAvgHigh) + (currentMonthAvgHigh ? DEG_SYMBOL : '')],
            ['almanac-month1-avglow',       helper.safeDisplay(currentMonthAvgLow) + (currentMonthAvgLow ? DEG_SYMBOL : '')],
            ['almanac-month1-avgprecip',    helper.safeDisplay(currentMonthAvgPrecip)],

            ['almanac-month2-avghigh',      helper.safeDisplay(nextMonthAvgHigh) + (nextMonthAvgHigh ? DEG_SYMBOL : '')],
            ['almanac-month2-avglow',       helper.safeDisplay(nextMonthAvgLow) + (nextMonthAvgLow ? DEG_SYMBOL : '')],
            ['almanac-month2-avgprecip',    helper.safeDisplay(nextMonthAvgPrecip)],

            ['almanac-month3-avghigh',      helper.safeDisplay(monthAfterNextAvgHigh) + (monthAfterNextAvgHigh ? DEG_SYMBOL : '')],
            ['almanac-month3-avglow',       helper.safeDisplay(monthAfterNextAvgLow) + (monthAfterNextAvgLow ? DEG_SYMBOL : '')],
            ['almanac-month3-avgprecip',    helper.safeDisplay(monthAfterNextAvgPrecip)],

            //TODO: Translate these
            ['almanac-currentmonth',        helper.safeDisplay(_Data.almanacMonths.month1)],
            ['almanac-nextmonth',           helper.safeDisplay(_Data.almanacMonths.month2)],
            ['almanac-monthafternext',      helper.safeDisplay(_Data.almanacMonths.month3)],

            ['almanac-date',                helper.safeDisplay(_Data.almanacMonths.currentDate)]

        ];

        var recordsArray = [
            ['almanac-recordhigh',          helper.safeDisplay(recordHigh) + (recordHigh ? DEG_SYMBOL : '')],
            ['almanac-recordlow',           helper.safeDisplay(recordLow) + (recordLow ? DEG_SYMBOL : '')]
        ];
        if (recordHighYear || recordLowYear) {
            recordsArray.push(['almanac-recordhighyr', helper.safeDisplay(recordHighYear)]);
            recordsArray.push(['almanac-recordlowyr',  helper.safeDisplay(recordLowYear)]);
        }
        dataAssignmentAlmanac = dataAssignmentAlmanac.concat(recordsArray);
        helper.setContent(dataAssignmentAlmanac);
    };

    if (_Data.oneDayHistorical) {
        mapDataAlmanac();
    }

    document.getElementById('event-anchor').addEventListener('almanac-builder', function(){
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
