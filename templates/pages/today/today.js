(function(){
        helper.loadTemplate('today-forecast', 'modules', 'today-forecast');
        helper.loadTemplate('today-almanac', 'modules', 'almanac');

        var mapShowing = false, adsDeployed = false;
        var lazyLoadedModules = function(){
                if(!mapShowing){
                        if(helper.isInViewport(document.getElementById('static-map'))){
                                helper.loadTemplate('static-map', 'modules', 'static-map');
                                mapShowing = true;
                                if(adsDeployed){
                                        helper.removeListener('scroll', lazyLoadedModules);
                                }
                        }
                }
                if(!adsDeployed){
                        if(helper.isInViewport(document.getElementById('MW_Position2'))){
                                _Router.dispatchAds();
                                adsDeployed = true;
                                if(mapShowing){
                                        helper.removeListener('scroll', lazyLoadedModules);
                                }
                        }
                }
        };
        helper.registerListener('scroll', lazyLoadedModules);

})();