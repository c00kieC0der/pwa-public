

/*
  Properties and Defaults
 */

var _User = {
    loggedIn : false,
    unitPref : 'e',
    lang : 'en-US',
    locations: [],
    activeLocation : {
        lat : '',
        long : '',
        prsntNm : ''
    }
};

/*
  Saved Values
*/

var savedPco = {};

_User.loggedIn = savedPco.profile && savedPco.profile.userid ? true : false;
_User.webPush = savedPco.products && savedPco.products.WebPushNotifications ? savedPco.products.WebPushNotifications : {};
/*
{
    PushStatus : "NoPushNotification"
    timeStamp : "2016-06-10T22:33:29.140Z"
 }
 */

_User.locations = savedPco.user && savedPco.user.recentSearchLocations ? savedPco.user.recentSearchLocations : [];
_User.lang = savedPco.user && savedPco.user.locale ? savedPco.user.locale.replace('_', '-') : _User.lang;
_User.unitPref = savedPco.user && savedPco.user.unit ? savedPco.user.unit : 'e';


if(!_User.activeLocation.prsntNm && _User.locations.length > 0){
    _User.activeLocation = _User.locations[0];
}

/*
  Internal Functions
 */

var saveUser = function(){
    //window.localStorage._Stored_User = JSON.stringify(_User);
    //savedPco.products = savedPco.products ? savedPco.products : {};
    //savedPco.products.WebPushNotifications = _User.webPush;
    //window.localStorage.jStorage = JSON.stringify(savedPco);
    _Data.collectNew();
};

/*
  Class Methods
*/


_User.setLanguage = function(language){
    _User.lang = language;
    saveUser();
};

_User.setUnitPreference = function(unit){
    _User.unitPref = unit;
    saveUser();
};

_User.addLocation = function(locationObj){
    _User.locations.push(locationObj);
    saveUser();
};

_User.newActiveLocation = function(locationObj, updateRecents){
    if(_User.activeLocation && _User.activeLocation.prsntNm && updateRecents) {
        _User.locations.push(_User.activeLocation);
    }
    _User.activeLocation = locationObj;

    saveUser();
};

_User.updatePushNotifications = function(answer){
    if(answer){
        _User.webPush = {
            PushStatus : "confirmNotification",
            timeStamp : new Date().toISOString()
        };
    } else {
        _User.webPush = {
            PushStatus : "noPushNotification",
            timeStamp : new Date().toISOString()
        };
    }
    saveUser();
};

