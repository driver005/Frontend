import styled, {keyframes} from 'styled-components'
import * as variables from './variables'
import { Row, Col, Progress, Table} from "reactstrap";


export const H1 = styled.h1`
    color: rgba(244,244,245,.9);
    font-weight: 300;
    line-height: 1;
    margin: 11px 0 1.5rem;
    font-size: 2.5rem;
`

export const Pnormal = styled.p`
    margin-top: 0;
    margin-bottom: 1rem;
`

export const Small = styled.small`
    color: rgba(244,244,245,.7);
    font-weight: 300;
    font-size: 75%;
`

export const Rowcomponent = styled(Row)`
    display: flex;
    flex-wrap: wrap;
    margin-right: -20px;
    margin-left: -20px;
`

export const Colcomponent = styled(Col)`
    position: relative;
    width: 100%;
    padding-right: 20px;
    padding-left: 20px;

    & > div {
        position: fixed;
        display: none;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: radial-gradient(farthest-side ellipse at 10% 0,#333867 20%,#17193b);
        background-repeat: no-repeat;
        background-size: cover;
        z-index: 55;
    }

    &.col-12 {
        flex: 0 0 100%;
        max-width: 100%;
    }
    
    @media (min-width: 992px) {
        &.col-lg-1 {
            flex: 0 0 8.33333%;
            max-width: 8.33333%;
        }   
            

        &.col-lg-4 {
            flex: 0 0 33.33333%;
            max-width: 33.33333%;
        }


        &.col-lg-6 {
            flex: 0 0 50%;
            max-width: 50%;
        }


        &.col-lg-7 {
            flex: 0 0 58.33333%;
            max-width: 58.33333%;
        }
    }

    @media (min-width: 1200px) {
        &.col-xl-4 {
            flex: 0 0 33.33333%;
            max-width: 33.33333%;
        }
    }

      

`

export const H5title = styled.h5`
    margin: 0;
    color: rgba(244,244,245,.9);
    font-weight: 300;
    font-size: 1.25rem;
    line-height: 1.2;

    &::after {
        display: block;
        clear: both;
        content: "";
    }
` 

export const Spantitle = styled.span`
    font-weight: 600;
`

export const P = styled.p`
    margin-top: 0;
    margin-bottom: 1rem;
    display: flex;
    font-size: 1rem;
    font-weight: 300;
`

export const Span = styled.span`
    color: rgba(244,244,245,.9)!important;
    border-radius: 50%;
    display: inline-block;
    padding: 2px;
    width: 1.5em;
    height: 1.5em;
    line-height: 1.5em;
    text-align: center;
    background-color: #474d84!important;

    &.not-svg{
        padding: 0px;
    }
`

export const Rowdiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -20px;
    margin-left: -20px;
` 

export const Coldiv = styled.div`
    position: relative;
    width: 100%;
    padding-right: 20px;
    padding-left: 20px;
    flex: 0 0 100%;
    max-width: 100%;

    @media (min-width: 768px) {
        flex: 0 0 75%;
        max-width: 75%;
    }
`

export const H6 = styled.h6`
    margin-top: 0;
    line-height: 1.2;
    margin-bottom: .5rem;
    font-size: 1rem;
    font-weight: 600;
`

export const Namep = styled.p`
    margin-top: 0;
    color: rgb(27 30 63)!important;
    font-size: .9rem;
    margin-bottom: .25rem;
`

export const Statusstrong = styled.strong`
    font-weight: 700;
    margin-left: 5px;
`


export const Progresscomponents = styled(Progress)`
    line-height: 0;
    font-size: .75rem;
    background-color: #e9ecef;
    border-radius: .3rem;
    box-shadow: inset 0 0.1rem 0.1rem rgb(0 0 0 / 10%);
    display: flex;
    overflow: hidden;
    height: 5px;
    margin-bottom: .5rem;
    background: #30314e;
    transition: background .15s ease-in-out;

    &:hover {
        background-color: ${variables.gray700}        
    }

    & > .bg-primary {
        background-color: ${variables.blue}!important;
    }

    & > .bg-danger {
        background-color: #db2a34!important;
    }

    & > .bg-success {
        background-color: #2d8515!important;
    }
