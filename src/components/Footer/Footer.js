import React from 'react'
import PropTypes from 'prop-types'

import { StyledFooter } from './Footer.style'

import withConfig from '../../hoc/withConfig'
import Block from '../Block'

export const Footer = ({ className, config }) => {
  const { name, author } = config

  return (
    <StyledFooter className={className}>
      <Block>
        <h2>{name}</h2>
        <span>{author.name}, 2019</span>
      </Block>
    </StyledFooter>
  )
}

Footer.propTypes = {
  className: PropTypes.string,
  config: PropTypes.object.isRequired
}

export default withConfig(Footer)
