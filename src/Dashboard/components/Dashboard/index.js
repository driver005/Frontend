import React from 'react'
import { Rowcomponent } from '../../../styles/dashboard'
import Widget from '../Widget/Widget'
import Corona from './corona'
import Littlecomponents from './Littlecomponents'
import WeatherWidget from './widget'

function Dash() {
    return (
        <React.Fragment>
        <Rowcomponent>
            <Littlecomponents />
        </Rowcomponent>
        <Rowcomponent>
            <Corona />
        </Rowcomponent>
        
            <Widget
                    title={<h6 style={{marginLeft: '10px'}}>Weather Tübingen</h6>}
                    close
                    collapse    
                >
                    <WeatherWidget />
            </Widget>
        </React.Fragment>
    )
}

export default Dash
