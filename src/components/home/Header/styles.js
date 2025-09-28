import styled, { keyframes } from 'styled-components';
import hero from '../../common/images/hero_bloom.png';

const h5 = `
    font-size: 14px;
    line-height: 20px;
    margin-top: 10px;
`;

const h1 = `
    margin: .67em 0;
    margin-top: 0px;
    margin-bottom: 10px;
    font-size: 38px;
    line-height: 44px;
    font-weight: 700;
`;

const p = `
    margin-top: 0;
    margin-bottom: 10px;
`;

// Animation
const Animation_0 = `
    opacity: 0;
    transform: translate3d(0px, 15px, 0px);
`;

const Animation_100 = `
    opacity: 100%;
    transform: translate3d(0px, 0px, 0px);
`;

const Animaten = keyframes`
    from {
        ${Animation_0}
    }
  
    to {
        ${Animation_100}
    }
`;

// Animations

export const Headercontainer = styled.header`
	display: flex;
	min-height: 120vh;
	padding: 185px 3% 80px;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background-image: url(${hero});
	background-position: 0% 0%;
	background-size: cover;
	background-repeat: no-repeat;
	background-attachment: scroll;
	border-style: solid;
	border-width: 1px;
	border-color: var(--vdi-color);

	@media screen and (max-width: 991px) {
		align-items: stretch;
	}

	@media screen and (max-width: 767px) {
		padding-top: 145px;
	}
`;

export const Containerflex = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	max-width: 1140px;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	align-content: center;

	&.full {
		height: 100%;
	}

	@media screen and (max-width: 991px) {
		margin-top: 4vh;
		margin-bottom: 8vh;
	}

	@media screen and (max-width: 844px) {
		align-items: center;
	}
`;

export const Containerflexcomponent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;
	transform: translateX(-20%);

	@media screen and (max-width: 1347px) {
		transform: translateX(0%);
	}
`;

export const Herooverline = styled.h5`
	${h5}
	margin-top: 0px;
	margin-bottom: 16px;
	color: var(--vdi-color);
	font-size: 14px;
	font-weight: 600;
	text-align: center;
	letter-spacing: 1.5px;
	${Animation_0}

	&.hide {
		display: none;
		${Animation_0}
	}
	&.load {
		animation: ${Animaten} 1.25s forwards 1;
		animation-delay: 0s;
	}
`;

export const Heroh1 = styled.h1`
	${h1}
	color: var(--accent-color);
	line-height: 1;
	font-size: 45px;
	font-weight: 700;
	text-align: center;
	hyphens: auto;
	word-wrap: break-word;
	overflow-wrap: break-word;
	width: 100%;

	@media screen and (max-width: 479px) {
		font-size: 44px;
	}
	@media screen and (max-width: 991px) {
		text-align: center;
	}

	${Animation_0}

	&.hide {
		display: none;
		${Animation_0}
	}
	&.load {
		animation: ${Animaten} 1.25s forwards 1;
		animation-delay: 1.25s;
	}
`;

export const Heroparagraph = styled.p`
	${p}
	max-width: 720px;
	color: var(--text-color);
	font-size: 18px;
	line-height: 1.4;
	font-weight: 400;
	text-align: center;
	margin-bottom: 48px;
	${Animation_0}

	&.hide {
		display: none;
		${Animation_0}
	}
	&.load {
		animation: ${Animaten} 1.25s forwards 1;
		animation-delay: 2.5s;
	}

	@media screen and (max-width: 1347px) {
		max-width: 200px;
	}

	@media screen and (max-width: 844px) {
		max-width: 720px;
	}
`;

export const Herobutton = styled.a`
	margin-top: 0px;
	padding: 16px 45px;
	border-radius: 100px;
	background-color: var(--vdi-color);
	transition: all 200ms ease;
	color: #fff;
	font-size: 16px;
	line-height: 21px;
	text-decoration: none;
	${Animation_0}
	min-width: 10.5rem;

	&.hide {
		display: none;
		${Animation_0}
	}
	&.load {
		animation: ${Animaten} 1.25s forwards 1;
		animation-delay: 3.75s;
	}

	&:hover {
		transform: translate3d(0px, -2px, 0px);
		background-color: #fff;
		color: var(--vdi-color);
	}
`;
