import styled, {keyframes} from 'styled-components'

const h2 = `
    margin-top: 0px;
    margin-bottom: 16px;
    color: #fff;
    font-size: 42px;
    line-height: 1.1;
    font-weight: 700;
`
const img = `
    border: 0;
`

const a = `
    color: #fff;
    text-decoration: none;
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


export const Servicesection = styled.div`
    position: relative;
    display: flex;
    padding-top: 80px;
    padding-right: 3%;
    padding-left: 3%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const Containerflex = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    max-width: 1140px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: flex-start;
    align-items: flex-start;

`

export const Contenth2 = styled.h2`
    ${h2}
    margin-top: 0px;
    margin-bottom: 16px;

    @media screen and (max-width: 991px)
    {
        font-size: 38px;
    }
`

export const H2span = styled.span`
    opacity: 0.6;
    color: var(--accent-color);
`

export const Servicegrid = styled.div`
    display: grid;
    width: 100%;
    margin-top: 60px;
    grid-auto-columns: 1fr;
    grid-column-gap: 28px;
    grid-row-gap: 28px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto auto;

    @media screen and (max-width: 991px)
    {
        grid-auto-flow: row;
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 479px)
    {
        grid-template-columns: 1fr;
    }
`

export const Servicegridblock = styled.a`
    max-width: 100%;
    display: inline-block;
    padding: 50px 50px 50px 30px;
    border: 1px solid transparent;
    border-radius: 10px;
    background-color: var(--bg-color);
    transition: all 250ms ease;
    text-decoration: none;

    ${Animation_0}

    &.hide {
        display: none;
        ${Animation_0}
    }
    &.load {
        animation: ${Animaten} 1s forwards 1;
        animation-delay: 0s
    }
`

export const Endblock = styled.div`
    max-width: 100%;
    display: inline-block;
    padding: 50px 50px 50px 30px;
    border: 1px solid transparent;
    border-radius: 10px;
    background-color: var(---color);
    transition: all 250ms ease;
    text-decoration: none;
    display: flex;
    padding-right: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${Animation_0}

    &.hide {
        display: none;
        ${Animation_0}
    }
    &.load {
        animation: ${Animaten} 1s forwards 1;
        animation-delay: 0s
    }
`

export const Servicetitle = styled.div`
    margin-bottom: 12px;
    color: #fff;
    font-size: 17px;
    font-weight: 700;

    &.service-title-centre {
        margin-bottom: 25px;
        text-align: center;
    }
`

export const Serviceparagraph = styled.p`
    ${p}
    color: var(--text-color);
    font-size: 15px;
`

export const Iconblock = styled.div`
    display: flex;
    width: 40px;
    height: 40px;
    margin-bottom: 36px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: var(--vdi-color);
`

export const Iconblockimg = styled.img`
    ${img}
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
`

export const Primarybutton = styled.a`
    ${a}
    margin-top: 0px;
    padding: 16px 45px;
    border-radius: 100px;
    background-color: var(--bg-color);
    color: var(--text-color);
    font-size: 16px;
    line-height: 21px;
`

export const Tag10 = styled.p`
    ${p}
    margin-top: 12px;
    margin-bottom: 0px;
    color: var(--text-color);
    font-size: 10px;
    line-height: 12px;
    text-align: center;
`

export const Divider = styled.div`
    position: static;
    left: 0%;
    top: auto;
    right: 0%;
    bottom: 0%;
    width: 100%;
    height: 1px;
    max-width: 850px;
    margin-top: 160px;
    flex: 0 auto;
    background-color: var(--bg-color);
`

