import styled from 'styled-components'

export const Node = styled.div`
  margin: 8px 0;
  padding: 16px;

  border: 1px solid ${p => p.theme.palette.tertiary};
  border-radius: 8px;

  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15), 0 6px 6px rgba(0, 0, 0, 0.2);
`

export const Title = styled.h3`
  margin: 0 0 16px 0;

  text-align: center;

  color: ${p => p.theme.palette.secondary};
`

export const Attributes = styled.div`
  font-family: 'Roboto Mono', monospace;
`

export const Attribute = styled.div`
  display: flex;
  justify-content: space-between;
`

export const AttributeKey = styled.span`
  font-weight: bold;
`

export const AttributeValue = styled.span``
