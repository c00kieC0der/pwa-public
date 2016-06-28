/**
 * Created by aparekh on 6/20/16.
 */


function jsonp(url, callback) {
    var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    window[callbackName] = function(data) {
        delete window[callbackName];
        document.body.removeChild(script);
        callback(data);
    };

    var script = document.createElement('script');
    script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
    document.body.appendChild(script);
}

// Weather FX Triggers Closure

(function ($$) {
    /** Need to pull in localStorage to find:
     *  lastVisited location
     *  first saved location
     *  recent search location
     *  or user currentLocation - if it does not exist or has expired
     *  Start with page.currentLocation from pco
     *
     *  utag_dataReady waits on pcoReady, so pcoReady has already fired
     */
    var user = {
            "savedLocations":[
            ],
            "recentSearchLocations":[
                {
                    "key":"",
                    "id":"",
                    "locId":"30339",
                    "locType":4,
                    "cntryCd":"US",
                    "cityNm":"Atlanta",
                    "address":"",
                    "nickname":"",
                    "loc":"30339:4:US",
                    "lat":33.87,
                    "long":-84.47,
                    "cntyNm":"COBB",
                    "_gprId":"NAM",
                    "position":"",
                    "prsntNm":"Atlanta, GA (30339)",
                    "_country":"Vereinigte Staaten Von Amerika",
                    "stNm":"Georgia",
                    "stCd":"GA",
                    "tag":"",
                    "zipCd":"30339",
                    "tmZnAbbr":"EDT",
                    "dmaCd":524
                },
                {
                    "key":"",
                    "id":"",
                    "locId":"12345",
                    "locType":4,
                    "cntryCd":"US",
                    "cityNm":"Schenectady",
                    "address":"",
                    "nickname":"",
                    "loc":"12345:4:US",
                    "lat":42.81,
                    "long":-73.94,
                    "cntyNm":"SCHENECTADY",
                    "_gprId":"NAM",
                    "position":"",
                    "prsntNm":"Schenectady, NY (12345)",
                    "_country":"United States Of America",
                    "stNm":"New York",
                    "stCd":"NY",
                    "tag":"",
                    "zipCd":"12345",
                    "tmZnAbbr":"EDT",
                    "dmaCd":532
                },
                {
                    "key":"",
                    "id":"",
                    "locId":"USGA0028",
                    "locType":1,
                    "cntryCd":"US",
                    "cityNm":"Atlanta",
                    "address":"",
                    "nickname":"",
                    "loc":"USGA0028:1:US",
                    "lat":33.75,
                    "long":-84.39,
                    "cntyNm":"FULTON",
                    "_gprId":"NAM",
                    "position":"",
                    "prsntNm":"Atlanta, GA",
                    "_country":"United States Of America",
                    "stNm":"Georgia",
                    "stCd":"GA",
                    "tag":"",
                    "zipCd":"30337",
                    "tmZnAbbr":"EDT",
                    "dmaCd":524
                }
            ],
            "locale":"en_US",
            "browser":{
                "chrome":true,
                "version":"51.0.2704.84",
                "webkit":true,
                "flash":true,
                "sl":false,
                "pdf":false,
                "qtime":false,
                "wmp":false,
                "shk":true,
                "rp":false,
                "java":false
            },
            "flash":{
                "chrome":true,
                "version":"51.0.2704.84",
                "webkit":true,
                "flash":true,
                "sl":false,
                "pdf":false,
                "qtime":false,
                "wmp":false,
                "shk":true,
                "rp":false,
                "java":false
            },
            "unit":"m",
            "rmid":"7b834df8-b20a-49a4-8935-0aa6cef070d1",
            "currentBackTo":{
                "url":"https://burda-dev-edit.weather.com/",
                "pagetype":"N/A"
            },
            "anonCreated":true,
            "currentLocation":{
                "locType":1,
                "locId":"USDC0001",
                "procTm":"20160620115127",
                "cityNm":"Washington",
                "stCd":"DC",
                "prsntNm":"Washington, DC",
                "cntryCd":"US",
                "coopId":"72405000",
                "lat":38.89,
                "long":-77.03,
                "obsStn":"KDCA",
                "secObsStn":"KCGS",
                "tertObsStn":"KADW",
                "gmtDiff":-5,
                "regSat":"ec",
                "cntyId":"DCC001",
                "cntyNm":"DISTRICT OF COLUMBIA",
                "zoneId":"DCZ001",
                "zoneNm":"District of Columbia",
                "cntyFips":"11001",
                "active":1,
                "dySTInd":"Y",
                "dmaCd":511,
                "zipCd":"20023",
                "elev":26,
                "cliStn":"448906",
                "tmZnNm":"Eastern Daylight Time",
                "tmZnAbbr":"EDT",
                "dySTAct":"Y",
                "clsRad":"DCA",
                "metRad":"DCA",
                "ultRad":"DCA",
                "ssRad":"ec",
                "lsRad":"ne",
                "siteId":"WW",
                "idxId":"KDCA",
                "primTecci":"T72405000",
                "arptId":"DCA",
                "mrnZoneId":"ANZ535",
                "pllnId":"ADW",
                "skiId":"376",
                "tideId":"E8594900",
                "epaId":"dc001",
                "_arptNear":[
                    "DCA",
                    "IAD",
                    "BWI"
                ],
                "_arptNearDist":[
                    {
                        "key":"DCA:9:US",
                        "dist":2
                    },
                    {
                        "key":"IAD:9:US",
                        "dist":24
                    },
                    {
                        "key":"BWI:9:US",
                        "dist":26
                    }
                ],
                "_skiNear":[
                    {
                        "key":"381:11:US",
                        "tLifts":8,
                        "dist":18
                    },
                    {
                        "key":"376:11:US",
                        "tLifts":8,
                        "dist":24
                    },
                    {
                        "key":"383:11:US",
                        "tLifts":5,
                        "dist":38
                    },
                    {
                        "key":"480:11:US",
                        "tLifts":5,
                        "dist":50
                    },
                    {
                        "key":"498:11:US",
                        "tLifts":9,
                        "dist":55
                    },
                    {
                        "key":"3639:11:US",
                        "tLifts":4,
                        "dist":56
                    },
                    {
                        "key":"83:11:US",
                        "tLifts":6,
                        "dist":56
                    },
                    {
                        "key":"76:11:US",
                        "tLifts":5,
                        "dist":57
                    },
                    {
                        "key":"140:11:US",
                        "tLifts":3,
                        "dist":63
                    }
                ],
                "_gprId":"NAM",
                "_dstDates":{
                    "startDate":"2016-03-13T07:00:00.000Z",
                    "endDate":"2016-11-06T06:00:00.000Z"
                },
                "wmId":"D74",
                "offShoreId":"ANZ670",
                "PollenIds":{
                    "tree":"KADW",
                    "grass":"KADW",
                    "ragweed":"KADW"
                },
                "isBoatBeach":true,
                "stNm":"District Of Columbia",
                "_country":"United States Of America",
                "loc":"USDC0001:1:US",
                "expirationTime":1466519621621
            },
            "lotame":{
            },
            "backTo":{
                "url":"https://burda-dev-edit.weather.com/l/",
                "pagetype":"N/A"
            },
            "lastVisitedLocation":{
                "key":"",
                "id":"",
                "locId":"30339",
                "locType":4,
                "cntryCd":"US",
                "cityNm":"Atlanta",
                "address":"",
                "nickname":"",
                "loc":"30339:4:US",
                "lat":33.87,
                "long":-84.47,
                "cntyNm":"COBB",
                "_gprId":"NAM",
                "position":"",
                "prsntNm":"Atlanta, GA (30339)",
                "_country":"Vereinigte Staaten Von Amerika",
                "stNm":"Georgia",
                "stCd":"GA",
                "tag":"",
                "zipCd":"30339",
                "tmZnAbbr":"EDT",
                "dmaCd":524
            },
            "preferredLocation":{
                "key":"",
                "id":"",
                "locId":"30339",
                "locType":4,
                "cntryCd":"US",
                "cityNm":"Atlanta",
                "address":"",
                "nickname":"",
                "loc":"30339:4:US",
                "lat":33.87,
                "long":-84.47,
                "cntyNm":"COBB",
                "_gprId":"NAM",
                "prsntNm":"Atlanta, GA (30339)",
                "_country":"Vereinigte Staaten Von Amerika",
                "stNm":"Georgia",
                "stCd":"GA",
                "position":"",
                "tag":"",
                "zipCd":"30339",
                "tmZnAbbr":"EDT",
                "dmaCd":524
            },
            "weather_bg":{
                "locId":"12345:4:US",
                "image":"https://dsx-stage.weather.com/util/image/mw/wxbkb_default_cloudy_day_1_mezz_dark.jpg",
                "expirationTime":1461677659864
            }
        },
        locale = "en_US",
        pageLoc = window.explicit_location_obj,
        zcs = pageLoc && pageLoc.zipCd || user && user.lastVisitedLocation && user.lastVisitedLocation.zipCd ||
            user && user.savedLocations && user.savedLocations[0] && user.savedLocations[0].zipCd ||
            user && user.recentSearchLocations && user.recentSearchLocations[0] && user.recentSearchLocations[0].zipCd || "",
        nzcs = zcs,
        hzcs = user && user.currentLocation && user.currentLocation.zipCd || "",
        getVal = function (scatterSegs, idx, key, prop) {
            return (scatterSegs[idx] &&
                scatterSegs[idx][key] &&
                scatterSegs[idx][key][0] &&
                scatterSegs[idx][key][0][prop]) || [];
        };
    var acctid = '5E2FB6';

    acctid = (locale === 'de_DE') && 'B98RXZ' || acctid;
    var wxftgUrl = "//triggers.wfxtriggers.com/json/?resp_type=json&acctid=" + acctid + "&current=true&zcs=" + zcs + "&nzcs=" + nzcs;
    var successCallBack = function(data){
        var triggers = data && data.wfxtg,
            wfxtg = Array.isArray(data.wfxtg.current) && data.wfxtg.current.join(',') || "",
            scatterSegs = Array.isArray(triggers.scatterSegs) && triggers.scatterSegs,
            zcsScatterSegs = getVal(scatterSegs, 0, "zcs", "segments"),
            nzvsScatterSegs = getVal(scatterSegs, 1, "nzcs", "segments"),
            cxtgScatterSegs = getVal(scatterSegs, 0, "zcs", "cxtg"),
            cxtg = cxtgScatterSegs.join(","),
            zcs = zcsScatterSegs.join(","),
            nzcs = nzvsScatterSegs.join(",");

        $$.custParams = $$.custParams || {};
        $$.custParams['wfxtg'] = wfxtg;
        $$.custParams['scatter_zcs'] = zcs;
        $$.custParams['scatter_nzcs'] = nzcs;
        $$.custParams['scatter_cxtg'] = cxtg;
        $$.wxftgPromise = Promise.resolve("wxftg");

    };

    //  AJAX request for weather fx
    $$.addLoadEvent(function(){
        jsonp(wxftgUrl, successCallBack);
    });

})(TWC.adUtils || {});

