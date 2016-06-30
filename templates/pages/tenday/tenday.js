(function(){
    helper.loadTemplate('10day-forecast', 'modules', '24-hour-forecast');
    if(window['_Lang'] && window['_User'].activeLocation.prsntNm.length){ console.log('first run', _User.activeLocation.prsntNm);
        helper.setContent([['tenday-title', _Lang['10 day forecast for {0}'].replace('{0}', _User.activeLocation.prsntNm)]]);
    }
    document.getElementById('event-anchor').addEventListener('builder', function(){ console.log('waited for event');
        helper.setContent([['tenday-title', _Lang['10 day forecast for {0}'].replace('{0}', _User.activeLocation.prsntNm)]]);
    });

})();