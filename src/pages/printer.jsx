import { useTranslation } from 'react-i18next';
import Printer from '../components/printer'
import { Helmet } from "react-helmet-async";
import styled from 'styled-components';

const AppContainer = styled.div`
    background: #000;
    display: flex;
    flex-direction: column;
    min-height: 55vh;

    > div:first-of-type {
        display: flex;
        height: 10rem;
    }
`

function PrinterHome() {
    const { t } = useTranslation();

    return (
        <>
            <Helmet prioritizeSeoTags>
                {/* Basic Metadata */}
                <meta charSet="utf-8" />
                <title>{t(`meta.printer.title`)}</title>
                <meta
                    name="description"
                    content={t(`meta.printer.description`)}
                />
                <link rel="canonical" href="https://www.sfz-tuebingen.org/printer" />
                <meta name="keywords" content={t(`meta.printer.keywords`)} />
                <meta name="author" content="Adrian Fernández" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.sfz-tuebingen.org/" />
                <meta property="og:title" content={t(`meta.printer.title`)} />
                <meta
                    property="og:description"
                    content={t(`meta.printer.gen_description`)}
                />
                <meta property="og:image" content="https://www.sfz-tuebingen.org/teclab.svg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://www.sfz-tuebingen.org/" />
                <meta name="twitter:title" content={t(`meta.printer.title`)} />
                <meta
                    name="twitter:description"
                    content={t(`meta.printer.gen_description`)}
                />
                <meta name="twitter:image" content="https://www.sfz-tuebingen.org/teclab.svg" />
                {/* <meta name="twitter:site" content="@sfz-teclab" />  */}

                {/* Favicon / Logo */}
                <link rel="icon" href="/teclab.svg" />
                <link rel="apple-touch-icon" sizes="180x180" href="/teclab.svg" />
                <link rel="manifest" href="/manifest.json" />
                <link loading="lazy" rel="manifest" href="/manifest.json" />
            </Helmet>
            <AppContainer>
                <Printer />
            </AppContainer>
        </>
    )
}

export default PrinterHome
