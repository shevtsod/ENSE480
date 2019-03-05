import React from 'react'
import PropTypes from 'prop-types'

import { StyledFooter, StyledFooterContent } from './style'

import withConfig from '../../hoc/withConfig'

export const Footer = ({ className, config }) => {
  const { name, author } = config

  return (
    <StyledFooter className={className}>
      <StyledFooterContent>
        <h2>{name}</h2>
        <span>{author.name}, 2019</span>
      </StyledFooterContent>
    </StyledFooter>
  )
}

Footer.propTypes = {
  className: PropTypes.string,
  config: PropTypes.object.isRequired
}

export default withConfig(Footer)
