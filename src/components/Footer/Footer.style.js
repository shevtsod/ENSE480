import styled from 'styled-components'

export const StyledFooter = styled.footer`
  text-align: center;

  color: ${({ theme }) => theme.secondaryText};
  background-color: ${({ theme }) => theme.secondary};
`
