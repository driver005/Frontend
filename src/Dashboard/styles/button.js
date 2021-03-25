import { Button } from "reactstrap";
import styled, {keyframes} from 'styled-components'
import * as variables from './variables'

export const Buttonnotification = styled(Button)`
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    overflow: visible;
    text-transform: none;
    color: ${variables.white};
    padding: 1px 5px;
    font-size: 12px;
    line-height: 1.5;
    border-radius: 3px;
    border: 1px solid transparent;
    transition: color .1s ease-in-out,background-color .1s ease-in-out,border-color .1s ease-in-out;
    font-family: Open Sans,sans-serif;

    &.mr-1 {
        margin-right: .25rem!important;
    }

    &.btn-gray:not(.active), .btn-inverse:not(.active), .btn:not(.active) {
        box-shadow: none!important;
    }

    &.btn:not(:disabled):not(.disabled) {
        cursor: pointer;
    }

    &.btn-danger {
        background-color: ${variables.red};
    }
    &.btn-warning {
        background-color: ${variables.orange};
    }
    &.btn-success {
        background-color: ${variables.green};
    }
    &.btn-info {
        background-color: ${variables.teal};
    }
    &.btn-danger {
        background-color: ${variables.red};
    }
`