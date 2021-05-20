import React from 'react'
import { useHistory } from 'react-router'
import './styles.css'

function PageError() {
    const history = useHistory()

    return (
        <div className="main">
            <h1 className="h1-error" contentEditable>4
                <div className="shine-3"></div>
                <div className="shine-4"></div>
            </h1>
            <h1 style={{left: "70.5%"}} className="h1-error" contentEditable>4
                <div className="shine-3"></div>
                <div className="shine-4"></div>
            </h1>
            <div className="stars-container">
                <div className="stars">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="stars">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="stars">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="stars">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="stars">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="stars-2"></div>
                <div className="stars-2"></div>
                <div className="stars-2"></div>
                <div className="stars-2"></div>
                <div className="stars-2"></div>
                <div className="stars-2"></div>
            </div>

            <div className="moon-404"></div>

            <div className="planet-container">
                <div className="planet-ring2"></div>
                <div className="planet"></div>
                <div className="shine"></div>
                <div className="shine-2"></div>
                <div className="planet-ring"></div>
                <div className="planet-crater"></div>
            </div>

            <div className="meteor-container">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className="meteor-container-2">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className="meteor-container-3">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className="meteor-container-4">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <p className="p1">Hmmm...</p>
            <p className="p2">It looks like one of the developers fell asleep</p>
            <form className="form-back-home">
                <button className="button-back-home" onClick={() => history.push('/')}>Go back to home screen</button>
            </form>
        </div>
    )
}

export default PageError
