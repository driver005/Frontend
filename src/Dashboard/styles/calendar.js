import styled, {keyframes} from 'styled-components'
import * as variables from './variables'
import { Popover, PopoverHeader, PopoverBody, Tooltip, Col, Row} from 'reactstrap';
import FullCalendar from "@fullcalendar/react";

export const Calendercomponent = styled.div`
    width: 100%;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    color: rgba(244,244,245,.6);
    font-size: .9rem;
    overflow: visible;
`

export const Maincalender = styled.section`
    height: 100%;
    display: flex;
    flex-wrap: wrap;
`


export const Header = styled.header`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    color: rgba(244,244,245,.6);
`

export const Titleheader = styled.div`
    font-size: 1.2em;
    width: 100%;
    height: 70%;
    white-space: nowrap;
    background-color: initial;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export const I = styled.i`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1;
    height: 100%;
    transition: all .4s ease-in-out 0s;
`

export const Itemcontainer = styled.div`
    flex: 5 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    transition: all .4s ease-in-out 0s;
`

export const Itemcontainerspan = styled.span`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1;
    height: 100%;
    transition: all .4s ease-in-out 0s;
    flex: 3 1;
    color: rgba(244,244,245,.6);
    font-size: .9rem;
`


export const Daynamespan = styled.span`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1;
    height: 100%;
    transition: all .4s ease-in-out 0s;
    color: rgba(244,244,245,.6);
`

export const Daynames = styled.div`
    width: 100%;
    padding: 5px 0;
    background-color: initial;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export const Weekcontainer = styled.div`
    width: 100%;
    background: transparent;
    height: inherit;
    padding: 15px 0;
`

export const Mainweek = styled.div`
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`


export const Daymain = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1;
    height: 30px;
    width: 30px;
    visibility: hidden;
    height: 0;
`

export const Daynumber = styled.div`
    width: 28px;
    height: 28px;
    cursor: pointer;
    display: flex;
    margin: 3px 0;
    color: rgba(244,244,245,.6);
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`


export const Daycontainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1;
    height: 30px;
    width: 30px;

    & > .dayNumber {
        width: 28px;
        height: 28px;
        cursor: pointer;
        display: flex;
        margin: 3px 0;
        color: rgba(244,244,245,.6);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
    }

    &.differentMonth {
        visibility: hidden;
        height: 0;
    }

    &.today {
        background-color: rgba(0,0,0,.24);
    }

    &.hasEvents {
        & > .dayNumber {
            position: relative;
            color: rgba(244,244,245,.6);
            background-color: rgba(0,0,0,.15);
            border-radius: 50%;
            font-weight: 700;
        }
    }
`

export const Calendardot = styled.span`
    position: absolute;
    bottom: 0;
    width: 6px;
    height: 6px;
    border-radius: 6px;
    background-color: inherit;
`


export const Popovercomponent = styled(Popover)`
    &.show {
        display: block!important;
    }
    &.fade {
        transition: opacity .15s linear;
    }

    & > .popover {
        z-index: 1060;
        max-width: 276px;
        font-family: Open Sans,sans-serif;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5;
        text-align: left;
        text-align: start;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-break: normal;
        word-spacing: normal;
        white-space: normal;
        line-break: auto;
        font-size: .875rem;
        background-color: #ebeff1;
        background-clip: padding-box;
        border-radius: .35rem;
        position: absolute;
        display: block;
        border: none;
        box-shadow: none;

        &.show {
            display: block!important;
        }

        &.bs-popover-auto[x-placement^=bottom], .bs-popover-bottom {
            margin-top: .5rem;
        }

        &.bs-popover-auto[x-placement^=top], .bs-popover-top {
            margin-bottom: .5rem;
        }

        &.bs-popover-auto[x-placement^=bottom]>.arrow:before, .bs-popover-bottom>.arrow:before {
            top: 0;
            border-width: 0 .5rem .5rem;
            border-bottom-color: #ebeff1;
        }

        &.bs-popover-auto[x-placement^=bottom]>.arrow:after, .bs-popover-bottom>.arrow:after {
            top: 1px;
            border-width: 0 .5rem .5rem;
            border-bottom-color: #ebeff1;
        }

        &.bs-popover-auto[x-placement^=top]>.arrow, .bs-popover-top>.arrow {
            bottom: calc(-.5rem - 1px);
        }

        &.bs-popover-auto[x-placement^=bottom]>.arrow, .bs-popover-bottom>.arrow {
            top: calc(-.5rem - 1px);
        }

        &.bs-popover-auto[x-placement^=top]>.arrow:before, .bs-popover-top>.arrow:before {
            bottom: 0;
            border-width: .5rem .5rem 0;
            border-top-color: #ebeff1;
        }

        &.bs-popover-auto[x-placement^=top]>.arrow:after, .bs-popover-top>.arrow:after {
            bottom: 1px;
            border-width: .5rem .5rem 0;
            border-top-color: #ebeff1;
        }

        & > .arrow {
            position: absolute;
            display: block;
            width: 1rem;
            height: .5rem;
            margin: 0 .35rem;

            &::before {
                position: absolute;
                display: block;
                content: "";
                border-color: transparent;
                border-style: solid;
            }

            &::after {
                position: absolute;
                display: block;
                content: "";
                border-color: transparent;
                border-style: solid;
            }
        }
    }

    
`


