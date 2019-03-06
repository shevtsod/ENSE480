import styled from 'styled-components'

export const Layout = styled.div`
  height: 100vh;

  display: grid;
  grid-template-areas:
    'header'
    'main'
    'footer';
  grid-template-columns: 1fr;
  grid-template-rows: 64px 1fr auto;
`

export const GridArea = styled.div`
  grid-area: ${({ area }) => area};
`
