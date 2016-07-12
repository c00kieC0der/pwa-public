
window.renderStartTime = new Date().getTime();

window.AdCtrl = window.AdCtrl || {};
AdCtrl.utils = AdCtrl.utils || {};

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
})(AdCtrl);



