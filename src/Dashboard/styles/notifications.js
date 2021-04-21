import styled, {keyframes} from 'styled-components'
import * as variables from './variables'
import {
    ButtonGroup,
    Button,
    ListGroup,
    ListGroupItem,
    ProgressBar 
} from 'react-bootstrap';



// Base


export const Notificationscomponent = styled.section`
    display: block;
    background: #1b1e3f;
    box-shadow: 0 0 40px 2px rgb(2 2 2 / 50%);
    border-radius: .3rem;
    height: 100%;
    border: none;

    @media (min-width: 768px) {
        width: 333px;
    }
`

export const Header = styled.header`
    display: block;
    padding: .75rem 1.25rem;
    margin-bottom: 0;
    background-color: rgba(0,0,0,.03);
    border-bottom: 1px solid rgba(0,0,0,.125);
    border-radius: 9px 9px 0 0;
`

export const Headerdiv = styled.div`
    text-align: center!important;
    margin-bottom: .5rem;
`

export const Headerstrong = styled.strong`
    font-weight: 700;
`

export const Buttongroup = styled(ButtonGroup)`
    position: relative;
    vertical-align: middle;
    display: flex;
`

export const Buttoncomponent = styled(Button)`
    display: inline-block;
    font-weight: 400;
    color: #29323a;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: initial;
    border: 1px solid transparent;
    padding: .5rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .3rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    color: #474d84;
    border-color: #474d84;
    padding: .4rem .8rem;
    font-size: .875rem;
    line-height: 1.5;
    border-radius: .25rem;
    cursor: pointer;
    transition: color .1s ease-in-out,background-color .1s ease-in-out,border-color .1s ease-in-out;
    font-family: Open Sans,sans-serif;
    flex: 1 1;

    [type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
        cursor: pointer;
    }

    &.btn-group-vertical>.btn, .btn-group>.btn {
        position: relative;
        flex: 1 1 auto;
    }

    &.btn:not(:disabled):not(.disabled) {
        cursor: pointer;
    }

    &.btn-group>.btn.active {
        z-index: 1;
    }

    &.btn:not(:disabled):not(.disabled).active {
        box-shadow: inset 0 3px 5px rgb(0 0 0 / 13%);
    }

    &.btn-outline-default:not(:disabled):not(.disabled).active {
        color: #f4f4f5;
        background-color: #474d84;
        border-color: #474d84;
    }

    &.btn-group>.btn:not(:last-child):not(.dropdown-toggle) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
`


export const Footer = styled.footer`
    display: block;
    padding: .75rem 1.25rem;
    background-color: rgba(0,0,0,.03);
    padding-top: 14px;
    padding-bottom: 14px;
    border-top: none;
    border-radius: 0 0 9px 9px;
`

export const Footerspan = styled.span`
    font-size: .9rem;
`

export const Syncbutton = styled.button`
    display: flex;
    font-weight: 400;
    color: #29323a;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: initial;
    border: 1px solid transparent;
    padding: .5rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .3rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    margin: 6px;
    overflow: visible;
    text-transform: none;
    font-weight: 400;
    padding-top: 0!important;
    padding-bottom: 0!important;
    background: transparent;
    border: 0;
    padding: 1px 5px;
    font-size: 12px;
    line-height: 1.5;
    border-radius: 3px;
    transition: color .1s ease-in-out,background-color .1s ease-in-out,border-color .1s ease-in-out;
    font-family: Open Sans,sans-serif;
    color: #666;
    text-decoration: none;
    cursor: pointer;
    float: right!important;

    [type=button], [type=reset], [type=submit], button {
        -webkit-appearance: button;
    }

    [type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
        cursor: pointer;
    }

    &.btn-gray:not(.active), .btn-inverse:not(.active), .btn:not(.active) {
        box-shadow: none!important;
    }

`



// Notifications


export const I = styled.i`
    padding-top: 14px;
    padding-bottom: 14px;
    border-top: none;
    padding: .75rem 1.25rem;
    background-color: rgba(0,0,0,.03);
    display: block;
    border-radius: 0 0 9px 9px;
`

