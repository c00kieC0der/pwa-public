(function(){
    helper.loadTemplate('10day-forecast', 'modules', '10day-forecast');
    if(window['_Lang'] && window['_User'].activeLocation.prsntNm.length){
        helper.setContent([['tenday-title', _Lang['10 day forecast for {0}'].replace('{0}', _User.activeLocation.prsntNm)]]);
    }
    document.getElementById('event-anchor').addEventListener('lang-builder', function(){
        helper.setContent([['tenday-title', _Lang['10 day forecast for {0}'].replace('{0}', _User.activeLocation.prsntNm)]]);
    });
})();