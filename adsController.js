/**
 * Created by aparekh on 6/20/16.
 */


// GET WEATHER DATA FOR CUST PARAMS
(function($$){

    function convertTemp(temp, unit) {
        return (unit === 'e') ? Math.round((temp - 32) * 5 / 9) /*F to C*/: Math.round((temp * 9 / 5) + 32) /*C to F*/;
    }


    // Wait for Data call to resolve
    document.addEventListener('builder', function() {
        console.log('cust_params', new Date().getTime() - window.renderStartTime);
        console.log("Data", _Data);
        if(_Data && _Data.obs){
            var obs = _Data.obs;
            var units, tempF, tempC, feelsLikeF, feelsLikeC, secondsToCache = 0;
            units = _User && _User.unitPref || "m";
            tempF = (units === 'e') ? obs.temperature : convertTemp(obs.temperature, units);
            tempC = (units === 'm') ? obs.temperature : convertTemp(obs.temperature, units);
            feelsLikeF = (units === 'e') ? obs.feelsLike : convertTemp(obs.feelsLike, units);
            feelsLikeC = (units === 'm') ? obs.feelsLike : convertTemp(obs.feelsLike, units);

            $$.custParams = $$.custParams || {};
            $$.custParams["hmid"] = obs.humidity + '';
            $$.custParams["wind"] = obs.windSpeed+ '';
            $$.custParams["uv"] = obs.uvIndex+ '';
            $$.custParams["realTemp"] = tempF+ '';
            $$.custParams["tmp"] = [tempF,tempC];
            $$.custParams["tempc"] = tempC+ '';
            $$.custParams["tempR"] = {
                val: tempF+ ''
            };
            $$.custParams["tempRC"] = {
                val: tempC+ ''
            };
            $$.custParams["wxIcon"] = obs.icon+ '';
            $$.custParams['flsLkF'] = feelsLikeF+ '';
            $$.custParams['flsLkC'] = feelsLikeC+ '';
            if (obs.iconExt) {
                $$.custParams["wxExtIcon"] = obs.iconExt+ ''; /*not in turbo data. not needed per Pavan.*/
            }
            $$.custParams["cnd"] = obs.icon+ '';
            $$.custParams["baro"] = obs.barometerCode+ '';
            $$.custParams["snw"] = obs.snowDepth+ '';

        }
        $$.weatherDataPromise.resolve();

        //if (_Data.dailyForecast) {
        //    _self.set("fcst", dailyForecast);
        //    $$.custParams["fcst"] = dailyForecast;
        //}
        //if (alert) {
        //    _self.set("severe", alertsMap);
        //}
        //if (pollenForecast) {
        //    _self.set("pollen", pollenForecast);
        //}
    });
})(TWC.adUtils || {});



// SETUP AD CONTROLLER

