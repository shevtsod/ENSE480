import React from 'react'
import PropTypes from 'prop-types'

import * as Styled from './style'

import Node from './Node'

const decimalPrecision = 4

const Layer = ({ title, nodes }) => {
  return (
    <Styled.Layer>
      <Styled.Title>{title}</Styled.Title>

      {nodes.map((node, i) => (
        <Styled.Node
          as={Node}
          key={i}
          node={node}
          decimalPrecision={decimalPrecision}
        />
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
