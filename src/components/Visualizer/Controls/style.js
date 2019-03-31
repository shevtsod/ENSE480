import styled from 'styled-components'

export const Controls = styled.div`
  padding: 16px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  border-radius: 8px;

  background-color: ${p => p.theme.palette.tertiary};

  box-shadow: 0 10px 17px rgba(0, 0, 0, 0.15), 0 6px 6px rgba(0, 0, 0, 0.2);
`

export const Playback = styled.div`
  display: flex;
  align-items: center;

  > * {
    margin: 0 5px;
  }
`

export const Layers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PrimaryButton = styled.button`
  padding: 8px;

  border-radius: 50%;
`

export const PrimaryButtonIcon = styled.div`
  height: 46px;
  width: 46px;

  padding-left: ${p => (p.active ? '0' : '2px')};
`

export const SecondaryButton = styled.button`
  padding: 8px;

  border-radius: 50%;
`

export const SecondaryButtonIcon = styled.div`
  height: 24px;
  width: 24px;
`

export const LayersText = styled.div``

export const LayersButtons = styled.div`
  > * {
    margin: 0 5px;
  }
`

export const GlobalError = styled.div``

export const Epoch = styled.div``
