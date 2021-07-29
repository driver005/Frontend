import styled, {keyframes} from 'styled-components'
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker'

export const Spinnercomponent = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    max-width: 1280px;
    width: 90%;

    @media only screen and (min-width: 993px) {
        width: 70%;
    }

    @media only screen and (min-width: 601px) {
        width: 85%;
    }
`

export const Paddingcontainer = styled.div`
    padding: 14rem 0rem;
    padding-bottom: 0rem;
    display: block;
    margin: 0 auto;
    max-width: 1280px;
    width: 90%;

    @media only screen and (min-width: 993px) {
        width: 70%;
    }

    @media only screen and (min-width: 601px) {
        width: 85%;
    }
`

export const Addcardcontainer = styled.div`
    padding: 2rem 0;
    position: relative;
    top: -10.6rem;
    margin-bottom: -2.8rem;
    text-align: right;
`


export const Addcard = styled.a`
    color: #fff;
    font-weight: 500;
    transition: .3s;
    font-size: 16pt;
    background: #ef5350;
    border-radius: 100%;
    padding: 1.2rem 1.5rem;
`

export const Addcardcontainermobile = styled(Link)`
    text-decoration: none;
    color: #6772e5;
    background-color: transparent;

    &.add-card-mobile {
        display: none;
    }
`

export const Filtercontainer = styled.div`
    position: relative;
    top: -13.4rem;
    margin-bottom: -6.5rem !important;
    margin: 0 auto;
    max-width: 1280px;
    width: 90%;
    
    @media only screen and (min-width: 993px) {
        width: 70%;
    }

    @media only screen and (min-width: 601px) {
        width: 85%;
    }
`

export const Filtersearch = styled.div`
    margin-bottom: 2rem;
    padding: 2rem 0;
    background-color: transparent;
    width: 60%;
    margin-right: auto;
    margin-left: auto;
    box-shadow: 0 1px 5px 0 rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%);
    padding: 0 1rem;
    border-radius: 5px;
`

export const Flexed = styled.div`
    display: flex;
    align-items: center;
`


export const Filterinput = styled.input`
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: .9rem 1rem .9rem 2.4rem;
    box-sizing: border-box;
    transition: all .2s ease;
    text-align: left;
    border: 1px solid #212121;
    border-radius: 2px;
    outline: none;
`

export const Filterselect = styled.select`
    outline: none;    
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    box-sizing: border-box;
    transition: all .2s ease;
    text-align: left;
    border: 1px solid #212121;
    border-radius: 2px;
    -webkit-appearance: none;
    background: #fff;
    margin: 1.2rem 0;
`



export const Filterbycontainer = styled.div`
    text-align: center;
    margin: 0 auto;
    max-width: 1280px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (min-width: 993px) {
        width: 70%;
    }

    @media only screen and (min-width: 601px) {
        width: 85%;
    }
`


export const Custombutton= styled.button`
    background-color: unset;
    border: none;
    -webkit-user-select: none;
    user-select: none;
    outline: none;

    &.purple-btn {
        border-color: #7274ff;
        color: #7274ff;
    }

    &.btn-outlined, .btn-outlined:hover {
        transition: all .5s;
    }

    &.btn-outlined {
        border-width: 3px;
        border-style: solid;
        padding: .8rem 3rem;
    }

    &.btn-rounded {
        border-radius: 30px;
    }


    &.btn {
        padding: 1rem 3rem;
        color: #fff;
        cursor: pointer;
    }

    &.filter-by .active-filter, .filter-by .active-filter:hover {
        background-color: #7274ff;
        color: #fff;
    }

    &.filter-by .active-filter {
        background-color: #7274ff;
        color: #fff;
    }

`

export const Custominput = styled.input`
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    box-sizing: border-box;
    transition: all .2s ease;
    text-align: left;
    border: 1px solid #212121;
    border-radius: 2px;
    outline: none;
    -webkit-appearance: none;
    padding: .9rem 1rem .9rem 2.4rem;
