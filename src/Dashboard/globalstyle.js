import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Open Sans,sans-serif;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5;
    text-align: left;
    overflow-x: hidden;
    color: rgba(244,244,245,.9);
    background: #1b1e3f;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
  }
`

export default GlobalStyle