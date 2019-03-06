import React from 'react'
import PropTypes from 'prop-types'

import * as Styled from './Block.style'

const Block = ({ className, children, backgroundColor }) => {
  return (
    <Styled.Block className={className} backgroundColor={backgroundColor}>
      <Styled.Content>{children}</Styled.Content>
    </Styled.Block>
  )
}

Block.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  backgroundColor: PropTypes.string
}

export default Block
