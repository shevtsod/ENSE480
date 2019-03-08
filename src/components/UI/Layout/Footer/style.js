import styled from 'styled-components'
import { darken } from 'polished'

export const Footer = styled.footer`
  color: ${({ theme }) => theme.palette.secondaryText};
  background-color: ${({ theme }) => theme.palette.secondary};
`

export const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 32px 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.a`
  font-size: 24px;

  &:hover {
    color: ${({ theme }) => darken(0.1, theme.palette.primaryText)};
  }

  &:active {
    color: ${({ theme }) => darken(0.2, theme.palette.primaryText)};
  }
`