// AMAZON SLOTS CLOSURE

(function (amznads, $$) {
    window.amznads = amznads;

    var locale = "en_US",
        amznid = locale === 'de_DE' && '3128' || '1004';

    amznads.asyncParams = {
        id: amznid,
        callbackFn: function () {
            var targeting = amznads.getTargeting();
            if (!amznads.hasAds() || !targeting) {
                // Failed
                $$.amznSlotsPromise.resolve("amznSlots");
                console.log("error amzn",$$.custParams);

                return;
            }
            // Success

            // Adding the cust params
            $$.custParams = $$.custParams || {};

            $$.custParams["amznslots"] = targeting.amznslots instanceof Array && targeting.amznslots.join(',') || '';
            if (targeting.amzn_vid && targeting.amzn_vid instanceof Array) {
                $$.custParams['amzn_vid'] = targeting.amzn_vid.join(',');
            }
            if (targeting.amzn_vid) {
                $$.custParams['amzn_vid'] = targeting.amzn_vid;
            } else {
                $$.custParams['amzn_vid'] = '';
            }

            $$.amznSlotsPromise.resolve("amznSlots");
            console.log("success amzn",$$.custParams);

        },
        timeout: 2000
    };
    $$.addLoadEvent(function() {
        jsonp('//c.amazon-adsystem.com/aax2/amzn_ads.js');
    });
})(window.amznads || {}, TWC.adUtils || {});


