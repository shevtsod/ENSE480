import React from 'react'
import PropTypes from 'prop-types'

import { StyledBlock, StyledBlockContent } from './style'

const Block = ({ className, children, backgroundColor }) => {
  return (
    <StyledBlock className={className} backgroundColor={backgroundColor}>
      <StyledBlockContent>{children}</StyledBlockContent>
    </StyledBlock>
  )
}

Block.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  backgroundColor: PropTypes.string
}

export default Block
