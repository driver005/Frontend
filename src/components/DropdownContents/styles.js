import styled, { keyframes, css } from 'styled-components'


export const Navcolumn = styled.div`
    padding: 25px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 700ms ease;
`

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

const AnimationNavcard_0 = `
    ${Navcolumn} {
        transform: translate3d(0px, 14px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
        transform-style: preserve-3d;

        &:hover {
            transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
            transform-style: preserve-3d;
        }
    }
`

const Navlistopen = `
    display: block;
    padding: 0 5%;
    padding-top: 20px;
    padding-bottom: 0%;
    min-width: 85%;
    position: absolute;
    top: 60%;
    right: 3%;
    left: 3%;
    bottom: auto;
    z-index: auto;
    flex-direction: row;
    justify-content: center;
    background-color: transparent;
    box-shadow: 28px 28px 25px 0 rgb(40 51 56 / 4%);
`


const AnimationNavlist_0 = `
    opacity: 0;
    transform: translate3d(0px, -8px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
` 

const AnimationNavlist_100 = `
    opacity: 1;
    ${Navlistopen};
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d
`

const Animation_0 = `
    ${AnimationNavcard_0}; 
    ${AnimationNavlist_0};
`

const Animatenavdropdown = keyframes`
    0% { ${Animation_0} }
    100% { ${AnimationNavlist_100} }
`


export const Dropdown = styled.div`
    display: flex;
    padding: 20px 12px;
    ${position}
    ${font}

    ${hover}
`

export const Dropdowntext = styled.div``

export const Dropdownarrow = styled.div`
    margin-right: 5px;
    align-items: center;
`

export const Anime_0 = css`
    opacity: 1;
    ${Animation_0}
    ${Navlistopen};
    animation: ${Animatenavdropdown} 1ms forwards 1;
`

export const Anime = css`
    .alert-enter-done .hide {
        opacity: 1;
        ${Animation_0}
        ${Navlistopen};
        animation: ${Animatenavdropdown} 5s forwards 1;
    }
`

export const Navlist = styled.nav.attrs(({ skip }) => ({
        skip
    }))`
    position: absolute;
    background: #dddddd;
    display: none;
    min-width: 100%; 
    

    ${Navlistopen};


    



`



export const Navlistwrapper = styled.div`
    border-top: 1px none rgba(40, 51, 56, 0.11);
    background-color: #fff;
`

export const Navdropcontainer = styled.div`
    display: flex;
    max-width: 1400px;
    margin-right: auto;
    margin-left: auto;
    background-color: #181a1b;
` 


export const Navcard = styled.div`
    display: flex;
    min-width: 120px;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 25px;
`


export const Navcard2 = styled.div`
    display: flex;
    min-width: 170px;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 25px;
`

export const Dropdownlink = styled.a`
    display: flex;
    
    padding: 20px 22px 16px;
    color: #cac5be;
    font-size: 16px;
    text-decoration: none;
    box-shadow: none;

    &:hover {
        //background-color: #f8faff;
        color: #5847f5 !important;
        outline: 1px solid #5847f5;
        //box-shadow: 0 0 0 1px #5847f5;
    }
`

export const Iconsquare = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 0 0 auto;
`

export const Navcontentimg = styled.img`
    width: 56px;
    border-radius: 8px;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
`

export const Navcontentwarp = styled.div`
    display: flex;
    padding-left: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`


export const Navlinkdetails = styled.div`
    color: #cac5be99;
    font-size: 14px;
`

export const Menutitle = styled.div`
    font-size: 16px;
`