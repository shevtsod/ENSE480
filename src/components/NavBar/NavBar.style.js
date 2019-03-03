import styled from 'styled-components'
import { darken } from 'polished'

export const StyledNavBar = styled.nav`
  height: 100%;

  display: flex;
`

export const StyledLink = link => styled(link)`
  height: 100%;

  display: flex;
  align-items: center;

  padding: 16px;

  color: ${({ theme }) => theme.primaryText};
  background-color: ${({ active, theme }) =>
    active ? darken(0.1, theme.primary) : 'transparent'};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => darken(0.1, theme.primaryText)};
  }

  &:active {
    color: ${({ theme }) => darken(0.2, theme.primaryText)};
  }
`
