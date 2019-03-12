import React from 'react'
import PropTypes from 'prop-types'

import * as Styled from './style'

import Layer from './Layer'
import Weights from './Weights'

const decimalPrecision = 4

const Network = ({ network }) => {
  return (
    <Styled.Visualizer>
      <Styled.Layers>
        <Layer title={'Input Layer'} nodes={network.inputLayer} />

        {network.hiddenLayers.map((layer, i) => (
          <Layer key={i} title={`Hidden Layer ${i + 1}`} nodes={layer} />
        ))}

        <Layer title={'Output Layer'} nodes={network.outputLayer} />
      </Styled.Layers>

      <Weights weights={network.weights} decimalPrecision={decimalPrecision} />
    </Styled.Visualizer>
  )
}

Network.propTypes = {
  network: PropTypes.object.isRequired
}

export default Network
