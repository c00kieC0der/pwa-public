

(function($$) {

    var amzn = $$.utils.getParameterByName('amzn') || '';
    var wxftg = $$.utils.getParameterByName('wxftg') || '';
    var criteo = $$.utils.getParameterByName('criteo') || '';

    // Weather FX Triggers Closure

    if (wxftg !== "false") {
        /** Need to pull in localStorage to find:
         *  lastVisited location
         *  first saved location
         *  recent search location
         *  or user currentLocation - if it does not exist or has expired
         *  Start with page.currentLocation from pco
         *
         *  utag_dataReady waits on pcoReady, so pcoReady has already fired
         */

        //console.log('wfxtgStart', new Date().getTime() - window.renderStartTime);
        // check for saved locs
        var savedPco = window.localStorage.jStorage ? JSON.parse(window.localStorage.jStorage) : {};

        var user = savedPco.user && savedPco.user.recentSearchLocations ? savedPco.user.recentSearchLocations : [];

        var locale = savedPco.user && savedPco.user.locale ? savedPco.user.locale : "en_US",
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
        var successCallBack = function (data) {
           // console.log('wfxtgReturned', new Date().getTime() - window.renderStartTime);
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
            $$.custParams['zcs'] = zcs;
            $$.custParams['nzcs'] = nzcs;
            $$.custParams['cxtg'] = cxtg;
            $$.Promises.wfxtgPromise.resolve();
            //console.log('wfxtgResolved', new Date().getTime() - window.renderStartTime);

        };

        //  AJAX request for weather fx
        $$.utils.jsonp(wxftgUrl, successCallBack);

    } else {
        $$.Promises.wfxtgPromise.resolve();

    }

// AMAZON SLOTS CLOSURE

    if (amzn !== "false") {
        window.amznads = window.amznads || {};
        console.log('amznStart', new Date().getTime() - window.renderStartTime);

        var locale = "en_US",
          amznid = locale === 'de_DE' && '3128' || '1004';

        amznads.asyncParams = {
            id: amznid,
            callbackFn: function () {
                var targeting = amznads.getTargeting();
                if (!amznads.hasAds() || !targeting) {
                    // Failed
                    $$.Promises.amznSlotsPromise.resolve("amznSlots");
                  //  console.log("error amzn", $$.custParams);
                  //  console.log('amznErrored', new Date().getTime() - window.renderStartTime);

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

                $$.Promises.amznSlotsPromise.resolve("amznSlots");
                console.log("success amzn", $$.custParams);
             //   console.log('amznResolved', new Date().getTime() - window.renderStartTime);


            },
            timeout: 2000
        };
        $$.utils.jsonp('//c.amazon-adsystem.com/aax2/amzn_ads.js');
    }
    else {
        $$.Promises.amznSlotsPromise.resolve("amznSlots");
    }

// CRITEO Closure

    if (criteo !== "false") {

      //  console.log('criteoStart', new Date().getTime() - window.renderStartTime);
        $$.Promises.criteoPromise.resolve("criteo");
        var criteoUrl = "//rtax.criteo.com/delivery/rta/rta.js?netId=2305&cookieName=cto_weather&varName=crtg_content";

        var successCallback = function (data) {
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
            $$.Promises.criteoPromise.resolve("criteo");
          //  console.log('criteoResolved', new Date().getTime() - window.renderStartTime);
        };
        $$.utils.loadScript(criteoUrl, successCallback);
    }
    else {
        $$.Promises.criteoPromise.resolve("criteo");
    }
})(window.AdsMetricsCtrl);