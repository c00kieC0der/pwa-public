(function(){
        helper.loadTemplate('today-forecast', 'modules', 'today-forecast');
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
        helper.setContent([['MW_Position2', 'MY TEST for ads.']]);
})();