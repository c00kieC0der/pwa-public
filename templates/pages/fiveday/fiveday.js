(function(){
    helper.loadTemplate('5day-forecast', 'modules', '5day-forecast');
    if(window['_Lang'] && window['_User'].activeLocation.prsntNm.length){ console.log('first run', _User.activeLocation.prsntNm);
        helper.setContent([['fiveday-title', _Lang['5 day forecast for {0}'].replace('{0}', _User.activeLocation.prsntNm)]]);
    }
    document.getElementById('event-anchor').addEventListener('builder', function(){ console.log('waited for event');
        helper.setContent([['fiveday-title', _Lang['5 day forecast for {0}'].replace('{0}', _User.activeLocation.prsntNm)]]);
    });

})();