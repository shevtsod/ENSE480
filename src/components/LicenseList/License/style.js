import styled from 'styled-components'
import { lighten } from 'polished'

export const Wrapper = styled.div``

export const Copyright = styled.div`
  padding-left: 32px;

  font-family: 'Roboto Mono', monospace;

  overflow-x: auto;
`

export const Link = styled.a`
  color: ${p => p.theme.palette.primary};

  &:hover {
    color: ${p => lighten(0.1, p.theme.palette.primary)};
  }

  &:active {
    color: ${p => lighten(0.2, p.theme.palette.primary)};
  }
`
