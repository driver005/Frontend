import React from 'react'
import { useEffect } from 'react'
import './styles.css'

function PageNotFound() {
    const canvasvisor = React.useRef()
    const canvascord = React.useRef()
    const requestRef = React.useRef()

    let y1 = 160;
    let y2 = 100;
    let y3 = 100;

    let y1Forward = true;
    let y2Forward = false;
    let y3Forward = true;

    const animate = time => {
        // The 'state' will always be the initial value here
        requestRef.current = requestAnimationFrame(animate);
    }

    const visor = () => {
        const canvasctx = canvasvisor.current.getContext('2d');
        canvasctx.beginPath();
        canvasctx.moveTo(5, 45);
        canvasctx.bezierCurveTo(15, 64, 45, 64, 55, 45);
        
        canvasctx.lineTo(55, 20);
        canvasctx.bezierCurveTo(55, 15, 50, 10, 45, 10);
        
        canvasctx.lineTo(15, 10);
        
        canvasctx.bezierCurveTo(15, 10, 5, 10, 5, 20);
        canvasctx.lineTo(5, 45);
        
        canvasctx.fillStyle = '#2f3640';
        canvasctx.strokeStyle = '#f5f6fa';
        canvasctx.fill();
        canvasctx.stroke();
    }

    const cord = time => {
        
        const canvasctx = canvascord.current.getContext('2d');
        canvasctx.clearRect(0, 0, innerWidth, innerHeight);
  
        canvasctx.beginPath();
        canvasctx.moveTo(130, 170);
        canvasctx.bezierCurveTo(250, y1, 345, y2, 400, y3);
        
        canvasctx.strokeStyle = 'white';
        canvasctx.lineWidth = 8;
        canvasctx.stroke();
        
        
        if (y1 === 100) {
            y1Forward = true;
        }
        
        if (y1 === 300) {
            y1Forward = false;
        }
        
        if (y2 === 100) {
            y2Forward = true;
        }
        
        if (y2 === 310) {
            y2Forward = false;
        }
        
        if (y3 === 100) {
            y3Forward = true;
        }
        
        if (y3 === 317) {
            y3Forward = false;
        }
        
        y1Forward ? y1 += 1 : y1 -= 1;
        y2Forward ? y2 += 1 : y2 -= 1;
        y3Forward ? y3 += 1 : y3 -= 1;
        requestRef.current = requestAnimationFrame(cord);
    }

    useEffect(() => {
        visor()
        requestRef.current = requestAnimationFrame(cord);
        
        return () => cancelAnimationFrame(requestRef.current);
    }, [])

    return (
        <div className="body-404">
        <div className="mars">
            <img className="mars-img" src="https://www.svgrepo.com/show/275971/mars.svg" />
        </div>
        <div className="moon">
            <div className="moon__crater moon__crater1"></div>
            <div className="moon__crater moon__crater2"></div>
            <div className="moon__crater moon__crater3"></div>

            <div className="star star1"></div>
            <div className="star star2"></div>
            <div className="star star3"></div>
            <div className="star star4"></div>
            <div className="star star5"></div>

            <div className="error">
                <div className="error__title">404</div>
                <div className="error__subtitle">Hmmm...</div>
                <div className="error__description">It looks like one of the  developers fell asleep</div>
                <button className="error__button error__button--active">LOGIN</button>
                <button className="error__button">CONTACT</button>
            </div>

            <div className="astronaut">
                <div className="astronaut__backpack"></div>
                <div className="astronaut__body"></div>
                <div className="astronaut__body__chest"></div>
                <div className="astronaut__arm-left1"></div>
                <div className="astronaut__arm-left2"></div>
                <div className="astronaut__arm-right1"></div>
                <div className="astronaut__arm-right2"></div>
                <div className="astronaut__arm-thumb-left"></div>
                <div className="astronaut__arm-thumb-right"></div>
                <div className="astronaut__leg-left"></div>
                <div className="astronaut__leg-right"></div>
                <div className="astronaut__foot-left"></div>
                <div className="astronaut__foot-right"></div>
                <div className="astronaut__wrist-left"></div>
                <div className="astronaut__wrist-right"></div>
            
                <div className="astronaut__cord">
                    <canvas id="cord" height="500px" width="500px" ref={canvascord}></canvas>
                </div>
            
                <div className="astronaut__head">
                    <canvas id="visor" width="60px" height="60px" ref={canvasvisor}></canvas>
                    <div className="astronaut__head-visor-flare1"></div>
                    <div className="astronaut__head-visor-flare2"></div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default PageNotFound
