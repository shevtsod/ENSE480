import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const NavigationBar = props => {
  const { divider, routes } = props

  return (
    <nav>
      {routes
        .map(({ path, label }, i) => (
          <Link key={i} to={path}>
            {label}
          </Link>
        ))
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
      path: PropTypes.string,
      label: PropTypes.string
    })
  ).isRequired
}

NavigationBar.defaultProps = {
  divider: ' · '
}

export default NavigationBar
