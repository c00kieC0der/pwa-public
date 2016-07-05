// almanac.js
/**
 * Created by ecook on 6/23/16.
 */
// console.log('loaded almanac script. ');

(function() {

    document.getElementById('event-anchor').addEventListener('almanac-builder', function () {
        console.log(_Data);
    });
    if (_Data.oneDayHistorical) {
        console.log(_Data);

    }
})();

function renderAlmanac(){
    var almanacDateObj = new Date(_Data.datetime.datetime);
    var datesObj = formatDates(almanacDateObj, _User.lang);
    document.getElementById('almanac-date').innerHTML =  datesObj.headerDate;


        setMonthlyHxValues(_Data.historicalMonthlyAvg, datesObj, _Data.tempUnit, _Data.precipUnit);
}

function setMonthlyHxValues(data, datesObj, tempUnit) {
    console.log(data);
    console.log(datesObj);
}

//function setMonthlyHistoricalValues(data, datesObj, tempUnit, precipUnit) {
//    var nullPlaceholder = '\u2014',
//        monthlyHxValues = {
//            currentMonth: { name: datesObj.thisMonth,
//                avgHigh: (data.currentMonthAvgHigh ? formatTemp(data.currentMonthAvgHigh, tempUnit) : nullPlaceholder),
//                avgLow: (data.currentMonthAvgLow ? formatTemp(data.currentMonthAvgLow, tempUnit) : nullPlaceholder),
//                avgPrecip: (data.currentMonthAvgPrecip ? formatPrecip(data.currentMonthAvgPrecip, precipUnit) : nullPlaceholder)},
//            nextMonth: { name: datesObj.nextMonth,
//                avgHigh: (data.nextMonthAvgHigh ? formatTemp(data.nextMonthAvgHigh, tempUnit) : nullPlaceholder),
//                avgLow: (data.nextMonthAvgLow ? formatTemp(data.nextMonthAvgLow, tempUnit): nullPlaceholder),
//                avgPrecip: (data.nextMonthAvgPrecip >= 0 ? formatPrecip(data.nextMonthAvgPrecip, precipUnit) : nullPlaceholder)},
//            monthAfterNext: { name: datesObj.monthAfterNext,
//                avgHigh:(data.monthAfterNextAvgHigh ? formatTemp(data.monthAfterNextAvgHigh, tempUnit) : nullPlaceholder),
//                avgLow: (data.monthAfterNextAvgLow ? formatTemp(data.monthAfterNextAvgLow, tempUnit) : nullPlaceholder),
//                avgPrecip: (data.monthAfterNextAvgPrecip >= 0 ? formatPrecip(data.monthAfterNextAvgPrecip, precipUnit) : nullPlaceholder)}
//        };
//    document.getElementById('current-month').innerHTML = monthlyHxValues.currentMonth.name;
//    document.getElementById('next-month').innerHTML = monthlyHxValues.nextMonth.name;
//    document.getElementById('month-after-next').innerHTML = monthlyHxValues.monthAfterNext.name;
//    document.getElementById('currentmonth-high').innerHTML = monthlyHxValues.currentMonth.avgHigh;
//    document.getElementById('currentmonth-low').innerHTML =  monthlyHxValues.currentMonth.avgLow;
//    document.getElementById('currentmonth-precip').innerHTML = monthlyHxValues.currentMonth.avgPrecip;
//    document.getElementById('nextmonth-high').innerHTML = monthlyHxValues.nextMonth.avgHigh;
//    document.getElementById('nextmonth-low').innerHTML = monthlyHxValues.nextMonth.avgLow;
//    document.getElementById('nextmonth-precip').innerHTML = monthlyHxValues.nextMonth.avgPrecip;
//    document.getElementById('monthafternext-high').innerHTML = monthlyHxValues.monthAfterNext.avgHigh;
//    document.getElementById('monthafternext-low').innerHTML = monthlyHxValues.monthAfterNext.avgLow;
//    document.getElementById('monthafternext-precip').innerHTML = monthlyHxValues.monthAfterNext.avgPrecip;
//
//}

