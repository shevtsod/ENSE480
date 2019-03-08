import styled from 'styled-components'
import { darken } from 'polished'

export const Header = styled.header`
  height: 64px;
  width: 100%;

  position: fixed;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${({ theme }) => theme.palette.secondaryText};
  background-color: ${({ theme }) => theme.palette.primary};
  box-shadow: 0 10px 17px rgba(0, 0, 0, 0.15), 0 6px 6px rgba(0, 0, 0, 0.2);

  will-change: transform;
  transition: transform 200ms linear, box-shadow 200ms linear;

  /* Headroom.js classes */
  &.headroom--pinned {
    transform: translateY(0%);
  }

  &.headroom--unpinned {
    transform: translateY(-100%);
    box-shadow: none;
  }
`

export const Title = styled.a`
  height: 100%;

  padding: 16px;

  display: flex;
  align-items: center;

  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => darken(0.03, theme.palette.primary)};
  }

  &:active {
    background-color: ${({ theme }) => darken(0.06, theme.palette.primary)};
  }
`

export const Logo = styled.img`
  padding: 8px;
`

export const Label = styled.span`
  font-size: 24px;
  color: ${({ theme }) => theme.palette.primaryText};

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mobile}) {
    display: none;
  }
`
