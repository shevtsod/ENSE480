import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono');

  * {
    box-sizing: border-box;
  }

  body {
    font-family: Roboto, sans-serif;
  }

  ${normalize()}
`
