/**
 * Created by sherwoos on 7/11/16.
 */
  /* You may give each page an identifying name, server, and channel on
   the next lines. */

var _Metrics = {};

(function($$) {
    _Metrics.pageLoad = function(fromPage, toPage, pos){

        Promise.all([$$.Promises.jsonReady.promise,
            $$.Promises.weatherDataPromise.promise]).then(function() {

            var loc = _User.activeLocation;
            var urlZone = location.pathname.match(/\/(weather\/.*?)\//);
            var param = $$.utils.getParameterByName;
            var locIds = [], i, l;
            urlZone = urlZone && urlZone.length > 1 && urlZone[1];
            urlZone = $$.adsMetricsMaps.urlToAdZone[urlZone];
            metrics = urlZone.metrics.split('/');
            var cm_date = param("cm_date") ? param("cm_date") : "";
            var cm_ven = param("cm_ven") ? param("cm_ven") : "";
            var cm_cat = param("cm_cat") ? ":" + param("cm_cat") : "";
            var cm_pla = param("cm_pla") ? ":" + param("cm_pla") : "";
            var cm_ite = param("cm_ite") ? ":" + param("cm_ite") : "";


            s.pageName = metrics[0] + ":" + urlZone.pagecode; // Level1 : pagecode
            s.campaign = cm_ven + cm_date + cm_cat + cm_pla + cm_ite;
            s.channel = metrics[0]; // channel = Level1
            s.events = "event2";
            for (i = 0, l = _User.locations.length; i < l; i++) {
                locIds.push(_User.locations[i].locId + ":" +
                  _User.locations[i].locType + ":" +
                  _User.locations[i].cntryCd);
            }
            s.prop2 = _User.locations.length + '^' + locIds.join(','); // number of recent locations ^ location1, location2, etc
            s.prop10 = metrics[0]; // timeframe
            s.prop11 = metrics[0] + "-" + metrics[1] + "-" + metrics[2] + "-" + metrics[3]; // LEVEL1-LEVEL2-LEVEL3-LEVEL4
            s.prop14 = metrics[0] + "-" + metrics[1]; // LEVEL1-LEVEL2
            s.prop15 = metrics[0] + "-" + metrics[1] + "-" + metrics[2]; // LEVEL1-LEVEL2-LEVEL3
            s.prop16 = $$.custParams.cnd; // wx cond
            s.prop22 = loc.locType + ":" + loc.locId + ":" + loc.cityNm; // Page Location Id with city (ex: 4:13159:BERLIN, 1:GMXX0007:BERLIN)
            s.prop24 = anonymizedURL(); // Anonymized URL (ex: /weather/today/l)
            s.prop25 = _User.activeLocation.locId + ':' +
              _User.activeLocation.locType + ":" +
              _User.activeLocation.cntryCd; // preferred location (ex: USGA0353:1:US)
            s.prop26 = loc.cityNm + ":" + loc.stCd + ":" + loc.cntryCd; // page or current location city:state:cc (ex: Vinings:GA:US)
            s.prop27 = loc.dmaCd; // dma code
            s.prop28 = loc.zipCd; // postal code

            var serverEnv = "";
            var replEnvStr = location.host.replace(".weather.com", "");


            if (location.href.match(/localhost/)) {
                serverEnv = "dev:localhost";
            }else if (location.href.match(/pwa-stage/)){
                serverEnv = "dev:pwa-stage";
            }else if (location.href.match(/twcrb/)) {
                serverEnv = ["dev:", replEnvStr].join("");
            } else if (location.href.match(/preview/)) {
                serverEnv = ["preview:", replEnvStr].join("");
            } else if (location.href.match(/beta/)) {
                serverEnv = ["beta:", replEnvStr].join("");
            } else {
                serverEnv = ["live:", replEnvStr].join("");
            }
            s.prop30 = serverEnv; // env (ex: live:weather.com)

            s.prop35 = ""; // Action tracking


            s.prop39 = $$.utils.getParameterByName("par"); // partner
            s.prop41 = ""; // ivw_st
            s.prop42 = ""; // ivw_cp
            s.prop44 = fromPage + '_inPageNav_' + toPage + '_' + pos; // fromStr


            s.prop46 = $$.custParams.cat; // ad_category



            /* Conversion Variables */
            s.eVar3 = document.domain; // server

            s.eVar4 = cm_ven + cm_date + cm_cat + cm_pla + cm_ite;
            s.eVar5 = cm_ven + cm_date + cm_cat + cm_pla + cm_ite;
            s.eVar12 = metrics[0] + "-" + metrics[1] + "-" + metrics[2] + "-" + metrics[3]; // LEVEL1-LEVEL2-LEVEL3-LEVEL4
            s.eVar13 = metrics[0]; // LEVEL1
            s.eVar14 = metrics[0] + "-" + metrics[1]; // LEVEL1-LEVEL2
            s.eVar15 = metrics[0] + "-" + metrics[1] + "-" + metrics[2]; // LEVEL1-LEVEL2-LEVEL3
            s.eVar16 = $$.custParams.cnd; // wx cond
            s.eVar21 = ""; // social platform (i.e. facebook, twitter, etc)
            s.eVar22 = ""; // social content shared (i.e. today-forecast, video-watch)
            s.eVar24 = ""; // social content type (content channel of content shared)
            s.eVar26 = ""; // page or current location city:state:cc (ex: Vinings:GA:US)
            s.eVar28 = $$.custParams.zip; // postal code
            s.eVar33 = location.href; // pageUrl
            s.eVar39 = $$.custParams.par; // partner
            s.eVar42 = metrics[0] + ":" + urlZone.pagecode; // pageName = LEVEL1 : pagecode
            s.eVar44 = fromPage + '_inPageNav_' + toPage + '_' + pos; // fromStr


            var s_code = s.t();
            if (s_code) {
                document.write(s_code);
            }

        });

        _Metrics.clickTrack = function(obj, page, module, trackStr){
            if(!obj || !trackStr || !page || !module){
                return;
            }
            trackStr = page + '_' + module + '_' + trackStr;
            s.linkTrackVars='prop35';s.linkTrackEvents='None';
            s.prop35 = trackStr;
            s.tl(obj, 'o', trackStr);
            s.prop35 = '';
        };
        
        function anonymizedURL() {
            var anonymization = String(window.location.pathname);
            if (anonymization.indexOf("?") > -1) {
                var eol1 = anonymization.indexOf("?");
                anonymization = anonymization.substring(0,eol1);
            }
            if (anonymization.indexOf("#") > -1) {
                var eol2 = anonymization.indexOf("#");
                anonymization = anonymization.substring(0,eol2);
            }
            if(anonymization === "/index.html"|| anonymization === "/" || anonymization === ""){
                anonymization="/";
            } else{
                var urlObjs2 = anonymization.split("/");
                var totalNum = urlObjs2.length - 1;
                var omn_temp = urlObjs2[totalNum];
                if (omn_temp.match(/[A-Z]/) || omn_temp.match(/[0-9]/) || omn_temp.match(/[@#$%&!*:]/) || omn_temp === '') {
                    urlObjs2.pop();
                }
                anonymization = urlObjs2.join("/");
            }
            return anonymization;
        }


    }
})(AdsMetricsCtrl);

