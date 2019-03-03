import styled from 'styled-components'
import { darken } from 'polished'

export const StyledHeader = styled.header`
  height: 64px;
  width: 100%;

  position: fixed;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${({ theme }) => theme.secondaryText};
  background-color: ${({ theme }) => theme.primary};

  will-change: transform;
  transition: transform 200ms linear;

  /* Headroom.js classes */
  &.headroom--pinned {
    transform: translateY(0%);
  }
  &.headroom--unpinned {
    transform: translateY(-100%);
  }
`

export const StyledTitle = title => styled(title)`
  height: 100%;

  display: flex;
  align-items: center;

  padding: 16px;

  font-size: 24px;
  text-decoration: none;
  color: ${({ theme }) => theme.primaryText};

  &:hover {
    color: ${({ theme }) => darken(0.1, theme.primaryText)};
  }

  &:active {
    color: ${({ theme }) => darken(0.2, theme.primaryText)};
  }
`
