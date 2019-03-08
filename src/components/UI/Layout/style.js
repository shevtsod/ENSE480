import styled from 'styled-components'

export const Layout = styled.div`
  height: 100vh;

  display: grid;
  grid-template-areas:
    'main'
    'footer';
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
`

export const GridArea = styled.div`
  grid-area: ${({ area }) => area};
`

export const Main = styled(GridArea).attrs({
  area: 'main'
})`
  > :first-child {
    padding-top: 64px;
  }
`
