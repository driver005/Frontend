import styled, {keyframes} from 'styled-components'
import * as variables from './variables'
import { Row, Col, Progress, Table, Label, Input } from "reactstrap";


export const Section = styled.section`
    color: rgba(244,244,245,.6);
    display: block;
    position: relative;
    margin-bottom: 40px;
    border-radius: 10px;
    background: rgba(0,0,0,.24);
    box-shadow: 0 25px 20px -20px rgb(0 0 0 / 10%), 0 0 15px rgb(0 0 0 / 6%);

    &.bg-transparent {
        box-shadow: none;
        transition: background-color .15s ease-in-out;
        background-color: transparent!important;
    }
`

export const Widgetcontrols = styled.div`
    position: absolute;
    z-index: 50;
    top: 0;
    right: 0;
    display: flex;
    padding: 14px;
    font-size: .820rem;

    button {
        display: flex;
        padding: 1px 4px;
        border-radius: 4px;
        color: #f4f4f5;
        background: transparent;
        border: none;
        transition: color .15s ease-in-out;
        text-transform: none;
        overflow: visible;
        margin: 0;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;

        button:not(:disabled) {
            cursor: pointer;
        }
    }

    button > i {
        display: inline-block;
        font-style: normal;
        font-feature-settings: normal;
        font-variant: normal;
        text-rendering: auto;
        line-height: 1;
        position: relative;
        top: 2px;
        font-weight: 900;
        font-family: "Font Awesome 5 Free";
    }
`


export const Headercomponents = styled.header`
    display: block;
    transition: padding .3s linear;
    padding: 15px 20px 0;
    color: rgba(244,244,245,.9);
    margin-top: 0;
`

export const Body = styled.div`
    padding: 15px 20px;

    &.pt-2{
        padding-top: .5rem!important;
    }
    &.px-0 {
        padding-left: 0!important;
    }
    &.py-0 {
        padding-bottom: 0!important;
    }
    &.px-0 {
        padding-right: 0!important;
    }
    &.py-0 {
        padding-top: 0!important;
}
`

export const Header = styled.header`
    display: block;
    transition: padding .3s linear;
    padding: 15px 20px 0;
    color: rgba(244,244,245,.9);
    margin-top: 0;
`