export const Popoverheader = styled(PopoverHeader)`
    padding: .5rem .75rem;
    margin-bottom: 0;
    margin-top: 0;
    font-size: 1rem;
    background-color: #e2e8eb;
    border-bottom: 1px solid #d3dce0;
    border-top-left-radius: calc(.35rem - 1px);
    border-top-right-radius: calc(.35rem - 1px);
    border-bottom: none;
    color: #000;
    font-weight: 300;
    line-height: 1.2;
`

export const Popoverbody = styled(PopoverBody)`
    padding: .5rem .75rem;
    color: #29323a;
`


export const Fullcalendar = styled(FullCalendar)`
    & > .fc-header-toolbar > .fc-toolbar-chunk > .fc-button-group > .fc-button-primary {
        transition: color .1s ease-in-out,background-color .1s ease-in-out,border-color .1s ease-in-out;
        font-family: Open Sans,sans-serif;

        &:hover {
            color: #f4f4f5;
            background-color: #3a3e6b;
            border-color: #353a63;
        }

        &:active {
            color: #f4f4f5;
            background-color: #353a63;
            border-color: #31355b;
        }


    }

`

export const Colcomponent = styled(Col)`
    position: relative;
    width: 100%;
    padding-right: 20px;
    padding-left: 20px;

    &.col-12 {
        flex: 0 0 100%;
        max-width: 100%;
    }

    @media (min-width: 768px) {
        &.col-md-6 {
            flex: 0 0 50%;
            max-width: 50%;
        }
    }

    @media (min-width: 992px) {
        &.col-lg-9 {
            flex: 0 0 75%;
            max-width: 75%;
        }
        &.col-lg-8 {
            flex: 0 0 66.66667%;
            max-width: 66.66667%;
        }
        &.col-lg-4 {
            flex: 0 0 33.33333%;
            max-width: 33.33333%;
        }
    }

    @media (min-width: 1200px) {
        &.col-xl-8 {
            flex: 0 0 66.6666666667%;
            max-width: 66.6666666667%;
        }
    }
`

export const Rowcomponent = styled(Row)`
    display: flex;
    flex-wrap: wrap;
    margin-right: -20px;
    margin-left: -20px;
`

export const Pagetitle = styled.h1`
    color: rgba(244,244,245,.9);
    font-weight: 300;
    line-height: 1;
    margin: 11px 0 1.5rem;
    font-size: 2.5rem;
`

export const PageH3 = styled.h3`
    font-weight: 300;
    font-size: 1.75rem;
    margin-bottom: .5rem;
    line-height: 1.2;
    margin-top: 0;
`

export const Pagep = styled.p`
    margin-top: 0;
    margin-bottom: 1rem;
`

export const Draggableventslist = styled.div`
    margin-top: 20px;
    margin-bottom: 1.5rem;
` 

export const Draggablevent = styled.div`
    background-color: rgba(0,0,0,.24);
    border-radius: .3rem;
    margin: .5rem 0;
    padding: .5rem;
    
`

export const Draggableventinner = styled.div`
    font-size: .9rem;
    cursor: pointer;
    box-shadow: 0 25px 20px -20px rgb(0 0 0 / 10%), 0 0 15px rgb(0 0 0 / 6%);
`

export const PageI = styled.i`
    margin-right: 10px;
    margin-left: 5px;
    width: 1.28571em;
    text-align: center;
    &.text-success {
        color: #2d8515!important;
    }
    &.text-warning {
        color: #e49400!important;
    }
    &.text-primary {
        color: #2477ff!important;
    }
    &.text-danger {
        color: #db2a34!important;
    }
`