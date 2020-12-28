import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: #E1E1E6;
    background-color: #232020
  }

  @media(max-width:1290px){
    html{
      font-size: 45%;
    }
  }

`
