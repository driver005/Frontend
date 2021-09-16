import React from 'react'
import "./styles.css"
import vdi from "../../images/VDI.png"
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
function About() {
    return (
        <section class="section about-section gray-bg" id="about">
            <div class="container">
                <div class="row align-items-center justify-content-around flex-row-reverse">
                    <div class="col-lg-6 justify-content-center d-flex flex-wrap">
                        <div class="about-text">
                            <small class="text-uppercase" style={{color: "#9B5DE5"}}>About us</small>
                            <h3 class="dark-color mt-3 mb-2">Whats the teclab</h3>
                            <p>teclab is a place for students to meet after school at the <a className="underline" href="https://www.wildermuth-gymnasium.de/" target="_blank"><span>Wildermuth-Gymnasiums Tübingen</span></a> in the rooms 132 and 132.</p>
                            <p>Students have the possibilities to make connections with other students, work on projects, eat something, make homework or listen to presentations.</p>
                        </div>
                        <Button as={Link} to="/contact" variant="outline-primary mt-4" size="lg" block style={{width: "40%"}}>Contact Us</Button>
                    </div>
                    <div class="col-lg-5 text-center">
                        <div class="about-img">
                            <img src={vdi}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
