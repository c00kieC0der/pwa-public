
//window.renderStartTime = new Date().getTime();
window.TWC = window.TWC || {};
window.renderStartTime = new Date().getTime();
TWC.adUtils = TWC.adUtils || {};

TWC.Deferred = function() {
    var _self = this;
    this.resolve = null;
    this.reject = null;
    this.promise = new Promise(function(resolve, reject) {
        _self.resolve = resolve;
        _self.reject = reject;
    });
};

TWC.adUtils.amznSlotsPromise = new TWC.Deferred();
TWC.adUtils.wxftgPromise = new TWC.Deferred();
TWC.adUtils.criteoPromise = new TWC.Deferred();
TWC.adUtils.weatherDataPromise = new TWC.Deferred();

function jsonp(url, callback) {
    var head = document.getElementsByTagName('head')[0];
    var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    window[callbackName] = function(data) {
        callback(data);
    };

    var script = document.createElement('script');
    script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
    head.appendChild(script);
}

function loadScript(url, callback) {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            callback();
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();}


window.googletag = window.googletag || {};
googletag.cmd = googletag.cmd || [];
window.ls_dfp_slots = window.ls_dfp_slots || [];


TWC.adUtils.addLoadEvent = function(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
};
