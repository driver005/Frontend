import styled from 'styled-components'

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
    border-color: rgba(0,0,0,.8);
    border-radius: 10px;
    background-color: transparent;
    transition: border-color .3s ease;
    color: #7f58e2;
    font-size: 16px;
    border-style: solid;
    border-width: 2px;
    font-weight: 700;
    z-index: 2;
    outline: none;
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


export const Formlabel = styled.div`
    width: 100%;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 600;
`
