import { useEffect, useState } from 'react';
import Loading from '../common/loading_animation';
import './styles.css';
import AnimatedNavbar from '../common/animated_navbar';
import * as api from '../../api';
import { useTranslation } from 'react-i18next';

const url = 'http://6krsrg7yudy9cmrg.myfritz.net';

function Printer() {
    const [loading, setLoading] = useState(true);
    const [isActive, setisActive] = useState(false);

    const { t } = useTranslation();

    useEffect(() => {
        api.printerStatus()
            .then((data) => {
                if (data.data.isActive == true) {
                    setisActive(true);
                    setLoading(false);
                } else {
                    setisActive(false);
                    setLoading(false);
                }
            })
            .catch((error) => {
                setisActive(false);
                setLoading(false);
            });
    }, []);
    if (loading)
        return (
            <div className={'wrapper-printer'}>
                <Loading />
            </div>
        );


    return (
        <>
            <AnimatedNavbar />
            <div className={'printer-wrapper'}>
                {isActive ? (
                    <div className='printer-section'>
                        <h1>{t(`printer.title`)}</h1>
                        <button
                            className="btn"
                            variant='outline-success'
                            href={url}
                            target='_blank'
                            size='lg'>
                            {t(`printer.redirect`)}
                        </button>
                    </div>
                ) : (
                    <div className='printer-section printer-notActive'>
                        <h1>{t(`printer.error.title`)} </h1>
                        <h1>{t(`printer.error.msg`)}</h1>
                    </div>
                )}
            </div>
        </>
    );
}

export default Printer;
