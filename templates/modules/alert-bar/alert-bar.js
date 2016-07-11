/**
 * Created by phu.nguyen on 7/816.
 */
(function(){
    var dataAssignment = [];
    var mapData = function(){
        // In Development
    };

    if(_Alert && _Alert.bulletins) {
        mapData();
        helper.setContent(dataAssignment);
    }

    document.getElementById('event-anchor').addEventListener('get-alert-completed', function(){
        mapData();
        helper.setContent(dataAssignment);
    });

})();
