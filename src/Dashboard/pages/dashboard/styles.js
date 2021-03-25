import styled, {keyframes, createGlobalStyle } from 'styled-components'
import * as variables from '../../styles/variables'

export const Footer = styled.footer`
    margin: 0 (- ${variables.widgetpaddinghorizontal}) (- ${variables.widgetpaddingvertical});
    padding: ${variables.widgetpaddingvertical} ${variables.widgetpaddinghorizontal};
` 

export const Name = styled.h6`
    margin-top: 10px;
`

export const Listgroupitem = styled.button`
    &:hover {
        background-color: ${variables.bgaddition};
    }
`

export const Detail = styled.div`
    background: ${variables.widgetbgcolor} !important;
`

export const Td = styled.td`
    font-size: 1rem;
    vertical-align: middle;
`

export const SearchBtn = styled.button`
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
`