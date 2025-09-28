import Cta from '../components/home/Ctasection';
import styled from 'styled-components';
import 'normalize.css';
import Header from '../components/home/Header';
import Moon from '../components/home/Moon';
import About from '../components/home/About';
import { Helmet } from "react-helmet";


const AppContainer = styled.div`
	background: #000;
	display: flex;
	flex-direction: column;
	min-height: 100vh;

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

  return (
    <>
      <Helmet>
        {/* Basic Metadata */}
        <meta charSet="utf-8" />
        <title>teclab - VDI Schülerforschungszentrum</title>
        <meta
          name="description"
          content="Homepage des teclab - VDI Schülerforschungszentrums in Tübingen. Erfahre mehr darüber, was wir machen oder wie du uns erreichen kannst."
        />
        <meta name="keywords" content="teclab, VDI, Schülerforschungszentrum, Tübingen, Forschung, Bildung, MINT, Schülerlabor" />
        <meta name="author" content="teclab - VDI Schülerforschungszentrum" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sfz-tuebingen.org/" />
        <meta property="og:title" content="teclab - VDI Schülerforschungszentrum" />
        <meta
          property="og:description"
          content="Das teclab ist ein Schülerforschungszentrum in Tübingen. Entdecke unsere MINT-Angebote und Projekte."
        />
        <meta property="og:image" content="https://www.sfz-tuebingen.org/teclab.svg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.sfz-tuebingen.org" />
        <meta name="twitter:title" content="teclab - VDI Schülerforschungszentrum" />
        <meta
          name="twitter:description"
          content="Das teclab ist ein Schülerforschungszentrum in Tübingen. Erfahre mehr über unsere Projekte und MINT-Angebote."
        />
        <meta name="twitter:image" content="https://www.sfz-tuebingen.org/teclab.svg" />
        {/* <meta name="twitter:site" content="@sfz-teclab" />  */}

        {/* Favicon / Logo */}
        <link loading="lazy" rel="icon" href="/teclab.svg" />
        <link loading="lazy" rel="apple-touch-icon" sizes="180x180" href="/teclab.svg" />
        <link loading="lazy" rel="icon" type="image/png" sizes="32x32" href="/teclab.svg" />
        <link loading="lazy" rel="icon" type="image/png" sizes="16x16" href="/teclab.svg" />
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

