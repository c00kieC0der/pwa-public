
window['mapVersion'] = window['mapVersion'] ? Number(mapVersion) +1 : "2";
var mapInited = false;
var map, layers;
var runTheMap = function(){
    setTimeout(function(){


    mapInited = true;

    map = window._map = new wx.maps.Map(document.getElementsByClassName('static-map')[0], new wx.maps.MapOptions({
        zoomLevel: 7,
        latitude: _User.activeLocation.lat,
        longitude: _User.activeLocation.long
    }));

    layers = [{
        id: "SUN Radar Observation",
        layerKey: "radar",
        value: "Radar",
        active: true,
        version: mapVersion,
        opacity: ".6"
    }, {
        id: "SUN Clouds Observation",
        layerKey: "ussat",
        value: "Clouds",
        active: false,
        version: mapVersion,
        opacity: ".6"
    }, {
        id: "SUN Radar/Clouds Observation",
        layerKey: "satrad",
        value: "Radar / Clouds",
        active: false,
        version: "2",
        opacity: ".6"
    }];

    map.configuration.mapboxAccessToken = "pk.eyJ1Ijoid2VhdGhlciIsImEiOiJjaWlxNG01czkwMjM2dnFtNTdlMjVidTByIn0.Ml63Jx_BQtTx4CEXihwjyA";
    map.configuration.sunTileProductsUrl = "//api.weather.com/v2/TileServer/series?apiKey={apiKey}";
    map.configuration.sunApiKey = "3d498bd0777076fb2aa967aa67114c7e";

    window.addLayer = function (index) {
        var layer = map.createLayer(new wx.layers.SunTileLayerOptions(layers[index]));
        for(var i in map.stack){
            if(map.stack[i] !== 'Mapbox Streets' && map.stack[i] !== 'imageMarker'){
                map.removeLayer(map.stack[i]);
            }
        }
        map.addLayer(layer);
        setMarker();
    };

    // Base Layer
    var baseLayer = map.createLayer(new wx.layers.MapboxTileLayerOptions({
        id: "Mapbox Streets",
        mapBoxId: "mapbox.streets",
        minimumZoom: 0,
        maximumZoom: 19
    }));
    map.addLayer(baseLayer);
    addLayer(0);

    setMarker();
    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();
    map.dragging.disable();
    }, 300);
};

var setMarker = function(){
    // Insert a marker
    var overlayLayer = map.createLayer(new wx.layers.OverlayLayerOptions({
        id: "imageMarker"
    }));
    var image = "https://s.w-x.co/map-pin-hex-393939-v1.png";
    var point = map.geoCenter;
    var options = new wx.overlays.ImageMarkerOptions({
        size: new wx.Size(26, 33),
        title: "Image Marker",
        isClickable: false
    });
    var overlay = new wx.overlays.ImageMarker(point, image, options);
    map.addLayer(overlayLayer);
    overlayLayer.addOverlay(overlay);
};

helper.loadScript('/templates/modules/static-map/leaflet.js', runTheMap);


/*
  Handle the map drop down.
 */

var dropdownShowing = false;
var menuShowHide = function(){
    if(dropdownShowing){
        showHide('menuDropdown', 0);
        dropdownShowing = false;
        addRemoveActiveClass('menuTitle', 0);
    } else {
        showHide('menuDropdown', 1);
        dropdownShowing = true;
        addRemoveActiveClass('menuTitle', 1);
    }
};
var addRemoveActiveClass = function(ele, add){
    if(add){
        document.getElementById(ele).className += ' active';
    } else {
        document.getElementById(ele).className = document.getElementById(ele).className.replace('active', '');
    }
};
var addAMapLayer = function(layerKey){
    menuShowHide();
    addLayer(layerKey);
};


/*
 * Translations
 */
var mapTextMap = [];
var refreshMapText = function(){
    mapTextMap = [
       ["menuTitleText", helper.capitalize(_Lang.maps)],
       ["map-radar" , helper.capitalize(_Lang.radar)],
       ["map-clouds", helper.capitalize(_Lang.clouds)],
       ["map-radar-clouds", helper.capitalize(_Lang.radar) + ' & ' + helper.capitalize(_Lang.clouds)]
    ];
    helper.setContent(mapTextMap);
};
if(window['_Lang'] && _Lang.maps){
    refreshMapText();
}
document.getElementById('event-anchor').addEventListener('lang-builder', function(){
    refreshMapText();
});