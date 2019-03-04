import styled from 'styled-components'

export const StyledFooter = styled.footer`
  color: ${({ theme }) => theme.secondaryText};
  background-color: ${({ theme }) => theme.secondary};
`

export const StyledFooterContent = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`
