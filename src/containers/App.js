import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import routes from '../routes'
import NavigationBar from '../components/NavigationBar'

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <NavigationBar routes={routes.filter(({ navbar }) => navbar)} />

          <Switch>
            {routes
              .filter(({ external }) => !external)
              .map(({ path, component, exact }, i) => (
                <Route
                  key={i}
                  path={path}
                  exact={exact}
                  component={component}
                />
              ))}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
