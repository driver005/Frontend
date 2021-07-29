import React, { useState, useEffect, useRef, createRef } from 'react'
import { MapContainer, TileLayer, Tooltip, CircleMarker, GeoJSON, Circle, LayerGroup, useMap, LayersControl,} from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import CustomLayer from './CustomLayer'
import Control from './control';
import "./styles.css"
import { FormControl } from 'react-bootstrap';
import moment from 'moment';
import { RiArrowDropLeftFill, RiArrowDropRightFill, BsPlay, BsPause } from "react-icons/all"
import Loading from '../../../components/LoadingAnimation';
import { useSelector } from 'react-redux';
import Widget from '../Widget/Widget';

function Weather() {
    const Map = useRef(null)
    const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
    const [mapZoom, setMapZoom] = useState(3);
    const [useLightMode, setUseLightMode] = useState(false);
    const data = useSelector(state => state.weather)
    if (!data?.location) return <Loading />;

    return (
        <div>
            <MapContainer className="map-weather" center={mapCenter} zoom={mapZoom} >
                <TileLayer
                    attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url={useLightMode ? 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png' : 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'}
                />
                <CustomLayer />
            </MapContainer>
        </div>
    )
}

export default Weather
