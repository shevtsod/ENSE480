import styled from 'styled-components'

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

export const StyledLogo = styled.img`
  padding: 8px;
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
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.2);
  }
`