var _Data = {}, app = {};
(function() {
    var dataUrl = "https://api.weather.com/v2/turbo/vt1fifteenminute;vt1hourlyForecast;vt1precipitation;vt1currentdatetime;vt1pollenforecast;vt1dailyForecast;vt1observation;vt1alerts?units=" +
      _User.unitPref +
      '&language=' + _User.lang +
      '&geocode=' +
      _User.activeLocation.lat + ',' + _User.activeLocation.long +
      '&format=json&apiKey=c1ea9f47f6a88b9acb43aba7faf389d4';
    var dataAstroUrl = '';
    //var eventData = document.createEvent('Event');
    //var eventAstroData = document.createEvent('Event');
    //eventAstroData.initEvent('astro-builder', true, true);
    //eventData.initEvent('builder', true, true);

    _Data.collectNew = function () {
        app.hasRequestPending = true;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", dataUrl, true);
        xhr.onload = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var data = JSON.parse(xhr.responseText);
                    _Data.obs = data.vt1observation;
                    _Data.datetime = data.vt1currentdatetime;
                    _Data.dailyForecast = data.vt1dailyForecast;
                    _Data.pollenforecast = data.vt1pollenforecast;
                    _Data.precipitation = data.vt1precipitation;
                    _Data.fifteen = data.vt1fifteenminute;
                    _Data.hourly = data.vt1hourlyForecast;
                    massageData();
                    //document.getElementById('event-anchor').dispatchEvent(eventData);
                    app.hasRequestPending = false;
                    postMessage({type: 'cust-params', payload: JSON.stringify(_Data)});
                    console.log('something good', _Data, app);
                } else {
                    console.error('xhr error', xhr.statusText);
                }
            }
        };
        xhr.onerror = function (e) {
            console.error('xhr error', xhr.statusText);
        };
        xhr.send(null);

    };
    console.log('user3', _User.activeLocation)
    if (_User.activeLocation.prsntNm) {
        _Data.collectNew();
    }

    var formatTime = function (fullDate) {
        var dateBase = new Date(fullDate);
        var hours = dateBase.getHours();
        var minutes = dateBase.getMinutes();
        if (minutes === 0) {
            minutes = '00';
        }
        var meridian = 'AM';
        if (hours === 12) {
            meridian = 'PM';
        }
        if (hours > 12) {
            hours -= 12;
            meridian = 'PM';
        }
        if (hours === 0) {
            hours = 12;
        }

        return hours + ':' + minutes + ' ' + meridian;
    };
    var formatDate = function (fullDate) {
        var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
        var monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        var dateBase = new Date(fullDate);
        return daysOfWeek[dateBase.getDay()] + ', ' + monthsOfYear[dateBase.getMonth()] + ' ' + dateBase.getDate();
    };
    /*
     Any after retrieval data massaging.
     */
    var massageData = function () {
        _Data.hourly.time = [];
        _Data.hourly.date = [];
        _Data.lookingAhead = getLookingAhead();
        for (var i in _Data.hourly.processTime) {
            _Data.hourly.time[i] = formatTime(_Data.hourly.processTime[i]);
            _Data.hourly.date[i] = formatDate(_Data.hourly.processTime[i]);
        }
    };

    var getLookingAhead = function () {
        var daily = _Data.dailyForecast, retData = [];
        if (daily.day.dayPartName[0] === null) {
            //its nighttime.
            retData = [{
                daypartName: daily.night.dayPartName[0],
                highLow: 'Low',
                phrase: daily.night.phrase[0],
                wxicon: getWxIcon(daily.night.icon[0]),
                temperature: daily.night.temperature[0],
                narrative: daily.night.narrative[0],
                precip: daily.night.precipPct[0],
                windDirCompass: daily.night.windDirCompass[0],
                windDirDegrees: daily.night.windDirDegrees[0],
                windSpeed: daily.night.windSpeed[0],
                humidity: daily.night.humidityPct[0],
                uvIndex: daily.night.uvIndex[0],
                sunrise: formatTime(daily.sunrise[0]),
                sunset: formatTime(daily.sunset[0])

            }, {
                daypartName: daily.day.dayPartName[1],
                highLow: 'High',
                phrase: daily.day.phrase[1],
                wxicon: getWxIcon(daily.day.icon[1]),
                temperature: daily.day.temperature[1],
                narrative: daily.day.narrative[1],
                precip: daily.day.precipPct[1],
                windDirCompass: daily.day.windDirCompass[1],
                windDirDegrees: daily.day.windDirDegrees[1],
                windSpeed: daily.day.windSpeed[1],
                humidity: daily.day.humidityPct[1],
                uvIndex: daily.day.uvIndex[1],
                sunrise: formatTime(daily.sunrise[1]),
                sunset: formatTime(daily.sunset[1])

            }, {
                daypartName: daily.night.dayPartName[1],
                highLow: 'Low',
                phrase: daily.night.phrase[1],
                wxicon: getWxIcon(daily.night.icon[1]),
                temperature: daily.night.temperature[1],
                narrative: daily.night.narrative[1],
                precip: daily.night.precipPct[1],
                windDirCompass: daily.night.windDirCompass[1],
                windDirDegrees: daily.night.windDirDegrees[1],
                windSpeed: daily.night.windSpeed[1],
                humidity: daily.night.humidityPct[1],
                uvIndex: daily.night.uvIndex[1],
                sunrise: formatTime(daily.sunrise[2]),
                sunset: formatTime(daily.sunset[2])

            }];
        } else {
            retData = [{
                daypartName: daily.day.dayPartName[0],
                highLow: 'High',
                phrase: daily.day.phrase[0],
                wxicon: getWxIcon(daily.day.icon[0]),
                temperature: daily.day.temperature[0],
                narrative: daily.day.narrative[0],
                precip: daily.day.precipPct[0],
                windDirCompass: daily.day.windDirCompass[0],
                windDirDegrees: daily.day.windDirDegrees[0],
                windSpeed: daily.day.windSpeed[0],
                humidity: daily.day.humidityPct[0],
                uvIndex: daily.day.uvIndex[0],
                sunrise: formatTime(daily.sunrise[0]),
                sunset: formatTime(daily.sunset[0])

            }, {
                daypartName: daily.night.dayPartName[0],
                highLow: 'Low',
                phrase: daily.night.phrase[0],
                wxicon: getWxIcon(daily.night.icon[0]),
                temperature: daily.night.temperature[0],
                narrative: daily.night.narrative[0],
                precip: daily.night.precipPct[0],
                windDirCompass: daily.night.windDirCompass[0],
                windDirDegrees: daily.night.windDirDegrees[0],
                windSpeed: daily.night.windSpeed[0],
                humidity: daily.night.humidityPct[0],
                uvIndex: daily.night.uvIndex[0],
                sunrise: formatTime(daily.sunrise[0]),
                sunset: formatTime(daily.sunset[0])

            }, {
                daypartName: daily.day.dayPartName[1],
                highLow: 'High',
                phrase: daily.day.phrase[1],
                wxicon: getWxIcon(daily.day.icon[1]),
                temperature: daily.day.temperature[1],
                narrative: daily.day.narrative[1],
                precip: daily.day.precipPct[1],
                windDirCompass: daily.day.windDirCompass[1],
                windDirDegrees: daily.day.windDirDegrees[1],
                windSpeed: daily.day.windSpeed[1],
                humidity: daily.day.humidityPct[1],
                uvIndex: daily.day.uvIndex[1],
                sunrise: formatTime(daily.sunrise[1]),
                sunset: formatTime(daily.sunset[1])

            }];
        }
        return retData;
    };
})();

