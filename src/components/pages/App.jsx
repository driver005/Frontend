import Cta from '../home/Ctasection';
import styled from 'styled-components';
import 'normalize.css';
import Header from '../home/Header';
import Moon from '../home/Moon';
import About from '../home/About';


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
            <Cta />
        </AppContainer>
    );
}

