/**
 * Created by ecook on 6/30/16.
 */
//<script src="/js-src/vendor/leaflet.min.js"></script>

/*
 * Load these script async in the background.
 */

var body = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = '/js-src/vendor/leaflet.min.js';

// Then bind the event to the callback function.
// There are several events for cross browser compatibility.
script.onreadystatechange = name + 'Run';
script.onload = name + 'Run';

// Fire the loading
body.appendChild(script);
