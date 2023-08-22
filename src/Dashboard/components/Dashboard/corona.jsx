import React, { useEffect, useState } from 'react'
import Loading from '../../../components/LoadingAnimation';
import Littlecomponent from './Little';
import numeral from 'numeral';
import axios from 'axios';

function Corona() {
    const [countryInfo, setCountryInfo] = useState({});
    
    useEffect(() => {
        axios("https://disease.sh/v3/covid-19/all")
        .then((response) => response.data)
        .then((data) => {
            setCountryInfo(data);
        });
    }, []);
    
    if (!countryInfo) return <Loading />;
    
    return (
        <React.Fragment>
            <Littlecomponent 
                name={"Corona cases all"} 
                statenames={[
                    'Cases',
                    'Deaths',
                    'Recovered',

                ]}
                statevalues={[
                    countryInfo.cases,
                    countryInfo.deaths,
                    countryInfo.recovered
                ]}  
                noprocent={true}
                nomoney={true}
            />
            <Littlecomponent 
                name={"Corona today"} 
                statenames={[
                    'Cases today',
                    'Deaths today',
                    'Recovered today',

                ]}
                statevalues={[
                    countryInfo.todayCases,
                    countryInfo.todayDeaths,
                    countryInfo.todayRecovered
                ]}  
                noprocent={true}
                nomoney={true}
            />
            <Littlecomponent 
                name={"Corona per one million"} 
                statenames={[
                    'Cases per one million',
                    'Deaths per one million',
                    'Recovered per one million',

                ]}
                statevalues={[
                    countryInfo.casesPerOneMillion,
                    countryInfo.deathsPerOneMillion,
                    countryInfo.recoveredPerOneMillion
                ]}  
                noprocent={true}
                nomoney={true}
            />
        </React.Fragment>
    )
}

export default Corona