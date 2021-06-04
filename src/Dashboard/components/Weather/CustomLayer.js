import { useEffect } from "react";
import { useMap } from "react-leaflet";
import PropTypes from "prop-types";
import L from "leaflet";
//import data from "./wind-global.json"
import "leaflet-velocity"
import "leaflet-openweathermap"
import "./components/rainviewer/rainviewer"
import "./components/control/control"
import * as api from '../../../api'

const CustomLayer = () => {
    const map = useMap();
    useEffect(() => {
        // api.weatherLatest().then((data) => {
        //     var velocityLayer = L.velocityLayer({
        //         displayValues: true,
        //         displayOptions: {
        //         velocityType: "Global Wind",
        //         position: "bottomleft",
        //             emptyString: "No wind data"
        //         },
        //         nearest: 'https://localhost/api/weather/nearest',
        //         latest: 'https://localhost/api/weather/latest',
        //         data: data.data,
        //         maxVelocity: 15
        //     });
        //     velocityLayer.addTo(map);
        // })

            var clouds = L.OWM.precipitationClassic({showLegend: false, opacity: 0.5, appId: 'f99be3d016f40b82ae651c29c47cafab'});
        var city = L.OWM.current({ intervall: 15, lang: 'de' });
        L.ControlOverlay().addTo(map);
    }, [map]);
    return null;
};


export default CustomLayer;
