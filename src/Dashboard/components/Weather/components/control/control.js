import "../rainviewer/rainviewer"
import "leaflet-openweathermap"
import * as api from "../../../../../api";

L.Control.ControlOverlay = L.Control.extend({
    options: {
        position: 'topright'
    },
    
    initialize: function (options) {
        L.Util.setOptions(this, options);
        // Continue initializing the control plugin here.
    },


    onAdd: function(map) {

        this._map = map;

        this.Layers = []

        this.raincomponent = null;
        this.velocityLayer = null;
        this.cloudsclscomponent = null;
        this.precipitationcomponent = null;
        this.precipitationclscomponent = null;
        this.rainowmcomponent = null;
        this.rainclscomponent = null;
        this.snowcomponent = null;
        this.pressurecomponent = null;
        this.pressurecntrcomponent = null;
        this.tempcomponent = null;
        this.windowmcomponent = null;

        this.controlElement = L.DomUtil.create('div', 'map-control-layers map-control-layers-main leaflet-control');

        this.controlElementlist = L.DomUtil.create('div', 'map-control-layers-list', this.controlElement);

        this.controlElementoverlay = L.DomUtil.create('div', 'map-control-layers-overlays map-control-layers-last', this.controlElementlist);

        this.container = L.DomUtil.create('div', 'map-layer-container', this.controlElementoverlay);

        this.input = L.DomUtil.create('input', 'map-control-layers-selector', this.container);
        this.input.type = "button";
        this.input.value = "Rain Radar";
        this.input.id = "Rain Radar";
        this.input.name = "Parameters";
        L.DomEvent.on(this.input, 'click', this.rain, this);

        this.container = L.DomUtil.create('div', 'map-layer-container', this.controlElementoverlay);

        this.input = L.DomUtil.create('input', 'map-control-layers-selector', this.container);
        this.input.type = "button";
        this.input.value = "Wind";
        this.input.id = "Wind";
        this.input.name = "Parameters";
        L.DomEvent.on(this.input, 'click', this.wind, this);
        
        this.component("Clouds", this.clouds)
        this.component("Clouds Classic", this.cloudscls)
        this.component("Precipitation", this.precipitation)
        this.component("Precipitation Classic", this.precipitationcls)
        this.component("Rain", this.rainowm)
        this.component("Rain Classic", this.raincls)
        this.component("Snow", this.snow)
        this.component("Pressure", this.pressure)
        this.component("Pressure Contour", this.pressurecntr)
        this.component("Temperature", this.temp)
        this.component("Wind", this.windowm)

        return this.controlElement;
    },

    component: function (name, functions) {
        this.container = L.DomUtil.create('div', 'map-layer-container', this.controlElementoverlay);

        this.input = L.DomUtil.create('input', 'map-control-layers-selector', this.container);
        this.input.type = "button";
        this.input.value = name;
        this.input.id = name;
        this.input.name = "Parameters";
        L.DomEvent.on(this.input, 'click', functions, this);

        return this.container
    },

    check: function () {
        var map = this._map


        if (this.pressurecomponent) map.removeLayer(this.pressurecomponent);
        if (this.pressurecntrcomponent) map.removeLayer(this.pressurecntrcomponent);
        if (this.tempcomponent) map.removeLayer(this.tempcomponent);
        if (this.windowmcomponent) map.removeLayer(this.windowmcomponent);
    },

    rain: function (mouse) {
        var map = this._map

        if (this.raincomponent) this.raincomponent.unload()

        this.raincomponent = new L.rainviewer().addTo(map)

        if (this.velocityLayer) this.velocityLayer._destroyWind()
        if (this.cloudscomponent) map.removeLayer(this.cloudscomponent);
        if (this.cloudsclscomponent) map.removeLayer(this.cloudsclscomponent);
        if (this.precipitationcomponent) map.removeLayer(this.precipitationcomponent);
        if (this.precipitationclscomponent) map.removeLayer(this.precipitationclscomponent);
        if (this.rainowmcomponent) map.removeLayer(this.rainowmcomponent);
        if (this.rainclscomponent) map.removeLayer(this.rainclscomponent);
        if (this.snowcomponent) map.removeLayer(this.snowcomponent);
        if (this.pressurecomponent) map.removeLayer(this.pressurecomponent);
        if (this.pressurecntrcomponent) map.removeLayer(this.pressurecntrcomponent);
        if (this.tempcomponent) map.removeLayer(this.tempcomponent);
        if (this.windowmcomponent) map.removeLayer(this.windowmcomponent);


        //map.addLayer({1: this.rain})
        
        //return this.rain.addTo(map);
    },

    wind: function (mouse) {
        var map = this._map
        

        api.weatherLatest().then((data) => {
            if (this.velocityLayer) this.velocityLayer._destroyWind()
            this.velocityLayer = L.velocityLayer({
                displayValues: true,
                displayOptions: {
                velocityType: "Global Wind",
                position: "bottomleft",
                    emptyString: "No wind data"
                },
                nearest: 'https://localhost/api/weather/nearest',
                latest: 'https://localhost/api/weather/latest',
                data: data.data,
                maxVelocity: 15
            }).addTo(map);

            if (this.raincomponent) this.raincomponent.unload()
            if (this.cloudscomponent) map.removeLayer(this.cloudscomponent);
            if (this.cloudsclscomponent) map.removeLayer(this.cloudsclscomponent);
            if (this.precipitationcomponent) map.removeLayer(this.precipitationcomponent);
            if (this.precipitationclscomponent) map.removeLayer(this.precipitationclscomponent);
            if (this.rainowmcomponent) map.removeLayer(this.rainowmcomponent);
            if (this.rainclscomponent) map.removeLayer(this.rainclscomponent);
            if (this.snowcomponent) map.removeLayer(this.snowcomponent);
            if (this.pressurecomponent) map.removeLayer(this.pressurecomponent);
            if (this.pressurecntrcomponent) map.removeLayer(this.pressurecntrcomponent);
            if (this.tempcomponent) map.removeLayer(this.tempcomponent);
            if (this.windowmcomponent) map.removeLayer(this.windowmcomponent);
        })
    },

    clouds: function (mouse) {
        var map = this._map
        if (this.cloudscomponent) map.removeLayer(this.cloudscomponent);
        this.cloudscomponent = L.OWM.clouds({ appId: 'f99be3d016f40b82ae651c29c47cafab' }).addTo(map);
        if (this.raincomponent) this.raincomponent.unload()
        if (this.velocityLayer) this.velocityLayer._destroyWind()
        if (this.cloudsclscomponent) map.removeLayer(this.cloudsclscomponent);
        if (this.precipitationcomponent) map.removeLayer(this.precipitationcomponent);
        if (this.precipitationclscomponent) map.removeLayer(this.precipitationclscomponent);
        if (this.rainowmcomponent) map.removeLayer(this.rainowmcomponent);
        if (this.rainclscomponent) map.removeLayer(this.rainclscomponent);
        if (this.snowcomponent) map.removeLayer(this.snowcomponent);
        if (this.pressurecomponent) map.removeLayer(this.pressurecomponent);
        if (this.pressurecntrcomponent) map.removeLayer(this.pressurecntrcomponent);
        if (this.tempcomponent) map.removeLayer(this.tempcomponent);
        if (this.windowmcomponent) map.removeLayer(this.windowmcomponent);
    },

    cloudscls: function (mouse) {
        var map = this._map
        if (this.cloudsclscomponent) map.removeLayer(this.cloudsclscomponent);
        this.cloudsclscomponent = L.OWM.cloudsClassic({ appId: 'f99be3d016f40b82ae651c29c47cafab' }).addTo(map);
        if (this.raincomponent) this.raincomponent.unload()
        if (this.velocityLayer) this.velocityLayer._destroyWind()
        if (this.cloudscomponent) map.removeLayer(this.cloudscomponent);
        if (this.precipitationcomponent) map.removeLayer(this.precipitationcomponent);
        if (this.precipitationclscomponent) map.removeLayer(this.precipitationclscomponent);
        if (this.rainowmcomponent) map.removeLayer(this.rainowmcomponent);
        if (this.rainclscomponent) map.removeLayer(this.rainclscomponent);
        if (this.snowcomponent) map.removeLayer(this.snowcomponent);
        if (this.pressurecomponent) map.removeLayer(this.pressurecomponent);
        if (this.pressurecntrcomponent) map.removeLayer(this.pressurecntrcomponent);
        if (this.tempcomponent) map.removeLayer(this.tempcomponent);
        if (this.windowmcomponent) map.removeLayer(this.windowmcomponent);
        
    },

    precipitation: function (mouse) {
        var map = this._map
        if (this.precipitationcomponent) map.removeLayer(this.precipitationcomponent);
        this.precipitationcomponent = L.OWM.precipitation({ appId: 'f99be3d016f40b82ae651c29c47cafab' }).addTo(map);
        if (this.raincomponent) this.raincomponent.unload()
        if (this.velocityLayer) this.velocityLayer._destroyWind()
        if (this.cloudscomponent) map.removeLayer(this.cloudscomponent);
        if (this.cloudsclscomponent) map.removeLayer(this.cloudsclscomponent);
        if (this.precipitationclscomponent) map.removeLayer(this.precipitationclscomponent);
        if (this.rainowmcomponent) map.removeLayer(this.rainowmcomponent);
        if (this.rainclscomponent) map.removeLayer(this.rainclscomponent);
        if (this.snowcomponent) map.removeLayer(this.snowcomponent);
        if (this.pressurecomponent) map.removeLayer(this.pressurecomponent);
        if (this.pressurecntrcomponent) map.removeLayer(this.pressurecntrcomponent);
        if (this.tempcomponent) map.removeLayer(this.tempcomponent);
        if (this.windowmcomponent) map.removeLayer(this.windowmcomponent);
    },
        
    precipitationcls: function (mouse) {
        var map = this._map
        if (this.precipitationclscomponent) map.removeLayer(this.precipitationclscomponent);
        this.precipitationclscomponent = L.OWM.precipitationClassic({ appId: 'f99be3d016f40b82ae651c29c47cafab' }).addTo(map);
        if (this.raincomponent) this.raincomponent.unload()
        if (this.velocityLayer) this.velocityLayer._destroyWind()
        if (this.cloudscomponent) map.removeLayer(this.cloudscomponent);
        if (this.cloudsclscomponent) map.removeLayer(this.cloudsclscomponent);
        if (this.precipitationcomponent) map.removeLayer(this.precipitationcomponent);
        if (this.rainowmcomponent) map.removeLayer(this.rainowmcomponent);
        if (this.rainclscomponent) map.removeLayer(this.rainclscomponent);
        if (this.snowcomponent) map.removeLayer(this.snowcomponent);
        if (this.pressurecomponent) map.removeLayer(this.pressurecomponent);
        if (this.pressurecntrcomponent) map.removeLayer(this.pressurecntrcomponent);
        if (this.tempcomponent) map.removeLayer(this.tempcomponent);
        if (this.windowmcomponent) map.removeLayer(this.windowmcomponent);
    },
        
    rainowm: function (mouse) {
        var map = this._map
        if (this.rainowmcomponent) map.removeLayer(this.rainowmcomponent);
        this.rainowmcomponent = L.OWM.rain({ appId: 'f99be3d016f40b82ae651c29c47cafab' }).addTo(map);
        if (this.raincomponent) this.raincomponent.unload()
        if (this.velocityLayer) this.velocityLayer._destroyWind()
        if (this.cloudscomponent) map.removeLayer(this.cloudscomponent);
        if (this.cloudsclscomponent) map.removeLayer(this.cloudsclscomponent);
        if (this.precipitationcomponent) map.removeLayer(this.precipitationcomponent);
        if (this.precipitationclscomponent) map.removeLayer(this.precipitationclscomponent);
        if (this.rainclscomponent) map.removeLayer(this.rainclscomponent);
        if (this.snowcomponent) map.removeLayer(this.snowcomponent);
        if (this.pressurecomponent) map.removeLayer(this.pressurecomponent);
        if (this.pressurecntrcomponent) map.removeLayer(this.pressurecntrcomponent);
        if (this.tempcomponent) map.removeLayer(this.tempcomponent);
        if (this.windowmcomponent) map.removeLayer(this.windowmcomponent);
    },
    
    raincls: function (mouse) {
        var map = this._map
        if (this.rainclscomponent) map.removeLayer(this.rainclscomponent);
        this.rainclscomponent = L.OWM.rainClassic({ appId: 'f99be3d016f40b82ae651c29c47cafab' }).addTo(map);
        if (this.raincomponent) this.raincomponent.unload()
        if (this.velocityLayer) this.velocityLayer._destroyWind()
        if (this.cloudscomponent) map.removeLayer(this.cloudscomponent);
        if (this.cloudsclscomponent) map.removeLayer(this.cloudsclscomponent);
        if (this.precipitationcomponent) map.removeLayer(this.precipitationcomponent);
        if (this.precipitationclscomponent) map.removeLayer(this.precipitationclscomponent);
        if (this.rainowmcomponent) map.removeLayer(this.rainowmcomponent);
        if (this.snowcomponent) map.removeLayer(this.snowcomponent);
        if (this.pressurecomponent) map.removeLayer(this.pressurecomponent);
        if (this.pressurecntrcomponent) map.removeLayer(this.pressurecntrcomponent);
        if (this.tempcomponent) map.removeLayer(this.tempcomponent);
        if (this.windowmcomponent) map.removeLayer(this.windowmcomponent);
    },
    snow: function (mouse) {
        var map = this._map
        if (this.snowcomponent) map.removeLayer(this.snowcomponent);
        this.snowcomponent = L.OWM.snow({ appId: 'f99be3d016f40b82ae651c29c47cafab' }).addTo(map);
        if (this.raincomponent) this.raincomponent.unload()
        if (this.velocityLayer) this.velocityLayer._destroyWind()
        if (this.cloudscomponent) map.removeLayer(this.cloudscomponent);
        if (this.cloudsclscomponent) map.removeLayer(this.cloudsclscomponent);
        if (this.precipitationcomponent) map.removeLayer(this.precipitationcomponent);
        if (this.precipitationclscomponent) map.removeLayer(this.precipitationclscomponent);
        if (this.rainowmcomponent) map.removeLayer(this.rainowmcomponent);
        if (this.rainclscomponent) map.removeLayer(this.rainclscomponent);
        if (this.pressurecomponent) map.removeLayer(this.pressurecomponent);
        if (this.pressurecntrcomponent) map.removeLayer(this.pressurecntrcomponent);
        if (this.tempcomponent) map.removeLayer(this.tempcomponent);
        if (this.windowmcomponent) map.removeLayer(this.windowmcomponent);
    },
    pressure: function (mouse) {
        var map = this._map
        if (this.pressurecomponent) map.removeLayer(this.pressurecomponent);
        this.pressurecomponent = L.OWM.pressure({ appId: 'f99be3d016f40b82ae651c29c47cafab' }).addTo(map);
        if (this.raincomponent) this.raincomponent.unload()
        if (this.velocityLayer) this.velocityLayer._destroyWind()
        if (this.cloudscomponent) map.removeLayer(this.cloudscomponent);
        if (this.cloudsclscomponent) map.removeLayer(this.cloudsclscomponent);
        if (this.precipitationcomponent) map.removeLayer(this.precipitationcomponent);
        if (this.precipitationclscomponent) map.removeLayer(this.precipitationclscomponent);
        if (this.rainowmcomponent) map.removeLayer(this.rainowmcomponent);
        if (this.rainclscomponent) map.removeLayer(this.rainclscomponent);
        if (this.snowcomponent) map.removeLayer(this.snowcomponent);
        if (this.pressurecntrcomponent) map.removeLayer(this.pressurecntrcomponent);
        if (this.tempcomponent) map.removeLayer(this.tempcomponent);
        if (this.windowmcomponent) map.removeLayer(this.windowmcomponent);
    },
    pressurecntr: function (mouse) {
        var map = this._map
        if (this.pressurecntrcomponent) map.removeLayer(this.pressurecntrcomponent);
        this.pressurecntrcomponent = L.OWM.pressureContour({ appId: 'f99be3d016f40b82ae651c29c47cafab' }).addTo(map);
        if (this.raincomponent) this.raincomponent.unload()
        if (this.velocityLayer) this.velocityLayer._destroyWind()
        if (this.cloudscomponent) map.removeLayer(this.cloudscomponent);
        if (this.cloudsclscomponent) map.removeLayer(this.cloudsclscomponent);
        if (this.precipitationcomponent) map.removeLayer(this.precipitationcomponent);
        if (this.precipitationclscomponent) map.removeLayer(this.precipitationclscomponent);
        if (this.rainowmcomponent) map.removeLayer(this.rainowmcomponent);
        if (this.rainclscomponent) map.removeLayer(this.rainclscomponent);
        if (this.snowcomponent) map.removeLayer(this.snowcomponent);
        if (this.pressurecomponent) map.removeLayer(this.pressurecomponent);
        if (this.tempcomponent) map.removeLayer(this.tempcomponent);
        if (this.windowmcomponent) map.removeLayer(this.windowmcomponent);
    },
    temp: function (mouse) {
        var map = this._map
        if (this.tempcomponent) map.removeLayer(this.tempcomponent);
        this.tempcomponent = L.OWM.temperature({ appId: 'f99be3d016f40b82ae651c29c47cafab' }).addTo(map);
        if (this.raincomponent) this.raincomponent.unload()
        if (this.velocityLayer) this.velocityLayer._destroyWind()
        if (this.cloudscomponent) map.removeLayer(this.cloudscomponent);
        if (this.cloudsclscomponent) map.removeLayer(this.cloudsclscomponent);
        if (this.precipitationcomponent) map.removeLayer(this.precipitationcomponent);
        if (this.precipitationclscomponent) map.removeLayer(this.precipitationclscomponent);
        if (this.rainowmcomponent) map.removeLayer(this.rainowmcomponent);
        if (this.rainclscomponent) map.removeLayer(this.rainclscomponent);
        if (this.snowcomponent) map.removeLayer(this.snowcomponent);
        if (this.pressurecomponent) map.removeLayer(this.pressurecomponent);
        if (this.pressurecntrcomponent) map.removeLayer(this.pressurecntrcomponent);
        if (this.windowmcomponent) map.removeLayer(this.windowmcomponent);
    },
    windowm: function (mouse) {
        var map = this._map
        if (this.windowmcomponent) map.removeLayer(this.windowmcomponent);
        this.windowmcomponent = L.OWM.wind({ appId: 'f99be3d016f40b82ae651c29c47cafab' }).addTo(map);
        if (this.raincomponent) this.raincomponent.unload()
        if (this.velocityLayer) this.velocityLayer._destroyWind()
        if (this.cloudscomponent) map.removeLayer(this.cloudscomponent);
        if (this.cloudsclscomponent) map.removeLayer(this.cloudsclscomponent);
        if (this.precipitationcomponent) map.removeLayer(this.precipitationcomponent);
        if (this.precipitationclscomponent) map.removeLayer(this.precipitationclscomponent);
        if (this.rainowmcomponent) map.removeLayer(this.rainowmcomponent);
        if (this.rainclscomponent) map.removeLayer(this.rainclscomponent);
        if (this.snowcomponent) map.removeLayer(this.snowcomponent);
        if (this.pressurecomponent) map.removeLayer(this.pressurecomponent);
        if (this.pressurecntrcomponent) map.removeLayer(this.pressurecntrcomponent);
        if (this.tempcomponent) map.removeLayer(this.tempcomponent);
    },

    onRemove: function (map) {
        map.removeLayer()
    }
});

L.ControlOverlay = function(options) {
  return new L.Control.ControlOverlay(options);
};