`

export const Numberdiv = styled.div`
    text-align: center!important;
    flex: 0 0 100%;
    max-width: 100%;
    position: relative;
    width: 100%;
    padding-right: 20px;
    padding-left: 20px;

    @media (min-width: 768px) {
        flex: 0 0 25%;
        max-width: 25%;
    }
`

export const Numberspan = styled.span`
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    line-height: 1.5em;
    text-align: center;
    color: inherit!important;
    opacity: .8;
    width: 2.2em;
    height: 2.2em;
    line-height: 2.2em;
    border-radius: .35rem!important;
    background-color: #474d84!important;    
`


export const H6settings = styled.h6`
    margin-bottom: .5rem;
    font-weight: 500;
    line-height: 1.2;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1rem;
`

export const Inputdiv = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
    margin-top: 1rem;
` 

export const Inputcomponent = styled.input`
    display: block;
    width: 100%;
    height: calc(1.5em + 1rem + 2px);
    padding: .5rem .75rem;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5;
    border-radius: .3rem;
    overflow: visible;
    margin: 0;
    position: relative;
    flex: 1 1 auto;
    width: 1%;
    min-width: 0;
    margin-bottom: 0;
    background: #040620!important;
    box-shadow: none;
    font-family: Open Sans,sans-serif;
    transition: border-color .15s ease-in-out,background-color .15s ease-in-out;
    color: rgba(244,244,245,.6);
    border: 0!important;


    &.input-group>.form-control:not(:last-child) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
`


export const Inputbutton = styled.button`
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
    margin: 0;
    overflow: visible;
    text-transform: none;
    transition: color .1s ease-in-out,background-color .1s ease-in-out,border-color .1s ease-in-out;
    font-family: Open Sans,sans-serif;
    background: #474d84!important;
    color: rgba(244,244,245,.6);
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    &[type=submit]:not(:disabled), button:not(:disabled) {
        cursor: pointer;
    }

    &.btn-gray:not(.active), .btn-inverse:not(.active), .btn:not(.active) {
        box-shadow: none!important;
    }

    &.btn:not(:disabled):not(.disabled) {
        cursor: pointer;
    }

`

export const I = styled.i`
    color: inherit!important;
    opacity: .8;
`

export const H6title = styled.h6`
    margin: 0;
    line-height: 1.2;
    color: rgba(244,244,245,.9);
    font-weight: 300;
    font-size: 1rem;
`


export const Statsrow = styled.div`
    margin-bottom: 1.25rem;
    display: flex;
    align-items: center;
`

export const Statitem = styled.div`
    display: inline-block;
    padding-right: 1.25rem;

    &.stat-item + .stat-item {
        padding-left: 1.25rem;
        border-left: 1px solid rgba(0,0,0,.1);
    }
`

export const H6item = styled.h6`
    margin-top: 10px;
    margin-bottom: .25rem;
    font-size: .875rem;
    font-weight: 300;
    line-height: 1.2;
`


export const Newspan = styled.span`
    display: inline-block;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: initial;
    border-radius: .3rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    padding: 4px 8px;
    font-weight: 600;
    font-size: 14px;
    margin-right: .5rem!important;
    
    &.badge-success {
        color: #f4f4f5;
        background-color: #2d8515;
    }

    &.badge-success {
        color: #f4f4f5;
    }
`

export const Listgroup = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    border-radius: .3rem;
`

export const Undopadding = styled.div`
    margin: 15px -20px -15px;
`

export const Footer = styled.footer`
    display: block;
    margin-top: 15px;
    margin: .5rem -20px -15px;
    padding: 10px 20px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: rgba(0,0,0,.24)!important;
`


export const Footerinput = styled.input`
    display: block;
    width: 100%;
    height: calc(1.5em + .8rem + 2px);
    padding: .4rem .8rem;
    font-size: .875rem;
    line-height: 1.5;
    border-radius: .25rem;
    border: 0!important;
    color: rgba(244,244,245,.6);
    font-family: Open Sans,sans-serif;
    transition: border-color .15s ease-in-out,background-color .15s ease-in-out;
    background: #040620!important;
    box-shadow: none;
`


export const H3 = styled.h3`
    font-weight: 300;
    font-size: 1.75rem;
    margin-bottom: .5rem;
    line-height: 1.2;
`


export const Marketp = styled.p`
    margin-bottom: 1rem;
    margin-top: .5rem;
    font-size: .9rem;
    color: #c1ccd3!important;
