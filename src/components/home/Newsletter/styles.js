import styled from 'styled-components';

export const Sendbutton = styled.button`
    background-attachment: scroll !important;
    display: inline-block;
    text-decoration: none;
    line-height: normal;
    margin-top: 0px;
    padding: 16px 45px;
    border-radius: 100px;
    border: none;
    background-color: ${({primary}) => (primary ? 'var(--vdi-color)' : 'var(--bg-color)') };
    color: var(--text-color);
    font-size: 15px;
    line-height: 21px;
    outline: none;

    @media screen and (max-width: 479px)
    {
        width: 100%;
    }

`
