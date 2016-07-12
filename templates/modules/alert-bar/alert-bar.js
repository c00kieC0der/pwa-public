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

            // alert dropdown element
            var dAlertEl = document.getElementById("alert-priority-severity");
            helper.addClass(dAlertEl, 'bg-alert-' + _Alert.priority.severity);

            var priorityTime = _Alert.priority.validStartTime ? _Alert.priority.validStartTime : '';
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
                  var time = bulletin.validStartTime ? bulletin.validStartTime : '';
                  otherAlertsData['alertSeverityClass'].push('bg-alert-' + bulletin.severity);
                  otherAlertsData['alertDescription'].push(bulletin.description);
                  otherAlertsData['alertTimestamp'].push(time);
                }
                helper.ngRepeat('multiple_alerts', 'alert-time', ngRepeatMap, otherAlertsData, _Alert.bulletins.length);
            }

            var mainEl = document.getElementById("gm_alerts");
            helper.removeClass(mainEl, 'hidden');
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

})();

var alertDropdownClick = function(){
    var btnDropdownEl = document.getElementById("dropdown-multiple-alert");
    if (helper.hasClass(btnDropdownEl, 'open')) {
        helper.removeClass(btnDropdownEl, 'open');
    } else {
        helper.addClass(btnDropdownEl, 'open');
    }
};