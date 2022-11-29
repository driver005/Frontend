import styled, { keyframes } from 'styled-components'
import * as variables from './variables'
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
    InputGroup,
    Alert as UncontrolledAlert,
    Dropdown,
    NavDropdown,
    Collapse,
    Badge,
    ButtonGroup,
    Button,
    Form,
    FormGroup,
} from "react-bootstrap";
import SettingsIcon from '../Dashboard/components/Icons/SettingsIcon/SettingsIcon';



export const Headerroot = styled(Navbar)`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end !important;
    height: 64px;
    border: none;
    font-weight: 500;
    padding: .9rem 40px;
    
    @media (max-width: ${variables.sm}) {
        font-size: 1.25rem;
        padding: .9rem 15px;
    }

    ul > li > a {
        padding: 0.5rem 0.5rem
    }

`

export const Alert = styled(UncontrolledAlert)`
    height: 30px;
    padding-right: 0rem!important;
    background: ${variables.texttransparent};
    border: none;
    line-height: 20px;
    color: hsla(0,0%,100%,.6);
    border-radius: 10px;
    padding: 5px 8px;
    top: 8px;
    margin-right: 20% !important;
    opacity: 1;
    
    &.show-o {
        display: block;
    }

    button:not(:disabled) {
        cursor: pointer;
    }
    
    @media (max-width: ${variables.la}) {
        display: none!important;
    }

    button.close {
        position: relative;
        color: ${variables.iconcolor};
        float: right;
        top: 0;
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
        color: #3979f6;
        margin: 0px 5px;
        font-weight: 400;
        font-size: 18px!important;
        right: 5px!important;        
    }
    button > svg {
        vertical-align: bottom;
        overflow: hidden;
        fill: #3979f6;
    }
    

    &.input-transparent form-control {
        padding-left: ${variables.inputbtnpaddingx} !important;
    }

    @media (max-width: ${variables.la}) {
        display: none!important;
    }

    &.input-transparent form-control {
        padding-left: ${variables.inputbtnpaddingx} !important;
    }
  
`


export const Headericon = styled(SettingsIcon)`
    fill: ${variables.iconcolor};
`

export const Searchcollapse = styled(Collapse)`
    display: none;
    transition: height .2s ease-in-out;

    margin-right: 1.5rem;

    &.collapse &:not(.show) {
        display: none;
    }

    &.show {
        display: contents;
    }

    @media (max-width: ${variables.me}) {
        display: none;

        &.collapse {
            display: contents;
        }

        .navbarForm {
            width: auto;
            margin: 0 2.5641%;
        }
    }

    @media (max-width: 800px) {
        display: none!important;
    }

    @media (min-width: 991.98px){
        display: none!important;
    }    
`

export const Span = styled.span`
    color: rgba(244,244,245,.9);
    font-weight: 400;
`


export const Formcomponent = styled(Form)`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    margin-left: ${variables.spacer}!important;
    margin-right: ${variables.spacer}!important;

    @media (max-width: ${variables.me}) {
        display: none!important;
    }
`

export const Formgroup = styled(FormGroup)`
    margin-bottom: 1rem;

    @media (min-width: 656px) {
        flex: 0 0 auto;
        flex-flow: row wrap;
        display: flex;
        align-items: center;
        margin-bottom: 0;
    }
`

export const Inputgroup = styled(InputGroup)`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;

    @media (min-width: 656px) {
        width: auto;
    }
`

export const Inputgroupaddon = styled(InputGroup.Text)`
    display: flex;
    margin-right: -1px;
`



export const navbarFormFocused = `
    width: 240px;

    @media (max-width: ${variables.sm}) {
        width: auto;
    }
`

export const Navbarform = styled(InputGroup)`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
    padding: 0 0;
    margin-left: 10px;
    width: 200px;
    transition: width .2s ease-in-out;

    &.navbarFormFocused {
        ${navbarFormFocused}
    }

    @media (max-width: ${variables.sm}) {
        width: auto;
        margin: 0 2.5641%;
    } 

    input {
        font-size: 13px;
        color: white;
        background-color: transparentize(${variables.texttransparent}, 0.1);
        border: none;
        padding: 0.6rem 0.85rem 0.6rem 0;
        min-height: 30px !important;

        &:focus {
            box-shadow: ${variables.inputboxshadow} !important;
        }
    }
`

