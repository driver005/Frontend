import styled, {keyframes} from 'styled-components'
import * as variables from './variables'

export const ScheduleContainer = styled.div`
    overflow: auto;
    width: 100vw;
    height: 100vh;
    background: #000000;
    color: #ffffff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`

export const ScheduleStagewrapper = styled.div`
    display: inline-block;
`

export const Divider = styled.hr`
    position: sticky;
    left: 0;
    border: none;
    border-bottom: 1px solid var(--border);
`


export const ScheduleStage = styled.section`
    display: grid;
    grid-auto-columns: max-content;
    grid-auto-flow: column;
    grid-gap: 2rem;
    padding-bottom: 5rem;
    padding-top: 2rem;
    min-width: 100vw;

    &::after {
        content: "";
        width: var(--padding);
    }

    &:nth-child(1) > .schedule-stage__title > h3 {
        background: red;
        background: linear-gradient(to right, #eb3349, #f45c43);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    &:nth-child(3) > .schedule-stage__title > h3 {
        background: red;
        background: linear-gradient(to right, #1d976c, #93f9b9);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`


export const ScheduleStagetitle = styled.div`
    position: sticky;
    left: 0;
    padding-right: 5rem;
    height: 100%;
    padding-left: var(--padding);
    background: linear-gradient(to right, #000000 30%, hsla(0, 0%, 0%, 0));
    & > h3 {
        font-weight: 900;
    }
`


export const ScheduleStageguideContainer = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 280px;
    grid-gap: 2rem;
`


export const GuideSlot = styled.div`
    & > p {
        margin-bottom: 1rem;
    }
`


export const GuideSlotcard = styled.div`
    background: #0a0a0a;
    border: 1px solid;
    border-color: var(--border);
    border-radius: 0.8rem;
    font-size: 1.4rem;
    margin-bottom: 2rem;
    padding: 1.6rem;
    cursor: pointer;

    &:hover {
        border-color: #b3b3b3;
    }

    & > h4 {
        margin-right: 5rem;
        font-size: 1.4rem;
        color: #ffffff;
    }
`


export const AuthorWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
    & > picture {
            display: inline-block;
            inline-size: 2.6rem;
            block-size: 2.6rem;
            border-radius: 50%;
            overflow: hidden;
            margin-right: 1rem;
            border: 1px solid var(--border);
        & > img {
            inline-size: 100%;
            block-size: 100%;
            object-fit: cover;
        }
    }
`

export const H3 = styled.h3`
    font-size: 2.8rem;
`