// CRITEO Closure

(function ($$) {
    var criteoUrl = "//rtax.criteo.com/delivery/rta/rta.js?netId=2305&cookieName=cto_weather&varName=crtg_content";

    var successCallback = function(data){
        /**
         * Process cig variable for Criteo
         */
        if (window.crtg_content) {
            var split_criteo, l, split_cig, output = [];
            split_criteo = crtg_content.split(";");
            for (i = 0, l = split_criteo.length; i < l; i++) {
                if (split_criteo[i].match(/cig/)) {
                    split_cig = split_criteo[i].split('=');
                    if (split_cig.length === 2) {
                        output.push(split_cig[1]);
                    }
                }
            }
            $$.custParams = $$.custParams || {};
            $$.custParams['cig'] = output.join(",");
        }
        $$.criteoPromise.resolve("criteo");
        clearTimeout(timeout);
    };
    $$.addLoadEvent(function() {
        jsonp(criteoUrl, successCallback);
    });
})(TWC.adUtils || {});

//// LOTAME Closure
//
//(function () {
//    var lotameUrl = '//ad.crwdcntrl.net/5/c=2215/pe=y/';
//
//    var successCallback = function(data){
//        var lot_tpid,
//            lot_pid,
//            lot_abbr,
//            lot_id,
//            lotame,
//            prsntNm,
//            site;
//
//        var user = {
//                "savedLocations":[
//                ],
//                "recentSearchLocations":[
//                    {
//                        "key":"",
//                        "id":"",
//                        "locId":"30339",
//                        "locType":4,
//                        "cntryCd":"US",
//                        "cityNm":"Atlanta",
//                        "address":"",
//                        "nickname":"",
//                        "loc":"30339:4:US",
//                        "lat":33.87,
//                        "long":-84.47,
//                        "cntyNm":"COBB",
//                        "_gprId":"NAM",
//                        "position":"",
//                        "prsntNm":"Atlanta, GA (30339)",
//                        "_country":"Vereinigte Staaten Von Amerika",
//                        "stNm":"Georgia",
//                        "stCd":"GA",
//                        "tag":"",
//                        "zipCd":"30339",
//                        "tmZnAbbr":"EDT",
//                        "dmaCd":524
//                    },
//                    {
//                        "key":"",
//                        "id":"",
//                        "locId":"12345",
//                        "locType":4,
//                        "cntryCd":"US",
//                        "cityNm":"Schenectady",
//                        "address":"",
//                        "nickname":"",
//                        "loc":"12345:4:US",
//                        "lat":42.81,
//                        "long":-73.94,
//                        "cntyNm":"SCHENECTADY",
//                        "_gprId":"NAM",
//                        "position":"",
//                        "prsntNm":"Schenectady, NY (12345)",
//                        "_country":"United States Of America",
//                        "stNm":"New York",
//                        "stCd":"NY",
//                        "tag":"",
//                        "zipCd":"12345",
//                        "tmZnAbbr":"EDT",
//                        "dmaCd":532
//                    },
//                    {
//                        "key":"",
//                        "id":"",
//                        "locId":"USGA0028",
//                        "locType":1,
//                        "cntryCd":"US",
//                        "cityNm":"Atlanta",
//                        "address":"",
//                        "nickname":"",
//                        "loc":"USGA0028:1:US",
//                        "lat":33.75,
//                        "long":-84.39,
//                        "cntyNm":"FULTON",
//                        "_gprId":"NAM",
//                        "position":"",
//                        "prsntNm":"Atlanta, GA",
//                        "_country":"United States Of America",
//                        "stNm":"Georgia",
//                        "stCd":"GA",
//                        "tag":"",
//                        "zipCd":"30337",
//                        "tmZnAbbr":"EDT",
//                        "dmaCd":524
//                    }
//                ],
//                "locale":"en_US",
//                "browser":{
//                    "chrome":true,
//                    "version":"51.0.2704.84",
//                    "webkit":true,
//                    "flash":true,
//                    "sl":false,
//                    "pdf":false,
//                    "qtime":false,
//                    "wmp":false,
//                    "shk":true,
//                    "rp":false,
//                    "java":false
//                },
//                "flash":{
//                    "chrome":true,
//                    "version":"51.0.2704.84",
//                    "webkit":true,
//                    "flash":true,
//                    "sl":false,
//                    "pdf":false,
//                    "qtime":false,
//                    "wmp":false,
//                    "shk":true,
//                    "rp":false,
//                    "java":false
//                },
//                "unit":"m",
//                "rmid":"7b834df8-b20a-49a4-8935-0aa6cef070d1",
//                "currentBackTo":{
//                    "url":"https://burda-dev-edit.weather.com/",
//                    "pagetype":"N/A"
//                },
//                "anonCreated":true,
//                "currentLocation":{
//                    "locType":1,
//                    "locId":"USDC0001",
//                    "procTm":"20160620115127",
//                    "cityNm":"Washington",
//                    "stCd":"DC",
//                    "prsntNm":"Washington, DC",
//                    "cntryCd":"US",
//                    "coopId":"72405000",
//                    "lat":38.89,
//                    "long":-77.03,
//                    "obsStn":"KDCA",
//                    "secObsStn":"KCGS",
//                    "tertObsStn":"KADW",
//                    "gmtDiff":-5,
//                    "regSat":"ec",
//                    "cntyId":"DCC001",
//                    "cntyNm":"DISTRICT OF COLUMBIA",
//                    "zoneId":"DCZ001",
//                    "zoneNm":"District of Columbia",
//                    "cntyFips":"11001",
//                    "active":1,
//                    "dySTInd":"Y",
//                    "dmaCd":511,
//                    "zipCd":"20023",
//                    "elev":26,
//                    "cliStn":"448906",
//                    "tmZnNm":"Eastern Daylight Time",
//                    "tmZnAbbr":"EDT",
//                    "dySTAct":"Y",
//                    "clsRad":"DCA",
//                    "metRad":"DCA",
//                    "ultRad":"DCA",
//                    "ssRad":"ec",
//                    "lsRad":"ne",
//                    "siteId":"WW",
//                    "idxId":"KDCA",
//                    "primTecci":"T72405000",
//                    "arptId":"DCA",
//                    "mrnZoneId":"ANZ535",
//                    "pllnId":"ADW",
//                    "skiId":"376",
//                    "tideId":"E8594900",
//                    "epaId":"dc001",
//                    "_arptNear":[
//                        "DCA",
//                        "IAD",
//                        "BWI"
//                    ],
//                    "_arptNearDist":[
//                        {
//                            "key":"DCA:9:US",
//                            "dist":2
//                        },
//                        {
//                            "key":"IAD:9:US",
//                            "dist":24
//                        },
//                        {
//                            "key":"BWI:9:US",
//                            "dist":26
//                        }
//                    ],
//                    "_skiNear":[
//                        {
//                            "key":"381:11:US",
//                            "tLifts":8,
//                            "dist":18
//                        },
//                        {
//                            "key":"376:11:US",
//                            "tLifts":8,
//                            "dist":24
//                        },
//                        {
//                            "key":"383:11:US",
//                            "tLifts":5,
//                            "dist":38
//                        },
//                        {
//                            "key":"480:11:US",
//                            "tLifts":5,
//                            "dist":50
//                        },
//                        {
//                            "key":"498:11:US",
//                            "tLifts":9,
//                            "dist":55
//                        },
//                        {
//                            "key":"3639:11:US",
//                            "tLifts":4,
//                            "dist":56
//                        },
//                        {
//                            "key":"83:11:US",
//                            "tLifts":6,
//                            "dist":56
//                        },
//                        {
//                            "key":"76:11:US",
//                            "tLifts":5,
//                            "dist":57
//                        },
//                        {
//                            "key":"140:11:US",
//                            "tLifts":3,
//                            "dist":63
//                        }
//                    ],
//                    "_gprId":"NAM",
//                    "_dstDates":{
//                        "startDate":"2016-03-13T07:00:00.000Z",
//                        "endDate":"2016-11-06T06:00:00.000Z"
//                    },
//                    "wmId":"D74",
//                    "offShoreId":"ANZ670",
//                    "PollenIds":{
//                        "tree":"KADW",
//                        "grass":"KADW",
//                        "ragweed":"KADW"
//                    },
//                    "isBoatBeach":true,
//                    "stNm":"District Of Columbia",
//                    "_country":"United States Of America",
//                    "loc":"USDC0001:1:US",
//                    "expirationTime":1466519621621
//                },
//                "lotame":{
//                },
//                "backTo":{
//                    "url":"https://burda-dev-edit.weather.com/l/",
//                    "pagetype":"N/A"
//                },
//                "lastVisitedLocation":{
//                    "key":"",
//                    "id":"",
//                    "locId":"30339",
//                    "locType":4,
//                    "cntryCd":"US",
//                    "cityNm":"Atlanta",
//                    "address":"",
//                    "nickname":"",
//                    "loc":"30339:4:US",
//                    "lat":33.87,
//                    "long":-84.47,
//                    "cntyNm":"COBB",
//                    "_gprId":"NAM",
//                    "position":"",
//                    "prsntNm":"Atlanta, GA (30339)",
//                    "_country":"Vereinigte Staaten Von Amerika",
//                    "stNm":"Georgia",
//                    "stCd":"GA",
//                    "tag":"",
//                    "zipCd":"30339",
//                    "tmZnAbbr":"EDT",
//                    "dmaCd":524
//                },
//                "preferredLocation":{
//                    "key":"",
//                    "id":"",
//                    "locId":"30339",
//                    "locType":4,
//                    "cntryCd":"US",
//                    "cityNm":"Atlanta",
//                    "address":"",
//                    "nickname":"",
//                    "loc":"30339:4:US",
//                    "lat":33.87,
//                    "long":-84.47,
//                    "cntyNm":"COBB",
//                    "_gprId":"NAM",
//                    "prsntNm":"Atlanta, GA (30339)",
//                    "_country":"Vereinigte Staaten Von Amerika",
//                    "stNm":"Georgia",
//                    "stCd":"GA",
//                    "position":"",
//                    "tag":"",
//                    "zipCd":"30339",
//                    "tmZnAbbr":"EDT",
//                    "dmaCd":524
//                },
//                "weather_bg":{
//                    "locId":"12345:4:US",
//                    "image":"https://dsx-stage.weather.com/util/image/mw/wxbkb_default_cloudy_day_1_mezz_dark.jpg",
//                    "expirationTime":1461677659864
//                }
//            };
//        lotame = user && user.lotame || {};
//        lot_tpid = lotame.lot_tpid = data && data.Profile && data.Profile.tpid || lotame.lot_tpid;
//        lot_pid = lotame.lot_pid = data && data.Profile && data.Profile.pid || lotame.lot_pid;
//
//        lot_abbr = (lotame && lotame.lot_abbr) || '';
//        lot_id = (lotame && lotame.lot_id) || '';
//
//        audienceLength = data && data.Profile && data.Profile.Audiences &&
//            data.Profile.Audiences.Audience && data.Profile.Audiences.Audience.length;
//        if (audienceLength > 0) {
//            lot_abbr = '';
//            lot_id = '';
//            for (var cci = 0; cci < audienceLength; cci++) {
//                lot_abbr += (data.Profile.Audiences.Audience[cci].abbr + (cci < audienceLength - 1 ? ',' : ''));
//                lot_id += (data.Profile.Audiences.Audience[cci].id + (cci < audienceLength - 1 ? ',' : ''));
//            }
//            lotame.lot_abbr = lot_abbr;
//            lotame.lot_id = lot_id;
//        }
//
//        TWC.adUtils = TWC.adUtils || {};
//        TWC.adUtils.custParams = TWC.adUtils.custParams || {};
//        TWC.adUtils.custParams['tpid'] = lot_tpid;
//        TWC.adUtils.custParams['lpid'] = lot_pid;
//        TWC.adUtils.custParams['sg'] = lot_id;
//
//        TWC.adUtils.criteoPromise = Promise.resolve("lotame");
//        if (window._cc1884) {
//            var gnv = TWC && TWC.pco && TWC.pco.getNodeValue;
//            if (user) {
//
//                var age = gnv('user', 'age') || '',
//                    gender = gnv('user', 'gender') || '';
//                if (age) {
//                    _cc1884.add('seg', 'a_' + age);
//                }
//                if (gender) {
//                    _cc1884.add('seg', 'g_' + gender);
//                }
//
//                if (TWC.pco.get('metrics')) {
//                    _cc1884.add('seg', 'level1_' + gnv('metrics', 'level1'));
//                    _cc1884.add('seg', 'level2_' + gnv('metrics', 'level2'));
//                    _cc1884.add('seg', 'level3_' + gnv('metrics', 'level3'));
//                    _cc1884.add('seg', 'level4_' + gnv('metrics', 'level4'));
//                }
//                if (TWC.pco.get('ad')) {
//                    if (gnv('ad', 'location')) {
//                        _cc1884.add('seg', 'dma_' + gnv('ad', 'location').dmaCd);
//                    }
//
//                    _cc1884.add('seg', 'zone_' + gnv('ad', 'zone'));
//                }
//                if (TWC.pco.get('page')) {
//                    _cc1884.add('seg', 'lang_' + gnv('page', 'lang'));
//                }
//                _cc1884.bcp();
//            }
//        }
//    };
//    window.onload = function() {
//        jsonp(lotameUrl, successCallback);
//    }
//
//})();
