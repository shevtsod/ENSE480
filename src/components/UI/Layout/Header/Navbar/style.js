import styled from 'styled-components'
import { darken } from 'polished'

export const Navbar = styled.nav`
  height: 100%;

  display: flex;
`

export const Link = styled.a`
  padding: 16px;

  background-color: ${({ theme, active }) =>
    active ? darken(0.06, theme.palette.primary) : 'transparent'};

  &:hover {
    background-color: ${({ theme }) => darken(0.03, theme.palette.primary)};
  }

  &:active {
    background-color: ${({ theme }) => darken(0.06, theme.palette.primary)};
  }
`
