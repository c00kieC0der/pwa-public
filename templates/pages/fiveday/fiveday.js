/**
 * Created by ecook on 6/19/16.
 */
(function(){
    helper.loadTemplate('5day-forecast', 'modules', '5day-forecast');
    helper.loadTemplate('sun-moon', 'modules', 'sun-moon');

    if(window['_Lang'] && window['_User'].activeLocation.prsntNm.length){
        helper.setContent([['fiveday-title', _Lang['5 day forecast for {0}'].replace('{0}', _User.activeLocation.prsntNm)]]);
    }
    document.getElementById('event-anchor').addEventListener('lang-builder', function(){
        helper.setContent([['fiveday-title', _Lang['5 day forecast for {0}'].replace('{0}', _User.activeLocation.prsntNm)]]);
    });
})();
