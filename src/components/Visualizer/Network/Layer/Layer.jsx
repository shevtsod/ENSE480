import React from 'react'
import PropTypes from 'prop-types'

import * as Styled from './style'

// Rounding precision
const decimals = 4

const Layer = ({ title, nodes }) => {
  return (
    <Styled.Layer>
      <h2>{title}</h2>
      {nodes.map((node, i) => (
        <div key={i}>
          <h3>Node {node.id + 1}</h3>
          <p>
            <b>Bias: </b> {(node.bias || 0).toFixed(decimals)}
          </p>
          <p>
            <b>Output: </b> {(node.output || 0).toFixed(decimals)}
          </p>
          <p>
            <b>Error: </b> {(node.error || 0).toFixed(decimals)}
          </p>
        </div>
      ))}
    </Styled.Layer>
  )
}

Layer.propTypes = {
  title: PropTypes.string,
  nodes: PropTypes.arrayOf(
    PropTypes.shape({
      bias: PropTypes.number,
      Output: PropTypes.number,
      error: PropTypes.number
    })
  ).isRequired
}

Layer.defaultProps = {
  nodes: []
}

export default Layer
