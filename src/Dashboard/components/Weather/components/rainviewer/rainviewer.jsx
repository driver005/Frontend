import moment from "moment";
import "./rainviewer.css"

L.Control.Rainviewer = L.Control.extend({
    options: {
        position: 'bottomleft',
        nextButtonText: '>',
        playStopButtonText: 'Play/Stop',
        prevButtonText: '<',
        positionSliderLabelText: "Hour:",
        opacitySliderLabelText: "Opacity:",
        animationInterval: 500,
        opacity: 0.5
    },

    onAdd: function (map) {
        /**
         * RainViewer radar animation part
         * @type {number[]}
        */

        this.timestamps = [];
        this.radarLayers = [];

        this.currentTimestamp;
        this.nextTimestamp;

        this.animationPosition = 0;
        this.animationTimer = false;

        this.paused;

        this.rainviewerActive = false;

        this._map = map;

        this.container = L.DomUtil.create('div', 'leaflet-control-rainviewer leaflet-bar leaflet-control');

        var t = this;
        this.apiRequest = new XMLHttpRequest();
        this.apiRequest.open("GET", "https://tilecache.rainviewer.com/api/maps.json", true);
        this.apiRequest.onload = function (e) {

            // save available this.timestamps and show the latest frame: "-1" means "timestamp.lenght - 1"
            t.timestamps = JSON.parse(t.apiRequest.response);

            t.showFrame(-1);
        };
        this.apiRequest.send();

        /**
         * Animation functions
         * @param ts
         */

        //L.DomUtil.addClass(this.container, 'leaflet-control-rainviewer-active');

        this.controlContainer = L.DomUtil.create('div', 'map-buttons-play-center', this.container);

        this.prevButton = L.DomUtil.create('input', 'rainviewer-input rainviewer-input-main rainviewer-button-left btn', this.controlContainer);
        this.prevButton.type = "button";
        //this.prevButton.value = this.options.prevButtonText;
        L.DomEvent.on(this.prevButton, 'click', t.prev, this);
        L.DomEvent.disableClickPropagation(this.prevButton);

        this.startstopButton = L.DomUtil.create('input', `rainviewer-input play-button rainviewer-input-main with-text`, this.controlContainer);
        this.startstopButton.type = "button";
        this.startstopButton.value = moment(this.nextTimestamp * 1000).format('LT');
        this.startstopButton.id = 'rainviewer-button-playing'
        L.DomEvent.on(this.startstopButton, 'click', t.startstop, this);
        L.DomEvent.disableClickPropagation(this.startstopButton);

        this.nextButton = L.DomUtil.create('input', 'rainviewer-input rainviewer-input-main rainviewer-button-right btn', this.controlContainer);
        this.nextButton.type = "button";
        //this.nextButton.value = this.options.nextButtonText;
        L.DomEvent.on(this.nextButton, 'click', t.next, this);
        L.DomEvent.disableClickPropagation(this.nextButton);

        this.closeButton = L.DomUtil.create('div', 'leaflet-control-rainviewer-close', this.container);
        L.DomEvent.on(this.closeButton, 'click', t.unload, this);

        return this.container;

        /*return this.load(map);*/


    },

    unload: async function (e) {
        if (this.animationTimer) await this.playStop()
        L.DomUtil.remove(this.controlContainer);
        L.DomUtil.remove(this.closeButton);
        L.DomUtil.removeClass(this.container, 'leaflet-control-rainviewer-active');

        var radarLayers = await this.radarLayers;
        var map = await this._map;
        Object.keys(radarLayers).forEach(function (key) {
            if (map.hasLayer(radarLayers[key])) {
                map.removeLayer(radarLayers[key]);
            }
        });
    },

    addLayer: function (ts) {
        var map = this._map;
        if (!this.radarLayers[ts]) {
            this.radarLayers[ts] = new L.TileLayer('https://tilecache.rainviewer.com/v2/radar/' + ts + '/256/{z}/{x}/{y}/2/1_1.png', {
                tileSize: 256,
                opacity: 0.001,
                transparent: true,
                attribution: '<a href="https://rainviewer.com" target="_blank">rainnviewer.com</a>',
                zIndex: ts
            });
        }
        if (!map.hasLayer(this.radarLayers[ts])) {
            map.addLayer(this.radarLayers[ts]);
        }
    },

    /**
     * Display particular frame of animation for the @position
     * If preloadOnly parameter is set to true, the frame layer only adds for the tiles preloading purpose
     * @param position
     * @param preloadOnly
     */
    changeRadarPosition: function (position, preloadOnly) {
        while (position >= this.timestamps.length) {
            position -= this.timestamps.length;
        }
        while (position < 0) {
            position += this.timestamps.length;
        }

        this.currentTimestamp = this.timestamps[this.animationPosition];
        this.nextTimestamp = this.timestamps[position];

        this.addLayer(this.nextTimestamp);

        if (preloadOnly) {
            return;
        }

        this.animationPosition = position;
        //this.positionSlider.value = position;

        if (this.radarLayers[this.currentTimestamp]) {
            this.radarLayers[this.currentTimestamp].setOpacity(0);
        }
        this.radarLayers[this.nextTimestamp].setOpacity(this.options.opacity);

        if (document.getElementsByClassName("play-button")[0]) document.getElementsByClassName("play-button")[0].value = moment(this.nextTimestamp * 1000).format('LT');

    },

    /**
     * Check avialability and show particular frame position from the this.timestamps list
     */
    showFrame: function (nextPosition) {
        var preloadingDirection = nextPosition - this.animationPosition > 0 ? 1 : -1;

        this.changeRadarPosition(nextPosition);

        // preload next next frame (typically, +1 frame)
        // if don't do that, the animation will be blinking at the first loop
        this.changeRadarPosition(nextPosition + preloadingDirection, true);
    },

    /**
     * Stop the animation
     * Check if the animation timeout is set and clear it.
     */
    setOpacity: function (e) {
        if (this.radarLayers[this.currentTimestamp]) {
            this.radarLayers[this.currentTimestamp].setOpacity(e.srcElement.value / 100);
        }
    },

    setPosition: function (e) {
        this.showFrame(e.srcElement.value)
    },

    stop: function () {
        if (this.animationTimer) {
            clearTimeout(this.animationTimer);
            this.animationTimer = false;
            return true;
        }
        return false;
    },

    play: function () {
        this.showFrame(this.animationPosition + 1);

        // Main animation driver. Run this function every 500 ms
        this.animationTimer = setTimeout(function () { this.play() }.bind(this), this.options.animationInterval);
    },

    playStop: function () {
        if (!this.stop()) {
            if (document.getElementsByClassName("play-button")[0]) document.getElementsByClassName("play-button")[0].id = 'rainviewer-button-paused'
            this.play();
        } else {
            if (document.getElementsByClassName("play-button")[0]) document.getElementsByClassName("play-button")[0].id = 'rainviewer-button-playing'
        }
    },

    prev: function (e) {
        L.DomEvent.stopPropagation(e);
        L.DomEvent.preventDefault(e);
        this.stop();
        this.showFrame(this.animationPosition - 1);
        return
    },

    startstop: function (e) {
        L.DomEvent.stopPropagation(e);
        L.DomEvent.preventDefault(e);
        this.playStop()

    },

    next: function (e) {
        L.DomEvent.stopPropagation(e);
        L.DomEvent.preventDefault(e);
        this.stop();
        this.showFrame(this.animationPosition + 1);
        return
    },

    onRemove: function (map) {
        // Nothing to do here
    }
});

L.rainviewer = function (opts) {
    return new L.Control.Rainviewer(opts);
}