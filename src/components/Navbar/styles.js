import styled, {keyframes} from 'styled-components'


const hover = `
    &:hover {
        color: rgb(119, 53, 246);
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
export const Navbar = styled.nav`
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: auto;
    position: absolute;
    padding: 26px 3%;
    background: #dddddd;
    z-index: 1000;
    background-color: hsla(0, 0%, 86.7%, 0);

    @media screen and (max-width: 991px)
    {
        padding-right: 3%;
        padding-left: 3%;
    }
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
export const Brand = styled.ul`
    position: relative;
    float: left;
    text-decoration: none;
    color: #333333;
    margin-right: 44px;
    justify-content: center;

    @media screen and (max-width: 767px)
    {
        padding-left: 10px;
    }
`

export const Logo = styled.li`
    min-width: 55px;
    max-width: 100%;

    @media screen and (max-width: 479px)
    {
        margin-right: 0px;
    }
`

export const Navigationleft = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    color: #c2d6e0;

    @media screen and (max-width: 991px)
    {
        display: none;
    }
`

export const Navigationright = styled.nav`
    display: flex;
    width: 50%;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    align-self: auto;
    order: 0;
    flex: 0 auto;
    font-size: 16px;

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

export const Navbutton = styled.a`
    margin-left: 26px;
    padding: 16px 42px;
    border: 0.5px solid #fff;
    border-radius: 100px;
    background-color: rgba(56, 152, 236, 0);
    transition: all 300ms ease;
    color: #c2d6e0;
    line-height: 21px;
    font-weight: 600;
    ${font}

    &:hover {
        color: #813efb;
        background-color: white;
    }
`
export const Navlink = styled.a`
    padding: 0px 20px;
    display: flex;
    flex-direction: row;
    flex: 0 auto;
    color: #c2d6e0;
    line-height: 21px;
    font-weight: 400;
    ${position} 
    ${font}
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