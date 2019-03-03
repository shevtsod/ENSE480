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
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.2);
  }
`
