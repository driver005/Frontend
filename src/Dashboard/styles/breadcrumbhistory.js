import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import styled, {keyframes} from 'styled-components'
import * as variables from './variables'

export const Breadcrumbcomponent = styled(Breadcrumb)`
    display: block;

    & > .breadcrumb {
        color: rgba(244,244,245,.6);
        margin-bottom: 1.5rem;
        margin-top: 0;
        padding: 0;
        display: flex;
        background-color: transparent;
    }

    div {
        flex-wrap: wrap;
        list-style: none;
        background-color: initial;
        border-radius: .3rem;
        display: flex;
        color: rgba(244,244,245,.6);
        margin-bottom: 1.5rem;
        margin-top: 0;
        padding: 0;
    }
`

export const Breadcrumbitem = styled(Breadcrumb.Item)`
    display: flex;

    &.active {
        color: rgba(244,244,245,.9);
        font-weight: 600;
    }


    &.breadcrumb-item + .breadcrumb-item {
        padding-left: .5rem;
        &::before {
            content: ">";
            color: #798892;
            display: inline-block;
            padding-right: .5rem;
        }
    }
`

export const Breadcrumbspan = styled.span`
    &.breadcrumb-item + .breadcrumb-item {
        padding-left: .5rem;
        &::before {
            content: ">";
            color: #798892;
            display: inline-block;
            padding-right: .5rem;
        }
    }
`

export const Strong = styled.strong`
    font-weight: 700;
`