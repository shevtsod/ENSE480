import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { loadConfig } from '../../redux/actions/config'
import { loadRoutes } from '../../redux/actions/routes'

import Layout from '../../components/Layout'

export const ConfigContext = React.createContext({})
export const RoutesContext = React.createContext({})

export class App extends Component {
  static propTypes = {
    loadConfig: PropTypes.func
  }

  constructor(props) {
    super(props)
    props.initializeApp()
  }

  render() {
    const { config, routes } = this.props

    // Do not render the app until configuration is loaded
    if (!config) return null

    return (
      <Router basename={process.env.PUBLIC_URL}>
        <ConfigContext.Provider value={config}>
          <RoutesContext.Provider value={routes}>
            <ThemeProvider theme={config.theme}>
              <Layout>
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
              </Layout>
            </ThemeProvider>
          </RoutesContext.Provider>
        </ConfigContext.Provider>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  config: state.config,
  routes: state.routes
})

const mapDispatchToProps = dispatch => ({
  initializeApp: () => {
    dispatch(loadConfig())
    dispatch(loadRoutes())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
