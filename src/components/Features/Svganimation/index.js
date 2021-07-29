import React from 'react'
import { Tween, Timeline } from 'react-gsap'
import out from '../../../images/vex.png'

import './styles.css'

function Vexsvg() {
    return (
        <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
        <Tween
            to={{
                rotation: '+=360',
                transformOrigin: '50% 50%'
            }}
            ease={'linear'}
            duration={20}
            repeat={-1}
        >
            <g>
            <image width="400" height="400" xlinkHref={out} />
            </g>
        </Tween>
        
        </svg>
    )
}

export default Vexsvg
