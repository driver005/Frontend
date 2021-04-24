import styled, {keyframes} from 'styled-components'
import * as variables from './variables'
import { NavLink, withRouter } from 'react-router-dom';
import { Collapse, Badge, Alert, ProgressBar  } from 'react-bootstrap';


export const Nav = styled.nav`
    display: block;
    width: 200px;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: initial;
    color: ${variables.sidebarcolor};
    float: left;
    margin-left: 15px;
    transition: height 1s;
    transform: translateX(-200px);

    @media (max-width: ${variables.sm}) {
        margin-left: 0;
        padding: 0px;
    }

    &.sidebar-right {
        left: auto;
        right: 0;
        margin-left: 0;
        margin-right: 15px;
        transform: translateX(220px);
    }

    &.sidebar-hide {
        display: none;
    }
`

export const Header = styled.header`
    display: block;
    margin: 20px 0 55px;
    font-size: 18px;
    width: 100%;
    font-weight: 400;
    text-align: center;
    text-shadow: 4px 4px 15px rgb(57 121 246 / 30%);
    text-transform: uppercase;

    @media (max-width: ${variables.sm}){
        display: none;
    }
`

export const A = styled.a`
    color: #3979f6;
    padding: 0 5px;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    transition: color .1s ease-in-out,background-color .1s ease-in-out,border-color .1s ease-in-out;
    font-family: Open Sans,sans-serif;
    background-color: initial;
`

export const Span = styled.span`
    &.fw-bold {
        font-weight: 700;
    }
`


export const Ul = styled.ul`
    margin-bottom: 1rem;
    margin-top: 0;
    list-style: none;
    padding-left: 0;
    padding-bottom: 10px;
    overflow-y: auto;
    overflow-x: hidden;
`

export const Labelul = styled.ul`
    list-style-type: none;
    padding: 15px 15px 15px 20px;
    list-style: none;
    margin-top: 0;
    margin-bottom: 1rem;
`


export const Labela = styled.a`
    background-color: initial;
    cursor: pointer;
    transition: color .1s ease-in-out,background-color .1s ease-in-out,border-color .1s ease-in-out;
    font-family: Open Sans,sans-serif;
    font-size: .9rem;
    color: rgba(244,244,245,.9);
    text-decoration: none;
`

export const Labelspan = styled.span`
    font-size: 1rem;
    margin-left: 30px;
    font-weight: 400;
    opacity: 1;
    transition: opacity .3s ease-in-out;
`

export const I = styled.i`
    font-size: 6px;
    vertical-align: 2px;
    transition: margin-left .3s ease-in-out;

    &.text-success {
        color: #2d8515!important;
    }

    &.text-primary {
        color: #2477ff!important;
    }

    &.text-danger {
        color: #db2a34!important;
    }
`

export const H5 = styled.h5`
    line-height: 1.2;
    margin: 35px 0 5px 20px;
    font-size: 13px;
    font-weight: 700;
    color: #474e80;
    margin-bottom: 15px;
    transition: opacity .3s ease-in-out;
`

export const Projectdiv = styled.div`
    margin-top: 15px;
    margin-bottom: 2rem;
    transition: opacity .3s ease-in-out;
    opacity: 1;
`

export const Projectalert= styled(Alert)`
    border: none;
    font-size: .9rem;
    font-weight: 400;
    background: transparent;
    margin-bottom: 0;
    margin-right: 2px;
    padding: .5rem 11px .5rem 20px!important;
    padding-right: 15px;
    display: none;

    &.show {
        display: block!important;
    }

    button.close {
        border-radius: 0;
        margin: 0;
        font-family: inherit;
        overflow: visible;
        text-transform: none;
        float: right;
        background-color: initial;
        border: 0;
        font-weight: 300;
        font-size: 18px;
        text-shadow: none;
        opacity: 1;
        color: #fff;
        outline: none;
        padding: 0;
        position: static;
    }

    button > span {
        color: #3979f6;
        font-weight: 400;
    }
`

export const Projectspan = styled.span`
    font-size: .8rem;
    font-weight: 400;
`

export const Projectsmall = styled.small`
    font-size: 85%;
    font-weight: 400;
`

export const Projectprogress = styled(ProgressBar)`
    display: flex;
    overflow: hidden;
    height: .65rem;
    line-height: 0;
    font-size: .75rem;
    background-color: #e9ecef;
    border-radius: .3rem;
    box-shadow: inset 0 0.1rem 0.1rem rgb(0 0 0 / 10%);
    margin-bottom: .25rem!important;
    margin-top: .5rem!important;
    height: 5px;
    background: #474d84!important;

    & > .progress-bar {
        display: flex;
        overflow: hidden;
        flex-direction: column;
        justify-content: center;
        color: #f4f4f5;
        text-align: center;
        white-space: nowrap;
        background-color: #2477ff;
        transition: width .6s ease;
        box-shadow: none;
        transition: background-color .15s ease-in-out;

        &.bg-primary {
            background-color: #2477ff!important;
        }
        &.bg-danger {
            background-color: #db2a34!important;
        }
    }

    
`

// Linkgroup

export const Li = styled.li`
    overflow-y: hidden;

    &.dropdownelement {
        list-style: none;
    }
`

export const Navlink = styled(NavLink)`
    display: flex;
    position: relative;
    align-items: center;
    padding: 13px 20px;
    border-top: 1px solid transparent;
    white-space: nowrap;
    border-radius: .25rem;
    cursor: pointer;
    color: ${variables.white};
    transition: color .1s ease-in-out,background-color .1s ease-in-out,border-color .1s ease-in-out;
    font-family: Open Sans,sans-serif;

    &.active {
        font-weight: 900;
        font-size: 16px;
        & > span{
            background-color: #3979f6;
            color: #000;
        }
        & > span > svg {
            color: #0d2b47!important;
            fill: #0d2b47;
        }
    }

    &:hover {
        background-color: rgba(0,0,0,.07);
        text-decoration: none;
        color: inherit;
    }
`


export const Linkspan = styled.span`
    margin-right: .5rem;
    max-height: 32px;
    max-width: 32px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    color: #3979F6;
`

export const Linka = styled.a`
    display: flex!important;
    cursor: pointer;
    justify-content: left;
    font-size: 14px;
    font-weight: 400;
    position: relative;
    align-items: center;
    padding: 13px 20px;
    border-top: 1px solid transparent;
    white-space: nowrap;
    border-radius: .25rem;
    color: ${variables.white};

    &.active {
        font-weight: 900;
        font-size: 16px;
        & > span{
            background-color: #3979f6;
            color: #000;
        }
        & > span > svg {
            fill: #0d2b47;
        }
    }
    

    &:focus {
        background-color: rgba(0,0,0,.07);
    }

    &:hover {
        text-decoration: none;
        color: inherit;
        background-color: rgba(0,0,0,.07);
    }

    &:last-child > a {
        border-bottom: 1px solid transparent;
    }

    &.shown {
        & > b {
            transform: rotate(90deg);
        }
    }
`

export const B = styled.b`
    font-size: inherit;
    text-rendering: auto;
    position: absolute;
    right: 14px;
    display: flex;
    align-items: center;
    color: #3979f6;
    font-weight: 700;
    transition: transform .3s ease-in-out;
    top: auto;
`

export const Collapsecomponent = styled(Collapse)`
    border: none;
    box-shadow: none;
    margin: 0;
    border-radius: 0;
    color: #fff;
    background-color: rgba(18,20,43,.42);

    &.collapse:not(.show) {
        display: none;
    }

    &.show {
        display: block!important;
    }
`