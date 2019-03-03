import React from 'react'
import PropTypes from 'prop-types'

import { StyledBlock, StyledBlockContent } from './Block.style'

const Block = ({ className, children }) => {
  return (
    <StyledBlock className={className}>
      <StyledBlockContent>{children}</StyledBlockContent>
    </StyledBlock>
  )
}

Block.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default Block
