import styled from 'styled-components'


const hover = `
    &:hover {
        color: var(--vdi-color);
        transition: all 200ms ease;
    }
`

const position = `
    justify-content: center;
    align-items: center;
`

const font = `   
    font-size: 15px;
    text-decoration: none;
`

export const Navcontainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: flex;
    width: 100%;
    max-width: 1140px;

    @media screen and (max-width: 479px)
    {
        justify-content: space-between;
    }

    @media screen and (max-width: 767px)
    {
        justify-content: space-between;
    }
    @media screen and (max-width: 991px)
    {
        display: flex;
        justify-content: space-between;
        align-items: center; 
    }
    
`

export const Logo = styled.a`
    min-width: 60px;
    max-width: 100%;
    margin-right: 15%;

    @media screen and (max-width: 479px)
    {
        margin-right: 0px;
    }

    @media screen and (max-width: 767px)
    {
        padding-left: 10px;
    }
`

export const Navigationleft = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    color: var(--text-color);

    @media screen and (max-width: 991px)
    {
        display: none;
    }
`

export const Navigationlink = styled.a`
    display: flex;
    padding: 20px 12px;
    color: #fff;
    ${position}
    ${font}
    
    ${hover}   
`

export const Menubutton = styled.div`
    position: relative;
    float: right;
    padding: 18px;
    font-size: 24px;
    display: none;
    cursor: pointer;
    user-select: none;
    background-color: transparent;

    

    @media screen and (max-width: 991px)
    {
        display: block;
        margin-left: 200px;
        border-radius: 100px;
    }
    
    @media screen and (max-width: 767px)
    {
        margin-left: 95px;
    }

    @media screen and (max-width: 479px)
    {
        display: block;
        margin-left: auto;
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-end;
        align-self: auto;
        order: 0;
        flex: 0 auto;
    }
    
    @media screen and (max-width: 211px)
    {
        justify-content: center;
    }
    

`

export const Icon = styled.div`
    font-family: 'webflow-icons' !important;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    

    @media screen and (max-width: 991px)
    {
        color: #fff;
    }
`

export const NavbarEl = styled.nav`
	display: block;
	top: 0;
	left: 0;
	right: 0;
	bottom: auto;
	position: absolute;
	padding: 26px 3%;
	z-index: 1000;
	background-color: transparent;

	@media screen and (max-width: 991px) {
		padding-right: 3%;
		padding-left: 3%;
	}
`;

export const NavbarList = styled.ul`
	margin-left: auto;
	margin-right: auto;
	display: flex;
	width: 100%;
	max-width: 1140px;

	@media screen and (max-width: 479px) {
		justify-content: space-between;
	}

	@media screen and (max-width: 767px) {
		justify-content: space-between;
	}
	@media screen and (max-width: 991px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;

export const IMG = styled.img`
	@media screen and (max-width: 400px) {
		width: 100%;
	}
`;


export const DropdownWrapper = styled.div`
  position: relative;
  display: none;

  @media screen and (max-width: 991px) {
    display: inline-block;
  }
`;

export const ToggleButton = styled.button`
  background: transparent;
  border: 1px solid var(--bg-color);
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background: var(--bg-color);
  }
`;

export const Menu = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  border: 1px solid var(--bg-color);
  border-radius: 4px;
  list-style: none;
  margin: 8px 0 0 0;
  padding: 0;
  min-width: 160px;
  box-shadow: 0 4px 6px var(--bg-color);
  z-index: 999;
  background-color: var(--bg-color);

  @media screen and (max-width: 430px) {
		width: 95vw;
	}
`;

export const MenuItem = styled.li`
  padding: 10px 16px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: var(--vdi-color);
  }

  a {
    text-decoration: none;
    color: #fff;
    display: block;
  }
`;