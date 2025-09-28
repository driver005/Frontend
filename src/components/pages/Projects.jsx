import React from 'react'
import styled from 'styled-components'
import Features from '../projects/Features'
import AnimatedNavbar from '../common/AnimatedNavbar'
import Service from '../projects/Service'
import Programming from '../projects/Learnprogramming'

const AppContainer = styled.div`
    background: #000;
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    > div:first-of-type {
        display: flex;
        height: 10rem;
    }
`

function Projects() {
  return (
    <>
      <Helmet>
        {/* Basic Metadata */}
        <meta charSet="utf-8" />
        <title>teclab - VDI Schülerforschungszentrum</title>
        <meta
          name="description"
          content="Projekte des teclab - VDI Schülerforschungszentrums in Tübingen. Erfahre mehr darüber, was wir machen oder wie du uns erreichen kannst."
        />
        <meta name="keywords" content="teclab, VDI, Schülerforschungszentrum, Tübingen, Forschung, Bildung, MINT, Schülerlabor, Projekte, Miteinander" />
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
        <meta name="twitter:url" content="https://www.sfz-tuebingen.org/" />
        <meta name="twitter:title" content="teclab - VDI Schülerforschungszentrum" />
        <meta
          name="twitter:description"
          content="Das teclab ist ein Schülerforschungszentrum in Tübingen. Erfahre mehr über unsere Projekte und MINT-Angebote."
        />
        <meta name="twitter:image" content="https://www.sfz-tuebingen.org/teclab.svg" />
        {/* <meta name="twitter:site" content="@sfz-teclab" />  */}

        {/* Favicon / Logo */}
        <link rel="icon" href="/teclab.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/teclab.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/teclab.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/teclab.svg" />
        <link rel="manifest" href="/manifest.json" />
      </Helmet>
      <AppContainer>
        <AnimatedNavbar duration={300} />
        <Service />
        <Programming />
        <Features />
      </AppContainer>
    </>
  )
}

export default Projects
