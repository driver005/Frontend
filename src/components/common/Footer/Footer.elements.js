import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Email = styled.a`
	color: var(--vdi-color);
  text-decoration: none;

  &:hover {
    color: var(--accent-color);
  }
`;

export const FooterContainer = styled.div`
	background-color: transparent;
	padding: 4rem 0 2rem 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
export const SocialMedia = styled.section`
	max-width: 1000px;
	width: 100%;
`;

export const SocialMediaWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 90%;
	max-width: 1000px;
	margin: 40px auto 0 auto;
	@media screen and (max-width: 820px) {
		flex-direction: column;
	}
`;

export const TextWrap = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 90%;
	max-width: 1000px;
	margin: 40px auto 0 auto;
  color: white;

  p {
    margin:0;
  }
`;

export const SocialLogo = styled(Link)`
	justify-self: start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
	margin-bottom: 16px;
`;

export const IMG = styled.img`
	@media screen and (max-width: 400px) {
		width: 100%;
	}
`;

export const WebsiteRights = styled.small`
	color: #fff;
	margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 240px;
`;

export const SocialIconLink = styled.a`
	color: #fff;
	font-size: 24px;
`;
