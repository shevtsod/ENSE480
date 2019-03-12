import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import Network from './Network'
import Controls from './Controls'

const Visualizer = ({
  network,
  playing,
  step,
  handleReset,
  handleStep,
  handlePlay
}) => {
  // Handle step (run for one epoch)
  useEffect(() => {
    console.log(step)
    step && handleStep(network)
  }, [step])

  // Handle play (run until paused)
  useEffect(() => {
    playing && handlePlay(network)
  })

  return (
    <>
      <Controls handleReset={handleReset} />
      <Network />
    </>
  )
}

Visualizer.propTypes = {
  network: PropTypes.object.isRequired,
  playing: PropTypes.bool.isRequired,
  step: PropTypes.bool.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleStep: PropTypes.func.isRequired,
  handlePlay: PropTypes.func.isRequired
}

export default Visualizer
