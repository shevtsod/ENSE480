import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import Network from './Network'
import Controls from './Controls'
import Chart from './Chart'

import * as S from './style'

const Visualizer = ({
  network,
  playing,
  step,
  handleReset,
  handleStep,
  handlePlay,
  datasets,
  layers
}) => {
  // Handle play (run until paused)
  useEffect(() => {
    playing && handlePlay(network, datasets.training)
  })

  // Handle step (run for one epoch)
  useEffect(() => {
    step && handleStep(network, datasets.training)
  }, [step])

  // When layers change, reset the network
  useEffect(() => {
    handleReset(layers)
  }, [layers])

  return (
    <>
      <S.Controls as={Controls} handleReset={handleReset} />

      <S.Graphs>
        <Chart />
      </S.Graphs>

      <S.Network as={Network} />
    </>
  )
}

Visualizer.propTypes = {
  network: PropTypes.object.isRequired,
  playing: PropTypes.bool.isRequired,
  step: PropTypes.bool.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleStep: PropTypes.func.isRequired,
  handlePlay: PropTypes.func.isRequired,
  datasets: PropTypes.shape({
    training: PropTypes.arrayOf(
      PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
        value: PropTypes.number
      })
    ),
    testing: PropTypes.arrayOf(
      PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
        value: PropTypes.number
      })
    )
  }).isRequired,
  layers: PropTypes.arrayOf(PropTypes.number).isRequired
}

export default Visualizer
