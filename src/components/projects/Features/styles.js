import styled, { keyframes } from 'styled-components';

const h2 = `
    margin-top: 0px;
    margin-bottom: 16px;
    color: #fff;
    font-size: 42px;
    line-height: 1.1;
    font-weight: 700;
`;

const img = `
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
`;

const p = `
    margin-top: 0;
    margin-bottom: 10px;
`;

export const Featuressection = styled.div`
	position: relative;
	display: flex;
	overflow: hidden;
	padding: 100px 3%;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 479px) {
		padding-top: 60px;
		padding-bottom: 60px;
	}

	@media screen and (max-width: 767px) {
		padding-top: 60px;
		padding-bottom: 60px;
	}
`;

export const Paragraph = styled.p`
	${p}
	max-width: 680px;
	margin-bottom: 48px;
	color: var(--text-color);
	font-size: 17px;
	line-height: 1.4;
	font-weight: 400;
	text-align: center;
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
	color: var(--accent-color);
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

export const Ribbon2 = styled.img`
	${img}
	position: absolute;
	left: -40px;
	top: -50px;
	right: auto;
	bottom: auto;

	@media screen and (max-width: 479px) {
		display: none;
	}
`;

export const Ribbon3 = styled.img`
	${img}
	position: absolute;
	left: auto;
	top: auto;
	right: -40px;
	bottom: -40px;

	@media screen and (max-width: 479px) {
		display: none;
	}
`;

export const Leftblur = styled.img`
	position: absolute;
	left: 0%;
	top: 20%;
	right: auto;
	bottom: auto;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	border: 0;

	@media screen and (max-width: 991px) {
		z-index: -1;
	}
`;

export const Rightblur = styled.img`
	position: absolute;
	left: auto;
	top: auto;
	right: 0%;
	bottom: 0%;
	max-width: 500px;
	vertical-align: middle;
	display: inline-block;
	border: 0;

	@media screen and (max-width: 991px) {
		z-index: -1;
	}
`;
