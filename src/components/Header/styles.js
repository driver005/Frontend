import styled, {keyframes} from 'styled-components'
import hero from '../../images/hero_bloom.png'
const img = `
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
`

const h5 = `
    font-size: 14px;
    line-height: 20px;
    margin-top: 10px;
`

const h1 = `
    margin: .67em 0;
    margin-top: 0px;
    margin-bottom: 10px;
    font-size: 38px;
    line-height: 44px;
    font-weight: 700;
`

const p = `
    margin-top: 0;
    margin-bottom: 10px;
`

// Animation 
const Animation_0 = `
    opacity: 0;
    transform: translate3d(0px, 15px, 0px);
`

const Animation_100 = `
    opacity: 100%;
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

export const Headercontainer = styled.header`
    display: flex;
    overflow: hidden;
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
    border-color: #7735d2;

    @media screen and (max-width: 991px) {
        height: 100vh;
        align-items: stretch;
    }

    @media screen and (max-width: 767px)
    {
        padding-top: 145px;
    }
`

export const Containerflex = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    max-width: 1140px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 991px) {
        margin: 4vh 0;
    }
    
`


export const Herooverline = styled.h5`
    ${h5}
    margin-top: 0px;
    margin-bottom: 16px;
    color: #813efb;
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
        animation-delay: 0s
    }

`

export const Heroh1 = styled.h1`
    ${h1}
    color: #fff;
    font-size: 50px;
    line-height: 1;

    @media screen and (max-width: 479px)
    {
        font-size: 44px;
    }
    @media screen and (max-width: 991px)
    {
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
`

export const Heroparagraph = styled.p`
    ${p}
    max-width: 720px;
    color: #99a1ba;
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
`

export const Herobutton = styled.a`
    margin-top: 0px;
    padding: 16px 45px;
    border-radius: 100px;
    background-color: #813efb;
    transition: all 200ms ease;
    color: #fff;
    font-size: 16px;
    line-height: 21px;
    text-decoration: none;
    ${Animation_0}
    
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
`

export const Heroimagewarpper = styled.div`
    position: relative;
    margin-top: 65px;
    ${Animation_0}
    
    &.hide {
        display: none;
        ${Animation_0}
    }
    &.load {
        animation: ${Animaten} 1.25s forwards 1;
        animation-delay: 5s;
    }
`

export const Herographicleft = styled.img`
    ${img}
    position: absolute;
    left: -80px;
    top: 170px;
    right: auto;
    bottom: auto;

`

export const Herographicright = styled.img`
    ${img}
    position: absolute;
    left: auto;
    top: 300px;
    right: -80px;
    bottom: 0%;

`

export const Heroimageplaceholder = styled.img`
    ${img}
`

export const Profileimageswrapper = styled.div`
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

`

export const Followernumber = styled.div`
    color: #99a1ba;
    font-size: 15px;
    line-height: 26px;
`

export const Tagspan = styled.span`
    color: #fff;
`



// 

const test = styled.div`
    transform: translate3d(0px, 15px, 0px);
    ${Heroimagewarpper}
`



