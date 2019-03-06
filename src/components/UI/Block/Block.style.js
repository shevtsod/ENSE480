import styled from 'styled-components'

export const Block = styled.section`
  background-color: ${({ theme, backgroundColor }) =>
    theme.palette[backgroundColor] || backgroundColor || 'transparent'};
`

export const Content = styled.div`
  max-width: 1000px;

  margin: 0 auto;
  padding: 16px;

  word-break: break-word;
`
