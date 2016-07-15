
window.renderStartTime = new Date().getTime();

window.AdsMetricsCtrl = window.AdsMetricsCtrl || {};
AdsMetricsCtrl.utils = AdsMetricsCtrl.utils || {};

(function($$) {
    
    // Utils
    $$.utils.addLoadEvent = function (func) {
        var oldonload = window.onload;
        if (typeof window.onload != 'function') {
            window.onload = func;
        } else {
            window.onload = function () {
                if (oldonload) {
                    oldonload();
                }
                func();
            }
        }
    };
    
    $$.utils.getParameterByName = function (name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    };

    $$.utils.loadJSON = function(src, destObj, destProp) {

        var xobj = new XMLHttpRequest();
        var jsonReady = new $$.Promises.Deferred();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', src, true); // Replace 'my_data' with the path to your file
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                destObj[destProp] = JSON.parse(xobj.responseText);
                jsonReady.resolve();
            }
        };
        xobj.send(null);
        return jsonReady;
    };

    $$.utils.jsonp = function (url, callback) {
        var head = document.getElementsByTagName('head')[0];
        var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
        window[callbackName] = function (data) {
            callback(data);
        };

        var script = document.createElement('script');
        script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
        head.appendChild(script);
    };

    $$.utils.loadScript = function (url, callback) {

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                callback();
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    };
    
    $$.utils.getCookie =  function (name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
    };

    $$.utils.deleteCookie = function ( name, path, domain ) {
        if( $$.utils.getCookie( name ) ) {
            document.cookie = name + "=" +
              ((path) ? ";path="+path:"")+
              ((domain)?";domain="+domain:"") +
              ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
        }
    };


    // Promises

    $$.Promises = $$.Promises || {};


    $$.Promises.Deferred = function () {
        var _self = this;
        this.resolve = null;
        this.reject = null;
        this.promise = new Promise(function (resolve, reject) {
            _self.resolve = resolve;
            _self.reject = reject;
        });
    };

    $$.Promises.amznSlotsPromise = new $$.Promises.Deferred();
    $$.Promises.wfxtgPromise = new $$.Promises.Deferred();
    $$.Promises.criteoPromise = new $$.Promises.Deferred();
    $$.Promises.weatherDataPromise = new $$.Promises.Deferred();
    
    
    $$.Promises.loadAds = new Event('load-ads');

    $$.Promises.jsonReady = $$.utils.loadJSON('/js-src/ads/adsMetricsMaps.json',$$, 'adsMetricsMaps');
    $$.Promises.jsonReady.promise.then(function() {
        var locale = location.href.match(/[a-z]{2}-[A-Z]{2}/);
        locale = locale && locale[0] || 'en-US';
        $$.metricsAcct = ((location.href.match(/dev/) || location.href.match(/localhost/)) && "twcdev") ||
                         ($$.adsMetricsMaps.localeToAdUnitMap[locale] &&
                          $$.adsMetricsMaps.localeToAdUnitMap[locale].metrics) || "twcigls";
    });

})(AdsMetricsCtrl);