`

export const Deleteallcontainer = styled.div`
    padding: 1rem 0 3rem;
    text-align: center;
`

export const Deleteallbutton = styled.button`
    outline: none;
    background-color: unset;
    border: none;
    user-select: none;
    cursor: pointer;
    border-radius: 30px;
    border-width: 3px;
    border-style: solid;
    padding: .8rem 3rem;
    transition: all .5s;
    color: #fff;
    background-color: #f03f3f;
`


export const Taskwrapper = styled.div`
    margin-bottom: 2rem;
    padding: 2rem 0;
    width: 60%;
    margin-right: auto;
    margin-left: auto;
`


export const Taskcomponent = styled.div`
    &.single-task {
        color: #222;
        background-color: #fff;
        box-shadow: 0 1px 5px 0 rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%);
        padding: 0 1rem;
        border-radius: 2px;
        margin-bottom: 1rem;
    }

    &.single-task-done {
        background: #c6c6c6;
    }


`


export const Taskparameter = styled.div`
    display: block;
`

export const Taskparameterh4 = styled.div`
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;

`

export const Taskparameterdiv = styled.div`
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;

`

export const Taskparametertime = styled.div`
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
`

export const Taskdeletebutton = styled.div`
    text-align: right;
    padding: .2rem 0;
`

export const Taskcontent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    &.task-content .content {
        width: 90%;
        justify-content: space-between;
        display: flex;
    }
`


export const Taskcompleted = styled.div`
    &.completed {
        text-decoration: line-through;
    }
`

export const Taskspan = styled.span`
    padding: .2rem .5rem;
    border-radius: 1.5rem;
    color: #fff;

    &.Other {
        background: #ff5722;
    }

    &.Lifestyle {
        background: #4caf50;
    }

    &.Design {
        background: #009688;
    }

    &.Code {
        background: #673ab7;
    }
`

export const Completedinput = styled.input`
    display: none;
    -webkit-appearance: none;
    padding: .9rem 1rem .9rem 2rem;
    outline: none;
    z-index: 5;

    &.green-checkbox + i:before {
            border-color: #1fdeb3!important;
            color: hsla(0,0%,100%,0)!important;
    }

    &.green-checkbox:checked+i:before {
        color: #1fdeb3!important;
    }
`

export const Completedi = styled.i`
    &.fas {
        display: inline-block;
        font-style: normal;
        font-variant: normal;
        text-rendering: auto;
        line-height: 1;
    }
    &.fas {
        font-weight: 900;
    }
    &.fas {
        font-family: "Font Awesome 5 Free";
    }
    &.fa-check:before {
        content: "\f00c";
    }
    &::before {
        border: 1px solid #212121;
        padding: .4rem;
        border-radius: 100%;
    }
`

export const Editpart = styled.div`
    padding: 1rem 0;

    &.edit-part .edit {
        color: #1f97fa;
        border: none;
        background-color: transparent;
    }
`

export const Editpartlink = styled(Link)`
    color: #1f97fa;
`

// Taskform

export const Card = styled.div`
    background-color: #0b0e37;
    &.card .react-datepicker-wrapper {
        width: 100%;
        margin-top: 1.2rem;
    }

    &.card .react-datepicker-popper {
        left: 3rem!important;
    }

    &.card .react-datepicker__triangle {
        left: 22px!important;
    }
`

export const Datapicker = styled(DatePicker)`
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    box-sizing: border-box;
    transition: all .2s ease;
    text-align: left;
    border: 1px solid #212121;
    border-radius: 2px;
    outline: none;
    -webkit-appearance: none;
    padding: .9rem 1rem .9rem 2.4rem;

`


export const Select = styled.select`
    background: #fff;
    padding: .9rem 1rem .9rem 2.4rem;
    margin: 1.2rem 0;
    -webkit-appearance: none;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    box-sizing: border-box;
    transition: all .2s ease;
    text-align: left;
    border: 1px solid #212121;
    border-radius: 2px;
    outline: none;
`

export const Centertext = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2.5rem;
    margin-bottom: 2rem;
`