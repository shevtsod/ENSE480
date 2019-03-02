import React from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'

// Create internal or external link based on external prop
const Link = ({ external, path, label }) => {
  return external ? (
    <a href={path}>{label}</a>
  ) : (
    <RouterLink to={path}>{label}</RouterLink>
  )
}

const NavigationBar = ({ divider, routes }) => {
  return (
    <nav>
      {routes
        .map((props, i) => <Link key={i} {...props} />)
        .reduce((res, el, i) => [
          res,
          <span key={`divider-${i}`}>{divider}</span>,
          el
        ])}
    </nav>
  )
}

NavigationBar.propTypes = {
  divider: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      external: PropTypes.boolean
    })
  ).isRequired
}

NavigationBar.defaultProps = {
  divider: ' · '
}

export default NavigationBar