var isNumeric = function(num){
    return typeof num === 'number' && num !== 'NaN';
};

var getWxIcon = function(skyCode){
    var config = {
        basePath: '/assets/wxicon/',
        pngPath: 'png/',
        svgPath: 'svg/',
        svgzPath: 'svgz/',
        allowSVG: true,
        useSVGz : false
    };

// document.implementation Method
//    if (document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) {
//        config.allowSVG = true;
//    } else {
//        config.allowSVG = false;
//    }

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
        var iconPath = !forcePNG ? (config.useSVGz ? config.svgzPath : config.svgPath) : config.pngPath;
        return config.basePath + iconPath;
    };
    function getIconName() {
        var iconName;
        if (isNumeric(skyCode) && skyCode >= 0 && skyCode <= 47) {
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
    markup += '<img src="' + getIconUrl() + '" />';
    markup += '</div>';
    return markup;
}


var _Lang = {};

(function(){
    var path;
    //var eventData = document.createEvent('Event');
    //eventData.initEvent('lang-builder', true, true);
    _Lang.updateTranslations = function(){
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        console.log(_User.lang);
        if(_User.lang == 'en-US'){
            path = '/js-src/translations/app.json';
        } else {
            path = '/js-src/translated/' + _User.lang + '/app.json';
        }
        xobj.open('GET', path, true); // Replace 'my_data' with the path to your file
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                _Lang = JSON.parse(xobj.responseText);

                //document.getElementById('event-anchor').dispatchEvent(eventData);
                postMessage({type: 'lang-builder', payload: _Lang});
            }
        };
        xobj.send(null);
    };
    if(_User.lang){
        _Lang.updateTranslations();
    }
})();
