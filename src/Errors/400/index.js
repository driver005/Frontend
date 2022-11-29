import React from 'react'
import { useNavigate } from 'react-router'
import './styles.css'
import error from './images/404.svg'
import { default as astronaut } from '!file-loader!./images/astronaut.svg'
import earth from './images/earth.svg'
import moon from './images/moon.svg'
import rocket from './images/rocket.svg'

function PageError() {
    const history = useNavigate()

    return (
        <main className="main">
            <div className="stars">
                <div className="central-body">
                    <img className="image-404" src={error} width="300px" />
                    <a href="/" className="btn-go-home">GO BACK HOME</a>
                </div>
                <div className="objects">
                    <img className="object_rocket" src={rocket} width="40px" />
                    <div className="earth-moon">
                        <img className="object_earth" src={earth} width="100px" />
                        <img className="object_moon" src={moon} width="80px" />
                    </div>
                    <div className="box_astronaut">
                        <img className="object_astronaut" src={astronaut} width="140px" />
                    </div>
                </div>
                <div className="glowing_stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                </div>
            </div>
        </main>
    )
}

export default PageError
