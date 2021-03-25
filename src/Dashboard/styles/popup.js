import styled, {keyframes} from 'styled-components'
import * as variables from './variables'
import { Form, Label, Input, Button } from 'reactstrap';

export const Formcomponent = styled(Form)`
    margin: 0 0.5rem 0 0.5rem;
    margin-bottom: 0.25rem;
    padding: 10px 40px;
`


export const Labelcomponent = styled(Label)`
    display: inline-block;
    margin-top: 0.25rem;
    margin-bottom: 0.5rem;
`


export const Inputcomponent = styled(Input)`
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 9px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`

export const Buttondiv = styled.div`
    display: block;
    padding: 0.5rem 8rem;
`

export const Buttoncomponent = styled(Button)`
    font-weight: 400;
    color: #212529;
    text-align: center;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    display: block;
    width: 100%;
    padding: 0.25rem 1rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.3rem;


    &.btn-primary {
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
    }


`

export const Buttonclose = styled.button`
    display: block;
    float: right;
    margin-top: 0.25rem;
    margin-bottom: 0.5rem;
    background-color: transparent;
    border: none;
`

export const Buttonspan = styled.span`
    color: ${variables.blue};
`

export const Startbutton = styled.button`
    display: inline-block;
    font-weight: 400;
    color: rgb(33, 37, 41);
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: transparent;
    font-size: 1rem;
    line-height: 1.5;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    border-image: initial;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
    color: rgb(0, 123, 255);
    border-color: rgb(0, 123, 255);

    &:hover {
        color: rgb(255, 255, 255);
        background-color: rgb(0, 123, 255);
        border-color: rgb(0, 123, 255);
    }

`

export const Examplewraper = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`