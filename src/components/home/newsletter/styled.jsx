import styled, { keyframes } from 'styled-components';

const a = `
    color: var(--bg-color);
    text-decoration: none;
`;

// Animation
const Animation_0 = `
    opacity: 0;
    transform: translate3d(-15px, 0px, 0px);
`;

const Animation_100 = `
    opacity: 1;
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

export const Ctasection = styled.div`
	background-attachment: scroll !important;
	position: relative;
	display: flex;
	overflow: hidden;
	padding: 60px 3%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: 991px) {
		padding-top: 100px;
		padding-bottom: 100px;
	}

	@media screen and (max-width: 767px) {
		padding-top: 60px;
		padding-bottom: 60px;
	}

	@media screen and (max-width: 479px) {
		transform: translateY(-1rem);
		padding-top: 0px;
		padding-bottom: 0px;
	}
`;

export const Container = styled.div`
	background-attachment: scroll !important;
	width: 100%;
	max-width: 1200px;
`;

export const Newsletterblock = styled.div`
	position: relative;
	display: flex;
	padding: 90px 35px;
	margin: 0px 70px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 15px;
	background-color: var(--vdi-color);

	@media screen and (max-width: 991px) {
		z-index: 5;
	}

	@media screen and (max-width: 767px) {
		padding-top: 50px;
		padding-bottom: 50px;
	}

	@media screen and (max-width: 479px) {
		padding-right: 20px;
		padding-left: 20px;
		margin-top: 4rem;
		margin-right: 10px;
		margin-left: 10px;
	}

	${Animation_0}

	&.hide {
		display: none;
		${Animation_0}
	}
	&.load {
		animation: ${Animaten} 1s forwards 1;
		animation-delay: 0.2s;
	}
`;

export const Contentcta = styled.h2`
	margin-top: 0px;
	margin-bottom: 16px;
	color: #fff;
	font-size: 42px;
	line-height: 1.1;
	font-weight: 700;
	max-width: 580px;
	margin-bottom: 35px;
	font-size: 50px;
	text-align: center;

	@media screen and (max-width: 767px) {
		font-size: 42px;
	}

	@media screen and (max-width: 479px) {
		font-size: 38px;
	}
`;

export const Link = styled.a`
	${a}
  
  &:hover {
    color: var(--accent-color);
  }
`;

export const Sendbutton = styled.button`
    background-attachment: scroll !important;
    display: inline-block;
    text-decoration: none;
    line-height: normal;
    margin-top: 0px;
    padding: 16px 45px;
    border-radius: 100px;
    border: none;
    background-color: ${({ primary }) => (primary ? 'var(--vdi-color)' : 'var(--bg-color)')};
    color: var(--text-color);
    font-size: 15px;
    line-height: 21px;
    outline: none;

    @media screen and (max-width: 479px)
    {
        width: 100%;
    }

`