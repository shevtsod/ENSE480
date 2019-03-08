import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import * as Styled from './style'

const App = ({ config, routes }) => (
  <ThemeProvider theme={config.theme}>
    <>
      <Styled.GlobalStyle />

      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          {routes
            .filter(({ external }) => !external)
            .map(({ path, component, exact }, i) => (
              <Route key={i} path={path} exact={exact} component={component} />
            ))}
        </Switch>
      </Router>
    </>
  </ThemeProvider>
)

App.propTypes = {
  config: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired
}

export default App
