import './styles.css';
import vdi from '../../common/images/VDI.png';
function About() {
    return (
        <section className='section about-section gray-bg' id='about'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='about-text'>
                            <small>
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
                        <a href="mailto:sfz.teclab@vdi.de" className="btn">Contact Us</a>
                    </div>
                    <div className='col-lg-5'>
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
