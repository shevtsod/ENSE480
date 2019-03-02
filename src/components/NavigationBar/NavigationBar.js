import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const NavigationBar = props => {
  const { divider, routes } = props

  return (
    <nav>
      {routes
        .map(({ path, label, external }, i) =>
          external ? (
            <a href={path}>{label}</a>
          ) : (
            <Link key={i} to={path}>
              {label}
            </Link>
          )
        )
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
