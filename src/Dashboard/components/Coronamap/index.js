import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Tooltip, CircleMarker, GeoJSON, Circle } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import "./styles.css"
import geojson from "./countries.json"
import numeral from 'numeral'
import InfoBox from './Infobox'
import axios from 'axios'
import { Button, FormControl, Jumbotron, Row } from 'react-bootstrap'
import { RiBubbleChartLine } from "react-icons/ri"
import { BsGrid3X3GapFill } from "react-icons/bs"
import Loading from '../../../components/LoadingAnimation'
import Control from './control';

function CoronaTracker() {
    const [country, setInputCountry] = useState("worldwide");
    const [countryInfo, setCountryInfo] = useState({});
    const [countries, setCountries] = useState([]);
    const [mapCountries, setMapCountries] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [casesType, setCasesType] = useState("cases");
    const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
    const [mapZoom, setMapZoom] = useState(3);
    const [useLightMode, setUseLightMode] = useState(false);
    const [useMapType, setMapType] = useState("choropleth")
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios("https://disease.sh/v3/covid-19/all")
        .then((response) => response.data)
        .then((data) => {
            setCountryInfo(data);
        });
    }, []);


    useEffect(() => {
        const getCountriesData = async () => {
            axios("https://disease.sh/v3/covid-19/countries")
            .then((response) => response.data)
            .then((data) => {
                const countries = data.map((country) => ({
                    name: country.country,
                    value: country.countryInfo.iso2,
                }));
                let sortedData = sortData(data);
                setCountries(countries);
                setMapCountries(data);
                setTableData(sortedData);
                setLoading(false)
            });
        };

        getCountriesData();
    }, []);

    const onCountryChange = async (e) => {
        const countryCode = e.target.value;
        console.log(countryCode)
        const url =
            countryCode === "worldwide"
                ? "https://disease.sh/v3/covid-19/all"
                : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
        await axios(url)
            .then((response) => response.data)
            .then((data) => {
                setInputCountry(countryCode);
                setCountryInfo(data);
                if(data.countryInfo) setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
                setMapZoom(4);
        });
    };

    const style = (feature) => {
        return {
            weight: 2,
            opacity: 1,
            color: useLightMode ? 'black' : 'white',
            dashArray: '3',
            fillOpacity: 0.7,
            fillColor: getColor(feature.properties.ISO_A3)
        };
    }

    const color = (number) => {
        return casesType === "deaths" ?
                number > 100000 ? '#800026' :
                number > 75000   ? '#bd0026' :
                number > 50000   ? '#e31a1c' :
                number > 25000    ? '#fc4e2a' :
                number > 10000    ? '#fd8d3c' :
                number > 5000     ? '#feb24c' :
                number > 1000      ? '#fed976' :
                number >= 1      ? '#ffffcc' :
                'darkgreen' : casesType === "recovered" ?
                number > 100000 ? '#008000' :
                number > 75000   ? '#00bd26' :
                number > 50000   ? '#1ae31c' :
                number > 25000    ? '#4efc2a' :
                number > 10000    ? '#79fd3c' :
                number > 5000     ? '#b2fe4c' :
                number > 1000      ? '#d9fe76' :
                number >= 1      ? '#ffffcc' :
                'darkred' :
                number > 100000 ? '#260080' :
                number > 75000   ? '#2600bd' :
                number > 50000   ? '#1c1ae3' :
                number > 25000    ? '#2a4efc' :
                number > 10000    ? '#3c8dfd' :
                number > 5000     ? '#4cb2fe' :
                number > 1000      ? '#76d9fe' :
                number >= 1      ? '#ccffff' :
                'darkgreen'
    }

    const getColor = (provinceIso) => {
        let infectionCount = 0;
        let recoveredCount = 0;
        let deathCount = 0;
        let data = mapCountries[mapCountries.findIndex(data => data.countryInfo.iso3 === provinceIso)];
        if(data) {
            infectionCount = data.cases;
            recoveredCount = data.recovered;
            deathCount = data.deaths;
        }
        return color(casesType === "deaths" ? deathCount : casesType === "recovered" ? recoveredCount : infectionCount)
    }

    const sortData = (data) => {
        let sortedData = [...data];
        sortedData.sort((a, b) => {
            if (a.cases > b.cases) {
            return -1;
            } else {
            return 1;
            }
        });
        return sortedData;
    };

    const prettyPrintStat = (stat) => stat ? `+${numeral(stat).format("0.0a")}` : "+0";

    const isConsideredMobile = () => {
        var check = false;
        if (typeof window !== 'undefined') {
            (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)) || (window.innerWidth <= 720)) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
        }
        return check;
    };

    const Circels = ({ data }) => {
        const maxRadius = isConsideredMobile() ? 30 : 80;
        const minRadius = isConsideredMobile() ? 10 : 15;
        const radiusDelta = maxRadius - minRadius;
        const multiplier = 2.4
        return(
        data.map(country => (
            <Circle
                center={[country.countryInfo.lat, country.countryInfo.long]}
                color={getColor(country.countryInfo.iso3)}
                radius={Math.sqrt(country[casesType]) * multiplier * radiusDelta}
            >
                <Tooltip
                    sticky
                    className={"leaflet-tooltip our-tooltip white-monospace leaflet-zoom-animated leaflet-tooltip-right"}
                >
                    <div className="info-container">
                        <div className="info-flag-container">
                            <img className="info-flag" src={`${country.countryInfo.flag}`}></img>
                        </div>
                        <div className="info-name">{country.country}</div>
                        <div className="info-confirmed">Cases: {numeral(country.cases).format("0,0")}</div>
                        <div className="info-recovered">Recovered: {numeral(country.recovered).format("0,0")}</div>
                        <div className="info-deaths">Deaths: {numeral(country.deaths).format("0,0")}</div>
                    </div>
                </Tooltip>
            </Circle>
        ))
    )}

    const onEachFeature = (feature, layer) => {
        if (feature.properties && feature.properties.ADMIN) {
            let provinceCases = 0;
            let provinceRecoveres = 0;
            let provinceDeaths = 0;
            let provinceFlag = null;
            let provinceIso = feature.properties.ISO_A3;
            let province = feature.properties.ADMIN;
            let data = mapCountries[mapCountries.findIndex(data => data.countryInfo.iso3 === provinceIso)];
            
            if (data) {
                provinceCases = data.cases
                provinceRecoveres = data.recovered
                provinceDeaths = data.deaths
                provinceFlag = data.countryInfo.flag
                province = data.country
            }
            layer.bindTooltip(`
                <div class="info-container">
                    <div class="info-flag-container">
                        <img class="info-flag" src="${provinceFlag}"></img>
                    </div>
                    <div class="info-name">${province}</div>
                    <div class="info-confirmed">Cases: ${numeral(provinceCases).format("0,0")}</div>
                    <div class="info-recovered">Recovered: ${numeral(provinceRecoveres).format("0,0")}</div>
                    <div class="info-deaths">Deaths: ${numeral(provinceDeaths).format("0,0")}</div>
                </div>
                `, {
                sticky: true,
                className: "our-tooltip white-monospace",
                direction: "auto",
            });
        }
    }

    const getNextMapType = (mapType) => {
        switch(mapType) {
        case "bubble":
            return "choropleth";
        case "choropleth":
            return "bubble";
        default:
            return "bubble";
        }
    }

    const switchToNextMapType = () => {
        let newNextMapType = getNextMapType(useMapType);
        setMapType(newNextMapType);
    }

    if(loading) return <Loading />
    return (
        <div>
            <Row className="app__header">
                <h5 className="country-name">
                    {countryInfo.country || 'Worldwide'}
                </h5>
                <FormControl
                    as="select"
                    value={country}
                    onChange={onCountryChange}
                    variant="secondary"
                    className="info-select"
                >
                    <option value="worldwide">Worldwide</option>
                    {countries.map((country) => (
                        <option value={country.value}>{country.name}</option>
                    ))}
                </FormControl>
            </Row>
            <div className="app__stats">
                <InfoBox
                    onClick={(e) => setCasesType("cases")}
                    title="Coronavirus Cases"
                    isRed
                    active={casesType === "cases"}
                    cases={prettyPrintStat(countryInfo.todayCases)}
                    total={numeral(countryInfo.cases).format("0.0a")}
                />
                <InfoBox
                    onClick={(e) => setCasesType("recovered")}
                    title="Recovered"
                    active={casesType === "recovered"}
                    cases={prettyPrintStat(countryInfo.todayRecovered)}
                    total={numeral(countryInfo.recovered).format("0.0a")}
                />
                <InfoBox
                    onClick={(e) => setCasesType("deaths")}
                    title="Deaths"
                    isRed
                    active={casesType === "deaths"}
                    cases={prettyPrintStat(countryInfo.todayDeaths)}
                    total={numeral(countryInfo.deaths).format("0.0a")}
                />
            </div>
            <MapContainer className="map" center={mapCenter} zoom={mapZoom}>
                <Control position="topright">
                    <Button onClick={() => switchToNextMapType()} className="map-control-button" variant="dark">
                        {useMapType === "bubble" ? <RiBubbleChartLine size={24} /> : <BsGrid3X3GapFill size={24} />}
                    </Button>
                </Control>
                <Control position="bottomright">
                    <Jumbotron className="legendcontainer" style={{padding: '10px'}}>
                        {[
                            100000,
                            75000,
                            50000,
                            25000,
                            10000,
                            5000,
                            1000,
                            1
                        ].map(( data, index ) => (   
                            <h6 key={index} className="legendinfo">
                                <div className="colorbox" style={{backgroundColor: `${color(data)}`}} />
                                {data}
                                +
                            </h6>
                        ))}
                    </Jumbotron>
                </Control>
                <TileLayer
                    attribution='Data by <a href="https://disease.sh/">disease</a> | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url={useLightMode ? 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png' : 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'}
                />
                {useMapType === "choropleth" && <GeoJSON style={style} data={geojson} onEachFeature={onEachFeature} />}
                {useMapType === "bubble" && <Circels data={mapCountries} /> }
                
            </MapContainer>
        </div>
    )
}   

export default CoronaTracker
