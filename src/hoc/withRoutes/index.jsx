import React from 'react'
import { RoutesContext } from '../../containers/App'

/*
HOC that returns a component with routes as a prop
*/
const withRoutes = Component => {
  return props => (
    <RoutesContext.Consumer>
      {routes => <Component {...props} routes={routes} />}
    </RoutesContext.Consumer>
  )
}

export default withRoutes
