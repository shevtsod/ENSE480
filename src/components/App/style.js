import { createGlobalStyle } from 'styled-components'
import { normalize, darken } from 'polished'

export const Global = createGlobalStyle`
  /* Roboto Font https://fonts.google.com/specimen/Roboto */
  @import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono');

  ${normalize()}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: Roboto, sans-serif;
  }

  button {
    padding: 0;
    margin: 0;

    display: inline-block;

    background: ${p => p.theme.palette.primary};
    color: #ffffff;
    
    border: none;
    
    cursor: pointer;

    font-family: sans-serif;
    font-size: 1rem;
    text-align: center;
    text-decoration: none;

    transition: background 250ms ease-in-out, 
                transform 150ms ease;

    -webkit-appearance: none;
    -moz-appearance: none;
}

  button:hover:not(:disabled),
  button:focus {
      background: ${p => darken(0.1, p.theme.palette.primary)};
  }

  button:active {
      transform: scale(0.99);
  }

  button:disabled {
    cursor: not-allowed;
    background-color: grey;
  }
`
