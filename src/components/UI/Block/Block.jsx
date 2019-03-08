import React from 'react'
import PropTypes from 'prop-types'

import * as Styled from './style'

const Block = ({ className, children }) => {
  return (
    <Styled.Block className={className}>
      <Styled.Content>{children}</Styled.Content>
    </Styled.Block>
  )
}

Block.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default Block
