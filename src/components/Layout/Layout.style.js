import styled from 'styled-components'

export const StyledLayout = styled.div`
  font-family: 'Roboto', sans-serif;

  height: 100vh;

  display: grid;
  grid-template-areas:
    'header'
    'main'
    'footer';
  grid-template-columns: 1fr;
  grid-template-rows: 64px 1fr auto;
`

export const StyledGridArea = (el, area) => styled(el)`
  grid-area: ${area};
`
