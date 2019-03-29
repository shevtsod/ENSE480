import styled from 'styled-components'

export const Visualizer = styled.div``

export const Layers = styled.div`
  padding-bottom: 16px;

  display: grid;
  grid-template-rows: auto;
  grid-gap: 8px;

  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media only screen and (max-width: 360px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`

export const Weights = styled.div`
  width: 100%;
`
