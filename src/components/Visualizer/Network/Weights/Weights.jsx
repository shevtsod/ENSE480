import React from 'react'
import PropTypes from 'prop-types'

import * as Styled from './style'

const Weights = ({ weights, decimalPrecision }) => {
  return (
    <Styled.Weights>
      <Styled.Title>Weights</Styled.Title>

      <Styled.Container>
        {weights.map((layer, i) => (
          <Styled.Layer key={i}>
            <Styled.LayerTitle>
              L{i}
              {i + 1}
            </Styled.LayerTitle>

            <Styled.LayerWeights>
              {layer.map((matrix, j) => (
                <Styled.Matrix key={j}>
                  {matrix.map((value, k) => (
                    <Styled.Weight key={k}>
                      <Styled.WeightKey>
                        N{j + 1}
                        {k + 1}
                      </Styled.WeightKey>

                      <Styled.WeightValue>
                        {value.toFixed(decimalPrecision)}
                      </Styled.WeightValue>
                    </Styled.Weight>
                  ))}
                </Styled.Matrix>
              ))}
            </Styled.LayerWeights>
          </Styled.Layer>
        ))}
      </Styled.Container>
    </Styled.Weights>
  )
}

Weights.propTypes = {
  weights: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
  ).isRequired,
  decimalPrecision: PropTypes.number
}

export default Weights
