import styled from 'styled-components'
import { darken } from 'polished'

export const Weights = styled.div`
  padding: 16px;

  border-radius: 8px;

  background-color: ${p => p.theme.palette.tertiary};

  box-shadow: 0 10px 17px rgba(0, 0, 0, 0.15), 0 6px 6px rgba(0, 0, 0, 0.2);
`

export const Title = styled.h2`
  text-align: center;
`

export const Container = styled.div`
  padding: 16px;

  font-family: 'Roboto Mono', monospace;
`

export const Layer = styled.div`
  padding: 8px;

  display: flex;
  align-items: center;
`

export const LayerTitle = styled.div`
  padding: 4px;

  border-radius: 4px;

  color: ${p => p.theme.palette.primaryText};
  background-color: ${p => p.theme.palette.primary};

  font-weight: bold;

  :hover {
    background-color: ${p => darken(0.05, p.theme.palette.primary)};
    transition: background 0.05s;
  }

  transition: background 0.5s ease-in;
`

export const LayerWeights = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

export const Matrix = styled.div`
  display: flex;
  flex-wrap: wrap;

  padding: 4px;
  margin: 4px;

  border-radius: 4px;

  background-color: ${p => darken(0.05, p.theme.palette.tertiary)};
`

export const Weight = styled.div`
  width: 150px;

  display: flex;
  justify-content: space-between;

  padding: 4px 16px;
  margin: 4px;

  border-radius: 4px;

  background-color: ${p => darken(0.1, p.theme.palette.tertiary)};

  :hover {
    background-color: ${p => darken(0.15, p.theme.palette.tertiary)};
    transition: background 0.05s;
  }

  transition: background 0.5s ease-in;
`

export const WeightKey = styled.span`
  font-weight: bold;
`

export const WeightValue = styled.span``
