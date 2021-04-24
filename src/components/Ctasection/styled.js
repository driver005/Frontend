import styled, {keyframes} from 'styled-components'

const h2 = `
    font-weight: bold;
    margin-bottom: 10px;
`

const a = `
    color: #fff;
    text-decoration: none;
`

const img = `
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    border: 0;
`

// Animation 
const Animation_0 = `
    opacity: 0;
    transform: translate3d(-15px, 0px, 0px);
`

const Animation_100 = `
    opacity: 1;
    transform: translate3d(0px, 0px, 0px);
`

const Animaten = keyframes`
    from {
        ${Animation_0}
    }
  
    to {
        ${Animation_100}
    }
`

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
    @media screen and (max-width: 991px)
    {
        padding-top: 100px;
        padding-bottom: 100px;
    }

    @media screen and (max-width: 767px)
    {
        padding-top: 60px;
        padding-bottom: 60px;
    }

    @media screen and (max-width: 479px)
    {
        padding-top: 0px;
        padding-bottom: 0px;
    }



`

export const Container = styled.div`
    background-attachment: scroll !important;
    width: 100%;
    max-width: 1200px;
`

export const Newsletterblock = styled.div`
    position: relative;
    display: flex;
    padding: 105px 35px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background-color: #3d03a6;

    @media screen and (max-width: 991px)
    {
        z-index: 5;
    }

    @media screen and (max-width: 767px)
    {
        padding-top: 50px;
        padding-bottom: 50px;
    }

    @media screen and (max-width: 479px)
    {
        padding-right: 20px;
        padding-left: 20px;
    }

    ${Animation_0}

    &.hide {
        display: none;
        ${Animation_0}
    }
    &.load {
        animation: ${Animaten} 1s forwards 1;
        animation-delay: 0.2s
    }

`

export const Overline = styled.div`
    background-attachment: scroll !important;
    margin-top: 0px;
    margin-bottom: 16px;
    color: #bc97ff;
    font-size: medium;
    font-weight: 500;
    letter-spacing: 1.5px;
`

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


    @media screen and (max-width: 767px)
    {
        font-size: 42px;
    }

    @media screen and (max-width: 479px)
    {
        font-size: 38px;
    }
`



export const Profileimageswarpper = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 767px)
    {
        flex-wrap: wrap;
    }
`

export const Peoplegroupimage = styled.img`
    ${img}
    margin-right: 12px;
    background-attachment: scroll !important;
`

export const Followernumber = styled.div`
    background-attachment: scroll !important;   
    color: #99a1ba;
    font-size: 15px;
    line-height: 26px;
    color: #fff;
`

export const Tagspan = styled.span`
    background-attachment: scroll !important;
    color: #fff;
`

export const Ribbon3 = styled.img`
    ${img}
    background-attachment: scroll !important;
    position: absolute;
    left: auto;
    top: auto;
    right: -40px;
    bottom: -40px;

    @media screen and (max-width: 479px)
    {
        display: none;
        width: 90px;
    }
`

export const Ribbon2 = styled.img`
    ${img}
    background-attachment: scroll !important;
    position: absolute;
    left: -40px;
    top: -50px;
    right: auto;
    bottom: auto;

    @media screen and (max-width: 479px)
    {
        display: none;
    }
`


export const Link = styled.a`
    ${a}
    opacity: 0.5;
`