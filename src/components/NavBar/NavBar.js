import React from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink, withRouter } from 'react-router-dom'

import { StyledNavBar, StyledLink } from './NavBar.style'

import withRoutes from '../../hoc/withRoutes'

// Create internal or external link based on external prop
const Link = ({ className, external, path, label }) => {
  return external ? (
    <a href={path} className={className}>
      <span>{label}</span>
    </a>
  ) : (
    <RouterLink to={path} className={className}>
      <span>{label}</span>
    </RouterLink>
  )
}

const StyledNavbarLink = StyledLink(Link)

export const NavBar = ({ className, routes, location }) => {
  const { pathname } = location

  return (
    <StyledNavBar className={className}>
      {routes
        .filter(({ navbar }) => navbar)
        .map((props, i) => (
          <StyledNavbarLink
            key={i}
            {...props}
            active={pathname === props.path}
          />
        ))}
    </StyledNavBar>
  )
}

NavBar.propTypes = {
  className: PropTypes.string,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      label: PropTypes.string,
      external: PropTypes.boolean
    })
  ).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
}

NavBar.defaultProps = {
  links: []
}

export default withRoutes(withRouter(NavBar))