function setReportedConditionsValues(data, tempUnit, precipUnit) {
    var nullPlaceholder = '\u2014',
        conditions = {
            yesterdayHighTemp: (!isNaN(data.prevDayHigh) ? formatTemp(data.prevDayHigh, tempUnit) : nullPlaceholder),
            yesterdayLowTemp: (!isNaN(data.prevDayLow) ? formatTemp(data.prevDayLow, tempUnit) : nullPlaceholder),
            yesterdayPrecip: (!isNaN(data.prevDayPrecip) ? formatPrecip(data.prevDayPrecip, precipUnit) : nullPlaceholder),
            lastWeekHighTemp: (!isNaN(data.sevenDayHigh) ? formatTemp(data.sevenDayHigh, tempUnit) : nullPlaceholder),
            lastWeekLowTemp: (!isNaN(data.sevenDayLow) ? formatTemp(data.sevenDayLow, tempUnit) : nullPlaceholder),
            lastWeekPrecip: (!isNaN(data.sevenDayPrecip) ? formatPrecip(data.sevenDayPrecip, precipUnit) : nullPlaceholder),
            mtdHigh: (!isNaN(data.mtdHigh) ? formatTemp(data.mtdHigh, tempUnit) : nullPlaceholder),
            mtdLow: (!isNaN(data.mtdLow) ? formatTemp(data.mtdLow, tempUnit) : nullPlaceholder),
            mtdPrecip: (!isNaN(data.mtdPrecip) ? formatPrecip(data.mtdPrecip, precipUnit) : nullPlaceholder)
        };

    document.getElementById('yesterday-high').innerHTML = conditions.yesterdayHighTemp;
    document.getElementById('yesterday-low').innerHTML = conditions.yesterdayLowTemp;
    document.getElementById('yesterday-precip').innerHTML = conditions.yesterdayPrecip;
    document.getElementById('last7-high').innerHTML = conditions.lastWeekHighTemp;
    document.getElementById('last7-low').innerHTML = conditions.lastWeekLowTemp;
    document.getElementById('last7-precip').innerHTML = conditions.lastWeekPrecip;
    document.getElementById('mtd-high').innerHTML = conditions.mtdHigh;
    document.getElementById('mtd-low').innerHTML = conditions.mtdLow;
    document.getElementById('mtd-precip').innerHTML = conditions.mtdPrecip;
}

function formatTemp(temp, tempUnit) {
    return temp + '\xB0' + tempUnit;
}
function formatPrecip(precip, precipUnit) {
    return precip.toFixed(2) + precipUnit.toLowerCase();
}
function formatDates(datetime, userLang) {
    var headerDateOptions = {
        month: 'short',
        day: 'numeric'
    };
    var almanacDateObj = new Date(datetime),
        almanacDateString = almanacDateObj.toLocaleDateString(userLang, headerDateOptions);
    var currentMonthVal = almanacDateObj.getMonth();
    var months = [];
    for (var i = 0; i < 3; i++) {
        var newMonth = new Date();
        newMonth.setMonth(currentMonthVal + i);
        months.push(newMonth.toLocaleDateString(userLang, {month: 'long'}));
    }
    var formattedDates = {
        headerDate: almanacDateString,
        thisMonth: months[0],
        nextMonth: months[1],
        monthAfterNext: months[2]
    };
    return formattedDates;
}

function setOneDayHistoricalValues(data, tempUnit, precipUnit) {
    var nullPlaceholder = '\u2014',
        oneDayHxValues = {
            recordHighYear: (data.yearOfRecordHighTemp ? '(' + data.yearOfRecordHighTemp + ')' : ''),
            recordLowYear: (data.yearOfRecordLowTemp ? '(' + data.yearOfRecordLowTemp + ')'  : ''),
            avgHigh: (data.avgHigh ? formatTemp(data.avgHigh, tempUnit) : nullPlaceholder),
            avgLow: (data.avgLow ? formatTemp(data.avgLow, tempUnit) : nullPlaceholder),
            recordHighTemp: (data.recordHigh ? formatTemp(data.recordHigh, tempUnit) : nullPlaceholder),
            recordLowTemp: (data.recordLow ? formatTemp(data.recordLow, tempUnit) : nullPlaceholder),
            recordPrecip: (data.recordPrecip ? formatPrecip(data.recordPrecip, precipUnit) : nullPlaceholder), // currently should return '--', adding for consistency
            avgPrecip: (data.avgPrecip ? formatPrecip(data.avgPrecip, precipUnit) : nullPlaceholder) // currently should always return '--', adding this for consistency
        },
        recordYearLowNode = document.createElement('div'),
        recordYearLowAttr = document.createAttribute('id'),
        recordYearHighNode = document.createElement('div'),
        recordYearHighAttr = document.createAttribute('id');

    document.getElementById('average-high').innerHTML = oneDayHxValues.avgHigh;
    document.getElementById('average-low').innerHTML = oneDayHxValues.avgLow;
    document.getElementById('average-precip').innerHTML = oneDayHxValues.avgPrecip;
    document.getElementById('record-high').innerHTML = oneDayHxValues.recordHighTemp;
    document.getElementById('record-low').innerHTML = oneDayHxValues.recordLowTemp;
    document.getElementById('record-precip').innerHTML = oneDayHxValues.recordPrecip;


    recordYearLowAttr.value = 'record-year-low';
    recordYearLowNode.setAttributeNode(recordYearLowAttr);
    recordYearLowNode.innerHTML = oneDayHxValues.recordLowYear;
    document.getElementById('record-low').appendChild(recordYearLowNode);


    recordYearHighNode.innerHTML = oneDayHxValues.recordHighYear;
    recordYearHighNode.setAttributeNode(recordYearHighAttr);
    document.getElementById('record-high').appendChild(recordYearHighNode);

}