!function($$) {

    var isMobile = window.innerWidth < 768;
    var isTablet = window.innerWidth > 769 && window.innerWidth < 1025;
    var isDesktop = window.innerWidth > 1024;
    var adstest = getCookie('adstest');
    var nc = isMobile && '7646-weatherMW' || '7646-weatherBW';
    var src = "//ox-d.weatherus.servedbyopenx.com/w/1.0/jstag?nc=" + nc;
    var openx = document.createElement('script');
    var node = document.getElementsByTagName('script') && document.getElementsByTagName('script')[0];
    var network, adUnit, adZone, NCTAU, NCAU, adMapping, cust_params;
    openx.src = src;
    openx.async = true;
    node.parentNode.insertBefore(openx, node);


    function loadJSON(callback) {

        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', '/localeToAdUnit.json', true); // Replace 'my_data' with the path to your file
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                callback(xobj.responseText);
            }
        };
        xobj.send(null);
    }
    loadJSON(function(response){
        var localeToAdUnitMap = JSON.parse(response);
        var savedPco = window.localStorage.jStorage ? JSON.parse(window.localStorage.jStorage) : {};
        var locale = savedPco.user && savedPco.user.locale ? savedPco.user.locale.replace('_', '-'): "en-US",
            /** network */
        network = "/7646/";
        /** ad unit */

        adUnit = isMobile ? localeToAdUnitMap[locale].m_mweb_wx : localeToAdUnitMap[locale].wx_online;
        adUnit = adstest ? 'test_' + adUnit : adUnit;
        /** ad zone */
        adZone = '/home';
        NCTAU = network + adUnit + adZone;
        NCAU = network + adUnit;
    });



    adMapping = {
        "desktop": {
            "WX_WindowShade": {
                pos: "wx_ws",
                sizes: [[300,276],[728,91],[970,90],[728,50]]
            },
            "WX_Top300Variable": {
                pos: "wx_300var",
                sizes: [[300, 251],[300,600],[300,1050],[300,276]]
            },
            "WX_Mid300": {
                pos: "wx_mid300",
                sizes: [300, 251]
            },
            "WX_Hidden": {
                pos: "wx_hdn",
                sizes: [1,1]
            }
        },
        "mobile": {
            "MW_Position1": {
                pos: "mw_p1",
                sizes: [[320,51],[300,276],[300,45]]
            },
            "MW_Position2": {
                pos: "mw_p2",
                sizes: [300, 251]
            },
            "MW_Position3":{
                pos: "mw_p3",
                sizes: [300, 251]
            },
            "MW_Position4":{
                pos: "mw_p4",
                sizes: [300, 251]
            }
        }

    };

    cust_params =  {
        cat: "fcst",
        ch: "fcst",
        fam: "fcst",
        ad_unit: encodeURIComponent(NCAU)
    };


    if (adstest) {
        cust_params['adstest'] = adstest;
    }

    var gptSlots = [];

    function extend(){
        for(var i=1; i<arguments.length; i++)
            for(var key in arguments[i])
                if(arguments[i].hasOwnProperty(key))
                    arguments[0][key] = arguments[i][key];
        return arguments[0];
    }

    function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
    }

    function setAd(el) {
        var id = el.getAttribute('id');
        var screen = isMobile && 'mobile' || 'desktop';
        googletag.cmd.push(function () {
            var slot = googletag.defineSlot(NCTAU, adMapping[screen][id].sizes, id)
                .addService(googletag.pubads())
                .setTargeting("pos", adMapping[screen][id].pos);
            window.ls_dfp_slots.push(slot);
            gptSlots.push(slot);
        });
    }

    function displayAd(el) {
        var id = el.getAttribute('id');
        googletag.display(id);
    }

    $$.addLoadEvent(function(){
        var selector = isMobile ? '[id^="MW_"]' : '[id^="WX_"]';
        var adDivs = document.querySelectorAll(selector);
        adDivs.forEach(function (el) {
            setAd(el);
        });

        googletag.cmd.push(function () {
            Promise.all([$$.wxftgPromise.promise,
                $$.amznSlotsPromise.promise,
                $$.criteoPromise.promise,
                $$.weatherDataPromise]).then(function () {
                console.log("all promises done: ", new Date().getTime() - window.renderStartTime);
                $$.custParams = extend({}, $$.custParams, cust_params);
                for (var p in $$.custParams) {
                    if ($$.custParams.hasOwnProperty(p)) {
                        googletag.pubads().setTargeting(p, $$.custParams[p]);
                    }
                }
                googletag.pubads().enableSingleRequest();
                googletag.enableServices();

                if (typeof index_headertag_lightspeed !== 'undefined') {
                    var cb = (function (adDivs, ls_dfp_slots) {
                        return function () {
                            index_headertag_lightspeed.set_slot_targeting(ls_dfp_slots)
                            for (f = 0; f < adDivs.length; f++) {
                                if (document.getElementById(adDivs[f].getAttribute('id'))) {
                                    googletag.display(adDivs[f].getAttribute('id'));
                                }
                            }
                            document.getElementById("windowshade_info").innerHTML = "Pubads Call Time : " + (new Date().getTime() - window.renderStartTime) / 1000 + " secs";
                            console.dir("Pubads Call Time : " + (new Date().getTime() - window.renderStartTime) / 1000 + "secs");
                        };
                    })(adDivs, window.ls_dfp_slots);
                    index_headertag_lightspeed.add_session_end_hook(cb, true);
                    index_headertag_lightspeed.refresh();

                } else {
                    adDivs.forEach(function (el) {
                        displayAd(el);
                    });
                    document.getElementById("windowshade_info").innerHTML = "Pubads Call Time : " + (new Date().getTime() - window.renderStartTime) / 1000 + " secs";
                    console.dir("Pubads Call Time : " + (new Date().getTime() - window.renderStartTime) / 1000 + "secs");
                }
            });
        });

    });

}(TWC.adUtils || {});


