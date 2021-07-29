import styled from 'styled-components'

export const Scrollsegment = styled.div`
    position: relative;
    display: block;
    overflow: hidden;
    //padding: 100px 3%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: calc(3400px + 50vh);
    overflow-y: hidden;
    margin: 50vh 0;

    @media screen and (max-width: 479px)
    {
        padding-top: 60px;
        padding-bottom: 60px;
    }

    @media screen and (max-width: 767px)
    {
        padding-top: 60px;
        padding-bottom: 60px;
    }

    & > .scrollmagic-pin-spacer >  div {
        display: contents;
    }
`