import React from 'react'
import PropTypes from 'prop-types'

import * as Styled from './Footer.style'

import Link from '../../Link'

export const Footer = ({ className, name, homeLink, authorName }) => {
  console.log(name)
  return (
    <Styled.Footer className={className}>
      <Styled.Content>
        <Styled.Link as={Link} {...homeLink} label={name} icon={null} />
        <span>{[authorName, '2019'].filter(Boolean).join(', ')}</span>
      </Styled.Content>
    </Styled.Footer>
  )
}

Footer.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  homeLink: PropTypes.object,
  authorName: PropTypes.string
}

export default Footer
