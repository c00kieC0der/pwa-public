var _Alert = {};
(function(){

var eventAlert = document.createEvent('Event');
eventAlert.initEvent('builder-alert', true, true);
var eventAlertGetting = document.createEvent('Event');
eventAlertGetting.initEvent('get-alert-completed', true, true);

_Alert.getAlertData = function (){
  if(!_User.activeLocation) {
    return;
  }

  var activeLoc = _User.activeLocation;
  var loc = activeLoc.locId ? activeLoc.locId + ':' + activeLoc.locType + ':' + activeLoc.cntryCd : '';
  lang = _User.lang.replace('-', '_');
  getBulletinAlertData(loc, lang, listenGettingAlertDataCompleted);
  getPollenAlertData(loc, lang, listenGettingAlertDataCompleted);

  document.getElementById('event-anchor').addEventListener('get-alert-completed', function () {
      var location = _User.activeLocation;
      var bulletins = alertRequests.bulletin.data;
      var pollen = alertRequests.pollen.data;

      var alerts = getAlerts(bulletins, pollen, loc);
      var numberAlerts = alerts.length;
      var priority = alerts.shift();
      _Alert = {
          bulletins: alerts,
          timeZone: '',
          priority: priority,
          hasAlerts: priority != null,
          hasMultipleAlerts: alerts.length > 0,
          alertCount: numberAlerts
      };
      document.getElementById('event-anchor').dispatchEvent(eventAlert);
  });
};

var alertRequests = {
  bulletin: {isCompleted: false, data: null},
  pollen: {isCompleted: false, data: null}
};

// POLLEN_DESCRIPTION: $filter('pfTranslate')('Local Pollen Alert', {context : 'gm_alerts'}),
var constant = {    
    POLLEN_DESCRIPTION: helper.pdTranslate('Local Pollen Alert'),
    POLLEN: 'pollen',
    TREE: 'tree',
    GRASS: 'grass',
    WEED: 'weed',
    POLLEN_SEVERITY: 3,
    POLLEN_ALERT_TRIGGER_VALUE: 3
}; 

var listenGettingAlertDataCompleted = function(){
    if (alertRequests.bulletin.isCompleted && alertRequests.pollen.isCompleted) {
        document.getElementById('event-anchor').dispatchEvent(eventAlertGetting);
    }
};

var getBulletinAlertData = function(loc, lang, callbackFn){
    var bulletinUrl = 'https://dsx.weather.com/wxd/v2/BERecord/' + lang + '/' + loc +
        '?format=json&apiKey=c1ea9f47f6a88b9acb43aba7faf389d4';

    AjaxRequest.get(
       {
          'url' : bulletinUrl,
          'generateUniqueUrl' : false,
          'onSuccess': function(req){
              alertRequests.bulletin.isCompleted = true;
              alertRequests.bulletin.data = JSON.parse(req.responseText);
              if (callbackFn instanceof Function) {
                  callbackFn();
              }
          },
          'onError': function(req){
              alertRequests.bulletin.isCompleted = true;
              alertRequests.bulletin.data = [];
              if (callbackFn instanceof Function) {
                  callbackFn();
              }
          }
       }
    );

};

var getPollenAlertData = function(loc, lang, callbackFn){
      var pollenUrl = 'https://dsx.weather.com/wxd/v2/Pollen/' + lang + '/' + loc +
          '?format=json&apiKey=c1ea9f47f6a88b9acb43aba7faf389d4';

      AjaxRequest.get(
          {
              'url' : pollenUrl,
              'generateUniqueUrl': false,
              'onSuccess':function(req){
                  alertRequests.pollen.isCompleted = true;
                  alertRequests.pollen.data = JSON.parse(req.responseText);
                  if (callbackFn instanceof Function) {
                      callbackFn();
                  }
              },
              'onError': function(req){
                  alertRequests.pollen.isCompleted = true;
                  alertRequests.pollen.data = [];
                  if (callbackFn instanceof Function) {
                      callbackFn();
                  }
              }
          }
      );

};

/*
 * Get the highest pollen index value
 */
var getHighestPollenIndexValue = function(tree, grass, weed) {
    var maxPollen = 0;
    if (tree) {
        maxPollen = Math.max(maxPollen, tree.idxPrt1);
    }
    if (grass) {
        maxPollen = Math.max(maxPollen, grass.idxPrt1);
    }
    if (weed) {
        maxPollen = Math.max(maxPollen, weed.idxPrt1);
    }
    return maxPollen;
};

var convertToPollenAlert = function(pollenData) {     
  if (!pollenData) {
    return null;
  }

  var pollenAlerts = pollenData.pollenAlerts;
  var tree = pollenData && pollenData[constant.TREE] ? pollenData[constant.TREE].shift() : null,
      grass = pollenData && pollenData[constant.GRASS] ? pollenData[constant.GRASS].shift() : null,
      weed = pollenData && pollenData[constant.WEED] ? pollenData[constant.WEED].shift() : null;
  var highestPollenValue = getHighestPollenIndexValue(tree, grass, weed);
  
  if (highestPollenValue >= constant.POLLEN_ALERT_TRIGGER_VALUE) {
    return {
      description: constant.POLLEN_DESCRIPTION,
      severity: constant.POLLEN_SEVERITY,
      url: '',
      type: constant.POLLEN,
      fromStr: constant.POLLEN
    };
  }
  return null;
};

/**
 * Check params and invoke new method the date function.
 * @param dateStr
 * @param [timeStr]
 * @param [tzStr]
 * @returns {date | null}
 */
// var getDateObject =function(dateStr, timeStr, tzStr) {
//   try {
//     return new date(dateStr, timeStr, tzStr);
//   }catch (err) {
//     console.log(err);
//   }
//   return null;
// };

// var formatDsxDate = function (timestamp, timezone) {
//   var dateStr, timeStr, tzStr;
//   if (timestamp && timezone) {
//     if (!isNaN(timestamp)) {
//       dateStr = timestamp.toString().slice(0, 8);
//       timeStr = timestamp.toString().slice(8);
//       tzStr   = timezone;
//     } else {
//       var match_parts = timestamp.match(/(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/);
//       if (match_parts && match_parts.length >= 7) {
//         dateStr = match_parts[1] + match_parts[2] + match_parts[3];
//         timeStr = match_parts[4] + match_parts[5] + match_parts[6];
//         tzStr   = timezone;
//       }
//     }
//   } 
//   return getDateObject(dateStr, timeStr, tzStr);
// };

// var getValidTime = function (timestamp, timezone, format) {
//     if (!timestamp) {
//       return null;
//     }
//     var date = formatDsxDate(timestamp, timezone);
//     if (!date) {
//       return null;
//     }

//     return date.format(format);
// };

var formatTime = function (fullDate) {
    var dateBase = new Date(fullDate);
    var hours = dateBase.getHours();
    var minutes = dateBase.getMinutes();
    var meridian = 'AM';
    if (hours === 12) {
        meridian = 'PM';
    }
    if (hours > 12) {
        hours -= 12;
        meridian = 'PM';
    }
    if (hours === 0) {
        hours = 12;
    }

    return hours + ':' + (minutes > 9 ? minutes + ' ' : '0' + minutes + ' ') + meridian;
};

var convertBulletinToAlert = function(bulletin, locId, prefixDetailUrl) {
    var bEvent = bulletin.BEHdr && bulletin.BEHdr.bEvent;
    var header = bulletin.BEHdr;
    var bLocations = bulletin.BEHdr && bulletin.BEHdr.bLocations;
    var bEData = bulletin.BEData;
    var phenomena = bEvent ? bEvent.ePhenom : '',
        areaId = bLocations ? bLocations.bLocCd : '',
        etn = bEvent ? bEvent.eETN : '',
        officeId = bEvent ? bEvent.eOfficeId : '',
        significance = bEvent ? bEvent.eSgnfcnc : '',
        startTime = bEvent ? bEvent._eStTmLocal : '',
        endTime = bEvent ? bEvent._eEndTmLocal : bEvent,
        timeZone = bLocations ? bLocations.bTzAbbrv : '',
        issTime = bEData ? bEData.bIssueTmISOLocal : '',
        alert = {},
        dateFormat = 'h:mma z, EEE MMM d';//TODO: dateFormat for each locales

        
    prefixDetailUrl = '/weather/alerts/localalerts/l/';

    var regex = /00/gi, result, startTimeIndex = [], endTimeIndex = [];

    while((result = regex.exec(startTime))) {
      startTimeIndex.push(result.index);
    }

    while((result = regex.exec(endTime))) {
      endTimeIndex.push(result.index);
    }

    if(bEvent.eFld) {
      var suffix = bEvent.eFld && bEvent.eFld._eFldSeq,
        floodLocation = bEvent.eFld && bEvent.eFld.eNWSLICd__eNWSLI;
      if (floodLocation) {
        alert.description = suffix ? bEvent.eDesc + ' (' + floodLocation + ')' + " #" + suffix : bEvent.eDesc + ' (' + floodLocation + ')';
      } else {
        alert.description = suffix ? bEvent.eDesc + " #" + suffix : bEvent.eDesc;
      }
    } else {
      alert.description = header && header._multiPostfix ? bEvent.eDesc + ' #' + header._multiPostfix : bEvent.eDesc;
    }

    alert.severity = bEvent.eSvrty;
    // alert.validStartTime = getValidTime(startTime, timeZone, dateFormat);
    // alert.validEndTime = getValidTime(endTime, timeZone, dateFormat);
    // alert.validIssTime = getValidTime(issTime, timeZone, dateFormat);
    alert.validStartTime = formatTime(startTime);
    alert.validEndTime = formatTime(endTime);
    alert.validIssTime = formatTime(issTime);
    alert.url = [prefixDetailUrl, locId || '', '?phenomena=', phenomena, '&significance=', significance, '&areaid=', areaId, '&office=', officeId, '&etn=', etn].join('');
    alert.type = 'bulletin';
    alert.fromStr = phenomena + "-" + significance;
    return alert;
};

var getAlerts = function(bulletins, pollenData, locId) {
    var alerts = [],
        factory = this;
    var pollen = convertToPollenAlert(pollenData);

    for(var index in bulletins) {
        var alert = convertBulletinToAlert(bulletins[index], locId);
        alerts.push(alert);
    }

    if (pollen) {
      alerts.push(pollen);
    }

    return alerts;
};

})();