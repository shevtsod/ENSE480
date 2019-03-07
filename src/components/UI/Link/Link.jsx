import React from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'
import * as Icons from 'react-icons/io'

import * as Styled from './Link.style'

const Link = ({
  className,
  active,
  path,
  label,
  icon,
  external,
  target,
  rel,
  inline
}) => {
  const Icon = Icons[icon]

  return (
    <Styled.Link
      as={external ? 'a' : RouterLink}
      className={className}
      active={active ? 1 : 0}
      to={!external ? path : null}
      href={external ? path : null}
      target={target}
      rel={rel}
      inline={inline ? 1 : 0}
    >
      {icon && <Styled.Icon as={Icon} size={30} />}
      <Styled.Label hasIcon={!!icon}>{label}</Styled.Label>
    </Styled.Link>
  )
}

Link.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  path: PropTypes.string.isRequired,
  label: PropTypes.string,
  icon: PropTypes.string,
  external: PropTypes.bool,
  target: PropTypes.string,
  rel: PropTypes.string,
  inline: PropTypes.bool
}

Link.defaultProps = {
  inline: true
}

export default Link
