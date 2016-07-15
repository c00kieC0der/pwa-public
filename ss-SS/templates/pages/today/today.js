(function(){
        helper.loadTemplate('nowcard-module', 'modules', 'nowcard-module');
        helper.loadTemplate('looking-ahead-forecast', 'modules', 'looking-ahead-forecast');
        helper.loadTemplate('today-almanac', 'modules', 'almanac');

        var mapShowing = false;
        var lazyLoadedModules = function(){
            if(!mapShowing){
                if(helper.isInViewport(document.getElementById('static-map-div'))){
                        helper.loadTemplate('static-map-div', 'modules', 'static-map');
                        mapShowing = true;
                        helper.removeListener('scroll', lazyLoadedModules);

                }
            }
        };
        helper.registerListener('scroll', lazyLoadedModules);
        _Router.dispatchAds();
})();