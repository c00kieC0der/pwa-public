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

var formatTime = function (startTime, timeZone) {
    var result = '';
    if (_User.lang) {
        moment.locale(_User.lang);
    }
    result = moment(startTime).format('h:mm') + ' ' + timeZone + ' ' + moment(startTime).format('ddd MMM d');
    return result;
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
        dateFormat = _Lang['h:mma z, EEE MMM d'];


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
    alert.validStartTime = formatTime(startTime, timeZone);
    alert.validEndTime = formatTime(endTime, timeZone);
    alert.validIssTime = formatTime(issTime, timeZone);
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