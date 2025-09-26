import React from 'react';
import './styles.css';
import vdi from '../../images/VDI.png';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function About() {
    return (
        <section className='section about-section gray-bg' id='about'>
            <div className='container'>
                <div className='row align-items-center justify-content-around flex-row-reverse'>
                    <div className='col-lg-6 justify-content-center d-flex flex-wrap'>
                        <div className='about-text'>
                            <small className='text-uppercase' style={{ color: '#9B5DE5' }}>
                                About us
                            </small>
                            <h3 className='dark-color mt-3 mb-2'>Whats the teclab</h3>
                            <p>
                                teclab is a place for students to meet after school at the{' '}
                                <a
                                    className='underline'
                                    href='https://www.wildermuth-gymnasium.de/'
                                    target='_blank'>
                                    <span>Wildermuth-Gymnasiums Tübingen</span>
                                </a>{' '}
                                in the rooms 134 and 132.
                            </p>
                            <p>
                                Students have the possibilities to make connections with other
                                students, work on projects, eat something, make homework or
                                listen to presentations.
                            </p>
                        </div>
                        <Button
                            as={Link}
                            // to='/contact'
                            to='mailto:sfz.teclab@vdi.de'
                            variant='outline-primary mt-4'
                            size='lg'
                            block
                            style={{ width: '40%' }}>
                            Contact Us
                        </Button>
                    </div>
                    <div className='col-lg-5 text-center'>
                        <div className='about-img'>
                            <img src={vdi} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
