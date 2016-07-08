(function(){

        helper.loadTemplate('today-forecast', 'modules', 'today-forecast');
        helper.loadTemplate('today-almanac', 'modules', 'almanac');


        var mapShowing = false;
        var showTheMap = function(){
                if(!mapShowing){
                        if(helper.isInViewport(document.getElementById('static-map'))){
                                helper.loadTemplate('static-map', 'modules', 'static-map');
                                mapShowing = true;
                                helper.removeListener('scroll', showTheMap);
                        }
                }
        };
        helper.registerListener('scroll', showTheMap);

        domReady(function(){ console.log('this happens');

        });
})();