import styled, {keyframes} from 'styled-components'


const h2 = `
    font-size: 26px;
    line-height: 1.5;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 30px;
    margin-bottom: 10px;
`


export const Formblock = styled.div`
    max-width: 600px;
    padding: 60px 80px 70px;
    border-radius: 30px;
    background-color: #fff;
    margin: 0 0 15px;
    box-shadow: 0 20px 50px -50px rgb(32 45 73 / 20%);
    margin-right: auto;
    margin-left: auto;
`


export const Formcomponent = styled.form`
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    text-align: left;
`


export const Formslider = styled.div`
    display: flex;
    position: relative;
    background: #ddd;
    height: auto;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: transparent;
    text-align: center;
`

export const Formmask = styled.div`
    display: flex;
    height: auto;
    position: relative;
    overflow: hidden;
    margin-right: -40px;
    margin-bottom: -40px;
    margin-left: -40px;
    padding-right: 40px;
    padding-bottom: 40px;
    padding-left: 40px;
    z-index: 1;
    left: 0;
    right: 0;
    white-space: nowrap;
`

export const Formslide = styled.div`
    width: 100%;
    margin-right: 40px;
    flex: 0 0 auto;
    vertical-align: top;
    width: 100%;
    white-space: normal;
    text-align: left;
    display: inline-block;
    position: relative;
    height: 100%;


    @media screen and (max-width: 767px)
    {
        width: 100%;
        flex: 0 0 auto;
    }
`

export const Formstep = styled.div`
    display: flex;
    height: 100%;
    margin-bottom: 20px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    @media screen and (max-width: 767px)
    {
        height: 100%;
    }
`

export const Stepnumber = styled.div`
    width: 100%;
    color: rgba(127,88,226,.5);
    font-size: 16px;
    font-weight: 900;
` 

export const Formheading = styled.h2`
    width: 100%;
    margin-bottom: 30px;
    font-size: 26px;
    font-weight: 900;
    ${h2};

    @media screen and (max-width: 767px)
    {
        font-size: 24px;
    }
`

export const Fieldsgroup = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: stretch;
`

export const Textfiledcontainer = styled.div`
    display: block;
    width: 48%;
    margin-bottom: 20px;
    width: ${({half, third}) => (half ? '48%' : third ? '31%' : '100%')};

    @media screen and (max-width: 479px)
    {
        width: ${({half, third}) => (half ? '100%' : third ? '31%' : '100%')};
    }
`

export const Textfiledwrapper = styled.div`
    position: relative;
    display: flex;
    padding: 19px 2px 15px;
    justify-content: space-between;
    align-items: center;
    flex: 0 0 auto;
    text-align: left;
    box-sizing: inherit;
    min-width: 136px;
    width: 100%;
`


export const Textfiledinput = styled.input`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    min-height: 60px;
    width: 100%;
    height: 100%;
    padding-right: 50px;
    padding-left: 20px;
    border-color: rgba(0,0,0,.05);
    border-radius: 10px;
    background-color: transparent;
    transition: border-color .3s ease;
    color: #7f58e2;
    font-size: 16px;
    border-style: solid;
    border-width: 2px;
    font-weight: 700;
    z-index: 2;
`


export const Filedlabel = styled.label`
    position: relative;
    top: 0;
    z-index: 1;
    display: inline-block;
    margin-left: 10px;
    padding-right: 10px;
    padding-left: 10px;
    margin-bottom: 5px;
    transition-duration: 300ms, 300ms, 300ms, 300ms;
    transition-timing-function: ease, ease, ease, cubic-bezier(0.25, 0.46, 0.45, 0.94);
    color: rgba(0,0,0,.3);
    font-size: 16px;
    line-height: 1.3;
    font-weight: 600;

    
    &.load {
        font-size: 12px;
        z-index: 3;
        background-color: white;
        transform: translate3d(0px, -26px, 0px)
    }
`


export const Textfileddone = styled.div`
    position: relative;
    display: flex;
    width: 1px;
    height: 1px;
    margin-right: 20px;
    margin-left: 20px;
    border-color: #7f58e2;
    border-radius: 50%;
    background-color: rgba(127,88,226,.2);
    background-image: url("https://uploads-ssl.webflow.com/5f394d9961229e6b6f95bdde/5f39686d3eba5d07fa347ad4_done-violet.svg");
    background-size: 11px;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    opacity: 0;
    border-style: solid;
    border-width: 2px;
    transition: height .3s cubic-bezier(.25,.46,.45,.94),width .3s cubic-bezier(.25,.46,.45,.94);
   

    &.active {
        width: 24px;
        height: 24px;
        opacity: 1;
    }
`


export const Formlabel = styled.div`
    width: 100%;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 600;
`


export const Formbutton = styled.button`
    min-height: 60px;
    padding: 15px 30px;
    flex: 1;
    border-radius: 10px;
    background-color: #7f58e2;
    transition: letter-spacing .3s ease,box-shadow .4s cubic-bezier(.25,.46,.45,.94),background-color .3s cubic-bezier(.25,.46,.45,.94);
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 2px;
    position: static;
    width: 100%;
    text-transform: uppercase;
    z-index: 4;
    left: auto;
    text-align: center;
    z-index: 10;

    @media screen and (max-width: 767px)
    {
        min-height: 50px;
        padding-right: 20px;
        padding-left: 20px;
        font-size: 14px;
    }
`


export const Showpassword = styled.i`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    z-index: 10;

    margin-right: 20px;
    margin-left: 20px;
` 