import styled, {keyframes} from 'styled-components'
import * as variables from './variables'

export const Layoutroot = styled.div`
    height: 100%;
    position: relative;
    left: 0;
    transition: left ${variables.sidebartransitiontime} ease-in-out;
`

export const Main = styled.main`
    display: block;
    position: relative;
    flex-grow: 1;
    padding: 25px 40px 60px;

    @media (min-width: ${variables.xs}) {
        user-select: auto!important;
    }
`

export const Wrap = styled.div`
    position: relative;
    left: 0;
    transition: left .3s ease-in-out;
    min-height: 100vh;
    display: flex;
    margin-left: 200px;
    flex-direction: column;
    right: 0;

`

export const Layoutwrap = styled.div`
    position: relative;
    min-height: 100vh;
    display: flex;
    margin-left: ${variables.sidebarwidthopen};
    flex-direction: column;
    left: 0;
    right: 0;
    transition: left ${variables.sidebartransitiontime} ease-in-out;
    
    @media print {
        margin: 0;
    }

    @media (max-width: ${variables.sm}) {
        margin-left: 0;
        left: 0;
    }

    &.sidebar-right {
        margin-left: 0;
        margin-right: ${variables.sidebarwidthopen};
    }

    &.sidebar-hide {
        margin: 0;
    }
`

export const Layoutcontent = styled.main`
    position: relative;
    flex-grow: 1;
    // 20px for footer height
    padding: 25px ${variables.contentpadding} (${variables.contentpadding} + 20px);

    @media (max-width: ${variables.sm}) {
        padding: 20px 15px;
    }

    // hammers disallows text selection, allowing it for large screens
    @media (min-width: ${variables.sm}) {
        user-select: auto !important;
    }
  
`

export const Contentfooter = styled.footer`
    position: absolute;
    bottom: 15px;
    color: ${variables.textmuted};
`