export const Inputaddon = styled(InputGroup.Text)`
    border: none;
    display: flex;
    margin-right: -1px;
    background-color: transparentize(${variables.texttransparent}, 0.1);
    transition: background-color ease-in-out 0.15s;
`

export const Inputgrouptext = styled(InputGroup.Text)`
    display: flex;
    align-items: center;
    padding: .5rem .75rem;
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    text-align: center;
    white-space: nowrap;
    background-color: rgba(0,0,0,.24);
    
`

export const Inputcomponent = styled(Form.Control)`
    font-size: 13px;
    color: ${variables.white};
    background-color: rgba(0,0,0,.21);
    border: none;
    //padding: .6rem .85rem .6rem .85rem!important;
    height: unset;
    min-height: 30px!important;
    position: relative;
    flex: 1 1 auto;
    width: 1%;
    min-width: 0;
    margin-bottom: 0;
    border: none;
    color: rgba(244,244,245,.9);
    background-color: #12142b;
    opacity: .8;
    border: 1px solid transparent;
    border-radius: 0rem .3rem .3rem 0rem;
    transition: border-color .15s ease-in-out,background-color .15s ease-in-out;
    
    &.form-control &:not(:first-child) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    &:focus {
        background-color: ${variables.bgcustomdark};
        z-index: 3;
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075)!important;
        background: ${variables.bgcustomdark};
    }
`

export const Navcomponent = styled(Nav)`
    display: flex!important;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 3px;
    margin-top: 0;
    list-style: none;
    height: 100%;
    
    @media (max-width: 767.98px) {
        width: 100%;
    }
`

export const Divider = styled(NavItem)`
    display: none;
    width: 1px;
    margin: 10px 14px;
    background: ${variables.contentcolor};

    @media (min-width: 656px)
    {
        display: block!important;
    }
`

export const Dropdowntoggle = styled(Dropdown.Toggle)`
    display: flex;
    align-items: center;
    color: rgba(0,0,0,.31);
    height: 100%;
    position: relative;
    background-color: initial!important;
    white-space: nowrap;
    cursor: pointer;
    transition: color .1s ease-in-out,background-color .1s ease-in-out,border-color .1s ease-in-out;
    
    &.dropdown-toggle {
        &::after {
            @import url("https://use.fontawesome.com/releases/v5.13.0/css/all.css");
            display: inline-block;
            margin-left: .255em;
            font-family: "Font Awesome 5 Free";
            content: '\f078'; 
            font-weight:900;
            border: none;
            width: auto;
            height: auto;
            vertical-align: initial;
            opacity: .8;
            font-size: 85%;
        }
    }

    &.text-white {
        color: ${variables.textcolor};
    }
`

export const Navitem = styled(NavItem)`
    font-size: 1.5rem;
    outline: 0;
    text-align: center;

    @media (min-width: 656px)
    {
        display: none!important;
    }
    
    @media (min-width: 768px) {
        display: block!important;
    }

    @media (max-width: 767.98px) {
        display: none;
    }

    
    &.d-lg-none {
        display: block!important; 
        @media (min-width: 992px) {
            display: none!important;
        }
    }

    &.d-md-none {
        display: block!important; 

        @media (min-width: 768px) {
            display: none!important;
        }
    }

    &:hover,
    &:focus {
      color: $white !important;
    }
  
    &.glyphicon,
    &.fa {
      vertical-align: baseline;
    }
`

export const Glyphicon = styled("div")`
    color: #3979F6;
`

export const Avatarimg = styled.img`
    height: auto;
    max-width: 100%;
    vertical-align: middle;
`

export const Imagecomponent = styled.img`
    float: left;
    width: 40px;
    margin-top: 7px;
    vertical-align: middle;
    border-style: none;
`

export const Imageaccount = styled("div")`
    width: 50px;
    margin-right: 5px;
`

export const Details = styled.div`
    margin-left: 10px;
    margin-top: 7px;
`

export const Text = styled.div`
    font-size: ${variables.fontsizesm};
    color: #ddd;
    
`

