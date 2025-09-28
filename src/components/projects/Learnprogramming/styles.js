import styled, { keyframes } from 'styled-components';
import { FiCircle } from 'react-icons/fi';

const h2 = `
    margin-top: 0px;
    margin-bottom: 16px;
    color: #fff;
    font-size: 42px;
    line-height: 1.1;
    font-weight: 700;
`;

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

export const Programmsection = styled.div`
	position: relative;
	display: flex;
	overflow: hidden;
	padding: 100px 3%;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	@media screen and (max-width: 479px) {
		padding-top: 60px;
		padding-bottom: 60px;
	}

	@media screen and (max-width: 767px) {
		padding-top: 60px;
		padding-bottom: 60px;
	}
`;

export const Containerflex = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	justify-content: center;
	align-items: center;

	&.pa-5 {
		padding-bottom: 5rem;
	}
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

export const Img = styled.img`
	position: relative;
	bottom: auto;
	width: auto;
	height: 100% !important;
	max-height: 740px;

	@media screen and (min-width: 800px) {
		transform: translateX(40rem);
	}
`;

export const Startcircle = styled(FiCircle)`
	position: absolute;
	top: 3.7%;
	right: calc(83% - 9px);

	@media screen and (max-width: 799px) {
		display: none;
	}
`;

export const Starttext = styled.div`
	position: absolute;
	top: 3.5%;
	color: #ffffffff;

	@media screen and (min-width: 800px) {
		right: calc(50% - 15px);
	}

	@media screen and (min-width: 1200px) {
		right: calc(63% - 15px);
	}
`;

export const Endcircle = styled(FiCircle)`
	position: absolute;
	top: calc(100% - 18px);
	right: calc(83% - 9px);

	@media screen and (max-width: 799px) {
		display: none;
	}
`;

export const Endtext = styled.div`
	position: absolute;
	top: calc(100% - 24.2px);
	color: #ffffffff;

	@media screen and (min-width: 800px) {
		right: calc(50% - 9px);
	}

	@media screen and (min-width: 1200px) {
		right: calc(67% - 9px);
	}
`;

export const Circle = styled(FiCircle)`
	position: absolute;
	background-color: black;
	right: 48%;
	z-index: 1;

	&.s-50 {
		top: calc(50% - 18px);
	}

	@media screen and (min-width: 800px) {
		right: calc(83% - 9px);
	}
`;

export const Text = styled.div`
	position: absolute;
	color: #ffffffff;

	&.s-50 {
		top: calc(50% - 24.2px);
	}

	@media screen and (min-width: 800px) {
		right: calc(40% - 9px);
	}

	@media screen and (min-width: 1200px) {
		right: calc(90% - 9px);
	}
`;

export const Button = styled.a`
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
	}
`;

export const Span = styled.span`
	display: inline-block;
	width: 0;

	@media screen and (max-width: 799px) {
		width: 32px;
	}
`;

export const OText = styled.div`
	display: none;
	width: 0;

	@media screen and (min-width: 800px) {
		display: inline;
		width: auto;
	}
`;

export const Container = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 250vh;
	margin-bottom: 3rem;

	&::before {
		position: absolute;
		z-index: 1;
		top: calc(4% + 15px);
		bottom: 0;
		display: block;
		width: 1rem;
		content: '';
		height: calc(100% - 5.8%);
		border-right: 2px solid var(--text-color);

		@media screen and (min-width: 800px) {
			right: calc(83% - 2px);
		}
	}
`;
