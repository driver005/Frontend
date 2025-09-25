import React from 'react';
import Cta from './components/Ctasection';
import styled from 'styled-components';
import './index.css';
import 'normalize.css';
import Header from './components/Header';
import Moon from './Moon';
import About from './components/About';
import MeetingComponent from './components/Meeting';


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
        <AppContainer>
            <Moon />
            <Header />
            <About />
            <MeetingComponent />
            <Cta />
        </AppContainer>
    );
}

