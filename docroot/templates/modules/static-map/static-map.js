var map = window._map = new wx.maps.Map(document.getElementsByClassName('static-map')[0], new wx.maps.MapOptions({
    zoomLevel: 7,
    latitude: _User.activeLocation.lat,
    longitude: _User.activeLocation.long
}));

window.addLayer = function (index) {
    var layer = map.createLayer(new wx.layers.SunTileLayerOptions(layers[index]));
    map.stack[1] && map.removeLayer(map.stack[1]);
    map.addLayer(layer);
    $("input").each(function (i, el) {
        var $el = $(el);
        $el.css('display', ($el.val() == layer.options.layerKey) ? 'none' : 'block');
    });
};

        var layers = [{
            id: "SUN Radar Observation",
            layerKey: "radar",
            value: "Radar",
            active: true,
            version: "2"
        }, {
            id: "SUN Clouds Observation",
            layerKey: "ussat",
            value: "Clouds",
            active: false,
            version: "2"
        }, {
            id: "SUN Radar/Clouds Observation",
            layerKey: "satrad",
            value: "Radar / Clouds",
            active: false,
            version: "2"
        }];

    document.getElementById('event-anchor').addEventListener('builder', function() {





        map.configuration.mapboxAccessToken = "pk.eyJ1Ijoid2VhdGhlciIsImEiOiJjaWlxNG01czkwMjM2dnFtNTdlMjVidTByIn0.Ml63Jx_BQtTx4CEXihwjyA";
        map.configuration.sunTileProductsUrl = "//api.weather.com/v2/TileServer/series?apiKey={apiKey}";
        map.configuration.sunApiKey = "3d498bd0777076fb2aa967aa67114c7e";

// Base Layer
        var baseLayer = map.createLayer(new wx.layers.MapboxTileLayerOptions({
            id: "Mapbox Streets",
            mapBoxId: "mapbox.streets",
            minimumZoom: 0,
            maximumZoom: 19
        }));
        map.addLayer(baseLayer);
        addLayer(0);
    });