`


export const Marketspan = styled.span`
    font-weight: 600;
`


export const Tablecomponent = styled(Table)`
    color: inherit;
    font-size: .875rem;
    width: 100%;
    margin-bottom: 1rem;
    border-collapse: collapse;

    &.table-striped tbody tr:nth-of-type(odd) {
        background-color: rgba(0,0,0,.24);
    }
`

export const Tablesdiv = styled.div`
    margin: 0 -20px -15px;

    &.widget-table-overflow td:first-child, .widget-table-overflow th:first-child {
        padding-left: 20px;
    }
`

export const TH = styled.th`
    vertical-align: bottom;
    border-bottom: 2px solid rgba(51,51,51,.35);
    border-top: none!important;
    border-bottom-width: 1px!important;
    text-transform: uppercase;
    font-weight: 600;
    text-align: inherit;
    padding: 6px;
    padding-left: 20px;
`

export const ABCcheckbox = styled.div`
    cursor: default;
    padding-left: 4px;
`

export const Inputcheckbox = styled.input`
    &.abc-checkbox input[type=checkbox], .abc-checkbox input[type=radio] {
        position: static;
        margin-left: 0;
        cursor: pointer;
        opacity: 0;
        z-index: 1;
    }
    input[type=checkbox], input[type=radio] {
        box-sizing: border-box;
        padding: 0;
    }
    &.mt-0, .mt-n-0 {
        margin-top: 0;
    }
    &.mt-0, .my-0 {
        margin-top: 0!important;
    }
    &.form-check-input {
        position: absolute;
        margin-top: .3rem;
        margin-left: -1.25rem;
    }
    button, input {
        overflow: visible;
    }
    button, input, optgroup, select, textarea {
        margin: 0;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }
`

export const Checkboxth = styled.th`
    
    &.widget-table-overflow .table.table-sm td {
        font-size: 1rem;
        vertical-align: middle;
    }
    &.table-sm>tbody>tr>td, .table-sm>tbody>tr>th, .table-sm>tfoot>tr>td, .table-sm>tfoot>tr>th, .table-sm>thead>tr>td, .table-sm>thead>tr>th {
        padding: 6px;
    }
    &.table-sm td, .table-sm th {
        padding: .3rem;
    }
    &.table td, .table th {
        padding: .75rem;
        vertical-align: top;
        border-top: 1px solid rgba(51,51,51,.35);
    }
    td {
        font-weight: 300;
    }
`

export const TD = styled.td`
    font-size: 1rem;
    vertical-align: middle;
    padding: 6px;
    border-top: 1px solid rgba(51,51,51,.35);
    font-weight: 300;

    &.fw-semi-bold {
        font-weight: 600;
    }
`


export const Rickshawdiv = styled.div`
    margin: 0 -20px -15px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    overflow: hidden;
`


export const Listgroupcalendar = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    border-radius: .3rem;
    font-size: .9rem;

    &.list-group .list-group-item {
        background-color: initial;
    }

    &.list-group:not(.list-group-sortable) .list-group-item {
        border-left: none;
        border-right: none;
    }
`

export const Calendarbutton = styled.button`
    position: relative;
    display: block;
    padding: .75rem 1.25rem;
    background-color: #f4f4f5;
    border: 1px solid rgba(0,0,0,.125);
    text-transform: none;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    transition: background .15s ease-in-out;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &[type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
        cursor: pointer;
    }

    &.list-group-item, .list-group-item:hover {
        color: rgba(244,244,245,.9);
    }
    &.list-group-item:first-child {
        border-radius: 0;
    }
    
    &.list-group-item:first-child {
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
    }
`

export const Timespan = styled.span`
    display: inline-block;
    font-size: .875em;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: initial;
    border-radius: .3rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    padding-right: .6em;
    padding-left: .6em;
    border-radius: 10rem;
    padding: 4px 8px;
    font-weight: 600;
    font-size: 14px;

    &.list-group-item>.badge {
        margin-top: 2px;
    }

    &.float-right {
        float: right!important;
    }

    &.badge-primary {
        color: #f4f4f5;
        background-color: #2477ff;
    }

    &.badge-success {
        color: #f4f4f5;
        background-color: #2d8515;
    }
`