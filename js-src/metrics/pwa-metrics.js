/**
 * Created by sherwoos on 7/11/16.
 */
  /* You may give each page an identifying name, server, and channel on
   the next lines. */
(function($$) {

  Promise.all([$$.Promises.jsonReady.promise,
               $$.Promises.weatherDataPromise.promise]).then(function() {

      var loc = _User.activeLocation;
      var urlZone = location.pathname.match(/\/(weather\/.*?)\//);
      urlZone = urlZone && urlZone.length > 1 && urlZone[1];
      urlZone = $$.adMaps.urlToAdZone[urlZone];
      metrics = urlZone.metrics.split('/');


      s.pageName = metrics[0] + ":" + urlZone.pagecode; // Level1 : pagecode
      s.campaign = ""; // campaign = cm_ven + cm_date + cm_cat + cm_pla + cm_ite
      s.channel = metrics[0]; // channel = Level1
      s.events = "event2";
      s.prop2 = ""; // number of recent locations ^ location1, location2, etc
//  s.prop8 = ""; // rmid from local storage
      s.prop10 = metrics[0]; // timeframe
      s.prop11 = metrics[0] + "-" + metrics[1] + "-" + metrics[2] + "-" + metrics[3]; // LEVEL1-LEVEL2-LEVEL3-LEVEL4
      s.prop14 = metrics[0] + "-" + metrics[1]; // LEVEL1-LEVEL2
      s.prop15 = metrics[0] + "-" + metrics[1] + "-" + metrics[2]; // LEVEL1-LEVEL2-LEVEL3
      s.prop16 = $$.custParams.cnd; // wx cond
      s.prop22 = loc.locType + ":" + loc.locId + ":" + loc.cityNm; // Page Location Id with city (ex: 4:13159:BERLIN, 1:GMXX0007:BERLIN)
      s.prop24 = ""; // Anonymized URL (ex: /de-DE/wetter/heute/l)
      s.prop25 = ""; // preferred location (ex: USGA0353:1:US)
      s.prop26 = loc.cityNm + ":" + loc.stCd + ":" + loc.cntryCd; // page or current location city:state:cc (ex: Vinings:GA:US)
      s.prop27 = loc.dmaCd; // dma code
      s.prop28 = loc.zipCd; // postal code
      s.prop29 = ""; // number of saved locations ^ location1, location2, etc
      s.prop30 = $$.custParams.env; // env (ex: live:weather.com)

//  s.prop31 = ""; // gender
//  s.prop32 = ""; // age
//  s.prop34 = ""; // pollen

      s.prop35 = ""; // Action tracking

//  s.prop38 = ""; // date

      s.prop39 = $$.utils.getParameterByName("par"); // partner
      s.prop41 = ""; // ivw_st
      s.prop42 = ""; // ivw_cp
      s.prop44 = fromStr(); // fromStr

//  s.prop45 = ""; // cobrand

      s.prop46 = ""; // ad_category

//  s.prop47 = ""; // contentType
//  s.prop48 = ""; // ad_family
//  s.prop49 = ""; // ad_channel
//  s.prop50 = ""; // template
//  s.prop53 = ""; // visitNum
//  s.prop60 = ""; // partner
//  s.prop67 = ""; // weather_view
//  s.prop68 = ""; // thirdPartyAdTiming


      /* Conversion Variables */
      s.eVar1 = ""; // Internal Campaign ????????????????????????
      s.eVar2 = ""; // Internal Search Terms ????????????????????
      s.eVar3 = ""; // server

//  s.eVar3 = ""; // campaignCode = if(cm_ven) pagecode + '?cm_ven=' + cm_ven + cm_date
      s.eVar4 = ""; // campaignID(30 Days) = cm_ven + cm_date + cm_cat + cm_pla + cm_ite ?????????????????
      s.eVar5 = ""; // campaignID (Lifetime) = cm_ven + cm_date + cm_cat + cm_pla + cm_ite ?????????????????

//  s.eVar8 = ""; // adZone
//  s.eVar10 = s.getNewRepeat();

      s.eVar12 = metrics[0] + "-" + metrics[1] + "-" + metrics[2] + "-" + metrics[3]; // LEVEL1-LEVEL2-LEVEL3-LEVEL4
      s.eVar13 = metrics[0]; // LEVEL1
      s.eVar14 = metrics[0] + "-" + metrics[1]; // LEVEL1-LEVEL2
      s.eVar15 = metrics[0] + "-" + metrics[1] + "-" + metrics[2]; // LEVEL1-LEVEL2-LEVEL3
      s.eVar16 = $$.custParams.cnd; // wx cond
      s.eVar21 = ""; // social platform (i.e. facebook, twitter, etc)
      s.eVar22 = ""; // social content shared (i.e. today-forecast, video-watch)
      s.eVar24 = ""; // social content type (content channel of content shared)
      s.eVar26 = ""; // page or current location city:state:cc (ex: Vinings:GA:US)

//  s.eVar27 = ""; // dma code

      s.eVar28 = $$.custParams.zip; // postal code

//  s.eVar30 = ""; // flash version

      s.eVar33 = location.href; // pageUrl

//  s.eVar34 = ""; // visitNum

      s.eVar39 = $$.utils.getParameterByName("par"); // partner

//  s.eVar40 = ""; // partnerSite

      s.eVar42 = metrics[0] + ":" + urlZone.pagecode; // pageName = LEVEL1 : pagecode
      s.eVar44 = fromStr(); // fromStr

//  s.eVar57 = ""; // cable_provider
//  s.eVar60 = ""; // contains_videoplayer
//  s.eVar63 = ""; // assetId
//  s.eVar65 = ""; // locale
//  s.eVar70 = ""; // loggedin

      var s_code = s.t();
      if (s_code) {
        document.write(s_code);
      }

      function fromStr() {
        var fromStr = $$.utils.getCookie("fromStr");
        if (!fromStr) {
          fromStr = $$.utils.getParameterByName("from");
        }
        else {
          $$.utils.deleteCookie("fromStr", {domain: ".weather.com", path: "/"});
        }
        return fromStr;
      }
  });


})(AdCtrl);

