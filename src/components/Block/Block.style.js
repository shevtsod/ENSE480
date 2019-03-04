import styled from 'styled-components'

export const StyledBlock = styled.section`
  background-color: ${({ theme, backgroundColor }) =>
    theme[backgroundColor] || backgroundColor || 'transparent'};
`

export const StyledBlockContent = styled.div`
  max-width: 1000px;

  margin: 0 auto;
  padding: 16px;

  word-break: break-word;
`
