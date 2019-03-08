import React from 'react'
import PropTypes from 'prop-types'

import * as Styled from './style'

import Layer from './Layer'

const Network = ({ network }) => (
  <div>
    <Styled.Visualizer>
      <Layer title={'Input Layer'} nodes={network.inputLayer} />

      {network.hiddenLayers.map((layer, i) => (
        <Layer key={i} title={`Hidden Layer ${i + 1}`} nodes={layer} />
      ))}

      <Layer title={'Output Layer'} nodes={network.outputLayer} />
    </Styled.Visualizer>
  </div>
)

Network.propTypes = {
  network: PropTypes.object
}

export default Network
