import styled from 'styled-components'

export const Layout = styled.div`
  min-height: 100vh;
  height: 100%;

  display: grid;
  grid-template-areas:
    'main'
    'footer';
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: minmax(0, 1fr) auto;
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
