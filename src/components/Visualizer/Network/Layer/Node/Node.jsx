import React from 'react'
import PropTypes from 'prop-types'

import * as Styled from './style'

const Node = ({ className, node, decimalPrecision }) => (
  <Styled.Node className={className}>
    <Styled.Title>Node {node.id + 1}</Styled.Title>

    <Styled.Attributes>
      {Object.keys(node)
        .filter(key => key !== 'id')
        .map((key, i) => (
          <Styled.Attribute key={i}>
            <Styled.AttributeKey>{key}</Styled.AttributeKey>
            <Styled.AttributeValue>
              {node[key].toFixed(decimalPrecision)}
            </Styled.AttributeValue>
          </Styled.Attribute>
        ))}
    </Styled.Attributes>
  </Styled.Node>
)

Node.propTypes = {
  className: PropTypes.string,
  node: PropTypes.shape({
    id: PropTypes.number,
    bias: PropTypes.number,
    output: PropTypes.number,
    error: PropTypes.number
  }).isRequired,
  decimalPrecision: PropTypes.number
}

export default Node
