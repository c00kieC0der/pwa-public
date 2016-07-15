var getWxIcon = function(skyCode, iconStyle){
    var config = {
        basePath: '/ss-SS/assets/wxicon/',
        pngPath: 'png/',
        svgPath: 'svg/',
        svgzPath: 'svgz/',
        allowSVG: true,
        useSVGz : false
    };

// document.implementation Method
    if (document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) {
        config.allowSVG = true;
    } else {
        config.allowSVG = false;
    }

    var iconCodeMap = {
        'tornado': ['0', '00'],
        'tropical-storm': ['1', '01', '2', '02'],
        'thunderstorm': ['3', '03', '4', '04'],
        'rain-snow': ['5', '05', '7', '07'],
        'rain-hail': ['6', '06', '10', '35'],
        'freezing-drizzle': ['8', '08'],
        'scattered-showers': ['9', '09', '11', '39'],
        'rain': ['12'],
        'flurries': ['13'],
        'snow': ['14', '16'],
        'blowing-snow': ['15', '25'],
        'hail': ['17', '18'],
        'fog': ['19', '20', '21', '22'],
        'wind': ['23', '24'],
        'cloudy': ['26'],
        'mostly-cloudy-night': ['27'],
        'mostly-cloudy': ['28'],
        'partly-cloudy-night': ['29'],
        'partly-cloudy': ['30'],
        'clear-night': ['31'],
        'sunny': ['32', '36'],
        'mostly-clear-night': ['33'],
        'mostly-sunny': ['34'],
        'isolated-thunderstorms': ['37'],
        'scattered-thunderstorms': ['38'],
        'heavy-rain': ['40'],
        'scattered-snow': ['41'],
        'heavy-snow': ['42', '43'],
        'na': ['-', '44', 'na'],
        'scattered-showers-night': ['45'],
        'scattered-snow-night': ['46'],
        'scattered-thunderstorms-night': ['47']
    };
    function getImageType(forcePNG) {
        return !forcePNG ? (config.useSVGz ? '.svgz' : '.svg') : '.png';
    };
    function getImagePath(forcePNG) {
        if (typeof iconStyle !== "undefined") {
            var iconPath = !forcePNG ? (config.useSVGz ? config.svgzPath + iconStyle + '/' : config.svgPath + iconStyle + '/') : config.pngPath + + iconStyle + '/' + '/';
            return config.basePath + iconPath;
        } else {
            var iconPath = !forcePNG ? (config.useSVGz ? config.svgzPath : config.svgPath) : config.pngPath ;
            return config.basePath + iconPath;

        }
    };
    function getIconName() {
        var iconName;
        if (helper.isNumeric(skyCode) && skyCode >= 0 && skyCode <= 47) {
            for(var key in iconCodeMap){
                if(iconCodeMap[key].indexOf(skyCode.toString()) !== -1){
                    iconName = key;
                }
            }
        } else {
            iconName = 'na';
        }

        // iconName += '-optimized';
        return iconName;
    };
    function getIconUrl() {
        var forcePNG = !config.allowSVG;
        return getImagePath(forcePNG) + getIconName(skyCode, (!forcePNG)) + getImageType(forcePNG) + '?1';
    };

    var markup = '<div class="svg-icon">';
    markup += '<img src="' + getIconUrl() + '">';
    markup += '</div>';
    return markup;

}

