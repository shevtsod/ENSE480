import styled from 'styled-components'

export const Link = styled.a`
  height: 100%;

  display: ${p => (p.inline ? 'inline' : 'flex')};
  align-items: center;

  color: ${p => p.theme.palette.primaryText};
  text-decoration: none;
`

export const Icon = styled.img`
  @media only screen and (min-width: ${p => p.theme.sizes.mobile}) {
    margin-right: 8px;
  }
`

export const Label = styled.span`
  @media only screen and (max-width: ${p => p.theme.sizes.mobile}) {
    display: ${p => (p.hasIcon ? 'none' : 'inherit')};
  }
`