export const messages = `
    button {
        display: flex;
        height: 60px;
        font-weight: ${variables.fontweightbase};
        padding-left: ${variables.spacer};
        padding-right: ${variables.spacer};
    
        &:last-child {
            height: 30px;
            justify-content: center;
        }
    }
`

export const support = `
    &::after {
      @media (max-width: ${variables.xs}) {
        right: 102px;
      }
    }
  
    &.badge {
        padding-left: 5px;
        padding-right: 5px;
    }
  
    button {
        display: flex;
        padding: 5px 10px;
        font-weight: ${variables.fontweightbase};
    
        &:last-child {
            height: 30px;
            justify-content: center;
        }
    
        &.details {
            margin-left: 7px;
            font-size: ${variables.fontsizesm};
        }
    }
`

export const settings = `
    border-radius: 3px !important;
    width: 122px !important;
    text-align: center !important;
    min-width: auto;
    left: -40px !important;
  
    h6 {
      color: #fff;
    }
  
    &::after {
      right: 53px !important;
      left: auto;
    }
`

export const Dropdownmenu = styled(Dropdown.Menu)`
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 10rem;
    padding: .5rem 0;
    margin: .125rem 0 0;
    font-size: 1rem;
    color: #29323a;
    text-align: left;
    list-style: none;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: .3rem;
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 18%);
    background: ${variables.darkblue} !important;
    box-shadow: 0 0px 40px 2px rgba(#020202,.5);
    border: none;
    color: ${variables.white};
  
    &.messages {
      left: -50px !important;
    }
  
    @media (max-width: ${variables.xs}) {
      right: auto;
      left: -100px;
    }
  
    &::after {
      left: auto !important;
      right: 15px;
  
      @media (max-width: ${variables.xs}) {
        right: 112px;
      }
    }
  
    &.show {
      display: block!important;;
    }
  
    button:hover {
      background-color: ${variables.widgetbg};
    }
    &.messages {
        ${messages}
    }
    &.settings {
        ${settings}
    }
    &.support {
        ${support}
    }
`





export const Account = styled("div")`
    width: 180px !important;
  
    section {
      padding: 5px 10px;
      font-weight: normal;
    }
  
    button {
      padding: 7px 10px;
      font-weight: ${variables.fontweightthin};
  
      a {
        color: ${variables.white};
        padding: 0;
      }
  
      i {
        margin-right: 3px;
      }
    }
`



export const count = styled.span`
    position: absolute;
    bottom: 6px;
    right: 4px;
    font-size: 0.56rem;
    font-weight: normal;
    background: rgba(51, 51, 51, 0.55);
    color: rgba(255, 255, 255, 0.9);
    line-height: 1em;
    padding: 2px 4px;
    border-radius: 10px;
`

export const Notificationsmenu = styled(Dropdown)`
    > a {
      background-color: transparent!important;    
    }
  
    &.dropdown-menu {
      left: auto !important;
      right: 0 !important;
      top: ${variables.navbarheight} !important;
    }
  
    @media(max-width: 580px) {
      &.dropdown-menu {
        right: -50% !important;
      }
    }
`

export const Accountcheck = styled.span`
    color: ${variables.textcolor};
    font-weight: ${variables.fontweightnormal};
`

export const Notificationswrapper = styled(Dropdown.Menu)`
    position: absolute;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 10rem;
    padding: .5rem 0;
    font-size: 1rem;
    text-align: left;
    list-style: none;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: .3rem;
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 18%);
    width: min-content;
    margin: 0;
    color: ${variables.white};
    background-color: ${variables.black};
    left: auto!important;
    right: 9.5rem!important;
    top: 64px !important;
    padding-bottom: ${variables.breadcrumbpaddingy}!important;
    padding-top: ${variables.breadcrumbpaddingy}!important;

    @media (max-width: ${variables.xs}) {
        right: -50%!important;
    }

    &.show {
        display: block!important;
    }
`

export const Avatar = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    height: 40px;
    width: 40px;
    background: ${variables.blue};
    font-weight: 600;
    font-size: 18px;
    margin-right: 10px;
    text-align: center;
    position: relative;
    float: left!important;
    border-radius: 50%!important;
