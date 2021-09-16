import React from 'react'
import styled from 'styled-components'
import Features from './components/Features'
import AnimatedNavbar from './AnimatedNavbar'
import Service from './components/Service'
import Programming from './components/Learnprogramming'

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
        <AppContainer>
            <AnimatedNavbar />
            <Service />
            <Programming />
            <Features />
        </AppContainer>
    )
}

export default Projects
