import styled from 'styled-components'

export const Link = styled.a`
  height: 100%;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.palette.primaryText};
  text-decoration: none;
`

export const Icon = styled.img`
  @media only screen and (min-width: ${({ theme }) => theme.sizes.mobile}) {
    margin-right: 8px;
  }
`

export const Label = styled.span`
  @media only screen and (max-width: ${({ theme }) => theme.sizes.mobile}) {
    display: ${({ hasIcon }) => (hasIcon ? 'none' : 'inherit')};
  }
`
