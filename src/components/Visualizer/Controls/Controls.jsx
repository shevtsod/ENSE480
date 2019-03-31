import React from 'react'
import PropTypes from 'prop-types'

import {
  IoMdRefresh,
  IoIosPlay,
  IoIosPause,
  IoIosArrowForward,
  IoIosAdd,
  IoIosRemove
} from 'react-icons/io'

import * as Styled from './style'

const Controls = ({
  className,
  layers,
  globalError,
  epoch,
  playing,
  handlePlay,
  handlePause,
  handleReset,
  handleStep,
  handleRemoveLayer,
  handleAddLayer
}) => {
  const padString = (number, padding) => {
    let string = String(number)

    // Pad with up to n zeroes
    while (string.length < padding) string = '0' + string

    // Every 3 characters, insert a comma
    for (let i = string.length - 1; i >= 0; i--) {
      if (i !== 0 && i % 3 === 0) {
        string =
          string.substring(0, i) + ',' + string.substring(i, string.length)
      }
    }

    return string
  }

  return (
    <Styled.Controls className={className}>
      {/* Playback Buttons */}
      <Styled.Playback>
        {/* Reset Button */}
        <Styled.SecondaryButton
          onClick={() => handleReset(layers, true)}
          title='Reset'
        >
          <Styled.SecondaryButtonIcon>
            <IoMdRefresh size={24} />
          </Styled.SecondaryButtonIcon>
        </Styled.SecondaryButton>

        {/* Play Button */}
        <Styled.PrimaryButton
          onClick={playing ? handlePause : handlePlay}
          title={playing ? 'Pause' : 'Play'}
        >
          <Styled.PrimaryButtonIcon active={playing}>
            {playing ? <IoIosPause size={46} /> : <IoIosPlay size={46} />}
          </Styled.PrimaryButtonIcon>
        </Styled.PrimaryButton>

        {/* Step Button */}
        <Styled.SecondaryButton onClick={handleStep} title='Next Epoch'>
          <Styled.SecondaryButtonIcon>
            <IoIosArrowForward size={24} />
          </Styled.SecondaryButtonIcon>
        </Styled.SecondaryButton>
      </Styled.Playback>

      <Styled.Layers>
        <Styled.LayersText>
          <b># of hidden layers:</b> {layers.length - 2}
        </Styled.LayersText>

        <Styled.LayersButtons>
          <Styled.SecondaryButton
            onClick={() => {
              if (layers.length - 2 <= 0) return
              handleRemoveLayer()
            }}
            disabled={layers.length - 2 <= 0}
          >
            <Styled.SecondaryButtonIcon>
              <IoIosRemove size={24} />
            </Styled.SecondaryButtonIcon>
          </Styled.SecondaryButton>

          <Styled.SecondaryButton
            onClick={() => {
              if (layers.length - 2 >= 6) return
              handleAddLayer()
            }}
            disabled={layers.length - 2 >= 6}
          >
            <Styled.SecondaryButtonIcon>
              <IoIosAdd size={24} />
            </Styled.SecondaryButtonIcon>
          </Styled.SecondaryButton>
        </Styled.LayersButtons>
      </Styled.Layers>

      <Styled.GlobalError>
        <b>Global Error:</b> {globalError.toFixed(4)}
      </Styled.GlobalError>

      <Styled.Epoch>
        <b>Epoch:</b> {padString(epoch, 6)}
      </Styled.Epoch>
    </Styled.Controls>
  )
}

Controls.propTypes = {
  className: PropTypes.string,
  layers: PropTypes.arrayOf(PropTypes.number).isRequired,
  globalError: PropTypes.number.isRequired,
  epoch: PropTypes.number.isRequired,
  playing: PropTypes.bool.isRequired,
  handlePlay: PropTypes.func.isRequired,
  handlePause: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleStep: PropTypes.func.isRequired,
  handleRemoveLayer: PropTypes.func.isRequired,
  handleAddLayer: PropTypes.func.isRequired
}

export default Controls
