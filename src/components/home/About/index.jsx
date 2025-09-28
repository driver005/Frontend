import './styles.css';
import vdi from '../../common/images/VDI.png';
import { useTranslation } from 'react-i18next';
function About() {
    const { t } = useTranslation();

    return (
        <section className='section about-section gray-bg' id='about'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='about-text'>
                            <small>
                                {t(`home.about.tag`)}
                            </small>
                            <h3 className='dark-color mt-3 mb-2'>{t(`home.about.title`)}</h3>
                            <p>
                                {t(`home.about.location.first`)}{' '}
                                <a
                                    className='underline'
                                    href='https://www.wildermuth-gymnasium.de/'
                                    target='_blank'>
                                    <span>{t(`home.about.location.second`)}</span>
                                </a>{' '}
                                {t(`home.about.location.last`)}
                            </p>
                            <p>{t(`home.about.description`)}</p>
                        </div>
                        <a href="mailto:sfz.teclab@vdi.de" className="btn">{t(`home.about.contact`)}</a>
                    </div>
                    <div className='col-lg-5'>
                        <div className='about-img'>
                            <img loading="lazy" src={vdi} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
