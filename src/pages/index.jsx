import Cta from '../components/home/newsletter';
import styled from 'styled-components';
import 'normalize.css';
import Header from '../components/home/header';
import Moon from '../components/home/moon';
import About from '../components/home/about';
import { Helmet } from "react-helmet-async";
import { useTranslation } from 'react-i18next';


const AppContainer = styled.div`
	background: #000;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
    max-width: 100vw;

	> div:first-of-type {
		flex: 1 0 70vh;
		height: 120vh !important;
		position: absolute !important;

		@media screen and (max-width: 844px) {
			top: 43%;
		}

		@media screen and (min-width: 766px) {
			top: 50%;
		}

		@media screen and (min-width: 844px) {
			top: 0%;
		}
	}
`;

export default function App() {
    const { t } = useTranslation();

    return (
        <>
            <Helmet prioritizeSeoTags>
                {/* Basic Metadata */}
                <meta charSet="utf-8" />
                <title>{t(`meta.home.title`)}</title>
                <meta
                    name="description"
                    content={t(`meta.home.description`)}
                />
                <link rel="canonical" href="https://www.sfz-tuebingen.org/" />
                <meta name="keywords" content={t(`meta.home.keywords`)} />
                <meta name="author" content="Adrian Fernández" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.sfz-tuebingen.org/" />
                <meta property="og:title" content={t(`meta.home.title`)} />
                <meta
                    property="og:description"
                    content={t(`meta.home.gen_description`)}
                />
                <meta property="og:image" content="https://www.sfz-tuebingen.org/teclab.svg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://www.sfz-tuebingen.org" />
                <meta name="twitter:title" content={t(`meta.home.title`)} />
                <meta
                    name="twitter:description"
                    content={t(`meta.home.gen_description`)}
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
                <Moon />
                <Header />
                <About />
                <Cta />
            </AppContainer>
        </>
    );
}

