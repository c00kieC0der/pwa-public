(function(){
    helper.loadTemplate('hourly-forecast', 'modules', 'hourly-forecast');
    if(window['_Lang'] && window['_User'].activeLocation.prsntNm.length){ console.log('first run', _User.activeLocation.prsntNm);
        helper.setContent([['hourly-title', _Lang['hourly forecast for {0}'].replace('{0}', _User.activeLocation.prsntNm)]]);
    }
    document.getElementById('event-anchor').addEventListener('builder', function(){ //console.log('waited for event');
        helper.setContent([['hourly-title', _Lang['hourly forecast for {0}'].replace('{0}', _User.activeLocation.prsntNm)]]);
    });
})();