import styled, { keyframes } from 'styled-components';

const imgbig = `
    border: 0;
    width: 100%;
    height: auto;
`;

const img = `
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
`;

const h2 = `
    margin-top: 0px;
    margin-bottom: 16px;
    color: #fff;
    font-size: 42px;
    line-height: 1.1;
    font-weight: 700;
`;

// Animation
const Animation_0 = `
    opacity: 0;
    transform: translate3d(-15px, 0px, 0px);
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

export const Featurewrap = styled.div`
	display: flex;
	width: 100%;
	margin-bottom: 55px;

	&.reverse-wrap {
		flex-direction: row-reverse;
	}

	@media screen and (max-width: 767px) {
		flex-wrap: wrap;
		flex-direction: normal;
	}
`;

export const Contentblock = styled.div``;

export const Overline = styled.div`
	margin-top: 0px;
	margin-bottom: 16px;
	color: var(--vdi-color);
	font-size: 14px;
	font-weight: 500;
	letter-spacing: 1.5px;

	@media screen and (max-width: 991px) {
		text-align: center;
	}
`;

export const Titlewrap = styled.div``;

export const Containerflex = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	max-width: 1140px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Contenth2 = styled.h1`
	${h2}
	margin-top: 0px;
	margin-bottom: 16px;

	@media screen and (max-width: 991px) {
		font-size: 38px;
		text-align: center;
	}
`;
export const H2span = styled.span`
	opacity: 0.6;
`;

export const Paragraphleftalign = styled.p`
	max-width: 680px;
	margin-bottom: 48px;
	color: var(--text-color);
	font-size: 17px;
	line-height: 1.4;
	font-weight: 400;
	text-align: center;
	margin-bottom: 0px;
	text-align: left;

	@media screen and (max-width: 991px) {
		text-align: center;
	}
`;

export const Featurecolumncontent = styled.div`
	display: flex;
	//width: 50%;
	min-height: 250px;
	padding: 50px;
	flex-direction: column;
	justify-content: center;
	${Animation_0}

	&.hide {
		display: none;
		${Animation_0}
	}
	&.load {
		animation: ${Animaten} 0.2s forwards 1;
		animation-delay: 0s;
	}

	@media screen and (max-width: 479px) {
		padding: 10px;
	}

	@media screen and (max-width: 767px) {
		width: 100%;
	}
	@media screen and (max-width: 991px) {
		padding: 25px;
	}
`;

export const Featurecolumnimage = styled.div`
	display: flex;
	padding: 50px;
	flex-direction: column;
	justify-content: center;
	align-items: stretch;

	${Animation_0}

	&.hide {
		display: none;
		${Animation_0}
	}
	&.load {
		animation: ${Animaten} 0.2s forwards 1;
		animation-delay: 0.2s;
	}

	@media screen and (max-width: 991px) {
		padding: 25px;
	}

	@media screen and (max-width: 767px) {
		width: 100%;
	}

	@media screen and (max-width: 479px) {
		margin-top: 25px;
		padding: 10px;
		justify-content: flex-start;
	}
`;

export const Featureimagediv = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
`;

export const Featureimage = styled.img`
	${imgbig}
	overflow: hidden;

	@media screen and (max-width: 767px) {
		width: 100% !important;
	}

	&.width-85 {
		width: 85%;
	}

	&.border-2 {
		border-radius: 2%;
	}

	&.width-70 {
		width: 70%;
	}
`;

export const Ribbon = styled.img`
	${img}
	position: absolute;
	left: auto;
	top: -20px;
	right: -8px;
	bottom: auto;

	@media screen and (max-width: 479px) {
		display: none;
	}
`;
