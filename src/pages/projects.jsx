import React from 'react'
import styled from 'styled-components'
import Features from '../components/projects/comps'
import AnimatedNavbar from '../components/common/animated_navbar'
import Service from '../components/projects/service'
import Programming from '../components/projects/learn'
import { Helmet } from "react-helmet-async";
import { useTranslation } from 'react-i18next'

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
    const { t } = useTranslation();

    return (
        <>
            <Helmet prioritizeSeoTags>
                {/* Basic Metadata */}
                <meta charSet="utf-8" />
                <title>{t(`meta.projects.title`)}</title>
                <meta
                    name="description"
                    content={t(`meta.projects.description`)}
                />
                <link rel="canonical" href="https://www.sfz-tuebingen.org/projects" />
                <meta name="keywords" content={t(`meta.projects.keywords`)} />
                <meta name="author" content="Adrian Fernández" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.sfz-tuebingen.org/" />
                <meta property="og:title" content={t(`meta.projects.title`)} />
                <meta
                    property="og:description"
                    content={t(`meta.projects.gen_description`)}
                />
                <meta property="og:image" content="https://www.sfz-tuebingen.org/teclab.svg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://www.sfz-tuebingen.org/" />
                <meta name="twitter:title" content={t(`meta.projects.title`)} />
                <meta
                    name="twitter:description"
                    content={t(`meta.projects.gen_description`)}
                />
                <meta name="twitter:image" content="https://www.sfz-tuebingen.org/teclab.svg" />
                {/* <meta name="twitter:site" content="@sfz-teclab" />  */}

                {/* Favicon / Logo */}
                <link rel="icon" href="/teclab.svg" />
                <link rel="apple-touch-icon" sizes="180x180" href="/teclab.svg" />
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
