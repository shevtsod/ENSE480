import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import routes from '../routes'
import NavigationBar from '../components/NavigationBar'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavigationBar
            routes={routes.filter(route => route.navbar === true)}
          />

          <Switch>
            {routes.map(({ path, component, exact }, i) => (
              <Route key={i} path={path} exact={exact} component={component} />
            ))}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
