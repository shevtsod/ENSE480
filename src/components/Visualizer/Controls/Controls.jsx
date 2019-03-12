import React from 'react'
import PropTypes from 'prop-types'

import {
  IoMdRefresh,
  IoIosPlay,
  IoIosPause,
  IoIosArrowForward
} from 'react-icons/io'

import * as Styled from './style'

const Controls = ({
  epoch,
  playing,
  handlePlay,
  handlePause,
  handleReset,
  handleStep
}) => {
  return (
    <Styled.Controls>
      {/* Playback Buttons */}
      <Styled.Playback>
        {/* Reset Button */}
        <Styled.SecondaryButton onClick={handleReset} title='Reset'>
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

      <Styled.Epoch>
        <b>Epoch:</b> {epoch}
      </Styled.Epoch>
    </Styled.Controls>
  )
}

Controls.propTypes = {
  epoch: PropTypes.number.isRequired,
  playing: PropTypes.bool.isRequired,
  handlePlay: PropTypes.func.isRequired,
  handlePause: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleStep: PropTypes.func.isRequired
}

export default Controls
