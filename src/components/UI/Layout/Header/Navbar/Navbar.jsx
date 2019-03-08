import React from 'react'
import PropTypes from 'prop-types'

import * as Styled from './style'

import Link from '../../../Link'

export const Navbar = ({ className, routes, location }) => {
  const { pathname } = location

  return (
    <Styled.Navbar className={className}>
      {routes
        .filter(({ navbar }) => navbar)
        .map(({ path, ...props }, i) => (
          <Styled.Link
            as={Link}
            key={i}
            path={path}
            active={pathname === path}
            inline={false}
            {...props}
          />
        ))}
    </Styled.Navbar>
  )
}

Navbar.propTypes = {
  className: PropTypes.string,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired
    })
  ).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
}

export default Navbar
