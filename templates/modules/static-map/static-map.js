(function(){
    document.getElementById('event-anchor').addEventListener('builder', function() {

var map = window._map = new wx.maps.Map(document.getElementsByClassName('static-map')[0], new wx.maps.MapOptions({
    zoomLevel: 7,
    latitude: _User.activeLocation.lat,
    longitude: _User.activeLocation.long
}));



 //our map key
map.configuration.mapboxAccessToken = "pk.eyJ1Ijoid2VhdGhlciIsImEiOiJjaWlxNG01czkwMjM2dnFtNTdlMjVidTByIn0.Ml63Jx_BQtTx4CEXihwjyA";

// create base Layer
var baseLayer = map.createLayer(new wx.layers.MapboxTileLayerOptions({
    id: "Mapbox Streets",
    mapBoxId: "mapbox.streets",
    minimumZoom: 0,
    maximumZoom: 19
}));
map.addLayer(baseLayer);
//
//// add SUN configuration
map.configuration.sunApiKey = "3d498bd0777076fb2aa967aa67114c7e";
map.configuration.sunTileProductsUrl = "//api.weather.com/v2/TileServer/series?apiKey={apiKey}";

//// Insert a SUN radar layer.
var initialLayer = map.createLayer(new wx.layers.SunTileLayerOptions({
    id: "SUN Radar Observation",
    layerKey: "radar",
    version: "2"
}));
map.addLayer(initialLayer);

//// Insert a marker
var overlayLayer = map.createLayer(new wx.layers.OverlayLayerOptions({
    id: "imageMarker",
}));
var image = "https://s.w-x.co/map-pin-hex-393939-v1.png";
var point = map.geoCenter;
var options = new wx.overlays.ImageMarkerOptions({
    size: new wx.Size(26, 33),
    title: "Image Marker",
    isClickable: true
});
var overlay = new wx.overlays.ImageMarker(point, image, options);
//
map.addLayer(overlayLayer);
overlayLayer.addOverlay(overlay);
//
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();
map.dragging.disable();

    });
})();