/**
 * Created by phu.nguyen on 7/8/16.
 */
(function(){
    var dataAssignment = [];
    var ngRepeatMap = [
        ['js-alert-severity',     'alertSeverityClass'],
        ['js-alert-description',  'alertDescription'],
        ['js-alert-timestamp',    'alertTimestamp']
    ];
    var mapData = function(){
        if (_Alert.hasAlerts) {
            if (!_Alert.hasMultipleAlerts) {
                document.getElementById("dropdown-multiple-alert").style.display = 'none';
            }
            updateAlertBarLangs();

            // alert dropdown element
            var dAlertEl = document.getElementById("alert-priority-severity");
            helper.addClass(dAlertEl, 'bg-alert-' + _Alert.priority.severity);

            var priorityTime = getValidTimestamp(_Alert.priority);
            dataAssignment = [
                ['alert-count', _Alert.alertCount],
                ['priority-alert-description', _Alert.priority.description],
                ['priority-alert-timestamp', priorityTime]
            ];

            // priority alert
            var pAlertEl = document.getElementById("alert-priority");
            var pAlertSeverity = pAlertEl.getElementsByClassName('alert-severity');
            helper.addClass(pAlertSeverity[0], 'bg-alert-' + _Alert.priority.severity);

            if(_Alert.bulletins.length > 0){
                var otherAlertsData = {
                  'alertSeverityClass': [],
                  'alertDescription': [],
                  'alertTimestamp': []
                };
                for(var index in _Alert.bulletins){
                  var bulletin = _Alert.bulletins[index];
                  var timestamp = getValidTimestamp(bulletin);
                  otherAlertsData['alertSeverityClass'].push('bg-alert-' + bulletin.severity);
                  otherAlertsData['alertDescription'].push(bulletin.description);
                  otherAlertsData['alertTimestamp'].push(timestamp);
                }
                helper.ngRepeat('multiple_alerts', 'alert-time', ngRepeatMap, otherAlertsData, _Alert.bulletins.length);
            }

            var mainEl = document.getElementById("gm_alerts");
            helper.removeClass(mainEl, 'hidden');
        }
        
    };

    var getValidTimestamp = function(alert) {
        var timestampStr = '';
        if (alert.validStartTime && alert.validEndTime) {
            timestampStr = helper.pdTranslate('From {0} until {1}').replace('{0}', alert.validStartTime)
                                                      .replace('{1}', alert.validEndTime);
        }
        if (alert.validStartTime && !alert.validEndTime) {
            timestampStr = helper.pdTranslate('From {0}').replace('{0}', alert.validStartTime);
        }

        if (!alert.validStartTime && alert.validEndTime) {
            timestampStr = helper.pdTranslate('Until {0}').replace('{0}', alert.validEndTime);
        }

        return timestampStr;
    };

    var updateAlertBarLangs = function() {
      var POLLEN_DESCRIPTION = 'Local Pollen Alert';
        if (_Alert.hasAlerts) {
            if (_Alert.priority.type === 'pollen') {
               _Alert.priority.description = helper.pdTranslate(POLLEN_DESCRIPTION);
            }

            for(var index in _Alert.bulletins) {
                var bulletin = _Alert.bulletins[index];
                if (bulletin.type === 'pollen') {
                    bulletin.description = helper.pdTranslate(POLLEN_DESCRIPTION);
                }
            }
        }
    };


    if(_Alert && _Alert.bulletins) {
        mapData();
        helper.setContent(dataAssignment);
    }

    document.getElementById('event-anchor').addEventListener('builder-alert', function(){
        mapData();
        helper.setContent(dataAssignment);
    });

    document.getElementById('event-anchor').addEventListener('lang-builder', function(){
        mapData();
        helper.setContent(dataAssignment);
    });

})();

var alertDropdownClick = function(){
    var btnDropdownEl = document.getElementById("dropdown-multiple-alert");
    if (helper.hasClass(btnDropdownEl, 'open')) {
        helper.removeClass(btnDropdownEl, 'open');
    } else {
        helper.addClass(btnDropdownEl, 'open');
    }
};