`

export const Badgecomponents = styled(Badge)`
    margin-left: 6px;
    margin-right: 3px;
    border-radius: 50%;
    padding: 4px 8px;
    color: #1B1E3F;
    background-color: ${variables.red}; 
    display: inline-block;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: initial;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    font-size: ${variables.fontsizemini};
    font-weight: ${variables.fontweightbold};
`

export const Badgenotification = styled(Badge)`
    display: inline-block;
    padding-left: 5px;
    padding-right: 5px;
    margin-top: 8px;
    color: ${variables.white};
    padding: 4px 8px;
    font-weight: 600;
    font-size: 14px;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: initial;
    border-radius: .3rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

    &.badge-danger {
        background-color: ${variables.red};
    }
    &.badge-warning {
        background-color: ${variables.orange};
    }
    &.badge-success {
        background-color: ${variables.green};
    }
    &.badge-info {
        background-color: ${variables.teal};
    }
    &.badge-danger {
        background-color: ${variables.red};
    }
`

export const Dropdowncomponent = styled(Dropdown)`
    display: none!important;
    position: relative;
    
    @media (min-width: 656px) {
        display: block!important;
    }
`

export const Navlink = styled(NavLink)`
    display: flex;
    align-items: center;
    color: rgba(0,0,0,.31);
    height: 100%;
    position: relative;
    padding: .5rem;
    font-size: 1.5rem;
    outline: 0;
    text-align: center;
    cursor: pointer;
    transition: color .1s ease-in-out,background-color .1s ease-in-out,border-color .1s ease-in-out;
    font-family: Open Sans,sans-serif;
    text-decoration: none;
    background-color: initial;

`


export const Dropdownitem = styled(Dropdown.Item)`
    width: 100%;
    padding: .125rem 1.5rem;
    clear: both;
    align-items: center;
    justify-content: flex-start;
    color: ${variables.textcolor};
    text-align: inherit;
    white-space: nowrap;
    background-color: initial;
    border: 0;
    display: flex;
    height: 50px;
    font-weight: ${variables.fontweightthin};
    padding-left: 1rem;
    padding-right: 1rem;
    transition: color .1s ease-in-out,background-color .1s ease-in-out,border-color .1s ease-in-out;
    font-family: Open Sans,sans-serif;
    text-transform: none;
    margin: 0;
    font-size: inherit;
    line-height: inherit;
    border-radius: 0;
`


export const Buttoncomponent = styled(Button)`
    color: #f4f4f5;
    background-color: #2477ff;
    border-color: #2477ff;
    box-shadow: inset 0 1px 0 rgb(244 244 245 / 15%), 0 1px 1px rgb(0 0 0 / 8%);
    z-index: 1;
    padding: .4rem .8rem;
    font-size: .875rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .1s ease-in-out,background-color .1s ease-in-out,border-color .1s ease-in-out;
    font-family: Open Sans,sans-serif;
    border: none;
    border-color: none;

    &.btn-group-vertical>.btn, .btn-group>.btn {
        position: relative;
        flex: 1 1 auto;
    }    

    &.btn:not(:disabled):not(.disabled) {
        cursor: pointer;
    }
    &.btn:not(:last-child):not(.dropdown-toggle) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    &.btn-primary:not(:disabled):not(.disabled).active {
        color: #f4f4f5;
        background-color: #005bf0;
        border-color: #0056e3;
    }
    &.btn:not(:disabled):not(.disabled).active {
        box-shadow: inset 0 3px 5px rgb(0 0 0 / 13%);
    }
`

export const Detailscomponent = styled(Details)`
    margin-left: 7px;
    font-size: ${variables.fontsizesm};
`

export const H6 = styled.h6`
    margin-top: 0;
    margin-bottom: .5rem;
    line-height: 1.2;
    color: #fff;
    font-weight: 300;
    font-size: 1rem;

`

export const Alertbutton = styled.button`
    
    background: transparent;
    border: 0;
    outline: 0;
    color: #1870dc;
    padding: 0;
    font-weight: 400;
    text-decoration: none;
    text-transform: none;
    overflow: visible;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    border-radius: 0;
    color: #2477ff;
`

export const Message = styled.div`
    position: absolute;
    width: 6px;
    height: 6px;
    bottom: 8px;
    right: 5px;
    background: #2d8515;
    color: hsla(0,0%,100%,.9);
    border-radius: 50%;
` 