export const Listgroup = styled(ListGroup)`
    display: block;
    height: 320px;
    overflow-y: scroll;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    border-radius: .3rem;
    /* Track */
    &::-webkit-scrollbar {
        background-color: #000;
        width: 10px;
        
    }

    &::-webkit-scrollbar-track {
        background-color: ${variables.darkblue};
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${variables.black};
    }

    &::-webkit-scrollbar-thumb:hover {
        background: ${variables.gray900}; 
    }


    &.list-group-item:first-child {
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
        border-radius: 0;
    }

    &:first-child {
        border-top: none;
        border-top-right-radius: 0;
        border-top-left-radius: 0;
        border: none!important;
    }

    &.list-group:not(.list-group-sortable) .list-group-item {
        border-left: none;
        border-right: none;
    }

    &.card-header+.list-group .list-group-item:first-child {
        border-top: 0;
    }



`

export const Listgroupitem = styled(ListGroupItem)`
    position: relative;
    display: block;
    padding: .75rem 1.25rem;
    border: 1px solid rgba(0,0,0,.125);
    color: rgba(244,244,245,.9);
    transition: background-color .15s ease-in-out;
    text-decoration: none;
    border-left: none;
    border-right: none;
    display: block;
    background-color: transparent;

    &.list-group-item:first-child {
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
    }

    &.list-group .list-group-item {
        background-color: initial;
    }


    &.list-group-item:first-child {
        border-radius: 0;
    }

    &.list-group:not(.list-group-sortable) .list-group-item {
        border-left: none;
        border-right: none;
    }

    &:first-child {
        border: none;
        border-top-right-radius: 0;
        border-top-left-radius: 0;
    }

    &.card-header+.list-group .list-group-item:first-child {
        border-top: 0;
    }
`

export const Listgroupitembutton = styled.button`
    position: relative;
    display: block;
    padding: .75rem 1.25rem;
    background-color: initial;
    border: 1px solid rgba(0,0,0,.125);
    color: rgba(244,244,245,.9);
    text-align: left!important;
    transition: background .15s ease-in-out;

    &.list-group-item:first-child {
        border-radius: 0;
    }

    &.list-group .list-group-item {
        background-color: initial;
       
    }

    &.list-group-lg .list-group-item {
        padding: 1.25rem;
    }


    &.list-group-item:first-child {
        border-radius: 0;
    }

    &.list-group:not(.list-group-sortable) .list-group-item {
        border-left: none;
        border-right: none;
    }


    &.card-header+.list-group .list-group-item:first-child {
        border-top: 0;
    }

    &button:not(:disabled) {
        cursor: pointer;
    }
`

export const Listgroupspan = styled.span`
    display: flex;
    margin-right: 1rem;
    float: left;
    position: relative;
    text-align: center;
    width: 34px;
    align-items: center;
    justify-content: center;
    &.image {
        margin-top: 1rem
    }
    &.icon {
        margin-top: 0.5rem
    }

`

export const Listgroupimg = styled.img`
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    border-radius: 50%!important;
    border-style: none;
`

export const A = styled.a`
    color: #1870dc;
    text-decoration: none;
    background-color: initial;
    cursor: pointer;
    transition: color .1s ease-in-out,background-color .1s ease-in-out,border-color .1s ease-in-out;
    font-family: Open Sans,sans-serif;
`

export const P = styled.p`
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: hidden!important;
    margin: 0!important;

    &.deemphasize {
        font-size: .9rem;
        color: #c1ccd3;
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
`

export const Time = styled.time`
    margin: 0!important;
    margin-top: 5px;
    font-size: .9rem;
    color: #c1ccd3;
    display: block;
    color: #1870dc!important;

    &.float-right {
        float: right!important;
    }
`

export const H6 = styled.h6`
    font-weight: 300;
    margin-bottom: .25rem!important;
    margin: 0!important;
    line-height: 1.2;
    font-size: 1rem;

    &.mb-1 {
        margin-bottom: .25rem!important;
    }

    &.fw-bold {
        font-weight: 700;
    }
`

export const Progresscomponents = styled(ProgressBar )`
    height: .65rem;
    line-height: 0;
    font-size: .75rem;
    background-color: #e9ecef;
    border-radius: .3rem;
    box-shadow: inset 0 0.1rem 0.1rem rgb(0 0 0 / 10%);
    display: flex;
    overflow: hidden;
    height: 10px;
    margin-bottom: .5rem;
    background: #30314e;
    transition: background .15s ease-in-out;

    &:hover {
        background-color: ${variables.gray700}        
    }

    & > .bg-primary {
        background-color: ${variables.blue}!important;
    }
`

export const Progressspan = styled.span`
    color: ${variables.gray400}!important;
    &.float-right {
        float: right!important;
    }

    &.help-block {
        margin-top: 5px;
        font-size: .9rem;
        color: #c1ccd3;
        display: block;
    }
`

export const Strong = styled.strong`
    font-weight: 700;
`