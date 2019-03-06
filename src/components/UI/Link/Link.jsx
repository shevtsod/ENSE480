import React from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'
import * as Icons from 'react-icons/io'

import * as Styled from './Link.style'

const Link = ({ className, active, path, label, icon, external }) => {
  const Icon = Icons[icon]

  return (
    <Styled.Link
      as={external ? 'a' : RouterLink}
      className={className}
      active={active ? 1 : 0}
      to={!external ? path : null}
      href={external ? path : null}
    >
      {icon && <Styled.Icon as={Icon} size={30} />}
      <Styled.Label hasIcon={!!icon}>{label}</Styled.Label>
    </Styled.Link>
  )
}

Link.propTypes = {
  className: PropTypes.string,
  path: PropTypes.string.isRequired,
  label: PropTypes.string,
  icon: PropTypes.string,
  external: PropTypes.bool,
  active: PropTypes.bool
}

export default Link
